import { ArrowLeft, ArrowRight, Maximize2, X } from 'lucide-react'
import { Fragment, useRef, useState, type ReactNode } from 'react'
import type { Project } from '../../types/content'
import { ProjectCaption, ProjectImage } from './ProjectEvidence'

export function ProjectGallery({ project, introduction, afterLead }: {
  project: Project
  introduction: ReactNode
  afterLead?: ReactNode
}) {
  const [activeIndex, setActiveIndex] = useState(0)
  const dialogRef = useRef<HTMLDialogElement>(null)
  const activeScreenshot = project.screenshots[activeIndex]
  const changeScreenshot = (offset: number) => setActiveIndex((index) => (index + offset + project.screenshots.length) % project.screenshots.length)

  return (
    <>
      <div className="project-gallery">
        <div className="project-gallery__introduction">{introduction}</div>
        {project.screenshots.map((screenshot, index) => (
          <Fragment key={screenshot.src}>
            <figure className={`project-gallery__figure${index === 0 ? ' project-gallery__lead' : ''}`}>
              <button className="project-gallery__image" type="button" aria-label={`Enlarge ${screenshot.title}`} onClick={() => { setActiveIndex(index); dialogRef.current?.showModal() }}>
                <ProjectImage screenshot={screenshot} eager={index === 0} />
                <span className="project-gallery__enlarge"><Maximize2 size={18} aria-hidden="true" /></span>
              </button>
              <figcaption><ProjectCaption screenshot={screenshot} /></figcaption>
            </figure>
            {index === 0 && afterLead && <div className="project-gallery__response">{afterLead}</div>}
          </Fragment>
        ))}
      </div>
      <dialog className="project-viewer" ref={dialogRef} aria-label={`${project.name} website screenshots`} onKeyDown={(event) => {
        if (event.key !== 'ArrowLeft' && event.key !== 'ArrowRight') return
        event.preventDefault()
        changeScreenshot(event.key === 'ArrowRight' ? 1 : -1)
      }} onClick={(event) => { if (event.target === event.currentTarget) dialogRef.current?.close() }}>
        <div className="project-viewer__bar">
          <span aria-live="polite">{activeScreenshot.title}</span>
          <button type="button" aria-label="Close screenshot" onClick={() => dialogRef.current?.close()}><X size={22} /></button>
        </div>
        <ProjectImage screenshot={activeScreenshot} eager />
        <div className="project-viewer__bottom">
          <p>{activeScreenshot.description}</p>
          <div>
            <button type="button" aria-label="Previous screenshot" onClick={() => changeScreenshot(-1)}><ArrowLeft size={20} /></button>
            <span aria-live="polite">{activeIndex + 1} / {project.screenshots.length}</span>
            <button type="button" aria-label="Next screenshot" onClick={() => changeScreenshot(1)}><ArrowRight size={20} /></button>
          </div>
        </div>
      </dialog>
    </>
  )
}
