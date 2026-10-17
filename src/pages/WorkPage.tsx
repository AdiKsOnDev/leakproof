import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { CallToAction } from '../components/ui/CallToAction'
import { PageHero } from '../components/ui/PageHero'
import { ProjectImage, TrafficResult } from '../components/work/ProjectEvidence'
import { editorialPhotos } from '../data/editorialPhotos'
import { projects } from '../data/projects'

export function WorkPage() {
  return (
    <>
      <PageHero
        photo={editorialPhotos.work}
        title="Our work"
        description="Websites we’ve built, with a closer look at the choices behind them."
      />
      <section className="container section work-grid" aria-label="Projects">
        {[...projects].sort((first, second) => Number(Boolean(second.featured)) - Number(Boolean(first.featured))).map((project, index) => {
          const isConcept = project.kind === 'concept'

          return (
            <article className={`work-project${project.featured ? ' work-project--featured' : ''}`} key={project.slug}>
              <Link className="work-project__image" to={`/work/${project.slug}`} aria-label={`View ${project.name}${isConcept ? ' design notes' : ' case study'}`}>
                <ProjectImage screenshot={project.screenshots[0]} eager={index === 0} />
              </Link>
              <div className="work-project__copy">
                <p>{isConcept ? 'Concept' : project.category}</p>
                <h2><Link to={`/work/${project.slug}`}>{project.name}</Link></h2>
                <p>{project.summary}</p>
                <Link className="project-text-link" to={`/work/${project.slug}`}>{isConcept ? 'View design notes' : 'Read the case study'} <ArrowUpRight size={17} aria-hidden="true" /></Link>
              </div>
              {project.featured && (project.feedback?.emphasis || project.traffic) && (
                <div className="work-project__proof">
                  {project.feedback?.emphasis && (
                    <figure>
                      <blockquote><p>“{project.feedback.emphasis}”</p></blockquote>
                      <figcaption>{project.feedback.attribution}</figcaption>
                    </figure>
                  )}
                  {project.traffic && <TrafficResult project={project} />}
                </div>
              )}
            </article>
          )
        })}
      </section>
      <CallToAction title="Send us your website" text="We’ll take a look and tell you what we’d fix first." />
    </>
  )
}
