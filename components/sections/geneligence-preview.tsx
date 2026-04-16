"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Code, GraduationCap, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { geneligenceData } from "@/lib/mock-data";

const focusIcons = {
  "Разработка": Code,
  "Образование": GraduationCap,
  "Менторство": Users,
};

const focusAreas = [
  {
    title: "Разработка",
    description: "Создание масштабируемых веб- и мобильных приложений с использованием современных технологий и лучших практик.",
  },
  {
    title: "Образование",
    description: "Комплексные курсы и воркшопы для ускорения вашей карьеры во фронтенд-разработке.",
  },
  {
    title: "Менторство",
    description: "Индивидуальное наставничество от экспертов отрасли для навигации по вашему пути в IT.",
  },
];

export function GeneligencePreviewSection() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="mb-2 text-sm font-medium uppercase tracking-widest text-primary">
              {geneligenceData.name}
            </p>
            <h2 className="mb-6 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              <span className="text-balance">{geneligenceData.tagline}</span>
            </h2>
            <p className="mb-8 text-base leading-relaxed text-muted-foreground">
              {geneligenceData.description}
            </p>

            <Button asChild className="gap-2">
              <Link href="/geneligence">
                {"Узнать больше"}
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </motion.div>

          {/* Focus Areas */}
          <div className="space-y-4">
            {focusAreas.map((area, index) => {
              const Icon = focusIcons[area.title as keyof typeof focusIcons];
              return (
                <motion.div
                  key={area.title}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex gap-4 rounded-xl border border-border bg-card p-5 transition-colors hover:border-primary/50"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="mb-1 font-semibold text-foreground">
                      {area.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {area.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
