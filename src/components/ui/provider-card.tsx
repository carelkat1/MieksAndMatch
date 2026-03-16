import { Button } from '@/components/ui/button';
import { Star, CheckCircle } from 'lucide-react';
import Link from 'next/link';

interface ProviderCardProps {
  id: string;
  name: string;
  role: string;
  rating: number;
  reviews: number;
  avatar: string;
  isVerified: boolean;
  services: string[];
  hourlyRate: number;
}

export function ProviderCard({
  id,
  name,
  role,
  rating,
  reviews,
  avatar,
  isVerified,
  services,
  hourlyRate,
}: ProviderCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition">
      {/* Header with Avatar */}
      <div className="p-6 border-b-2 border-gray-200">
        <div className="flex items-start gap-4 mb-4">
          <img
            src={avatar}
            alt={name}
            className="w-16 h-16 rounded-full border-3 border-bg-primary"
          />
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-1">
              <h3 className="text-xl font-bold">{name}</h3>
              {isVerified && (
                <CheckCircle className="w-5 h-5 text-green-500" />
              )}
            </div>
            <p className="text-gray-600 font-semibold mb-2">{role}</p>
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1">
                <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                <span className="font-semibold text-sm">{rating}</span>
              </div>
              <span className="text-sm text-gray-600">({reviews} reviews)</span>
            </div>
          </div>
        </div>
      </div>

      {/* Services */}
      <div className="px-6 py-4 border-b border-gray-200">
        <p className="text-xs font-semibold text-gray-600 mb-2 uppercase">Services</p>
        <div className="flex flex-wrap gap-2">
          {services.slice(0, 2).map((service) => (
            <span
              key={service}
              className="px-2 py-1 bg-bg-blush text-bg-primary text-xs font-semibold rounded-full"
            >
              {service}
            </span>
          ))}
          {services.length > 2 && (
            <span className="px-2 py-1 bg-gray-200 text-gray-700 text-xs font-semibold rounded-full">
              +{services.length - 2}
            </span>
          )}
        </div>
      </div>

      {/* Rate and Action */}
      <div className="p-6">
        <div className="flex items-center justify-between mb-4">
          <div>
            <p className="text-xs text-gray-600">Hourly Rate</p>
            <p className="text-2xl font-bold text-bg-primary">R{hourlyRate}</p>
          </div>
        </div>

        <div className="flex gap-2">
          <Link href={`/providers/${id}`} className="flex-1">
            <Button variant="outline" size="md" className="w-full">
              View Profile
            </Button>
          </Link>
          <Button className="flex-1 bg-bg-primary hover:bg-bg-accent text-white" size="md">
            Book Now
          </Button>
        </div>
      </div>
    </div>
  );
}
