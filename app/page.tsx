'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Heart, Brain, Ambulance, Globe, Smartphone, Activity, Users, TrendingUp, MapPin } from 'lucide-react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import SegmentCard from '@/components/SegmentCard';

export default function Home() {
  const segments = [
    {
      id: 'swasthpath',
      icon: Heart,
      title: 'SwasthPath',
      subtitle: 'The Pathway to Care',
      description: 'Simplifies access through multilingual app + SMS. Organizes queues, health records, and reports. Connects patients → ASHA workers → hospitals seamlessly.',
      color: 'from-emerald-500 to-teal-600',
      features: [
        'Multilingual App & SMS Support',
        'Queue Management System',
        'Digital Health Records',
        'ASHA Worker Integration',
        'Mobile Clinics & Outreach Services'
      ],
      link: '/swasthpath'
    },
    {
      id: 'arogyanet',
      icon: Brain,
      title: 'ArogyaNet',
      subtitle: 'The Intelligence Core',
      description: 'Collects, cleans, and learns from health data. Uses AI to classify patient cases and predict disease outbreaks for better resource planning.',
      color: 'from-blue-500 to-indigo-600',
      features: [
        'AI-Powered Case Classification',
        'Disease Outbreak Prediction',
        'Risk Zone Identification',
        'Smart Patient Routing',
        'Data-Driven Insights'
      ],
      link: '/arogyanet'
    },
    {
      id: 'jeevansetu',
      icon: Ambulance,
      title: 'JeevanSetu',
      subtitle: 'The Lifeline Network',
      description: 'One-tap/SMS SOS triggers AI dispatch to nearest hospital. Works on 2G and integrates existing ambulances with live tracking.',
      color: 'from-red-500 to-rose-600',
      features: [
        'One-Tap Emergency SOS',
        '2G Network Compatible',
        'Live Ambulance Tracking',
        'Smart AI Dispatch',
        'Accountability & Feedback'
      ],
      link: '/jeevansetu'
    }
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-teal-50">
      <Navbar />
      
      <HeroSection />

      {/* Main Segments Section */}
      <section className="section-padding">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-7xl mx-auto"
        >
          <div className="text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
            >
              Three Pillars of <span className="text-primary-600">SwasthPath</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl text-gray-600 max-w-3xl mx-auto"
            >
              One guides, one learns, one saves. A complete healthcare ecosystem for India.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {segments.map((segment, index) => (
              <SegmentCard key={segment.id} segment={segment} index={index} />
            ))}
          </div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="section-padding bg-gradient-to-r from-primary-600 to-primary-700 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { icon: Users, value: '10L+', label: 'Patients Connected' },
              { icon: Activity, value: '5000+', label: 'ASHA Workers' },
              { icon: Ambulance, value: '24/7', label: 'Emergency Response' },
              { icon: MapPin, value: '100+', label: 'Districts Covered' }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <stat.icon className="w-12 h-12 mx-auto mb-4" />
                <div className="text-4xl font-bold mb-2">{stat.value}</div>
                <div className="text-lg opacity-90">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              How <span className="text-primary-600">SwasthPath</span> Works
            </h2>
            <p className="text-xl text-gray-600">
              A seamless journey from access to emergency care
            </p>
          </motion.div>

          <div className="relative">
            <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-emerald-500 via-blue-500 to-red-500 transform -translate-x-1/2 hidden md:block" />
            
            {[
              {
                step: 1,
                title: 'Access Through SwasthPath',
                description: 'Patient books appointment via multilingual app or SMS. ASHA workers assist in remote areas.',
                icon: Heart,
                color: 'emerald'
              },
              {
                step: 2,
                title: 'AI Analysis by ArogyaNet',
                description: 'Symptoms and history analyzed by AI. Cases classified as General, Moderate, or Critical.',
                icon: Brain,
                color: 'blue'
              },
              {
                step: 3,
                title: 'Emergency via JeevanSetu',
                description: 'Critical cases trigger instant ambulance dispatch with live tracking and hospital alerts.',
                icon: Ambulance,
                color: 'red'
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`relative mb-12 md:mb-24 ${
                  index % 2 === 0 ? 'md:pr-1/2 md:text-right' : 'md:pl-1/2 md:ml-auto'
                } md:w-1/2`}
              >
                <div className={`bg-white rounded-2xl shadow-xl p-8 relative ${
                  index % 2 === 0 ? 'md:mr-12' : 'md:ml-12'
                }`}>
                  <div className={`absolute top-1/2 ${
                    index % 2 === 0 ? '-right-6 md:-right-8' : '-left-6 md:-left-8'
                  } transform -translate-y-1/2 w-12 h-12 md:w-16 md:h-16 rounded-full bg-${item.color}-500 flex items-center justify-center z-10 shadow-lg`}>
                    <item.icon className="w-6 h-6 md:w-8 md:h-8 text-white" />
                  </div>
                  <div className={`text-6xl font-bold text-${item.color}-100 mb-4`}>
                    {item.step}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-lg">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 text-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Transform Healthcare Access?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of healthcare providers and patients already using SwasthPath
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/swasthpath">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-primary-600 px-8 py-4 rounded-full font-semibold text-lg flex items-center gap-2 hover:shadow-2xl transition-all"
              >
                Get Started
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </Link>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-primary-600 transition-all"
            >
              Learn More
            </motion.button>
          </div>
        </motion.div>
      </section>

      <Footer />
    </main>
  );
}
