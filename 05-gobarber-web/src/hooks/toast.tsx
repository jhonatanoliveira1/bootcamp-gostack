import React, { createContext, useCallback, useContext } from 'react';

import ToastContainer from '../components/ToastContainer';

interface ToastContexData {
  addToast(): void;
  removeToast(): void;
}

const ToastContext = createContext<ToastContexData>({} as ToastContexData);

const ToastProvider: React.FC = ({ children }) => {
  const addToast = useCallback(() => {
    console.log('addToast'); //eslint-disable-line
  }, []);
  const removeToast = useCallback(() => {
    console.log('removeToast') //eslint-disable-line
  }, []);

  return (
    <ToastContext.Provider value={{ addToast, removeToast }}>
      {children}
      <ToastContainer />
    </ToastContext.Provider>
  );
}

function useToast(): ToastContexData {
  const context = useContext(ToastContext);

  if (!context) {
    throw new Error('useToast must be used within a ToastProvider')
  }

  return context;
}

export { ToastProvider, useToast };
