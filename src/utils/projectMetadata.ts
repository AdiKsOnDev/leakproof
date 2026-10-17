import type { Project } from '../types/content'

export function getProjectMetadata(project: Project) {
  return {
    path: `/work/${project.slug}`,
    title: `${project.name} ${project.kind === 'concept' ? 'concept' : 'case study'} | Leakproof`,
    description: project.summary,
  }
}
