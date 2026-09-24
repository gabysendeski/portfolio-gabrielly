import Image from "next/image";
import type { Project } from "@/data/portfolio";
import { assetPath } from "@/lib/assets";

export function ProjectPreview({ project }: { project: Project }) {
  if (!project.preview) return null;
  const Wrapper = project.liveUrl ? "a" : "div";
  return (
    <Wrapper
      {...(project.liveUrl
        ? {
            href: project.liveUrl,
            target: "_blank",
            rel: "noopener noreferrer",
            "aria-label": `Visitar ${project.name} — abre em nova aba`,
          }
        : {})}
      className="group flex min-w-0 flex-col justify-center gap-5 bg-[#142e2a] p-5 sm:p-8"
    >
      <div className="overflow-hidden rounded-xl border border-[#d9c49a]/30 shadow-2xl transition-transform duration-300 group-hover:-translate-y-1">
        <div
          className="flex items-center gap-3 border-b border-[#d9c49a]/20 bg-[#10231f] px-4 py-3"
          aria-hidden="true"
        >
          <span className="flex shrink-0 gap-1.5">
            <span className="size-2 rounded-full bg-[#d9c49a]/60" />
            <span className="size-2 rounded-full bg-[#d9c49a]/40" />
            <span className="size-2 rounded-full bg-[#d9c49a]/20" />
          </span>
          <span className="truncate font-mono text-[9px] text-[#d9c49a]">
            {project.context}
          </span>
        </div>
        <Image
          src={assetPath(project.preview.src)}
          alt={project.preview.alt}
          width={project.preview.width}
          height={project.preview.height}
          sizes="(min-width: 1024px) 560px, 90vw"
          className="aspect-[1440/828] w-full object-cover object-top"
        />
      </div>
      <span className="flex items-center justify-between gap-3 font-mono text-[10px] uppercase tracking-widest text-[#d9c49a]">
        Prévia real · {project.name}
        <span aria-hidden="true">↗</span>
      </span>
    </Wrapper>
  );
}
