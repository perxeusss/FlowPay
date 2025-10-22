import { HeroSection } from '@/components/Hero';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { featuresData, howItWorksData, statsData, testimonialsData } from '@/data/landing';
import { Link } from 'lucide-react';
import Image from 'next/image';

export default function Home() {
  return (
    <div className='mt-20'>
      <HeroSection />

      {/* Stats Section */}
      <section className='py-20 bg-gray-50'>
        <div className='max-w-7xl mx-auto px-4'>
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center'>
            {statsData.map((stat, index) => (
              <div key={index} className='space-y-2'>
                <div className='text-4xl font-bold text-blue-600'>{stat.value}</div>
                <div className='text-gray-600'>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className='py-20 bg-gray-100'>
        <div className='max-w-7xl mx-auto px-4 mb-12'>
          <h2 className='text-3xl md:text-4xl font-bold text-center mb-12'>
            Everything you need to manage your finances
          </h2>
        </div>
        <div className='max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {featuresData.map((feature, index) => (
            <Card
              key={index}
              className='p-6 hover:shadow-lg transition-transform duration-300 transform hover:-translate-y-1'
            >
              <CardContent className='space-y-4 pt-4 text-center'>
                <div className='mx-auto text-4xl'>{feature.icon}</div>
                <h3 className='text-xl font-semibold'>{feature.title}</h3>
                <p className='text-gray-600'>{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* How It Works Section */}
      <section className='py-20 bg-blue-50'>
        <div className='max-w-7xl mx-auto px-4 mb-12'>
          <h2 className='text-3xl md:text-4xl font-bold text-center mb-12'>How it works</h2>
        </div>
        <div className='max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 text-center'>
          {howItWorksData.map((step, index) => (
            <div key={index} className='mx-auto space-y-4'>
              <div className='w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto text-2xl'>
                {step.icon}
              </div>
              <h3 className='text-xl font-semibold'>{step.title}</h3>
              <p className='text-gray-600 px-4'>{step.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className='py-20 bg-gray-100'>
        <div className='max-w-7xl mx-auto px-4 mb-12'>
          <h2 className='text-3xl md:text-4xl font-bold text-center mb-12'>What our users say</h2>
        </div>
        <div className='max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8'>
          {testimonialsData.map((testimonial, index) => (
            <Card key={index} className='p-6 hover:shadow-lg transition'>
              <CardContent className='pt-4'>
                <div className='flex items-center mb-4'>
                  <Image
                    src={testimonial.image}
                    alt={`Avatar of ${testimonial.name}`}
                    width={40}
                    height={40}
                    className='rounded-full'
                    loading='lazy'
                  />
                  <div className='ml-4'>
                    <div className='font-semibold'>{testimonial.name}</div>
                    <div className='text-sm text-gray-600'>{testimonial.role}</div>
                  </div>
                </div>
                <p className='text-gray-600'>“{testimonial.quote}”</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className='py-20 bg-gradient-to-r from-blue-600 to-indigo-600'>
        <div className='max-w-3xl mx-auto px-4 text-center'>
          <h2 className='text-3xl md:text-4xl font-bold text-white mb-4'>
            Ready to Take Control of Your Finances?
          </h2>
          <p className='text-blue-100 mb-8'>
            Join thousands of users who are already managing their finances smarter with FlowPay
          </p>
          <Link href='/dashboard'>
            <Button className='bg-white text-blue-600 hover:bg-blue-50 hover:scale-105 transition transform px-6 py-3'>
              Start Free Trial
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}