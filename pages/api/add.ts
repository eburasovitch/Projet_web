import { NextApiRequest, NextApiResponse } from 'next';
import prismadb from '@/libs/prismadb';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    if (req.method !== 'POST') {
      return res.status(405).end();
    }

    const { title, description, videoUrl, thumbnailUrl, genre, duration } = req.body;

    // Vous pouvez effectuer des validations supplémentaires ici si nécessaire

    const movie = await prismadb.movie.create({
      data: {
        title,
        description,
        videoUrl,
        thumbnailUrl,
        genre,
        duration,
      },
    });

    return res.status(200).json(movie);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
}
