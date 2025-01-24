import React from 'react';
import { 
  Rocket, 
  BarChart3, 
  Search, 
  Mail, 
  Instagram, 
  Facebook,
  Globe,
  ArrowRight,
  Users,
  Target,
  Zap,
  Clock,
  Award,
  MessageSquare
} from 'lucide-react';

export function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <header className="bg-gradient-to-r from-purple-600 to-indigo-700 text-white">
        <div className="container mx-auto px-6 py-24">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold mb-6">Marketing Excellence, Made Simple</h1>
            <p className="text-xl mb-8">We handle your marketing and lead generation, so you can focus on what matters—growing your business.</p>
            <div className="flex gap-4">
              <button className="bg-white text-purple-600 px-8 py-3 rounded-full font-semibold hover:bg-purple-50 transition flex items-center gap-2">
                Get Started Today <ArrowRight className="w-5 h-5" />
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white/10 transition">
                Explore Our Services
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-4">Why Choose Quixcel?</h2>
          <p className="text-gray-600 text-center mb-16 max-w-2xl mx-auto">While you rest, we excel. Our team of experts delivers creative, results-driven marketing campaigns that move at the speed of your vision.</p>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                icon: <Zap className="w-10 h-10 text-purple-600" />,
                title: "Tailored Strategies",
                description: "Custom marketing solutions designed for your industry and goals."
              },
              {
                icon: <BarChart3 className="w-10 h-10 text-purple-600" />,
                title: "Data-Driven",
                description: "Analytics-backed campaigns to maximize your ROI."
              },
              {
                icon: <Clock className="w-10 h-10 text-purple-600" />,
                title: "Time-Saving",
                description: "Focus on your core business while we handle your marketing."
              },
              {
                icon: <Award className="w-10 h-10 text-purple-600" />,
                title: "Proven Results",
                description: "Track record of delivering measurable growth."
              }
            ].map((feature, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition text-center">
                <div className="mb-4 flex justify-center">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-16">Our Services</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Search className="w-10 h-10 text-purple-600" />,
                title: "SEO Optimization",
                description: "Boost your visibility and attract qualified organic traffic."
              },
              {
                icon: <Target className="w-10 h-10 text-purple-600" />,
                title: "PPC Advertising",
                description: "Strategic paid campaigns that deliver measurable ROI."
              },
              {
                icon: <Users className="w-10 h-10 text-purple-600" />,
                title: "Social Media Marketing",
                description: "Engage your audience and build brand loyalty."
              },
              {
                icon: <Mail className="w-10 h-10 text-purple-600" />,
                title: "Lead Generation",
                description: "Convert visitors into valuable business opportunities."
              },
              {
                icon: <Globe className="w-10 h-10 text-purple-600" />,
                title: "Content Marketing",
                description: "Compelling content that resonates with your audience."
              },
              {
                icon: <MessageSquare className="w-10 h-10 text-purple-600" />,
                title: "Brand Development",
                description: "Build a strong, memorable brand identity."
              }
            ].map((service, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-lg hover:shadow-md transition group">
                <div className="mb-4 transform group-hover:scale-110 transition-transform">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <a href="#contact" className="text-purple-600 font-semibold flex items-center gap-2 group-hover:gap-3 transition-all">
                  Learn More <ArrowRight className="w-5 h-5" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-indigo-700 text-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">1000+</div>
              <div className="text-purple-200">Businesses Served</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">15K+</div>
              <div className="text-purple-200">Leads Generated</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">98%</div>
              <div className="text-purple-200">Client Satisfaction</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">5M+</div>
              <div className="text-purple-200">Ad Impressions</div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-16">What Our Clients Say</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                quote: "Quixcel transformed our online presence. Their data-driven approach helped us achieve record-breaking growth.",
                author: "Sarah Johnson",
                role: "CEO, TechStart Inc."
              },
              {
                quote: "The team at Quixcel truly understands digital marketing. They've been instrumental in our success.",
                author: "Michael Chen",
                role: "Marketing Director, GrowthCo"
              },
              {
                quote: "Working with Quixcel was the best decision we made. Our lead generation has increased by 300%.",
                author: "Emily Rodriguez",
                role: "Founder, InnovateX"
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-sm">
                <p className="text-gray-600 mb-6 italic">"{testimonial.quote}"</p>
                <div>
                  <p className="font-semibold">{testimonial.author}</p>
                  <p className="text-gray-500 text-sm">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">Ready to Excel?</h2>
            <p className="text-gray-600 mb-8">Schedule your free 30-minute strategy session and discover how Quixcel can transform your marketing efforts.</p>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 outline-none transition"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 outline-none transition"
              />
              <select className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 outline-none transition">
                <option value="">Select a Service</option>
                <option value="seo">SEO Optimization</option>
                <option value="ppc">PPC Advertising</option>
                <option value="social">Social Media Marketing</option>
                <option value="leads">Lead Generation</option>
                <option value="content">Content Marketing</option>
                <option value="brand">Brand Development</option>
              </select>
              <button className="w-full bg-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-purple-700 transition flex items-center justify-center gap-2">
                Schedule Your Free Strategy Session <ArrowRight className="w-5 h-5" />
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}