// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  id: number;
  name: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data[]>
) {
  res.status(200).json([{ id: 0, name: "John Doe" }]);

  const { method } = req;
  // GET, POST, PUT, PATCH 등 요청에 맞는 작업 실행
  if (method === "GET") {
    const photos = [{ id: 0, name: "title" }];
    return res.status(200).json(photos);
  }
}
