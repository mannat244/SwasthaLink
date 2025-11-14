'use client';

import { motion } from 'framer-motion';
import { 
  Heart, 
  Smartphone, 
  MessageSquare, 
  Calendar, 
  Users, 
  FileText,
  Truck,
  Stethoscope,
  Globe,
  CheckCircle,
  Clock,
  MapPin
} from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function SwasthPath() {
  const features = [
    {
      icon: Smartphone,
      title: 'Multilingual Mobile App',
      description: 'Access healthcare in your preferred language with support for 22+ Indian languages',
      color: 'emerald'
    },
    {
      icon: MessageSquare,
      title: 'SMS-Based Access',
      description: 'Book appointments and receive updates via SMS for 2G network connectivity',
      color: 'blue'
    },
    {
      icon: Calendar,
      title: 'Smart Queue Management',
      description: 'Virtual queuing system reduces wait times and organizes patient flow',
      color: 'purple'
    },
    {
      icon: FileText,
      title: 'Digital Health Records',
      description: 'Secure storage and instant access to patient history, test results, and prescriptions',
      color: 'indigo'
    },
    {
      icon: Users,
      title: 'ASHA Worker Integration',
      description: 'Seamless connection with ASHA workers for assistance and health monitoring',
      color: 'teal'
    },
    {
      icon: Truck,
      title: 'Mobile Health Units',
      description: 'Track and book appointments with mobile clinics visiting your area',
      color: 'orange'
    }
  ];

  const services = [
    {
      icon: Stethoscope,
      title: 'Mobile Clinics',
      description: 'Regular health check-ups for children and mothers in remote communities',
      image: '🏥'
    },
    {
      icon: Truck,
      title: 'Outreach Services',
      description: 'Preventive care, vaccination drives, and health awareness programs',
      image: '🚑'
    },
    {
      icon: Users,
      title: 'Community Health',
      description: 'ASHA-led health camps and screening programs in villages',
      image: '👥'
    }
  ];

  const languages = [
    'हिंदी', 'বাংলা', 'తెలుగు', 'मराठी', 'தமிழ்', 'ગુજરાતી', 
    'ಕನ್ನಡ', 'ଓଡ଼ିଆ', 'മലയാളം', 'ਪੰਜਾਬੀ', 'English'
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-green-50">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute bg-emerald-400 rounded-full"
              style={{
                width: Math.random() * 200 + 50,
                height: Math.random() * 200 + 50,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, Math.random() * 50 - 25],
                opacity: [0.2, 0.4, 0.2],
              }}
              transition={{
                duration: Math.random() * 5 + 5,
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
              <div className="w-24 h-24 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-3xl flex items-center justify-center shadow-2xl">
                <Heart className="w-12 h-12 text-white" />
              </div>
            </motion.div>

            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
              <span className="text-emerald-600">SwasthPath</span>
              <br />
              <span className="text-3xl md:text-4xl text-gray-700">The Pathway to Care</span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-4xl mx-auto">
              Simplifying healthcare access for every Indian. Connect with healthcare providers 
              through multilingual apps, SMS, and ASHA worker assistance.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-emerald-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-emerald-700 transition-colors shadow-xl"
              >
                Book Appointment
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-emerald-600 text-emerald-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-emerald-600 hover:text-white transition-all"
              >
                Learn More
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Language Support Section */}
      <section className="py-16 bg-white/50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <Globe className="w-16 h-16 text-emerald-600 mx-auto mb-4" />
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Healthcare in Your Language
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Breaking language barriers with support for 22+ Indian languages
            </p>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-4">
            {languages.map((lang, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="bg-gradient-to-br from-emerald-500 to-teal-600 text-white px-6 py-3 rounded-full font-semibold text-lg shadow-lg"
              >
                {lang}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

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
              Comprehensive Healthcare Access
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need for seamless healthcare management
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

      {/* Mobile Services Section */}
      <section className="py-20 bg-gradient-to-br from-emerald-600 to-teal-700 text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Mobile Health Units & Outreach Services
            </h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Bringing healthcare directly to remote communities
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20"
              >
                <div className="text-6xl mb-4 text-center">{service.image}</div>
                <div className="flex items-center justify-center mb-4">
                  <service.icon className="w-12 h-12" />
                </div>
                <h3 className="text-2xl font-bold mb-3 text-center">
                  {service.title}
                </h3>
                <p className="opacity-90 text-center leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
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
              How SwasthPath Works
            </h2>
            <p className="text-xl text-gray-600">
              Simple steps to access quality healthcare
            </p>
          </motion.div>

          <div className="relative">
            <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-emerald-500 to-teal-600 transform -translate-x-1/2 hidden md:block" />
            
            {[
              {
                step: 1,
                title: 'Register & Choose Language',
                description: 'Sign up via app or SMS in your preferred language. ASHA workers can assist with registration.',
                icon: Smartphone
              },
              {
                step: 2,
                title: 'Book Appointment',
                description: 'Browse available doctors, clinics, or mobile health units. Select convenient time slots.',
                icon: Calendar
              },
              {
                step: 3,
                title: 'Join Virtual Queue',
                description: 'Get your queue number and estimated wait time. Receive real-time updates on your phone.',
                icon: Clock
              },
              {
                step: 4,
                title: 'Visit & Get Care',
                description: 'Visit the facility or mobile unit at your scheduled time. Your digital health record is instantly accessible.',
                icon: CheckCircle
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
                  } transform -translate-y-1/2 w-12 h-12 md:w-16 md:h-16 rounded-full bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center z-10 shadow-lg`}>
                    <item.icon className="w-6 h-6 md:w-8 md:h-8 text-white" />
                  </div>
                  <div className="text-6xl font-bold text-emerald-100 mb-4">
                    {item.step}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-emerald-600 via-teal-600 to-green-700 text-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center px-6"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Experience Healthcare Made Simple?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join lakhs of Indians already using SwasthPath for their healthcare needs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-emerald-600 px-8 py-4 rounded-full font-semibold text-lg hover:shadow-2xl transition-all"
            >
              Download App
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-emerald-600 transition-all"
            >
              Contact ASHA Worker
            </motion.button>
          </div>
        </motion.div>
      </section>

      {/* Navigation to Other Platforms */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-8">
            Explore Other Platforms
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Link href="/arogyanet">
              <motion.div
                whileHover={{ scale: 1.03, y: -5 }}
                className="bg-gradient-to-br from-blue-500 to-indigo-600 text-white rounded-2xl p-8 cursor-pointer shadow-xl"
              >
                <h4 className="text-2xl font-bold mb-2">ArogyaNet →</h4>
                <p className="opacity-90">AI-powered intelligence for smart healthcare routing</p>
              </motion.div>
            </Link>
            <Link href="/jeevansetu">
              <motion.div
                whileHover={{ scale: 1.03, y: -5 }}
                className="bg-gradient-to-br from-red-500 to-rose-600 text-white rounded-2xl p-8 cursor-pointer shadow-xl"
              >
                <h4 className="text-2xl font-bold mb-2">JeevanSetu →</h4>
                <p className="opacity-90">Emergency response and ambulance network</p>
              </motion.div>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
