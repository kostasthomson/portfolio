function FormModalButton({
  label,
  type,
  className,
}: {
  label: string;
  type?: 'submit' | 'reset' | 'button';
  className?: string;
}) {
  return (
    <button
      className={`rounded-xl text-lg w-28 h-10 transition-colors duration-100 ease-in ${
        className ? className : ''
      }`}
      type={type}
    >
      {label.toUpperCase()}
    </button>
  );
}

export default FormModalButton;
