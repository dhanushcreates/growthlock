/**
 * Configurable metadata, portfolio projects, digital assets, and YouTube channel content
 * for the Dhanush Tech portfolio and marketplace.
 * All values are placeholder content that the user can easily update.
 */

import { Project, Asset, Testimonial } from './types';
import { PROFILE_BASE64 } from './components/profile-b64';

// YouTube Channel Analytics & Links
export const YOUTUBE_CONFIG = {
  channelLink: "https://www.youtube.com/@Growth_Lock",
  subscriberCount: "100K+",
  videoViews: "10M+",
  channelDescription: "High-retention video editing breakdowns, Premiere & AE preset templates, and visual layouts optimized for viral engagement.",
  recentVideos: [
    {
      id: "v-1",
      title: "The Ultimate Vision: Reaching New Horizons & Life Goals",
      thumbnailUrl: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=1000",
      videoUrl: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=1600",
      duration: "Life Goals"
    },
    {
      id: "v-2",
      title: "The Editing Sanctum: Advanced Cinematic Color grading & Pacing Suite",
      thumbnailUrl: "https://images.unsplash.com/photo-1616469829581-73993eb86b02?auto=format&fit=crop&q=80&w=1000",
      videoUrl: "https://images.unsplash.com/photo-1616469829581-73993eb86b02?auto=format&fit=crop&q=80&w=1600",
      duration: "Cinematic Editing"
    }
  ]
};

// Services Offered
export const SERVICES_CONFIG = [
  {
    id: "serv-editing",
    title: "Video Editing",
    subtitle: "Cinematic & Dynamic",
    description: "Cinematic storytelling and high-retention social content tailored for modern visual distribution channels.",
    iconName: "Film"
  },
  {
    id: "serv-design",
    title: "Graphic Design",
    subtitle: "Apple-Inspired & Minimal",
    description: "High-conversion assets, elegant corporate branding layouts, and minimalist vector systems.",
    iconName: "Palette"
  },
  {
    id: "serv-dev",
    title: "Web Development",
    subtitle: "Performance & Craft",
    description: "Modern, responsive React & Tailwind interfaces engineered for pixel-perfection and top-tier core web vitals.",
    iconName: "Code2"
  }
];

// Selected Works / Portfolio Showcase
export const PORTFOLIO_CONFIG: Project[] = [
  {
    id: "proj-2",
    title: "Cinematic Brand Campaign",
    category: "video",
    imageUrl: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&q=80&w=800",
    description: "Full creative direction and cinema post-production for an international brand's main creators platform. Handcrafted color grading, tailored soundscapes, and highly energetic momentum layout for ultimate retention.",
    service: "Creative Direction, Video Editing & Sound Design"
  },
  {
    id: "proj-3",
    title: "Official Growth Lock Branding Project",
    category: "design",
    imageUrl: PROFILE_BASE64 || "https://images.unsplash.com/photo-1540569014015-19a7be504e3a?auto=format&fit=crop&q=80&w=800",
    description: "The official creative asset development and modern visual styling showcase for the Growth Lock brand. Engineered to exhibit supreme modern studio contrast, high-retention thumbnail layout structures, and professional color metrics.",
    service: "Creative Direction, Studio Portraiture & Post-Production"
  },
  {
    id: "proj-dev-1",
    title: "SaaS Analytics & Performance Engine",
    category: "web",
    imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
    description: "A highly-responsive React web application equipped with dynamic real-time canvas reporting, interactive analytics, and high-conversion aesthetic components optimized with custom Tailwind configurations.",
    service: "Front-End Engineering, Custom Chart Datasets & Performance Tuning"
  },
  {
    id: "proj-dev-2",
    title: "Immersive Liquid Metal Interactive Portfolio",
    category: "web",
    imageUrl: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80&w=800",
    description: "A visually cinematic WebGL-based online creator hub utilizing premium physics, custom cursor animations, and modern responsive layout grids for an unbeatable desktop-first portfolio experience.",
    service: "Creative Web Development, WebGL Shaders & Micro-Animations"
  }
];

// Marketplace Digital Assets
export const ASSETS_CONFIG: Asset[] = [
  {
    id: "asset-1",
    title: "Minimal Thumbnail Grid Pack",
    category: "thumbnail",
    imageUrl: "https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&q=80&w=800",
    description: "A meticulously crafted set of high-end graphic layout templates designed specifically for high CTR on tech, science, and design channels. Optimized typography hierarchy and high-impact framing rules.",
    tag: "Trending",
    features: [
      "25 customizable Adobe Photoshop templates (PSD)",
      "Preconfigured Helvetica/Inter/Hanken Grotesk scales",
      "Dynamic high-contrast visual backdrops",
      "Comprehensive typography hierarchy cheat sheet"
    ]
  },
  {
    id: "asset-2",
    title: "Signature Cinematic LUTs Bundle",
    category: "preset",
    imageUrl: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&q=80&w=800",
    description: "10 premium color lookup profiles (.cube) tuned to deliver dramatic tonal curves, elegant slate-gray shadows, and glowing warm skin tones straight out of the box.",
    features: [
      "10 proprietary .CUBE lookup files",
      "Fully compatible with Premiere, Resolve, and FCPX",
      "Maintains flawless skin tones and highlight safety margin",
      "Includes step-by-step PDF installation guide"
    ]
  },
  {
    id: "asset-3",
    title: "Fluid Motion Presets Engine",
    category: "motion",
    imageUrl: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800",
    description: "Drag-and-drop smooth camera glides, whips, and structural zooms tuned with customized bezier handles. Instantly transforms standard editing timelines into premium productions.",
    tag: "Best Value",
    features: [
      "15 modular transition presets for Premiere and After Effects",
      "Handcrafted velocity and overshoot motion profiles",
      "Ambient sound design file (WAV) paired to each movement",
      "Zero-latency lightweight export configurations"
    ]
  },
  {
    id: "asset-4",
    title: "Apple-Inspired Portfolio React Kit",
    category: "web-template",
    imageUrl: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80&w=800",
    description: "An elegant, lightning-fast portfolio and digital assets store built directly in React, Vite, and Tailwind. Complete with dynamic carts, modal cards, and fluid grid transitions.",
    features: [
      "Fully componentized React & TypeScript modules",
      "Tailwind responsive layout grid with fluid scroll locks",
      "Built-in state based Shopping Cart & Detail Modals",
      "Guaranteed 100% Google Lighthouse score capability"
    ]
  }
];

// Testimonials / Client Feedback
export const TESTIMONIALS_CONFIG: Testimonial[] = [
  {
    id: "test-1",
    name: "Alexander Vance",
    role: "Design Director",
    company: "Svelte Media",
    text: "Growth Lock has an incredible mastery over visual and technical space. The editing workflow enhancements changed our team's throughput overnight. Absolutely world-class.",
    initials: "AV"
  },
  {
    id: "test-2",
    name: "Kaitlyn Reese",
    role: "Independent Tech Creator",
    company: "300K+ Sub YouTube Channel",
    text: "The thumbnail kit and LUT presets have given my films an instantly recognizable, cinematic prestige. My click-through-rate jumped by nearly 4%!",
    initials: "KR"
  },
  {
    id: "test-3",
    name: "David Chen",
    role: "Technical Co-founder",
    company: "LinearFlow",
    text: "Growth Lock delivers digital assets with the taste and precision of an agency. The front-end is spotless, performant, and beautifully coded.",
    initials: "DC"
  }
];

// Global contact details
export const CONTACT_CONFIG = {
  directEmail: "growthlockyt@gmail.com",
  socials: {
    instagram: "https://www.instagram.com/tamil_presents/",
    linkedin: "https://www.linkedin.com/in/dhanush-sk-528889356/",
    youtube: "https://www.youtube.com/@Growth_Lock",
    github: "https://github.com/dhanushcreates"
  },
  availability: "Available for premium collaborations, video asset engineering, and selective design retainer contracts."
};
