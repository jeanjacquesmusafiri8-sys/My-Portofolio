import { CheckCircle2, Sparkles, Wrench, Code } from "lucide-react"
import { skillGroups } from "@/lib/portfolio-data"

const icons = [CheckCircle2, Sparkles, Wrench, Code]

export function SkillsSection() {
  return (
    <section id="skills" className="border-t border-border py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="mb-12 md:mb-16">
          <span className="font-mono text-sm text-primary">02. / OUTILS</span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-5xl">Compétences</h2>
        </div>

        <div className="grid gap-x-12 xl:grid-cols-2">
          {skillGroups.map((group, i) => {
            const Icon = icons[i];

            return (
              <div key={group.label} className="border-t border-border py-6 md:py-8">
                <div className="grid gap-5 md:grid-cols-[0.7fr_1.3fr] md:gap-8">
                  <div>
                    <div className="flex items-center gap-2">
                      <Icon className="h-5 w-5 text-primary" aria-hidden="true" />
                      <h3 className="font-semibold">{group.label}</h3>
                    </div>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{group.description}</p>
                  </div>
                  <ul className="flex flex-wrap content-start gap-2">
                    {group.items.map((item) => (
                      <li
                        key={item}
                        className="rounded-sm border border-border bg-card px-3 py-1.5 font-mono text-xs text-secondary-foreground"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
