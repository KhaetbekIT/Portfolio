import CRMProImage from "@public/projects/crmpro.uz.png";
import DeltaImage from "@public/projects/delta.png";
import MarketImage from "@public/projects/demo-online-market.vercel.app_.png";
import DikomImage from "@public/projects/dikom.ru.png";
import DobroImage from "@public/projects/dobro.io.png";
import DoirastanImage from "@public/projects/doirastan.uz.png";
import EliteDDImage from "@public/projects/elite-dd.png";
import NSEImage from "@public/projects/new.nse.uz.png";
import NuxsImage from "@public/projects/nuxs18.vercel.app_.png";
import RobogenImage from "@public/projects/ROBOGEN.png";
import type { Project } from "@/types/project.type";

export const projects: Project[] = [
	{
		id: "1",

		title: {
			en: "Dikom",
			ru: "Диком",
			uz: "Dikom",
		},

		slug: "dikom-corporate-platform",

		description: {
			en: "Corporate B2B platform for an industrial equipment company with product catalog and structured content",
			ru: "Корпоративная B2B-платформа для компании промышленного оборудования с каталогом продукции и структурированным контентом",
			uz: "Sanoat uskunalari kompaniyasi uchun B2B korporativ platforma, mahsulot katalogi va tuzilgan kontent bilan",
		},

		longDescription: {
			en: "Developed a corporate website for an industrial equipment company focused on presenting a large product catalog, structured navigation, and clear business positioning. The project included building scalable frontend architecture, optimizing performance, and ensuring a consistent user experience across all pages.",
			ru: "Разработан корпоративный сайт для компании промышленного оборудования с акцентом на представление большого каталога продукции, удобную навигацию и чёткое позиционирование бизнеса. Проект включал создание масштабируемой фронтенд-архитектуры, оптимизацию производительности и обеспечение единого пользовательского опыта.",
			uz: "Sanoat uskunalari kompaniyasi uchun korporativ sayt ishlab chiqildi. Asosiy e’tibor katta mahsulot katalogini qulay ko‘rsatish, navigatsiya va biznesni to‘g‘ri taqdim etishga qaratildi. Loyihada scalable frontend arxitektura, performance optimizatsiya va yagona foydalanuvchi tajribasi ta’minlandi.",
		},

		techStack: [
			"React",
			"Next.js",
			"TypeScript",
			"Tailwind CSS",
			"REST API",
			"HTML5",
			"CSS3",
			"Pug",
			"SCSS/SASS",
		],

		image: DikomImage,

		screenshots: [],

		responsibilities: {
			en: [
				"Developed responsive layouts using HTML, CSS, and Tailwind CSS",
				"Implemented product catalog UI based on design layouts",
				"Ensured cross-browser compatibility",
				"Optimized layout and styles for better loading speed",
				"Worked with ready API data for content rendering",
			],
			ru: [
				"Верстка адаптивных интерфейсов с использованием HTML, CSS и Tailwind CSS",
				"Реализация интерфейса каталога по макетам",
				"Обеспечение кроссбраузерной совместимости",
				"Оптимизация верстки и стилей для ускорения загрузки",
				"Работа с готовыми данными API для отображения контента",
			],
			uz: [
				"HTML, CSS va Tailwind CSS yordamida responsive layout yaratish",
				"Maket asosida katalog interfeysini ishlab chiqish",
				"Turli brauzerlar bilan moslashuvni ta’minlash",
				"Yuklanish tezligini oshirish uchun layout optimizatsiya qilish",
				"API orqali kelgan tayyor ma’lumotlarni chiqarish",
			],
		},

		results: {
			en: [
				"Improved page layout and responsiveness",
				"Faster page rendering and loading",
				"Better user experience across devices",
				"Clean and maintainable markup structure",
			],
			ru: [
				"Улучшена адаптивность и структура верстки",
				"Ускорена отрисовка и загрузка страниц",
				"Улучшен пользовательский опыт на разных устройствах",
				"Чистая и поддерживаемая структура разметки",
			],
			uz: [
				"Responsive va layout sifati yaxshilandi",
				"Sahifa yuklanishi tezlashdi",
				"Turli qurilmalarda UX yaxshilandi",
				"Toza va qo‘llab-quvvatlanadigan markup yaratildi",
			],
		},

		category: "B2B Platform",

		featured: true,

		date: "2022-7",

		liveUrl: "https://dikom.ru",
	},
	{
		id: "2",

		title: {
			en: "Dobro",
			ru: "Добро",
			uz: "Dobro",
		},

		slug: "dobro-platform",

		description: {
			en: "Digital platform focused on connecting users with meaningful services and community-driven initiatives",
			ru: "Цифровая платформа, объединяющая пользователей с полезными сервисами и инициативами сообщества",
			uz: "Foydalanuvchilarni foydali servislar va hamjamiyat tashabbuslari bilan bog‘lovchi platforma",
		},

		longDescription: {
			en: "Developed a modern web platform designed to simplify user interaction with community services and digital products. The project focused on building a scalable frontend architecture, improving user experience, and ensuring fast and responsive interfaces across devices.",
			ru: "Разработана современная веб-платформа, направленная на упрощение взаимодействия пользователей с сервисами и продуктами. Основной акцент был сделан на масштабируемой архитектуре фронтенда, улучшении пользовательского опыта и высокой скорости работы интерфейса.",
			uz: "Foydalanuvchilarni servislar va raqamli mahsulotlar bilan qulay bog‘lash uchun zamonaviy web platforma ishlab chiqildi. Asosiy e’tibor scalable frontend arxitektura, UX va tez ishlaydigan interfeysga qaratildi.",
		},

		techStack: [
			"React",
			"Next.js",
			"TypeScript",
			"REST API",
			"HTML5",
			"CSS3",
			"SCSS/SASS",
		],

		image: DobroImage,

		screenshots: [],

		responsibilities: {
			en: [
				"Built responsive layouts using HTML, CSS, and Tailwind CSS",
				"Implemented UI components based on design mockups",
				"Ensured cross-browser compatibility",
				"Improved layout responsiveness across devices",
				"Worked on UI/UX and visual presentation",
			],
			ru: [
				"Верстка адаптивных интерфейсов с использованием HTML, CSS и Tailwind CSS",
				"Реализация UI компонентов по макетам",
				"Обеспечение кроссбраузерной совместимости",
				"Улучшение адаптивности на разных устройствах",
				"Работа над UI/UX и визуальной частью",
			],
			uz: [
				"HTML, CSS va Tailwind CSS yordamida responsive layout yaratish",
				"Maket asosida UI komponentlar ishlab chiqish",
				"Brauzerlararo moslashuvni ta’minlash",
				"Turli qurilmalarda responsivlikni yaxshilash",
				"UI/UX va vizual ko‘rinish ustida ishlash",
			],
		},

		results: {
			en: [
				"Improved layout and visual consistency",
				"Faster page rendering",
				"Better responsiveness across devices",
				"Clean and maintainable HTML/CSS structure",
			],
			ru: [
				"Улучшена структура и визуальная консистентность",
				"Ускорена отрисовка страниц",
				"Улучшена адаптивность на разных устройствах",
				"Чистая и поддерживаемая HTML/CSS структура",
			],
			uz: [
				"Layout va vizual birlik yaxshilandi",
				"Sahifa tezroq render bo‘ldi",
				"Turli qurilmalarda responsivlik yaxshilandi",
				"Toza va qo‘llab-quvvatlanadigan HTML/CSS strukturasi",
			],
		},

		category: "Web Platform",

		featured: true,

		date: "2022-8",

		liveUrl: "https://dobro.io",
	},
	{
		id: "3",

		title: {
			en: "DELTA Solar Series",
			ru: "DELTA Solar Series",
			uz: "DELTA Solar Series",
		},

		slug: "delta-solar-product-page",

		description: {
			en: "Product page and catalog interface for solar panels with detailed specifications and structured content",
			ru: "Карточка товара и интерфейс каталога солнечных панелей с подробными характеристиками и структурированным контентом",
			uz: "Quyosh panellari uchun mahsulot sahifasi va katalog interfeysi, batafsil texnik ma’lumotlar bilan",
		},

		longDescription: {
			en: "Developed a product page for solar panel equipment within a structured catalog system. The focus was on presenting complex technical specifications in a clear and accessible way, improving user navigation, and ensuring fast loading performance. Implemented reusable UI components and optimized layout for both desktop and mobile devices.",
			ru: "Разработана карточка товара солнечных панелей в рамках каталога. Основной акцент был сделан на удобном отображении сложных технических характеристик, улучшении навигации и высокой скорости загрузки. Реализованы переиспользуемые UI-компоненты и адаптивный дизайн.",
			uz: "Quyosh panellari uchun mahsulot sahifasi ishlab chiqildi. Asosiy e’tibor murakkab texnik ma’lumotlarni qulay ko‘rsatish, navigatsiyani yaxshilash va tez yuklanishga qaratildi. Qayta ishlatiladigan UI komponentlar va responsive dizayn yaratildi.",
		},

		techStack: ["HTML5", "CSS3", "JavaScript", "REST API"],

		image: DeltaImage,

		screenshots: [],

		responsibilities: {
			en: [
				"Built product page layout using HTML and CSS",
				"Created structured tables for technical specifications",
				"Implemented layout based on design mockups",
				"Ensured responsive layout using media queries",
				"Optimized styles and layout for faster loading",
			],
			ru: [
				"Верстка карточки товара с использованием HTML и CSS",
				"Создание структурированных таблиц с техническими характеристиками",
				"Реализация верстки по макетам",
				"Адаптация под различные устройства с помощью media queries",
				"Оптимизация стилей и верстки для ускорения загрузки",
			],
			uz: [
				"HTML va CSS yordamida mahsulot sahifasini yaratish",
				"Texnik ma’lumotlar uchun jadval strukturasini yaratish",
				"Maket asosida layout ishlab chiqish",
				"Media queries orqali responsiv dizayn",
				"Yuklanish tezligini oshirish uchun optimizatsiya",
			],
		},

		results: {
			en: [
				"Improved readability of technical data using tables",
				"Faster page loading",
				"Better responsiveness across devices",
				"Clear and structured product information layout",
			],
			ru: [
				"Улучшена читаемость технических данных за счёт таблиц",
				"Ускорена загрузка страницы",
				"Улучшена адаптивность на разных устройствах",
				"Чёткая и структурированная верстка информации о товаре",
			],
			uz: [
				"Texnik ma’lumotlar jadval orqali aniqroq ko‘rsatildi",
				"Sahifa yuklanishi tezlashdi",
				"Turli qurilmalarda responsivlik yaxshilandi",
				"Mahsulot ma’lumotlari tartibli va aniq ko‘rsatildi",
			],
		},

		category: "E-commerce",

		featured: false,

		date: "2022-08",

		liveUrl:
			"https://delta-solar.ru/product/solnechnye-paneli/statsionarnye-solnechnye-paneli/fsm/pv-fsm-15-36-p/",
	},
	{
		id: "4",

		title: {
			en: "Doirastan",
			ru: "Doirastan",
			uz: "Doirastan",
		},

		slug: "doirastan-product-website",

		description: {
			en: "Product-focused website for selling digital and educational content related to traditional music",
			ru: "Продающий сайт для реализации цифровых и образовательных продуктов в сфере традиционной музыки",
			uz: "An’anaviy musiqa bo‘yicha raqamli va ta’lim mahsulotlarini sotishga mo‘ljallangan sayt",
		},

		longDescription: {
			en: "Developed a product-oriented website focused on selling educational and digital content. The project covered the full cycle — from UI/UX design to frontend implementation. The main goal was to create a clear structure for presenting products, improving user engagement, and increasing conversion through intuitive navigation and clean design.",
			ru: "Разработан продающий сайт, ориентированный на реализацию образовательных и цифровых продуктов. Проект выполнен полностью — от UI/UX дизайна до реализации. Основной акцент был сделан на структуре представления продуктов, повышении вовлечённости пользователей и увеличении конверсии за счёт удобного интерфейса.",
			uz: "Ta’lim va raqamli mahsulotlarni sotishga mo‘ljallangan sayt ishlab chiqildi. Loyiha to‘liq noldan amalga oshirildi — UI/UX dizayndan tortib frontend ishlab chiqishgacha. Asosiy e’tibor mahsulotlarni to‘g‘ri taqdim etish, foydalanuvchi faolligini oshirish va konversiyani yaxshilashga qaratildi.",
		},

		techStack: [
			"Next.js",
			"TypeScript",
			"Tailwind CSS",
			"Next-Intl",
			"SEO",
		],

		image: DoirastanImage,

		screenshots: [],

		responsibilities: {
			en: [
				"Designed UI/UX from scratch",
				"Developed full website layout and structure",
				"Implemented product pages and content sections",
				"Built responsive design across all devices",
				"Worked on user flow and conversion logic",
			],
			ru: [
				"Разработка UI/UX дизайна с нуля",
				"Создание структуры и верстки сайта",
				"Реализация страниц продуктов и контента",
				"Адаптация под все устройства",
				"Проработка пользовательского сценария и логики конверсии",
			],
			uz: [
				"UI/UX dizaynni noldan ishlab chiqish",
				"Sayt strukturasi va layout yaratish",
				"Mahsulot sahifalari va kontentni ishlab chiqish",
				"Barcha qurilmalar uchun responsiv dizayn",
				"Foydalanuvchi oqimi va konversiya logikasini ishlab chiqish",
			],
		},

		results: {
			en: [
				"Clear product presentation structure",
				"Improved user engagement",
				"Better conversion-oriented layout",
				"Fast and responsive user experience",
			],
			ru: [
				"Чёткая структура представления продуктов",
				"Повышено вовлечение пользователей",
				"Улучшена структура, ориентированная на конверсию",
				"Быстрый и удобный пользовательский опыт",
			],
			uz: [
				"Mahsulotlar aniq va tushunarli ko‘rsatildi",
				"Foydalanuvchi faolligi oshdi",
				"Konversiyaga yo‘naltirilgan struktura yaratildi",
				"Tez va qulay foydalanuvchi tajribasi",
			],
		},

		category: "Product Website",

		featured: true,

		date: "2025-06",

		liveUrl: "https://doirastan.uz",
	},
	{
		id: "5",

		title: {
			en: "CRM Pro",
			ru: "CRM Pro",
			uz: "CRM Pro",
		},

		slug: "crmpro-amocrm-platform",

		description: {
			en: "Product-focused website for selling amoCRM services and managing client data",
			ru: "Продающий сайт для услуг amoCRM и управления клиентскими данными",
			uz: "amoCRM xizmatlari va mijoz ma’lumotlarini boshqarish uchun mo‘ljallangan sayt",
		},

		longDescription: {
			en: "Developed a product-oriented website focused on providing amoCRM services and working with client data. The project covered both the frontend implementation and participation in the overall product logic and structure. The main goal was to present services clearly, improve user interaction, and build a scalable interface for working with CRM data.",
			ru: "Разработан сайт, ориентированный на предоставление услуг amoCRM и работу с клиентскими данными. Участвовал в проекте с самого начала, включая проработку логики и структуры. Основной акцент был сделан на удобной подаче услуг, взаимодействии с пользователем и построении масштабируемого интерфейса.",
			uz: "amoCRM xizmatlari va mijoz ma’lumotlari bilan ishlashga mo‘ljallangan sayt ishlab chiqildi. Loyihada boshidan qatnashib, umumiy struktura va logikani ishlab chiqishda ishtirok etdim. Asosiy e’tibor xizmatlarni to‘g‘ri taqdim etish va foydalanuvchi bilan ishlashga qaratildi.",
		},

		techStack: [
			"React",
			"Next.js",
			"TypeScript",
			"Zustand",
			"TanStack Query",
			"Tailwind CSS",
			"REST API",
			"Next-Intl",
			"Next-Auth",
			"Zustand",
		],

		image: CRMProImage,

		screenshots: [],

		responsibilities: {
			en: [
				"Participated in product structure and logic design",
				"Developed UI for CRM-related pages",
				"Implemented responsive layouts",
				"Integrated API for client data handling",
				"Partially coordinated and monitored project development",
			],
			ru: [
				"Участие в разработке структуры и логики продукта",
				"Создание интерфейсов для CRM функционала",
				"Адаптивная верстка",
				"Интеграция API для работы с клиентскими данными",
				"Частичный контроль и координация разработки",
			],
			uz: [
				"Mahsulot struktura va logikasini ishlab chiqishda ishtirok etish",
				"CRM sahifalari uchun UI yaratish",
				"Responsive layout ishlab chiqish",
				"Mijoz ma’lumotlari uchun API integratsiyasi",
				"Loyiha jarayonini qisman nazorat qilish",
			],
		},

		results: {
			en: [
				"Clear presentation of services and CRM functionality",
				"Improved user interaction with data",
				"Better structured interface for client management",
				"Stable and scalable frontend solution",
			],
			ru: [
				"Чёткая подача услуг и CRM функционала",
				"Улучшено взаимодействие с данными",
				"Структурированный интерфейс управления клиентами",
				"Стабильная и масштабируемая фронтенд-реализация",
			],
			uz: [
				"Xizmatlar va CRM funksiyalar aniq ko‘rsatildi",
				"Ma’lumotlar bilan ishlash yaxshilandi",
				"Mijozlarni boshqarish interfeysi tartiblandi",
				"Barqaror va scalable frontend yechim yaratildi",
			],
		},

		category: "CRM Website",

		featured: true,

		date: "2025-09",

		liveUrl: "https://crmpro.uz",
	},
	{
		id: "6",

		title: {
			en: "Elite DD",
			ru: "Elite DD",
			uz: "Elite DD",
		},

		slug: "elite-dd-design-services-website",

		description: {
			en: "Service website for architectural and interior design, focused on presenting projects and converting leads",
			ru: "Сайт для услуг архитектурного и интерьерного дизайна с акцентом на презентацию проектов и конверсию",
			uz: "Arxitektura va interyer dizayn xizmatlari uchun sayt, loyihalarni ko‘rsatish va mijoz jalb qilishga yo‘naltirilgan",
		},

		longDescription: {
			en: "Developed a service website for a company providing architectural and interior design solutions. The project covered UI implementation and participation in product logic and structure. Also involved in coordinating development, communicating with the designer and client, and contributing to admin panel features. The focus was on clear service presentation, project showcase, and conversion-oriented user flow.",
			ru: "Разработан сайт для компании, предоставляющей услуги архитектурного и интерьерного дизайна. Участвовал в реализации интерфейса, проработке логики и структуры продукта. Также принимал участие в координации разработки, взаимодействии с дизайнером и клиентом, а также в разработке части админ-панели. Основной акцент — на презентации услуг, портфолио проектов и конверсионной логике.",
			uz: "Arxitektura va interyer dizayn xizmatlarini ko‘rsatuvchi kompaniya uchun sayt ishlab chiqildi. UI ishlab chiqish, mahsulot struktura va logikasida ishtirok etdim. Shuningdek, dizayner va mijoz bilan muloqot, loyiha jarayonini muvofiqlashtirish hamda admin panel qismini ishlab chiqishda qatnashdim. Asosiy e’tibor xizmatlarni taqdim etish va konversiyaga qaratildi.",
		},

		techStack: [
			"Next.js",
			"React",
			"TypeScript",
			"Tailwind CSS",
			"Framer Motion",
			"REST API",
		],

		image: EliteDDImage,

		screenshots: [],

		responsibilities: {
			en: [
				"Implemented responsive UI and layouts",
				"Participated in product structure and user flow design",
				"Developed parts of admin panel with the team",
				"Coordinated development and communicated with designer and client",
				"Improved UX, visual hierarchy, and interactions",
			],
			ru: [
				"Реализация адаптивного интерфейса и верстки",
				"Участие в проработке структуры продукта и пользовательских сценариев",
				"Разработка части админ-панели совместно с командой",
				"Координация разработки и коммуникация с дизайнером и клиентом",
				"Улучшение UX, визуальной иерархии и интеракций",
			],
			uz: [
				"Responsive UI va layout ishlab chiqish",
				"Mahsulot struktura va user flow ustida ishlash",
				"Jamoa bilan admin panel qismini ishlab chiqish",
				"Dizayner va mijoz bilan muloqot, loyiha jarayonini muvofiqlashtirish",
				"UX, vizual iyerarxiya va interactionlarni yaxshilash",
			],
		},

		results: {
			en: [
				"Clear presentation of services and portfolio",
				"Improved lead conversion",
				"Better structured admin and content management",
				"Fast and responsive user experience",
			],
			ru: [
				"Чёткая подача услуг и портфолио проектов",
				"Повышена конверсия заявок",
				"Улучшена структура админки и управления контентом",
				"Быстрый и удобный пользовательский опыт",
			],
			uz: [
				"Xizmatlar va portfolioni aniq ko‘rsatish",
				"Konversiya oshdi",
				"Admin panel va kontent boshqaruvi yaxshilandi",
				"Tez va qulay foydalanuvchi tajribasi",
			],
		},

		category: "Service Website",

		featured: true,

		date: "2024-11",

		liveUrl: "https://elite-dd.com",
	},
	{
		id: "7",

		title: {
			en: "NSE Kitchen Equipment",
			ru: "NSE Кухонное оборудование",
			uz: "NSE Oshxona jihozlari",
		},

		slug: "nse-kitchen-equipment-platform",

		description: {
			en: "B2B catalog platform for professional kitchen equipment with structured product listings and management system",
			ru: "B2B платформа-каталог профессионального кухонного оборудования с системой управления и структурированным отображением товаров",
			uz: "Professional oshxona jihozlari uchun B2B katalog platforma va boshqaruv tizimi",
		},

		longDescription: {
			en: "Led the development of a B2B catalog platform for kitchen equipment from start to finish. The project included building product catalog pages, structuring categories, and implementing a clear system for displaying technical specifications. Fully managed the development process — from planning and communication with stakeholders to final implementation. Focused on usability, scalability, and performance for handling large product catalogs.",
			ru: "Полностью вел разработку B2B платформы-каталога кухонного оборудования от начала до конца. Проект включал создание страниц каталога, структурирование категорий и систему отображения технических характеристик. Управлял процессом разработки — от планирования и общения с участниками проекта до финальной реализации. Основной акцент был на удобстве использования, масштабируемости и производительности.",
			uz: "Oshxona jihozlari uchun B2B katalog platformani boshidan oxirigacha to‘liq boshqardim. Loyiha mahsulot sahifalari, kategoriyalar va texnik ma’lumotlarni ko‘rsatish tizimini o‘z ichiga oladi. Loyihani rejalashdan tortib yakuniy natijagacha boshqardim. Asosiy e’tibor usability, scalability va performance ga qaratildi.",
		},

		techStack: [
			"Next.js",
			"React",
			"TypeScript",
			"Tailwind CSS",
			"REST API",
			"Vercel",
			"Next-Intl",
			"Next-Auth",
		],

		image: NSEImage,

		screenshots: [],

		responsibilities: {
			en: [
				"Led the project from concept to deployment",
				"Designed product structure and catalog logic",
				"Developed catalog UI and product pages",
				"Implemented category navigation and data structure",
				"Coordinated development and controlled project progress",
			],
			ru: [
				"Полное ведение проекта от идеи до запуска",
				"Проработка структуры каталога и логики продукта",
				"Разработка интерфейса каталога и страниц товаров",
				"Реализация навигации и структуры данных",
				"Координация разработки и контроль проекта",
			],
			uz: [
				"Loyihani boshidan oxirigacha to‘liq boshqarish",
				"Katalog struktura va logikasini ishlab chiqish",
				"Katalog UI va mahsulot sahifalarini yaratish",
				"Navigatsiya va data strukturani ishlab chiqish",
				"Loyiha jarayonini nazorat qilish va boshqarish",
			],
		},

		results: {
			en: [
				"Clear and structured product catalog",
				"Improved navigation across large datasets",
				"Stable and scalable platform",
				"Successful delivery of a full-cycle project",
			],
			ru: [
				"Чётко структурированный каталог товаров",
				"Улучшена навигация по большому объёму данных",
				"Стабильная и масштабируемая платформа",
				"Успешная реализация проекта полного цикла",
			],
			uz: [
				"Tartibli va tushunarli katalog yaratildi",
				"Katta hajmdagi ma’lumotlar uchun navigatsiya yaxshilandi",
				"Barqaror va scalable platforma yaratildi",
				"To‘liq sikldagi loyiha muvaffaqiyatli yakunlandi",
			],
		},

		category: "B2B Platform",

		featured: true,

		date: "2026-01",

		liveUrl: "https://new.nse.uz",
	},
	{
		id: "8",

		title: {
			en: "Online Market Demo",
			ru: "Демо интернет-магазин",
			uz: "Demo internet do‘kon",
		},

		slug: "online-market-demo",

		description: {
			en: "Demo e-commerce platform showcasing modern UI, fast performance, and scalable frontend architecture",
			ru: "Демо e-commerce платформа с современным UI, высокой скоростью и масштабируемой архитектурой фронтенда",
			uz: "Zamonaviy UI, tez ishlash va scalable frontend arxitekturaga ega demo e-commerce platforma",
		},

		longDescription: {
			en: "Developed a demo online store to showcase modern frontend approaches and e-commerce UI patterns. The initial UI was generated using v0.dev to accelerate development and prototyping. After that, the project was fully restructured and optimized manually — improving code quality, component architecture, scalability, and maintainability. The focus was on performance, clean structure, and real-world product scenarios.",
			ru: "Разработан демонстрационный интернет-магазин для показа современных подходов к frontend разработке и e-commerce интерфейсам. Начальная версия UI была сгенерирована с помощью v0.dev для ускорения разработки и прототипирования. Далее проект был полностью переработан вручную — улучшена структура кода, архитектура компонентов, масштабируемость и поддерживаемость. Основной акцент сделан на производительности и реальных сценариях использования.",
			uz: "Zamonaviy frontend yondashuvlari va e-commerce UI ni ko‘rsatish uchun demo internet do‘kon ishlab chiqildi. Dastlab UI v0.dev orqali generatsiya qilinib, development jarayoni tezlashtirildi. Keyinchalik loyiha to‘liq qo‘lda qayta ishlanib, kod strukturasi, komponent arxitekturasi, scalable va maintainable holatga keltirildi. Asosiy e’tibor performance va real product scenariylarga qaratildi.",
		},

		techStack: [
			"Next.js",
			"React",
			"TypeScript",
			"Tailwind CSS",
			"Vercel",
			"v0.dev",
		],

		image: MarketImage,

		screenshots: [],

		responsibilities: {
			en: [
				"Generated initial UI using v0.dev",
				"Refactored and improved project structure manually",
				"Built reusable and scalable components",
				"Implemented product catalog and UI logic",
				"Optimized performance and loading speed",
			],
			ru: [
				"Генерация базового UI с помощью v0.dev",
				"Ручная переработка структуры проекта",
				"Создание переиспользуемых и масштабируемых компонентов",
				"Реализация каталога товаров и UI логики",
				"Оптимизация производительности",
			],
			uz: [
				"v0.dev yordamida boshlang‘ich UI generatsiya qilish",
				"Loyiha strukturasi qo‘lda qayta ishlab chiqildi",
				"Reusable va scalable komponentlar yaratish",
				"Mahsulot katalogi va UI logika yaratish",
				"Performance optimizatsiya",
			],
		},

		results: {
			en: [
				"Accelerated development using AI-generated UI",
				"Improved code structure and maintainability",
				"Faster performance and better UX",
				"Scalable frontend architecture ready for real projects",
			],
			ru: [
				"Ускорена разработка за счёт AI генерации UI",
				"Улучшена структура и поддерживаемость кода",
				"Повышена производительность и UX",
				"Создана масштабируемая архитектура фронтенда",
			],
			uz: [
				"AI yordamida development tezlashtirildi",
				"Kod struktura va maintainability yaxshilandi",
				"Performance va UX oshirildi",
				"Scalable frontend arxitektura yaratildi",
			],
		},

		category: "E-commerce",

		featured: true,

		date: "2026-04",

		liveUrl: "https://demo-online-market.vercel.app/",
		githubUrl: "https://github.com/KhaetbekIT/Market",
	},
	{
		id: "9",

		title: {
			en: "ROBOGEN AI",
			ru: "ROBOGEN AI",
			uz: "ROBOGEN AI",
		},

		slug: "robogen-ai-platform",

		description: {
			en: "Modern AI and robotics website showcasing robot dogs, humanoid systems, and future technologies",
			ru: "Современный сайт про AI и робототехнику с демонстрацией роботов, гуманоидов и технологий будущего",
			uz: "AI va robototexnika haqida zamonaviy sayt — robot itlar, humanoid robotlar va kelajak texnologiyalari",
		},

		longDescription: {
			en: "Developed a modern technology-focused website dedicated to AI and robotics. The project highlights robot dogs, humanoid systems, and advanced automation concepts. The focus was on creating a futuristic UI, smooth animations, and a clean scalable frontend architecture. Special attention was given to performance, visual experience, and interactive presentation.",
			ru: "Разработан современный сайт, посвящённый AI и робототехнике. Проект демонстрирует робот-собак, гуманоидных роботов и передовые технологии. Основной акцент сделан на футуристичном UI, плавных анимациях и масштабируемой архитектуре фронтенда. Особое внимание уделено производительности и визуальному восприятию.",
			uz: "AI va robototexnikaga bag‘ishlangan zamonaviy sayt ishlab chiqildi. Loyihada robot itlar, humanoid robotlar va ilg‘or texnologiyalar namoyish etilgan. Asosiy e’tibor futuristik UI, animatsiyalar va scalable frontend arxitekturaga qaratildi. Performance va vizual tajriba ustida alohida ishlangan.",
		},

		techStack: [
			"Next.js",
			"React",
			"TypeScript",
			"Tailwind CSS",
			"Framer Motion",
			"Vercel",
			"Zustand",
		],

		image: RobogenImage,

		screenshots: [],

		responsibilities: {
			en: [
				"Designed futuristic UI and visual concept",
				"Developed full frontend architecture",
				"Implemented animations and interactive sections",
				"Built reusable and scalable components",
				"Optimized performance and UX",
			],
			ru: [
				"Разработка футуристичного UI и визуальной концепции",
				"Создание архитектуры фронтенда",
				"Реализация анимаций и интерактивных блоков",
				"Создание переиспользуемых компонентов",
				"Оптимизация производительности и UX",
			],
			uz: [
				"Futuristik UI va dizayn konsepsiyasini ishlab chiqish",
				"Frontend arxitektura yaratish",
				"Animatsiya va interaktiv bloklar yaratish",
				"Reusable komponentlar ishlab chiqish",
				"Performance va UX optimizatsiya",
			],
		},

		results: {
			en: [
				"Strong visual identity for tech product",
				"Improved user engagement through animations",
				"Fast and smooth user experience",
				"Scalable architecture for future expansion",
			],
			ru: [
				"Сформирован сильный визуальный стиль продукта",
				"Повышено вовлечение за счёт анимаций",
				"Быстрый и плавный пользовательский опыт",
				"Масштабируемая архитектура для развития",
			],
			uz: [
				"Kuchli vizual brend yaratildi",
				"Animatsiyalar orqali foydalanuvchi faolligi oshdi",
				"Tez va smooth UX ta’minlandi",
				"Kelajak uchun scalable arxitektura yaratildi",
			],
		},

		category: "AI Platform",

		featured: true,

		date: "2026-04",

		liveUrl: "https://robogen-ai.vercel.app/",
		githubUrl: "https://github.com/KhaetbekIT/ROBOGEN-AI",
	},
	{
		id: "10",

		title: {
			en: "NUXS 18 Platform",
			ru: "NUXS 18 платформа",
			uz: "NUXS 18 platforma",
		},

		slug: "nuxs18-platform",

		description: {
			en: "Modern digital platform focused on content presentation and user interaction with clean UI and responsive design",
			ru: "Современная цифровая платформа с акцентом на контент, удобный UI и взаимодействие с пользователем",
			uz: "Kontentga yo‘naltirilgan zamonaviy platforma — toza UI va foydalanuvchi interaksiyasi bilan",
		},

		longDescription: {
			en: "Developed a modern web platform focused on structured content presentation and user interaction. The project includes responsive layout, clean UI, and scalable frontend architecture. Special attention was given to usability, performance optimization, and smooth navigation across different devices.",
			ru: "Разработана современная веб-платформа с акцентом на структурированное представление контента и взаимодействие с пользователем. В проекте реализованы адаптивный дизайн, чистый интерфейс и масштабируемая архитектура фронтенда. Особое внимание уделено удобству, производительности и навигации.",
			uz: "Kontentni tartibli ko‘rsatish va foydalanuvchi bilan interaksiyaga yo‘naltirilgan zamonaviy platforma ishlab chiqildi. Loyiha responsiv dizayn, toza UI va scalable frontend arxitekturani o‘z ichiga oladi. Asosiy e’tibor usability va performance ga qaratildi.",
		},

		techStack: [
			"Next.js",
			"React",
			"TypeScript",
			"Tailwind CSS",
			"Next-Intl",
			"Vercel",
		],

		image: NuxsImage,

		screenshots: [],

		responsibilities: {
			en: [
				"Developed full frontend structure",
				"Built responsive and adaptive UI",
				"Implemented content-driven layout",
				"Optimized performance and loading speed",
				"Worked on UX and navigation",
			],
			ru: [
				"Разработка фронтенд-структуры сайта",
				"Адаптивная верстка",
				"Реализация контентной структуры",
				"Оптимизация производительности",
				"Работа над UX и навигацией",
			],
			uz: [
				"Frontend strukturani ishlab chiqish",
				"Responsive dizayn",
				"Kontent strukturasini yaratish",
				"Performance optimizatsiya",
				"UX va navigatsiya ustida ishlash",
			],
		},

		results: {
			en: [
				"Improved content readability",
				"Better user navigation",
				"Fast loading performance",
				"Clean and scalable UI structure",
			],
			ru: [
				"Улучшена читаемость контента",
				"Удобная навигация",
				"Быстрая загрузка страниц",
				"Чистая и масштабируемая структура",
			],
			uz: [
				"Kontent o‘qilishi yaxshilandi",
				"Qulay navigatsiya yaratildi",
				"Tez yuklanish ta’minlandi",
				"Toza va scalable UI struktura",
			],
		},

		category: "Web Platform",

		featured: false,

		date: "2026-04",

		liveUrl: "https://nuxs18.vercel.app/",
	},
];

export const allTechStacks = Array.from(
	new Set(projects.flatMap((p) => p.techStack)),
).sort((a, b) => a.localeCompare(b));
