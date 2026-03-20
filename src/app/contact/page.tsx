'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Mail, Phone, MapPin, MessageCircle, Facebook, Instagram, Linkedin } from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Contact form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: '', email: '', subject: '', message: '' });
      setSubmitted(false);
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-bg-primary to-bg-accent py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-white mb-6">Get in Touch</h1>
          <p className="text-xl text-white/90">
            Have questions? We&apos;d love to hear from you. Get in touch with our team anytime.
          </p>
        </div>
      </section>

      <div className="max-w-6xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-bold mb-8">Send us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                  Your Name
                </label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-bg-primary transition"
                  placeholder="John Doe"
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
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-bg-primary transition"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 mb-2">
                  Subject
                </label>
                <input
                  id="subject"
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-bg-primary transition"
                  placeholder="How can we help?"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-bg-primary transition"
                  placeholder="Tell us more about your inquiry..."
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-bg-primary hover:bg-bg-accent text-white font-semibold py-3 rounded-lg transition"
                size="lg"
              >
                Send Message
              </Button>

              {submitted && (
                <div className="bg-green-100 border-2 border-green-400 text-green-700 px-4 py-3 rounded-lg">
                  Thank you! Your message has been sent successfully.
                </div>
              )}
            </form>
          </div>

          {/* Contact Information */}
          <div className="lg:col-span-1">
            <h2 className="text-3xl font-bold mb-8">Contact Information</h2>

            {/* Email */}
            <div className="mb-8">
              <div className="flex items-start gap-4">
                <Mail className="w-6 h-6 text-bg-primary mt-1" />
                <div>
                  <h3 className="font-semibold text-lg mb-1">Email</h3>
                  <a
                    href="mailto:support@mieksandmatch.co.za"
                    className="text-bg-primary hover:underline"
                  >
                    support@mieksandmatch.co.za
                  </a>
                  <p className="text-sm text-gray-600 mt-1">
                    Response time: 24-48 business hours
                  </p>
                </div>
              </div>
            </div>

            {/* Phone */}
            <div className="mb-8">
              <div className="flex items-start gap-4">
                <Phone className="w-6 h-6 text-bg-primary mt-1" />
                <div>
                  <h3 className="font-semibold text-lg mb-1">Phone</h3>
                  <a href="tel:+27219876543" className="text-bg-primary hover:underline">
                    +27 (0)21 987 6543
                  </a>
                  <p className="text-sm text-gray-600 mt-1">
                    Monday - Friday, 8am - 6pm (SAST)
                  </p>
                </div>
              </div>
            </div>

            {/* WhatsApp */}
            <div className="mb-8">
              <div className="flex items-start gap-4">
                <MessageCircle className="w-6 h-6 text-bg-primary mt-1" />
                <div>
                  <h3 className="font-semibold text-lg mb-1">WhatsApp</h3>
                  <a
                    href="https://wa.me/27219876543"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-bg-primary hover:underline"
                  >
                    +27 (0)21 987 6543
                  </a>
                  <p className="text-sm text-gray-600 mt-1">
                    Quick messages & support
                  </p>
                </div>
              </div>
            </div>

            {/* Location */}
            <div className="mb-8">
              <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-bg-primary mt-1" />
                <div>
                  <h3 className="font-semibold text-lg mb-1">Location</h3>
                  <p className="text-gray-700">
                    Stellenbosch,
                    <br />
                    Western Cape, South Africa
                  </p>
                  <p className="text-sm text-gray-600 mt-2">
                    Serving the greater Winelands region
                  </p>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="mt-12 pt-8 border-t border-gray-300">
              <h3 className="font-semibold text-lg mb-4">Follow Us</h3>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="w-12 h-12 rounded-full bg-bg-primary text-white flex items-center justify-center hover:bg-bg-accent transition"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="w-12 h-12 rounded-full bg-bg-primary text-white flex items-center justify-center hover:bg-bg-accent transition"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="w-12 h-12 rounded-full bg-bg-primary text-white flex items-center justify-center hover:bg-bg-accent transition"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
