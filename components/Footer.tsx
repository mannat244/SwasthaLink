'use client';

import { motion } from 'framer-motion';
import { Heart, Mail, Phone, MapPin, Github, Linkedin, Twitter } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand Section */}
          <div className="col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-primary-700 rounded-lg flex items-center justify-center">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">SwasthaLink</h3>
                <p className="text-xs text-gray-400">Digital Health Bridge</p>
              </div>
            </div>
            <p className="text-sm text-gray-400 mb-4">
              One guides, one learns, one saves. Building India's digital health ecosystem.
            </p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-primary-400 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-primary-400 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-primary-400 transition-colors">
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Our Platforms</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/swasthpath" className="hover:text-primary-400 transition-colors">
                  SwasthPath
                </Link>
              </li>
              <li>
                <Link href="/arogyanet" className="hover:text-primary-400 transition-colors">
                  ArogyaNet
                </Link>
              </li>
              <li>
                <Link href="/jeevansetu" className="hover:text-primary-400 transition-colors">
                  JeevanSetu
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-white font-semibold mb-4">Resources</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-primary-400 transition-colors">
                  Documentation
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary-400 transition-colors">
                  API Reference
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary-400 transition-colors">
                  Support Center
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary-400 transition-colors">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span className="text-sm">support@swasthalink.in</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span className="text-sm">1800-XXX-XXXX</span>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span className="text-sm">New Delhi, India</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} SwasthaLink. All rights reserved. Built for India's healthcare revolution.</p>
        </div>
      </div>
    </footer>
  );
}
