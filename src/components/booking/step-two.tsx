interface BookingStepTwoProps {
  date: string;
  time: string;
  onDateChange: (date: string) => void;
  onTimeChange: (time: string) => void;
}

export default function BookingStepTwo({
  date,
  time,
  onDateChange,
  onTimeChange,
}: BookingStepTwoProps) {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">When do you need the service?</h2>
      <div className="space-y-6">
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">Date</label>
          <input
            type="date"
            value={date}
            onChange={(e) => onDateChange(e.target.value)}
            required
            className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-bg-primary"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">Time</label>
          <input
            type="time"
            value={time}
            onChange={(e) => onTimeChange(e.target.value)}
            required
            className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-bg-primary"
          />
        </div>

        <div className="bg-bg-blush rounded-lg p-4">
          <p className="text-sm text-gray-700">
            <strong>Note:</strong> Your chosen date and time help us find the best available
            providers. You&apos;ll have a chance to confirm the final schedule with your selected
            provider.
          </p>
        </div>
      </div>
    </div>
  );
}
