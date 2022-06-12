// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { getRows } from 'db/main';
import type { NextApiRequest, NextApiResponse } from 'next';

// get pages
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  switch (req.method) {
    case 'GET': {
      const { column, filter, value } = req.query;
      const ans = await getRows(column as string, filter as string, value as string);
      if (ans) {
        return res.status(200).json(Math.ceil(ans / 10));
      }
      return res.status(200).json(0);
    }
    default:
  }
  return res.status(400).end();
}
