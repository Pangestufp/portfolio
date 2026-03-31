// src/components/ProjectsTab.jsx
import { useState } from "react"
import { projects } from "../data/profile"

const statusStyle = {
  Live: "bg-emerald-500/15 text-emerald-400 border-emerald-500/25",
  WIP: "bg-amber-500/15 text-amber-400 border-amber-500/25",
  Archived: "bg-slate-500/15 text-slate-400 border-slate-500/25",
}

const GithubIcon = () => (
  <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.2 11.38.6.1.82-.26.82-.58v-2.03c-3.34.72-4.04-1.61-4.04-1.61-.54-1.37-1.33-1.74-1.33-1.74-1.08-.74.08-.73.08-.73 1.2.08 1.83 1.23 1.83 1.23 1.06 1.82 2.78 1.3 3.46.99.1-.77.42-1.3.76-1.6-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.23-3.22-.12-.3-.53-1.52.12-3.17 0 0 1-.32 3.3 1.23a11.5 11.5 0 013-.4c1.02 0 2.04.13 3 .4 2.28-1.55 3.29-1.23 3.29-1.23.65 1.65.24 2.87.12 3.17.77.84 1.23 1.91 1.23 3.22 0 4.61-2.81 5.63-5.48 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.22.69.83.57C20.57 21.8 24 17.3 24 12c0-6.63-5.37-12-12-12z"/>
  </svg>
)

const ErdIcon = () => (
  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2 1 3 3 3h10c2 0 3-1 3-3V7c0-2-1-3-3-3H7C5 4 4 5 4 7zm0 5h16M9 4v16" />
  </svg>
)

function ImageCarousel({ images }) {
  const [current, setCurrent] = useState(0)
  if (!images || images.length === 0) return null

  const prev = () => setCurrent((c) => (c - 1 + images.length) % images.length)
  const next = () => setCurrent((c) => (c + 1) % images.length)

  return (
    <div className="relative w-full h-72 bg-slate-800 overflow-hidden group/carousel">
      <img
        src={images[current]}
        alt={`screenshot-${current}`}
        className="w-full h-full object-contain opacity-80 group-hover:opacity-100 transition"
      />

      {images.length > 1 && (
        <>
          <button onClick={prev}
            className="absolute left-2 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-slate-900/80 border border-slate-700 text-white flex items-center justify-center opacity-0 group-hover/carousel:opacity-100 transition hover:bg-slate-800 bg-transparent">
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button onClick={next}
            className="absolute right-2 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-slate-900/80 border border-slate-700 text-white flex items-center justify-center opacity-0 group-hover/carousel:opacity-100 transition hover:bg-slate-800 bg-transparent">
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5">
            {images.map((_, i) => (
              <button key={i} onClick={() => setCurrent(i)}
                className={`w-1.5 h-1.5 rounded-full transition border-0 p-0 bg-transparent ${i === current ? "bg-white" : "bg-slate-500"}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  )
}

function FullstackCard({ project }) {
  return (
    <div className="bg-slate-900 border border-slate-700/60 rounded-2xl overflow-hidden hover:border-indigo-500/30 transition group">
      <div className="h-1 w-full bg-gradient-to-r from-indigo-500 via-violet-500 to-purple-500 opacity-0 group-hover:opacity-100 transition" />

      <ImageCarousel images={project.images} />

      <div className="p-6 text-left">
        <div className="flex items-start justify-between mb-1">
          <div>
            <p className="text-xs text-indigo-400 uppercase tracking-widest mb-1">{project.type.toUpperCase()}</p>
            <h3 className="text-base font-bold text-white">{project.title}</h3>
          </div>
          <span className={`text-xs font-semibold px-2.5 py-1 rounded-full border shrink-0 ml-4 ${statusStyle[project.status] || statusStyle.Archived}`}>
            {project.status}
          </span>
        </div>

        <p className="text-sm text-slate-400 leading-relaxed mt-2 mb-4">{project.desc}</p>

        <div className="flex flex-wrap gap-2 mb-5">
          {project.tech.map((t) => (
            <span key={t} className="text-xs px-2.5 py-1 rounded-md bg-slate-800 border border-slate-700 text-slate-400">{t}</span>
          ))}
        </div>

        <div className="flex gap-2 flex-wrap">
          {project.repo && (
            <a href={project.repo} target="_blank" rel="noreferrer"
              className="flex items-center gap-1.5 text-xs font-semibold px-3 py-2 rounded-lg bg-slate-800 border border-slate-700 hover:border-slate-500 text-slate-300 transition active:scale-95">
              <GithubIcon /> GitHub
            </a>
          )}
          {project.erd && (
            <a href={project.erd} target="_blank" rel="noreferrer"
              className="flex items-center gap-1.5 text-xs font-semibold px-3 py-2 rounded-lg bg-violet-500/10 border border-violet-500/30 text-violet-400 hover:bg-violet-500/20 transition active:scale-95">
              <ErdIcon /> ERD
            </a>
          )}
        </div>
      </div>
    </div>
  )
}

function DesignCard({ project }) {
  return (
    <div className="bg-slate-900 border border-slate-700/60 rounded-2xl overflow-hidden hover:border-violet-500/30 transition group">
      <div className="h-1 w-full bg-gradient-to-r from-violet-500 via-pink-500 to-rose-500 opacity-0 group-hover:opacity-100 transition" />

      <ImageCarousel images={project.images} />

      <div className="p-6">
        <div className="flex items-start justify-between mb-1">
          <div>
            <p className="text-xs text-violet-400 uppercase tracking-widest mb-1">Design System</p>
            <h3 className="text-base font-bold text-white">{project.title}</h3>
          </div>
          <span className={`text-xs font-semibold px-2.5 py-1 rounded-full border shrink-0 ml-4 ${statusStyle[project.status] || statusStyle.Archived}`}>
            {project.status}
          </span>
        </div>

        <p className="text-sm text-slate-400 leading-relaxed mt-2 mb-4">{project.desc}</p>

        <div className="flex flex-wrap gap-2 mb-5">
          {project.tech.map((t) => (
            <span key={t} className="text-xs px-2.5 py-1 rounded-md bg-slate-800 border border-slate-700 text-slate-400">{t}</span>
          ))}
        </div>

        <div className="flex gap-2 flex-wrap">
          {project.preview && (
            <a href={project.preview} target="_blank" rel="noreferrer"
              className="flex items-center gap-1.5 text-xs font-semibold px-3 py-2 rounded-lg bg-violet-600 hover:bg-violet-500 text-white transition active:scale-95">
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0zM2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
              View Design
            </a>
          )}
          {project.erd && (
            <a href={project.erd} target="_blank" rel="noreferrer"
              className="flex items-center gap-1.5 text-xs font-semibold px-3 py-2 rounded-lg bg-violet-500/10 border border-violet-500/30 text-violet-400 hover:bg-violet-500/20 transition active:scale-95">
              <ErdIcon /> ERD
            </a>
          )}
        </div>
      </div>
    </div>
  )
}

function ErdCard({ project }) {
  return (
    <div className="bg-slate-900 border border-slate-700/60 rounded-2xl overflow-hidden hover:border-emerald-500/30 transition group">
      <div className="h-1 w-full bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition" />

      <ImageCarousel images={project.images} />

      <div className="p-6 text-left">
        <div className="flex items-start gap-4 mb-3">
          <div className="flex-1">
            <p className="text-xs text-emerald-400 uppercase tracking-widest mb-1">Database Design</p>
            <h3 className="text-base font-bold text-white">{project.title}</h3>
          </div>
        </div>

        <p className="text-sm text-slate-400 leading-relaxed mb-5">{project.desc}</p>

        {project.repo && (
          <a href={project.repo} target="_blank" rel="noreferrer"
            className="flex items-center gap-1.5 text-xs font-semibold px-3 py-2 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 hover:bg-emerald-500/20 transition active:scale-95 w-fit">
            <ErdIcon /> View ERD
          </a>
        )}
      </div>
    </div>
  )
}

export default function ProjectsTab() {
  return (
    <div className="max-w-2xl mx-auto pt-10 pb-8 space-y-4 px-8">
      <div className="mb-8">
        <p className="text-xs font-semibold tracking-widest text-indigo-400 uppercase mb-1">Portfolio</p>
        <h2 className="text-2xl font-black text-white tracking-tight">Projects</h2>
      </div>

      {projects.map((project, i) =>
        project.type === "erd"
          ? <ErdCard key={i} project={project} />
          : <FullstackCard key={i} project={project} />
      )}
    </div>
  )
}