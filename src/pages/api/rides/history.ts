import type { NextApiRequest, NextApiResponse } from 'next';

// Mock ride history data
const mockRideHistory = [
  {
    id: 'BOOK-1701234567890',
    provider: 'Uber',
    type: 'UberX',
    origin: 'Cyber City, Gurugram',
    destination: 'Connaught Place, Delhi',
    price: 350,
    currency: 'INR',
    date: '2025-01-15T10:30:00Z',
    status: 'completed',
  },
  {
    id: 'BOOK-1701234567891',
    provider: 'Ola',
    type: 'Mini',
    origin: 'Sector 29, Gurugram',
    destination: 'IGI Airport, Delhi',
    price: 450,
    currency: 'INR',
    date: '2025-01-12T14:15:00Z',
    status: 'completed',
  },
  {
    id: 'BOOK-1701234567892',
    provider: 'Rapido',
    type: 'Bike',
    origin: 'Sector 14, Gurugram',
    destination: 'Huda City Centre, Gurugram',
    price: 80,
    currency: 'INR',
    date: '2025-01-10T09:45:00Z',
    status: 'completed',
  },
  {
    id: 'BOOK-1701234567893',
    provider: 'Uber',
    type: 'Premier',
    origin: 'DLF Cyber Hub, Gurugram',
    destination: 'Saket, Delhi',
    price: 420,
    currency: 'INR',
    date: '2025-01-05T18:30:00Z',
    status: 'completed',
  },
  {
    id: 'BOOK-1701234567894',
    provider: 'Ola',
    type: 'Prime',
    origin: 'MG Road, Gurugram',
    destination: 'Noida Sector 18',
    price: 520,
    currency: 'INR',
    date: '2025-01-01T12:00:00Z',
    status: 'completed',
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
    // In a real app, you would fetch ride history from a database
    // For this mock, we'll just return the mock data

    return res.status(200).json(mockRideHistory);
  } catch (error) {
    console.error('Ride history error:', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
}