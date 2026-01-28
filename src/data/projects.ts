// ============================================
// Projects
// Single source of truth for all projects
// ============================================

export interface ProjectSection {
  title: string;
  content: string;
}

export interface ProjectLinks {
  github?: string;
  demo?: string;
  blog?: string;
}

export interface ProjectOverview {
  problem: string;
  solution: string;
  outcome: string;
}

export interface Project {
  slug: string;
  title: string;
  subtitle: string;
  category: string;
  date: string;
  description: string;
  tags: string[];
  featured: boolean;
  overview: ProjectOverview;
  sections: ProjectSection[];
  links: ProjectLinks;
}

export const projects: Project[] = [
  {
    slug: "website",
    title: "This Website!",
    subtitle: "Personal portfolio and project showcase",
    category: "Architecture",
    date: "2026",
    description: "While thinking about the best way to showcase my experience and skills, I decided to create a single place to bring all of these topics together.",
    tags: ["Astro", "CI/CD", "Docker", "DNS"],
    featured: true,
    overview: {
      problem: "Portfolio sites tend to become stale because they're either over-engineered or too cumbersome to update.",
      solution: "Static-first content architecture with automated builds, keeping presentation separate from content.",
      outcome: "A lightweight site I can update in minutes, version-controlled and deployable on every push.",
    },
    sections: [
      {
        title: "The Challenge",
        content: "I wanted a portfolio that prioritized content over complexity. Most solutions either required a CMS I didn't need or frameworks that added unnecessary build overhead.",
      },
      {
        title: "My Approach",
        content: "Astro's component model let me structure pages cleanly while keeping everything static. Content lives in data files, so updates don't require touching templates.",
      },
      {
        title: "Implementation",
        content: "The site uses Astro with TypeScript, containerized for local dev consistency. GitHub Actions builds and deploys on push, with Cloudflare handling DNS and caching.",
      },
      {
        title: "Results & Learnings",
        content: "Treating a personal site like infrastructure paid off. The same discipline I apply to production systems made this easy to extend and maintain.",
      },
    ],
    links: {
      github: "https://github.com/GabrielPalmar/Website",
    },
  },
  {
    slug: "hivebox",
    title: "HiveBox",
    subtitle: "Cloud-Native Reference Architecture",
    category: "DevOps",
    date: "2025",
    description: "Theory is important, but I strongly believe in learning by doing. This DevOps project is a great example of how to approach software development and CI/CD using modern, industry-relevant technologies.",
    tags: ["Kubernetes", "Terraform", "GitHub Actions", "HELM"],
    featured: true,
    overview: {
      problem: "DevOps tutorials often focus on isolated tools without showing how they integrate in a real workflow.",
      solution: "An end-to-end reference architecture connecting infrastructure provisioning, container orchestration, and deployment pipelines.",
      outcome: "A working example I reference when designing pipelines or explaining DevOps concepts to others.",
    },
    sections: [
      {
        title: "The Challenge",
        content: "Understanding Kubernetes, Terraform, and CI/CD individually is straightforward. The harder part is seeing how decisions in one layer affect the others.",
      },
      {
        title: "Architecture",
        content: "Containerized services run on Kubernetes, with Terraform managing the underlying infrastructure. Helm handles templating, and pipelines coordinate the full build-test-deploy cycle.",
      },
      {
        title: "Implementation",
        content: "Python services, GitHub Actions pipelines, Kubernetes manifests, Terraform modules, and Helm charts. Each piece is intentionally kept small to stay readable.",
      },
      {
        title: "Results & Learnings",
        content: "Building this end-to-end sharpened my intuition for failure modes and trade-offs that don't surface when working with tools in isolation.",
      },
    ],
    links: {
      github: "https://github.com/GabrielPalmar/HiveBox-Project",
      demo: "",
    },
  },
  {
    slug: "aws-cloudconnexa-monitor",
    title: "CloudConnexa & AWS Network Monitor",
    subtitle: "Automated network health monitoring and response",
    category: "Automation",
    date: "2024",
    description: "You can't control the entire Internet, but you can monitor and react to issues as they happen. This stack monitors network health and triggers automated actions within AWS when packet loss or latency is detected.",
    tags: ["Bash", "AWS", "CloudFormation", "OpenVPN"],
    featured: true,
    overview: {
      problem: "Intermittent network issues on VPN paths are hard to catch before users notice.",
      solution: "Threshold-based monitoring with automated remediation, deployed entirely through infrastructure as code.",
      outcome: "Faster detection of connectivity issues and reduced manual intervention during incidents.",
    },
    sections: [
      {
        title: "The Challenge",
        content: "VPN and external connectivity problems are often transient. By the time someone investigates, the issue has resolved, leaving little evidence.",
      },
      {
        title: "My Approach",
        content: "Lightweight scripts run continuous checks and push metrics. When thresholds are breached, AWS-native automation handles the response without waiting for human intervention.",
      },
      {
        title: "Implementation",
        content: "Bash handles the probing logic, CloudFormation deploys the stack, and AWS services coordinate alerting and automated actions.",
      },
      {
        title: "Results & Learnings",
        content: "Simple tooling, when wired together correctly, often outperforms complex monitoring platforms for targeted use cases.",
      },
    ],
    links: {
      github: "https://github.com/GabrielPalmar/AWS-CloudConnexa-Resource-Monitor",
    },
  },
  {
    slug: "aws-cloudconnexa-logs",
    title: "Ship logs to CloudWatch using Lambda",
    subtitle: "Automated log streaming pipeline",
    category: "Automation",
    date: "2024",
    description: "Even when a product doesn't support a feature out of the box, having the right code can unlock effective workarounds. This solution streams logs from AWS S3 into CloudWatch using Lambda.",
    tags: ["Python", "AWS", "Lambda"],
    featured: false,
    overview: {
      problem: "CloudConnexa writes logs to S3 but doesn't natively support CloudWatch, limiting centralized observability.",
      solution: "Event-driven log ingestion using S3 triggers and serverless functions.",
      outcome: "Unified log visibility in CloudWatch without introducing external tooling or ongoing maintenance.",
    },
    sections: [
      {
        title: "The Challenge",
        content: "Without CloudWatch integration, logs sat in S3 and required manual downloads for analysis. Alerting on log patterns wasn't possible.",
      },
      {
        title: "My Approach",
        content: "Instead of adding a third-party log shipper, I used AWS-native primitives to keep the solution simple and cost-effective.",
      },
      {
        title: "Implementation",
        content: "A Python Lambda function triggers on S3 object creation, parses the log format, and writes entries to CloudWatch Logs.",
      },
      {
        title: "Results & Learnings",
        content: "Knowing the cloud platform well enough to build targeted workarounds is often more valuable than reaching for general-purpose tools.",
      },
    ],
    links: {
      github: "https://github.com/GabrielPalmar/AWS-S3-CloudConnexa-Log-Streaming-to-CloudWatch",
    },
  },
];

// Helper to get a project by slug
export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find(p => p.slug === slug);
}

// Helper to get featured projects for the homepage
export function getFeaturedProjects(limit?: number): Project[] {
  const featured = projects.filter(p => p.featured);
  return limit ? featured.slice(0, limit) : featured;
}

// Helper to get all unique categories
export function getCategories(): string[] {
  return ["All", ...new Set(projects.map(p => p.category))];
}

// Helper to get all project slugs (for static paths)
export function getAllSlugs(): string[] {
  return projects.map(p => p.slug);
}
