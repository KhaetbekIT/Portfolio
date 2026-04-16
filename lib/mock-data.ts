// Mock data for Khaetbek's Portfolio & Geneligence Group

export interface Project {
  id: string;
  title: string;
  slug: string;
  description: string;
  longDescription: string;
  techStack: string[];
  image: string;
  screenshots: string[];
  responsibilities: string[];
  results: string[];
  category: string;
  featured: boolean;
  date: string;
  liveUrl?: string;
  githubUrl?: string;
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  coverImage: string;
  tags: string[];
  author: string;
  date: string;
  readTime: string;
  metaTitle?: string;
  metaDescription?: string;
}

export interface Message {
  id: string;
  name: string;
  email: string;
  message: string;
  date: string;
  read: boolean;
}

export interface TimelineItem {
  year: string;
  title: string;
  company: string;
  description: string;
}

export interface Skill {
  category: string;
  items: string[];
}

// Projects data (15+ projects)
export const projects: Project[] = [
  {
    id: "1",
    title: "EcoTrack Dashboard",
    slug: "ecotrack-dashboard",
    description: "Real-time sustainability metrics dashboard for enterprise companies",
    longDescription: "A comprehensive dashboard solution that helps enterprises track their carbon footprint, energy consumption, and sustainability goals in real-time. Features include custom widgets, data visualization, and automated reporting.",
    techStack: ["React", "TypeScript", "D3.js", "Node.js", "PostgreSQL"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
    screenshots: [
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=800&fit=crop"
    ],
    responsibilities: ["Led frontend architecture", "Implemented real-time data visualization", "Optimized performance for large datasets"],
    results: ["40% improvement in data loading speed", "Reduced bounce rate by 25%", "98% client satisfaction score"],
    category: "Dashboard",
    featured: true,
    date: "2025-12",
    liveUrl: "https://ecotrack.demo",
    githubUrl: "https://github.com/khaetbek/ecotrack"
  },
  {
    id: "2",
    title: "FinFlow Mobile App",
    slug: "finflow-mobile",
    description: "Personal finance management app with AI-powered insights",
    longDescription: "A cross-platform mobile application that helps users manage their finances, track expenses, and receive AI-powered recommendations for better financial health.",
    techStack: ["React Native", "TypeScript", "Redux", "Firebase", "TensorFlow.js"],
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&h=600&fit=crop",
    screenshots: [
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=1200&h=800&fit=crop"
    ],
    responsibilities: ["Full mobile development", "AI integration", "Payment system implementation"],
    results: ["50K+ downloads in first month", "4.8 star rating", "Featured in App Store"],
    category: "Mobile",
    featured: true,
    date: "2025-10",
    liveUrl: "https://finflow.app"
  },
  {
    id: "3",
    title: "CodeMentor Platform",
    slug: "codementor-platform",
    description: "Online mentorship platform connecting developers with industry experts",
    longDescription: "A full-featured platform that facilitates mentorship relationships between aspiring developers and experienced professionals. Includes video calls, code reviews, and progress tracking.",
    techStack: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "WebRTC"],
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop",
    screenshots: [
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&h=800&fit=crop"
    ],
    responsibilities: ["Platform architecture", "Video call integration", "User matching algorithm"],
    results: ["1000+ mentor-mentee pairs", "95% session completion rate", "Expanded to 15 countries"],
    category: "Platform",
    featured: true,
    date: "2025-08"
  },
  {
    id: "4",
    title: "ShopSmart E-commerce",
    slug: "shopsmart-ecommerce",
    description: "Modern e-commerce platform with headless CMS integration",
    longDescription: "A scalable e-commerce solution built with modern JAMstack architecture, featuring headless CMS, optimized checkout flow, and advanced inventory management.",
    techStack: ["Next.js", "Sanity", "Stripe", "Tailwind CSS", "Vercel"],
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop",
    screenshots: [],
    responsibilities: ["Frontend development", "CMS integration", "Payment gateway setup"],
    results: ["300% increase in conversion rate", "Sub-second page loads", "99.9% uptime"],
    category: "E-commerce",
    featured: false,
    date: "2025-06"
  },
  {
    id: "5",
    title: "HealthHub Telemedicine",
    slug: "healthhub-telemedicine",
    description: "HIPAA-compliant telemedicine platform for remote consultations",
    longDescription: "A secure healthcare platform enabling patients to connect with doctors remotely. Features include appointment scheduling, video consultations, and prescription management.",
    techStack: ["React", "Node.js", "MongoDB", "WebRTC", "AWS"],
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=600&fit=crop",
    screenshots: [],
    responsibilities: ["Security implementation", "Video infrastructure", "HIPAA compliance"],
    results: ["50K+ consultations", "Zero security incidents", "4.9 patient satisfaction"],
    category: "Healthcare",
    featured: false,
    date: "2025-04"
  },
  {
    id: "6",
    title: "TaskFlow Project Manager",
    slug: "taskflow-pm",
    description: "Agile project management tool with real-time collaboration",
    longDescription: "A modern project management solution designed for agile teams. Features include Kanban boards, sprint planning, time tracking, and team analytics.",
    techStack: ["Vue.js", "TypeScript", "GraphQL", "PostgreSQL", "Redis"],
    image: "https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?w=800&h=600&fit=crop",
    screenshots: [],
    responsibilities: ["Frontend architecture", "Real-time sync", "Performance optimization"],
    results: ["Used by 500+ teams", "30% productivity increase", "Featured in ProductHunt"],
    category: "Productivity",
    featured: true,
    date: "2025-02"
  },
  {
    id: "7",
    title: "LearnPath LMS",
    slug: "learnpath-lms",
    description: "Learning management system with gamification elements",
    longDescription: "An engaging learning platform that combines traditional course content with gamification to increase student engagement and completion rates.",
    techStack: ["React", "TypeScript", "Node.js", "MongoDB", "Socket.io"],
    image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800&h=600&fit=crop",
    screenshots: [],
    responsibilities: ["Gamification system", "Progress tracking", "Content delivery"],
    results: ["80% course completion rate", "10K+ active students", "Partnership with 3 universities"],
    category: "Education",
    featured: false,
    date: "2024-12"
  },
  {
    id: "8",
    title: "CryptoWatch Tracker",
    slug: "cryptowatch-tracker",
    description: "Real-time cryptocurrency portfolio tracker and analytics",
    longDescription: "A comprehensive crypto tracking application with real-time price updates, portfolio management, and advanced analytics for informed trading decisions.",
    techStack: ["Next.js", "TypeScript", "WebSocket", "Chart.js", "Supabase"],
    image: "https://images.unsplash.com/photo-1621761191319-c6fb62004040?w=800&h=600&fit=crop",
    screenshots: [],
    responsibilities: ["Real-time data integration", "Chart implementation", "Mobile responsiveness"],
    results: ["100K+ daily active users", "Featured in crypto publications", "99.99% uptime"],
    category: "Finance",
    featured: false,
    date: "2024-10"
  },
  {
    id: "9",
    title: "EventHub Booking",
    slug: "eventhub-booking",
    description: "Event management and ticketing platform",
    longDescription: "A complete event management solution for organizers and attendees. Features include event creation, ticket sales, attendee management, and analytics.",
    techStack: ["React", "Redux", "Node.js", "Stripe", "PostgreSQL"],
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=600&fit=crop",
    screenshots: [],
    responsibilities: ["Booking system", "Payment integration", "QR code generation"],
    results: ["$2M+ in ticket sales", "1000+ events hosted", "Zero payment issues"],
    category: "Events",
    featured: false,
    date: "2024-08"
  },
  {
    id: "10",
    title: "FoodieFind Restaurant",
    slug: "foodiefind-restaurant",
    description: "Restaurant discovery app with AI-powered recommendations",
    longDescription: "A location-based restaurant discovery application that uses AI to provide personalized dining recommendations based on user preferences and past behavior.",
    techStack: ["React Native", "TypeScript", "Python", "TensorFlow", "Firebase"],
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&h=600&fit=crop",
    screenshots: [],
    responsibilities: ["Mobile development", "AI recommendation engine", "Location services"],
    results: ["200K+ downloads", "Partnership with 5000+ restaurants", "4.7 star rating"],
    category: "Mobile",
    featured: false,
    date: "2024-06"
  },
  {
    id: "11",
    title: "DocuSign Clone",
    slug: "docusign-clone",
    description: "Digital document signing and management platform",
    longDescription: "A secure document signing solution for businesses. Features include multi-party signing, audit trails, and integration with popular cloud storage services.",
    techStack: ["Next.js", "TypeScript", "AWS Lambda", "DynamoDB", "S3"],
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&h=600&fit=crop",
    screenshots: [],
    responsibilities: ["Security architecture", "PDF manipulation", "Workflow automation"],
    results: ["500+ business clients", "1M+ documents signed", "SOC 2 compliant"],
    category: "Business",
    featured: false,
    date: "2024-04"
  },
  {
    id: "12",
    title: "FitTrack Wellness",
    slug: "fittrack-wellness",
    description: "Comprehensive fitness tracking and workout planning app",
    longDescription: "A holistic fitness application that combines workout tracking, nutrition planning, and progress analytics to help users achieve their health goals.",
    techStack: ["React Native", "TypeScript", "GraphQL", "PostgreSQL", "HealthKit"],
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop",
    screenshots: [],
    responsibilities: ["Health API integration", "Workout algorithms", "Data visualization"],
    results: ["75K+ active users", "Featured by Apple", "Average 4.8 rating"],
    category: "Health",
    featured: false,
    date: "2024-02"
  },
  {
    id: "13",
    title: "ChatBot Builder",
    slug: "chatbot-builder",
    description: "No-code platform for building AI-powered chatbots",
    longDescription: "A visual builder that allows businesses to create sophisticated chatbots without coding. Features include NLP integration, multi-channel deployment, and analytics.",
    techStack: ["React", "TypeScript", "Python", "OpenAI", "MongoDB"],
    image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=800&h=600&fit=crop",
    screenshots: [],
    responsibilities: ["Visual builder UI", "AI integration", "Multi-platform deployment"],
    results: ["2000+ chatbots created", "10M+ conversations handled", "95% accuracy rate"],
    category: "AI",
    featured: false,
    date: "2023-12"
  },
  {
    id: "14",
    title: "PropertyPro Real Estate",
    slug: "propertypro-realestate",
    description: "Modern real estate listing and search platform",
    longDescription: "A comprehensive real estate platform with advanced search, virtual tours, and mortgage calculators. Designed for both buyers and real estate agents.",
    techStack: ["Next.js", "TypeScript", "Mapbox", "Prisma", "PostgreSQL"],
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop",
    screenshots: [],
    responsibilities: ["Map integration", "Search optimization", "Virtual tour feature"],
    results: ["$50M+ in property sales", "10K+ listings", "30% faster search"],
    category: "Real Estate",
    featured: false,
    date: "2023-10"
  },
  {
    id: "15",
    title: "SocialPulse Analytics",
    slug: "socialpulse-analytics",
    description: "Social media analytics and scheduling platform",
    longDescription: "An all-in-one social media management tool for businesses and influencers. Features include cross-platform scheduling, analytics, and engagement tracking.",
    techStack: ["React", "TypeScript", "Node.js", "Redis", "PostgreSQL"],
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=600&fit=crop",
    screenshots: [],
    responsibilities: ["API integrations", "Analytics dashboard", "Scheduling system"],
    results: ["5K+ business accounts", "500M+ posts analyzed", "2x engagement increase"],
    category: "Marketing",
    featured: false,
    date: "2023-08"
  }
];

// Blog posts data (20+ posts)
export const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "The Future of Frontend Development in 2026",
    slug: "future-of-frontend-2026",
    excerpt: "Exploring emerging trends and technologies that will shape frontend development in the coming year.",
    content: `# The Future of Frontend Development in 2026

The frontend landscape continues to evolve at a rapid pace. In this article, we'll explore the key trends and technologies that are shaping the future of web development.

## AI-Assisted Development

AI tools are becoming indispensable for frontend developers. From code completion to automated testing, AI is streamlining workflows and improving productivity.

## Web Components Maturity

Web components have finally reached mainstream adoption, offering a standardized way to build reusable UI elements across frameworks.

## Edge Computing

With the rise of edge computing, we're seeing new patterns for building performant applications that leverage distributed infrastructure.

## Key Takeaways

- Embrace AI tools to enhance productivity
- Learn web components for better interoperability
- Understand edge computing patterns
- Stay curious and keep learning`,
    coverImage: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&h=400&fit=crop",
    tags: ["Frontend", "Trends", "2026", "AI"],
    author: "Khaetbek",
    date: "2026-01-15",
    readTime: "8 min read",
    metaTitle: "Frontend Development Trends 2026 | Khaetbek",
    metaDescription: "Discover the emerging trends and technologies shaping frontend development in 2026."
  },
  {
    id: "2",
    title: "Building Scalable React Applications",
    slug: "scalable-react-applications",
    excerpt: "Best practices and patterns for building React applications that scale with your team and codebase.",
    content: `# Building Scalable React Applications

Scaling React applications requires careful consideration of architecture, state management, and team collaboration patterns.

## Component Architecture

Organize components by feature, not by type. This makes it easier to maintain and scale your application.

## State Management

Choose the right state management solution based on your application's complexity and team size.

## Performance Optimization

Implement code splitting, lazy loading, and memoization to keep your application fast.`,
    coverImage: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=400&fit=crop",
    tags: ["React", "Architecture", "Scalability"],
    author: "Khaetbek",
    date: "2026-01-08",
    readTime: "12 min read"
  },
  {
    id: "3",
    title: "TypeScript Best Practices for 2026",
    slug: "typescript-best-practices-2026",
    excerpt: "Essential TypeScript patterns and practices every developer should know.",
    content: `# TypeScript Best Practices for 2026

TypeScript has become the standard for professional JavaScript development. Here are the best practices you should follow.

## Strict Mode Always

Enable strict mode for maximum type safety and catch errors early.

## Utility Types

Master built-in utility types like Partial, Required, Pick, and Omit.

## Type Inference

Let TypeScript infer types when possible, but be explicit when it matters.`,
    coverImage: "https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=800&h=400&fit=crop",
    tags: ["TypeScript", "Best Practices", "JavaScript"],
    author: "Khaetbek",
    date: "2025-12-28",
    readTime: "10 min read"
  },
  {
    id: "4",
    title: "Mastering CSS Grid and Flexbox",
    slug: "mastering-css-grid-flexbox",
    excerpt: "A comprehensive guide to modern CSS layout techniques for responsive design.",
    content: `# Mastering CSS Grid and Flexbox

Modern CSS layout is powerful and flexible. Understanding when to use Grid vs Flexbox is key to efficient styling.

## When to Use Flexbox

Use Flexbox for one-dimensional layouts - rows or columns.

## When to Use Grid

Use Grid for two-dimensional layouts where you need control over both rows and columns.`,
    coverImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=400&fit=crop",
    tags: ["CSS", "Grid", "Flexbox", "Layout"],
    author: "Khaetbek",
    date: "2025-12-20",
    readTime: "15 min read"
  },
  {
    id: "5",
    title: "The Art of Code Review",
    slug: "art-of-code-review",
    excerpt: "How to give and receive code reviews that improve code quality and team dynamics.",
    content: `# The Art of Code Review

Code reviews are essential for maintaining code quality and sharing knowledge across the team.

## Be Constructive

Focus on the code, not the person. Provide specific, actionable feedback.

## Review for Learning

Use code reviews as opportunities to learn and teach.`,
    coverImage: "https://images.unsplash.com/photo-1531498860502-7c67cf02f657?w=800&h=400&fit=crop",
    tags: ["Code Review", "Team", "Best Practices"],
    author: "Khaetbek",
    date: "2025-12-15",
    readTime: "7 min read"
  },
  {
    id: "6",
    title: "Next.js 16: What's New",
    slug: "nextjs-16-whats-new",
    excerpt: "Exploring the latest features and improvements in Next.js 16.",
    content: `# Next.js 16: What's New

Next.js 16 brings exciting new features that make building React applications even better.

## Turbopack by Default

Turbopack is now the default bundler, providing faster builds and hot reloading.

## Cache Components

The new "use cache" directive makes caching explicit and flexible.`,
    coverImage: "https://images.unsplash.com/photo-1618477247222-acbdb0e159b3?w=800&h=400&fit=crop",
    tags: ["Next.js", "React", "Framework"],
    author: "Khaetbek",
    date: "2025-12-10",
    readTime: "9 min read"
  },
  {
    id: "7",
    title: "Effective Mentorship in Tech",
    slug: "effective-mentorship-tech",
    excerpt: "Lessons learned from mentoring developers at different stages of their careers.",
    content: `# Effective Mentorship in Tech

Mentorship is a powerful tool for career development in the tech industry.

## Finding the Right Mentee

Look for mentees who are curious, motivated, and open to feedback.

## Setting Clear Goals

Establish clear objectives and milestones for the mentorship relationship.`,
    coverImage: "https://images.unsplash.com/photo-1515169067868-5387ec356754?w=800&h=400&fit=crop",
    tags: ["Mentorship", "Career", "Education"],
    author: "Khaetbek",
    date: "2025-12-05",
    readTime: "11 min read"
  },
  {
    id: "8",
    title: "Building a Personal Brand as a Developer",
    slug: "building-personal-brand-developer",
    excerpt: "Strategies for establishing yourself as a thought leader in the tech community.",
    content: `# Building a Personal Brand as a Developer

Your personal brand is your professional identity. Here's how to build one effectively.

## Content Creation

Share your knowledge through blog posts, videos, and social media.

## Community Involvement

Participate in open source, conferences, and local meetups.`,
    coverImage: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&h=400&fit=crop",
    tags: ["Personal Brand", "Career", "Marketing"],
    author: "Khaetbek",
    date: "2025-11-28",
    readTime: "8 min read"
  },
  {
    id: "9",
    title: "State Management Patterns in Modern React",
    slug: "state-management-modern-react",
    excerpt: "Comparing different state management approaches for React applications.",
    content: `# State Management Patterns in Modern React

Choosing the right state management solution is crucial for application maintainability.

## Local State

Use useState and useReducer for component-level state.

## Global State

Consider Zustand, Jotai, or Redux for application-wide state.`,
    coverImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=400&fit=crop",
    tags: ["React", "State Management", "Zustand"],
    author: "Khaetbek",
    date: "2025-11-20",
    readTime: "13 min read"
  },
  {
    id: "10",
    title: "Performance Optimization Techniques",
    slug: "performance-optimization-techniques",
    excerpt: "Practical strategies for improving web application performance.",
    content: `# Performance Optimization Techniques

Performance is a feature. Here are techniques to make your applications faster.

## Code Splitting

Split your code into smaller chunks that load on demand.

## Image Optimization

Use modern image formats and lazy loading.`,
    coverImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=400&fit=crop",
    tags: ["Performance", "Optimization", "Web"],
    author: "Khaetbek",
    date: "2025-11-15",
    readTime: "10 min read"
  },
  {
    id: "11",
    title: "Introduction to Web Accessibility",
    slug: "introduction-web-accessibility",
    excerpt: "Making your web applications accessible to everyone.",
    content: `# Introduction to Web Accessibility

Accessibility ensures that everyone can use your web applications.

## Semantic HTML

Use proper HTML elements to convey meaning and structure.

## ARIA Labels

Add ARIA attributes when semantic HTML isn't enough.`,
    coverImage: "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=800&h=400&fit=crop",
    tags: ["Accessibility", "A11y", "Web"],
    author: "Khaetbek",
    date: "2025-11-08",
    readTime: "9 min read"
  },
  {
    id: "12",
    title: "Testing Strategies for React Applications",
    slug: "testing-strategies-react",
    excerpt: "A comprehensive guide to testing React components and applications.",
    content: `# Testing Strategies for React Applications

Testing gives you confidence that your code works as expected.

## Unit Testing

Test individual components in isolation.

## Integration Testing

Test how components work together.`,
    coverImage: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&h=400&fit=crop",
    tags: ["Testing", "React", "Jest"],
    author: "Khaetbek",
    date: "2025-10-30",
    readTime: "14 min read"
  },
  {
    id: "13",
    title: "Git Workflow Best Practices",
    slug: "git-workflow-best-practices",
    excerpt: "Effective Git workflows for team collaboration.",
    content: `# Git Workflow Best Practices

A good Git workflow improves team collaboration and code quality.

## Feature Branches

Create a branch for each feature or bug fix.

## Meaningful Commits

Write clear, descriptive commit messages.`,
    coverImage: "https://images.unsplash.com/photo-1556075798-4825dfaaf498?w=800&h=400&fit=crop",
    tags: ["Git", "Version Control", "Workflow"],
    author: "Khaetbek",
    date: "2025-10-22",
    readTime: "8 min read"
  },
  {
    id: "14",
    title: "Building Design Systems",
    slug: "building-design-systems",
    excerpt: "Creating scalable design systems for consistent user interfaces.",
    content: `# Building Design Systems

A design system ensures consistency across your applications.

## Component Library

Build a library of reusable, well-documented components.

## Design Tokens

Use tokens to manage colors, spacing, and typography.`,
    coverImage: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=400&fit=crop",
    tags: ["Design Systems", "UI", "Components"],
    author: "Khaetbek",
    date: "2025-10-15",
    readTime: "11 min read"
  },
  {
    id: "15",
    title: "API Design Principles",
    slug: "api-design-principles",
    excerpt: "Creating APIs that are intuitive and developer-friendly.",
    content: `# API Design Principles

Good API design makes integration easy and reduces friction.

## Consistency

Use consistent naming conventions and patterns.

## Documentation

Provide clear, comprehensive documentation.`,
    coverImage: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=400&fit=crop",
    tags: ["API", "REST", "Design"],
    author: "Khaetbek",
    date: "2025-10-08",
    readTime: "10 min read"
  },
  {
    id: "16",
    title: "Microservices vs Monolith",
    slug: "microservices-vs-monolith",
    excerpt: "Understanding when to choose microservices or monolithic architecture.",
    content: `# Microservices vs Monolith

Choosing the right architecture depends on your project's needs.

## Monolith Advantages

Simpler deployment, easier debugging, faster development.

## Microservices Advantages

Scalability, team autonomy, technology flexibility.`,
    coverImage: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=400&fit=crop",
    tags: ["Architecture", "Microservices", "Backend"],
    author: "Khaetbek",
    date: "2025-09-30",
    readTime: "12 min read"
  },
  {
    id: "17",
    title: "Continuous Integration Best Practices",
    slug: "ci-best-practices",
    excerpt: "Setting up effective CI/CD pipelines for modern development.",
    content: `# Continuous Integration Best Practices

CI/CD automates testing and deployment for faster delivery.

## Automated Testing

Run tests automatically on every commit.

## Fast Feedback

Keep builds fast to maintain developer productivity.`,
    coverImage: "https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?w=800&h=400&fit=crop",
    tags: ["CI/CD", "DevOps", "Automation"],
    author: "Khaetbek",
    date: "2025-09-22",
    readTime: "9 min read"
  },
  {
    id: "18",
    title: "Modern CSS Techniques",
    slug: "modern-css-techniques",
    excerpt: "Advanced CSS features that make styling easier and more powerful.",
    content: `# Modern CSS Techniques

CSS has evolved significantly. Here are techniques you should be using.

## CSS Variables

Use custom properties for maintainable styles.

## Container Queries

Style based on parent container, not just viewport.`,
    coverImage: "https://images.unsplash.com/photo-1523437113738-bbd3cc89fb19?w=800&h=400&fit=crop",
    tags: ["CSS", "Styling", "Web"],
    author: "Khaetbek",
    date: "2025-09-15",
    readTime: "8 min read"
  },
  {
    id: "19",
    title: "Security Best Practices for Web Apps",
    slug: "security-best-practices-web",
    excerpt: "Essential security measures for protecting your web applications.",
    content: `# Security Best Practices for Web Apps

Security should be a priority from day one.

## Input Validation

Always validate and sanitize user input.

## Authentication

Implement secure authentication with proper session management.`,
    coverImage: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=800&h=400&fit=crop",
    tags: ["Security", "Web", "Best Practices"],
    author: "Khaetbek",
    date: "2025-09-08",
    readTime: "11 min read"
  },
  {
    id: "20",
    title: "From Junior to Senior Developer",
    slug: "junior-to-senior-developer",
    excerpt: "Key skills and mindsets that differentiate senior developers.",
    content: `# From Junior to Senior Developer

The journey from junior to senior is about more than just coding skills.

## Technical Excellence

Master your tools and understand fundamental concepts.

## Communication

Learn to explain complex ideas clearly to different audiences.`,
    coverImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=400&fit=crop",
    tags: ["Career", "Growth", "Mentorship"],
    author: "Khaetbek",
    date: "2025-08-30",
    readTime: "10 min read"
  }
];

// Messages data
export const messages: Message[] = [
  {
    id: "1",
    name: "Sarah Johnson",
    email: "sarah.johnson@company.com",
    message: "Hi Khaetbek, I loved your recent article on React patterns. Would you be interested in speaking at our tech conference in March?",
    date: "2026-01-28",
    read: false
  },
  {
    id: "2",
    name: "Michael Chen",
    email: "m.chen@startup.io",
    message: "We're looking for a frontend consultant for our Series A startup. Your portfolio is impressive. Can we schedule a call?",
    date: "2026-01-27",
    read: false
  },
  {
    id: "3",
    name: "Emma Williams",
    email: "emma.w@university.edu",
    message: "I'm a computer science student interested in your mentorship program. How can I apply?",
    date: "2026-01-25",
    read: true
  },
  {
    id: "4",
    name: "David Park",
    email: "david.park@agency.com",
    message: "Great work on the EcoTrack project! We have a similar sustainability project and would love to collaborate.",
    date: "2026-01-22",
    read: true
  },
  {
    id: "5",
    name: "Lisa Anderson",
    email: "lisa@techblog.com",
    message: "Would you be interested in writing a guest post for our technology blog? We have 50K monthly readers.",
    date: "2026-01-20",
    read: true
  },
  {
    id: "6",
    name: "James Wilson",
    email: "james.wilson@corp.net",
    message: "Your TypeScript course was excellent! Do you offer private training for corporate teams?",
    date: "2026-01-18",
    read: true
  },
  {
    id: "7",
    name: "Nina Petrov",
    email: "nina.petrov@design.co",
    message: "I'm a UX designer looking to learn frontend development. Can you recommend where to start?",
    date: "2026-01-15",
    read: true
  },
  {
    id: "8",
    name: "Robert Kim",
    email: "r.kim@venture.capital",
    message: "Interested in discussing investment opportunities in Geneligence Group. Please reach out at your convenience.",
    date: "2026-01-12",
    read: true
  }
];

// Career timeline
export const timeline: TimelineItem[] = [
  {
    year: "2024 - Present",
    title: "Founder & Lead Developer",
    company: "Geneligence Group",
    description: "Founded personal brand and education initiative focused on frontend development, mentorship, and product building."
  },
  {
    year: "2021 - 2024",
    title: "Senior Frontend Engineer",
    company: "TechCorp International",
    description: "Led frontend architecture for enterprise applications, mentored junior developers, and introduced modern development practices."
  },
  {
    year: "2019 - 2021",
    title: "Frontend Developer",
    company: "StartupHub",
    description: "Built scalable web applications for various startups, specializing in React and TypeScript ecosystems."
  },
  {
    year: "2017 - 2019",
    title: "Junior Developer",
    company: "WebAgency Co.",
    description: "Started career building websites and web applications for clients across different industries."
  },
  {
    year: "2016 - 2017",
    title: "Intern",
    company: "Digital Solutions Ltd.",
    description: "Learned fundamentals of web development while contributing to client projects."
  }
];

// Skills data
export const skills: Skill[] = [
  {
    category: "Frontend",
    items: ["React", "Next.js", "TypeScript", "Vue.js", "Tailwind CSS", "Framer Motion"]
  },
  {
    category: "Mobile",
    items: ["React Native", "Flutter", "iOS", "Android"]
  },
  {
    category: "Backend",
    items: ["Node.js", "Python", "GraphQL", "REST APIs", "PostgreSQL", "MongoDB"]
  },
  {
    category: "Tools",
    items: ["Git", "Docker", "AWS", "Vercel", "Figma", "VS Code"]
  },
  {
    category: "Soft Skills",
    items: ["Leadership", "Mentoring", "Communication", "Problem Solving", "Team Collaboration"]
  }
];

// All unique tech stacks for filtering
export const allTechStacks = Array.from(
  new Set(projects.flatMap(p => p.techStack))
).sort();

// All unique tags for filtering
export const allTags = Array.from(
  new Set(blogPosts.flatMap(p => p.tags))
).sort();

// Site settings
export const siteSettings = {
  name: "Khaetbek",
  email: "hello@khaetbek.dev",
  tagline: "Frontend Developer, Mentor, Product Builder",
  bio: "I craft accessible, pixel-perfect digital experiences for the web. With 10+ years of experience, I specialize in building scalable frontend architectures and mentoring the next generation of developers.",
  avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
  social: {
    github: "https://github.com/khaetbek",
    linkedin: "https://linkedin.com/in/khaetbek",
    twitter: "https://twitter.com/khaetbek",
    instagram: "https://instagram.com/khaetbek"
  },
  seo: {
    title: "Khaetbek | Frontend Developer & Mentor",
    description: "Personal portfolio of Khaetbek - Frontend Developer, Mentor, and Product Builder. Specializing in React, TypeScript, and modern web technologies."
  }
};

// Geneligence Group data
export const geneligenceData = {
  name: "Geneligence Group",
  tagline: "Building the Future of Web Development",
  mission: "Empowering developers through education, mentorship, and innovative product development.",
  description: "Geneligence Group is a personal brand and studio initiative focused on three pillars: Development, Education, and Mentorship. We believe in building not just products, but people.",
  values: [
    {
      title: "Excellence",
      description: "We strive for excellence in everything we create, from code quality to user experience."
    },
    {
      title: "Education",
      description: "Knowledge sharing is at the core of what we do. We believe in lifting others as we climb."
    },
    {
      title: "Innovation",
      description: "We stay at the forefront of technology, constantly exploring new tools and techniques."
    },
    {
      title: "Community",
      description: "We believe in the power of community and open collaboration."
    }
  ],
  services: [
    {
      title: "Development",
      description: "Custom web and mobile application development using modern technologies.",
      icon: "code"
    },
    {
      title: "Mentorship",
      description: "One-on-one and group mentorship programs for developers at all levels.",
      icon: "users"
    },
    {
      title: "Education",
      description: "Comprehensive courses and workshops on frontend development.",
      icon: "graduation-cap"
    },
    {
      title: "Consulting",
      description: "Technical consulting for startups and enterprises.",
      icon: "briefcase"
    }
  ],
  roadmap: [
    { quarter: "Q1 2026", milestone: "Launch comprehensive React course" },
    { quarter: "Q2 2026", milestone: "Expand mentorship program to 50 mentees" },
    { quarter: "Q3 2026", milestone: "Release open-source component library" },
    { quarter: "Q4 2026", milestone: "Host first annual developer conference" }
  ]
};
