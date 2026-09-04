export default function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="border border-ink/25 px-2 py-0.5 text-xs text-ink/70">
      {children}
    </span>
  );
}
