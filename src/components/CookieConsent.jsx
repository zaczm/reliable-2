import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Cookie, X, Settings, Check } from 'lucide-react';

const CookieConsent = () => {
  const [showBanner, setShowBanner] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [preferences, setPreferences] = useState({
    necessary: true,
    analytics: false,
    marketing: false,
    functional: false
  });

  useEffect(() => {
    // Check if user has already made a choice
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      // Show banner after a short delay for better UX
      const timer = setTimeout(() => {
        setShowBanner(true);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAcceptAll = () => {
    const allAccepted = {
      necessary: true,
      analytics: true,
      marketing: true,
      functional: true,
      timestamp: new Date().toISOString()
    };
    localStorage.setItem('cookie-consent', JSON.stringify(allAccepted));
    setShowBanner(false);
    setShowSettings(false);
  };

  const handleRejectAll = () => {
    const onlyNecessary = {
      necessary: true,
      analytics: false,
      marketing: false,
      functional: false,
      timestamp: new Date().toISOString()
    };
    localStorage.setItem('cookie-consent', JSON.stringify(onlyNecessary));
    setShowBanner(false);
    setShowSettings(false);
  };

  const handleSavePreferences = () => {
    const savedPreferences = {
      ...preferences,
      timestamp: new Date().toISOString()
    };
    localStorage.setItem('cookie-consent', JSON.stringify(savedPreferences));
    setShowBanner(false);
    setShowSettings(false);
  };

  const togglePreference = (key) => {
    if (key === 'necessary') return; // Necessary cookies can't be disabled
    setPreferences(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const cookieTypes = [
    {
      key: 'necessary',
      title: 'Necessary Cookies',
      description: 'Essential for the website to function properly. These cannot be disabled.',
      required: true
    },
    {
      key: 'functional',
      title: 'Functional Cookies',
      description: 'Enable enhanced functionality and personalization, such as remembering your preferences.',
      required: false
    },
    {
      key: 'analytics',
      title: 'Analytics Cookies',
      description: 'Help us understand how visitors interact with our website to improve user experience.',
      required: false
    },
    {
      key: 'marketing',
      title: 'Marketing Cookies',
      description: 'Used to track visitors across websites to display relevant advertisements.',
      required: false
    }
  ];

  const bannerVariants = {
    hidden: { 
      y: 100, 
      opacity: 0,
      scale: 0.95
    },
    visible: { 
      y: 0, 
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        damping: 25,
        stiffness: 300,
        duration: 0.6
      }
    },
    exit: { 
      y: 100, 
      opacity: 0,
      scale: 0.95,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  };

  const settingsVariants = {
    hidden: { 
      opacity: 0,
      scale: 0.9,
      y: 20
    },
    visible: { 
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 25,
        stiffness: 300,
        duration: 0.4
      }
    },
    exit: { 
      opacity: 0,
      scale: 0.9,
      y: 20,
      transition: {
        duration: 0.2,
        ease: "easeInOut"
      }
    }
  };

  return (
    <AnimatePresence>
      {showBanner && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40"
            onClick={() => setShowBanner(false)}
          />

          {/* Cookie Banner */}
          <motion.div
            variants={bannerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed bottom-6 left-6 right-6 md:left-auto md:right-6 md:max-w-md z-50"
          >
            <div className="bg-white/95 backdrop-blur-lg rounded-2xl shadow-2xl border border-[#788B9C]/20 overflow-hidden">
              {/* Header */}
              <div className="bg-gradient-to-r from-[#203B42] to-[#788B9C] p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <Cookie className="w-6 h-6 text-white" />
                    <h3 className="text-lg font-montserrat font-semibold text-white">
                      Cookie Preferences
                    </h3>
                  </div>
                  <button
                    onClick={() => setShowBanner(false)}
                    className="text-white/80 hover:text-white transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <p className="text-[#203B42] text-sm leading-relaxed mb-6">
                  We use cookies to enhance your browsing experience, provide personalized content, 
                  and analyze our traffic. By clicking "Accept All", you consent to our use of cookies.
                </p>

                {/* Settings Panel */}
                <AnimatePresence>
                  {showSettings && (
                    <motion.div
                      variants={settingsVariants}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                      className="mb-6 space-y-4"
                    >
                      {cookieTypes.map((type) => (
                        <div key={type.key} className="border border-[#788B9C]/20 rounded-xl p-4">
                          <div className="flex items-center justify-between mb-2">
                            <h4 className="font-montserrat font-semibold text-[#203B42]">
                              {type.title}
                            </h4>
                            <button
                              onClick={() => togglePreference(type.key)}
                              disabled={type.required}
                              className={`relative w-12 h-6 rounded-full transition-colors duration-200 ${
                                preferences[type.key] 
                                  ? 'bg-[#D89D66]' 
                                  : 'bg-[#788B9C]/30'
                              } ${type.required ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
                            >
                              <motion.div
                                className="absolute top-1 left-1 w-4 h-4 bg-white rounded-full shadow-sm"
                                animate={{
                                  x: preferences[type.key] ? 24 : 0
                                }}
                                transition={{ duration: 0.2 }}
                              />
                            </button>
                          </div>
                          <p className="text-xs text-[#788B9C] leading-relaxed">
                            {type.description}
                          </p>
                        </div>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Action Buttons */}
                <div className="space-y-3">
                  {!showSettings && (
                    <button
                      onClick={() => setShowSettings(true)}
                      className="w-full flex items-center justify-center space-x-2 px-4 py-2 border border-[#788B9C] text-[#203B42] rounded-xl hover:bg-[#788B9C]/10 transition-colors duration-200"
                    >
                      <Settings className="w-4 h-4" />
                      <span className="text-sm font-medium">Customize Settings</span>
                    </button>
                  )}

                  <div className="flex space-x-3">
                    <button
                      onClick={showSettings ? handleSavePreferences : handleRejectAll}
                      className="flex-1 px-4 py-2 border border-[#788B9C] text-[#203B42] rounded-xl hover:bg-[#788B9C]/10 transition-colors duration-200 text-sm font-medium"
                    >
                      {showSettings ? 'Save Preferences' : 'Reject All'}
                    </button>
                    <button
                      onClick={handleAcceptAll}
                      className="flex-1 px-4 py-2 bg-gradient-to-r from-[#203B42] to-[#788B9C] text-white rounded-xl hover:shadow-lg transition-all duration-200 text-sm font-medium flex items-center justify-center space-x-2"
                    >
                      <Check className="w-4 h-4" />
                      <span>Accept All</span>
                    </button>
                  </div>
                </div>

                {/* Privacy Policy Link */}
                <div className="mt-4 text-center">
                  <a
                    href="/privacy-policy"
                    className="text-xs text-[#788B9C] hover:text-[#203B42] transition-colors underline"
                  >
                    View our Privacy Policy
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default CookieConsent;

