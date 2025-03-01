import { FormEvent, ReactNode } from 'react';

function ModalWrapper({
  children,
  onClose,
}: {
  children: ReactNode;
  onClose: () => void;
}) {
  return (
    <div
      onClick={onClose}
      className="fixed z-20 inset-0 flex justify-center items-center rounded-lg bg-black bg-opacity-50 animate-fadeIn"
    >
      {children}
    </div>
  );
}

export default ModalWrapper;
