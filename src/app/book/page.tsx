'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';
import BookingStepOne from '@/components/booking/step-one';
import BookingStepTwo from '@/components/booking/step-two';
import BookingStepThree from '@/components/booking/step-three';
import BookingStepFour from '@/components/booking/step-four';

export default function BookPage() {
  const [currentStep, setCurrentStep] = useState(1);
  const [bookingData, setBookingData] = useState({
    serviceType: '',
    date: '',
    time: '',
    name: '',
    email: '',
    phone: '',
    address: '',
    specialRequirements: '',
  });
  const [isConfirmed, setIsConfirmed] = useState(false);

  const handleNextStep = () => {
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleConfirmBooking = () => {
    setIsConfirmed(true);
  };

  const handleUpdateData = (key: string, value: string) => {
    setBookingData((prev) => ({ ...prev, [key]: value }));
  };

  if (isConfirmed) {
    return (
      <div className="min-h-screen bg-bg-blush py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <div className="mb-6">
            <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
              <Check className="w-10 h-10 text-green-600" />
            </div>
          </div>
          <h1 className="text-4xl font-bold mb-4">Booking Confirmed!</h1>
          <p className="text-lg text-gray-700 mb-8">
            Thank you for booking with Mieks & Match. A confirmation email has been sent to {bookingData.email}.
          </p>
          <div className="bg-white rounded-lg p-8 mb-8 text-left border-2 border-bg-primary">
            <h2 className="text-2xl font-bold mb-4">Your Booking Details</h2>
            <div className="space-y-3">
              <p><strong>Service:</strong> {bookingData.serviceType}</p>
              <p><strong>Date:</strong> {bookingData.date}</p>
              <p><strong>Time:</strong> {bookingData.time}</p>
              <p><strong>Name:</strong> {bookingData.name}</p>
              <p><strong>Address:</strong> {bookingData.address}</p>
              {bookingData.specialRequirements && (
                <p><strong>Special Requirements:</strong> {bookingData.specialRequirements}</p>
              )}
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              className="bg-bg-primary hover:bg-bg-accent text-white"
              size="lg"
            >
              View My Bookings
            </Button>
            <Button
              variant="outline"
              size="lg"
            >
              Back to Home
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-bg-blush py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        {/* Progress Bar */}
        <div className="mb-12">
          <h1 className="text-3xl font-bold mb-8">Book a Service</h1>
          <div className="flex justify-between mb-4">
            {[1, 2, 3, 4].map((step) => (
              <div key={step} className="flex flex-col items-center flex-1">
                <div
                  className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg mb-2 ${
                    step <= currentStep
                      ? 'bg-bg-primary text-white'
                      : 'bg-gray-300 text-gray-600'
                  }`}
                >
                  {step}
                </div>
                <span className="text-sm font-medium text-gray-700">
                  {['Service', 'Date & Time', 'Details', 'Review'][step - 1]}
                </span>
              </div>
            ))}
          </div>
          <div className="h-2 bg-gray-300 rounded-full overflow-hidden">
            <div
              className="h-full bg-bg-primary transition-all duration-300"
              style={{ width: `${(currentStep / 4) * 100}%` }}
            />
          </div>
        </div>

        {/* Step Content */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          {currentStep === 1 && (
            <BookingStepOne
              selectedService={bookingData.serviceType}
              onSelect={(service) => handleUpdateData('serviceType', service)}
            />
          )}
          {currentStep === 2 && (
            <BookingStepTwo
              date={bookingData.date}
              time={bookingData.time}
              onDateChange={(date) => handleUpdateData('date', date)}
              onTimeChange={(time) => handleUpdateData('time', time)}
            />
          )}
          {currentStep === 3 && (
            <BookingStepThree
              name={bookingData.name}
              email={bookingData.email}
              phone={bookingData.phone}
              address={bookingData.address}
              specialRequirements={bookingData.specialRequirements}
              onNameChange={(name) => handleUpdateData('name', name)}
              onEmailChange={(email) => handleUpdateData('email', email)}
              onPhoneChange={(phone) => handleUpdateData('phone', phone)}
              onAddressChange={(address) => handleUpdateData('address', address)}
              onSpecialRequirementsChange={(req) => handleUpdateData('specialRequirements', req)}
            />
          )}
          {currentStep === 4 && (
            <BookingStepFour
              bookingData={bookingData}
              onConfirm={handleConfirmBooking}
            />
          )}
        </div>

        {/* Navigation Buttons */}
        <div className="flex gap-4 justify-between">
          <Button
            onClick={handlePrevStep}
            variant="outline"
            disabled={currentStep === 1}
            size="lg"
          >
            Previous
          </Button>
          {currentStep < 4 ? (
            <Button
              onClick={handleNextStep}
              className="bg-bg-primary hover:bg-bg-accent text-white"
              size="lg"
            >
              Next
            </Button>
          ) : (
            <Button
              onClick={handleConfirmBooking}
              className="bg-green-600 hover:bg-green-700 text-white"
              size="lg"
            >
              Confirm Booking
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
