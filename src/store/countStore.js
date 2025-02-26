import { create } from "zustand";

export const useCount = create((set) => ({
  count: 0,
  incCount: (num) => {
    set((state) => ({ ...state, count: state.count + num }));
  },

  decCount: (num) => {
    set((state) => ({ ...state, count: state.count - num }));
  },
}));
