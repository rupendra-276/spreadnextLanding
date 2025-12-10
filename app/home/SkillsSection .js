"use client";
import React, { useState, useEffect } from "react";
import { RotateCcw, TrendingUp, Users } from "lucide-react";

const SkillsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeCard, setActiveCard] = useState(0);

  useEffect(() => {
    setIsVisible(true);

    // Auto-rotate cards every 4 seconds
    const interval = setInterval(() => {
      setActiveCard((prev) => (prev + 1) % 3);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const skillFeatures = [
    {
      icon: RotateCcw,
      title: "Skill Carousel",
      description:
        "Explore top skills in tech, product, design, business and marketing — rotating based on market data",
      gradient: "from-pink-400 to-red-400",
      bgGradient: "from-pink-50 to-red-50",
    },
    {
      icon: TrendingUp,
      title: "Skill Demand Heatmap",
      description:
        "Explore top skills in tech, product, design, business, and marketing — rotating based on market data",
      gradient: "from-orange-400 to-pink-400",
      bgGradient: "from-orange-50 to-pink-50",
    },
    {
      icon: Users,
      title: "Role-to-Skill Clustering",
      description:
        "Explore top skills in tech, product, design, business, and marketing — rotating based on market data",
      gradient: "from-red-400 to-pink-400",
      bgGradient: "from-red-50 to-pink-50",
    },
  ];

  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-red-400 via-pink-400 to-rose-500 py-20 px-4 sm:px-6 lg:px-8">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 bg-white rounded-full animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-white rounded-full animate-bounce delay-500"></div>
      </div>

      <div className="relative max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Content */}
          <div
            className={`space-y-8 transform transition-all duration-1000 ${
              isVisible
                ? "translate-x-0 opacity-100"
                : "-translate-x-10 opacity-0"
            }`}
          >
            <div className="space-y-6">
              <h2 className="text-5xl lg:text-6xl font-bold text-white leading-tight">
                Fuel Your Career with{" "}
                <span className="block text-yellow-200">
                  Skills That Matter
                </span>
              </h2>

              <p className="text-xl text-pink-100 leading-relaxed max-w-lg">
                Don't just learn more — learn right
              </p>
            </div>

            <button className="group bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white border border-white/30 px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl flex items-center space-x-3">
              <span>Start Your Skill Journey</span>
              <div className="transform group-hover:translate-x-1 transition-transform duration-300">
                →
              </div>
            </button>
          </div>

          {/* Right Side - Description and Cards */}
          <div
            className={`space-y-8 transform transition-all duration-1000 ${
              isVisible
                ? "translate-x-0 opacity-100"
                : "translate-x-10 opacity-0"
            }`}
          >
            {/* Description */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <p className="text-white text-lg leading-relaxed">
                At Spreads, our AI-powered system helps you discover the perfect
                skill combination for your next career move. Whether you're
                diving into design, jumping into AI, or growing in product
                management — we match real-time hiring data with your interests.
              </p>
            </div>

            {/* Professional Skill Feature Cards */}
            <div className="grid gap-6">
              {skillFeatures.map((feature, index) => {
                const IconComponent = feature.icon;
                const isActive = activeCard === index;

                return (
                  <div
                    key={index}
                    className={`group cursor-pointer transform transition-all duration-700 ${
                      isActive ? "scale-105" : "scale-100 hover:scale-102"
                    }`}
                    onClick={() => setActiveCard(index)}
                  >
                    <div
                      className={`bg-white/95 backdrop-blur-sm rounded-2xl p-8 shadow-2xl border border-white/50 hover:shadow-3xl transition-all duration-500 ${
                        isActive
                          ? "ring-2 ring-white/50 bg-white shadow-white/20"
                          : ""
                      }`}
                    >
                      <div className="flex items-start space-x-6">
                        <div className="flex-shrink-0">
                          <div
                            className={`w-20 h-20 bg-gradient-to-br ${
                              feature.gradient
                            } rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg ${
                              isActive ? "animate-pulse shadow-xl" : ""
                            }`}
                          >
                            <IconComponent className="w-10 h-10 text-white" />
                          </div>
                        </div>
                        <div className="flex-1 space-y-4">
                          <h3
                            className={`text-2xl font-bold transition-colors duration-300 ${
                              isActive
                                ? "text-pink-600"
                                : "text-gray-900 group-hover:text-pink-600"
                            }`}
                          >
                            {feature.title}
                          </h3>
                          <p className="text-gray-600 leading-relaxed text-lg">
                            {feature.description}
                          </p>
                        </div>

                        {/* Active Indicator */}
                        {isActive && (
                          <div className="flex-shrink-0">
                            <div className="w-4 h-4 bg-pink-500 rounded-full animate-pulse shadow-lg"></div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Card Navigation Dots */}
            <div className="flex justify-center space-x-3">
              {skillFeatures.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveCard(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    activeCard === index
                      ? "bg-white shadow-lg"
                      : "bg-white/40 hover:bg-white/60"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 right-10 w-20 h-20 bg-white/10 rounded-full animate-float"></div>
        <div className="absolute bottom-32 left-20 w-16 h-16 bg-white/10 rounded-full animate-float delay-1000"></div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .shadow-3xl {
          box-shadow: 0 35px 60px -12px rgba(0, 0, 0, 0.25);
        }
      `}</style>
    </div>
  );
};

export default SkillsSection;
