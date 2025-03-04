import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '@/store/store';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';

interface RideHistory {
  id: string;
  provider: string;
  type: string;
  origin: string;
  destination: string;
  price: number;
  currency: string;
  date: string;
  status: string;
}

export default function History() {
  const { isAuthenticated, user } = useSelector((state: RootState) => state.auth);
  const [isLoading, setIsLoading] = useState(false);
  const [rideHistory, setRideHistory] = useState<RideHistory[]>([]);

  useEffect(() => {
    // Check if user is authenticated
    if (!isAuthenticated) {
      window.location.href = '/login';
      return;
    }

    // Fetch ride history
    const fetchRideHistory = async () => {
      setIsLoading(true);
      try {
        // In a real app, this would be an API call
        // For now, we'll simulate it
        setTimeout(() => {
          setRideHistory([
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
          ]);
          setIsLoading(false);
        }, 1000);
      } catch (error) {
        console.error('Error fetching ride history:', error);
        setIsLoading(false);
      }
    };

    fetchRideHistory();
  }, [isAuthenticated]);

  if (!isAuthenticated) {
    return null; // Will redirect in useEffect
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-primary">
            RideCompare
          </Link>
          <div className="flex items-center gap-4">
            <Button variant="ghost" asChild>
              <Link href="/dashboard">Dashboard</Link>
            </Button>
            <span className="text-sm text-gray-600">
              Welcome, {user?.name || 'User'}
            </span>
            <Button variant="outline" size="sm">
              Logout
            </Button>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Your Ride History</CardTitle>
          </CardHeader>
          <CardContent>
            {isLoading ? (
              <div className="text-center py-8">Loading ride history...</div>
            ) : rideHistory.length === 0 ? (
              <div className="text-center py-8">
                <p className="text-gray-500 mb-4">You haven't taken any rides yet.</p>
                <Button asChild>
                  <Link href="/dashboard">Book a Ride</Link>
                </Button>
              </div>
            ) : (
              <div className="space-y-4">
                {rideHistory.map((ride) => (
                  <Card key={ride.id} className="overflow-hidden">
                    <div className="p-4">
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <h3 className="font-semibold text-lg">{ride.provider} {ride.type}</h3>
                          <p className="text-sm text-gray-500">{formatDate(ride.date)}</p>
                        </div>
                        <div className="text-right">
                          <p className="font-semibold">₹{ride.price}</p>
                          <span className="inline-block px-2 py-1 text-xs rounded-full bg-green-100 text-green-800">
                            {ride.status}
                          </span>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-start">
                          <div className="mt-1 mr-3">
                            <div className="h-4 w-4 rounded-full bg-green-500"></div>
                          </div>
                          <div>
                            <p className="text-sm font-medium">From</p>
                            <p className="text-sm text-gray-600">{ride.origin}</p>
                          </div>
                        </div>
                        <div className="flex items-start">
                          <div className="mt-1 mr-3">
                            <div className="h-4 w-4 rounded-full bg-red-500"></div>
                          </div>
                          <div>
                            <p className="text-sm font-medium">To</p>
                            <p className="text-sm text-gray-600">{ride.destination}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            )}
          </CardContent>
        </Card>
      </main>
    </div>
  );
}