'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';

export default function ApplyPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    location: '',
    services: [] as string[],
    experience: '',
    bio: '',
    availability: '',
    documents: null as File | null,
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const services = ['Au Pair', 'Chauffeur', 'House Sitting', 'Pet Care', 'Tutoring'];

  const handleServiceToggle = (service: string) => {
    setFormData((prev) => ({
      ...prev,
      services: prev.services.includes(service)
        ? prev.services.filter((s) => s !== service)
        : [...prev.services, service],
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setIsSubmitted(true);
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFormData((prev) => ({ ...prev, documents: e.target.files![0] }));
    }
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-bg-blush py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <div className="mb-6">
            <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
              <Check className="w-10 h-10 text-green-600" />
            </div>
          </div>
          <h1 className="text-4xl font-bold mb-4">Application Submitted!</h1>
          <p className="text-lg text-gray-700 mb-4">
            Thank you for your interest in joining Mieks & Match.
          </p>
          <p className="text-gray-600 mb-8">
            We&apos;ve received your application and will review it within 3-5 business days.
            A confirmation email has been sent to {formData.email}.
          </p>
          <p className="text-gray-600 mb-8">
            We&apos;ll be in touch soon with next steps!
          </p>
          <Button
            className="bg-bg-primary hover:bg-bg-accent text-white"
            size="lg"
          >
            Back to Home
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-bg-blush py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Join Our Network</h1>
          <p className="text-lg text-gray-600">
            Apply to become a trusted provider with Mieks & Match
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-lg p-8 space-y-8">
          {/* Personal Information */}
          <section>
            <h2 className="text-2xl font-bold mb-6">Personal Information</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-semibold mb-2">Full Name *</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-bg-primary"
                  placeholder="Your full name"
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold mb-2">Email *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-bg-primary"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">Phone Number *</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-bg-primary"
                    placeholder="+27 ..."
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2">Location *</label>
                <input
                  type="text"
                  name="location"
                  value={formData.location}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-bg-primary"
                  placeholder="Where are you based?"
                />
              </div>
            </div>
          </section>

          {/* Service Selection */}
          <section>
            <h2 className="text-2xl font-bold mb-6">Which services do you offer? *</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {services.map((service) => (
                <label
                  key={service}
                  className="flex items-center p-4 border-2 border-gray-300 rounded-lg cursor-pointer hover:border-bg-primary hover:bg-bg-blush transition"
                >
                  <input
                    type="checkbox"
                    checked={formData.services.includes(service)}
                    onChange={() => handleServiceToggle(service)}
                    className="w-5 h-5 accent-bg-primary"
                  />
                  <span className="ml-3 font-semibold">{service}</span>
                </label>
              ))}
            </div>
          </section>

          {/* Experience */}
          <section>
            <h2 className="text-2xl font-bold mb-6">Your Experience & Bio</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-semibold mb-2">Years of Experience *</label>
                <input
                  type="text"
                  name="experience"
                  value={formData.experience}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-bg-primary"
                  placeholder="e.g., 5+ years"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2">Tell us about yourself *</label>
                <textarea
                  name="bio"
                  value={formData.bio}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-bg-primary"
                  placeholder="Share your background, skills, and why you'd be great at this work..."
                />
              </div>
            </div>
          </section>

          {/* Availability */}
          <section>
            <h2 className="text-2xl font-bold mb-6">Availability</h2>
            <div>
              <label className="block text-sm font-semibold mb-2">When are you available? *</label>
              <textarea
                name="availability"
                value={formData.availability}
                onChange={handleInputChange}
                required
                rows={3}
                className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-bg-primary"
                placeholder="e.g., Monday-Friday, 7am-6pm; flexible weekends"
              />
            </div>
          </section>

          {/* Documents */}
          <section>
            <h2 className="text-2xl font-bold mb-6">Documents</h2>
            <div>
              <label className="block text-sm font-semibold mb-2">
                Upload ID, references, or certifications (PDF or Image)
              </label>
              <div className="flex items-center justify-center w-full">
                <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100">
                  <div className="flex flex-col items-center justify-center pt-5 pb-6">
                    <svg
                      className="w-8 h-8 text-gray-400 mb-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 4v16m8-8H4"
                      />
                    </svg>
                    <p className="text-sm text-gray-500">
                      <span className="font-semibold">Click to upload</span> or drag and drop
                    </p>
                  </div>
                  <input
                    type="file"
                    className="hidden"
                    onChange={handleFileChange}
                    accept="application/pdf,image/*"
                  />
                </label>
              </div>
              {formData.documents && (
                <p className="text-sm text-green-600 mt-2">
                  File selected: {formData.documents.name}
                </p>
              )}
            </div>
          </section>

          {/* Terms */}
          <div className="flex items-start gap-3">
            <input
              type="checkbox"
              id="terms"
              required
              className="w-5 h-5 accent-bg-primary mt-1"
            />
            <label htmlFor="terms" className="text-sm text-gray-600">
              I agree to the terms and conditions and understand that Mieks & Match will conduct
              background checks and reference verification.
            </label>
          </div>

          {/* Submit Button */}
          <Button
            type="submit"
            className="w-full bg-bg-primary hover:bg-bg-accent text-white font-semibold py-3"
            size="lg"
          >
            Submit Application
          </Button>
        </form>
      </div>
    </div>
  );
}
