# React + Vite + Radix UI

A modern React application built with Vite, Radix Primitives, and Radix Themes.

## What's Included

This project demonstrates the integration of Radix UI with React and Vite:

- **React** - A JavaScript library for building user interfaces
- **Vite** - Fast build tool and development server
- **Radix Primitives** - Low-level UI primitives with built-in accessibility (27+ components)
- **Radix Themes** - Pre-styled components that work out of the box with minimal configuration

## Why Radix UI?

Radix UI provides the best of both worlds:

1. **Radix Primitives** - Unstyled, accessible components for complete design freedom
2. **Radix Themes** - Pre-styled components that work out of the box, built on top of Primitives
3. **Production Ready** - Battle-tested in production environments
4. **Accessibility First** - All components are fully accessible and WAI-ARIA compliant

### All Available Radix UI Components

This project includes all the core Radix UI primitives:

- `@radix-ui/react-accordion` - Collapsible content sections
- `@radix-ui/react-alert-dialog` - Modal dialogs with destructive actions
- `@radix-ui/react-aspect-ratio` - Maintain consistent aspect ratios
- `@radix-ui/react-avatar` - Display user avatars with fallback support
- `@radix-ui/react-checkbox` - Form checkbox controls
- `@radix-ui/react-collapsible` - Show/hide content with animations
- `@radix-ui/react-context-menu` - Right-click context menus
- `@radix-ui/react-dialog` - Accessible dialog/modal component
- `@radix-ui/react-dropdown-menu` - Dropdown menu component
- `@radix-ui/react-hover-card` - Content revealed on hover
- `@radix-ui/react-label` - Accessible form labels
- `@radix-ui/react-menubar` - Top-level application menus
- `@radix-ui/react-navigation-menu` - Horizontal navigation menus
- `@radix-ui/react-popover` - Floating content containers
- `@radix-ui/react-progress` - Progress indicators
- `@radix-ui/react-radio-group` - Radio button groups
- `@radix-ui/react-scroll-area` - Custom scrollable containers
- `@radix-ui/react-select` - Select/multi-select dropdowns
- `@radix-ui/react-separator` - Visual dividers
- `@radix-ui/react-slider` - Range slider controls
- `@radix-ui/react-slot` - Compose components together
- `@radix-ui/react-switch` - Toggle switch controls
- `@radix-ui/react-tabs` - Tabbed content interfaces
- `@radix-ui/react-toast` - Toast notification component
- `@radix-ui/react-toggle` - Two-state toggle buttons
- `@radix-ui/react-toggle-group` - Groups of toggle buttons
- `@radix-ui/react-tooltip` - Contextual information on hover

All components are fully accessible, unstyled, and customizable!

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and navigate to `http://localhost:5173`

## Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build for production
- `npm run preview` - Preview the production build
- `npm run lint` - Run ESLint

## Radix Themes Features

This project uses Radix Themes to provide:

- ✅ **Pre-styled Components** - Beautiful default styling that works out of the box
- ✅ **Easy Customization** - Customize via Theme component props
- ✅ **Dark Mode** - Built-in dark mode support
- ✅ **Type-safe** - Full TypeScript support
- ✅ **Accessible** - Built on Radix Primitives, fully accessible by default
- ✅ **Production Ready** - Optimized and battle-tested

### Theme Configuration

You can customize the theme by modifying the `Theme` component in `src/main.jsx`:

```jsx
<Theme accentColor="crimson" grayColor="sand" radius="large" scaling="95%">
  <App />
</Theme>
```

Available options:
- `accentColor` - Primary color (grass, teal, cyan, blue, indigo, purple, etc.)
- `grayColor` - Neutral grays (slate, sage, olive, sand, etc.)
- `radius` - Border radius (none, small, medium, large, full)
- `scaling` - Base size scaling (90%, 95%, 100%, 105%, 110%)

## Project Structure

```
src/
├── ui/
│   ├── components/      # All Radix UI components (one file per component)
│   │   ├── Button.jsx   # Edit to customize buttons
│   │   ├── Card.jsx     # Edit to customize cards
│   │   ├── Dialog.jsx   # Edit to customize dialogs
│   │   └── index.js     # Central export point
│   ├── lib/             # Utilities and helpers
│   └── README.md        # UI directory documentation
├── themes/
│   └── custom.css       # Global CSS overrides
└── App.jsx              # Main application
```

## Customization

### The `src/ui/components/` Directory

All Radix UI components are wrapped in individual files in `src/ui/components/`. This structure allows you to:

- **Find components easily** - One file per component
- **Customize without touching Radix source** - Edit your wrapper files
- **Apply consistent styling** - All buttons look the same
- **Swap implementations** - Change one component, affects entire app

### How to Customize Components

1. **Edit component files** - Open `src/ui/components/Button.jsx` and customize
2. **Add global styles** - Edit `src/themes/custom.css`
3. **Configure theme** - Modify the `Theme` component in `src/main.jsx`
4. **Use primitives** - Import directly from `@radix-ui/react-*` for full control

See `src/ui/README.md` for detailed instructions.

## Learn More

- [React Documentation](https://react.dev)
- [Vite Documentation](https://vitejs.dev)
- [Radix Primitives](https://www.radix-ui.com/primitives)
- [Radix Themes](https://www.radix-ui.com/themes)
- [Radix Themes Documentation](https://www.radix-ui.com/themes/docs/overview/getting-started)
