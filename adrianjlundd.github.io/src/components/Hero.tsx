import React, { useState } from "react";
import Globe from "./Globe";

type HeroProps = {
  name?: string;
  role?: string;
  tagline?: string;
  githubUrl?: string;
  linkedinUrl?: string;
};

const Hero: React.FC<HeroProps> = ({
  name = "NAME",
  role = "ROLE",
  tagline = "TAGLINE (kort setning om hva du bygger / hva du liker / hva du soker)",
  githubUrl = "https://github.com/USERNAME",
  linkedinUrl = "https://www.linkedin.com/in/USERNAME/",
}) => {
  const [rotate, setRotate] = useState(true);

  return (
    <section id="top" className="relative" aria-label="Hero">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-32 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-cyan-300/10 blur-3xl" />
        <div className="absolute right-0 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full bg-rose-500/10 blur-3xl" />
      </div>

      <div className="relative mx-auto min-h-[82vh] max-w-6xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        <div className="relative flex min-h-[70vh] items-center">
          <div className="relative z-20 w-full max-w-3xl">
            <p className="text-sm font-medium uppercase tracking-[0.18em] text-white/60">Portfolio</p>
            <h1 className="mt-3 text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
              {name}
            </h1>
            <p className="mt-4 text-lg text-white/80 sm:text-xl">{role}</p>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/70 sm:text-lg">{tagline}</p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#projects"
                className="inline-flex items-center justify-center rounded-xl bg-white px-5 py-3 text-sm font-medium text-black transition hover:bg-white/90 focus:outline-none focus:ring-2 focus:ring-white/30"
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-xl border border-white/20 bg-white/10 px-5 py-3 text-sm font-medium text-white transition hover:bg-white/15 focus:outline-none focus:ring-2 focus:ring-white/30"
              >
                Contact
              </a>
              <button
                type="button"
                onClick={() => setRotate((value) => !value)}
                className="inline-flex items-center justify-center rounded-xl border border-white/20 bg-white/5 px-5 py-3 text-sm font-medium text-white transition hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/30"
              >
                Toggle Rotation
              </button>
            </div>

            <div className="mt-4 flex flex-wrap items-center gap-3">
              <a
                href={githubUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-medium text-white/90 transition hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/30"
                aria-label="Open GitHub profile"
              >
                <GitHubIcon className="h-5 w-5" />
                GitHub
              </a>

              <a
                href={linkedinUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-medium text-white/90 transition hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/30"
                aria-label="Open LinkedIn profile"
              >
                <LinkedInIcon className="h-5 w-5" />
                LinkedIn
              </a>
            </div>
          </div>
        </div>

        <div className="pointer-events-none absolute right-[-4rem] top-1/2 z-10 h-[40rem] w-[40rem] -translate-y-1/2 sm:h-[40rem] sm:w-[40rem] lg:right-[-6rem] lg:h-[48em] lg:w-[48rem]">
          <div className="absolute -inset-10 rounded-full bg-white/10 blur-3xl" />
          <Globe className="relative h-full w-full" rotate={rotate} />

          <div className="absolute left-[30%] top-[58%] rounded-full bg-red-500 px-2 py-1 text-[10px] font-semibold uppercase tracking-wide text-white shadow-lg">
            Bergen
          </div>
          <div className="absolute left-[40%] top-[44%] rounded-full bg-red-500 px-2 py-1 text-[10px] font-semibold uppercase tracking-wide text-white shadow-lg">
            Trondheim
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

function GitHubIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 .5C5.73.5.75 5.62.75 12c0 5.1 3.29 9.43 7.86 10.96.58.11.79-.26.79-.56v-2.03c-3.2.71-3.88-1.39-3.88-1.39-.53-1.38-1.29-1.75-1.29-1.75-1.05-.74.08-.73.08-.73 1.16.08 1.77 1.22 1.77 1.22 1.03 1.8 2.7 1.28 3.36.98.1-.77.4-1.28.73-1.57-2.55-.3-5.23-1.31-5.23-5.82 0-1.29.45-2.34 1.2-3.17-.12-.3-.52-1.52.12-3.16 0 0 .98-.32 3.2 1.21.93-.27 1.93-.4 2.93-.4s2 .13 2.93.4c2.22-1.53 3.2-1.21 3.2-1.21.64 1.64.24 2.86.12 3.16.75.83 1.2 1.88 1.2 3.17 0 4.52-2.68 5.52-5.24 5.81.41.37.78 1.1.78 2.22v3.29c0 .31.21.68.79.56 4.57-1.53 7.86-5.86 7.86-10.96C23.25 5.62 18.27.5 12 .5z" />
    </svg>
  );
}

function LinkedInIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.45 20.45h-3.56v-5.58c0-1.33-.03-3.05-1.86-3.05-1.86 0-2.15 1.45-2.15 2.95v5.68H9.32V9h3.42v1.56h.05c.48-.9 1.65-1.86 3.4-1.86 3.64 0 4.31 2.4 4.31 5.52v6.23zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45z" />
    </svg>
  );
}