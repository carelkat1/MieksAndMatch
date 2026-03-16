interface BookingData {
  serviceType: string;
  date: string;
  time: string;
  name: string;
  email: string;
  phone: string;
  address: string;
  specialRequirements: string;
}

interface BookingStepFourProps {
  bookingData: BookingData;
  onConfirm: () => void;
}

export default function BookingStepFour({ bookingData, onConfirm: _onConfirm }: BookingStepFourProps) {
  // Calculate estimated cost (mock)
  const estimatedHours = 8;
  const hourlyRate = 150;
  const estimatedCost = estimatedHours * hourlyRate;

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Review Your Booking</h2>

      <div className="space-y-6">
        {/* Booking Summary */}
        <div className="bg-bg-blush rounded-lg p-6">
          <h3 className="text-lg font-bold mb-4">Booking Summary</h3>
          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="text-gray-600">Service:</span>
              <span className="font-semibold">{bookingData.serviceType}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Date:</span>
              <span className="font-semibold">{bookingData.date}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Time:</span>
              <span className="font-semibold">{bookingData.time}</span>
            </div>
            <div className="border-t border-gray-300 pt-3 mt-3">
              <div className="flex justify-between text-lg">
                <span className="font-bold">Estimated Cost:</span>
                <span className="font-bold text-bg-primary">R{estimatedCost}</span>
              </div>
              <p className="text-xs text-gray-600 mt-1">
                Final cost will be confirmed with your provider
              </p>
            </div>
          </div>
        </div>

        {/* Your Details */}
        <div className="bg-white border-2 border-gray-200 rounded-lg p-6">
          <h3 className="text-lg font-bold mb-4">Your Details</h3>
          <div className="space-y-2">
            <p>
              <span className="text-gray-600">Name:</span> <span className="font-semibold">{bookingData.name}</span>
            </p>
            <p>
              <span className="text-gray-600">Email:</span> <span className="font-semibold">{bookingData.email}</span>
            </p>
            <p>
              <span className="text-gray-600">Phone:</span> <span className="font-semibold">{bookingData.phone}</span>
            </p>
            <p>
              <span className="text-gray-600">Address:</span>{' '}
              <span className="font-semibold block mt-1">{bookingData.address}</span>
            </p>
            {bookingData.specialRequirements && (
              <p>
                <span className="text-gray-600">Special Requirements:</span>
                <span className="font-semibold block mt-1">{bookingData.specialRequirements}</span>
              </p>
            )}
          </div>
        </div>

        {/* Terms */}
        <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded">
          <p className="text-sm text-gray-700">
            By confirming this booking, you agree to our terms and conditions. Your payment will be
            processed securely, and you'll be matched with a provider shortly.
          </p>
        </div>
      </div>
    </div>
  );
}
