export default function Contact() {
  return (
    <div className="mx-auto max-w-2xl px-6 py-16">
      <h1 className="font-display text-3xl font-semibold tracking-tight">
        Contact
      </h1>
      <div className="mt-8 flex flex-col gap-3 text-lg">
        <a href="mailto:varun.hariharan203@gmail.com" className="hover:text-signal">
          varun.hariharan203@gmail.com
        </a>
        
          href="https://github.com/Varun203420"
          target="_blank"
          rel="noreferrer"
          className="hover:text-signal"
        >
          GitHub — Varun203420
        </a>
        
          href="https://www.linkedin.com/in/varun-hariharan1/"
          target="_blank"
          rel="noreferrer"
          className="hover:text-signal"
        >
          LinkedIn
        </a>
      </div>
    </div>
  );
}