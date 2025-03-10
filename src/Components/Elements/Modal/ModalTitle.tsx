function ModalTitle({
  className,
  title,
  description,
}: {
  className?: string;
  title: string;
  description?: string;
}) {
  return (
    <div
      className={`absolute top-6 text-accent text-center ${className ? className : ''}`}
    >
      <h2 className="text-2xl font-semibold mb-2">{title}</h2>
      <p className="text-sm italic">{description ? description : ''}</p>
    </div>
  );
}

export default ModalTitle;
