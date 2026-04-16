import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { 
  projects as initialProjects, 
  blogPosts as initialBlogPosts, 
  messages as initialMessages,
  siteSettings as initialSettings,
  type Project,
  type BlogPost,
  type Message
} from './mock-data';

// Auth store - admin authentication with credentials
interface AuthState {
  isAdmin: boolean;
  loginError: string | null;
  login: (username: string, password: string) => boolean;
  logout: () => void;
  clearError: () => void;
}

// Hardcoded admin credentials (simulated)
const ADMIN_USERNAME = 'admin';
const ADMIN_PASSWORD = 'admin123';

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      isAdmin: false,
      loginError: null,
      login: (username: string, password: string) => {
        if (username === ADMIN_USERNAME && password === ADMIN_PASSWORD) {
          set({ isAdmin: true, loginError: null });
          return true;
        }
        set({ loginError: 'Неверный логин или пароль' });
        return false;
      },
      logout: () => set({ isAdmin: false, loginError: null }),
      clearError: () => set({ loginError: null }),
    }),
    {
      name: 'auth-storage',
      partialize: (state) => ({ isAdmin: state.isAdmin }),
    }
  )
);

// Language store
interface LanguageState {
  language: 'en' | 'uz' | 'ru';
  setLanguage: (lang: 'en' | 'uz' | 'ru') => void;
}

export const useLanguageStore = create<LanguageState>()(
  persist(
    (set) => ({
      language: 'en',
      setLanguage: (lang) => set({ language: lang }),
    }),
    {
      name: 'language-storage',
    }
  )
);

// Projects store
interface ProjectsState {
  projects: Project[];
  addProject: (project: Project) => void;
  updateProject: (id: string, project: Partial<Project>) => void;
  deleteProject: (id: string) => void;
  getProject: (slug: string) => Project | undefined;
  getFeaturedProjects: () => Project[];
}

export const useProjectsStore = create<ProjectsState>()(
  persist(
    (set, get) => ({
      projects: initialProjects,
      addProject: (project) => 
        set((state) => ({ projects: [project, ...state.projects] })),
      updateProject: (id, updatedProject) =>
        set((state) => ({
          projects: state.projects.map((p) =>
            p.id === id ? { ...p, ...updatedProject } : p
          ),
        })),
      deleteProject: (id) =>
        set((state) => ({
          projects: state.projects.filter((p) => p.id !== id),
        })),
      getProject: (slug) => get().projects.find((p) => p.slug === slug),
      getFeaturedProjects: () => get().projects.filter((p) => p.featured),
    }),
    {
      name: 'projects-storage',
    }
  )
);

// Blog store
interface BlogState {
  posts: BlogPost[];
  addPost: (post: BlogPost) => void;
  updatePost: (id: string, post: Partial<BlogPost>) => void;
  deletePost: (id: string) => void;
  getPost: (slug: string) => BlogPost | undefined;
}

export const useBlogStore = create<BlogState>()(
  persist(
    (set, get) => ({
      posts: initialBlogPosts,
      addPost: (post) => 
        set((state) => ({ posts: [post, ...state.posts] })),
      updatePost: (id, updatedPost) =>
        set((state) => ({
          posts: state.posts.map((p) =>
            p.id === id ? { ...p, ...updatedPost } : p
          ),
        })),
      deletePost: (id) =>
        set((state) => ({
          posts: state.posts.filter((p) => p.id !== id),
        })),
      getPost: (slug) => get().posts.find((p) => p.slug === slug),
    }),
    {
      name: 'blog-storage',
    }
  )
);

// Messages store
interface MessagesState {
  messages: Message[];
  addMessage: (message: Omit<Message, 'id' | 'date' | 'read'>) => void;
  markAsRead: (id: string) => void;
  deleteMessage: (id: string) => void;
  getUnreadCount: () => number;
}

export const useMessagesStore = create<MessagesState>()(
  persist(
    (set, get) => ({
      messages: initialMessages,
      addMessage: (message) =>
        set((state) => ({
          messages: [
            {
              ...message,
              id: Date.now().toString(),
              date: new Date().toISOString().split('T')[0],
              read: false,
            },
            ...state.messages,
          ],
        })),
      markAsRead: (id) =>
        set((state) => ({
          messages: state.messages.map((m) =>
            m.id === id ? { ...m, read: true } : m
          ),
        })),
      deleteMessage: (id) =>
        set((state) => ({
          messages: state.messages.filter((m) => m.id !== id),
        })),
      getUnreadCount: () => get().messages.filter((m) => !m.read).length,
    }),
    {
      name: 'messages-storage',
    }
  )
);

// Settings store
interface SiteSettings {
  name: string;
  email: string;
  tagline: string;
  bio: string;
  avatar: string;
  social: {
    github: string;
    linkedin: string;
    twitter: string;
    instagram: string;
  };
  seo: {
    title: string;
    description: string;
  };
}

interface SettingsState {
  settings: SiteSettings;
  updateSettings: (settings: Partial<SiteSettings>) => void;
  updateSocialLinks: (social: Partial<SiteSettings['social']>) => void;
  updateSEO: (seo: Partial<SiteSettings['seo']>) => void;
}

export const useSettingsStore = create<SettingsState>()(
  persist(
    (set) => ({
      settings: initialSettings,
      updateSettings: (newSettings) =>
        set((state) => ({
          settings: { ...state.settings, ...newSettings },
        })),
      updateSocialLinks: (social) =>
        set((state) => ({
          settings: {
            ...state.settings,
            social: { ...state.settings.social, ...social },
          },
        })),
      updateSEO: (seo) =>
        set((state) => ({
          settings: {
            ...state.settings,
            seo: { ...state.settings.seo, ...seo },
          },
        })),
    }),
    {
      name: 'settings-storage',
    }
  )
);

// Theme store
interface ThemeState {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
  setTheme: (theme: 'light' | 'dark') => void;
}

export const useThemeStore = create<ThemeState>()(
  persist(
    (set) => ({
      theme: 'dark',
      toggleTheme: () =>
        set((state) => ({ theme: state.theme === 'light' ? 'dark' : 'light' })),
      setTheme: (theme) => set({ theme }),
    }),
    {
      name: 'theme-storage',
    }
  )
);
