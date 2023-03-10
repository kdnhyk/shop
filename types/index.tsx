export type IsSize = "os" | "s" | "m" | "l" | "xl" | "285" | "290";

export interface IsProduct {
  id: string;
  images: { id: string; src: string; alt: string }[];
  name: string;
  price: number;
  currentSize: IsSize[];
  description: string;
}

export interface IsProductInCart extends IsProduct {
  quantity: number;
}
