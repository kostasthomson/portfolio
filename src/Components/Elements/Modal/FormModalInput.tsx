function FormModalInput({
  label,
  type,
  ref,
  value,
  onChange,
  placeholder,
  className,
}: {
  label: string;
  type: string;
  ref: React.Ref<HTMLInputElement>;
  value?: string | number | readonly string[];
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  placeholder?: string;
  className?: string;
}) {
  return (
    <div className="w-full flex flex-col justify-center items-center">
      <label className="text-lg text-highlight" htmlFor={label}>
        {label.toUpperCase()}
      </label>
      <input
        ref={ref}
        className={`w-10/12 h-7 outline-none px-2 py-4 rounded-2xl text-center ${className ? className : ''}`}
        type={type}
        id={label}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    </div>
  );
}

export default FormModalInput;
