// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

interface ResponseBody {
  name: string;
}

export default (req: NextApiRequest, res: NextApiResponse<ResponseBody>) => {
  res.statusCode = 200;
  res.json({ name: 'John Doe' });
};
