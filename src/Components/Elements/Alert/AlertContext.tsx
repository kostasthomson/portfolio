import {
  createContext,
  useContext,
  useState,
  ReactNode,
  useRef,
  useEffect,
} from 'react';
import { AlertTypes } from '../../../Types';

const initialAlertState: AlertTypes.AlertState = {
  isOpen: false,
  message: '',
  type: 'info',
  duration: 3000,
};

const AlertContext = createContext<AlertTypes.AlertContextType | undefined>(
  undefined
);

export const AlertProvider = ({ children }: { children: ReactNode }) => {
  const [alert, setAlert] = useState<AlertTypes.AlertState>(initialAlertState);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  useEffect(() => {
    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, []);

  const showAlert = (
    message: string,
    type: AlertTypes.AlertType,
    duration = 3000
  ) => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }
    setAlert({ isOpen: true, message, type, duration });
    if (duration > 0) {
      timerRef.current = setTimeout(() => {
        hideAlert();
        timerRef.current = null;
      }, duration);
    }
  };

  const hideAlert = () => {
    setAlert((prev) => ({ ...prev, isOpen: false }));
  };

  return (
    <AlertContext.Provider value={{ alert, showAlert, hideAlert }}>
      {children}
    </AlertContext.Provider>
  );
};

export const useAlert = (): AlertTypes.AlertContextType => {
  const context = useContext(AlertContext);
  if (context === undefined) {
    throw new Error('useAlert must be used within an AlertProvider');
  }
  return context;
};
