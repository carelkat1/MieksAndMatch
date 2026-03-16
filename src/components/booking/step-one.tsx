import { Baby, Car, Home } from 'lucide-react';

interface BookingStepOneProps {
  selectedService: string;
  onSelect: (service: string) => void;
}

export default function BookingStepOne({ selectedService, onSelect }: BookingStepOneProps) {
  const services = [
    {
      id: 'au-pair',
      name: 'Au Pair',
      description: 'Full-time or part-time childcare',
      icon: Baby,
    },
    {
      id: 'chauffeur',
      name: 'Chauffeur',
      description: 'School runs and transportation',
      icon: Car,
    },
    {
      id: 'house-sitter',
      name: 'House & Pet Sitter',
      description: 'Home and pet care services',
      icon: Home,
    },
  ];

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">What service do you need?</h2>
      <div className="space-y-4">
        {services.map((service) => {
          const IconComponent = service.icon;
          return (
            <button
              key={service.id}
              onClick={() => onSelect(service.name)}
              className={`w-full p-6 border-2 rounded-lg text-left transition flex items-center gap-4 ${
                selectedService === service.name
                  ? 'border-bg-primary bg-bg-blush'
                  : 'border-gray-300 hover:border-bg-primary'
              }`}
            >
              <IconComponent className="w-8 h-8 text-bg-primary flex-shrink-0" />
              <div className="flex-1">
                <h3 className="font-semibold text-lg">{service.name}</h3>
                <p className="text-gray-600 text-sm">{service.description}</p>
              </div>
              {selectedService === service.name && (
                <div className="w-6 h-6 rounded-full bg-bg-primary text-white flex items-center justify-center">
                  ✓
                </div>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}
