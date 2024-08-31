import React from 'react';
import Link from 'next/link';
import { useTheme } from 'next-themes';

const LandingHero: React.FC = () => {
  const { theme } = useTheme();

  return (
    <div className={`w-full ${theme === 'dark' ? 'bg-black' : 'bg-white'}`}>
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-2xl">

          <p className={`text-lg mb-8 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
            AI-powered tools for simple wedding planning. No fees, no sign-up.
          </p>
          <Link href="/assistant" className={`${theme === 'dark' ? 'bg-purple-600 hover:bg-purple-700' : 'bg-purple-500 hover:bg-purple-600'} text-white font-bold py-3 px-6 rounded-lg transition duration-300`}>
            Try it now
          </Link>
        </div>
      </div>
      <div className="container mx-auto px-4 pb-12">
        <div className={`${theme === 'dark' ? 'bg-gray-800' : 'bg-gray-100'} p-6 rounded-lg`}>
          <h3 className={`text-xl font-semibold mb-2 ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
            Online Wedding Planning Assistant
          </h3>
          <p className={`text-sm ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
            AI-powered assistant for all aspects of wedding planning.
          </p>
        </div>
      </div>
    </div>
  );
};

export default LandingHero;