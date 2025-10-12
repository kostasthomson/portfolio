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
      className={`${className ? className : ''}
        h-[92.5%] w-12
        absolute z-10 flex items-center
        transition-all duration-100 ease-in
        hover:text-darkAccent from-highlight/80 to-transparent`}
      onClick={handler}
    >
      {children}
    </button>
  );
}

export default ArrowButton;
