import { atom, selector } from "recoil";
import { IsProductInCart } from "../types";

// const localStorageEffect =
//   (key: string) =>
//   ({ setSelf, onSet }: any) => {
//     if (typeof window === "undefined") return;
//     const savedValue = localStorage.getItem(key);
//     if (savedValue !== null) {
//       setSelf(JSON.parse(savedValue));
//     }
//     onSet((newValue: any, _: any, isReset: boolean) => {
//       isReset
//         ? localStorage.removeItem(key)
//         : localStorage.setItem(key, JSON.stringify(newValue));
//     });
//   };

export const cartState = atom<IsProductInCart[]>({
  key: "cart",
  default: [] as IsProductInCart[],
  // effects: [localStorageEffect("cart")],
});

export const cartSelector = selector<IsProductInCart[]>({
  key: "cartSelector",
  get: ({ get }) => {
    const originalState = get(cartState);
    console.log(originalState);
    return originalState;
  },
  set: ({ set }, newValue) => {
    console.log(newValue);
    set(cartState, newValue);
  },
});
