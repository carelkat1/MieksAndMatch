'use client';

import { use } from 'react';
import { Button } from '@/components/ui/button';
import { CheckCircle, Star, MapPin, Clock } from 'lucide-react';

// Mock provider data
const mockProvider = {
  id: '1',
  name: 'Thandi Nkosi',
  role: 'Au Pair',
  avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=thandi',
  isVerified: true,
  rating: 4.9,
  reviews: 47,
  location: 'Stellenbosch',
  bio: 'Experienced au pair with 5 years of childcare experience. Fluent in English and Xhosa. Certified in first aid and CPR. Passionate about working with families and providing excellent care.',
  services: ['Au Pair', 'Childcare', 'Tutoring'],
  hourlyRate: 150,
  availability: 'Available Monday-Friday, 7am-6pm',
  experience: '5+ years',
  languages: ['English', 'Xhosa', 'Afrikaans'],
  certifications: ['First Aid', 'CPR Certified'],
  reviews_list: [
    {
      id: '1',
      author: 'Sarah van der Merwe',
      rating: 5,
      content: 'Thandi is absolutely wonderful with our children. She\'s reliable, caring, and goes above and beyond. We couldn\'t ask for better.',
      date: '2 weeks ago',
    },
    {
      id: '2',
      author: 'James Koberstein',
      rating: 5,
      content: 'Professional, punctual, and genuinely cares about the kids. Highly recommend Thandi to any family.',
      date: '1 month ago',
    },
    {
      id: '3',
      author: 'Emma de Jager',
      rating: 5,
      content: 'Best au pair we\'ve ever had. The children absolutely love her and so do we. Thank you Thandi!',
      date: '2 months ago',
    },
  ],
};

export default function ProviderDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id: _id } = use(params);
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-bg-primary to-bg-accent py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto flex items-center gap-8">
          <img
            src={mockProvider.avatar}
            alt={mockProvider.name}
            className="w-32 h-32 rounded-full border-4 border-white"
          />
          <div className="flex-1 text-white">
            <div className="flex items-center gap-3 mb-2">
              <h1 className="text-4xl font-bold">{mockProvider.name}</h1>
              {mockProvider.isVerified && (
                <CheckCircle className="w-8 h-8 text-green-300" />
              )}
            </div>
            <p className="text-xl opacity-90 mb-4">{mockProvider.role}</p>
            <div className="flex items-center gap-6 flex-wrap">
              <div className="flex items-center gap-2">
                <Star className="w-5 h-5" />
                <span className="font-semibold">{mockProvider.rating}</span>
                <span className="opacity-90">({mockProvider.reviews} reviews)</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5" />
                <span>{mockProvider.location}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5" />
                <span>R{mockProvider.hourlyRate}/hr</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Bio Section */}
            <section className="bg-bg-blush rounded-lg p-6">
              <h2 className="text-2xl font-bold mb-4">About</h2>
              <p className="text-gray-700 leading-relaxed">{mockProvider.bio}</p>
            </section>

            {/* Services Section */}
            <section className="bg-white rounded-lg p-6 border-2 border-gray-200">
              <h2 className="text-2xl font-bold mb-4">Services Offered</h2>
              <div className="flex flex-wrap gap-2">
                {mockProvider.services.map((service) => (
                  <span
                    key={service}
                    className="px-4 py-2 bg-bg-primary text-white rounded-full text-sm font-semibold"
                  >
                    {service}
                  </span>
                ))}
              </div>
            </section>

            {/* Details Section */}
            <section className="grid grid-cols-2 gap-6">
              <div className="bg-bg-blush rounded-lg p-6">
                <h3 className="font-semibold text-lg mb-3">Experience</h3>
                <p className="text-gray-700">{mockProvider.experience}</p>
              </div>
              <div className="bg-bg-blush rounded-lg p-6">
                <h3 className="font-semibold text-lg mb-3">Availability</h3>
                <p className="text-gray-700">{mockProvider.availability}</p>
              </div>
              <div className="bg-bg-blush rounded-lg p-6">
                <h3 className="font-semibold text-lg mb-3">Languages</h3>
                <p className="text-gray-700">{mockProvider.languages.join(', ')}</p>
              </div>
              <div className="bg-bg-blush rounded-lg p-6">
                <h3 className="font-semibold text-lg mb-3">Certifications</h3>
                <p className="text-gray-700">{mockProvider.certifications.join(', ')}</p>
              </div>
            </section>

            {/* Reviews Section */}
            <section>
              <h2 className="text-2xl font-bold mb-6">Reviews ({mockProvider.reviews})</h2>
              <div className="space-y-4">
                {mockProvider.reviews_list.map((review) => (
                  <div
                    key={review.id}
                    className="bg-white border-2 border-gray-200 rounded-lg p-6"
                  >
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <p className="font-semibold text-lg">{review.author}</p>
                        <p className="text-sm text-gray-600">{review.date}</p>
                      </div>
                      <div className="flex gap-1">
                        {Array.from({ length: review.rating }).map((_, i) => (
                          <Star
                            key={i}
                            className="w-4 h-4 fill-yellow-400 text-yellow-400"
                          />
                        ))}
                      </div>
                    </div>
                    <p className="text-gray-700">{review.content}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-bg-primary rounded-lg p-6 sticky top-4 text-white">
              <div className="text-center mb-6">
                <div className="text-3xl font-bold mb-2">R{mockProvider.hourlyRate}</div>
                <p className="text-white/90">Hourly rate</p>
              </div>
              <Button
                className="w-full bg-white text-bg-primary hover:bg-gray-50 font-semibold mb-4"
                size="lg"
              >
                Book This Provider
              </Button>
              <Button
                variant="outline"
                className="w-full border-2 border-white text-white hover:bg-white/10"
                size="lg"
              >
                Message Provider
              </Button>

              {/* Quick Info */}
              <div className="mt-8 space-y-4 border-t border-white/20 pt-6">
                <div>
                  <p className="text-white/80 text-sm mb-1">Verified Member</p>
                  <p className="font-semibold">Yes - Thoroughly Vetted</p>
                </div>
                <div>
                  <p className="text-white/80 text-sm mb-1">Response Time</p>
                  <p className="font-semibold">Usually within 1 hour</p>
                </div>
                <div>
                  <p className="text-white/80 text-sm mb-1">Member Since</p>
                  <p className="font-semibold">January 2022</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
