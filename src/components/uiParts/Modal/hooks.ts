import { useState } from 'react';

const useModal = () => {
  const [isOpen, setIsOpen] = useState(false); // モーダルの開閉状態

  const openModal = () => setIsOpen(true); // モーダルを開く
  const closeModal = () => setIsOpen(false); // モーダルを閉じる

  return { isOpen, openModal, closeModal };
};

export default useModal;
