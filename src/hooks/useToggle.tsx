import { useState, useCallback } from 'react';

type UseToggleType = {
  isOpen: boolean;
  toggle: () => void;
};

export const useToggle = (initialState = false): UseToggleType => {
  const [isOpen, setIsOpen] = useState(initialState);

  const toggle = useCallback(() => setIsOpen((isOpen) => !isOpen), [isOpen]);

  return { isOpen, toggle };
};
