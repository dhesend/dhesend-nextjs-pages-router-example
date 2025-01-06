import type { NextApiRequest, NextApiResponse } from 'next';
import Dhesend from 'resend';

const dhesend = new Dhesend(process.env.DHESEND_API_KEY);

export default async function handler(request: NextApiRequest, res: NextApiResponse) {
  if (request.method === 'POST') {
    try {
      const { from, to, subject, htmlBody } = request.body;

      if (!from || typeof from !== 'string') {
        return res.status(400).json({ error: 'Invalid or missing "from" field.' });
      };

      if (!Array.isArray(to) || to.length === 0 || !to.every(email => typeof email === 'string')) {
        return res.status(400).json({ error: 'Invalid or missing "to" field. Must be an array of email addresses.' });
      };

      if (!subject || typeof subject !== 'string') {
        return res.status(400).json({ error: 'Invalid or missing "subject" field.' });
      };

      if (!htmlBody || typeof htmlBody !== 'string') {
        return res.status(400).json({ error: 'Invalid or missing "htmlBody" field.' });
      };

      const { data, error } = await dhesend.email.send({ from, to, subject, htmlBody });

      if (error) {
        return res.status(500).json({ error: String(error) });
      };

      return res.status(200).json({ data }, { status: 200 });

    } catch (err) {
      return res.status(500).json(err);
    };
  } else {
    return res.status(400).json({ "error": "Method not allowed" });
  };
};
