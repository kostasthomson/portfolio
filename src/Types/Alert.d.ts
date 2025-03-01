export type AlertType = 'success' | 'error' | 'warning' | 'info';

export interface AlertState {
  isOpen: boolean;
  message: string;
  type: AlertType;
  duration: number;
}

export interface AlertContextType {
  alert: AlertState;
  showAlert: (message: string, type: AlertType, duration?: number) => void;
  hideAlert: () => void;
}
