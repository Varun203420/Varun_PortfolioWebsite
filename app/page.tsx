import Link from "next/link";
import FanChart from "@/components/FanChart";
import ProjectCard from "@/components/ProjectCard";

export default function Home() {
  return (
    <>
      <section className="mx-auto grid max-w-5xl items-center gap-10 px-6 py-20 md:grid-cols-2">
        <div>
          <h1 className="font-display text-4xl font-semibold leading-tight tracking-tight md:text-5xl">
            I build AI-powered tools — from Monte Carlo risk simulators to
            RAG-based research assistants.
          </h1>
          <p className="mt-6 max-w-md text-ink/70">
            MS in AI student at Northeastern, with a Human-Centered Design and
            Economics background from UW.
          </p>
          <div className="mt-8 flex gap-4">
            <Link
              href="/projects"
              className="border border-ink bg-ink px-5 py-2.5 text-sm font-medium text-paper transition-colors hover:bg-signal hover:border-signal"
            >
              View projects
            </Link>
            <Link
              href="/about"
              className="border border-ink/30 px-5 py-2.5 text-sm font-medium transition-colors hover:border-signal hover:text-signal"
            >
              About me
            </Link>
          </div>
        </div>
        <div className="flex justify-center md:justify-end">
          <FanChart />
        </div>
      </section>

      <section className="border-t border-ink/15 px-6 py-16">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-8 font-display text-sm font-semibold uppercase tracking-wide text-ink/50">
            Featured work
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            <ProjectCard
              title="Monte Carlo Portfolio Risk Simulator"
              description="Describe a portfolio in plain English and get a real risk analysis — VaR, CVaR, and an AI narrative naming the actual biggest risk driver."
              tags={["Python", "Monte Carlo", "Claude API", "Streamlit"]}
              linkLabel="Live demo →"
              linkHref="https://portfolio-monte-carlo-hqoum8g6b6qbnqbz4sm7ii.streamlit.app/"
            />
            <ProjectCard
              title="AI Data Analyst"
              description="Upload a CSV, ask a question in plain English, get back a chart and a written summary — the LLM picks from vetted analysis functions instead of generating arbitrary code."
              tags={["Python", "FastAPI", "Claude API", "Streamlit"]}
              linkLabel="View repo →"
              linkHref="https://github.com/Varun203420/AI-Data-Analyst"
            />
          </div>
        </div>
      </section>
    </>
  );
}
