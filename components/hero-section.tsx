import Image from "next/image"
import { ArrowDown, Download, MapPin, Cpu } from "lucide-react"
import { profile } from "@/lib/portfolio-data"

const portraitPhotos = [
  {
    src: profile.image,
    alt: profile.name,
  },
  {
    src: "/PXL_20260531_073921869.PORTRAIT~2@479658727.jpg",
    alt: `Portrait de ${profile.name}`,
  },
  {
    src: "/PXL_20260607_145626617.PORTRAIT@2047215652 (2).jpg",
    alt: `Portrait de ${profile.name}`,
  },
]

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden grid-bg pt-24"
    >
      <div className="mx-auto grid w-full max-w-7xl items-center gap-12 px-4 py-12 md:px-8 xl:grid-cols-[0.95fr_1.05fr]">
        <div className="animate-fade-up">
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1.5 font-mono text-xs text-muted-foreground">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
            </span>
            Disponible pour de nouvelles opportunités
          </div>

          <p className="mb-4 font-mono text-sm text-primary">PORTFOLIO / DÉVELOPPEMENT</p>
          <h1 className="max-w-3xl text-pretty text-5xl font-bold leading-[1.08] md:text-6xl 2xl:text-7xl">
            Salut, je suis <span className="text-primary">{profile.name}</span>
          </h1>

          <p className="mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground md:text-xl">
            {profile.title}. Depuis Bukavu, je conçois des applications utiles, robustes et pensées pour les réalités de connexion locales.
          </p>

          <div className="mt-7 flex flex-col gap-3 font-mono text-sm text-muted-foreground">
            <span className="inline-flex items-center gap-2">
              <MapPin className="h-4 w-4 text-primary" aria-hidden="true" />
              {profile.location}
            </span>
            <span className="inline-flex items-center gap-2">
              <Cpu className="h-4 w-4 text-primary" aria-hidden="true" />
              {profile.subtitle}
            </span>
          </div>

          <div className="mt-9 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
            >
              Voir mes projets
              <ArrowDown className="h-4 w-4" aria-hidden="true" />
            </a>
            <a
              href="/cv-musafiri-jean-jacques.pdf"
              download
              className="inline-flex items-center gap-2 rounded-md border border-border bg-card px-5 py-3 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
            >
              <Download className="h-4 w-4" aria-hidden="true" />
              Télécharger mon CV
            </a>
          </div>
        </div>

        <div className="grid h-[min(72vh,760px)] min-h-[440px] grid-cols-[1.15fr_0.85fr] gap-3 animate-fade-up max-md:h-[min(64vh,600px)] max-md:min-h-[360px]">
          <figure className="relative overflow-hidden rounded-sm border border-border bg-card">
            <Image
              src={portraitPhotos[0].src}
              alt={portraitPhotos[0].alt}
              fill
              priority
              sizes="(min-width: 1280px) 42vw, 58vw"
              className="object-cover object-center"
            />
            <figcaption className="absolute inset-x-0 bottom-0 bg-background/80 px-4 py-3 backdrop-blur-sm md:px-5 md:py-4">
              <span className="block text-sm font-semibold">{profile.name}</span>
              <span className="mt-1 block font-mono text-xs text-muted-foreground">BUKAVU · RDC</span>
            </figcaption>
          </figure>
          <div className="grid min-h-0 grid-rows-2 gap-3">
            {portraitPhotos.slice(1).map((photo, index) => (
              <figure key={photo.src} className="relative min-h-0 overflow-hidden rounded-sm border border-border bg-card">
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  sizes="(min-width: 1280px) 30vw, 42vw"
                  className="object-cover object-center"
                />
                <figcaption className="absolute bottom-3 left-3 rounded-sm border border-border bg-background/80 px-2.5 py-1 font-mono text-[10px] text-muted-foreground backdrop-blur-sm">
                  PORTRAIT / 0{index + 2}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
