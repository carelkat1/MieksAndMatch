import Image from 'next/image';
import { Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import BottomServiceSelector from '@/components/home/bottom-service-selector';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#FFE4EC] to-[#FFF0F5]">
      {/* HERO SECTION */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left side */}
            <div>
              <h2 className="text-sm font-semibold text-gray-700 mb-4">SAY HELLO TO:</h2>

              <div className="mb-8">
                <Image
                  src="https://mieksandmatch.com/wp-content/uploads/2025/08/SayHello3.png"
                  alt="Say Hello Logo"
                  width={200}
                  height={100}
                  unoptimized
                  priority
                  className="h-auto"
                />
              </div>

              <p className="text-xl sm:text-2xl font-bold text-gray-800 mb-4">
                Your New Go-To Bestie for all things recruitment
              </p>

              <p className="text-gray-700 mb-8">
                Whether you&apos;re looking for an au pair, tutor, babysitter, chauffeur, or house &amp; pet sitters, we&apos;ve got you covered.
              </p>

              {/* Feature Pills */}
              <div className="space-y-3">
                {[
                  'Reliable & Trustworthy',
                  'Personalized Matching',
                  'Screened Candidates',
                  'Efficient & Professional',
                  'Winelands Local Network'
                ].map((feature) => (
                  <div
                    key={feature}
                    className="inline-block bg-[#FDE7ED] text-gray-800 px-4 py-2 rounded-full text-sm font-medium mr-2 mb-2"
                  >
                    <span className="text-[#FF5757] mr-2">✓</span>{feature}
                  </div>
                ))}
              </div>
            </div>

            {/* Right side - Mieke photo */}
            <div className="flex justify-center lg:justify-end">
              <Image
                src="/images/HL1_5378.jpg"
                alt="Mieke"
                width={400}
                height={600}
                unoptimized
                priority
                className="rounded-lg shadow-lg max-w-sm w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-[#FF5757] text-center mb-12">SERVICES WE OFFER:</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Au Pair Card */}
            <div className="bg-gradient-to-br from-[#FFD4E5] to-[#DBA5B8] rounded-lg p-8 flex flex-col items-center text-center">
              <Image
                src="https://mieksandmatch.com/wp-content/uploads/2025/08/AP3.png"
                alt="Au Pair"
                width={150}
                height={150}
                unoptimized
                className="mb-6 h-auto"
              />
              <h3 className="text-xl font-bold text-gray-800 mb-3">Au Pair</h3>
              <p className="text-gray-700">Full-time or part-time childcare and household help from experienced, screened au pairs.</p>
            </div>

            {/* Chauffeur Card */}
            <div className="bg-gradient-to-br from-[#FFD4E5] to-[#DBA5B8] rounded-lg p-8 flex flex-col items-center text-center">
              <Image
                src="https://mieksandmatch.com/wp-content/uploads/2025/08/CH4.png"
                alt="Chauffeur"
                width={150}
                height={150}
                unoptimized
                className="mb-6 h-auto"
              />
              <h3 className="text-xl font-bold text-gray-800 mb-3">Chauffeur</h3>
              <p className="text-gray-700">Reliable drivers for school runs, airport transfers, and family transportation.</p>
            </div>

            {/* House & Pet Sitters Card */}
            <div className="bg-gradient-to-br from-[#FFD4E5] to-[#DBA5B8] rounded-lg p-8 flex flex-col items-center text-center">
              <Image
                src="https://mieksandmatch.com/wp-content/uploads/2025/08/HP3.png"
                alt="House & Pet Sitters"
                width={150}
                height={150}
                unoptimized
                className="mb-6 h-auto"
              />
              <h3 className="text-xl font-bold text-gray-800 mb-3">House & Pet Sitters</h3>
              <p className="text-gray-700">Trustworthy care for your home and pets while you&apos;re away or busy.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Mieke photo */}
            <div className="flex justify-center">
              <div className="relative w-80 h-80">
                <Image
                  src="/images/HL1_5134.jpg"
                  alt="Mieke at work"
                  width={320}
                  height={320}
                  unoptimized
                  className="rounded-full w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Right side - Bio */}
            <div>
              <h2 className="text-4xl font-bold text-[#FF5757] mb-6">More About Mieke</h2>
              <p className="text-gray-800 mb-4 leading-relaxed">
                Hi, I&apos;m Mieke, and I&apos;m passionate about connecting families with the right help they need. After years of working in recruitment and understanding both employer and employee needs, I realized there was a gap in the market for quality, personalized placement services in the Winelands.
              </p>
              <p className="text-gray-800 mb-4 leading-relaxed">
                My mission is simple: to make finding reliable childcare, household help, and other services stress-free and trustworthy. Every person in our network is carefully screened, verified, and matched based on your family&apos;s specific needs and values.
              </p>
              <p className="text-gray-800 leading-relaxed">
                I believe in building lasting relationships between families and service providers, ensuring everyone is happy, supported, and thriving. If you&apos;re looking for that perfect addition to your family&apos;s support system, you&apos;ve come to the right place.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* REVIEWS SECTION */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-[#FF5757] text-center mb-12">What Our Clients Say</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Review 1 */}
            <div className="bg-white rounded-lg p-8 shadow-md">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={20} className="fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-800 mb-6 italic">
                &quot;Mieke&apos;s service has been absolutely incredible. Finding the right au pair was seamless and stress-free. I couldn&apos;t recommend her enough!&quot;
              </p>
              <p className="font-bold text-gray-900">Rochelle</p>
            </div>

            {/* Review 2 */}
            <div className="bg-white rounded-lg p-8 shadow-md">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={20} className="fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-800 mb-6 italic">
                &quot;The screening process is thorough and professional. We felt completely confident in our choice. Best decision ever!&quot;
              </p>
              <p className="font-bold text-gray-900">Denise</p>
            </div>

            {/* Review 3 */}
            <div className="bg-white rounded-lg p-8 shadow-md">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={20} className="fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-800 mb-6 italic">
                &quot;I&apos;ve used Mieke&apos;s service multiple times and every experience has been exceptional. Highly trustworthy and professional.&quot;
              </p>
              <p className="font-bold text-gray-900">Aryna</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Ready to find your perfect match?</h2>
          <p className="text-lg text-gray-700 mb-10">
            Join hundreds of families who trust Mieks &amp; Match for their recruitment needs.
          </p>
          <Button
            size="lg"
            className="bg-[#FF5757] hover:bg-[#FF3333] text-white font-semibold px-8 py-3 text-lg"
          >
            Book Your Service Today
          </Button>
        </div>
      </section>

      {/* BOTTOM SERVICE SELECTOR */}
      <BottomServiceSelector />
    </div>
  );
}
