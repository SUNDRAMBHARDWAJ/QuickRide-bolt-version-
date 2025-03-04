import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const { rideId, provider, origin, destination } = req.body;

    if (!rideId || !provider || !origin || !destination) {
      return res.status(400).json({ message: 'Missing required fields' });
    }

    // In a real app, you would make API calls to the respective ride-hailing service
    // For this mock, we'll just return a success response

    return res.status(200).json({
      bookingId: `BOOK-${Date.now()}`,
      status: 'confirmed',
      provider,
      rideId,
      origin,
      destination,
      estimatedPickup: new Date(Date.now() + 5 * 60 * 1000).toISOString(), // 5 minutes from now
      driverName: 'John Doe',
      driverRating: 4.8,
      vehicleDetails: 'White Toyota Corolla',
      vehicleNumber: 'DL 01 AB 1234',
    });
  } catch (error) {
    console.error('Book ride error:', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
}