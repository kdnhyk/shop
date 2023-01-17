import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<IsProduct[]>
) {
  const { method } = req;
  // GET, POST, PUT, PATCH 등 요청에 맞는 작업 실행
  if (method === "POST") {
    const result = getProducts();
    return res.status(200).json(result);
  }
}
