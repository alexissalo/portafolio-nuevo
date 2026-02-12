"use client";

import React from "react"

import { useState } from "react";
import { motion } from "framer-motion";
import { SectionHeading } from "./section-heading";
import { Send, CheckCircle2, AlertCircle, Github, Linkedin, Mail } from "lucide-react";

interface FormData {
  name: string;
  email: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

export function ContactSection() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle"
  );

  function validate(): boolean {
    const newErrors: FormErrors = {};
    if (!formData.name.trim()) newErrors.name = "El nombre es requerido";
    if (!formData.email.trim()) {
      newErrors.email = "El email es requerido";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Email invalido";
    }
    if (!formData.message.trim())
      newErrors.message = "El mensaje es requerido";
    else if (formData.message.trim().length < 10)
      newErrors.message = "El mensaje debe tener al menos 10 caracteres";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!validate()) return;

    setStatus("sending");

    // Simulate send
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setStatus("sent");
    setFormData({ name: "", email: "", message: "" });

    setTimeout(() => setStatus("idle"), 4000);
  }

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  }

  return (
    <section id="contact" className="relative py-32 px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          label="// Contacto"
          title="Hablemos de tu proyecto"
          description="Estoy disponible para proyectos freelance, colaboraciones o posiciones full-time. Escríbeme y respondería lo antes posible."
        />

        <div className="grid gap-12 lg:grid-cols-2">
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="rounded-xl border border-border bg-card p-8">
              <h3 className="font-heading text-lg font-semibold text-foreground">
                Informacion de contacto
              </h3>
              <div className="mt-6 space-y-4">
                <a
                  href="mailto:dev@example.com"
                  className="flex items-center gap-4 text-muted-foreground transition-colors hover:text-primary"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Mail size={18} />
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground">Email</div>
                    <div className="text-sm text-foreground">
                      alexissalomon31@gmail.com
                    </div>
                  </div>
                </a>
                <a
                  href="https://github.com/alexissalo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 text-muted-foreground transition-colors hover:text-primary"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Github size={18} />
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground">GitHub</div>
                    <div className="text-sm text-foreground">
                      github.com/alexissalo
                    </div>
                  </div>
                </a>
                <a
                  href="https://www.linkedin.com/in/alexis-salom%C3%B3n-971548239/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 text-muted-foreground transition-colors hover:text-primary"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Linkedin size={18} />
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground">
                      LinkedIn
                    </div>
                    <div className="text-sm text-foreground">
                      linkedin.com/in/alexis-salomón-971548239
                    </div>
                  </div>
                </a>
              </div>
            </div>

            {/* Availability card */}
            <div className="rounded-xl border border-primary/20 bg-primary/5 p-6">
              <div className="flex items-center gap-3">
                <div className="h-3 w-3 animate-pulse rounded-full bg-primary" />
                <span className="text-sm font-medium text-primary">
                  Disponible para nuevos proyectos
                </span>
              </div>
              <p className="mt-2 text-sm text-muted-foreground">
                Actualmente aceptando proyectos freelance y oportunidades
                full-time. Tiempo de respuesta: menos de 24 horas.
              </p>
            </div>
          </motion.div>

          {/* Contact form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <form
              onSubmit={handleSubmit}
              className="rounded-xl border border-border bg-card p-8"
              noValidate
            >
              <div className="space-y-5">
                {/* Name */}
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-sm font-medium text-foreground"
                  >
                    Nombre
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Tu nombre"
                    className={`w-full rounded-lg border bg-background px-4 py-3 text-sm text-foreground placeholder-muted-foreground outline-none transition-all duration-200 focus:border-primary focus:ring-1 focus:ring-primary ${
                      errors.name ? "border-destructive" : "border-border"
                    }`}
                  />
                  {errors.name && (
                    <motion.p
                      initial={{ opacity: 0, y: -5 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mt-1 flex items-center gap-1 text-xs text-destructive"
                    >
                      <AlertCircle size={12} />
                      {errors.name}
                    </motion.p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-medium text-foreground"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="tu@email.com"
                    className={`w-full rounded-lg border bg-background px-4 py-3 text-sm text-foreground placeholder-muted-foreground outline-none transition-all duration-200 focus:border-primary focus:ring-1 focus:ring-primary ${
                      errors.email ? "border-destructive" : "border-border"
                    }`}
                  />
                  {errors.email && (
                    <motion.p
                      initial={{ opacity: 0, y: -5 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mt-1 flex items-center gap-1 text-xs text-destructive"
                    >
                      <AlertCircle size={12} />
                      {errors.email}
                    </motion.p>
                  )}
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="mb-2 block text-sm font-medium text-foreground"
                  >
                    Mensaje
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Cuentame sobre tu proyecto..."
                    className={`w-full resize-none rounded-lg border bg-background px-4 py-3 text-sm text-foreground placeholder-muted-foreground outline-none transition-all duration-200 focus:border-primary focus:ring-1 focus:ring-primary ${
                      errors.message ? "border-destructive" : "border-border"
                    }`}
                  />
                  {errors.message && (
                    <motion.p
                      initial={{ opacity: 0, y: -5 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mt-1 flex items-center gap-1 text-xs text-destructive"
                    >
                      <AlertCircle size={12} />
                      {errors.message}
                    </motion.p>
                  )}
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={status === "sending" || status === "sent"}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3 font-medium text-primary-foreground transition-all duration-200 hover:opacity-90 disabled:opacity-50 neon-border-glow"
                >
                  {status === "idle" && (
                    <>
                      Enviar mensaje <Send size={16} />
                    </>
                  )}
                  {status === "sending" && (
                    <>
                      <div className="h-4 w-4 animate-spin rounded-full border-2 border-primary-foreground border-t-transparent" />
                      Enviando...
                    </>
                  )}
                  {status === "sent" && (
                    <>
                      <CheckCircle2 size={16} />
                      Mensaje enviado
                    </>
                  )}
                  {status === "error" && "Error al enviar"}
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
