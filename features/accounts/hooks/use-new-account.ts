import { create } from "zustand";

type NewAccountState = {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
};

// To manage the State Of New Account Sheet
export const useNewAccount = create<NewAccountState>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));
