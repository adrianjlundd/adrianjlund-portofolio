import React from "react"
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
  tagline = "TAGLINE (kort setning om hva du bygger / hva du liker / hva du søker)",
  githubUrl = "https://github.com/USERNAME",
  linkedinUrl = "https://www.linkedin.com/in/USERNAME/",
}) => {
  return (
    <section
      id="top"
      className="relative overflow-hidden"
      aria-label="Hero"
    >
      {/* Subtle background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-white/5 blur-3xl" />
        <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-white/5 blur-3xl" />
        <div className="absolute inset-0 bg-gradient-to-b from-white/0 via-white/0 to-white/0" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-28">
        <div className="flex flex-col items-center">
          {/* Text */}
          <div className="w-full max-w-3xl text-center">
            <h1 className="mt-4 text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
              {name}
            </h1>

            <p className="mt-3 text-lg text-white/70 sm:text-xl">{role}</p>

            <p className="mt-5 mx-auto max-w-2xl text-base leading-relaxed text-white/70 sm:text-lg">
              {tagline}
            </p>

            {/* CTAs */}
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-center">
              <a
                href="#projects"
                className="inline-flex items-center justify-center rounded-xl bg-white px-5 py-3 text-sm font-medium text-black transition hover:bg-white/90 focus:outline-none focus:ring-2 focus:ring-white/30"
              >
                View Projects
              </a>

              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-medium text-white transition hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/30"
              >
                Contact
              </a>

              <div className="flex items-center gap-3 sm:ml-2 sm:justify-center">
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

          {/* Globe under text */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end lg:pt-10">
            {/* optional glow, but NOT clipping */}
             <div className="relative w-full max-w-sm sm:max-w-md lg:max-w-lg">
              <div className="pointer-events-none absolute inset-0 rounded-full bg-white/5 blur-2xl" />
            {/* viktig: gi den HØYDE i stedet for aspect-square */}
             <Globe className="relative w-full h-[320px] sm:h-[380px] lg:h-[420px]" />

            <p className="mt-3 text-center text-xs text-white/50">
              Bergen • Trondheim
            </p>
          </div>
        </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

/** Minimal inline icons (no extra deps) */
function GitHubIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12 .5C5.73.5.75 5.62.75 12c0 5.1 3.29 9.43 7.86 10.96.58.11.79-.26.79-.56v-2.03c-3.2.71-3.88-1.39-3.88-1.39-.53-1.38-1.29-1.75-1.29-1.75-1.05-.74.08-.73.08-.73 1.16.08 1.77 1.22 1.77 1.22 1.03 1.8 2.7 1.28 3.36.98.1-.77.4-1.28.73-1.57-2.55-.3-5.23-1.31-5.23-5.82 0-1.29.45-2.34 1.2-3.17-.12-.3-.52-1.52.12-3.16 0 0 .98-.32 3.2 1.21.93-.27 1.93-.4 2.93-.4s2 .13 2.93.4c2.22-1.53 3.2-1.21 3.2-1.21.64 1.64.24 2.86.12 3.16.75.83 1.2 1.88 1.2 3.17 0 4.52-2.68 5.52-5.24 5.81.41.37.78 1.1.78 2.22v3.29c0 .31.21.68.79.56 4.57-1.53 7.86-5.86 7.86-10.96C23.25 5.62 18.27.5 12 .5z" />
    </svg>
  );
}

function LinkedInIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M20.45 20.45h-3.56v-5.58c0-1.33-.03-3.05-1.86-3.05-1.86 0-2.15 1.45-2.15 2.95v5.68H9.32V9h3.42v1.56h.05c.48-.9 1.65-1.86 3.4-1.86 3.64 0 4.31 2.4 4.31 5.52v6.23zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45z" />
    </svg>
  );
}