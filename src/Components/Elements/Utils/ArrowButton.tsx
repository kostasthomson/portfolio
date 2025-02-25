import { ReactNode } from 'react';

function ArrowButton({
  className,
  handler,
  children,
}: {
  className?: string;
  handler: () => void;
  children: ReactNode;
}) {
  return (
    <button
      className={`${className ? className : ''} h-full absolute z-10 rounded-full transition-all duration-100 ease-in hover:text-darkAccent hover:bg-highlight`}
      onClick={handler}
    >
      {children}
    </button>
  );
}

export default ArrowButton;
