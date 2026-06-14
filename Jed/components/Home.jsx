"use client";

import React, { useState, useEffect } from "react";
import { ChevronRight, Mail, Phone, MapPin, Star, Plane, BookOpen, Target, FileCheck } from "lucide-react";

const Home = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [filteredCourses, setFilteredCourses] = useState([]);

  const courses = [
    { id: 1, category: "professional", title: "Advanced JavaScript", duration: "12 weeks", level: "Intermediate" },
    { id: 2, category: "development", title: "React Mastery", duration: "10 weeks", level: "Intermediate" },
    { id: 3, category: "professional", title: "Business Analytics", duration: "8 weeks", level: "Beginner" },
    { id: 4, category: "visa", title: "IELTS Preparation", duration: "6 weeks", level: "Beginner" },
    { id: 5, category: "development", title: "Full Stack Development", duration: "16 weeks", level: "Intermediate" },
    { id: 6, category: "visa", title: "Visa Consultation", duration: "2 weeks", level: "Beginner" },
  ];

  useEffect(() => {
    if (activeFilter === "all") {
      setFilteredCourses(courses);
    } else {
      setFilteredCourses(courses.filter((course) => course.category === activeFilter));
    }
  }, [activeFilter]);

  const services = [
    {
      title: "Visa Consultation",
      description: "Expert guidance for student and work visas to top destinations worldwide.",
      icon: Plane,
    },
    {
      title: "Professional Courses",
      description: "Industry-recognized certification programs designed for career advancement.",
      icon: BookOpen,
    },
    {
      title: "Career Counseling",
      description: "Personalized guidance to achieve your professional goals and aspirations.",
      icon: Target,
    },
    {
      title: "Application Support",
      description: "Complete assistance with applications to universities and job placements.",
      icon: FileCheck,
    },
  ];

  const visaSteps = [
    { step: "01", title: "Initial Consultation", description: "Discuss your goals and explore options" },
    { step: "02", title: "Document Preparation", description: "Prepare all required documentation" },
    { step: "03", title: "Application Filing", description: "Submit applications to institutions" },
    { step: "04", title: "Visa Approval", description: "Receive visa and plan your journey" },
  ];

  const testimonials = [
    {
      quote: "The guidance I received was invaluable. Now I'm studying at my dream university!",
      author: "Sarah Khan",
      role: "Student, UK",
      rating: 5,
    },
    {
      quote: "Professional courses helped me transition to tech. Best investment ever!",
      author: "Rahul Sharma",
      role: "Software Engineer",
      rating: 5,
    },
    {
      quote: "Exceptional service and support throughout my visa journey.",
      author: "Aisha Patel",
      role: "Student, Canada",
      rating: 5,
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section id="hero" className="relative min-h-screen bg-white pt-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 items-stretch min-h-[85vh]">
            {/* Left Side */}
            <div className="flex flex-col justify-center bg-black rounded-2xl p-8 md:p-14 lg:p-20 animate-slide-in-left">
              <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-red-500">
                Your one stop destination
              </p>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight tracking-tight text-white">
                Your
                <br />
                Gateway to
                <br />
                <span className="text-red-600">Global Success</span>
              </h1>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-white/80 md:text-lg">
                Expert visa consultancy and world-class professional courses to accelerate your career. We transform ambitions into achievements across borders.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <button className="bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-8 rounded-lg transition duration-300 hover:scale-105 transform cursor-pointer">
                  Explore Courses
                </button>
                <button className="border-2 border-white/60 hover:bg-white hover:text-black text-white font-semibold py-3 px-8 rounded-lg transition duration-300 hover:scale-105 transform cursor-pointer">
                  Visa Services
                </button>
              </div>
            </div>

            {/* Right Side */}
            <div className="relative bg-linear-to-br from-red-600 via-red-500 to-black rounded-2xl overflow-hidden animate-slide-in-right">
              <div className="absolute inset-0 opacity-20">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.3),transparent_50%)]" />
              </div>
              <div className="relative h-full flex flex-col justify-end p-8 md:p-10">
                <div className="rounded-lg border border-white/20 bg-black/40 backdrop-blur-md px-6 py-5 w-fit animate-scale-in">
                  <p className="text-xs uppercase tracking-[0.18em] text-white/70 font-semibold">
                    Trusted by global aspirants
                  </p>
                  <p className="mt-2 text-3xl font-bold text-white">10K+ Success Stories</p>
                </div>
              </div>
            </div>
          </div>

          {/* Stats Bar */}
          <div className="mt-12 grid grid-cols-3 gap-6 text-center py-8 border-t border-b border-gray-200 animate-fade-in-up">
            <div className="stagger-item">
              <p className="text-3xl md:text-4xl font-bold text-black">500+</p>
              <p className="text-sm md:text-base text-gray-600 mt-2">Partner Universities</p>
            </div>
            <div className="stagger-item">
              <p className="text-3xl md:text-4xl font-bold text-red-600">95%</p>
              <p className="text-sm md:text-base text-gray-600 mt-2">Success Rate</p>
            </div>
            <div className="stagger-item">
              <p className="text-3xl md:text-4xl font-bold text-black">25+</p>
              <p className="text-sm md:text-base text-gray-600 mt-2">Years Experience</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-red-600 mb-4">OUR SERVICES</p>
            <h2 className="text-3xl md:text-5xl font-extrabold text-black mb-4">What We Offer</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive solutions tailored to help you succeed globally
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div
                  key={index}
                  className="group bg-white rounded-xl p-8 border border-gray-200 hover:border-red-600 hover:shadow-xl transition duration-300 cursor-pointer stagger-item hover:scale-105 transform"
                >
                  <IconComponent className="w-12 h-12 text-red-600 mb-4 group-hover:scale-110 transition" />
                  <h3 className="text-xl font-bold text-black mb-3 group-hover:text-red-600 transition">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  <div className="inline-flex items-center text-red-600 font-semibold group-hover:translate-x-2 transition">
                    Learn More <ChevronRight className="w-4 h-4 ml-2" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Visa Process Section */}
      <section id="visa" className="py-20 bg-black text-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-red-600 mb-4">VISA PROCESS</p>
            <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-4">
              Your Journey to Success
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {visaSteps.map((item, index) => (
              <div key={index} className="relative group stagger-item">
                <div className="bg-white/10 hover:bg-red-600/20 rounded-xl p-8 transition duration-300 h-full hover:scale-105 transform">
                  <div className="text-5xl font-bold text-red-600 mb-4">{item.step}</div>
                  <h4 className="text-xl font-bold mb-3">{item.title}</h4>
                  <p className="text-white/70">{item.description}</p>
                </div>
                {index < visaSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <ChevronRight className="w-8 h-8 text-red-600" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section id="courses" className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-red-600 mb-4">EXPLORE COURSES</p>
            <h2 className="text-3xl md:text-5xl font-extrabold text-black mb-4">
              Learn and Grow
            </h2>
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {["all", "professional", "development", "visa"].map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-6 py-2 rounded-full font-semibold transition duration-300 ${
                  activeFilter === filter
                    ? "bg-red-600 text-white"
                    : "bg-gray-200 text-black hover:bg-gray-300"
                }`}
              >
                {filter.charAt(0).toUpperCase() + filter.slice(1)}
              </button>
            ))}
          </div>

          {/* Courses Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCourses.map((course) => (
              <div
                key={course.id}
                className="group bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-xl hover:border-red-600 transition duration-300 cursor-pointer stagger-item hover:scale-105 transform"
              >
                <div className="relative h-48 bg-linear-to-br from-red-600 to-black overflow-hidden">
                  <div className="absolute top-4 right-4 bg-red-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {course.level}
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-red-600 font-semibold text-sm mb-2">{course.category.toUpperCase()}</p>
                  <h3 className="text-xl font-bold text-black mb-3 group-hover:text-red-600 transition">
                    {course.title}
                  </h3>
                  <div className="flex items-center justify-between text-gray-600 text-sm">
                    <span>⏱️ {course.duration}</span>
                  </div>
                  <button className="mt-4 w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-2 rounded-lg transition duration-300 cursor-pointer">
                    View Course
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-red-600 mb-4">TESTIMONIALS</p>
            <h2 className="text-3xl md:text-5xl font-extrabold text-black mb-4">
              What Our Clients Say
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-xl p-8 border border-gray-200 hover:border-red-600 transition duration-300 stagger-item hover:scale-105 transform">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 text-lg italic">"{testimonial.quote}"</p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-red-600 to-black rounded-full flex items-center justify-center text-white font-bold">
                    {testimonial.author.charAt(0)}
                  </div>
                  <div className="ml-4">
                    <p className="font-bold text-black">{testimonial.author}</p>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-black text-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-red-600 mb-4">GET IN TOUCH</p>
              <h2 className="text-3xl md:text-5xl font-extrabold mb-8">Contact Us</h2>
              <p className="text-white/80 text-lg mb-8">
                Have questions? Our expert team is ready to help you achieve your goals.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <Phone className="w-6 h-6 text-red-600 mt-1 shrink-0" />
                  <div>
                    <p className="font-semibold text-white">Phone</p>
                    <p className="text-white/70">+1 (555) 123-4567</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Mail className="w-6 h-6 text-red-600 mt-1 shrink-0" />
                  <div>
                    <p className="font-semibold text-white">Email</p>
                    <p className="text-white/70">info@jedcms.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-red-600 mt-1 shrink-0" />
                  <div>
                    <p className="font-semibold text-white">Location</p>
                    <p className="text-white/70">Shilong, Meghalaya</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white/10 rounded-xl p-8 backdrop-blur-sm border border-white/20">
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-white mb-2">Full Name</label>
                  <input
                    type="text"
                    className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:border-red-600 transition"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-white mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:border-red-600 transition"
                    placeholder="Your email"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-white mb-2">Message</label>
                  <textarea
                    className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:border-red-600 transition h-32 resize-none"
                    placeholder="Your message"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-3 rounded-lg transition duration-300 cursor-pointer"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
