import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '@/store/store';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';

interface RideOption {
  id: string;
  provider: string;
  type: string;
  price: number;
  currency: string;
  estimatedTime: number;
  distance: number;
  availableSeats: number;
  logo: string;
}

export default function Dashboard() {
  const { isAuthenticated, user } = useSelector((state: RootState) => state.auth);
  const [origin, setOrigin] = useState('');
  const [destination, setDestination] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [rideOptions, setRideOptions] = useState<RideOption[]>([]);

  // Mock data for ride options
  const mockRideOptions: RideOption[] = [
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

  useEffect(() => {
    // Check if user is authenticated
    if (!isAuthenticated) {
      window.location.href = '/login';
    }
  }, [isAuthenticated]);

  const handleSearch = () => {
    if (!origin || !destination) return;
    
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setRideOptions(mockRideOptions);
      setIsLoading(false);
    }, 1500);
  };

  const handleBookRide = (rideOption: RideOption) => {
    alert(`Booking ${rideOption.provider} ${rideOption.type} for ${rideOption.price} ${rideOption.currency}`);
  };

  if (!isAuthenticated) {
    return null; // Will redirect in useEffect
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-primary">
            RideCompare
          </Link>
          <div className="flex items-center gap-4">
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
            <CardTitle>Find a Ride</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label htmlFor="origin" className="block text-sm font-medium text-gray-700 mb-1">
                  Pickup Location
                </label>
                <Input
                  id="origin"
                  placeholder="Enter pickup location"
                  value={origin}
                  onChange={(e) => setOrigin(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="destination" className="block text-sm font-medium text-gray-700 mb-1">
                  Destination
                </label>
                <Input
                  id="destination"
                  placeholder="Enter destination"
                  value={destination}
                  onChange={(e) => setDestination(e.target.value)}
                />
              </div>
            </div>
            <Button onClick={handleSearch} disabled={isLoading || !origin || !destination}>
              {isLoading ? 'Searching...' : 'Search Rides'}
            </Button>
          </CardContent>
        </Card>

        {rideOptions.length > 0 && (
          <div>
            <h2 className="text-xl font-semibold mb-4">Available Rides</h2>
            <div className="grid grid-cols-1 gap-4">
              {rideOptions.map((option) => (
                <Card key={option.id} className="overflow-hidden">
                  <div className="flex flex-col md:flex-row">
                    <div className="p-4 flex items-center md:w-1/4">
                      <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                        <img src={option.logo} alt={option.provider} className="w-full h-full object-cover" />
                      </div>
                      <div>
                        <h3 className="font-semibold">{option.provider}</h3>
                        <p className="text-sm text-gray-600">{option.type}</p>
                      </div>
                    </div>
                    <div className="p-4 flex flex-col md:flex-row justify-between items-center flex-grow border-t md:border-t-0 md:border-l border-gray-200">
                      <div className="flex gap-8 mb-4 md:mb-0">
                        <div>
                          <p className="text-sm text-gray-500">Price</p>
                          <p className="font-semibold">₹{option.price}</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">Time</p>
                          <p className="font-semibold">{option.estimatedTime} min</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">Distance</p>
                          <p className="font-semibold">{option.distance} km</p>
                        </div>
                      </div>
                      <Button onClick={() => handleBookRide(option)}>Book Now</Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        )}
      </main>
    </div>
  );
}