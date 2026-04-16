"use client";

import Link from "next/link";
import { Github, Linkedin, Twitter, Instagram, Mail, Shield } from "lucide-react";
import { useSettingsStore, useAuthStore } from "@/lib/store";
import { cn } from "@/lib/utils";


const socialIcons = {
  github: Github,
  linkedin: Linkedin,
  twitter: Twitter,
  instagram: Instagram,
};

const footerLinks = [
  {
    title: "Навигация",
    links: [
      { label: "Главная", href: "/" },
      { label: "Обо мне", href: "/about" },
      { label: "Проекты", href: "/projects" },
      { label: "Блог", href: "/blog" },
    ],
  },
  {
    title: "Услуги",
    links: [
      { label: "Geneligence Group", href: "/geneligence" },
      { label: "Менторство", href: "/geneligence#mentorship" },
      { label: "Консалтинг", href: "/geneligence#consulting" },
    ],
  },
  {
    title: "Контакты",
    links: [
      { label: "Форма связи", href: "/contacts" },
      { label: "Электронная почта", href: "mailto:hello@khaetbek.dev" },
    ],
  },
];

export function Footer() {
  const { settings } = useSettingsStore();
  const { isAdmin, toggleAdmin } = useAuthStore();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border/50 bg-background">
      <div className="mx-auto max-w-7xl px-4 py-12 lg:px-8">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link href="/" className="text-xl font-bold tracking-tight">
              Khaetbek
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              {"Фронтенд-разработчик, ментор и создатель продуктов. Создаю цифровые решения, которые имеют значение."}
            </p>
            {/* Social Links */}
            <div className="mt-6 flex items-center gap-3">
              {Object.entries(settings.social).map(([key, url]) => {
                const Icon = socialIcons[key as keyof typeof socialIcons];
                if (!Icon) return null;
                return (
                  <a
                    key={key}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-9 w-9 items-center justify-center rounded-full bg-secondary text-muted-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
                  >
                    <Icon className="h-4 w-4" />
                    <span className="sr-only">{key}</span>
                  </a>
                );
              })}
              <a
                href={`mailto:${settings.email}`}
                className="flex h-9 w-9 items-center justify-center rounded-full bg-secondary text-muted-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
              >
                <Mail className="h-4 w-4" />
                <span className="sr-only">Email</span>
              </a>
            </div>
          </div>

          {/* Links Columns */}
          {footerLinks.map((column) => (
            <div key={column.title}>
              <h3 className="font-semibold text-foreground">{column.title}</h3>
              <ul className="mt-4 space-y-2">
                {column.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground transition-colors hover:text-primary"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border/50 pt-8 md:flex-row">
          <p className="text-sm text-muted-foreground">
            {currentYear} Khaetbek. {"Все права защищены."}
          </p>
          <Link
            href={isAdmin ? "/admin" : "/admin/login"}
            className={cn(
              "flex items-center gap-2 rounded-full px-3 py-1.5 text-sm transition-colors",
              isAdmin
                ? "bg-primary/10 text-primary"
                : "text-muted-foreground hover:text-foreground"
            )}
          >
            <Shield className="h-3.5 w-3.5" />
            {isAdmin ? "Панель управления" : "Админ"}
          </Link>
        </div>
      </div>
    </footer>
  );
}
