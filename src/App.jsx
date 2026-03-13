import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ProfileTab from './components/ProfileTab'
import ProjectsTab from './components/ProjectsTab'

function App() {
  const [tab, setTab] = useState("profile")

  return (
    <div className="min-h-screen bg-slate-950 text-white rounded-2xl border border-slate-700/30">
      {/* Background grid */}
      <div
        className="fixed inset-0 pointer-events-none z-0"
        style={{
          backgroundImage: `linear-gradient(rgba(99,102,241,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,0.04) 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
        }}
      />
      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-600 opacity-[0.05] rounded-full blur-3xl pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 pb-28">
        {tab === "profile" && <ProfileTab />}
        {tab === "projects" && <ProjectsTab />}
      </div>

      {/* Bottom Tab Bar */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
        <div className="flex gap-1 bg-slate-900/90 backdrop-blur-md border border-slate-700/60 rounded-2xl p-1.5 shadow-xl">
          {[
            {
              key: "profile",
              label: "Profile",
              icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            },
            {
              key: "projects",
              label: "Projects",
              icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
            },
          ].map(({ key, label, icon }) => (
            <button
              key={key}
              onClick={() => setTab(key)}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition select-none bg-transparent ${
                tab === key
                  ? "bg-indigo-600 text-white shadow-lg shadow-indigo-500/20"
                  : "text-slate-400 hover:text-white hover:bg-slate-800"
              }`}
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">{icon}</svg>
              {label}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}

export default App
