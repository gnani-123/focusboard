# AI Usage Disclosure

## Tools Used
- Claude (Anthropic)

## Representative Prompts
1. "Explain the full process to build this FocusBoard assignment step by step."
2. "Give me the localStorage hook and explain how it works."
3. "Why am I getting 'Failed to resolve import lucide-react'?"
4. "Make the dashboard responsive for 390px, 768px and 1440px."
5. "Write the README and explain the state management choice."

## AI-Assisted Areas
- Project planning and step-by-step guidance
- Component structure and starter code
- CSS and responsive layout
- Debugging import errors and file-name casing issues
- README drafting

## Verified or Corrected Suggestion
My file was saved as `sidebar.jsx` but the import used `Sidebar`, which caused a casing mismatch warning in VS Code. This would have failed on Vercel (Linux is case-sensitive), so I renamed the file to match the import exactly. I also tested every feature in the browser, including refresh persistence.

## Understanding
I tested create, edit, delete, status change, search, filters and the carousel myself, and I can explain how state, filters, statistics and localStorage work.