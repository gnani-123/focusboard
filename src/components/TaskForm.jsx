import { useState } from "react";

const empty = { title: "", description: "", status: "To do", priority: "Medium", dueDate: "" };

export default function TaskForm({ task, onSubmit, onCancel }) {
  const [form, setForm] = useState(task ? { ...task } : empty);
  const [errors, setErrors] = useState({});

  const change = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const submit = (e) => {
    e.preventDefault();
    const errs = {};
    if (!form.title.trim()) errs.title = "Title is required.";
    if (!form.dueDate) errs.dueDate = "Due date is required.";
    setErrors(errs);
    if (Object.keys(errs).length > 0) return;
    onSubmit({ ...form, title: form.title.trim() });
  };

  return (
    <div className="modal-backdrop">
      <form className="modal" onSubmit={submit} role="dialog" aria-modal="true" aria-labelledby="form-title" noValidate>
        <h2 id="form-title">{task ? "Edit task" : "Create new task"}</h2>
        <p className="section-sub">
          {task ? "Update the details of this task." : "Add your task details to stay on top of your work."}
        </p>

        <label htmlFor="title">Task title *</label>
        <input id="title" name="title" value={form.title} onChange={change} placeholder="e.g. Update pricing page" autoFocus />
        {errors.title && <span className="error" role="alert">{errors.title}</span>}

        <label htmlFor="description">Description</label>
        <textarea id="description" name="description" rows="3" value={form.description} onChange={change} placeholder="Add notes about this task..." />

        <div className="row">
          <div>
            <label htmlFor="status">Status</label>
            <select id="status" name="status" value={form.status} onChange={change}>
              <option>To do</option>
              <option>In progress</option>
              <option>Completed</option>
            </select>
          </div>
          <div>
            <label htmlFor="priority">Priority</label>
            <select id="priority-form" name="priority" value={form.priority} onChange={change}>
              <option>Low</option>
              <option>Medium</option>
              <option>High</option>
            </select>
          </div>
        </div>

        <label htmlFor="dueDate">Due date *</label>
        <input id="dueDate" name="dueDate" type="date" value={form.dueDate} onChange={change} />
        {errors.dueDate && <span className="error" role="alert">{errors.dueDate}</span>}

        <div className="form-actions">
          <button type="button" className="btn-secondary" onClick={onCancel}>Cancel</button>
          <button type="submit" className="btn-primary">{task ? "Save changes" : "Create task"}</button>
        </div>
      </form>
    </div>
  );
}