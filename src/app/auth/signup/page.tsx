'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function SignupPage() {
  const [role, setRole] = useState<'client' | 'provider' | null>(null);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
  });
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match');
      return;
    }
    // Handle signup logic here
    console.log('Signup attempt:', { role, ...formData });
  };

  if (!role) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-bg-primary to-bg-accent flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-2xl">
          {/* Card */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            {/* Header */}
            <div className="text-center mb-12">
              <h1 className="text-3xl font-bold text-bg-primary mb-2">Mieks & Match</h1>
              <p className="text-gray-600 text-lg">How would you like to get started?</p>
            </div>

            {/* Role Selection */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {/* Client Option */}
              <button
                onClick={() => setRole('client')}
                className="border-2 border-gray-300 rounded-lg p-8 text-center hover:border-bg-primary hover:bg-bg-blush transition group"
              >
                <div className="text-4xl mb-4 group-hover:scale-110 transition">👨‍👩‍👧‍👦</div>
                <h3 className="text-xl font-bold mb-2 text-gray-900">I Need Help</h3>
                <p className="text-gray-600 text-sm">
                  I'm looking for au pairs, chauffeurs, or sitters
                </p>
              </button>

              {/* Provider Option */}
              <button
                onClick={() => setRole('provider')}
                className="border-2 border-gray-300 rounded-lg p-8 text-center hover:border-bg-primary hover:bg-bg-blush transition group"
              >
                <div className="text-4xl mb-4 group-hover:scale-110 transition">💼</div>
                <h3 className="text-xl font-bold mb-2 text-gray-900">I Want to Work</h3>
                <p className="text-gray-600 text-sm">
                  I want to offer my services as a provider
                </p>
              </button>
            </div>

            {/* Help Text */}
            <p className="text-center text-gray-600 text-sm">
              You can always change this later in your account settings
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-bg-primary to-bg-accent flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md">
        {/* Card */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-bg-primary mb-2">Mieks & Match</h1>
            <p className="text-gray-600">
              {role === 'client' ? 'Create your account' : 'Join as a provider'}
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="fullName" className="block text-sm font-semibold text-gray-700 mb-2">
                Full Name
              </label>
              <input
                id="fullName"
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-bg-primary transition"
                placeholder="Your full name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                Email Address
              </label>
              <input
                id="email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-bg-primary transition"
                placeholder="you@example.com"
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                Phone Number
              </label>
              <input
                id="phone"
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-bg-primary transition"
                placeholder="+27 ..."
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-semibold text-gray-700 mb-2">
                Password
              </label>
              <div className="relative">
                <input
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-bg-primary transition"
                  placeholder="••••••••"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 text-sm"
                >
                  {showPassword ? 'Hide' : 'Show'}
                </button>
              </div>
            </div>

            <div>
              <label
                htmlFor="confirmPassword"
                className="block text-sm font-semibold text-gray-700 mb-2"
              >
                Confirm Password
              </label>
              <input
                id="confirmPassword"
                type={showPassword ? 'text' : 'password'}
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-bg-primary transition"
                placeholder="••••••••"
              />
            </div>

            {/* Terms Checkbox */}
            <div className="flex items-start gap-3 pt-2">
              <input
                type="checkbox"
                id="terms"
                checked={acceptedTerms}
                onChange={(e) => setAcceptedTerms(e.target.checked)}
                required
                className="w-5 h-5 accent-bg-primary mt-1"
              />
              <label htmlFor="terms" className="text-sm text-gray-600">
                I agree to the{' '}
                <Link href="#" className="text-bg-primary hover:underline">
                  Terms and Conditions
                </Link>{' '}
                and{' '}
                <Link href="#" className="text-bg-primary hover:underline">
                  Privacy Policy
                </Link>
              </label>
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              className="w-full bg-bg-primary hover:bg-bg-accent text-white font-semibold py-2.5 rounded-lg transition"
              size="lg"
              disabled={!acceptedTerms}
            >
              Create Account
            </Button>
          </form>

          {/* Back Button */}
          <button
            onClick={() => setRole(null)}
            className="w-full text-center text-sm text-gray-600 hover:text-gray-900 mt-4"
          >
            ← Back to role selection
          </button>

          {/* Sign In Link */}
          <p className="text-center mt-6 text-gray-600 text-sm">
            Already have an account?{' '}
            <Link href="/auth/login" className="text-bg-primary hover:underline font-semibold">
              Sign In
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
