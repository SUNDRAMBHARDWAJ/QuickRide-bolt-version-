import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Card, CardContent } from '@/components/ui/card';

export default function About() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow bg-gray-50">
        <div className="container mx-auto px-4 py-12">
          <h1 className="text-4xl font-bold mb-8 text-center">About RideCompare</h1>
          
          <div className="max-w-3xl mx-auto">
            <Card className="mb-8">
              <CardContent className="pt-6">
                <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
                <p className="text-gray-700 mb-4">
                  At RideCompare, our mission is to simplify the ride-hailing experience for urban commuters. 
                  We believe that finding the right ride shouldn't be a hassle, and you shouldn't have to 
                  juggle multiple apps to find the best option.
                </p>
                <p className="text-gray-700">
                  By aggregating data from multiple ride-hailing platforms, we provide a seamless experience 
                  that saves you time, reduces stress, and helps you make informed decisions about your daily commute.
                </p>
              </CardContent>
            </Card>
            
            <Card className="mb-8">
              <CardContent className="pt-6">
                <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
                <p className="text-gray-700 mb-4">
                  RideCompare was born out of frustration. Our founders, like many urban commuters, 
                  were tired of switching between multiple ride-hailing apps during peak hours, 
                  trying to find the quickest and most affordable ride.
                </p>
                <p className="text-gray-700 mb-4">
                  In 2024, we set out to create a solution that would aggregate data from popular 
                  ride-hailing services like Uber, Ola, Rapido, and others into one platform. 
                  Our goal was to provide real-time ride availability predictions, price comparisons, 
                  and a unified booking system.
                </p>
                <p className="text-gray-700">
                  Today, RideCompare is helping thousands of commuters in major cities like Gurugram, 
                  Delhi, Mumbai, and Bengaluru save time and money on their daily rides.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="pt-6">
                <h2 className="text-2xl font-semibold mb-4">Our Team</h2>
                <p className="text-gray-700 mb-4">
                  We're a team of passionate engineers, designers, and urban mobility enthusiasts 
                  dedicated to improving the ride-hailing experience. With backgrounds in technology, 
                  transportation, and user experience design, we bring a diverse set of skills to 
                  tackle the challenges of urban mobility.
                </p>
                <p className="text-gray-700">
                  Our team is committed to continuous improvement, constantly refining our algorithms 
                  and user experience based on feedback from our growing community of users.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}