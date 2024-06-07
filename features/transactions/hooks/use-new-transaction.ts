import { create } from "zustand";

type NewTransactionState = {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
};

// To manage the State Of New Account Sheet
export const useNewTransaction = create<NewTransactionState>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));
