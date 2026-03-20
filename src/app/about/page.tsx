import { Button } from '@/components/ui/button';
import { Heart, Users, Star, Shield } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-bg-primary to-bg-accent py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-white mb-6">About Mieke & Our Mission</h1>
          <p className="text-xl text-white/90">
            Connecting families with trustworthy caregivers and service providers in Stellenbosch
          </p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        {/* Our Story */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold mb-8">Our Story</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                Mieks & Match was founded in October 2021 as Stellenbosch Au Pairs by Mieke, a
                passionate advocate for family support and community care. What started as a
                specialized au pair placement service has grown into a comprehensive marketplace
                connecting families with trusted professionals.
              </p>
              <p>
                Recognizing the broader needs of families in the Winelands, we expanded our
                services to include chauffeurs, house sitters, pet care providers, and tutors.
                Today, Mieks & Match is the go-to platform for busy families seeking reliable,
                vetted help.
              </p>
              <p>
                Our growth is built on trust, transparency, and a genuine commitment to both
                families and service providers. Every profile is thoroughly vetted, every booking
                is secure, and every interaction is backed by our dedication to excellence.
              </p>
            </div>
            <div className="bg-bg-blush rounded-lg h-80 flex items-center justify-center text-gray-400">
              <div className="text-center">
                <span className="text-6xl mb-4 block">📸</span>
                <p>Mieke & Team Photo Placeholder</p>
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Values */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold mb-8">Our Mission & Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                icon: Heart,
                title: 'Care First',
                description: 'We prioritize the wellbeing and safety of every family and provider on our platform.',
              },
              {
                icon: Shield,
                title: 'Trust & Transparency',
                description: 'Thorough vetting, honest communication, and secure transactions are our foundation.',
              },
              {
                icon: Users,
                title: 'Community',
                description: 'We build lasting relationships within the Stellenbosch and Winelands community.',
              },
              {
                icon: Star,
                title: 'Excellence',
                description: 'We continuously improve our service to exceed expectations and deliver quality matches.',
              },
            ].map((item, idx) => {
              const IconComponent = item.icon;
              return (
                <div key={idx} className="bg-bg-blush rounded-lg p-8">
                  <IconComponent className="w-12 h-12 text-bg-primary mb-4" />
                  <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
                  <p className="text-gray-700">{item.description}</p>
                </div>
              );
            })}
          </div>
        </section>

        {/* By The Numbers */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold mb-8">By The Numbers</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { number: '200+', label: 'Vetted Providers' },
              { number: '1000+', label: 'Happy Families' },
              { number: '5000+', label: 'Successful Bookings' },
              { number: '4.8★', label: 'Average Rating' },
            ].map((item, idx) => (
              <div key={idx} className="text-center">
                <p className="text-5xl font-bold text-bg-primary mb-2">{item.number}</p>
                <p className="text-gray-700 font-semibold">{item.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold mb-8">Why Families Trust Mieks & Match</h2>
          <div className="space-y-4">
            {[
              'Comprehensive vetting process including background checks and reference verification',
              'Personalized matching based on family needs and provider specialization',
              'Secure online booking, payment, and communication platform',
              'Protection for both families and providers with clear agreements',
              'Local expertise in Stellenbosch and the Western Cape Winelands region',
              'Responsive customer support and commitment to problem-solving',
            ].map((item, idx) => (
              <div key={idx} className="flex items-start gap-4">
                <div className="w-6 h-6 rounded-full bg-bg-primary text-white flex items-center justify-center flex-shrink-0 mt-1">
                  ✓
                </div>
                <p className="text-gray-700 text-lg">{item}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <section className="bg-bg-blush rounded-lg p-12 text-center">
          <h2 className="text-3xl font-bold mb-4">Join the Mieks & Match Family</h2>
          <p className="text-lg text-gray-700 mb-8">
            Whether you&apos;re looking for help or wanting to share your skills, we&apos;re here to connect
            you with the right opportunities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-bg-primary hover:bg-bg-accent text-white font-semibold" size="lg">
              Book a Service
            </Button>
            <Button variant="outline" size="lg">
              Apply to Join
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
}
