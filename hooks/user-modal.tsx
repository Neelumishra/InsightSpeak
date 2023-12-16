import { create } from "zustand";

interface useStore {
  name: string;
  setName: (a:string) => void;
  
}
interface useFilter {
  filterName: string;
  setFilterName: (a: string) => void;
}

export const useProModal = create<useStore>((set) => ({
  name: "",
  setName: (name:string) => set(() => ({ name: name })),
}));

export const usefilter = create<useFilter>((set) => ({
  filterName: "",
  setFilterName: (argu: string) => set(() => ({ filterName: argu })),
}));