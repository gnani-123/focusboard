const tabs = ["All", "To do", "In progress", "Completed"];

export default function FilterTabs({ status, onStatusChange, priority, onPriorityChange, onReset }) {
  return (
    <div className="filters">
      <div className="tabs" role="tablist" aria-label="Filter by status">
        {tabs.map((t) => (
          <button
            key={t}
            role="tab"
            aria-selected={status === t}
            className={status === t ? "tab active" : "tab"}
            onClick={() => onStatusChange(t)}
          >
            {t}
          </button>
        ))}
      </div>
      <div className="filter-right">
        <label htmlFor="priority" className="visually-hidden">Filter by priority</label>
        <select id="priority" value={priority} onChange={(e) => onPriorityChange(e.target.value)}>
          <option value="All">Priority: All</option>
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
        </select>
        <button className="btn-reset" onClick={onReset}>Reset</button>
      </div>
    </div>
  );
}