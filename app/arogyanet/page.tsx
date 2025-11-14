'use client';

import { motion } from 'framer-motion';
import { 
  Brain, 
  Activity, 
  TrendingUp, 
  AlertTriangle,
  Database,
  Target,
  Zap,
  BarChart3,
  MapPin,
  Users,
  Sparkles,
  Shield
} from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { AreaChart, Area, BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

export default function ArogyaNet() {
  const diseaseData = [
    { month: 'Jan', cases: 120 },
    { month: 'Feb', cases: 150 },
    { month: 'Mar', cases: 180 },
    { month: 'Apr', cases: 220 },
    { month: 'May', cases: 190 },
    { month: 'Jun', cases: 160 },
  ];

  const caseClassification = [
    { name: 'General', value: 65, color: '#10b981' },
    { name: 'Moderate', value: 25, color: '#f59e0b' },
    { name: 'Critical', value: 10, color: '#ef4444' },
  ];

  const features = [
    {
      icon: Database,
      title: 'Data Collection & Cleaning',
      description: 'Collects health data from SwasthPath, validates, and structures it for AI analysis',
      color: 'blue'
    },
    {
      icon: Brain,
      title: 'AI Case Classification',
      description: 'Machine learning models classify cases as General, Moderate, or Critical based on symptoms and history',
      color: 'indigo'
    },
    {
      icon: Zap,
      title: 'Smart Patient Routing',
      description: 'Automatically routes critical cases to JeevanSetu, moderate cases to clinics, and general cases to preventive care',
      color: 'purple'
    },
    {
      icon: TrendingUp,
      title: 'Outbreak Prediction',
      description: 'Analyzes aggregate data patterns to predict disease outbreaks and identify high-risk zones',
      color: 'pink'
    },
    {
      icon: MapPin,
      title: 'Risk Zone Mapping',
      description: 'Geographic visualization of disease hotspots and vulnerable communities',
      color: 'red'
    },
    {
      icon: BarChart3,
      title: 'Actionable Insights',
      description: 'Provides hospitals and policymakers with data-driven recommendations for resource allocation',
      color: 'orange'
    }
  ];

  const aiCapabilities = [
    {
      title: 'Symptom Analysis',
      description: 'NLP-based analysis of patient-reported symptoms in multiple languages',
      accuracy: '94%'
    },
    {
      title: 'Risk Assessment',
      description: 'Evaluates patient risk based on age, comorbidities, and medical history',
      accuracy: '91%'
    },
    {
      title: 'Outbreak Detection',
      description: 'Early warning system for disease clusters using time-series analysis',
      accuracy: '88%'
    }
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute bg-blue-500 rounded-full"
              style={{
                width: Math.random() * 150 + 30,
                height: Math.random() * 150 + 30,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.6, 0.3],
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
              <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-3xl flex items-center justify-center shadow-2xl">
                <Brain className="w-12 h-12 text-white" />
              </div>
            </motion.div>

            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
              <span className="text-blue-600">ArogyaNet</span>
              <br />
              <span className="text-3xl md:text-4xl text-gray-700">The Intelligence Core</span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-4xl mx-auto">
              Powered by AI to classify patient cases, predict disease outbreaks, and provide 
              actionable insights for smarter healthcare resource planning.
            </p>

            <div className="flex flex-wrap gap-6 justify-center mb-8">
              <div className="bg-white/80 backdrop-blur-sm rounded-xl px-6 py-3 shadow-lg">
                <div className="text-3xl font-bold text-blue-600">10L+</div>
                <div className="text-gray-600">Data Points Analyzed</div>
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-xl px-6 py-3 shadow-lg">
                <div className="text-3xl font-bold text-indigo-600">92%</div>
                <div className="text-gray-600">Classification Accuracy</div>
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-xl px-6 py-3 shadow-lg">
                <div className="text-3xl font-bold text-purple-600">Real-time</div>
                <div className="text-gray-600">Processing</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* AI Classification Visualization */}
      <section className="py-20 bg-white/50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <Sparkles className="w-16 h-16 text-blue-600 mx-auto mb-4" />
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              AI-Powered Case Classification
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real-time analysis and intelligent routing based on severity
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 shadow-xl"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Case Distribution</h3>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={caseClassification}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ name, value }) => `${name}: ${value}%`}
                    outerRadius={100}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {caseClassification.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
              <div className="mt-6 space-y-3">
                <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                  <span className="font-semibold text-green-900">General Cases</span>
                  <span className="text-green-600">→ Preventive Care</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-amber-50 rounded-lg">
                  <span className="font-semibold text-amber-900">Moderate Cases</span>
                  <span className="text-amber-600">→ Clinics/Tele-consultation</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-red-50 rounded-lg">
                  <span className="font-semibold text-red-900">Critical Cases</span>
                  <span className="text-red-600">→ JeevanSetu Emergency</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 shadow-xl"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Disease Trend Analysis</h3>
              <ResponsiveContainer width="100%" height={300}>
                <AreaChart data={diseaseData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Area type="monotone" dataKey="cases" stroke="#3b82f6" fill="#93c5fd" />
                </AreaChart>
              </ResponsiveContainer>
              <div className="mt-6">
                <div className="flex items-center gap-2 p-3 bg-blue-50 rounded-lg">
                  <AlertTriangle className="w-5 h-5 text-blue-600" />
                  <span className="text-blue-900">
                    <strong>Alert:</strong> 23% increase detected in respiratory cases
                  </span>
                </div>
              </div>
            </motion.div>
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
              Intelligence-Driven Healthcare
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Leveraging data and AI for proactive healthcare management
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

      {/* AI Capabilities */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-indigo-700 text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Advanced AI Capabilities
            </h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              State-of-the-art machine learning models trained on millions of health records
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {aiCapabilities.map((capability, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20"
              >
                <div className="text-5xl font-bold mb-4 text-yellow-300">
                  {capability.accuracy}
                </div>
                <h3 className="text-2xl font-bold mb-3">
                  {capability.title}
                </h3>
                <p className="opacity-90 leading-relaxed">
                  {capability.description}
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
              How ArogyaNet Works
            </h2>
            <p className="text-xl text-gray-600">
              From data collection to actionable insights
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              {
                step: 1,
                title: 'Data Collection',
                description: 'Gathers patient data from SwasthPath - symptoms, history, ASHA inputs',
                icon: Database
              },
              {
                step: 2,
                title: 'AI Analysis',
                description: 'Machine learning models analyze and classify cases in real-time',
                icon: Brain
              },
              {
                step: 3,
                title: 'Smart Routing',
                description: 'Routes patients to appropriate care level based on severity',
                icon: Target
              },
              {
                step: 4,
                title: 'Insights',
                description: 'Generates reports for hospitals and policymakers',
                icon: TrendingUp
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="bg-white rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center text-white font-bold text-xl mb-4 mx-auto">
                    {item.step}
                  </div>
                  <div className="flex justify-center mb-4">
                    <item.icon className="w-12 h-12 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2 text-center">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-center text-sm">
                    {item.description}
                  </p>
                </div>
                {index < 3 && (
                  <div className="hidden md:block absolute top-1/2 -right-3 transform -translate-y-1/2">
                    <div className="text-blue-400 text-3xl">→</div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white/50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Impact & Benefits
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Users,
                title: 'For Patients',
                benefit: 'Faster diagnosis and appropriate care routing',
                stat: '40% faster'
              },
              {
                icon: Activity,
                title: 'For Hospitals',
                benefit: 'Optimized resource allocation and reduced overcrowding',
                stat: '30% efficiency'
              },
              {
                icon: Shield,
                title: 'For Communities',
                benefit: 'Early outbreak detection and preventive measures',
                stat: '50% risk reduction'
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="bg-gradient-to-br from-blue-500 to-indigo-600 text-white rounded-2xl p-8 shadow-xl"
              >
                <item.icon className="w-16 h-16 mb-4 mx-auto" />
                <h3 className="text-2xl font-bold mb-3 text-center">{item.title}</h3>
                <p className="opacity-90 mb-4 text-center">{item.benefit}</p>
                <div className="text-center">
                  <div className="text-3xl font-bold text-yellow-300">{item.stat}</div>
                  <div className="text-sm opacity-75">Improvement</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
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
