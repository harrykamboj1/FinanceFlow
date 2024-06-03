import { create } from "zustand";

type OpenAccountStata = {
  id?: string;
  isOpen: boolean;
  onOpen: (id: string) => void;
  onClose: () => void;
};

// To manage the State Of New Account Sheet
export const useOpenAccount = create<OpenAccountStata>((set) => ({
  id: undefined,
  isOpen: false,
  onOpen: (id: string) => set({ isOpen: true, id }),
  onClose: () => set({ isOpen: false, id: undefined }),
}));
