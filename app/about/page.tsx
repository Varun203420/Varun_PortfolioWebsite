import Image from "next/image";
import Tag from "@/components/Tag";

const skillGroups = [
  {
    label: "AI/ML",
    skills: [
      "Claude API",
      "RAG",
      "Tool Use / Function Calling",
      "Prompt Engineering",
      "Sentence Embeddings",
      "pgvector",
      "Vector DB",
      "PyTorch",
    ],
  },
  {
    label: "Data & Analysis",
    skills: ["NumPy", "Pandas", "Matplotlib"],
  },
  {
    label: "Programming",
    skills: ["Python", "R", "Java", "JavaScript", "HTML/CSS", "React", "PostgreSQL"],
  },
  {
    label: "Tools",
    skills: ["FastAPI", "Streamlit", "Git", "Figma", "VS Code", "Vercel"],
  },
];

export default function About() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <div className="flex flex-col items-start gap-8 sm:flex-row sm:items-center">
        <div className="h-28 w-28 shrink-0 overflow-hidden border border-ink/20">
          <Image
            src="/avatar.jpg"
            alt="Varun Hariharan"
            width={500}
            height={500}
            className="h-full w-full object-cover"
            priority
          />
        </div>
        <div>
          <h1 className="font-display text-3xl font-semibold tracking-tight">
            About
          </h1>
          <p className="mt-2 text-ink/60">
            MS in AI @ Northeastern &middot; HCDE + Economics @ UW
          </p>
        </div>
      </div>

      <p className="mt-10 max-w-2xl text-lg leading-relaxed text-ink/80">
        I build AI-powered tools -- currently as an MS in AI student at
        Northeastern. My HCDE + Economics background from UW shapes how I
        build them: not just functional, but usable and clear about what
        they don&apos;t know. That shows up in projects like a Monte Carlo
        risk simulator that explains its own uncertainty, and Research
        Clipper, an AI research assistant built to actually cite its
        sources.
      </p>

      <div className="mt-14">
        <h2 className="mb-6 font-display text-sm font-semibold uppercase tracking-wide text-ink/50">
          Skills
        </h2>
        <div className="space-y-5">
          {skillGroups.map((group) => (
            <div key={group.label} className="flex flex-col gap-2 sm:flex-row sm:items-start">
              <span className="w-40 shrink-0 text-sm font-medium text-ink/60">
                {group.label}
              </span>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <Tag key={skill}>{skill}</Tag>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
