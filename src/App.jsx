import { useState } from "react";
import "./index.css";
import useLocalStorage from "./hooks/useLocalStorage";
import { sampleTasks } from "./data/sampleTasks";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import StatCard from "./components/StatCard";
import FocusNotes from "./components/FocusNotes";
import TaskList from "./components/TaskList";
import SearchBar from "./components/SearchBar";
import FilterTabs from "./components/FilterTabs";
import TaskForm from "./components/TaskForm";
import ConfirmDialog from "./components/ConfirmDialog";
import { ListChecks, Clock, CheckCircle2 } from "lucide-react";

export default function App() {
  const [tasks, setTasks] = useLocalStorage("focusboard_tasks", sampleTasks);
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [priorityFilter, setPriorityFilter] = useState("All");
  const [showForm, setShowForm] = useState(false);
  const [editingTask, setEditingTask] = useState(null);
  const [deletingTask, setDeletingTask] = useState(null);

  const openCreate = () => {
    setEditingTask(null);
    setShowForm(true);
  };

  const openEdit = (task) => {
    setEditingTask(task);
    setShowForm(true);
  };

  const closeForm = () => {
    setShowForm(false);
    setEditingTask(null);
  };

  const saveTask = (data) => {
    if (editingTask) {
      setTasks(tasks.map((t) => (t.id === editingTask.id ? { ...t, ...data, id: t.id } : t)));
    } else {
      setTasks([...tasks, { ...data, id: Date.now(), category: "General" }]);
    }
    closeForm();
  };

  const confirmDelete = () => {
    setTasks(tasks.filter((t) => t.id !== deletingTask.id));
    setDeletingTask(null);
  };

  const changeStatus = (id, status) => {
    setTasks(tasks.map((t) => (t.id === id ? { ...t, status } : t)));
  };

  const total = tasks.length;
  const inProgress = tasks.filter((t) => t.status === "In progress").length;
  const completed = tasks.filter((t) => t.status === "Completed").length;
  const percent = total === 0 ? 0 : Math.round((completed / total) * 100);

  const visibleTasks = tasks.filter(
    (t) =>
      t.title.toLowerCase().includes(search.trim().toLowerCase()) &&
      (statusFilter === "All" || t.status === statusFilter) &&
      (priorityFilter === "All" || t.priority === priorityFilter)
  );

  const resetFilters = () => {
    setSearch("");
    setStatusFilter("All");
    setPriorityFilter("All");
  };

  return (
    <div className="layout">
      <Sidebar />
      <main className="main">
        <Header />
        <div className="page-title">
          <div>
            <h1>Your work, in focus.</h1>
            <p>Plan your day, stay organized, and celebrate small wins.</p>
          </div>
          <button className="btn-primary" onClick={openCreate}>New task</button>
        </div>

        <FocusNotes />

        <section className="stats" aria-label="Overview statistics">
          <StatCard icon={ListChecks} label="Total tasks" value={total} note="Across all projects" />
          <StatCard icon={Clock} label="In progress" value={inProgress} note="Keep the momentum" />
          <StatCard icon={CheckCircle2} label="Completed" value={completed} note={`${percent}% done`} />
        </section>

        <section aria-label="My tasks">
          <h2 className="section-title">My tasks</h2>
          <p className="section-sub">Manage and track everything in one place.</p>
          <div className="toolbar">
            <FilterTabs
              status={statusFilter}
              onStatusChange={setStatusFilter}
              priority={priorityFilter}
              onPriorityChange={setPriorityFilter}
              onReset={resetFilters}
            />
            <SearchBar value={search} onChange={setSearch} />
          </div>
          <TaskList
            tasks={visibleTasks}
            onEdit={openEdit}
            onDelete={setDeletingTask}
            onStatusChange={changeStatus}
          />
        </section>
      </main>

      {showForm && (
        <TaskForm
          key={editingTask ? editingTask.id : "new"}
          task={editingTask}
          onSubmit={saveTask}
          onCancel={closeForm}
        />
      )}

      {deletingTask && (
        <ConfirmDialog
          title={deletingTask.title}
          onConfirm={confirmDelete}
          onCancel={() => setDeletingTask(null)}
        />
      )}
    </div>
  );
}