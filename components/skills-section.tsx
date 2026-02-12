"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "./section-heading";

interface Skill {
  name: string;
  level: "Avanzado" | "Intermedio" | "Aprendiendo";
  context: string;
  percentage: number;
}

const skills: Skill[] = [
  {
    name: "React / Next.js",
    level: "Avanzado",
    context: "SPAs, SSR, ISR, dashboards, e-commerce, plataformas SaaS",
    percentage: 92,
  },
  {
    name: "JavaScript / ES6+",
    level: "Avanzado",
    context: "Logica de negocio, algoritmos, manipulacion de datos, async patterns",
    percentage: 90,
  },
  {
    name: "Node.js / Express",
    level: "Avanzado",
    context: "APIs REST, autenticacion, middlewares, integraciones de terceros",
    percentage: 88,
  },
  {
    name: "HTML / CSS / Tailwind",
    level: "Avanzado",
    context: "Responsive design, accesibilidad, design systems, animaciones",
    percentage: 95,
  },
  {
    name: "PostgreSQL / MySQL",
    level: "Avanzado",
    context: "Modelado de datos, queries complejas, optimizacion, migraciones",
    percentage: 85,
  },
  {
    name: "Git / DevOps",
    level: "Intermedio",
    context: "Flujos de trabajo, CI/CD, despliegues, contenedores",
    percentage: 75,
  },
];

const levelColors: Record<string, string> = {
  Avanzado: "text-primary",
  Intermedio: "text-chart-4",
  Aprendiendo: "text-chart-2",
};

export function SkillsSection() {
  return (
    <section id="skills" className="relative py-32 px-6">
      <div className="pointer-events-none absolute inset-0 bg-secondary/30" />

      <div className="relative mx-auto max-w-4xl">
        <SectionHeading
          label="// Skills reales"
          title="Profundidad sobre amplitud"
          description="Cada skill tiene contexto real: donde lo aplico, a que nivel y en que tipo de proyectos."
        />

        <div className="space-y-6">
          {skills.map((skill, i) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group rounded-xl border border-border bg-card p-6 transition-all duration-300 hover:border-primary/30"
            >
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-3">
                    <h3 className="font-heading text-base font-semibold text-foreground">
                      {skill.name}
                    </h3>
                    <span
                      className={`rounded-full border border-border px-2.5 py-0.5 font-mono text-xs ${levelColors[skill.level]}`}
                    >
                      {skill.level}
                    </span>
                  </div>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {skill.context}
                  </p>
                </div>
                <div className="font-mono text-2xl font-bold text-primary">
                  {skill.percentage}%
                </div>
              </div>

              {/* Progress bar */}
              <div className="mt-4 h-1 overflow-hidden rounded-full bg-secondary">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.percentage}%` }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 1,
                    delay: i * 0.1,
                    ease: "easeOut",
                  }}
                  className="h-full rounded-full bg-primary"
                  style={{
                    boxShadow: "0 0 10px hsl(var(--primary) / 0.4)",
                  }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
