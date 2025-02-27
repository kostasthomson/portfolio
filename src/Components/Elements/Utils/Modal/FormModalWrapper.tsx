import { FormEvent, ReactNode } from 'react';
import ModalWrapper from './ModalWrapper';
import FormModalButton from './FormModalButton';

function FormModalWrapper({
  children,
  onSubmit,
  onReset,
  className,
}: {
  children: ReactNode;
  onSubmit: (e: FormEvent) => void;
  onReset: (e: FormEvent) => void;
  className?: string;
}) {
  return (
    <ModalWrapper>
      <form
        onSubmit={onSubmit}
        onReset={onReset}
        className={`relative z-30 mx-4 w-[28rem] h-[30rem] flex flex-col justify-end items-center p-6 shadow-lg rounded-xl ${className ? className : ''}`}
      >
        {children}
        <div className="w-full flex justify-evenly mt-20 mb-1">
          <FormModalButton
            className="text-highlight bg-primary hover:text-primary hover:bg-highlight"
            label="cancel"
            type="reset"
          />
          <FormModalButton
            className="text-accent bg-darkAccent hover:text-darkAccent hover:bg-highlight"
            label="submit"
            type="submit"
          />
        </div>
      </form>
    </ModalWrapper>
  );
}

export default FormModalWrapper;
