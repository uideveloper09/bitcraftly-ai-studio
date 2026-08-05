/**
 * Application-wide string constants. Prefer these over hardcoded strings.
 */

export const APP_NAME = 'Bitcraftly AI Studio' as const;
export const APP_SHORT_NAME = 'Bitcraftly' as const;
export const APP_DESCRIPTION =
  'Enterprise AI platform for generating and publishing AI-powered content.' as const;
export const APP_TAGLINE = 'Create. Publish. Scale.' as const;
/** Brand line from bitcraftly.com — shown under the logo mark */
export const APP_BRAND_TAGLINE = 'AI & Digital Engineering Partner' as const;

export const BRAND_LINKS = {
  WEBSITE: 'https://bitcraftly.com',
  EMAIL: 'mailto:hello@bitcraftly.com',
  PHONE: 'tel:+919667710954',
  LINKEDIN: 'https://www.linkedin.com/company/bitcraftly',
  INSTAGRAM: 'https://www.instagram.com/bitcraftly',
  YOUTUBE: 'https://www.youtube.com/@bitcraftly',
  TWITTER: 'https://x.com/bitcraftly',
  FACEBOOK: 'https://www.facebook.com/bitcraftly',
  GITHUB: 'https://github.com/bitcraftly',
} as const;

export const BRAND_CONTACT = {
  EMAIL: 'hello@bitcraftly.com',
  PHONE: '+91 96677 10954',
  LOCATION: 'Noida, Uttar Pradesh, India',
} as const;

export const LANDING_COPY = {
  HERO_BADGE: 'NEW · AI Reel Generator is live',
  HERO_TITLE_LEAD: 'Create. Publish.',
  HERO_TITLE_ACCENT: 'Scale',
  HERO_TITLE_TAIL: 'with AI.',
  HERO_SUPPORT:
    'Enterprise AI content studio for reels, posts, images, and video — one workspace to create and publish at scale.',
  HERO_PILL_AI: 'AI-Powered',
  HERO_PILL_FORMAT: 'Multi-Format',
  HERO_PILL_SECURE: 'Scale Securely',
  NAV_MODULES: 'Modules',
  NAV_STUDIO: 'Studio',
  NAV_PRICING: 'Pricing',
  NAV_RESOURCES: 'Resources',
  NAV_CONTACT: 'Contact',
  RESOURCES_DOCS: 'Docs',
  RESOURCES_BLOG: 'Blog',
  RESOURCES_HELP: 'Help Center',
  RESOURCES_API: 'API',
  RESOURCES_CHANGELOG: 'Changelog',
  SECTION_MODULES_BADGE: 'Built for growth',
  SECTION_MODULES_TITLE: 'Modules that grow with you',
  SECTION_MODULES_SUPPORT: 'Start with reels. Expand without rebuilding.',
  MODULE_REELS: 'AI Reels',
  MODULE_REELS_DESC: 'Topic to script, voice, and vertical video.',
  MODULE_POSTS: 'AI Posts',
  MODULE_POSTS_DESC: 'Social copy and creatives, coming next.',
  MODULE_IMAGES: 'AI Images',
  MODULE_IMAGES_DESC: 'Brand-ready visuals in your studio.',
  MODULE_VIDEOS: 'AI Videos',
  MODULE_VIDEOS_DESC: 'Long-form and short-form videos.',
  MODULE_BANNERS: 'AI Banners',
  MODULE_BANNERS_DESC: 'Stunning banners in seconds.',
  MODULE_BLOG: 'AI Blog Writer',
  MODULE_BLOG_DESC: 'SEO-optimized blogs with AI.',
  MODULE_ANALYTICS: 'Analytics',
  MODULE_ANALYTICS_DESC: 'Performance signals across modules.',
  MODULE_STUDIO: 'Studio Hub',
  MODULE_STUDIO_DESC: 'One control plane for every workflow.',
  CTA_LAUNCH: 'Launch',
  CTA_COMING_SOON: 'Coming Soon',
  CTA_BOOK_DEMO: 'Book a Demo',
  FOOTER_POWERED_BY: 'Powered by AI',
  PREVIEW_WELCOME: 'Welcome back, Sanjay!',
  PREVIEW_ACTIVITY: 'Recent Activity',
  PREVIEW_QUEUE: 'Generation Queue',
  FOOTER_PRODUCT: 'Product',
  FOOTER_COMPANY: 'Company',
  FOOTER_RESOURCES: 'Resources',
  FOOTER_CONTACT: 'Contact',
  FOOTER_PRIVACY: 'Privacy Policy',
  FOOTER_TERMS: 'Terms of Service',
  FOOTER_RIGHTS: '© 2026 Bitcraftly Technologies Pvt. Ltd. All rights reserved.',
  FOOTER_BLURB: 'Complete digital systems — website, AI, dashboard, analytics, and integrations.',
  COMPANY_ABOUT: 'About Us',
  COMPANY_WORK: 'Our Work',
  COMPANY_INDUSTRY: 'Industry Systems',
  COMPANY_CAREERS: 'Careers',
  COMPANY_EMAIL: 'Email us',
} as const;

export const ROUTES = {
  HOME: '/',
  STUDIO: '/studio',
  STUDIO_REELS: '/studio/reels',
  STUDIO_POSTS: '/studio/posts',
  STUDIO_IMAGES: '/studio/images',
  STUDIO_VIDEOS: '/studio/videos',
  STUDIO_ANALYTICS: '/studio/analytics',
  SETTINGS: '/settings',
  LOGIN: '/login',
  REGISTER: '/register',
} as const;

export const API_ROUTES = {
  HEALTH: '/health',
  REELS: '/api/v1/reels',
  REELS_GENERATE: '/api/v1/reels/generate',
  REELS_BY_ID: '/api/v1/reels/:id',
  GENERATIONS: '/api/v1/generations',
  GENERATIONS_BY_ID: '/api/v1/generations/:id',
  MEDIA: '/api/v1/media',
  ACTIVITY: '/api/v1/activity',
  SETTINGS: '/api/v1/settings',
  STATS: '/api/v1/stats',
} as const;

export const MODULE_IDS = {
  REELS: 'reels',
  POSTS: 'posts',
  IMAGES: 'images',
  VIDEOS: 'videos',
  BANNERS: 'banners',
  THUMBNAILS: 'thumbnails',
  BLOG: 'blog',
  SOCIAL: 'social',
  ANALYTICS: 'analytics',
} as const;

export const NAV_ITEMS = {
  DASHBOARD: 'Dashboard',
  REELS: 'AI Reels',
  POSTS: 'AI Posts',
  IMAGES: 'AI Images',
  VIDEOS: 'AI Videos',
  ANALYTICS: 'Analytics',
  SETTINGS: 'Settings',
} as const;

export const REEL_LANGUAGES = [
  { value: 'en', label: 'English' },
  { value: 'es', label: 'Spanish' },
  { value: 'fr', label: 'French' },
  { value: 'de', label: 'German' },
  { value: 'hi', label: 'Hindi' },
  { value: 'pt', label: 'Portuguese' },
  { value: 'ja', label: 'Japanese' },
  { value: 'ko', label: 'Korean' },
] as const;

export const REEL_STYLES = [
  { value: 'cinematic', label: 'Cinematic' },
  { value: 'minimal', label: 'Minimal' },
  { value: 'energetic', label: 'Energetic' },
  { value: 'educational', label: 'Educational' },
  { value: 'storytelling', label: 'Storytelling' },
  { value: 'corporate', label: 'Corporate' },
] as const;

export const REEL_VOICES = [
  { value: 'alloy', label: 'Alloy' },
  { value: 'echo', label: 'Echo' },
  { value: 'fable', label: 'Fable' },
  { value: 'onyx', label: 'Onyx' },
  { value: 'nova', label: 'Nova' },
  { value: 'shimmer', label: 'Shimmer' },
] as const;

export const REEL_DURATIONS = [
  { value: 15, label: '15 seconds' },
  { value: 30, label: '30 seconds' },
  { value: 45, label: '45 seconds' },
  { value: 60, label: '60 seconds' },
] as const;

export const REEL_ASPECT_RATIOS = [
  { value: '9:16', label: '9:16 · Vertical' },
  { value: '1:1', label: '1:1 · Square' },
  { value: '16:9', label: '16:9 · Landscape' },
] as const;

export const GENERATION_STATUS = {
  PENDING: 'PENDING',
  QUEUED: 'QUEUED',
  PROCESSING: 'PROCESSING',
  SCRIPTING: 'SCRIPTING',
  IMAGING: 'IMAGING',
  VOICING: 'VOICING',
  RENDERING: 'RENDERING',
  COMPLETED: 'COMPLETED',
  FAILED: 'FAILED',
  CANCELLED: 'CANCELLED',
} as const;

export const MEDIA_TYPE = {
  IMAGE: 'IMAGE',
  AUDIO: 'AUDIO',
  VIDEO: 'VIDEO',
  SCRIPT: 'SCRIPT',
  THUMBNAIL: 'THUMBNAIL',
} as const;

export const ACTIVITY_TYPE = {
  REEL_CREATED: 'REEL_CREATED',
  REEL_GENERATED: 'REEL_GENERATED',
  REEL_DOWNLOADED: 'REEL_DOWNLOADED',
  REEL_FAILED: 'REEL_FAILED',
  SETTINGS_UPDATED: 'SETTINGS_UPDATED',
  USER_LOGIN: 'USER_LOGIN',
} as const;

export const QUEUE_NAMES = {
  REEL_GENERATION: 'reel-generation',
  IMAGE_GENERATION: 'image-generation',
  VOICE_GENERATION: 'voice-generation',
  VIDEO_RENDER: 'video-render',
  PUBLISH: 'publish',
} as const;

export const ERROR_CODES = {
  VALIDATION_ERROR: 'VALIDATION_ERROR',
  NOT_FOUND: 'NOT_FOUND',
  UNAUTHORIZED: 'UNAUTHORIZED',
  FORBIDDEN: 'FORBIDDEN',
  CONFLICT: 'CONFLICT',
  INTERNAL_ERROR: 'INTERNAL_ERROR',
  GENERATION_FAILED: 'GENERATION_FAILED',
  RATE_LIMITED: 'RATE_LIMITED',
} as const;

export const UI_COPY = {
  GENERATE_REEL: 'Generate Reel',
  DOWNLOAD: 'Download',
  PREVIEW: 'Preview',
  RESET: 'Reset',
  CANCEL: 'Cancel',
  SAVE: 'Save',
  LOADING: 'Loading…',
  SEARCH_PLACEHOLDER: 'Search workspace…',
  NO_REELS: 'No reels yet. Create your first AI reel.',
  GENERATION_QUEUED: 'Your reel has been queued for generation.',
  GENERATION_FAILED: 'Generation failed. Please try again.',
  RECENT_REELS: 'Recent Reels',
  RECENT_ACTIVITY: 'Recent Activity',
  GENERATION_QUEUE: 'Generation Queue',
  QUICK_ACTIONS: 'Quick Actions',
  SYSTEM_STATUS: 'System Status',
  ACTIVITY: 'Activity',
  STATISTICS: 'Statistics',
  WORKSPACE: 'Workspace',
  NOTIFICATIONS: 'Notifications',
  PROFILE: 'Profile',
  TOPIC: 'Topic',
  LANGUAGE: 'Language',
  STYLE: 'Style',
  VOICE: 'Voice',
  DURATION: 'Duration',
  ASPECT_RATIO: 'Aspect Ratio',
  COMING_SOON: 'Coming soon',
  COMING_SOON_DESCRIPTION: 'This module is on the roadmap. The studio layout is ready for it.',
  BACK_TO_DASHBOARD: 'Back to dashboard',
  RETURN_HOME: 'Return home',
  SOMETHING_WENT_WRONG: 'Something went wrong',
  UNEXPECTED_ERROR: 'An unexpected error occurred. Please try again.',
  TOTAL_GENERATIONS: 'Total Generations',
  TODAYS_JOBS: "Today's Jobs",
  QUEUE_STATUS: 'Queue Status',
  STORAGE_USED: 'Storage Used',
  COLLAPSE_SIDEBAR: 'Collapse sidebar',
  EXPAND_SIDEBAR: 'Expand sidebar',
  OPEN_NAVIGATION: 'Open navigation',
  FOOTER_COPYRIGHT: '© Bitcraftly AI Studio',
  IDLE: 'Idle',
  READY: 'Ready',
  ALL_SYSTEMS_OPERATIONAL: 'All systems operational',
  THEME: 'Theme',
  NOTIFICATIONS_PREF: 'Notifications',
  STORAGE: 'Storage',
  ABOUT: 'About',
  DISPLAY_NAME: 'Display name',
  SETTINGS_SAVED_MOCK: 'Settings saved (mock)',
  OPEN_STUDIO: 'Open Studio',
  EXPLORE_DASHBOARD: 'Explore dashboard',
} as const;
