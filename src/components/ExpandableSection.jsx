import { useState } from "react";

export default function ExpandableSection({ title, image, summary, body }) {
  const [open, setOpen] = useState(false);

  return (
    <article className="expandable">
      <button
        className="expandable-header"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        <div className="expandable-header-text">
          <h3 className="expandable-title">{title}</h3>
          <p className="expandable-summary">{summary}</p>
        </div>
        <span className="expandable-toggle">{open ? "\u2212" : "+"}</span>
      </button>
      {open && (
        <div className="expandable-body">
          {image && (
            <img src={image} alt={title} className="expandable-image" />
          )}
          <p>{body}</p>
        </div>
      )}
    </article>
  );
}
