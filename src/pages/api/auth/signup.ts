import type { NextApiRequest, NextApiResponse } from 'next';
import bcrypt from 'bcryptjs';

// This would be replaced with a database call
const mockUsers = [
  {
    id: '1',
    name: 'Test User',
    email: 'test@example.com',
    password: '$2a$10$CwTycUXWue0Thq9StjUM0uQxTmrjFPTLK0Mjs1TmhGpvqHa.WV3A.',
  },
];

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const { name, email, password } = req.body;

    // Check if user already exists
    const existingUser = mockUsers.find((u) => u.email === email);
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }

    // Hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create new user (in a real app, this would save to a database)
    const newUser = {
      id: (mockUsers.length + 1).toString(),
      name,
      email,
      password: hashedPassword,
    };

    // In a real app, you would save the user to the database here
    // For this mock, we'll just return success

    return res.status(201).json({
      message: 'User created successfully',
      user: {
        id: newUser.id,
        name: newUser.name,
        email: newUser.email,
      },
    });
  } catch (error) {
    console.error('Signup error:', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
}