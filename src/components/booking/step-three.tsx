interface BookingStepThreeProps {
  name: string;
  email: string;
  phone: string;
  address: string;
  specialRequirements: string;
  onNameChange: (name: string) => void;
  onEmailChange: (email: string) => void;
  onPhoneChange: (phone: string) => void;
  onAddressChange: (address: string) => void;
  onSpecialRequirementsChange: (req: string) => void;
}

export default function BookingStepThree({
  name,
  email,
  phone,
  address,
  specialRequirements,
  onNameChange,
  onEmailChange,
  onPhoneChange,
  onAddressChange,
  onSpecialRequirementsChange,
}: BookingStepThreeProps) {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Your Details</h2>
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => onNameChange(e.target.value)}
            required
            className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-bg-primary"
            placeholder="Your full name"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address</label>
          <input
            type="email"
            value={email}
            onChange={(e) => onEmailChange(e.target.value)}
            required
            className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-bg-primary"
            placeholder="your@email.com"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">Phone Number</label>
          <input
            type="tel"
            value={phone}
            onChange={(e) => onPhoneChange(e.target.value)}
            required
            className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-bg-primary"
            placeholder="+27 ..."
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Home Address
          </label>
          <textarea
            value={address}
            onChange={(e) => onAddressChange(e.target.value)}
            required
            rows={3}
            className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-bg-primary"
            placeholder="Your home address in Stellenbosch"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Special Requirements (Optional)
          </label>
          <textarea
            value={specialRequirements}
            onChange={(e) => onSpecialRequirementsChange(e.target.value)}
            rows={3}
            className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-bg-primary"
            placeholder="Any special requirements or preferences for the provider? (allergies, pets, languages, etc.)"
          />
        </div>
      </div>
    </div>
  );
}
