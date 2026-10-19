import Image from "next/image"
import { ArrowUpRight, ImageIcon } from "lucide-react"
import { projects } from "@/lib/portfolio-data"

// Composant SVG personnalisé pour l'icône GitHub
function GithubIcon({ className = "h-4 w-4", ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...props}
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  )
}

function ProjectCard({
  project,
  featured = false,
}: {
  project: (typeof projects)[number]
  featured?: boolean
}) {
  return (
    <article
      className={`group grid overflow-hidden rounded-md border border-border bg-card transition-colors hover:border-primary/40 ${
        featured ? "md:grid-cols-[1.25fr_0.75fr]" : ""
      }`}
    >
      <div
        className={`relative overflow-hidden border-b border-border bg-secondary/40 ${
          featured
            ? "aspect-[16/10] md:aspect-auto md:min-h-[28rem] md:border-b-0 md:border-r"
            : "aspect-[16/9]"
        }`}
      >
        {project.image ? (
          <Image
            src={project.image}
            alt={`Capture d'écran du projet ${project.title}`}
            fill
            sizes={featured ? "(min-width: 768px) 60vw, 100vw" : "(min-width: 768px) 50vw, 100vw"}
            className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
          />
        ) : (
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 text-muted-foreground">
            <ImageIcon className="h-8 w-8 text-primary/70" aria-hidden="true" />
            <span className="font-mono text-xs uppercase">Capture à intégrer</span>
            <span className="text-sm">{project.title}</span>
          </div>
        )}
        <span className="absolute left-4 top-4 font-mono text-xs text-muted-foreground">
          PROJET / {String(projects.indexOf(project) + 1).padStart(2, "0")}
        </span>
      </div>

      <div className={`flex flex-col justify-center p-6 md:p-8 ${featured ? "md:p-10" : ""}`}>
        <h3 className={`${featured ? "text-2xl md:text-3xl" : "text-xl"} font-semibold`}>
          {project.title}
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground md:text-base">
          {project.description}
        </p>
        <ul className="mt-5 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <li
              key={tag}
              className="rounded-sm border border-border px-2.5 py-1 font-mono text-xs text-muted-foreground"
            >
              {tag}
            </li>
          ))}
        </ul>
        <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-3 border-t border-border pt-4">
          {project.website && (
            <a
              href={project.website}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-primary transition-opacity hover:opacity-80"
            >
              Voir le site
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </a>
          )}
          {project.repository && (
            <a
              href={project.repository}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              <GithubIcon className="h-4 w-4" aria-hidden="true" />
              Code source
            </a>
          )}
        </div>
      </div>
    </article>
  )
}

export function ProjectsSection() {
  const [featuredProject, ...otherProjects] = projects

  return (
    <section id="projects" className="border-t border-border py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="mb-12 flex flex-col gap-5 md:mb-16 md:flex-row md:items-end md:justify-between">
          <div>
            <span className="font-mono text-sm text-primary">03. / SÉLECTION</span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-5xl">Projets</h2>
          </div>
          <p className="max-w-lg text-pretty text-sm leading-relaxed text-muted-foreground md:text-base">
            Des plateformes et outils conçus pour répondre à des besoins concrets.
          </p>
        </div>

        {featuredProject && <ProjectCard project={featuredProject} featured />}

        <div className="mt-6 grid gap-6 lg:grid-cols-2">
          {otherProjects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}