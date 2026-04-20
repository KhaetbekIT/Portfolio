import { projects } from "./projects.mock";

export const results = [
	{
		number: "50+",
		label: {
			ru: "Студентов обучено",
			uz: "50+ talaba o‘qitilgan",
			en: "Students Mentored",
		},
	},
	{
		number: "10+",
		label: {
			ru: "Проведённых групп и курсов",
			uz: "O‘tilgan guruh va kurslar",
			en: "Courses & Groups Led",
		},
	},
	{
		number: `${projects.length}+`,
		label: {
			ru: "Реализованных проектов",
			uz: "Amalga oshirilgan loyihalar",
			en: "Projects Delivered",
		},
	},
	{
		number: "3+",
		label: {
			ru: "Года коммерческого опыта",
			uz: "Yil tajriba",
			en: "Years of Experience",
		},
	},
] as const;
