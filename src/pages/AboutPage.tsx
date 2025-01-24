import React from 'react';
import { Target, Users, Zap, Award, ArrowRight } from 'lucide-react';

export function AboutPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-600 to-indigo-700 text-white py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold mb-6">Our Story</h1>
            <p className="text-xl mb-8">
              Founded by visionary leaders Keval Senghani and Priyank Soni, Quixcel started with one mission: to take the stress out of marketing. We believe that when businesses focus on what they do best, and leave the marketing to experts, everyone wins.
            </p>
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Our Leadership</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1556157382-97eda2d62296?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Keval Senghani"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">Keval Senghani</h3>
                <p className="text-purple-600 font-semibold mb-4">Co-founder</p>
                <p className="text-gray-600 mb-4">
                  A visionary leader with a passion for digital innovation and business growth. Keval brings strategic insight and entrepreneurial spirit to Quixcel's mission.
                </p>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1556157382-97eda2d62296?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Priyank Soni"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">Priyank Soni</h3>
                <p className="text-purple-600 font-semibold mb-4">Co-founder & CTO</p>
                <p className="text-gray-600 mb-4">
                  A technical innovator and strategic thinker, Priyank leads our technological initiatives and ensures we stay ahead of digital trends.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                icon: <Target className="w-10 h-10 text-purple-600" />,
                title: "Results-Driven",
                description: "We focus on delivering measurable results that impact your bottom line."
              },
              {
                icon: <Users className="w-10 h-10 text-purple-600" />,
                title: "Client-First",
                description: "Your success is our success. We're committed to your growth."
              },
              {
                icon: <Zap className="w-10 h-10 text-purple-600" />,
                title: "Innovation",
                description: "We stay ahead of trends to keep you competitive."
              },
              {
                icon: <Award className="w-10 h-10 text-purple-600" />,
                title: "Excellence",
                description: "We maintain the highest standards in everything we do."
              }
            ].map((value, index) => (
              <div key={index} className="text-center p-6 bg-white rounded-lg shadow-md">
                <div className="mb-4 flex justify-center">{value.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-8">Ready to Transform Your Marketing?</h2>
          <a href="/contact" className="bg-purple-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-purple-700 transition inline-flex items-center gap-2">
            Get Started Today <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </section>
    </div>
  );
}