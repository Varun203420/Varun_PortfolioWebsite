import Link from "next/link";

const links = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
  { href: "/resume", label: "Resume" },
  { href: "/contact", label: "Contact" },
];

export default function Nav() {
  return (
    <header className="border-b border-ink/15">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-5">
        <Link
          href="/"
          className="font-display text-lg font-semibold tracking-tight"
        >
          Varun Hariharan
        </Link>
        <nav className="flex gap-6 text-sm">
          {links.slice(1).map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-ink/70 transition-colors hover:text-signal"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
