// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { getPage } from 'db/main';
import type { NextApiRequest, NextApiResponse } from 'next';

// get db slice per page
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  switch (req.method) {
    case 'GET': {
      const {
        page, column, filter, value,
      } = req.query;
      const ans = await getPage(
        page as string,
        column as string,
        filter as string,
        value as string,
      );
      if (ans) {
        return res.status(200).json(ans);
      }
      return res.status(200).json([]);
    }
    default:
  }
  return res.status(400).end();
}
