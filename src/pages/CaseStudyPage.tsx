import { ArrowLeft } from 'lucide-react'
import { Link, useParams } from 'react-router-dom'
import { CallToAction } from '../components/ui/CallToAction'
import { ClientFeedback, ProjectCaption, ProjectWebsite, TrafficResult } from '../components/work/ProjectEvidence'
import { ProjectGallery } from '../components/work/ProjectGallery'
import { getProject } from '../data/projects'
import { NotFoundPage } from './NotFoundPage'

export function CaseStudyPage() {
  const { projectSlug } = useParams()
  const project = getProject(projectSlug)

  if (!project) return <NotFoundPage />

  return (
    <>
      <article className={`case-study${project.kind === 'concept' ? ' case-study--concept' : ''}`}>
        <div className="container">
          <ProjectGallery
            key={project.slug}
            project={project}
            introduction={(
              <>
                <header className="case-heading">
                  <Link className="project-back" to="/work"><ArrowLeft size={16} aria-hidden="true" />Our work</Link>
                  <h1>{project.name}</h1>
                  {project.kind === 'concept' && <p className="project-kind">Concept</p>}
                  <p className="case-heading__service">{project.service}</p>
                  {project.overview && <p className="case-heading__summary">{project.overview}</p>}
                  <ProjectWebsite project={project} />
                </header>
                {project.kind === 'concept' && <div className="case-concept-note"><ProjectCaption screenshot={project.screenshots[0]} /></div>}
                {project.traffic && <section className="case-traffic" aria-label="Reported traffic"><TrafficResult project={project} /></section>}
              </>
            )}
            afterLead={project.feedback ? (
              <section className="case-feedback" aria-label="Client feedback"><ClientFeedback project={project} /></section>
            ) : undefined}
          />
        </div>
      </article>
      <CallToAction title="Send us your website" text="We’ll take a look and tell you what we’d fix first." />
    </>
  )
}
