import { Mail, Github, Linkedin } from "lucide-react";

const links = [
  {
    label: "Email",
    value: "varun.hariharan203@gmail.com",
    href: "mailto:varun.hariharan203@gmail.com",
    icon: Mail,
  },
  {
    label: "GitHub",
    value: "Varun203420",
    href: "https://github.com/Varun203420",
    icon: Github,
  },
  {
    label: "LinkedIn",
    value: "varun-hariharan1",
    href: "https://www.linkedin.com/in/varun-hariharan1/",
    icon: Linkedin,
  },
];

export default function Contact() {
  return (
    <div className="mx-auto max-w-2xl px-6 py-16">
      <h1 className="font-display text-3xl font-semibold tracking-tight">
        Contact
      </h1>
      <p className="mt-3 text-ink/60">
        Reach out directly, or find me on GitHub and LinkedIn.
      </p>

      <div className="mt-10 flex flex-col gap-3">
        {links.map((link) => {
          const Icon = link.icon;
          return (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={link.href.startsWith("http") ? "noreferrer" : undefined}
              className="group flex items-center gap-4 border border-ink/20 px-5 py-4 transition-colors hover:border-signal"
            >
              <Icon className="h-5 w-5 shrink-0 text-ink/60 transition-colors group-hover:text-signal" />
              <div>
                <div className="text-sm font-medium text-ink/50">
                  {link.label}
                </div>
                <div className="text-base transition-colors group-hover:text-signal">
                  {link.value}
                </div>
              </div>
            </a>
          );
        })}
      </div>
    </div>
  );
}
