import React from 'react';
import { Search, Target, Users, Mail, Globe, MessageSquare, ArrowRight } from 'lucide-react';

const services = [
  {
    icon: <Search className="w-12 h-12 text-purple-600" />,
    title: "SEO Optimization",
    description: "Boost your visibility and attract qualified organic traffic with our data-driven SEO strategies. We focus on sustainable growth through technical optimization, content strategy, and quality link building.",
    features: [
      "Technical SEO Audit",
      "Keyword Research & Strategy",
      "On-Page Optimization",
      "Content Strategy",
      "Link Building",
      "Performance Tracking"
    ]
  },
  {
    icon: <Target className="w-12 h-12 text-purple-600" />,
    title: "PPC Advertising",
    description: "Maximize your ROI with targeted paid advertising campaigns across multiple platforms. Our PPC experts create and optimize campaigns that drive conversions while minimizing cost per acquisition.",
    features: [
      "Campaign Strategy",
      "Ad Copy Creation",
      "Audience Targeting",
      "Bid Management",
      "A/B Testing",
      "Performance Analytics"
    ]
  },
  {
    icon: <Users className="w-12 h-12 text-purple-600" />,
    title: "Social Media Marketing",
    description: "Build a strong social media presence that engages your audience and drives brand loyalty. We create compelling content and manage your social media channels to grow your following.",
    features: [
      "Content Calendar",
      "Community Management",
      "Paid Social Campaigns",
      "Influencer Partnerships",
      "Analytics & Reporting",
      "Brand Voice Development"
    ]
  },
  {
    icon: <Mail className="w-12 h-12 text-purple-600" />,
    title: "Lead Generation",
    description: "Convert visitors into valuable business opportunities with our comprehensive lead generation strategies. We help you attract and nurture qualified leads that are ready to convert.",
    features: [
      "Lead Magnet Creation",
      "Landing Page Optimization",
      "Email Marketing",
      "Marketing Automation",
      "Lead Scoring",
      "CRM Integration"
    ]
  },
  {
    icon: <Globe className="w-12 h-12 text-purple-600" />,
    title: "Content Marketing",
    description: "Create valuable content that resonates with your audience and drives engagement. Our content marketing strategies help establish your brand as an industry authority.",
    features: [
      "Content Strategy",
      "Blog Writing",
      "Whitepaper Creation",
      "Case Studies",
      "Video Content",
      "Content Distribution"
    ]
  },
  {
    icon: <MessageSquare className="w-12 h-12 text-purple-600" />,
    title: "Brand Development",
    description: "Build a strong, memorable brand identity that sets you apart from the competition. We help you develop a cohesive brand strategy that resonates with your target audience.",
    features: [
      "Brand Strategy",
      "Visual Identity",
      "Brand Guidelines",
      "Voice & Messaging",
      "Brand Collateral",
      "Brand Monitoring"
    ]
  }
];

export function ServicesPage() {
  return (
    <div className="py-20">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl font-bold text-center mb-4">Our Services</h1>
        <p className="text-gray-600 text-center mb-16 max-w-2xl mx-auto">
          Comprehensive digital marketing solutions tailored to your business needs. Each service is designed to deliver measurable results and drive growth.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-8 hover:shadow-lg transition">
              <div className="mb-6">{service.icon}</div>
              <h2 className="text-2xl font-bold mb-4">{service.title}</h2>
              <p className="text-gray-600 mb-6">{service.description}</p>
              <div className="mb-6">
                <h3 className="font-semibold mb-3">Key Features:</h3>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-600">
                      <ArrowRight className="w-4 h-4 mr-2 text-purple-600" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <button className="w-full bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-700 transition flex items-center justify-center gap-2">
                Learn More <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}