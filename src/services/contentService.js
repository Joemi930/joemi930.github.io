import { brand, navigation, navigationCta } from "../data/navigation.js";
import { experience as fallbackExperience } from "../data/experience.js";
import { profile as fallbackProfile } from "../data/profile.js";
import { projects as fallbackProjects } from "../data/projects.js";
import { skillGroups as fallbackSkillGroups } from "../data/skills.js";
import { siteContent as fallbackSiteContent } from "../data/siteContent.js";
import { socials as fallbackSocials } from "../data/socials.js";

const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL || "https://wkpcrxsvhfogegrcddgb.supabase.co";
const SUPABASE_KEY = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY || "sb_publishable_7fLB-YRYV-o6p8zoRnlpvQ_dP0A_6uJ";

export const fallbackPortfolioContent = {
  brand,
  navigation,
  navigationCta,
  profile: fallbackProfile,
  projects: fallbackProjects,
  skillGroups: fallbackSkillGroups,
  socials: fallbackSocials,
  siteContent: fallbackSiteContent,
  experience: fallbackExperience,
  source: "fallback"
};

async function rest(path) {
  if (!SUPABASE_URL || !SUPABASE_KEY) throw new Error("Supabase public env vars missing");
  const response = await fetch(`${SUPABASE_URL}/rest/v1/${path}`, {
    headers: {
      apikey: SUPABASE_KEY,
      Authorization: `Bearer ${SUPABASE_KEY}`
    }
  });
  if (!response.ok) throw new Error(`Supabase read failed: ${response.status}`);
  return response.json();
}

function groupBy(rows, key) {
  return rows.reduce((acc, row) => {
    const value = row[key];
    acc[value] = acc[value] || [];
    acc[value].push(row);
    return acc;
  }, {});
}

function deriveFilters(project) {
  const text = `${project.category} ${project.status}`.toLowerCase();
  const filters = [];
  if (text.includes("ia")) filters.push("IA");
  if (text.includes("web") || text.includes("mobile")) filters.push("Web");
  if (text.includes("automation") || text.includes("automatisation")) filters.push("Automation");
  if (text.includes("développement") || text.includes("development")) filters.push("En développement");
  return filters;
}

function mapProfile(rows) {
  const row = rows[0];
  if (!row) return fallbackProfile;
  return {
    fullName: row.full_name,
    displayName: row.display_name,
    title: row.title,
    location: row.location,
    shortBio: row.short_bio,
    longBio: row.long_bio,
    avatar: row.avatar_url || fallbackProfile.avatar,
    avatarAlt: row.avatar_alt || fallbackProfile.avatarAlt,
    cv: {
      available: Boolean(row.cv_available),
      label: row.cv_available ? "Télécharger le CV" : "CV bientôt disponible",
      path: row.cv_url
    }
  };
}

function mapProjects(projectRows, technologies, features, highlights, architecture, learnings, screenshots) {
  const techByProject = groupBy(technologies, "project_id");
  const featuresByProject = groupBy(features, "project_id");
  const highlightsByProject = groupBy(highlights, "project_id");
  const architectureByProject = groupBy(architecture, "project_id");
  const learningsByProject = groupBy(learnings, "project_id");
  const screenshotsByProject = groupBy(screenshots, "project_id");

  return projectRows.map((project) => ({
    slug: project.slug,
    title: project.title,
    category: project.category,
    status: project.status,
    shortDescription: project.short_description,
    longDescription: project.long_description,
    problem: project.problematic,
    solution: project.solution,
    features: (featuresByProject[project.id] || []).sort((a, b) => a.sort_order - b.sort_order).map((item) => item.text),
    technologies: (techByProject[project.id] || []).sort((a, b) => a.sort_order - b.sort_order).map((item) => item.name),
    architecture: (architectureByProject[project.id] || [])
      .sort((a, b) => a.sort_order - b.sort_order)
      .map((item) => ({ label: item.label, description: item.description })),
    screenshots: (screenshotsByProject[project.id] || [])
      .filter((item) => item.is_visible)
      .sort((a, b) => a.sort_order - b.sort_order)
      .map((item) => ({ src: item.image_url, alt: item.alt_text, caption: item.caption })),
    repository: {
      isPublic: Boolean(project.repository_is_public),
      url: project.repository_url
    },
    demo: {
      available: Boolean(project.demo_available),
      url: project.demo_url
    },
    highlights: (highlightsByProject[project.id] || []).sort((a, b) => a.sort_order - b.sort_order).map((item) => item.text),
    learnings: (learningsByProject[project.id] || []).sort((a, b) => a.sort_order - b.sort_order).map((item) => item.text),
    filters: deriveFilters(project)
  }));
}

function mapSkills(rows) {
  const groups = groupBy(rows, "category");
  return Object.entries(groups).map(([title, skills]) => ({
    title,
    skills: skills.sort((a, b) => a.sort_order - b.sort_order).map((skill) => skill.name)
  }));
}

function mapSocials(rows) {
  const byPlatform = Object.fromEntries(rows.map((row) => [row.platform, row]));
  const emailUrl = byPlatform.email?.url || `mailto:${fallbackSocials.email}`;
  const whatsappUrl = byPlatform.whatsapp?.url || fallbackSocials.whatsappUrl;
  return {
    email: emailUrl.replace(/^mailto:/, ""),
    github: byPlatform.github?.url || fallbackSocials.github,
    githubHandle: fallbackSocials.githubHandle,
    linkedin: byPlatform.linkedin?.url || fallbackSocials.linkedin,
    linkedinHandle: fallbackSocials.linkedinHandle,
    whatsapp: fallbackSocials.whatsapp,
    whatsappUrl
  };
}

function mapExperience(rows) {
  return rows.sort((a, b) => a.sort_order - b.sort_order).map((row) => ({
    period: row.period,
    title: row.title,
    description: row.description
  }));
}

function parseContentValue(value) {
  const trimmed = String(value ?? "");
  if (trimmed.startsWith("[") || trimmed.startsWith("{")) {
    try {
      return JSON.parse(trimmed);
    } catch {
      return trimmed;
    }
  }
  return trimmed;
}

function mapSiteContent(rows) {
  const content = structuredClone(fallbackSiteContent);
  const specialKeys = {
    "projectDetail.analysisTitle": ["projectDetail", "analysis", "title"],
    "projectDetail.problemLabel": ["projectDetail", "analysis", "problemLabel"],
    "projectDetail.architectureTitle": ["projectDetail", "architecture", "title"],
    "projectDetail.screenshotsEmptyDescription": ["projectDetail", "screenshots", "emptyDescription"]
  };

  for (const row of rows) {
    const fullKey = `${row.section}.${row.key}`;
    const path = specialKeys[fullKey] || [row.section, ...row.key.split(".")];
    let target = content;
    for (const segment of path.slice(0, -1)) {
      if (!target[segment]) target[segment] = {};
      target = target[segment];
    }
    target[path[path.length - 1]] = parseContentValue(row.value);
  }

  return content;
}

export async function fetchPortfolioContent() {
  const [
    profile,
    siteContent,
    projects,
    technologies,
    features,
    highlights,
    architecture,
    learnings,
    screenshots,
    skills,
    experience,
    socials
  ] = await Promise.all([
    rest("profile?select=*&is_published=eq.true&limit=1"),
    rest("site_content?select=section,key,value&is_published=eq.true"),
    rest("projects?select=*&is_published=eq.true&order=sort_order.asc"),
    rest("project_technologies?select=*&order=sort_order.asc"),
    rest("project_features?select=*&order=sort_order.asc"),
    rest("project_highlights?select=*&order=sort_order.asc"),
    rest("project_architecture?select=*&order=sort_order.asc"),
    rest("project_learnings?select=*&order=sort_order.asc"),
    rest("project_screenshots?select=*&is_visible=eq.true&order=sort_order.asc"),
    rest("skills?select=*&is_visible=eq.true&order=category.asc,sort_order.asc"),
    rest("experience_items?select=*&is_visible=eq.true&order=sort_order.asc"),
    rest("social_links?select=*&is_visible=eq.true&order=sort_order.asc")
  ]);

  return {
    brand,
    navigation,
    navigationCta,
    profile: mapProfile(profile),
    projects: mapProjects(projects, technologies, features, highlights, architecture, learnings, screenshots),
    skillGroups: mapSkills(skills),
    socials: mapSocials(socials),
    siteContent: mapSiteContent(siteContent),
    experience: mapExperience(experience),
    source: "supabase"
  };
}
