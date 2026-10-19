import { profile } from "@/lib/portfolio-data"

export function SiteFooter() {
  return (
    <footer className="border-t border-border py-8 accent-gradient">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-3 px-4 text-center md:flex-row md:px-6 md:text-left">
        <p className="font-mono text-sm text-muted-foreground">
          © {new Date().getFullYear()} {profile.name}
        </p>
        <p className="text-sm text-muted-foreground">
          Conçu à Bukavu · MJ.Build() &amp; 
        </p>
      </div>
    </footer>
  )
}
