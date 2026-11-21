export default function ConfirmDialog({ title, onConfirm, onCancel }) {
  return (
    <div className="modal-backdrop">
      <div className="modal" role="alertdialog" aria-modal="true" aria-labelledby="confirm-title">
        <h2 id="confirm-title">Delete task?</h2>
        <p className="section-sub">"{title}" will be removed permanently.</p>
        <div className="form-actions">
          <button className="btn-secondary" onClick={onCancel} autoFocus>Cancel</button>
          <button className="btn-danger" onClick={onConfirm}>Delete</button>
        </div>
      </div>
    </div>
  );
}
