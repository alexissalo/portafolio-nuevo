"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "./section-heading";
import { Code2, Layers, Zap, Shield } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Codigo limpio",
    description:
      "Escribo codigo legible, mantenible y bien documentado. Patrones solidos y principios SOLID.",
  },
  {
    icon: Layers,
    title: "Arquitectura escalable",
    description:
      "Diseno sistemas pensados para crecer. Separacion de responsabilidades y modularidad.",
  },
  {
    icon: Zap,
    title: "Performance",
    description:
      "Optimizacion constante. Lighthouse alto, lazy loading, caching y mejores practicas.",
  },
  {
    icon: Shield,
    title: "Seguridad",
    description:
      "Autenticacion robusta, validacion de datos, proteccion contra ataques comunes.",
  },
];

export function AboutSection() {
  return (
    <section id="about" className="relative py-32 px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          label="// Sobre mi"
          title="Desarrollo con criterio tecnico"
          description="No solo escribo codigo. Construyo soluciones con vision de producto, foco en escalabilidad y atencion al detalle que marca la diferencia."
        />

        <div className="grid gap-8 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="rounded-xl border border-border bg-card p-8">
              <p className="leading-relaxed text-muted-foreground">
                Soy desarrollador full stack con experiencia construyendo
                productos reales desde cero. Mi enfoque esta en entender el
                problema antes de escribir la primera linea de codigo.
              </p>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                Trabajo con{" "}
                <span className="font-medium text-foreground">React</span>,{" "}
                <span className="font-medium text-foreground">Next.js</span>,{" "}
                <span className="font-medium text-foreground">Node.js</span> y
                bases de datos. Me especializo en crear
                arquitecturas limpias que soporten crecimiento y equipos en
                expansion.
              </p>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                Cada proyecto es una oportunidad de resolver un problema real
                con la tecnologia adecuada, no la mas popular.
              </p>
            </div>

            {/* Terminal snippet */}
            <div className="overflow-hidden rounded-xl border border-border bg-card">
              <div className="flex items-center gap-2 border-b border-border px-4 py-3">
                <div className="h-3 w-3 rounded-full bg-destructive/50" />
                <div className="h-3 w-3 rounded-full bg-chart-4/50" />
                <div className="h-3 w-3 rounded-full bg-primary/50" />
                <span className="ml-2 font-mono text-xs text-muted-foreground">
                  terminal
                </span>
              </div>
              <div className="p-4 font-mono text-sm">
                <div className="text-muted-foreground">
                  <span className="text-primary">$</span> cat about.json
                </div>
                <div className="mt-2 text-muted-foreground">
                  {"{"}{"\n"}
                  {"  "}<span className="text-primary">{'"rol"'}</span>: <span className="text-chart-4">{'"Full Stack Developer"'}</span>,{"\n"}
                  {"  "}<span className="text-primary">{'"enfoque"'}</span>: <span className="text-chart-4">{'"Producto & Escalabilidad"'}</span>,{"\n"}
                  {"  "}<span className="text-primary">{'"principios"'}</span>: [<span className="text-chart-4">{'"Clean Code"'}</span>, <span className="text-chart-4">{'"SOLID"'}</span>, <span className="text-chart-4">{'"DRY"'}</span>],{"\n"}
                  {"  "}<span className="text-primary">{'"disponible"'}</span>: <span className="text-primary">true</span>{"\n"}
                  {"}"}
                </div>
              </div>
            </div>
          </motion.div>

          <div className="grid gap-4 sm:grid-cols-2">
            {highlights.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group rounded-xl border border-border bg-card p-6 transition-all duration-300 hover:border-primary/30 hover:neon-border-glow"
              >
                <div className="mb-4 inline-flex rounded-lg bg-primary/10 p-2.5 text-primary transition-colors duration-300 group-hover:bg-primary/20">
                  <item.icon size={20} />
                </div>
                <h3 className="font-heading text-sm font-semibold text-foreground">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
