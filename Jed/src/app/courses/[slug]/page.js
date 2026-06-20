import { client } from "../../../../Sainity/client.js";
import { courseBySlugQuery } from "../../../../Sainity/queries.js";
import { notFound } from "next/navigation";
import Link from "next/link";
import Footer from "../../../../components/Footer.jsx";
import { Star, Clock, BarChart, ChevronRight, CheckCircle2 } from "lucide-react";

const dummyReviews = [
  {
    _id: "dummy-1",
    author: "Priya Nair",
    role: "Enrolled, Visa Track",
    quote:
      "The breakdown of each module made a confusing process feel completely manageable. I knew exactly what to prepare at every step.",
    rating: 5,
  },
  {
    _id: "dummy-2",
    author: "Daniel Osei",
    role: "Enrolled, Professional Track",
    quote:
      "Genuinely well structured. The pacing respected my time and the instructors actually answered questions instead of reading slides.",
    rating: 5,
  },
  {
    _id: "dummy-3",
    author: "Mei Lin Tan",
    role: "Enrolled, Development Track",
    quote:
      "Worth every rupee. I went in unsure if I needed this and came out wishing I'd started a year earlier.",
    rating: 4,
  },
];

export default async function CourseDetailPage({ params }) {
  const { slug } = await params;
  const course = await client.fetch(courseBySlugQuery, { slug });

  if (!course) {
    notFound();
  }

  const reviews =
    course.reviews && course.reviews.length > 0 ? course.reviews : dummyReviews;

  const avgRating =
    reviews.reduce((sum, r) => sum + (r.rating || 0), 0) / reviews.length;

  return (
    <>
      {/* ---------- Hero ---------- */}
      <section className="relative bg-black pt-28 pb-16 md:pt-32 md:pb-20">
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_10%,rgba(220,38,38,0.35),transparent_55%)]" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-white/50 mb-8">
            <Link href="/" className="hover:text-white transition">
              Home
            </Link>
            <ChevronRight className="w-4 h-4" />
            <Link href="/#courses" className="hover:text-white transition">
              Courses
            </Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-white/80 truncate max-w-[180px]">
              {course.title}
            </span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-[1.6fr_1fr] gap-10 items-start">
            {/* Left: title block */}
            <div>
              <p className="text-red-500 font-bold text-sm uppercase tracking-[0.2em] mb-4">
                {course.category?.toUpperCase() || "COURSE"}
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.05] text-white mb-6">
                {course.title}
              </h1>

              <div className="flex flex-wrap items-center gap-x-6 gap-y-3 text-white/70 text-sm md:text-base">
                <span className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-red-500" />
                  {course.duration || "Self-paced"}
                </span>
                <span className="flex items-center gap-2">
                  <BarChart className="w-4 h-4 text-red-500" />
                  {course.level || "All levels"}
                </span>
                <span className="flex items-center gap-1">
                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  <span className="text-white font-semibold">
                    {avgRating.toFixed(1)}
                  </span>
                  <span className="text-white/50">
                    ({reviews.length} review{reviews.length !== 1 ? "s" : ""})
                  </span>
                </span>
              </div>
            </div>

            {/* Right: course image, framed as a card */}
            <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
              {course.image ? (
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-56 lg:h-64 object-cover"
                />
              ) : (
                <div className="w-full h-56 lg:h-64 bg-linear-to-br from-red-600 via-red-700 to-black" />
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ---------- Body: description + sticky enroll card ---------- */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-16 md:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-[1.6fr_1fr] gap-12 lg:gap-16">
            {/* Main column */}
            <div className="min-w-0">
              <h2 className="text-2xl md:text-3xl font-extrabold text-black mb-6">
                About this course
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed whitespace-pre-line">
                {course.description ||
                  "Full course details are being finalized — check back soon, or reach out and our team will walk you through everything."}
              </p>

              {/* What you'll walk away with — gives structure beyond a wall of text */}
              <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  "Step-by-step guidance from enrollment to completion",
                  "Direct access to instructors for questions",
                  "Practical material you can use immediately",
                  "Certificate recognized by our partner network",
                ].map((point, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-red-600 mt-0.5 shrink-0" />
                    <p className="text-gray-700">{point}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Sticky enroll sidebar — signature element */}
            <aside className="lg:sticky lg:top-24 self-start">
              <div className="rounded-2xl border border-gray-200 shadow-xl overflow-hidden">
                <div className="bg-black p-6">
                  <p className="text-white/60 text-sm mb-1">Course fee</p>
                  <p className="text-3xl font-extrabold text-white">
                    {course.price ? `₹${course.price.toLocaleString("en-IN")}` : "Contact us"}
                  </p>
                </div>
                <div className="p-6 space-y-5">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-500">Duration</span>
                    <span className="font-semibold text-black">
                      {course.duration || "Self-paced"}
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-500">Level</span>
                    <span className="font-semibold text-black">
                      {course.level || "All levels"}
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-500">Category</span>
                    <span className="font-semibold text-black">
                      {course.category || "General"}
                    </span>
                  </div>

                  <button className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-3 rounded-lg transition duration-300 cursor-pointer hover:scale-[1.02] transform">
                    Enroll Now
                  </button>
                  <Link
                    href="/#contact"
                    className="block text-center text-sm text-gray-500 hover:text-red-600 transition"
                  >
                    Have questions? Talk to us
                  </Link>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* ---------- Reviews ---------- */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex items-end justify-between mb-12 flex-wrap gap-4">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-red-600 mb-3">
                STUDENT REVIEWS
              </p>
              <h2 className="text-3xl md:text-4xl font-extrabold text-black">
                What students say
              </h2>
            </div>
            <div className="flex items-center gap-2">
              <Star className="w-6 h-6 fill-yellow-400 text-yellow-400" />
              <span className="text-2xl font-extrabold text-black">
                {avgRating.toFixed(1)}
              </span>
              <span className="text-gray-500">
                / 5 average from {reviews.length} review
                {reviews.length !== 1 ? "s" : ""}
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {reviews.map((review) => (
              <div
                key={review._id}
                className="bg-white rounded-xl p-8 border border-gray-200 hover:border-red-600 hover:shadow-xl transition duration-300"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(review.rating || 0)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 text-lg italic leading-relaxed">
                  &ldquo;{review.quote}&rdquo;
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-linear-to-br from-red-600 to-black rounded-full flex items-center justify-center text-white font-bold shrink-0">
                    {review.author?.charAt(0)}
                  </div>
                  <div className="ml-4">
                    <p className="font-bold text-black">{review.author}</p>
                    <p className="text-sm text-gray-600">{review.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}