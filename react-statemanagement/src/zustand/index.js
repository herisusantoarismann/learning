import create from "zustand";

export const useBearStore = create((set) => ({
  counter: 0,
  name: "",
  getName: (payload) => set((state) => ({ name: payload })),
  increment: () => set((state) => ({ counter: state.counter + 1 })),
  decrement: () => set((state) => ({ counter: state.counter - 1 })),
}));
