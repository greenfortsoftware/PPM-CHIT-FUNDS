import { useState } from "react";
import { supabase } from "../supabase";


const SERVICES = ["Chit Fund","ULIP","Term","Annuity","Child Plan","Whole Life","Money Back","Endowment"];

function StarRating({ value, onChange }) {
  const [hovered, setHovered] = useState(0);
  return (
    <div className="flex gap-1">
      {[1, 2, 3, 4, 5].map((i) => (
        <button
          key={i}
          type="button"
          onMouseEnter={() => setHovered(i)}
          onMouseLeave={() => setHovered(0)}
          onClick={() => onChange(i)}
          style={{
            color: i <= (hovered || value) ? "#f59e0b" : "#94a3b8",
            fontSize: "36px",
            lineHeight: 1,
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: "0 2px",
            transition: "color 0.15s",
            WebkitTextFillColor: i <= (hovered || value) ? "#f59e0b" : "#94a3b8", // ✅ fixes webkit override
            textShadow: "none",
          }}
        >
          ★
        </button>
      ))}
    </div>
  );
}

export default function ReviewForm({ onClose, onReviewAdded }) {
  const [form, setForm] = useState({ name:"", mobile:"", email:"", service:"", message:"" });
  const [rating, setRating] = useState(0);
  const [errors, setErrors] = useState({});
  const [sending, setSending] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (key) => (e) => {
    const val = key === "mobile" ? e.target.value.replace(/\D/g,"") : e.target.value;
    setForm(p => ({ ...p, [key]: val }));
    setErrors(p => ({ ...p, [key]: "" }));
  };

  const validate = () => {
    const e = {};
    if (!rating) e.rating = "Select a rating.";
    if (form.name.trim().length < 2) e.name = "Enter your name.";
    if (!/^\d{10}$/.test(form.mobile)) e.mobile = "Enter a valid 10-digit number.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "Enter a valid email.";
    if (!form.service) e.service = "Select a service.";
    if (form.message.trim().length < 10) e.message = "Write at least 10 characters.";
    return e;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setSending(true);
    try {
      const { data, error } = await supabase
        .from("reviews")
        .insert({
          name: form.name,
          review_date: new Date().toISOString().slice(0, 10),
          rating,
          tag: form.service,
          text: form.message,
        })
        .select()
        .single();
      if (error) throw error;

      fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: import.meta.env.VITE_WEB3FORMS_KEY,
          subject: `New review from ${form.name} — ${rating}★`,
          name: form.name,
          phone: form.mobile,
          email: form.email,
          service: form.service,
          rating,
          message: form.message,
        }),
      }).catch(() => {});

      onReviewAdded && onReviewAdded(data);
      setSubmitted(true);
    } catch { setErrors({ submit: "Failed to submit. Try again." }); }
    finally { setSending(false); }
  };

  if (submitted) return (
    <div className="bg-white rounded-2xl p-10 text-center">
      <div className="text-5xl text-emerald-500">✓</div>
      <h3 className="text-xl font-semibold text-blue-950 mt-4 mb-2">Thank you for your review!</h3>
      <p className="text-sm text-slate-500">Your feedback has been received. We appreciate your time.</p>
      {onClose && (
        <button onClick={onClose} className="mt-6 px-5 py-2 rounded-lg bg-blue-950 text-white text-sm font-semibold hover:bg-blue-900">
          Close
        </button>
      )}
    </div>
  );

  return (
    <div className="bg-white rounded-2xl overflow-hidden">
      <div className="bg-blue-950 p-6 relative">
        {onClose && (
          <button
            onClick={onClose}
            aria-label="Close"
            className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full text-blue-200 hover:text-white hover:bg-white/10 text-lg leading-none"
          >✕</button>
        )}
        <div className="pr-10">
          <h2 className="text-xl font-semibold text-white">Share your experience</h2>
          <p className="text-sm text-blue-300 mt-1">Your feedback helps us serve better.</p>
        </div>
        <div className="mt-3 h-1 w-10 rounded-full bg-amber-400" />
      </div>

      <form onSubmit={handleSubmit} className="p-6 flex flex-col gap-4">
        <div>
          <label className="block text-xs font-semibold uppercase tracking-widest text-slate-500 mb-2">Your rating</label>
          <StarRating value={rating} onChange={(v) => { setRating(v); setErrors(p => ({...p, rating:""})); }} />
          {errors.rating && <p className="text-xs text-red-400 mt-1">⚠ {errors.rating}</p>}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[
            { key:"name", label:"Your name", type:"text", placeholder:"Rajesh Kumar" },
            { key:"mobile", label:"Mobile number", type:"tel", placeholder:"9876543210", maxLength:10 },
            { key:"email", label:"Email address", type:"email", placeholder:"you@example.com" },
          ].map(({ key, label, type, placeholder, maxLength }) => (
            <div key={key}>
              <label className="block text-xs font-semibold uppercase tracking-widest text-slate-500 mb-1.5">{label}</label>
              <input type={type} value={form[key]} onChange={handleChange(key)}
                placeholder={placeholder} maxLength={maxLength}
                className="w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2.5 text-sm text-slate-800 outline-none focus:border-amber-400" />
              {errors[key] && <p className="text-xs text-red-400 mt-1">⚠ {errors[key]}</p>}
            </div>
          ))}
          <div>
            <label className="block text-xs font-semibold uppercase tracking-widest text-slate-500 mb-1.5">Service used</label>
            <select value={form.service} onChange={handleChange("service")}
              className="w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2.5 text-sm text-slate-800 outline-none focus:border-amber-400">
              <option value="">Select a service</option>
              {SERVICES.map(s => <option key={s}>{s}</option>)}
            </select>
            {errors.service && <p className="text-xs text-red-400 mt-1">⚠ {errors.service}</p>}
          </div>
        </div>

        <div>
          <label className="block text-xs font-semibold uppercase tracking-widest text-slate-500 mb-1.5">Your review</label>
          <textarea rows={4} value={form.message} onChange={handleChange("message")}
            placeholder="Tell us about your experience with PPM Chits…"
            className="w-full resize-none rounded-lg border border-slate-200 bg-slate-50 px-3 py-2.5 text-sm text-slate-800 outline-none focus:border-amber-400" />
          {errors.message && <p className="text-xs text-red-400 mt-1">⚠ {errors.message}</p>}
        </div>

        {errors.submit && <p className="text-sm text-red-400 text-center">⚠ {errors.submit}</p>}

        <button type="submit" disabled={sending}
          className="w-full rounded-lg bg-blue-950 py-3 text-sm font-semibold text-white hover:bg-blue-900 disabled:opacity-60">
          {sending ? "Submitting…" : "Submit review"}
        </button>
      </form>
    </div>
  );
}