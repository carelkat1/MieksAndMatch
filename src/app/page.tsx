import { Button } from '@/components/ui/button';
import { ServiceCard } from '@/components/ui/service-card';
import { TestimonialCard } from '@/components/ui/testimonial-card';
import { Baby, Car, Home, Shield, Heart, MapPin, Star } from 'lucide-react';
import BottomServiceSelector from '@/components/home/bottom-service-selector';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* HERO SECTION */}
      <section className="relative overflow-hidden bg-gradient-to-r from-bg-primary to-bg-accent py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl sm:text-6xl font-bold text-white mb-6">
            All the help your family needs.
          </h1>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Trusted au pairs, tutors, chauffeurs, and pet sitters in Stellenbosch.
            Screened, verified, and ready to help your family thrive.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-bg-primary hover:bg-gray-50 font-semibold"
            >
              Book a Service
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white/10 font-semibold"
            >
              Join the Team
            </Button>
          </div>
        </div>
      </section>

      {/* SERVICE CATEGORIES */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ServiceCard
              icon={Baby}
              title="Au Pair Services"
              description="Full-time or part-time childcare and household help from experienced, screened au pairs."
            />
            <ServiceCard
              icon={Car}
              title="Chauffeur Services"
              description="Reliable drivers for school runs, airport transfers, and family transportation."
            />
            <ServiceCard
              icon={Home}
              title="House & Pet Sitters"
              description="Trustworthy care for your home and pets while you're away or busy."
            />
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-bg-blush">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { step: 1, title: 'Choose Your Service', description: 'Select the service you need and tell us what you\'re looking for.' },
              { step: 2, title: 'Get Matched', description: 'We match you with screened, verified providers in Stellenbosch.' },
              { step: 3, title: 'Book & Manage', description: 'Book online, manage your bookings, and communicate through our platform.' }
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 rounded-full bg-bg-primary text-white flex items-center justify-center text-2xl font-bold">
                    {item.step}
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Why Choose Mieks & Match</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Shield, title: 'Screened Candidates', description: 'All providers are thoroughly vetted and verified.' },
              { icon: Heart, title: 'Personalized Matching', description: 'We match based on your needs and preferences.' },
              { icon: MapPin, title: 'Winelands Local Network', description: 'Deep roots in the Stellenbosch community.' },
              { icon: Star, title: 'Reliable & Trustworthy', description: 'Ratings and reviews from real families.' }
            ].map((item, idx) => {
              const IconComponent = item.icon;
              return (
                <div key={idx} className="text-center">
                  <div className="flex justify-center mb-4">
                    <IconComponent className="w-12 h-12 text-bg-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-bg-blush">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">What Families Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <TestimonialCard
              name="Sarah van der Merwe"
              role="Parent, Stellenbosch"
              content="Mieke's service has been a game-changer for our family. Our au pair is wonderful and reliable. Highly recommend!"
              rating={5}
            />
            <TestimonialCard
              name="James Koberstein"
              role="Parent, Stellenbosch"
              content="The screening process is thorough and the matching is spot-on. We found the perfect chauffeur for our family."
              rating={5}
            />
            <TestimonialCard
              name="Emma de Jager"
              role="Parent, Stellenbosch"
              content="Peace of mind knowing our home and pets are in trusted hands. Excellent service from start to finish."
              rating={5}
            />
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-bg-secondary to-bg-blush">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Want to work with Mieks & Match?</h2>
          <p className="text-lg text-gray-700 mb-8">
            Join our network of trusted providers and earn flexible income while helping families in Stellenbosch.
          </p>
          <Button
            size="lg"
            className="bg-bg-primary hover:bg-bg-accent text-white font-semibold"
          >
            Apply Now
          </Button>
        </div>
      </section>

      {/* BOTTOM SERVICE SELECTOR */}
      <BottomServiceSelector />
    </div>
  );
}
