import React from 'react';
import { Mail, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer class="bg-[#203B42] text-white py-12">
      <div class="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Quick Links */}
        <div>
          <h3 class="text-xl font-bold mb-4">Quick Link</h3>
          <ul>
            <li class="mb-2"><a href="/" class="hover:text-accent transition-colors">Home</a></li>
            <li class="mb-2"><a href="/about" class="hover:text-accent transition-colors">About Us</a></li>
            <li class="mb-2"><a href="/services" class="hover:text-accent transition-colors">Admission and Referral</a></li>
            <li class="mb-2"><a href="/contact" class="hover:text-accent transition-colors">Partnership</a></li>
            <li class="mb-2"><a href="/referral" class="hover:text-accent transition-colors">Referral form</a></li>
          </ul>
        </div>

        {/* Get In Touch */}
        <div>
          <h3 class="text-xl font-bold mb-4">Get In Touch</h3>
          <p class="mb-2 flex items-center"><Phone size={16} class="mr-2" /> 612-394-5624</p>
          <p class="mb-2 flex items-center"><Mail size={16} class="mr-2" /> info@hprecuperative.com</p>
          <p>123 Healing Path, Minneapolis, MN 55401</p>
        </div>

        {/* Newsletter */}
        <div>
          <h3 class="text-xl font-bold mb-4">Newsletter</h3>
          <p class="mb-4">Signup for our newsletter to get notified about our latest news.</p>
          <form class="flex">
            <input 
              type="email" 
              placeholder="Enter your email" 
              class="p-3 rounded-l-md   flex-grow focus:outline-none focus:ring-2 focus:ring-accent text-gray-800"
            />
            <button 
              type="submit" 
              class="bg-[#D89D66] text-white p-3 rounded-r-md hover:bg-[#99A48E] transition-colors"
            >
              Send
            </button>
          </form>
        </div>
      </div>
      <div class="text-center border-t border-gray-700 pt-8 mt-8">
        <p>©Copyright 2025. All Rights Reserved. Healing Path Recuperative Care</p>
      </div>
    </footer>
  );
};

export default Footer;

