'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronDown } from 'lucide-react';

export default function BottomServiceSelector() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedService, setSelectedService] = useState('');

  const services = ['Au Pair', 'Chauffeur', 'House Sitting', 'Pet Care', 'Tutoring'];

  const handleSelectService = (service: string) => {
    setSelectedService(service);
    setIsOpen(false);
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t-2 border-gray-200 shadow-2xl p-4 sm:p-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col sm:flex-row gap-4 items-center">
          {/* Service Selector */}
          <div className="relative flex-1 w-full">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg flex items-center justify-between hover:border-bg-primary transition bg-white"
            >
              <span className="text-gray-700">
                {selectedService || 'Choose the service you need'}
              </span>
              <ChevronDown
                className={`w-5 h-5 text-gray-400 transition ${isOpen ? 'rotate-180' : ''}`}
              />
            </button>

            {/* Dropdown Menu */}
            {isOpen && (
              <div className="absolute top-full left-0 right-0 mt-2 bg-white border-2 border-gray-300 rounded-lg shadow-lg z-10">
                {services.map((service) => (
                  <button
                    key={service}
                    onClick={() => handleSelectService(service)}
                    className="w-full px-4 py-3 text-left hover:bg-bg-blush transition border-b border-gray-200 last:border-0"
                  >
                    {service}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3 w-full sm:w-auto">
            <Button
              className="flex-1 sm:flex-none bg-bg-primary hover:bg-bg-accent text-white font-semibold"
              size="lg"
            >
              Book a Service
            </Button>
            <Button
              variant="outline"
              className="flex-1 sm:flex-none font-semibold"
              size="lg"
            >
              Apply for Work
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
