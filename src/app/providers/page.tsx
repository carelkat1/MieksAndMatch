'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ProviderCard } from '@/components/ui/provider-card';
import { Search, Filter } from 'lucide-react';

// Mock provider data
const mockProviders = [
  {
    id: '1',
    name: 'Thandi Nkosi',
    role: 'Au Pair',
    rating: 4.9,
    reviews: 47,
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=thandi',
    isVerified: true,
    services: ['Au Pair', 'Childcare'],
    hourlyRate: 150,
  },
  {
    id: '2',
    name: 'Marcus van der Spuy',
    role: 'Chauffeur',
    rating: 4.8,
    reviews: 32,
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=marcus',
    isVerified: true,
    services: ['Chauffeur', 'Transport'],
    hourlyRate: 180,
  },
  {
    id: '3',
    name: 'Grace Mthembu',
    role: 'House Sitter',
    rating: 5.0,
    reviews: 28,
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=grace',
    isVerified: true,
    services: ['House Sitting', 'Pet Care'],
    hourlyRate: 120,
  },
  {
    id: '4',
    name: 'Emma Scholtz',
    role: 'Au Pair',
    rating: 4.7,
    reviews: 24,
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=emma',
    isVerified: true,
    services: ['Au Pair', 'Tutoring'],
    hourlyRate: 160,
  },
  {
    id: '5',
    name: 'Sipho Dlamini',
    role: 'Chauffeur',
    rating: 4.9,
    reviews: 35,
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=sipho',
    isVerified: true,
    services: ['Chauffeur', 'Airport Transfer'],
    hourlyRate: 170,
  },
  {
    id: '6',
    name: 'Lisa Burger',
    role: 'Pet Sitter',
    rating: 4.8,
    reviews: 41,
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=lisa',
    isVerified: true,
    services: ['Pet Care', 'House Sitting'],
    hourlyRate: 130,
  },
];

export default function ProvidersPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedService, setSelectedService] = useState('all');
  const [minRating, setMinRating] = useState(0);
  const [maxPrice, setMaxPrice] = useState(500);

  const filteredProviders = mockProviders.filter((provider) => {
    const matchesSearch =
      provider.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      provider.role.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesService =
      selectedService === 'all' ||
      provider.services.some((s) =>
        s.toLowerCase().includes(selectedService.toLowerCase())
      );
    const matchesRating = provider.rating >= minRating;
    const matchesPrice = provider.hourlyRate <= maxPrice;

    return matchesSearch && matchesService && matchesRating && matchesPrice;
  });

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-r from-bg-primary to-bg-accent py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Find Your Perfect Provider</h1>
          <p className="text-white/90 text-lg">Browse our network of vetted professionals</p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        {/* Search Bar */}
        <div className="mb-8">
          <div className="relative">
            <Search className="absolute left-4 top-4 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search by name or role..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-bg-primary"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar Filters */}
          <div className="lg:col-span-1">
            <div className="bg-bg-blush rounded-lg p-6 sticky top-4">
              <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                <Filter className="w-5 h-5" />
                Filters
              </h3>

              {/* Service Filter */}
              <div className="mb-8">
                <label className="block text-sm font-semibold mb-3">Service Type</label>
                <select
                  value={selectedService}
                  onChange={(e) => setSelectedService(e.target.value)}
                  className="w-full px-3 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-bg-primary"
                >
                  <option value="all">All Services</option>
                  <option value="au pair">Au Pair</option>
                  <option value="chauffeur">Chauffeur</option>
                  <option value="pet care">Pet Care</option>
                  <option value="house sitting">House Sitting</option>
                  <option value="tutoring">Tutoring</option>
                </select>
              </div>

              {/* Rating Filter */}
              <div className="mb-8">
                <label className="block text-sm font-semibold mb-3">Minimum Rating</label>
                <div className="flex items-center gap-2">
                  <input
                    type="range"
                    min="0"
                    max="5"
                    step="0.5"
                    value={minRating}
                    onChange={(e) => setMinRating(parseFloat(e.target.value))}
                    className="flex-1"
                  />
                  <span className="text-sm font-semibold text-bg-primary">
                    {minRating.toFixed(1)}★
                  </span>
                </div>
              </div>

              {/* Price Filter */}
              <div className="mb-8">
                <label className="block text-sm font-semibold mb-3">Max Hourly Rate</label>
                <div className="flex items-center gap-2">
                  <input
                    type="range"
                    min="50"
                    max="500"
                    step="10"
                    value={maxPrice}
                    onChange={(e) => setMaxPrice(parseInt(e.target.value))}
                    className="flex-1"
                  />
                  <span className="text-sm font-semibold text-bg-primary">
                    R{maxPrice}
                  </span>
                </div>
              </div>

              <Button
                onClick={() => {
                  setSearchTerm('');
                  setSelectedService('all');
                  setMinRating(0);
                  setMaxPrice(500);
                }}
                variant="outline"
                className="w-full"
              >
                Clear Filters
              </Button>
            </div>
          </div>

          {/* Providers Grid */}
          <div className="lg:col-span-3">
            {filteredProviders.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-xl text-gray-600">No providers found matching your filters.</p>
              </div>
            ) : (
              <>
                <p className="text-sm text-gray-600 mb-6">
                  Showing {filteredProviders.length} provider{filteredProviders.length !== 1 ? 's' : ''}
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {filteredProviders.map((provider) => (
                    <ProviderCard
                      key={provider.id}
                      id={provider.id}
                      name={provider.name}
                      role={provider.role}
                      rating={provider.rating}
                      reviews={provider.reviews}
                      avatar={provider.avatar}
                      isVerified={provider.isVerified}
                      services={provider.services}
                      hourlyRate={provider.hourlyRate}
                    />
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
