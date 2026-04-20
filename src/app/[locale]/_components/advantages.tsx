"use client";

import { motion } from "framer-motion";
import { Briefcase, Layers, Search, Users } from "lucide-react";

const advantages = [
	{
		icon: Layers,
		title: "Чистая архитектура",
		description:
			"Создание поддерживаемых, масштабируемых кодовых баз с использованием современных паттернов и лучших практик.",
	},
	{
		icon: Search,
		title: "SEO-ориентированная разработка",
		description:
			"Создание сайтов, оптимизированных для поисковых систем с самого начала.",
	},
	{
		icon: Briefcase,
		title: "Реальный опыт",
		description:
			"10+ лет опыта создания продуктов для стартапов и крупных компаний.",
	},
	{
		icon: Users,
		title: "Обучение и менторство",
		description:
			"Увлечён обменом знаниями и помощью другим в развитии их карьеры.",
	},
];

export function AdvantagesSection() {
	return (
		<section className="bg-card/50 py-24">
			<div className="mx-auto max-w-7xl px-4 lg:px-8">
				{/* Section Header */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.5 }}
					className="mb-12 text-center"
				>
					<p className="mb-2 text-sm font-medium uppercase tracking-widest text-primary">
						{"Почему стоит работать со мной"}
					</p>
					<h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
						<span className="text-balance">
							{"Мои преимущества"}
						</span>
					</h2>
				</motion.div>

				{/* Advantages Grid */}
				<div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
					{advantages.map((advantage, index) => (
						<motion.div
							key={advantage.title}
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.5, delay: index * 0.1 }}
							className="rounded-xl border border-border bg-card p-6 text-center transition-all hover:border-primary/50 hover:shadow-lg"
						>
							<div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary">
								<advantage.icon className="h-7 w-7" />
							</div>
							<h3 className="mb-2 font-semibold text-foreground">
								{advantage.title}
							</h3>
							<p className="text-sm text-muted-foreground">
								{advantage.description}
							</p>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
}
