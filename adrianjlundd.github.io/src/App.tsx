import Layout from "./components/Layout";
import Hero from "./components/Hero";
import ProjectsSection from "./components/ProjectsSection";

  export default function App() {
    return (
      <Layout>
        <Hero
        name="Adrian Jacobsen Lund"
        role="Computer Science student @ NTNU"
        tagline="Passionate about Computer Vision and Data Analytics."
        githubUrl="https://github.com/adrianjlundd"
        linkedinUrl="https://www.linkedin.com/in/adrianjlund/"
        />

        <ProjectsSection />

      <section id="contact" className="mx-auto max-w-5xl px-4 py-20">
        <h2 className="text-2xl font-semibold tracking-tight text-white">
          Contact
        </h2>
        <p className="mt-2 text-white/60">Coming soon…</p>
      </section>
        
      </Layout>
    )
  }