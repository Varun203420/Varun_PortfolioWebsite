import Tag from "./Tag";

type ProjectCardProps = {
  title: string;
  description: string;
  tags: string[];
  linkLabel?: string;
  linkHref?: string;
  status?: string;
};

export default function ProjectCard({
  title,
  description,
  tags,
  linkLabel,
  linkHref,
  status,
}: ProjectCardProps) {
  return (
    <article className="border border-ink/20 p-6">
      <div className="mb-2 flex items-start justify-between gap-4">
        <h3 className="font-display text-xl font-semibold">{title}</h3>
        {status && (
          <span className="whitespace-nowrap border border-rust/40 px-2 py-0.5 text-xs text-rust">
            {status}
          </span>
        )}
      </div>
      <p className="mb-4 text-sm leading-relaxed text-ink/75">
        {description}
      </p>
      <div className="mb-4 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <Tag key={tag}>{tag}</Tag>
        ))}
      </div>
      {linkHref && linkLabel && (
        <a
          href={linkHref}
          target="_blank"
          rel="noreferrer"
          className="text-sm font-medium text-signal hover:underline"
        >
          {linkLabel}
        </a>
      )}
    </article>
  );
}
