import { ReactNode } from 'react';

function ModalWrapper({ children }: { children: ReactNode }) {
  return (
    <div className="fixed z-20 inset-0 flex justify-center items-center rounded-lg bg-black bg-opacity-50">
      {children}
    </div>
  );
}

export default ModalWrapper;
