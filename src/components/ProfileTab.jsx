// src/components/ProfileTab.jsx
import { profile, skills, experiences } from "../data/profile";

export default function ProfileTab() {
  return (
    <div className="max-w-4xl mx-auto space-y-12 pt-12 pb-8 px-8 py-8">
      {/* Hero */}
      <div className="flex flex-col items-center text-center">
        <div className="relative mb-6">
          <div className="w-28 h-28 rounded-2xl bg-slate-800 border-2 border-slate-700 overflow-hidden flex items-center justify-center">
            {profile.avatar ? (
              <img
                src={profile.avatar}
                alt="avatar"
                className="w-full h-full object-cover"
              />
            ) : (
              <svg
                className="w-14 h-14 text-slate-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1}
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
            )}
          </div>
          <span className="absolute -bottom-2 -right-2 w-5 h-5 bg-emerald-500 rounded-full border-2 border-slate-950" />
        </div>

        <p className="text-xs font-semibold tracking-widest text-indigo-400 uppercase mb-2">
          {profile.location}
        </p>
        <h1 className="text-4xl font-black text-white mb-2 tracking-tight">
          {profile.name}
        </h1>
        <p className="text-lg text-slate-400 mb-3">{profile.title}</p>
        <p className="text-sm text-slate-500 max-w-sm leading-relaxed">
          {profile.tagline}
        </p>

        {/* Social buttons */}
        <div className="flex gap-3 mt-6 flex-wrap justify-center">
          <a
            href={`mailto:${profile.email}`}
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-semibold transition active:scale-95"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
            Email
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-800 border border-slate-700 hover:border-slate-500 text-slate-300 text-sm font-semibold transition active:scale-95"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.2 11.38.6.1.82-.26.82-.58v-2.03c-3.34.72-4.04-1.61-4.04-1.61-.54-1.37-1.33-1.74-1.33-1.74-1.08-.74.08-.73.08-.73 1.2.08 1.83 1.23 1.83 1.23 1.06 1.82 2.78 1.3 3.46.99.1-.77.42-1.3.76-1.6-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.23-3.22-.12-.3-.53-1.52.12-3.17 0 0 1-.32 3.3 1.23a11.5 11.5 0 013-.4c1.02 0 2.04.13 3 .4 2.28-1.55 3.29-1.23 3.29-1.23.65 1.65.24 2.87.12 3.17.77.84 1.23 1.91 1.23 3.22 0 4.61-2.81 5.63-5.48 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.22.69.83.57C20.57 21.8 24 17.3 24 12c0-6.63-5.37-12-12-12z" />
            </svg>
            GitHub
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-800 border border-slate-700 hover:border-slate-500 text-slate-300 text-sm font-semibold transition active:scale-95"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 110-4.12 2.06 2.06 0 010 4.12zM7.12 20.45H3.56V9h3.56v11.45zM22.23 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.72V1.72C24 .77 23.21 0 22.23 0z" />
            </svg>
            LinkedIn
          </a>
        </div>
      </div>

      <div className="border-t border-slate-800" />

      {/* About */}
      <div>
        <p className="text-xs font-semibold tracking-widest text-indigo-400 uppercase mb-4">
          About
        </p>
        <p className="text-sm text-slate-300 leading-relaxed">
          {profile.about}
        </p>
      </div>

      <div className="border-t border-slate-800" />

      <div>
        <p className="text-xs font-semibold tracking-widest text-indigo-400 uppercase mb-6">
          Experience
        </p>
        <div className="relative">
          <div className="absolute left-4 top-0 bottom-0 w-px bg-slate-700/60" />
          <div className="space-y-6">
            {experiences.map((exp, i) => (
              <div key={i} className="relative pl-10">
                <div className="absolute left-2.5 top-1.5 w-3 h-3 rounded-full bg-indigo-500 border-2 border-indigo-400 -translate-x-1/2" />
                <div className="bg-slate-800/50 border border-slate-700/40 rounded-xl px-5 py-4 text-left">
                  {/* Header */}
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <div>
                      <p className="text-sm font-bold text-white">{exp.role}</p>
                      <p className="text-xs text-indigo-400 font-medium mt-0.5">
                        {exp.company}
                      </p>
                    </div>
                    <span className="text-xs text-slate-500 shrink-0 bg-slate-900 border border-slate-700 px-2.5 py-1 rounded-lg">
                      {exp.period}
                    </span>
                  </div>

                  {/* Desc */}
                  <p className="text-xs text-slate-400 leading-relaxed mb-3">
                    {exp.desc}
                  </p>

                  {/* Tech */}
                  <div className="flex flex-wrap gap-1.5">
                    {exp.tech.map((t) => (
                      <span
                        key={t}
                        className="text-xs px-2.5 py-1 rounded-md bg-slate-900 border border-slate-700 text-slate-400"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-slate-800" />

      {/* Skills */}
      <div>
        <p className="text-xs font-semibold tracking-widest text-indigo-400 uppercase mb-6">
          Skills
        </p>
        <div className="space-y-5">
          {skills.map((group) => (
            <div key={group.category}>
              <p className="text-xs text-slate-500 mb-2.5 font-medium">
                {group.category}
              </p>
              <div className="flex flex-wrap gap-2">
                {group.items.map((skill) => (
                  <span
                    key={skill}
                    className="text-xs font-medium px-3 py-1.5 rounded-lg bg-slate-800 border border-slate-700 text-slate-300 hover:border-indigo-500/50 hover:text-indigo-300 transition cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="border-t border-slate-800" />

      {/* Contact */}
      <div>
        <p className="text-xs font-semibold tracking-widest text-indigo-400 uppercase mb-4">
          Contact
        </p>
        <div className="space-y-3">
          {[
            {
              label: "Email",
              value: profile.email,
              href: `mailto:${profile.email}`,
            },
            {
              label: "GitHub",
              value: profile.github.replace("https://", ""),
              href: profile.github,
            },
            {
              label: "LinkedIn",
              value: profile.linkedin.replace("https://", ""),
              href: profile.linkedin,
            },
          ].map(({ label, value, href }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-between bg-slate-800/50 border border-slate-700/60 rounded-xl px-4 py-3 hover:border-indigo-500/40 hover:bg-slate-800 transition group"
            >
              <span className="text-xs text-slate-500 uppercase tracking-wider">
                {label}
              </span>
              <span className="text-sm text-slate-300 group-hover:text-indigo-300 transition">
                {value}
              </span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
