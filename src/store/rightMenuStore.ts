import { create } from "zustand";

interface rightMenuState {
    theme: string | null;
    language: string;
    menu: boolean;
    isSearch: boolean;
    setTheme: (feature:string | null) => void;
    setLanguage: (language:string)=>void;
    setMenu: (menu:boolean)=>void;
    setSearch: ()=>void;
}

export const useRightMenuStore = create<rightMenuState>((set)=>({
    theme: null,
    language: 'EN',
    isSearch:false,
    menu:false,
    setTheme: (theme) => set({theme: theme}),
    setMenu: (menu) => set({menu: menu}),
    setSearch: () => set((state) =>({isSearch: !state.isSearch})),
    setLanguage: (language) => set({language: language})
}));