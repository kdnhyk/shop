export type IsSize = "os" | "s" | "m" | "l" | "xl" | "285" | "290";

export interface IsProduct {
  id: string;
  src: string;
  name: string;
  price: number;
  currentSize: IsSize[];
}

export interface IsProductInCart extends IsProduct {
  quantity: number;
}
