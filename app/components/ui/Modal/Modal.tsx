import React from 'react'

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export default function Modal() {
  return (
    <div>
        <h3>Modal</h3>
      <button
      //={onclose}
      >Klicka</button>
    </div>
  )
}
