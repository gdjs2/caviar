export default function GalleryLink({ text, link }) {
  return (
    <div className="gallery-link">
      <a href={link}>{text}</a>
    </div>
  );
}
