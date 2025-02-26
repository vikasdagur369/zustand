import { create } from "zustand";

export const useCount = create((set) => ({
  count: 0,
  incCount: () => {
    set((state) => ({ ...state, count: state.count + 1 }));
  },
}));
