import type { NextApiRequest, NextApiResponse } from "next";
import { IsProduct } from "../../../types";

export const getProducts = (id?: string | string[]) => {
  const products = <IsProduct[]>[
    {
      id: "0",
      images: [
        {
          id: "0",
          src: "https://heights-store.com/web/product/extra/big/202111/e89e41a9d4ec2e23f43c702dd34e2663.jpg",
          alt: "img1",
        },
        {
          id: "1",
          src: "https://heights-store.com/web/product/extra/big/202111/e89e41a9d4ec2e23f43c702dd34e2663.jpg",
          alt: "img1",
        },
      ],
      name: "Fxcking Cap",
      price: 63000,
      currentSize: ["os"],
      description: "",
    },
    {
      id: "1",
      images: [
        {
          id: "0",
          src: "https://heights-store.com/web/product/big/202212/7ba9b629e00051477cc932eb68e0d794.jpg",
          alt: "img1",
        },
      ],
      name: "XT-6 GTX Utility - Black/Ebony/Marmalade",
      price: 280000,
      currentSize: ["285", "290"],
      description: "",
    },
    {
      id: "2",
      images: [
        {
          id: "0",
          src: "https://heights-store.com/web/product/big/202212/a251d6c898383f52eae17e405e905b6e.jpg",
          alt: "img1",
        },
      ],
      name: "Splat Cuff Beanie - Black/Purple",
      price: 36400,
      currentSize: ["os"],
      description: "",
    },
    {
      id: "3",
      images: [
        {
          id: "0",
          src: "https://heights-store.com/web/product/big/202212/a73555f1becbb084febc263c08a192a9.jpg",
          alt: "img1",
        },
      ],
      name: "Odd Bear Keyring - Pink",
      price: 56000,
      currentSize: ["os"],
      description: "",
    },
  ];
  if (id) {
    return products.filter((product) => product.id === id);
  }
  return products;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<IsProduct[]>
) {
  const { method } = req;
  // GET, POST, PUT, PATCH 등 요청에 맞는 작업 실행
  if (method === "GET") {
    const result = getProducts();
    return res.status(200).json(result);
  }
}
