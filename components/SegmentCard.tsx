'use client';

import { motion } from 'framer-motion';
import { ArrowRight, LucideIcon } from 'lucide-react';
import Link from 'next/link';

interface Segment {
  id: string;
  icon: LucideIcon;
  title: string;
  subtitle: string;
  description: string;
  color: string;
  features: string[];
  link: string;
}

interface SegmentCardProps {
  segment: Segment;
  index: number;
}

export default function SegmentCard({ segment, index }: SegmentCardProps) {
  const Icon = segment.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      viewport={{ once: true }}
      whileHover={{ y: -10, scale: 1.02 }}
      className="group"
    >
      <div className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden h-full flex flex-col">
        <div className={`bg-gradient-to-br ${segment.color} p-8 text-white relative overflow-hidden`}>
          <motion.div
            className="absolute inset-0 opacity-20"
            animate={{
              backgroundPosition: ['0% 0%', '100% 100%'],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              repeatType: 'reverse',
            }}
            style={{
              backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
              backgroundSize: '20px 20px',
            }}
          />
          <div className="relative z-10">
            <Icon className="w-16 h-16 mb-4" />
            <h3 className="text-3xl font-bold mb-2">{segment.title}</h3>
            <p className="text-lg opacity-90">{segment.subtitle}</p>
          </div>
        </div>

        <div className="p-6 flex-grow flex flex-col">
          <p className="text-gray-600 mb-6 leading-relaxed">
            {segment.description}
          </p>

          <div className="mb-6">
            <h4 className="font-semibold text-gray-900 mb-3">Key Features:</h4>
            <ul className="space-y-2">
              {segment.features.map((feature, idx) => (
                <motion.li
                  key={idx}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-2 text-gray-700"
                >
                  <span className="text-primary-600 mt-1">•</span>
                  <span className="text-sm">{feature}</span>
                </motion.li>
              ))}
            </ul>
          </div>

          <Link href={segment.link} className="mt-auto">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`w-full bg-gradient-to-r ${segment.color} text-white px-6 py-3 rounded-lg font-semibold flex items-center justify-center gap-2 hover:shadow-lg transition-all group-hover:gap-4`}
            >
              Explore {segment.title}
              <ArrowRight className="w-5 h-5" />
            </motion.button>
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
