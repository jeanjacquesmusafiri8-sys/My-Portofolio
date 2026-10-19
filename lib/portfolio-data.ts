export const profile = {
  name: "Musafiri Mulunda Jean-Jacques",
  title: "Développeur Full-Stack & Solutions IA",
  subtitle: "Étudiant en L3 (Bac+3) Génie Logiciel",
  institution: "Université Catholique de Bukavu (UCB)",
  community: "Membre actif du GDG Bukavu. Contributeur Front-End sur le projet XERA1, Responsable Technique & Médias chez Kivu Académie, et Développeur Software chez Pleiade-Tech.",
  location: "Bukavu, RD Congo",
  phone: "+243 832 191 419",
  email: "jeanjacquesmusafiri8@gmail.com",
  image: "/PXL_20260531_073917855.PORTRAIT~2@805446033.jpg",
};

export const skillGroups = [
  {
    label: "Maîtrisés",
    description: "Technologies que j'utilise au quotidien pour construire des applications web et mobiles.",
    items: ["HTML", "Css", "Javascript","React", "MySQL", "Tailwind CSS", "Axios","Firebase", "Informatique des bases"],
  },
  {
    label: "En perfectionnement",
    description: "Compétences et outils que je développe actuellement pour renforcer mon profil full-stack.",
    items: ["Angular", "Design UI/UX", "python", "Architectures résilientes", "TypeScript", "Vue", "Optimisation Low-Data", "Machine Learing"],
  },
  {
    label: "Autres compétences en perfectionnement",
    description: "Compétences techniques et opérationnelles supplémentaires.",
    items: ["Maintenance matériel", "Maintenance système", "automatisation avec n8n"],
  },
  {
    label: "Harnais",
    description: "Compétences ou maitrice en utilisation de IA.",
    items: ["Copilot", "Google AI studio","Anigravity", "Cursor", "Codex"],
  },
]

export type Project = {
  title: string
  description: string
  tags: string[]
  website?: string
  repository?: string
  image?: string | null
}

export const projects: Project[] = [
  {
    title: "Pleiade-tech",
    description:
      "Plateforme pour gérer un écosystème commercial : boutiques, shopping, académie, messagerie et administration.",
    tags: ["E-commerce", "Administration", "Plateforme web"],
    website: "https://pleiade-tech.web.app",
    image: "/pleiade-tech.png",
  },
  {
    title: "les-bacchus",
    description:
      "Application dédiée à la gestion d'une buvette avec partie admin pour la gestion de ces employer",
    tags: ["React", "TypeScript", 'tailwindcss'],
    website: "http://les-bacchus.vercel.app/",
    image: "/les-bacchus.png",
  },
  {
    title: "Blessed Electrot Distribution",
    description:
      "Site e-commerce pour la vente de matériaux, associé au dépôt public projet_pour_amie.",
    tags: ["React", "Vite", "JavaScript", "CSS"],
    website: "https://blessed-electro-distribution.vercel.app",
    image: "/blesse.png",
  },
  {
    title: "mlima-supplier",
    description:
    "Un PWA pour la vente en ligne sans payement doonc pour la presentation de les markting de produit.",
    tags: ["react", "typescript", "tailwindcss", "postgresql avec Neon"],
    website: "https://www.mlima-supplier.xyz/",
    image: "/mlima-supplier.png",
  },
  {
    title: "Xera1",
    description:
      "Plateforme de progression où les créateurs documentent leurs projets, partagent des preuves de travail et développent leur réputation.",
    tags: ["Node.js", "Express", "REST API", "Javascript", "HTML", "CSS"],
    website: "https://xera1.xyz",
    image: "/xera1.png",
  },
  {
    title: "Kivu Académie",
    description:
      "Plateforme de formation et d'accompagnement des jeunes, avec des parcours autour des compétences, de l'entrepreneuriat et des talents.",
    tags: ["Formation", "Entrepreneuriat", "Communauté"],
    website: "https://kivu-academie.vercel.app",
    image: "/kivuacademie.png",
  },
  {
    title: "Gestionnaire de reçus",
    description:
      "Application des gestion , création et de suivi de reçus, avec historique et tableau de bord.",
    tags: ["HTML", "CSS", "JavaScript", "PHP"],
    website: "https://teams-bien-etre.vercel.app/",
    image: "/teams-bien-etre.png",
  },
  {
    title: "JS Skill Tester",
    description:
      "Application interactive pour tester et renforcer ses connaissances en JavaScript : conditions, tableaux, objets, boucles et fonctions.",
    tags: ["JavaScript", "HTML", "CSS"],
    website: "https://tester-js.vercel.app",
    repository: "https://github.com/musta-boys/Tester-js",
    image: "/testeJs.png",
  },
];
