import React from "react";

const Home = () => {
  return (
    <>
      <section className="w-full min-h-screen bg-white pt-20">
        <div className="mx-auto h-full max-w-400 px-6 py-10 md:px-10 lg:px-14">
          <div className="grid h-full grid-cols-1 overflow-hidden rounded-2xl border border-white/10 bg-black shadow-2xl lg:grid-cols-2">
            <div className="flex flex-col justify-center px-8 py-12 md:px-14 lg:px-20">
              <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-red-500 md:text-base">
                Your one stop destination
              </p>
              <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-white md:text-6xl xl:text-7xl">
                Your
                <br />
                Gateway to
                <br />
                <span className="text-red-600">Global Success</span>
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/80 md:text-lg">
                Expert visa consultancy and world-class professional courses to
                accelerate your career. We transform ambitions into achievements
                across borders.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <button className="rounded-md bg-red-600 px-8 py-3.5 text-sm font-semibold text-white transition hover:bg-red-700 md:px-10 md:py-4 md:text-base">
                  Explore Courses
                </button>
                <button className="rounded-md border border-white/60 px-8 py-3.5 text-sm font-semibold text-white transition hover:bg-white hover:text-black md:px-10 md:py-4 md:text-base">
                  Visa Services
                </button>
              </div>
            </div>

            <div className="h-full bg-linearcls-to-br from-red-700 via-red-600 to-black">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.22),transparent_38%),radial-gradient(circle_at_80%_70%,rgba(255,255,255,0.12),transparent_35%)]" />
              <div className="relative flex h-full items-end justify-start p-8 md:p-10">
                <div className="rounded-lg border border-white/20 bg-black/35 px-5 py-4 backdrop-blur-sm">
                  <p className="text-xs uppercase tracking-[0.18em] text-white/70">
                    Trusted by global aspirants
                  </p>
                  <p className="mt-1 text-2xl font-bold text-white">10K+ Success Stories</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="flex h-screen w-full items-center justify-center bg-black">
        <div className="text-center text-white text-2xl">Section 2</div>
      </section>
      <section className="flex h-screen w-full items-center justify-center">
        <div className="text-center text-2xl">Section 3</div>
      </section>
      <section className="flex h-screen w-full items-center justify-center bg-black">
        <div className="text-center text-white text-2xl">Section 4</div>
      </section>
      <section className="flex h-screen w-full items-center justify-center">
        <div className="text-center text-2xl">Section 5</div>
      </section>
    </>
  );
};

export default Home;
