import { create } from "zustand";

interface AlertState {
  isShow: boolean;
  title: string|null;
  contents: string|null;  
};
interface GlobalState {
    isLoading: boolean;
    isAlert: AlertState;
    setIsLoading: (isLoading:boolean)=>void;
    setAlert: (alert:Partial<AlertState>)=>void;
    resetAlert: ()=>void;
}

export const useGlobalStore = create<GlobalState>((set)=>({
    isLoading: false,
    isAlert: {
        isShow: false,
        title:null,
        contents:null,
    },
    setIsLoading: (isLoading) => set({isLoading: isLoading}),
    setAlert: (alert) => set((state)=>({
        isAlert: {
            ...state.isAlert,
            ...alert,
        },
    })),
    resetAlert: ()=>set({
        isAlert: {
            isShow: false,
            title: null,
            contents: null,
        }
    })
}));