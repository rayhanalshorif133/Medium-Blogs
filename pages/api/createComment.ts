// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import sanityClient from '@sanity/client';
import type { NextApiRequest, NextApiResponse } from 'next';

const config = {
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    apiVersion: '2021-10-21',
    useCdn: process.env.NODE_ENV === 'production',
    token: process.env.SANITY_API_TOKEN,
}

const client = sanityClient(config);



export default async function createComment(
  req: NextApiRequest,
  res: NextApiResponse
) {




  const { _id, name, email, comment } = req.body;

  console.log('Creating comment', name, email);
  

  try {
    await client.create({
      _type: 'comment',
      post: {
        _type: 'reference',
        _ref: _id,
      },
      name,
      email,
      comment,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: `Couldn't submit comment`, error });
  }

  console.log('Comment submitted');
  res.status(200).json({ message: 'Comment submitted' });

}
