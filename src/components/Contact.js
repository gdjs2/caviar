export default function Contact({ text, contacts }) {
  return (
    <div className="card">
      <p>{text}</p>
      <ul>
        {contacts.map((c, idx) => (
          <li key={idx}>
            {c.type}: <a href={`tel:${c.phoneNumber}`}>{c.phoneNumber}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}
