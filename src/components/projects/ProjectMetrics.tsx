import type { Project } from "@/data/portfolio";

export function ProjectMetrics({ metrics }: { metrics: Project["metrics"] }) {
  if (!metrics?.length) return null;
  return (
    <dl className="my-6 grid grid-cols-3 gap-2 border-y border-line py-4">
      {metrics.map((metric) => (
        <div key={metric.label}>
          <dt className="text-[10px] text-muted">{metric.label}</dt>
          <dd className="mt-1 text-lg font-bold text-accent">{metric.value}</dd>
        </div>
      ))}
    </dl>
  );
}
