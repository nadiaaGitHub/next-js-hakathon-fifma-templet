import { NextApiRequest, NextApiResponse } from 'next';
import { client } from '@/sanity/lib/client'; // Update this path if necessary

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;

  console.log('Product ID from query:', id); // Log the ID

  if (req.method === 'GET') {
    try {
      // Fetch product from Sanity
      const product = await client.fetch(
        `*[_type == 'product' && _id == $id][0]`,
        { id }
      );

      console.log('Fetched product:', product); // Log the fetched product

      if (!product) {
        return res.status(404).json({ message: 'Product not found' });
      }

      res.status(200).json(product);
    } catch (error) {
      console.error('Error fetching product:', error); // Log any errors
      res.status(500).json({ message: 'Failed to fetch product details', error });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
