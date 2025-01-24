import React from 'react';
import { 
  ShoppingBag, 
  Building2, 
  Utensils, 
  Stethoscope, 
  GraduationCap, 
  Car,
  ArrowRight 
} from 'lucide-react';

const industries = [
  {
    icon: <ShoppingBag className="w-12 h-12 text-purple-600" />,
    title: "E-commerce & Retail",
    description: "Drive online sales and improve conversion rates with our specialized e-commerce marketing solutions.",
    services: [
      "Shopping Campaign Optimization",
      "Conversion Rate Optimization",
      "Customer Journey Analysis",
      "Marketplace Strategy"
    ],
    image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    icon: <Building2 className="w-12 h-12 text-purple-600" />,
    title: "B2B & Technology",
    description: "Generate high-quality leads and establish thought leadership in the B2B technology space.",
    services: [
      "Lead Generation",
      "Account-Based Marketing",
      "Content Marketing",
      "LinkedIn Marketing"
    ],
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    icon: <Utensils className="w-12 h-12 text-purple-600" />,
    title: "Food & Hospitality",
    description: "Increase bookings and foot traffic with targeted local marketing strategies.",
    services: [
      "Local SEO",
      "Social Media Management",
      "Review Management",
      "Influencer Marketing"
    ],
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    icon: <Stethoscope className="w-12 h-12 text-purple-600" />,
    title: "Healthcare",
    description: "Build trust and attract patients with compliant healthcare marketing solutions.",
    services: [
      "HIPAA Compliant Marketing",
      "Patient Acquisition",
      "Healthcare SEO",
      "Reputation Management"
    ],
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    icon: <GraduationCap className="w-12 h-12 text-purple-600" />,
    title: "Education",
    description: "Attract students and increase enrollment with targeted education marketing.",
    services: [
      "Student Recruitment",
      "Social Media Marketing",
      "Content Strategy",
      "Virtual Events"
    ],
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    icon: <Car className="w-12 h-12 text-purple-600" />,
    title: "Automotive",
    description: "Drive showroom visits and leads with automotive digital marketing solutions.",
    services: [
      "Inventory Marketing",
      "Lead Generation",
      "Local SEO",
      "Social Media Advertising"
    ],
    image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  }
];

export function IndustriesPage() {
  return (
    <div className="py-20">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl font-bold text-center mb-4">Industries We Serve</h1>
        <p className="text-gray-600 text-center mb-16 max-w-2xl mx-auto">
          We specialize in delivering tailored marketing solutions across various industries, helping businesses achieve their unique goals.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((industry, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden group">
              <div className="h-48 overflow-hidden">
                <img 
                  src={industry.image} 
                  alt={industry.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <div className="mb-4">{industry.icon}</div>
                <h2 className="text-2xl font-bold mb-3">{industry.title}</h2>
                <p className="text-gray-600 mb-4">{industry.description}</p>
                <div className="mb-6">
                  <h3 className="font-semibold mb-2">Key Services:</h3>
                  <ul className="space-y-2">
                    {industry.services.map((service, idx) => (
                      <li key={idx} className="flex items-center text-gray-600">
                        <ArrowRight className="w-4 h-4 mr-2 text-purple-600" />
                        {service}
                      </li>
                    ))}
                  </ul>
                </div>
                <button className="text-purple-600 font-semibold flex items-center gap-2 group-hover:gap-3 transition-all">
                  Learn More <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center">
          <h2 className="text-3xl font-bold mb-8">Ready to Grow Your Business?</h2>
          <a href="/contact" className="bg-purple-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-purple-700 transition inline-flex items-center gap-2">
            Get Started Today <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </div>
  );
}