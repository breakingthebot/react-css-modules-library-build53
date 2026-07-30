# Build 53: ModulaUI — React CSS Modules Component Library

[![Vercel Deployment](https://img.shields.io/badge/Vercel-Live%20Demo-000000?style=for-the-badge&logo=vercel)](https://react-css-modules-library-build53-pvl71zvas.vercel.app)
[![GitHub Repository](https://img.shields.io/badge/GitHub-Repository-181717?style=for-the-badge&logo=github)](https://github.com/breakingthebot/react-css-modules-library-build53)
[![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](file:///C:/Users/marve/Desktop/AI-286-Builds/Build_53/LICENSE)
[![CSS Modules](https://img.shields.io/badge/CSS-Modules-blue?style=for-the-badge&logo=css3)](file:///C:/Users/marve/Desktop/AI-286-Builds/Build_53/src/App.module.css)
[![Release](https://img.shields.io/badge/Release-v2.4.0-indigo?style=for-the-badge)](file:///C:/Users/marve/Desktop/AI-286-Builds/Build_53/CHANGELOG.md)

---

## 🌟 Overview

**ModulaUI** is a standalone, production-grade **React UI Component Library** engineered specifically to demonstrate scoped CSS Modules architecture (`*.module.css`) for modern frontend web applications. Featuring 22 fully reusable components (`Button`, `Popover`, `SegmentedControl`, `Table`, `Drawer`, `Breadcrumb`, `Slider`, `Alert`, `Select`, `Tooltip`, `Avatar`, `AvatarGroup`, `Tabs`, `Progress`, `Skeleton`, `Input`, `Toggle`, `Modal`, `Card`, `Badge`, `Accordion`, `Toast`), ModulaUI guarantees 100% style isolation and zero class name collisions across large-scale codebases.

### 🌐 Live Production Demo
- **Live Vercel Application**: [https://react-css-modules-library-build53-pvl71zvas.vercel.app](https://react-css-modules-library-build53-pvl71zvas.vercel.app)
- **Vercel Production Domain**: [https://react-css-modules-library-build53.vercel.app](https://react-css-modules-library-build53.vercel.app)
- **GitHub Codebase**: [https://github.com/breakingthebot/react-css-modules-library-build53](https://github.com/breakingthebot/react-css-modules-library-build53)
- **License**: [MIT License](file:///C:/Users/marve/Desktop/AI-286-Builds/Build_53/LICENSE)

---

## 📂 Directory Architecture

```
Build_53/
├── src/
│   ├── components/
│   │   ├── Button/           # Button.jsx & Button.module.css
│   │   ├── Popover/          # Popover.jsx & Popover.module.css
│   │   ├── SegmentedControl/ # SegmentedControl.jsx & SegmentedControl.module.css
│   │   ├── Table/            # Table.jsx & Table.module.css
│   │   ├── Drawer/           # Drawer.jsx & Drawer.module.css
│   │   ├── Breadcrumb/       # Breadcrumb.jsx & Breadcrumb.module.css
│   │   ├── Slider/           # Slider.jsx & Slider.module.css
│   │   ├── Alert/            # Alert.jsx & Alert.module.css
│   │   ├── Select/           # Select.jsx & Select.module.css
│   │   ├── Tooltip/          # Tooltip.jsx & Tooltip.module.css
│   │   ├── Avatar/           # Avatar.jsx & Avatar.module.css
│   │   ├── Tabs/             # Tabs.jsx & Tabs.module.css
│   │   ├── Progress/         # Progress.jsx & Progress.module.css
│   │   ├── Skeleton/         # Skeleton.jsx & Skeleton.module.css
│   │   ├── Input/            # Input.jsx & Input.module.css
│   │   ├── Toggle/           # Toggle.jsx & Toggle.module.css
│   │   ├── Modal/            # Modal.jsx & Modal.module.css
│   │   ├── Card/             # Card.jsx & Card.module.css
│   │   ├── Badge/            # Badge.jsx & Badge.module.css
│   │   ├── Accordion/        # Accordion.jsx & Accordion.module.css
│   │   └── Toast/            # Toast.jsx & Toast.module.css
│   ├── styles/
│   │   └── global.css        # CSS Custom Property design tokens
│   ├── App.jsx               # Interactive Component Playground
│   ├── App.module.css        # Playground scoped styles
│   └── main.jsx              # React application entry point
├── AGENTS.md                 # Master SOP Guidelines (copied & enforced)
├── BUILD_NOTES.md            # Append-only iteration log
├── CHANGELOG.md              # Technical version history
├── README.md                 # System overview & live documentation
├── LICENSE                   # Official MIT License
├── package.json              # Project dependencies & build scripts
├── vite.config.js            # Vite CSS Modules hash configuration
├── vercel.json               # Vercel SPA routing & dist output configuration
└── .gitignore                # SOP exclusion rules
```

---

## 🧩 Included Components

1. **🔘 Button Component (`Button.jsx`, `Button.module.css`)**:
   - Primary, secondary, danger, outline, and ghost style variants with loading spinner and size props.
2. **🪟 Popover Panel (`Popover.jsx`, `Popover.module.css`)**:
   - Click-triggered floating popover panel with position anchors (`bottomLeft`, `bottomRight`, `topLeft`, `topRight`), title headers, and click-outside dismissal.
3. **🎛️ Segmented Control Switcher (`SegmentedControl.jsx`, `SegmentedControl.module.css`)**:
   - Compact toggle button group with active pill elevation shadows, full-width mode, and size options (`sm`, `md`, `lg`).
4. **🗂️ Data Table & Pagination (`Table.jsx`, `Table.module.css`)**:
   - Data table component with sortable column headers (`▲`/`▼`), custom cell renderers, row hover highlights, and page controls.
5. **🪟 Slide-Over Drawer Panel (`Drawer.jsx`, `Drawer.module.css`)**:
   - Side sheet drawer panel with backdrop blur, sliding keyframe animations (`slideRight`, `slideLeft`), size options (`sm`, `md`, `lg`), and keyboard `ESC` dismissal.
6. **📇 Breadcrumb Navigation Trail (`Breadcrumb.jsx`, `Breadcrumb.module.css`)**:
   - Hierarchical page navigation path with separator icons, active page highlighting, and accessible `<nav>` markup.
7. **🎛️ Slider Range Control (`Slider.jsx`, `Slider.module.css`)**:
   - Range input slider with dynamic gradient track fill, hover thumb handles, and live value badge displays.
8. **🔔 Alert Callout Banner (`Alert.jsx`, `Alert.module.css`)**:
   - Contextual inline alert callouts (`info`, `success`, `warning`, `danger`) with left accent borders, action slots, and dismiss triggers.
9. **📇 Dropdown Select Menu (`Select.jsx`, `Select.module.css`)**:
   - Custom select dropdown with item icons, search filtering, selected item checkmarks (`✓`), and click-outside dismissal.
10. **🪟 Tooltip Hover Popup (`Tooltip.jsx`, `Tooltip.module.css`)**:
   - Directional callout tooltips (`top`, `bottom`, `left`, `right`) with arrow indicators and scale/fade entrance animations.
11. **🖼️ Avatar & Avatar Group Component (`Avatar.jsx`, `Avatar.module.css`)**:
   - User avatar badges with initials fallbacks, status rings (`online`, `busy`, `away`, `offline`), and stacked avatar group overlaps with overflow counters (`+N`).
12. **📇 Tabs Navigation Bar (`Tabs.jsx`, `Tabs.module.css`)**:
   - Underline, pills, and segmented tab switcher variants with active indicator bars, icons, and badge support.
13. **📊 Progress Bar Component (`Progress.jsx`, `Progress.module.css`)**:
   - Linear progress indicators with percentage labels, gradient fills, and animated shine overlays.
14. **💀 Skeleton Loader Component (`Skeleton.jsx`, `Skeleton.module.css`)**:
   - Shimmer wave placeholder elements for text, circular avatars, rectangular cards, and image blocks.
15. **📝 Form Input Component (`Input.jsx`, `Input.module.css`)**:
   - Text inputs with URL addon prepends, search icons, validation error borders, and helper text.
16. **🎛️ Toggle Switch Component (`Toggle.jsx`, `Toggle.module.css`)**:
   - Smooth sliding track switches with active gradient states and accessibility label containers.
17. **🪟 Modal Overlay Component (`Modal.jsx`, `Modal.module.css`)**:
   - Accessible modal dialog component with backdrop blur overlays, scale-up entrance keyframe animations, and keyboard `ESC` dismissal.
18. **🃏 Card Component (`Card.jsx`, `Card.module.css`)**:
   - Standard, glassmorphism, and gradient background variants with composable sub-components (`Card.Header`, `Card.Body`, `Card.Footer`).
19. **🏷️ Badge Pill Component (`Badge.jsx`, `Badge.module.css`)**:
   - Status color pills (`success`, `warning`, `error`, `info`, `neutral`) with animated pulse dot indicators.
20. **🗂️ Accordion Component (`Accordion.jsx`, `Accordion.module.css`)**:
   - Smooth expandable disclosure FAQ panels with CSS grid height transitions.
21. **🔔 Toast Notification Streamer (`Toast.jsx`, `Toast.module.css`)**:
   - Floating notification cards with auto-dismiss timers, progress bar animations, and dismiss triggers.

---

## 📄 Data Handling

This component library operates 100% client-side in browser memory. No user inputs, cookies, or telemetry logs are stored or transmitted.

---

## 📄 License

Distributed under the MIT License. See [LICENSE](file:///C:/Users/marve/Desktop/AI-286-Builds/Build_53/LICENSE) for more information.
