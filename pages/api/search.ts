// pages/api/search.ts

import { NextApiRequest, NextApiResponse } from 'next';
import prismadb from '@/libs/prismadb';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { title } = req.query;

    if (!title) {
      return res.status(400).json({ error: 'Title parameter is required' });
    }

    const searchResults = await prismadb.movie.findMany({
      where: {
        title: {
          contains: title.toString(),  // Recherche partielle par titre
          mode: 'insensitive',  // Ignorer la casse
        },
      },
    });

    return res.status(200).json(searchResults);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
}
