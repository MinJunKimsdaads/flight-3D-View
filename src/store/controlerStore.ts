import { create } from "zustand";

interface ControlerState {
    control: string|null;
    setControl: (control:string|null) => void
}

export const useControlerStore = create<ControlerState>((set)=>({
    control:null,
    setControl: (control) => set({control: control}),
}));