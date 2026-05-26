@AGENTS.md
@INSTANT.md

# Habit Mania

Cross-platform habit tracking app built with Expo SDK 56, React Native 0.85, and React 19. Targets iOS, Android, and web.

## Tech Stack

- **Expo Router** (~56.2.7) for file-based routing under `src/app/`
- **React Native Reanimated** (4.3.1) for animations
- **expo-image** and **expo-symbols** for images and platform-native icons
- **react-native-web** (~0.21.0) for web support
- **TypeScript** with strict mode enabled
- **React Compiler** enabled via Expo config
- **InstantDB** (`@instantdb/react-native`) for real-time database, auth, and permissions — see `INSTANT.md` for full guidelines

## Project Structure

- `src/app/` — File-based routes. `_layout.tsx` sets up the tab navigator, `index.tsx` is the home screen, `explore.tsx` is the explore/documentation screen.
- `src/components/` — Reusable components with platform-specific variants (`.web.tsx` for web, default for native).
- `src/constants/theme.ts` — Colors, fonts, spacing scale, and layout constants for light/dark mode.
- `src/hooks/` — Custom hooks including `useTheme()` and `useColorScheme()` with platform-specific implementations.
- `assets/` — Images, icons, and splash screen assets.

## Key Patterns

- Platform-specific files use the `.web.tsx` / `.tsx` convention (e.g., `animated-icon.web.tsx` vs `animated-icon.tsx`).
- Theming uses a custom `useTheme()` hook returning colors from `constants/theme.ts`. Components accept a `themeColor` prop or `type` prop for background variants.
- Safe area insets are handled via `react-native-safe-area-context` with a custom `BottomTabInset` constant added to bottom padding.
- Path aliases: `@/*` maps to `./src/*`, `@/assets/*` maps to `./assets/*`.

## Commands

- `npm start` — Start Expo dev server
- `npm run ios` / `npm run android` / `npm run web` — Run on specific platform
- `npm run reset-project` — Reset to blank app template

## Explore Page

The explore screen (`src/app/explore.tsx`) is an educational/documentation page with collapsible sections covering:

- **File-based routing** — Explains the two-screen structure (`index.tsx` and `explore.tsx`) and how `_layout.tsx` configures tabs.
- **Cross-platform support** — Android, iOS, and web all supported; press `w` in terminal for web.
- **Images** — Responsive image handling with `@2x`/`@3x` density suffixes.
- **Light and dark mode** — Built-in theme support using `useColorScheme()` hook.
- **Animations** — Uses `react-native-reanimated` for the collapsible accordion component.

The page links out to Expo documentation and uses `Collapsible`, `ThemedText`, `ThemedView`, `ExternalLink`, and `WebBadge` components.
