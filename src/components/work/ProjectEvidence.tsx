import { ArrowRight, ArrowUpRight } from 'lucide-react'
import type { Project, ProjectScreenshot } from '../../types/content'

export function ProjectImage({ screenshot, eager = false, className = '' }: { screenshot: ProjectScreenshot; eager?: boolean; className?: string }) {
  return (
    <img
      className={`project-image ${className}`}
      src={screenshot.src}
      alt={screenshot.alt}
      width={screenshot.width}
      height={screenshot.height}
      loading={eager ? 'eager' : 'lazy'}
      decoding="async"
    />
  )
}

export function ProjectWebsite({ project }: { project: Project }) {
  if (!project.website || project.kind === 'concept') return null

  return <a className="project-website" href={project.website} target="_blank" rel="noreferrer">Visit the website <ArrowUpRight size={18} aria-hidden="true" /></a>
}

export function ProjectCaption({ screenshot }: { screenshot: ProjectScreenshot }) {
  return (
    <>
      <h2>{screenshot.title}</h2>
      <p>{screenshot.description}</p>
      {screenshot.details && <p>{screenshot.details}</p>}
    </>
  )
}

export function ClientFeedback({ project }: { project: Project }) {
  if (!project.feedback) return null

  const { quote, emphasis } = project.feedback
  const emphasisIndex = emphasis ? quote.indexOf(emphasis) : -1

  return (
    <figure className="client-feedback">
      <blockquote>
        <span className="client-feedback__mark" aria-hidden="true">“</span>
        <p>{emphasisIndex < 0 ? quote : <>{quote.slice(0, emphasisIndex)}<strong>{emphasis}</strong>{quote.slice(emphasisIndex + (emphasis?.length ?? 0))}</>}</p>
      </blockquote>
      <figcaption>{project.feedback.attribution}</figcaption>
    </figure>
  )
}

export function TrafficResult({ project }: { project: Project }) {
  if (!project.traffic) return null

  return (
    <div className="project-traffic">
      <p className="project-traffic__label">{project.traffic.label}</p>
      <div className="project-traffic__comparison" aria-label={`${project.traffic.before} before the rebuild, ${project.traffic.after.replace('~', 'approximately ')} after the rebuild`}>
        <div><strong>{project.traffic.before}</strong><span>Before the rebuild</span></div>
        <ArrowRight aria-hidden="true" strokeWidth={1.2} />
        <div><strong>{project.traffic.after}</strong><span>After the rebuild</span></div>
      </div>
      <p className="project-traffic__source">{project.traffic.source}</p>
    </div>
  )
}
