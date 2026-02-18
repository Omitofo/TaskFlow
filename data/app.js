// data/app.js – TaskFlow mock data

const FEATURES_DATA = [
  {
    emoji: "📋", bg: "rgba(37,99,235,0.1)", color: "#2563eb",
    title: "Easy Task Management",
    desc: "Create, assign, and track tasks with an intuitive drag-and-drop interface that keeps everyone aligned."
  },
  {
    emoji: "👥", bg: "rgba(6,182,212,0.1)", color: "#06b6d4",
    title: "Team Collaboration",
    desc: "Real-time updates, comments, and @mentions keep your entire team in sync — no meetings required."
  },
  {
    emoji: "📊", bg: "rgba(16,185,129,0.1)", color: "#10b981",
    title: "Real-Time Analytics",
    desc: "Beautiful dashboards surface insights instantly, so you can make data-driven decisions confidently."
  },
  {
    emoji: "🔗", bg: "rgba(245,158,11,0.1)", color: "#f59e0b",
    title: "100+ Integrations",
    desc: "Connect with Slack, GitHub, Figma, and your existing tools. TaskFlow works where you work."
  },
  {
    emoji: "🤖", bg: "rgba(139,92,246,0.1)", color: "#8b5cf6",
    title: "AI Suggestions",
    desc: "Let our AI prioritize your backlog, estimate effort, and surface blockers before they slow you down."
  },
  {
    emoji: "🔒", bg: "rgba(239,68,68,0.1)", color: "#ef4444",
    title: "Enterprise Security",
    desc: "SOC 2 Type II certified with SSO, RBAC, and audit logs. Your data stays yours — always."
  }
];

const PRICING_DATA = [
  {
    plan: "Starter",
    price: "$0",
    period: "/ forever",
    desc: "For individuals and small projects.",
    featured: false,
    cta: "Get Started",
    features: ["5 active projects", "2 team members", "Basic analytics", "Mobile app"]
  },
  {
    plan: "Pro",
    price: "$12",
    period: "/ user / mo",
    desc: "For growing teams that need more power.",
    featured: true,
    badge: "Most Popular",
    cta: "Start Free Trial",
    features: ["Unlimited projects", "25 team members", "Advanced analytics", "AI suggestions", "Priority support", "Custom workflows"]
  },
  {
    plan: "Enterprise",
    price: "Custom",
    period: "",
    desc: "For large organizations with custom needs.",
    featured: false,
    cta: "Contact Sales",
    features: ["Unlimited everything", "SSO & SAML", "SLA guarantee", "Dedicated CSM", "Custom contracts"]
  }
];

const TESTIMONIALS_DATA = [
  {
    quote: "TaskFlow transformed how our team works. We shipped 40% faster in the first quarter after switching.",
    name: "Alex S.", role: "CTO, BuildLab", emoji: "👨‍💻"
  },
  {
    quote: "The AI prioritization feature alone is worth every penny. It surfaces exactly what needs attention.",
    name: "Maria J.", role: "Product Lead, Qubit", emoji: "👩‍💼"
  },
  {
    quote: "Onboarding our 50-person team took less than a day. The UX is just that intuitive.",
    name: "David K.", role: "Engineering Manager, Nexis", emoji: "👨‍🔬"
  }
];
