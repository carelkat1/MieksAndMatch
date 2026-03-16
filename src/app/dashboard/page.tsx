'use client';

import { Button } from '@/components/ui/button';
import { Calendar, CheckCircle, DollarSign } from 'lucide-react';

// Mock user data
const mockUser = {
  name: 'Sarah van der Merwe',
  email: 'sarah@example.com',
};

// Mock booking data
const mockBookings = [
  {
    id: '1',
    service: 'Au Pair',
    date: '2026-03-20',
    time: '08:00 - 16:00',
    provider: 'Thandi Nkosi',
    status: 'confirmed',
    totalCost: 1200,
  },
  {
    id: '2',
    service: 'Chauffeur',
    date: '2026-03-22',
    time: '14:00 - 18:00',
    provider: 'Sipho Dlamini',
    status: 'pending',
    totalCost: 680,
  },
  {
    id: '3',
    service: 'Pet Sitting',
    date: '2026-03-25',
    time: 'Full day',
    provider: 'Lisa Burger',
    status: 'confirmed',
    totalCost: 520,
  },
];

// Mock completed bookings
const mockCompletedBookings = [
  {
    id: '4',
    service: 'Au Pair',
    date: '2026-03-10',
    provider: 'Thandi Nkosi',
    rating: 5,
  },
  {
    id: '5',
    service: 'Chauffeur',
    date: '2026-03-05',
    provider: 'Marcus van der Spuy',
    rating: 4,
  },
];

export default function DashboardPage() {
  const upcomingCount = mockBookings.filter((b) => b.status === 'confirmed').length;
  const completedCount = mockCompletedBookings.length;
  const totalSpent = mockBookings.reduce((sum, booking) => sum + booking.totalCost, 0);

  return (
    <div className="min-h-screen bg-bg-blush">
      {/* Header */}
      <section className="bg-gradient-to-r from-bg-primary to-bg-accent py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold text-white mb-2">Welcome back, {mockUser.name}</h1>
          <p className="text-white/90">{mockUser.email}</p>
        </div>
      </section>

      <div className="max-w-6xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <div className="bg-white rounded-lg p-6 shadow">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm font-semibold mb-1">Upcoming Bookings</p>
                <p className="text-3xl font-bold text-bg-primary">{upcomingCount}</p>
              </div>
              <Calendar className="w-12 h-12 text-bg-primary opacity-20" />
            </div>
          </div>

          <div className="bg-white rounded-lg p-6 shadow">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm font-semibold mb-1">Completed Bookings</p>
                <p className="text-3xl font-bold text-green-600">{completedCount}</p>
              </div>
              <CheckCircle className="w-12 h-12 text-green-600 opacity-20" />
            </div>
          </div>

          <div className="bg-white rounded-lg p-6 shadow">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm font-semibold mb-1">Total Spent</p>
                <p className="text-3xl font-bold text-bg-accent">R{totalSpent.toLocaleString()}</p>
              </div>
              <DollarSign className="w-12 h-12 text-bg-accent opacity-20" />
            </div>
          </div>

          <div className="bg-white rounded-lg p-6 shadow">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm font-semibold mb-1">Profile Status</p>
                <p className="text-3xl font-bold text-blue-600">Complete</p>
              </div>
              <CheckCircle className="w-12 h-12 text-blue-600 opacity-20" />
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Quick Actions</h2>
          <div className="flex flex-wrap gap-4">
            <Button className="bg-bg-primary hover:bg-bg-accent text-white" size="lg">
              Book a Service
            </Button>
            <Button variant="outline" size="lg">
              Browse Providers
            </Button>
            <Button variant="outline" size="lg">
              View My Profile
            </Button>
            <Button variant="outline" size="lg">
              Account Settings
            </Button>
          </div>
        </div>

        {/* Upcoming Bookings */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Upcoming Bookings</h2>
          {mockBookings.length === 0 ? (
            <div className="bg-white rounded-lg p-8 text-center">
              <p className="text-gray-600 mb-4">No upcoming bookings yet.</p>
              <Button className="bg-bg-primary hover:bg-bg-accent text-white">
                Book a Service
              </Button>
            </div>
          ) : (
            <div className="space-y-4">
              {mockBookings.map((booking) => (
                <div
                  key={booking.id}
                  className="bg-white rounded-lg p-6 shadow flex items-center justify-between"
                >
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-2">
                      <h3 className="text-xl font-bold">{booking.service}</h3>
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-semibold ${
                          booking.status === 'confirmed'
                            ? 'bg-green-100 text-green-800'
                            : 'bg-yellow-100 text-yellow-800'
                        }`}
                      >
                        {booking.status === 'confirmed' ? 'Confirmed' : 'Pending'}
                      </span>
                    </div>
                    <p className="text-gray-600 mb-2">
                      Provider: <span className="font-semibold">{booking.provider}</span>
                    </p>
                    <div className="flex gap-6 text-sm text-gray-600">
                      <span>📅 {booking.date}</span>
                      <span>⏰ {booking.time}</span>
                      <span>💰 R{booking.totalCost}</span>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm">
                      View
                    </Button>
                    <Button variant="outline" size="sm">
                      Message
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>

        {/* Past Bookings */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Recently Completed</h2>
          {mockCompletedBookings.length === 0 ? (
            <div className="bg-white rounded-lg p-8 text-center">
              <p className="text-gray-600">No completed bookings yet.</p>
            </div>
          ) : (
            <div className="space-y-4">
              {mockCompletedBookings.map((booking) => (
                <div
                  key={booking.id}
                  className="bg-white rounded-lg p-6 shadow flex items-center justify-between"
                >
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-2">
                      <h3 className="text-xl font-bold">{booking.service}</h3>
                      <span className="px-3 py-1 rounded-full text-xs font-semibold bg-green-100 text-green-800">
                        Completed
                      </span>
                    </div>
                    <p className="text-gray-600 mb-2">
                      Provider: <span className="font-semibold">{booking.provider}</span>
                    </p>
                    <p className="text-sm text-gray-600">📅 {booking.date}</p>
                  </div>
                  <div className="text-right">
                    <div className="mb-3">
                      <div className="flex gap-1 justify-end">
                        {Array.from({ length: booking.rating }).map((_, i) => (
                          <span key={i} className="text-xl">
                            ⭐
                          </span>
                        ))}
                      </div>
                    </div>
                    <Button variant="outline" size="sm">
                      Book Again
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>
      </div>
    </div>
  );
}
