import React from 'react';
import { ArrowRight, BarChart3, Users, Target } from 'lucide-react';

const caseStudies = [
  {
    title: "E-commerce Revenue Growth",
    client: "Fashion Retailer",
    industry: "E-commerce",
    challenge: "Struggling with low online sales and poor conversion rates",
    solution: "Implemented comprehensive digital marketing strategy including SEO, PPC, and social media marketing",
    results: [
      "250% increase in online sales",
      "45% improvement in conversion rate",
      "68% reduction in customer acquisition cost"
    ],
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "B2B Lead Generation Success",
    client: "Tech Solutions Provider",
    industry: "Technology",
    challenge: "Needed to increase qualified B2B leads",
    solution: "Developed targeted content marketing and LinkedIn advertising campaign",
    results: [
      "300% increase in qualified leads",
      "52% reduction in cost per lead",
      "89% increase in LinkedIn engagement"
    ],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Local Business Expansion",
    client: "Restaurant Chain",
    industry: "Food & Beverage",
    challenge: "Wanted to expand market presence and increase foot traffic",
    solution: "Local SEO optimization and targeted social media campaigns",
    results: [
      "180% increase in foot traffic",
      "156% growth in online orders",
      "95% increase in social media followers"
    ],
    image: "https://images.unsplash.com/photo-1552566626-52f8b828add9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  }
];

export function CaseStudiesPage() {
  return (
    <div className="py-20">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl font-bold text-center mb-4">Case Studies</h1>
        <p className="text-gray-600 text-center mb-16 max-w-2xl mx-auto">
          Discover how we've helped businesses achieve remarkable growth through strategic digital marketing solutions.
        </p>

        <div className="space-y-20">
          {caseStudies.map((study, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="h-full">
                  <img 
                    src={study.image} 
                    alt={study.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-8">
                  <div className="mb-6">
                    <h2 className="text-2xl font-bold mb-2">{study.title}</h2>
                    <p className="text-purple-600 font-semibold">{study.client}</p>
                    <p className="text-gray-500">Industry: {study.industry}</p>
                  </div>
                  
                  <div className="mb-6">
                    <h3 className="font-semibold mb-2">Challenge</h3>
                    <p className="text-gray-600">{study.challenge}</p>
                  </div>
                  
                  <div className="mb-6">
                    <h3 className="font-semibold mb-2">Solution</h3>
                    <p className="text-gray-600">{study.solution}</p>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold mb-2">Results</h3>
                    <ul className="space-y-2">
                      {study.results.map((result, idx) => (
                        <li key={idx} className="flex items-center text-gray-600">
                          <ArrowRight className="w-4 h-4 mr-2 text-purple-600" />
                          {result}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-20 py-16 bg-gradient-to-r from-purple-600 to-indigo-700 rounded-lg text-white">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <BarChart3 className="w-12 h-12 mx-auto mb-4" />
              <div className="text-4xl font-bold mb-2">250%</div>
              <div className="text-purple-200">Average Revenue Growth</div>
            </div>
            <div>
              <Users className="w-12 h-12 mx-auto mb-4" />
              <div className="text-4xl font-bold mb-2">180%</div>
              <div className="text-purple-200">Lead Generation Increase</div>
            </div>
            <div>
              <Target className="w-12 h-12 mx-auto mb-4" />
              <div className="text-4xl font-bold mb-2">45%</div>
              <div className="text-purple-200">ROI Improvement</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}