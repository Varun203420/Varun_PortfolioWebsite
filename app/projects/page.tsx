import ProjectCard from "@/components/ProjectCard";

export default function Projects() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-16">
      <h1 className="font-display text-3xl font-semibold tracking-tight">
        Projects
      </h1>

      <section className="mt-12">
        <h2 className="mb-6 font-display text-sm font-semibold uppercase tracking-wide text-ink/50">
          AI &amp; ML
        </h2>
        <div className="grid gap-6 md:grid-cols-2">
          <ProjectCard
            title="Monte Carlo Portfolio Risk Simulator"
            description="Describe a portfolio in plain English — '60% AAPL, 30% bonds, 10% cash' — and get back a real risk analysis: VaR, CVaR, and a plain-English narrative naming the actual biggest risk driver. Runs a Cholesky-decomposed multi-asset Monte Carlo simulation, backtested against real market data and a COVID-era stress window using a Kupiec proportion-of-failures test."
            tags={[
              "Python",
              "Monte Carlo Simulation",
              "NumPy",
              "Streamlit",
              "Claude API",
              "Tool Use",
              "Statistical Modeling",
            ]}
            linkLabel="Live demo →"
            linkHref="https://portfolio-monte-carlo-hqoum8g6b6qbnqbz4sm7ii.streamlit.app/"
          />
          <ProjectCard
            title="AI Data Analyst"
            description="Upload a CSV, ask a question in plain English, get back a chart and a written summary. Instead of letting the model execute arbitrary code, it picks from a small set of vetted analysis tools — the computation always runs in real Python, never inside the model."
            tags={[
              "Python",
              "FastAPI",
              "Pandas",
              "Plotly",
              "Claude API",
              "Tool-Calling",
              "Streamlit",
            ]}
            linkLabel="View repo →"
            linkHref="https://github.com/Varun203420/AI-Data-Analyst"
          />
          <ProjectCard
            title="Research Clipper"
            description="Clip content while you browse — videos, papers, websites — and ask questions across everything you've saved, with real citations back to the specific clips that support each claim. Verified with a 12-question eval across two content clusters."
            tags={[
              "Python",
              "FastAPI",
              "PostgreSQL",
              "pgvector",
              "RAG",
              "Sentence Embeddings",
              "Claude API",
            ]}
            status="In progress"
          />
        </div>
      </section>

      <section className="mt-16">
        <h2 className="mb-6 font-display text-sm font-semibold uppercase tracking-wide text-ink/50">
          Product &amp; Research
        </h2>
        <div className="grid gap-6 md:grid-cols-2">
          <ProjectCard
            title="Seesaw"
            description="A student productivity and task-tracking app, built as a team project across two quarters with a full UX process."
            tags={["User Research", "Journey Mapping", "Figma", "Usability Testing"]}
          />
          <ProjectCard
            title="City Food Festival"
            description="An end-to-end case study — research, branding, and a mobile app for a local food festival."
            tags={["User Research", "Branding", "Figma", "Prototyping"]}
          />
          <ProjectCard
            title="Eventure"
            description="Case study write-up in progress."
            tags={["User Research", "Figma"]}
            status="In progress"
          />
        </div>
      </section>
    </div>
  );
}
