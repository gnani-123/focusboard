# FocusBoard

A responsive task management dashboard built with React and Vite. Users can create, edit, delete and filter tasks, track progress through live statistics, and browse a three-slide Focus Notes carousel. Data is saved in the browser, so it survives a refresh.

## Live Demo

https://focusboard-ecru.vercel.app

## GitHub Repository

https://github.com/gnani-123/focusboard

## Screenshots

![Desktop](screenshots/desktop.png)
![Mobile](screenshots/mobile.png)

## Tech Stack

- React.js (hooks)
- Vite
- JavaScript (ES6+)
- CSS3 (custom properties, flexbox, grid, media queries)
- Lucide React (icons)
- localStorage

## Features

- Create, edit and delete tasks (delete asks for confirmation)
- Status updates: To do, In progress, Completed
- Case-insensitive title search
- Status tabs and priority filter that work together, with a reset button
- Statistics (total, in progress, completed, completion %) calculated from task data
- Focus Notes carousel: 3 slides, previous/next buttons, clickable indicators, circular navigation
- Data saved in localStorage; sample data loads only when nothing is saved
- Responsive at 390px, 768px and 1440px
- Accessibility: semantic HTML, labelled form fields, aria-labels, visible focus outlines, keyboard-friendly dialogs

## Project Structure

```
focusboard/
├── public/
├── screenshots/
├── src/
│   ├── components/
│   │   ├── Sidebar.jsx
│   │   ├── Header.jsx
│   │   ├── StatCard.jsx
│   │   ├── FocusNotes.jsx
│   │   ├── SearchBar.jsx
│   │   ├── FilterTabs.jsx
│   │   ├── TaskList.jsx
│   │   ├── TaskCard.jsx
│   │   ├── TaskForm.jsx
│   │   └── ConfirmDialog.jsx
│   ├── data/sampleTasks.js
│   ├── hooks/useLocalStorage.js
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── AI_USAGE.md
├── README.md
└── package.json
```

## Setup

```
npm install
npm run dev
```

Build for production: `npm run build`

## State Management

I used React hooks only (`useState` and a custom `useLocalStorage` hook). No external library is needed for an app this size.

- **Single source of truth:** all tasks live in one `tasks` state in `App.jsx`. Cards, rows, statistics, filters and forms all read from it.
- **CRUD:** add, edit, delete and status change create a new array with `map`, `filter` or spread, so existing state is never mutated directly. Edit finds the task by `id` and keeps the original `id`.
- **Derived values:** statistics and visible tasks are calculated from `tasks`, `search`, `statusFilter` and `priorityFilter` on every render. Nothing is hardcoded. Completion % guards against division by zero.
- **Carousel:** `FocusNotes` keeps an `index` state; the visible slide and the active indicator both use it.
- **Create/Edit form:** one `TaskForm` component serves both. If a task is passed in, it pre-fills and saves as an edit.

## localStorage

`useLocalStorage(key, initialValue)` reads `focusboard_tasks` on first load inside a `try/catch`. If saved data exists it is used; otherwise the sample tasks are loaded. A `useEffect` writes the latest tasks back as JSON whenever they change. Only the full task list is stored, not filtered results.

## Known Limitations

- Sidebar items other than Overview and the header avatar are visual placeholders.
- New tasks get the category "General" (the form has no category field, as in the Figma design).
- Focus Notes subtitle text and colors were matched approximately from the Figma frames.