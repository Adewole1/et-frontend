export const insightPosts = [
  { category: "Data Strategy", title: "How we cut disposition time 27% without adding headcount", time: "8 min", date: "May 21", status: "Published" },
  { category: "Data Engineering", title: "Designing data pipelines for reliability and scale", time: "6 min", date: "May 16", status: "Published" },
  { category: "Analytics", title: "Cohort analysis that reveals what dashboards miss", time: "7 min", date: "May 14", status: "Published" },
  { category: "Data Ops", title: "Monitoring data quality like a production system", time: "5 min", date: "May 10", status: "Draft" },
] as const;

export const projects = [
  { title: "Supply chain optimization", tools: "SQL · Python · Tableau", result: "−22% cycle time", category: "Supply Chain" },
  { title: "Escalation analytics", tools: "Power BI · Excel", result: "340 hrs saved", category: "Analytics" },
  { title: "Logistics program", tools: "Python · Looker", result: "+35% visibility", category: "Logistics" },
] as const;

export const books = [
  {
    title: "Data, Delivered",
    author: "Emmanuel Tobiloba",
    category: "Data & Delivery",
    status: "Forthcoming",
    description:
      "A practical field guide to turning analysis into decisions, ownership, and measurable delivery.",
    accent: "#315f7f",
  },
  {
    title: "The Decision Layer",
    author: "Emmanuel Tobiloba",
    category: "Analytics Leadership",
    status: "In development",
    description:
      "How teams can build reporting systems that change what happens next—not just explain what already happened.",
    accent: "#496f62",
  },
  {
    title: "Systems That Ship",
    author: "Emmanuel Tobiloba",
    category: "Operations",
    status: "Working manuscript",
    description:
      "Notes on operating rhythms, project clarity, and the small systems behind dependable execution.",
    accent: "#6d587b",
  },
] as const;

export const publicNavigation = [
  { id: "/", label: "Home" },
  { id: "/insights", label: "Insights" },
  { id: "/projects", label: "Projects" },
  { id: "/books", label: "Books" },
] as const;

export const adminNavigation = [
  { id: "/", label: "Home" },
  { id: "/admin/insights", label: "Insights" },
  { id: "/admin/projects", label: "Projects" },
  { id: "/admin/books", label: "Books" },
] as const;
