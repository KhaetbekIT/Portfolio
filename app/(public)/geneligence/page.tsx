"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { 
  Code, 
  GraduationCap, 
  Users, 
  Briefcase,
  ArrowRight,
  Target,
  Lightbulb,
  Heart,
  Globe
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { geneligenceData } from "@/lib/mock-data";

const serviceIcons = {
  code: Code,
  "graduation-cap": GraduationCap,
  users: Users,
  briefcase: Briefcase,
};

const valueIcons = [Target, Lightbulb, Heart, Globe];

export default function GeneligencePage() {
  return (
    <div className="py-24">
      {/* Hero Section */}
      <section className="mx-auto max-w-7xl px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-20 text-center"
        >
          <p className="mb-4 text-sm font-medium uppercase tracking-widest text-primary">
            {geneligenceData.name}
          </p>
          <h1 className="mb-6 text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            <span className="text-balance">{geneligenceData.tagline}</span>
          </h1>
          <p className="mx-auto max-w-3xl text-lg text-muted-foreground">
            {geneligenceData.description}
          </p>
        </motion.div>
      </section>

      {/* Mission Section */}
      <section className="bg-card/50 py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h2 className="mb-4 text-2xl font-bold text-foreground sm:text-3xl">
              {"Наша миссия"}
            </h2>
            <p className="mx-auto max-w-3xl text-lg text-muted-foreground">
              {geneligenceData.mission}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-12 text-center"
          >
            <p className="mb-2 text-sm font-medium uppercase tracking-widest text-primary">
              {"Во что мы верим"}
            </p>
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              {"Наши ключевые ценности"}
            </h2>
          </motion.div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {geneligenceData.values.map((value, index) => {
              const Icon = valueIcons[index];
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="rounded-xl border border-border bg-card p-6 text-center transition-all hover:border-primary/50"
                >
                  <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Icon className="h-7 w-7" />
                  </div>
                  <h3 className="mb-2 font-semibold text-foreground">
                    {value.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {value.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="bg-card/50 py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-12 text-center"
          >
            <p className="mb-2 text-sm font-medium uppercase tracking-widest text-primary">
              {"Что мы предлагаем"}
            </p>
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              {"Наши услуги"}
            </h2>
          </motion.div>

          <div className="grid gap-8 lg:grid-cols-2">
            {geneligenceData.services.map((service, index) => {
              const Icon = serviceIcons[service.icon as keyof typeof serviceIcons] || Code;
              return (
                <motion.div
                  key={service.title}
                  id={service.title.toLowerCase()}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex gap-6 rounded-xl border border-border bg-card p-6 transition-all hover:border-primary/50"
                >
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Icon className="h-7 w-7" />
                  </div>
                  <div>
                    <h3 className="mb-2 text-xl font-semibold text-foreground">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {service.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Roadmap Section */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-12 text-center"
          >
            <p className="mb-2 text-sm font-medium uppercase tracking-widest text-primary">
              {"Путь вперёд"}
            </p>
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              {"Дорожная карта"}
            </h2>
          </motion.div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 top-0 h-full w-px bg-border md:left-1/2" />

            <div className="space-y-8">
              {geneligenceData.roadmap.map((item, index) => (
                <motion.div
                  key={item.quarter}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`relative flex items-center gap-8 ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Content */}
                  <div className={`ml-12 flex-1 md:ml-0 ${index % 2 === 0 ? "md:text-right" : ""}`}>
                    <div className="rounded-xl border border-border bg-card p-6">
                      <span className="mb-2 inline-block rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
                        {item.quarter}
                      </span>
                      <p className="text-foreground">{item.milestone}</p>
                    </div>
                  </div>

                  {/* Dot */}
                  <div className="absolute left-4 h-3 w-3 rounded-full bg-primary md:left-1/2 md:-translate-x-1/2" />

                  {/* Spacer for opposite side */}
                  <div className="hidden flex-1 md:block" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-card/50 py-20">
        <div className="mx-auto max-w-4xl px-4 text-center lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              {"Готовы начать свой путь?"}
            </h2>
            <p className="mb-8 text-lg text-muted-foreground">
              {"Ищете менторство, обучение или сотрудничество — мы здесь, чтобы помочь вам добиться успеха."}
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button asChild size="lg" className="gap-2">
                <Link href="/contacts">
                  {"Связаться"}
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/projects">{"Наши работы"}</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
