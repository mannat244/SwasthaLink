'use client';

import { motion } from 'framer-motion';
import { 
  Ambulance,
  Phone,
  MapPin,
  Clock,
  Radio,
  Shield,
  Zap,
  Navigation,
  Heart,
  AlertCircle,
  CheckCircle,
  Users,
  Star,
  MessageSquare
} from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { useState } from 'react';

export default function JeevanSetu() {
  const [tracking, setTracking] = useState(false);

  const features = [
    {
      icon: Phone,
      title: 'One-Tap SOS',
      description: 'Emergency button triggers instant ambulance dispatch with location sharing',
      color: 'red'
    },
    {
      icon: MessageSquare,
      title: 'SMS Emergency',
      description: 'Send SOS via SMS from any phone - works even on 2G networks',
      color: 'orange'
    },
    {
      icon: Radio,
      title: '2G Compatible',
      description: 'Works in remotest villages with basic network connectivity',
      color: 'yellow'
    },
    {
      icon: Zap,
      title: 'AI Dispatch',
      description: 'Intelligent routing to nearest available ambulance based on real-time data',
      color: 'purple'
    },
    {
      icon: Navigation,
      title: 'Live Tracking',
      description: 'Real-time ambulance location and ETA tracking for patient and family',
      color: 'blue'
    },
    {
      icon: Shield,
      title: 'Accountability',
      description: 'Feedback system and performance monitoring for quality assurance',
      color: 'green'
    }
  ];

  const responseSteps = [
    {
      step: 1,
      title: 'Emergency Triggered',
      description: 'Patient or family member presses SOS button or sends SMS',
      time: '0 sec',
      icon: AlertCircle
    },
    {
      step: 2,
      title: 'AI Processing',
      description: 'ArogyaNet classifies urgency, location verified, nearest hospital alerted',
      time: '5 sec',
      icon: Zap
    },
    {
      step: 3,
      title: 'Ambulance Dispatched',
      description: 'Nearest available ambulance assigned with patient details and location',
      time: '15 sec',
      icon: Ambulance
    },
    {
      step: 4,
      title: 'Live Tracking Active',
      description: 'Family receives tracking link, hospital prepares for arrival',
      time: '30 sec',
      icon: Navigation
    }
  ];

  const stats = [
    { label: 'Avg Response Time', value: '8 min', icon: Clock },
    { label: 'Success Rate', value: '97%', icon: CheckCircle },
    { label: 'Lives Saved', value: '15K+', icon: Heart },
    { label: 'Network Coverage', value: '100+', icon: MapPin },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-red-50 via-rose-50 to-pink-50">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute bg-red-500 rounded-full"
              style={{
                width: Math.random() * 200 + 50,
                height: Math.random() * 200 + 50,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.2, 0.5, 0.2],
              }}
              transition={{
                duration: Math.random() * 4 + 4,
                repeat: Infinity,
                repeatType: 'reverse',
              }}
            />
          ))}
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, type: 'spring' }}
              className="inline-block mb-6"
            >
              <div className="w-24 h-24 bg-gradient-to-br from-red-500 to-rose-600 rounded-3xl flex items-center justify-center shadow-2xl">
                <Ambulance className="w-12 h-12 text-white" />
              </div>
            </motion.div>

            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
              <span className="text-red-600">JeevanSetu</span>
              <br />
              <span className="text-3xl md:text-4xl text-gray-700">The Lifeline Network</span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-4xl mx-auto">
              When every second counts. One-tap emergency response connecting you to the nearest 
              ambulance, even from the remotest corners of India.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-red-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-red-700 transition-colors shadow-xl flex items-center gap-2 mx-auto sm:mx-0"
              >
                <Phone className="w-6 h-6" />
                Emergency: 1800-XXX-XXXX
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setTracking(!tracking)}
                className="border-2 border-red-600 text-red-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-red-600 hover:text-white transition-all mx-auto sm:mx-0"
              >
                Track Ambulance
              </motion.button>
            </div>

            {/* Stats Bar */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white/80 backdrop-blur-sm rounded-xl p-4 shadow-lg"
                >
                  <stat.icon className="w-8 h-8 text-red-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Emergency Response Demo */}
      {tracking && (
        <motion.section
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="py-12 bg-gradient-to-r from-red-600 to-rose-600 text-white"
        >
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
                <Ambulance className="w-12 h-12 mb-3" />
                <h4 className="text-xl font-bold mb-2">Ambulance Status</h4>
                <p className="text-lg">On the way</p>
                <p className="text-sm opacity-75">Vehicle: DL-12-AB-1234</p>
              </div>
              <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
                <Clock className="w-12 h-12 mb-3" />
                <h4 className="text-xl font-bold mb-2">Estimated Time</h4>
                <p className="text-3xl font-bold">7 min</p>
                <p className="text-sm opacity-75">Distance: 3.2 km</p>
              </div>
              <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
                <MapPin className="w-12 h-12 mb-3" />
                <h4 className="text-xl font-bold mb-2">Destination</h4>
                <p className="text-lg">City Hospital</p>
                <p className="text-sm opacity-75">Emergency unit ready</p>
              </div>
            </div>
          </div>
        </motion.section>
      )}

      {/* Features Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Emergency Response Features
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Built for India's diverse connectivity landscape
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all"
              >
                <div className={`w-16 h-16 bg-gradient-to-br from-${feature.color}-400 to-${feature.color}-600 rounded-xl flex items-center justify-center mb-6`}>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Response Timeline */}
      <section className="py-20 bg-white/50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <Zap className="w-16 h-16 text-red-600 mx-auto mb-4" />
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Lightning-Fast Response
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From emergency trigger to ambulance dispatch in under 30 seconds
            </p>
          </motion.div>

          <div className="relative max-w-4xl mx-auto">
            <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-red-500 to-rose-600 transform -translate-x-1/2 hidden md:block" />
            
            {responseSteps.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`relative mb-12 ${
                  index % 2 === 0 ? 'md:pr-1/2 md:text-right' : 'md:pl-1/2 md:ml-auto'
                } md:w-1/2`}
              >
                <div className={`bg-white rounded-2xl shadow-xl p-6 relative ${
                  index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'
                }`}>
                  <div className={`absolute top-1/2 ${
                    index % 2 === 0 ? '-right-6 md:-right-6' : '-left-6 md:-left-6'
                  } transform -translate-y-1/2 w-12 h-12 rounded-full bg-gradient-to-br from-red-500 to-rose-600 flex items-center justify-center z-10 shadow-lg`}>
                    <item.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-5xl font-bold text-red-100">
                      {item.step}
                    </span>
                    <span className="bg-red-100 text-red-700 px-3 py-1 rounded-full text-sm font-semibold">
                      {item.time}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Network Integration */}
      <section className="py-20 bg-gradient-to-br from-red-600 to-rose-700 text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              SwasthPath Mobile Units
            </h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              In areas with ambulance deserts, we deploy dedicated SwasthPath emergency units
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Ambulance,
                title: 'Existing Ambulances',
                description: 'Integrated with 1000+ existing ambulances across India',
                stat: '1000+'
              },
              {
                icon: Radio,
                title: 'SwasthPath Units',
                description: 'Dedicated units in service deserts with advanced equipment',
                stat: '200+'
              },
              {
                icon: Users,
                title: 'Trained Paramedics',
                description: 'Certified emergency medical technicians on every vehicle',
                stat: '3000+'
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20"
              >
                <item.icon className="w-16 h-16 mb-4 mx-auto" />
                <div className="text-4xl font-bold mb-2 text-yellow-300">{item.stat}</div>
                <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
                <p className="opacity-90 leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Feedback & Accountability */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <Star className="w-16 h-16 text-red-600 mx-auto mb-4" />
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Accountability & Quality
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Every emergency response is tracked, rated, and improved
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 shadow-xl"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Real-Time Monitoring</h3>
              <ul className="space-y-4">
                {[
                  'GPS tracking of all ambulance movements',
                  'Response time analysis and optimization',
                  'Patient outcome tracking',
                  'Equipment and supply monitoring'
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 shadow-xl"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Feedback System</h3>
              <ul className="space-y-4">
                {[
                  'Post-service feedback from patients',
                  'Performance ratings for drivers and paramedics',
                  'Complaint resolution mechanism',
                  'Continuous training based on feedback'
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Star className="w-6 h-6 text-yellow-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-red-600 via-rose-600 to-pink-700 text-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center px-6"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Save This Number. It Could Save a Life.
          </h2>
          <div className="bg-white text-red-600 rounded-2xl p-8 mb-8 shadow-2xl">
            <div className="text-5xl font-bold mb-2">1800-XXX-XXXX</div>
            <div className="text-xl">JeevanSetu Emergency Helpline</div>
          </div>
          <p className="text-xl mb-8 opacity-90">
            Available 24/7. Free to call from any network.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-red-600 px-8 py-4 rounded-full font-semibold text-lg hover:shadow-2xl transition-all"
          >
            Download Emergency App
          </motion.button>
        </motion.div>
      </section>

      {/* Navigation to Other Platforms */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-8">
            Explore Other Platforms
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Link href="/swasthpath">
              <motion.div
                whileHover={{ scale: 1.03, y: -5 }}
                className="bg-gradient-to-br from-emerald-500 to-teal-600 text-white rounded-2xl p-8 cursor-pointer shadow-xl"
              >
                <h4 className="text-2xl font-bold mb-2">SwasthPath →</h4>
                <p className="opacity-90">Patient access and health record management</p>
              </motion.div>
            </Link>
            <Link href="/arogyanet">
              <motion.div
                whileHover={{ scale: 1.03, y: -5 }}
                className="bg-gradient-to-br from-blue-500 to-indigo-600 text-white rounded-2xl p-8 cursor-pointer shadow-xl"
              >
                <h4 className="text-2xl font-bold mb-2">ArogyaNet →</h4>
                <p className="opacity-90">AI-powered intelligence for smart healthcare routing</p>
              </motion.div>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
