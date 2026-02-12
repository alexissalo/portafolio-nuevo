"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "./section-heading";

interface TechItem {
  name: string;
  category: string;
}

const techStack: { category: string; items: TechItem[] }[] = [
  {
    category: "Frontend",
    items: [
      { name: "HTML5", category: "Frontend" },
      { name: "CSS3", category: "Frontend" },
      { name: "JavaScript", category: "Frontend" },
      { name: "React", category: "Frontend" },
      { name: "Next.js", category: "Frontend" },
      { name: "Tailwind CSS", category: "Frontend" },
    ],
  },
  {
    category: "Backend",
    items: [
      { name: "Node.js", category: "Backend" },
      { name: "Express", category: "Backend" },
      { name: "REST APIs", category: "Backend" },
      { name: "Auth / JWT", category: "Backend" },
    ],
  },
  {
    category: "Bases de datos",
    items: [
      { name: "MySQL", category: "Bases de datos" },
      { name: "PostgreSQL", category: "Bases de datos" },
      { name: "MongoDB", category: "Bases de datos" },
    ],
  },
  {
    category: "Herramientas",
    items: [
      { name: "Git", category: "Herramientas" },
      { name: "Github", category: "Herramientas" },
      { name: "VS Code", category: "Herramientas" },
      { name: "Figma", category: "Herramientas" },
    ],
  },
];

export function StackSection() {
  return (
    <section id="stack" className="relative py-32 px-6">
      {/* Subtle background accent */}
      <div className="pointer-events-none absolute inset-0 bg-secondary/30" />

      <div className="relative mx-auto max-w-6xl">
        <SectionHeading
          label="// Stack tecnologico"
          title="Tecnologias que domino"
          description="Las herramientas con las que construyo productos reales, desde el frontend hasta la base de datos."
        />

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {techStack.map((group, groupIndex) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: groupIndex * 0.1 }}
              className="rounded-xl border border-border bg-card p-6"
            >
              <h3 className="mb-6 font-heading text-sm font-semibold uppercase tracking-wider text-primary">
                {group.category}
              </h3>
              <ul className="space-y-3">
                {group.items.map((tech, i) => (
                  <motion.li
                    key={tech.name}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.3,
                      delay: groupIndex * 0.1 + i * 0.05,
                    }}
                    className="group flex items-center gap-3 text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-primary/50 transition-all duration-300 group-hover:bg-primary group-hover:shadow-[0_0_8px_hsl(var(--primary)/0.5)]" />
                    {tech.name}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 grid grid-cols-2 gap-4 md:grid-cols-4"
        >
          {[
            { value: "15+", label: "Proyectos completados" },
            { value: "3+", label: "Anos de experiencia" },
            { value: "10+", label: "Proyectos full stack" },
            { value: "10+", label: "Tecnologias dominadas" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="rounded-xl border border-border bg-card p-6 text-center"
            >
              <div className="font-heading text-3xl font-bold text-primary neon-glow">
                {stat.value}
              </div>
              <div className="mt-1 text-xs text-muted-foreground">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
