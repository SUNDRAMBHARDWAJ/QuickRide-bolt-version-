import type { NextApiRequest, NextApiResponse } from 'next';

// Mock ride data
const mockRideOptions = [
  {
    id: '1',
    provider: 'Uber',
    type: 'UberX',
    price: 250,
    currency: 'INR',
    estimatedTime: 15,
    distance: 5.2,
    availableSeats: 4,
    logo: 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?q=80&w=100&auto=format&fit=crop'
  },
  {
    id: '2',
    provider: 'Ola',
    type: 'Mini',
    price: 230,
    currency: 'INR',
    estimatedTime: 18,
    distance: 5.2,
    availableSeats: 4,
    logo: 'https://images.unsplash.com/photo-1560472355-536de3962603?q=80&w=100&auto=format&fit=crop'
  },
  {
    id: '3',
    provider: 'Rapido',
    type: 'Bike',
    price: 120,
    currency: 'INR',
    estimatedTime: 12,
    distance: 5.2,
    availableSeats: 1,
    logo: 'https://images.unsplash.com/photo-1558981403-c5f9899a28bc?q=80&w=100&auto=format&fit=crop'
  },
  {
    id: '4',
    provider: 'Uber',
    type: 'Premier',
    price: 350,
    currency: 'INR',
    estimatedTime: 15,
    distance: 5.2,
    availableSeats: 4,
    logo: 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?q=80&w=100&auto=format&fit=crop'
  },
  {
    id: '5',
    provider: 'Ola',
    type: 'Prime',
    price: 320,
    currency: 'INR',
    estimatedTime: 16,
    distance: 5.2,
    availableSeats: 4,
    logo: 'https://images.unsplash.com/photo-1560472355-536de3962603?q=80&w=100&auto=format&fit=crop'
  }
];

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const { origin, destination } = req.query;

    if (!origin || !destination) {
      return res.status(400).json({ message: 'Origin and destination are required' });
    }

    // In a real app, you would fetch ride options from various APIs here
    // For this mock, we'll just return the mock data

    // Simulate some randomness in the results
    const randomizedOptions = mockRideOptions.map(option => ({
      ...option,
      price: Math.floor(option.price * (0.9 + Math.random() * 0.2)), // +/- 10%
      estimatedTime: Math.floor(option.estimatedTime * (0.9 + Math.random() * 0.2)), // +/- 10%
    }));

    return res.status(200).json(randomizedOptions);
  } catch (error) {
    console.error('Search rides error:', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
}