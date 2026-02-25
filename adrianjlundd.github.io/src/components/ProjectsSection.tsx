import ProjectCard from "./ProjectCard";
import { projects } from "../data/projects";

export default function ProjectsSection() {
  return (
    <section id="projects" className="mx-auto max-w-5xl px-4 py-20">
      <h2 className="text-2xl font-semibold tracking-tight text-white">
        Selected Projects
      </h2>
      <p className="mt-2 text-white/60">
        Selected work—shipping-focused and clean implementations.
      </p>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p) => (
          <ProjectCard key={p.title} project={p} />
        ))}
      </div>
    </section>
  );
}
