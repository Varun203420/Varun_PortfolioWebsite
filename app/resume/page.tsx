export default function Resume() {
  return (
    <div className="mx-auto max-w-2xl px-6 py-16">
      <h1 className="font-display text-3xl font-semibold tracking-tight">
        Resume
      </h1>
      <p className="mt-6 text-ink/70">
        The PDF isn&apos;t wired up yet — drop your resume file into{" "}
        <code className="border border-ink/20 px-1">/public/resume.pdf</code>{" "}
        and it will render at this link.
      </p>
      <a
        href="/resume.pdf"
        className="mt-6 inline-block border border-ink bg-ink px-5 py-2.5 text-sm font-medium text-paper transition-colors hover:bg-signal hover:border-signal"
      >
        Download resume (PDF)
      </a>
    </div>
  );
}
