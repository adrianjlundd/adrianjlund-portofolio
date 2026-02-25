import type { Project } from "../data/projects";

type ProjectCardProps = {
  project: Project;
};

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="flex h-full flex-col rounded-2xl border border-white/10 bg-white/5 p-6">
      <h3 className="text-lg font-semibold tracking-tight text-white">
        {project.title}
      </h3>

      <p className="mt-3 text-sm leading-relaxed text-white/65">
        {project.description}
      </p>
      <div className="mt-auto">
        {/* Tech stack */}
        <ul className="mt-5 flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <li
              key={t}
              className="rounded-full border border-white/10 bg-black/20 px-3 py-1 text-xs text-white/70"
            >
              {t}
            </li>
          ))}
        </ul>

        {/* Links */}
        <div className="mt-6 flex flex-wrap items-center gap-4">
          {project.links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              className="text-sm font-medium text-white/70 underline underline-offset-4 hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </article>
  );
}
