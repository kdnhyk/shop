export type IsSize = "os" | "s" | "m" | "l" | "xl" | "285" | "290";

export interface IsProduct {
  id: number;
  src: string;
  name: string;
  price: number;
  currentSize: IsSize[];
}
