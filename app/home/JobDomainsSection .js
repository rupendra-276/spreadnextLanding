"use client";
import React, { useState, useEffect } from "react";
import {
  Code,
  Palette,
  TrendingUp,
  Briefcase,
  Users,
  Brain,
  DollarSign,
  Rocket,
  GraduationCap,
  Building,
  Cog,
  ArrowRight,
  Star,
  Sparkles,
  Search,
  Target,
  Award,
} from "lucide-react";
import Image from "next/image";

const JobDomainsSection = () => {
  const [selectedDomain, setSelectedDomain] = useState(null);
  const [hoveredDomain, setHoveredDomain] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  const jobDomains = [
    {
      id: 1,
      title: "Technology & Engineering",
      icon: Code,
      jobs: "15,000+ jobs",
      popular: true,
      description: "Software development, DevOps, Cybersecurity",
    },
    {
      id: 2,
      title: "Design & Creative",
      icon: Palette,
      jobs: "8,500+ jobs",
      description: "UI/UX, Graphic design, Content creation",
    },
    {
      id: 3,
      title: "Marketing & Growth",
      icon: TrendingUp,
      jobs: "12,000+ jobs",
      popular: true,
      description: "Digital marketing, SEO, Brand management",
    },
    {
      id: 4,
      title: "Business & Operations",
      icon: Briefcase,
      jobs: "10,200+ jobs",
      description: "Project management, Operations, Consulting",
    },
    {
      id: 5,
      title: "Sales & Customer Success",
      icon: Users,
      jobs: "9,800+ jobs",
      description: "Account management, Customer support",
    },
    {
      id: 6,
      title: "AI, Data & Research",
      icon: Brain,
      jobs: "7,500+ jobs",
      trending: true,
      description: "Machine learning, Data science, Analytics",
    },
  ];

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const selectDomain = (domainId) => {
    setSelectedDomain(selectedDomain === domainId ? null : domainId);
  };

  return (
    <section className="py-20 bg-gray-50 relative overflow-hidden">
      {/* Subtle background decorative elements */}
      {/* <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gray-200 rounded-full mix-blend-multiply filter blur-xl opacity-20"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-slate-200 rounded-full mix-blend-multiply filter blur-xl opacity-20"></div>
      </div> */}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
          {/* Left side image */}
          <div
            className={`lg:w-6/12  flex justify-start transform transition-all duration-1000 ${
              isVisible
                ? "translate-x-0 opacity-100"
                : "-translate-x-full opacity-0"
            }`}
          >
            <img
              src="/intershipjobs.png"
              alt="Job domains illustration"
              className="w-[300px] h-[250px] md:w-[600px] md:h-[500px] lg:w-[900px] lg:h-[700px] object-contain rounded-sm"
            />
          </div>

          {/* Right side - Content */}
          <div
            className={`lg:w-6/12 transform transition-all duration-1000 delay-300 ${
              isVisible
                ? "translate-x-0 opacity-100"
                : "translate-x-full opacity-0"
            }`}
          >
            {/* Header */}
            <div className="mb-8">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-5 leading-tight">
                Find the right job or internship with{" "}
                <span className="text-blue-600 relative">
                  trending domain for you
                </span>{" "}
              </h2>

              <p className="text-base text-gray-600 leading-relaxed max-w-2xl">
                Explore diverse career paths across industries and find
                opportunities that match your skills, interests, and career
                goals.
              </p>
            </div>

            {/* Professional Job Domain Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
              {jobDomains.map((domain, index) => {
                const Icon = domain.icon;
                const isSelected = selectedDomain === domain.id;
                return (
                  <div
                    key={domain.id}
                    className={`transform transition-all duration-300 delay-${
                      index * 50
                    }`}
                    style={{
                      transform: isVisible
                        ? "translateY(0)"
                        : "translateY(20px)",
                      opacity: isVisible ? 1 : 0,
                    }}
                  >
                    <button
                      onClick={() => selectDomain(domain.id)}
                      onMouseEnter={() => setHoveredDomain(domain.id)}
                      onMouseLeave={() => setHoveredDomain(null)}
                      className={`
                        relative w-full cursor-pointer p-4 rounded-xl border text-left transition-all duration-300 group
                        ${
                          isSelected
                            ? "bg-blue-600 text-white border-blue-600 shadow-lg"
                            : "bg-white text-gray-700 border-gray-200 hover:border-gray-300 hover:shadow-md"
                        }
                      `}
                    >
                      {/* Professional badges */}
                      {domain.popular && (
                        <div className="absolute top-2 right-2 bg-green-100 text-green-700 text-xs px-2 py-1 rounded-full font-medium">
                          <Star className="w-2.5 h-2.5 inline mr-1" />
                          Popular
                        </div>
                      )}
                      {domain.trending && (
                        <div className="absolute top-2 right-2 bg-orange-100 text-orange-700 text-xs px-2 py-1 rounded-full font-medium">
                          <Sparkles className="w-2.5 h-2.5 inline mr-1" />
                          Trending
                        </div>
                      )}

                      <div className="relative z-10">
                        <div className="flex items-start justify-between mb-3">
                          <div
                            className={`
                            p-2.5 rounded-lg transition-all duration-300
                            ${
                              isSelected
                                ? "bg-white bg-opacity-20"
                                : "bg-blue-600"
                            }
                          `}
                          >
                            <Icon
                              className={`w-5 h-5 ${
                                isSelected ? "text-blue-500" : "text-white"
                              }`}
                            />
                          </div>

                          {isSelected && (
                            <div className="w-6 h-6 bg-gray-300 bg-opacity-25 rounded-full flex items-center justify-center">
                              <div className="w-2.5 h-2.5 bg-white rounded-full"></div>
                            </div>
                          )}
                        </div>

                        <h3 className="font-semibold text-sm lg:text-lg mb-2 leading-tight">
                          {domain.title}
                        </h3>

                        <p
                          className={`text-xs mb-3 ${
                            isSelected
                              ? "text-white text-opacity-90"
                              : "text-gray-500"
                          }`}
                        >
                          {domain.description}
                        </p>

                        <div className="flex items-center justify-between">
                          <span
                            className={`text-xs font-medium ${
                              isSelected
                                ? "text-white text-opacity-80"
                                : "text-gray-500"
                            }`}
                          >
                            {domain.jobs}
                          </span>

                          <ArrowRight
                            className={`w-3.5 h-3.5 transition-transform duration-300 ${
                              isSelected ? "text-white" : "text-gray-400"
                            }`}
                          />
                        </div>
                      </div>
                    </button>
                  </div>
                );
              })}
            </div>

            {/* Selected domain CTA */}
            {selectedDomain && (
              <div className="p-5 bg-white rounded-xl border border-gray-200 shadow-sm animate-fade-in">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                      <Sparkles className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-800">
                        Domain selected
                      </p>
                      <p className="text-sm text-gray-600 mt-1">
                        Ready to explore personalized opportunities?
                      </p>
                    </div>
                  </div>
                  <button className="bg-blue-600 text-white px-6 py-2.5 rounded-lg cursor-pointer font-medium hover:bg-blue-700 transition-colors duration-300 flex items-center gap-2 group">
                    Explore Jobs
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </button>
                </div>
              </div>
            )}

            {/* No domain selected state */}
            {!selectedDomain && (
              <div className="text-center p-5 bg-white rounded-xl border border-gray-100 shadow-sm">
                <p className="text-gray-600 mb-3">
                  Select a domain that interests you to get started
                </p>
                <div className="flex justify-center gap-2">
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                  <div
                    className="w-2 h-2 bg-gray-500 rounded-full animate-bounce"
                    style={{ animationDelay: "0.2s" }}
                  ></div>
                  <div
                    className="w-2 h-2 bg-gray-600 rounded-full animate-bounce"
                    style={{ animationDelay: "0.4s" }}
                  ></div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.5s ease-out;
        }
      `}</style>
    </section>
  );
};

export default JobDomainsSection;
