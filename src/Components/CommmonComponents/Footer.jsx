import React from 'react';
import Link from 'next/link';
import { Facebook, Instagram, Youtube, Linkedin } from 'lucide-react'; // Import icons from lucide-react

function Footer() {
  return (
    <div>
      <div className="bg-black text-white w-full pt-28 pb-20">
        <div className='flex items-center justify-center mb-16 lg:px-20 px-5'>
          <h3 className='mx-auto w-full lg:inline p-5 text-5xl bg-[#171c2d71] rounded-lg border-gray-800 border uppercase leading-tight lg:text-[12rem] text-center'>
            Get In Touch
          </h3>
        </div>

        <div className='max-w-screen-xl mx-auto flex-col md:flex-row flex gap-20 px-5'>
          <div className='basis-5/12'>
            <p className='text-2xl mb-8'>
            A Global Hedge Fund Partnering with Visionary Investors to Navigate Complex Markets
            </p>
            <Link href='mailto:thedravinindia@gmail.com' className='text-2xl underline underline-offset-8'>
              thedravinindia@gmail.com
            </Link>
          </div>

          {/* Social Handles with Icons */}
          <div className='grid grid-cols-2 gap-10 basis-7/12'>
            <div className='border bg-[#171c2d71] rounded-md border-gray-900 flex items-center p-5'>
              <Facebook className='w-6 h-6 mr-3' /> {/* Facebook Icon */}
              <p className='text-xl'>Facebook</p>
            </div>
            <div className='border bg-[#171c2d71] rounded-md border-gray-900 flex items-center p-5'>
              <Instagram className='w-6 h-6 mr-3' /> {/* Instagram Icon */}
              <p className='text-xl'>Instagram</p>
            </div>
            <div className='border bg-[#171c2d71] rounded-md border-gray-900 flex items-center p-5'>
              <Youtube className='w-6 h-6 mr-3' /> {/* YouTube Icon */}
              <p className='text-xl'>YouTube</p>
            </div>
            <div className='border bg-[#171c2d71] rounded-md border-gray-900 flex items-center p-5'>
              <Linkedin className='w-6 h-6 mr-3' /> {/* LinkedIn Icon */}
              <p className='text-xl'>LinkedIn</p>
            </div>
          </div>
        </div>
      </div>

      <div className='w-full bg-black border-t border-gray-800 text-white py-4'>
        <div className='max-w-screen-xl mx-auto flex flex-col md:flex-row items-center justify-center'>
          <div className='md:basis-1/2'>
            <p>© 2025 Dravin Capital, All Rights Reserved.</p>
          </div>
          <div className='md:basis-1/2'>
            <p className='text-right'>Privacy Policy | Terms of Service</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
