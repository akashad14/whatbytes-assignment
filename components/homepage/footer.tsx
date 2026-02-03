'use client'

import { Facebook, Twitter, Instagram } from 'lucide-react'
import Link from 'next/link'

export function Footer() {
  return (
    <footer className="bg-linear-to-r from-[#062d5c] via-[#053366] to-[#032750] text-white">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 text-center sm:text-left">

        
          <div>
            <h4 className="text-lg font-semibold mb-4">Filters</h4>
            <ul className="space-y-2 text-sm text-white/80">
              <li>
                <Link href="#" className="hover:text-white transition">
                  All
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition">
                  Electronics
                </Link>
              </li>
            </ul>
          </div>

          {/* About Us */}
          <div>
            <h4 className="text-lg font-semibold mb-4">About Us</h4>
            <ul className="space-y-2 text-sm text-white/80">
              <li>
                <Link href="#" className="hover:text-white transition">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Follow Us */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <div className="flex justify-center sm:justify-start gap-4">
              {[
                { icon: Facebook },
                { icon: Twitter },
                { icon: Instagram },
              ].map(({ icon: Icon }, i) => (
                <Link
                  key={i}
                  href="#"
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition"
                >
                  <Icon className="w-5 h-5" />
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-10 border-t border-white/20 pt-6">
          <p className="text-sm text-center text-white/70">
            © 2024 American. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
