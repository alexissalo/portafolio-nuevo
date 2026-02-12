"use client";

import { Github, Linkedin, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border px-6 py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 md:flex-row">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <span className="font-heading font-semibold text-foreground">
            {"<Alexis Salomon />"}
          </span>
          <span>&middot;</span>
          <span>Full Stack Developer</span>
        </div>

        <div className="flex items-center gap-6">
          <a
            href="https://github.com/alexissalo"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground transition-colors hover:text-primary"
            aria-label="GitHub"
          >
            <Github size={18} />
          </a>
          <a
            href="https://www.linkedin.com/in/alexis-salom%C3%B3n-971548239/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground transition-colors hover:text-primary"
            aria-label="LinkedIn"
          >
            <Linkedin size={18} />
          </a>
          <a
            href="mailto:alexissalomon31@gmail.com"
            className="text-muted-foreground transition-colors hover:text-primary"
            aria-label="Email"
          >
            <Mail size={18} />
          </a>
        </div>

        <p className="text-xs text-muted-foreground">
          {`© ${new Date().getFullYear()} — Construido por Alexis Salomon`}
        </p>
      </div>
    </footer>
  );
}
