'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const WeatherWidget = () => {
  const [time, setTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(now.toLocaleTimeString('en-US', { 
        hour: '2-digit', 
        minute: '2-digit',
        hour12: false 
      }));
    };
    
    updateTime();
    const interval = setInterval(updateTime, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.5 }}
      className="fixed bottom-8 right-8 bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-xl z-40 hidden lg:block"
    >
      <div className="space-y-3">
        {/* Weather */}
        <div className="flex items-center space-x-3">
          <div className="text-3xl animate-pulse-slow">☀️</div>
          <div>
            <div className="text-2xl font-bold text-text">26°C</div>
            <div className="text-sm text-muted">Sunny</div>
          </div>
        </div>
        
        {/* Time */}
        <div className="pt-3 border-t border-gray-200">
          <div className="text-sm text-muted flex items-center justify-between">
            <span>{time || '12:55'}</span>
            <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded">
              31-01-2026
            </span>
          </div>
        </div>
        
        {/* Language Toggle (from screenshot) */}
        <div className="flex space-x-2 pt-2">
          <button className="px-3 py-1 text-xs bg-primary text-white rounded-full">
            ENG
          </button>
          <button className="px-3 py-1 text-xs bg-gray-100 text-text rounded-full hover:bg-gray-200">
            IN
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default WeatherWidget;