import { ROUTERS } from "./router.config";

export const navLinks = [
	{
		href: ROUTERS.home,
		label: {
			ru: "Главная",
			uz: "Bosh sahifa",
			en: "Home",
		},
	},
	{
		href: ROUTERS.about,
		label: {
			ru: "Обо мне",
			uz: "Men haqimda",
			en: "About",
		},
	},
	{
		href: ROUTERS.projects,
		label: {
			ru: "Проекты",
			uz: "Loyihalar",
			en: "Projects",
		},
	},
	{
		href: ROUTERS.contacts,
		label: {
			ru: "Контакты",
			uz: "Aloqa",
			en: "Contact",
		},
	},
];
