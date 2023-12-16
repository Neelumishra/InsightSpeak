import { create } from "zustand";

interface useStore {
  name: string;
  setName: (a:string) => void;
  
}

export const useProModal = create<useStore>((set) => ({
  name: "",
  setName: (name:string) => set(() => ({ name: name })),
}));
