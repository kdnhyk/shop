import { atom, selector } from "recoil";
import { IsProductInCart } from "../type";
import { AtomEffect } from "recoil";
import { useEffect } from "react";

// export const localStorageEffect: (key: string) => AtomEffect<any> =
//   (key) =>
//   ({ setSelf, onSet }) => {
//     if (typeof window === "undefined") return;
//     useEffect(() => {
//       const savedValue = localStorage.getItem(key);
//       if (savedValue != null) {
//         setSelf(JSON.parse(savedValue));
//       }

//       onSet((newValue, _, isReset) => {
//         isReset
//           ? localStorage.removeItem(key)
//           : localStorage.setItem(key, JSON.stringify(newValue));
//       });
//     }, [onSet, setSelf]);
//   };
const localStorageEffect =
  (key: string) =>
  ({ setSelf, onSet }: any) => {
    if (typeof window === "undefined") return;
    const savedValue = localStorage.getItem(key);
    if (savedValue !== null) {
      setSelf(JSON.parse(savedValue));
    }
    onSet((newValue: any, _: any, isReset: boolean) => {
      isReset
        ? localStorage.removeItem(key)
        : localStorage.setItem(key, JSON.stringify(newValue));
    });
  };
// const sessionStorageEffect =
//   (key: string) =>
//   ({ setSelf, onSet }: any) => {
//     const savedValue = sessionStorage.getItem(key);
//     if (savedValue !== null) {
//       setSelf(JSON.parse(savedValue));
//     }
//     onSet((newValue: any, _: any, isReset: any) => {
//       const confirm = newValue.length === 0;
//       confirm
//         ? sessionStorage.removeItem(key)
//         : sessionStorage.setItem(key, JSON.stringify(newValue));
//     });
//   };

export const cartState = atom<IsProductInCart[]>({
  key: "cart",
  default: [] as IsProductInCart[],
  effects: [localStorageEffect("cart")],
});

export const cartSelector = selector<IsProductInCart[]>({
  key: "selectAuth",
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
