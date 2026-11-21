import { LayoutGrid, ListChecks, Calendar, Settings } from "lucide-react";

const items = [
  { label: "Overview", icon: LayoutGrid },
  { label: "My tasks", icon: ListChecks },
  { label: "Calendar", icon: Calendar },
  { label: "Settings", icon: Settings },
];

export default function Sidebar({ active = "Overview" }) {
  return (
    <nav aria-label="Main navigation" className="sidebar">
      <div className="brand">FocusBoard</div>
      <ul>
        {items.map(({ label, icon: Icon }) => (
          <li key={label}>
            <button className={label === active ? "nav active" : "nav"}>
              <Icon size={16} aria-hidden="true" /> {label}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}