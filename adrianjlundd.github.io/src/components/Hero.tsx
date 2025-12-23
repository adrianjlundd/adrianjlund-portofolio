export default function Hero() {
    return (
        <section className="min-h-[70vh] flex items-center">
            <div className="space-y-6">
                <h1 className="text-5xl font-bold">
                    Adrian Jacobsen Lund
                </h1>
                <p className="text-xl text-slate-400">
                    Computer Science student @ NTNU
                </p>
                <p className="text-slate-500">
                    AI · Data Analycis 
                </p>
                 <div className="pt-4 flex gap-4">
          <a
            href="https://www.cogito-ntnu.no/projects/tv2xcogito"
            className="px-5 py-2 rounded bg-white text-black font-medium"
          >
            Projects
          </a>
          <a
            href="https://github.com/adrianjlundd"
            target="_blank"
            className="px-5 py-2 rounded border border-slate-700"
          >
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
}

