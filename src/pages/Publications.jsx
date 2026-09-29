import publications from "../data/publications.json";

function PubEntry({ pub }) {
  return (
    <div className="pub-entry">
      <p className="pub-title">{pub.title}</p>
      <p className="pub-authors">{pub.authors}</p>
      <p className="pub-venue">
        {pub.venue}
        {pub.doi && <> &middot; doi: {pub.doi}</>}
      </p>
    </div>
  );
}

function PubSection({ heading, items }) {
  return (
    <section className="pub-section">
      <h2 className="pub-section-heading">{heading}</h2>
      {items.length === 0 ? (
        <p className="pub-empty">No entries yet.</p>
      ) : (
        items.map((pub) => <PubEntry key={pub.id} pub={pub} />)
      )}
    </section>
  );
}

export default function Publications() {
  return (
    <div className="page">
      <h1 className="page-title">Publications</h1>
      <PubSection heading="Journals" items={publications.journals} />
      <PubSection heading="Conferences" items={publications.conferences} />
      <PubSection heading="Books" items={publications.books} />
    </div>
  );
}
