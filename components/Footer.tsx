export default function Footer() {
  return (
    <footer className="border-t border-ink/15">
      <div className="mx-auto flex max-w-5xl flex-col gap-2 px-6 py-8 text-sm text-ink/60 sm:flex-row sm:items-center sm:justify-between">
        <span>Varun Hariharan - MS in AI, Northeastern University</span>
        <div className="flex gap-4">
          <a href="mailto:varun.hariharan203@gmail.com" className="hover:text-signal">
            Email
          </a>
          
            href="https://github.com/Varun203420"
            className="hover:text-signal"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
          
            href="https://www.linkedin.com/in/varun-hariharan1/"
            className="hover:text-signal"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
