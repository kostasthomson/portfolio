import { useEffect, useState } from 'react';
import { useAlert } from './AlertContext';

const Alert = () => {
  const { alert, hideAlert } = useAlert();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (alert.isOpen) {
      setIsVisible(true);
    } else {
      const timer = setTimeout(() => {
        setIsVisible(false);
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [alert.isOpen]);

  if (!isVisible && !alert.isOpen) return null;

  const getAlertStyles = () => {
    switch (alert.type) {
      case 'success':
        return {
          background: 'bg-gradient-to-r from-emerald-500 to-green-500',
          icon: (
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          ),
        };
      case 'error':
        return {
          background: 'bg-gradient-to-r from-red-500 to-pink-500',
          icon: (
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          ),
        };
      case 'warning':
        return {
          background: 'bg-gradient-to-r from-amber-500 to-yellow-500',
          icon: (
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
              />
            </svg>
          ),
        };
      case 'info':
      default:
        return {
          background: 'bg-gradient-to-r from-blue-500 to-indigo-500',
          icon: (
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          ),
        };
    }
  };

  const { background, icon } = getAlertStyles();

  return (
    <div className="fixed top-0 left-1/2 w-96 transform -translate-x-1/2 flex items-center justify-center z-50 pointer-events-none">
      <div
        className={`
          w-full mx-4 transition-all duration-300 transform
          ${alert.isOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}
        `}
      >
        <div
          className={`rounded-lg shadow-xl overflow-hidden pointer-events-auto`}
        >
          <div className={`${background} p-4 text-white`}>
            <div className="flex items-start">
              <div className="flex-shrink-0">{icon}</div>
              <div className="ml-3 w-0 flex-1">
                <p className={`text-sm`}>{alert.message}</p>
              </div>
              <div className="ml-4 flex-shrink-0 flex">
                <button
                  onClick={hideAlert}
                  className="inline-flex text-white focus:outline-none focus:ring-2 focus:ring-white"
                >
                  <span className="sr-only">Close</span>
                  <svg
                    className="h-5 w-5"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <div className="h-1 w-full bg-gray-200">
            <div
              className={`h-full ${background} transition-all ease-linear duration-100`}
              style={{
                width: alert.isOpen ? '100%' : '0%',
                transitionDuration: `${alert.duration}ms`,
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Alert;
