import { GraduationCap, Users, ShieldCheck } from "lucide-react"
import { profile } from "@/lib/portfolio-data"

const highlights = [
  {
    icon: GraduationCap,
    title: "Parcours académique",
    text: `Troisième année en informatique à l'${profile.institution}, où je consolide mes bases théoriques et pratiques.`,
  },
  {
    icon: Users,
    title: "Engagement communautaire",
    text: "Membre actif du GDG Bukavu et d'Aquilas.dev, je partage et apprends au sein de l'écosystème tech local.",
  },
  {
    icon: ShieldCheck,
    title: "Philosophie de dev",
    text: "Comprendre avant de coder : écouter les utilisateurs, clarifier le problème et tenir compte des contraintes avant de choisir une solution.",
  }
]

export function AboutSection() {
  return (
    <section id="about" className="border-t border-border py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="mb-12 md:mb-16">
          <span className="font-mono text-sm text-primary">01. / PARCOURS</span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-5xl">À propos</h2>
        </div>

        <div className="grid gap-12 xl:grid-cols-[0.85fr_1.15fr] xl:gap-20">
          <div>
            <p className="text-pretty text-xl leading-relaxed text-muted-foreground md:text-2xl">
              Développeur full-stack junior, je vis et travaille à{" "}
              <span className="text-foreground">{profile.location}</span>. Je cherche à concevoir des solutions performantes qui répondent aux besoins concrets des utilisateurs, même lorsque la connexion est limitée.
            </p>
            <p className="mt-7 border-l-2 border-primary pl-4 text-sm leading-relaxed text-muted-foreground md:text-base">
              {profile.community}
            </p>
          </div>

          <div className="grid gap-0 md:grid-cols-3 md:gap-6">
            {highlights.map((h) => (
              <div
                key={h.title}
                className="border-t border-border py-6 md:border-t-0 md:border-l md:pl-5 md:pt-2"
              >
                <h.icon className="h-5 w-5 text-primary" aria-hidden="true" />
                <h3 className="mt-4 font-semibold">{h.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{h.text}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
