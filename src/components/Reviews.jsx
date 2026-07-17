import { useEffect, useState } from "react";
import { supabase } from "../supabase";
import ReviewForm from "./ReviewForm";

const AVATAR_STYLES = {
  "Chit Fund":  { bg: "bg-blue-100",    text: "text-blue-800"   },
  "Insurance":  { bg: "bg-emerald-100", text: "text-emerald-800" },
  "ULIP Policy":{ bg: "bg-purple-100",  text: "text-purple-800"  },
};
const DEFAULT_STYLE = { bg: "bg-amber-100", text: "text-amber-800" };

const TAG_STYLES = {
  "Chit Fund":   "bg-blue-50 text-blue-700",
  "ULIP":        "bg-purple-50 text-purple-700",
  "Term":        "bg-emerald-50 text-emerald-700",
  "Annuity":     "bg-amber-50 text-amber-700",
  "Child Plan":  "bg-pink-50 text-pink-700",
  "Whole Life":  "bg-rose-50 text-rose-700",
  "Money Back":  "bg-cyan-50 text-cyan-700",
  "Endowment":   "bg-orange-50 text-orange-700",
  "Insurance":   "bg-teal-50 text-teal-700",
};
const DEFAULT_TAG = "bg-slate-100 text-slate-600";

// Set the exact review IDs you want pinned as the first 3 cards, in order.
// Get these from your Supabase "reviews" table (the `id` column).
const FEATURED_IDS = [
  "REPLACE_WITH_REVIEW_ID_1",
  "REPLACE_WITH_REVIEW_ID_2",
  "REPLACE_WITH_REVIEW_ID_3",
];

function StarRating({ count }) {
  return (
    <div className="flex gap-0.5 shrink-0">
      {[1, 2, 3, 4, 5].map((i) => (
        <span key={i} className={i <= count ? "text-amber-400" : "text-slate-300"}>★</span>
      ))}
    </div>
  );
}

function initials(name) {
  return name.split(" ").map((w) => w[0]).slice(0, 2).join("").toUpperCase();
}

function formatDate(dateStr) {
  return new Date(dateStr).toLocaleDateString("en-US", { month: "long", year: "numeric" });
}

function ReviewCard({ id, name, review_date, rating, tag, text }) {
  const [expanded, setExpanded] = useState(false);
  const style = AVATAR_STYLES[tag] ?? DEFAULT_STYLE;
  const tagStyle = TAG_STYLES[tag] ?? DEFAULT_TAG;
  const isLong = text.length > 120;

  return (
    <div className="bg-white rounded-2xl border border-slate-100 p-4 sm:p-5 flex flex-col">
      <div className="flex gap-3 mb-3">
        <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold shrink-0 ${style.bg} ${style.text}`}>
          {initials(name)}
        </div>

        <div className="flex-1 min-w-0">
          <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
            <p className="font-semibold text-blue-950 text-sm truncate">{name}</p>
            <StarRating count={rating} />
          </div>
          <p className="text-xs text-slate-400 mt-0.5">{formatDate(review_date)}</p>
        </div>
      </div>

      <p className="text-sm text-slate-500 leading-relaxed">
        "{expanded || !isLong ? text : text.slice(0, 120) + "…"}"
      </p>

      {isLong && (
        <button
          onClick={() => setExpanded(p => !p)}
          className="mt-1 text-xs text-blue-600 hover:underline text-left"
        >
          {expanded ? "Read less" : "Read more"}
        </button>
      )}

      <span className={`inline-block mt-3 text-xs px-3 py-1 rounded-full w-fit ${tagStyle}`}>
        {tag}
      </span>
    </div>
  );
}

const PAGE_SIZE = 4;
const FOUNDED_YEAR = 1997;

export default function Reviews() {
  const [reviews, setReviews] = useState([]);
  const [stats, setStats] = useState({ avg: 0, count: 0 });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    async function fetchReviews() {
      const { data, error } = await supabase
        .from("reviews")
        .select("id, name, review_date, rating, tag, text")
        .order("review_date", { ascending: false });

      if (error) {
        setError(error.message);
      } else {
        setReviews(data);
        const count = data.length;
        const avg = count
          ? (data.reduce((s, r) => s + r.rating, 0) / count).toFixed(1)
          : 0;
        setStats({ avg, count });
      }
      setLoading(false);
    }
    fetchReviews();
  }, []);

  if (loading) return <p className="text-center py-10 text-slate-500">Loading reviews...</p>;
  if (error) return <p className="text-center py-10 text-red-600">Failed to load reviews: {error}</p>;

  // Pinned reviews first (in the order listed in FEATURED_IDS),
  // everything else sorted by highest rating.
  const featured = FEATURED_IDS
    .map((id) => reviews.find((r) => r.id === id))
    .filter(Boolean);
  const featuredIdSet = new Set(featured.map((r) => r.id));
  const rest = reviews
    .filter((r) => !featuredIdSet.has(r.id))
    .sort((a, b) => b.rating - a.rating);
  const sorted = [...featured, ...rest];

  return (
    <section className="bg-slate-100 px-4 py-10 md:px-8">
      <div className="mx-auto max-w-5xl">

        {/* Header */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-blue-950">What our clients say</h2>
          <div className="mt-2 h-1 w-12 rounded-full bg-amber-400" />
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-2 sm:gap-4 mb-8">
          {[
            { num: stats.avg, label: "Average rating", sub: "★★★★★" },
            { num: `${stats.count}+`, label: "Happy clients" },
            { num: `${new Date().getFullYear() - FOUNDED_YEAR}+`, label: "Years of trust" },
          ].map(({ num, label, sub }) => (
            <div key={label} className="bg-white rounded-xl border border-slate-100 px-2 py-3 sm:p-4 text-center">
              <p className="text-xl sm:text-3xl font-bold text-blue-950">{num}</p>
              {sub && <p className="text-amber-400 text-xs sm:text-sm">{sub}</p>}
              <p className="text-[11px] sm:text-sm text-slate-500 mt-1 leading-tight">{label}</p>
            </div>
          ))}
        </div>

        {/* Scrollable review box */}
        <div className="overflow-y-auto max-h-[520px] pr-1 rounded-xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {sorted.map((r) => (
              <ReviewCard key={r.id} {...r} />
            ))}
          </div>
        </div>

        {/* Leave a review button */}
        <div className="text-center mt-8">
          <button
            onClick={() => setShowForm(true)}
            className="px-6 py-3 rounded-full bg-blue-950 text-white text-sm font-semibold hover:bg-blue-900"
          >
            ★ Leave a review
          </button>
        </div>
      </div>

      {/* Popup */}
      {showForm && (
        <div
          className="fixed inset-0 z-50 flex items-stretch sm:items-center justify-center bg-black/50 sm:p-4"
          onClick={(e) => { if (e.target === e.currentTarget) setShowForm(false); }}
        >
          <div className="w-full h-full sm:h-auto sm:max-w-lg sm:max-h-[90vh] overflow-y-auto sm:rounded-2xl">
            <ReviewForm
              onClose={() => setShowForm(false)}
              onReviewAdded={(newReview) => {
                setReviews((prev) => {
                  const updated = [newReview, ...prev];
                  const avg = (updated.reduce((s, r) => s + r.rating, 0) / updated.length).toFixed(1);
                  setStats({ avg, count: updated.length });
                  return updated;
                });
              }}
            />
          </div>
        </div>
      )}
    </section>
  );
}