import type { NextApiRequest, NextApiResponse } from "next";
import { IsProduct } from "../../../../type";
import { getProducts } from "..";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<IsProduct[]>
) {
  const {
    method,
    query: { id },
  } = req;
  // GET, POST, PUT, PATCH 등 요청에 맞는 작업 실행
  if (method === "GET") {
    const result = getProducts(id);
    return res.status(200).json(result);
  }
}
