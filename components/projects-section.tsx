"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SectionHeading } from "./section-heading";
import { ExternalLink, Github, ChevronRight } from "lucide-react";
import Image from "next/image";

interface Project {
  slug: string;
  title: string;
  problem: string;
  solution: string;
  stack: string[];
  architecture: string;
  github: string;
  demo: string;
  image: string;
}

const projects: Project[] = [
  {
    slug: "sneakshoes-ecommerce",
    title: "Sneakshoes",
    problem:
      "La necesidad de contar con una tienda online moderna para exhibir productos, permitir la navegación por categorías y simular una experiencia de compra fluida.",
    solution:
      "Desarrollo de un ecommerce frontend con React, enfocado en una arquitectura de componentes reutilizables, manejo de estado y una experiencia de usuario clara y responsive.",
    stack: ["React", "JavaScript", "CSS"],
    architecture:
      "Arquitectura basada en componentes. Separación de lógica y presentación, manejo de estado local y renderizado dinámico.",
    github: "https://github.com/alexissalo/proyecto-react-coderhouse",
    demo: "https://sneakshoes-ecommerce.netlify.app/",
    image: "/projects/sneakshoes.png",
  },
  {
    slug: "pokedex-react",
    title: "Pokedex",
    problem:
      "Mostrar información dinámica y detallada de múltiples entidades obtenidas desde una API externa, manteniendo una experiencia fluida y ordenada.",
    solution:
      "Aplicación web desarrollada en React que consume la Pokémon API, con renderizado dinámico, manejo de estados asíncronos y presentación visual optimizada.",
    stack: ["React", "JavaScript", "REST API"],
    architecture:
      "Arquitectura de componentes con separación de responsabilidades. Consumo de API mediante fetch y control de estados locales.",
    github: "https://github.com/alexissalo/pokedex-react",
    demo: "https://poke-react-pokedex.netlify.app/",
    image: "/projects/pokedex.png",
  },
  {
    slug: "manjares-comidas",
    title: "Manjares Comidas",
    problem:
      "Un emprendimiento gastronómico necesitaba una plataforma web para exhibir sus productos y simular un flujo de compra online.",
    solution:
      "Ecommerce frontend desarrollado con React, enfocado en diseño responsive, estructura clara de catálogo y lógica de carrito de compras.",
    stack: ["React", "JavaScript", "CSS"],
    architecture:
      "Arquitectura de frontend basada en componentes reutilizables y separación de vistas y lógica.",
    github: "https://github.com/alexissalo/proyecto-javascript",
    demo: "https://manjares-comidas.netlify.app/",
    image: "/projects/manjares.png",
  },
  {
    slug: "news-page",
    title: "News Page",
    problem:
      "La necesidad de una plataforma para gestionar y publicar noticias con persistencia de datos y backend propio.",
    solution:
      "Aplicación web full stack con backend en Node.js y base de datos MySQL, permitiendo la gestión y visualización dinámica de noticias.",
    stack: ["HTML", "JavaScript", "Node.js", "MySQL"],
    architecture:
      "Arquitectura cliente-servidor. Backend con Node.js y conexión a base de datos relacional para persistencia de información.",
    github: "https://github.com/alexissalo/news-page",
    demo: "#",
    image: "/projects/noticiasdechivilcoy.png",
  },
];

const allTechs = Array.from(new Set(projects.flatMap((p) => p.stack))).sort();

export function ProjectsSection() {
  const [filter, setFilter] = useState<string | null>(null);
  const [expandedProject, setExpandedProject] = useState<string | null>(null);

  const filteredProjects = filter
    ? projects.filter((p) => p.stack.includes(filter))
    : projects;

  return (
    <section id="projects" className="relative py-32 px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          label="// Proyectos destacados"
          title="Soluciones reales, codigo real"
          description="Cada proyecto resuelve un problema concreto con arquitectura pensada y tecnologias adecuadas."
        />

        {/* Tech filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 flex flex-wrap items-center justify-center gap-2"
        >
          <button
            onClick={() => setFilter(null)}
            className={`rounded-full border px-4 py-1.5 font-mono text-xs transition-all duration-200 ${
              filter === null
                ? "border-primary bg-primary/10 text-primary"
                : "border-border text-muted-foreground hover:border-primary/30 hover:text-foreground"
            }`}
          >
            Todos
          </button>
          {allTechs.map((tech) => (
            <button
              key={tech}
              onClick={() => setFilter(filter === tech ? null : tech)}
              className={`rounded-full border px-4 py-1.5 font-mono text-xs transition-all duration-200 ${
                filter === tech
                  ? "border-primary bg-primary/10 text-primary"
                  : "border-border text-muted-foreground hover:border-primary/30 hover:text-foreground"
              }`}
            >
              {tech}
            </button>
          ))}
        </motion.div>

        {/* Projects grid */}
        <div className="grid gap-6 md:grid-cols-2">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, i) => (
              <motion.article
                key={project.slug}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="group overflow-hidden rounded-xl border border-border bg-card transition-all duration-300 hover:border-primary/30 hover:neon-border-glow"
              >
                {/* Project preview area */}
                <div className="relative aspect-video overflow-hidden bg-secondary">
                  <Image
                    src={project.image}
                    alt={`Preview de ${project.title}`}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(min-width: 768px) 50vw, 100vw"
                    priority={i < 2}
                  />

                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent" />
                  {/* Hover overlay */}
                  <div className="absolute inset-0 flex items-center justify-center gap-4 bg-background/80 opacity-0 backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-100">
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
                    >
                      Demo <ExternalLink size={14} />
                    </a>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
                    >
                      Codigo <Github size={14} />
                    </a>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="font-heading text-lg font-bold text-foreground">
                    {project.title}
                  </h3>

                  {/* Stack tags */}
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-md bg-primary/10 px-2 py-0.5 font-mono text-xs text-primary"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                    {project.problem}
                  </p>

                  {/* Expandable details */}
                  <button
                    onClick={() =>
                      setExpandedProject(
                        expandedProject === project.slug ? null : project.slug,
                      )
                    }
                    className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary transition-colors hover:text-primary/80"
                  >
                    {expandedProject === project.slug
                      ? "Menos detalles"
                      : "Ver detalles"}
                    <ChevronRight
                      size={14}
                      className={`transition-transform duration-200 ${
                        expandedProject === project.slug ? "rotate-90" : ""
                      }`}
                    />
                  </button>

                  <AnimatePresence>
                    {expandedProject === project.slug && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="mt-4 space-y-3 border-t border-border pt-4">
                          <div>
                            <h4 className="text-xs font-semibold uppercase tracking-wider text-primary">
                              Solucion tecnica
                            </h4>
                            <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                              {project.solution}
                            </p>
                          </div>
                          <div>
                            <h4 className="text-xs font-semibold uppercase tracking-wider text-primary">
                              Arquitectura
                            </h4>
                            <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                              {project.architecture}
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
