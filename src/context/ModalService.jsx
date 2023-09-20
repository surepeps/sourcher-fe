import React, { useContext, useState } from 'react';

const ModalContext = React.createContext();

export const ModalService = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [content, setContent] = useState(null);
  const [modalOptions, setModalOptions] = useState({});

  const openModal = (content, options = {}) => {
    setContent(content);
    setModalOptions(options);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setContent(null);
    setModalOptions({});
  };

  return (
    <ModalContext.Provider value={{ isOpen, content, openModal, closeModal, modalOptions }}>
      {children}
    </ModalContext.Provider>
  );
};

export const useModal = () => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error('useModal must be used within a ModalService provider');
  }
  return context;
};
