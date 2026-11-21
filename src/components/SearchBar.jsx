import { Search } from "lucide-react";

export default function SearchBar({ value, onChange }) {
  return (
    <div className="search">
      <Search size={16} aria-hidden="true" />
      <label htmlFor="search" className="visually-hidden">Search tasks</label>
      <input
        id="search"
        type="search"
        placeholder="Find a task..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}