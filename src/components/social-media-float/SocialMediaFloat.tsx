import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import icMessenger from '../../assets/icons/messenger.svg';
import icInstagram from '../../assets/icons/instagram.svg';
import icWhatsApp from '../../assets/icons/whatsapp.svg';
import icContact from '../../assets/icons/contact.svg'

const SocialMediaFloat: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // Đóng menu khi click bên ngoài
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  // URLs
  const messengerUrl = "https://www.facebook.com/khanhtran.tonnu";
  const instagramUrl = "https://www.instagram.com/tranton_makeupartist";
  const instagramAltUrl = "https://www.instagram.com/tranton.pmu?igsh=eGk5aWRuY2pscDJ0&utm_source=qr";
  const whatsappUrl = "https://wa.me/07466171871";

  // Pulse animation
  const PULSE_KEYFRAMES = {
    scale: [1, 1.24, 1.48],
    opacity: [0, 0.45, 0],
  };

  const PULSE_DURATION = 2;
  const PULSE_LAYERS = 2;

  const socialLinks = [
    {
      name: 'Messenger',
      icon: icMessenger,
      url: messengerUrl,
      color: 'bg-transparent hover:bg-blue-50'
    },
    {
      name: 'Instagram',
      icon: icInstagram,
      url: instagramUrl,
      color: 'bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#FCAF45] hover:from-[#9B4DD4] hover:via-[#FF2D2D] hover:to-[#FFC055]'
    },
    {
      name: 'Instagram Studio',
      icon: icInstagram,
      url: instagramAltUrl,
      color: 'bg-gradient-to-r from-[#FF9A3C] via-[#F54997] to-[#4B4DED] hover:from-[#FFB469] hover:via-[#FF63B0] hover:to-[#6B6DFF]'
    },
    {
      name: 'WhatsApp',
      icon: icWhatsApp,
      url: whatsappUrl,
      color: 'bg-green-500 hover:bg-green-600'
    }
  ];

  return (
    <div ref={menuRef} className="fixed bottom-6 right-6 z-50">
      <div className="flex flex-col items-end gap-3">

        {/* Menu items */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="flex flex-col items-end gap-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
            >
              {socialLinks.map((social) => (
                <div key={social.name} className="relative">
                  
                  {/* ✅ Pulse EFFECT - CLEAR, GLOW, NO HOVER BLOCK */}
                  {Array.from({ length: PULSE_LAYERS }).map((_, pulseIndex) => (
                    <motion.div
                      key={`${social.name}-${pulseIndex}`}
                      className="absolute inset-0 bg-blue-500 rounded-full blur-[2px] pointer-events-none"
                      style={{ opacity: 0.35 }}
                      animate={PULSE_KEYFRAMES}
                      transition={{
                        duration: PULSE_DURATION,
                        repeat: Infinity,
                        ease: "easeOut",
                        delay: pulseIndex * (PULSE_DURATION / PULSE_LAYERS),
                      }}
                    />
                  ))}

                  <motion.a
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0.5, y: 10 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.5, y: 10 }}
                    transition={{
                      opacity: { duration: 0.3 },
                      scale: { type: "spring", stiffness: 200, damping: 18 },
                      y: { duration: 0.3 },
                    }}
                    whileHover={{ scale: 1.15, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className={`relative ${social.color} w-14 h-14 rounded-full flex items-center justify-center shadow-lg transition-none`}
                    aria-label={social.name}
                  >
                    <img
                      src={social.icon}
                      alt={`${social.name} Icon`}
                      className={`w-6 h-6 ${social.name.includes('Messenger') ? '' : 'filter invert'}`}
                    />
                  </motion.a>
                </div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Main button */}
        <motion.button
          onClick={() => setIsOpen((prev) => !prev)}
          className="relative w-14 h-14 rounded-full flex items-center justify-center shadow-lg bg-blue-500 transition-all duration-200 overflow-visible"
          aria-label="Open contact menu"
          whileTap={{ scale: 0.9 }}
          whileHover={{ scale: 1.12 }}
        >
          {/* ✅ Pulse only when menu is closed */}
          {!isOpen && Array.from({ length: PULSE_LAYERS }).map((_, pulseIndex) => (
            <motion.div
              key={`main-${pulseIndex}`}
              className="absolute inset-0 bg-blue-500 rounded-full blur-[2px] pointer-events-none"
              style={{ opacity: 0.45 }}
              animate={PULSE_KEYFRAMES}
              transition={{
                duration: PULSE_DURATION,
                repeat: Infinity,
                ease: "easeOut",
                delay: pulseIndex * (PULSE_DURATION / PULSE_LAYERS),
              }}
            />
          ))}

          {/* Icon */}
          {isOpen ? (
            <motion.svg
              className="w-7 h-7 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              animate={{ rotate: 90 }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </motion.svg>
          ) : (
           <img src={icContact} className='h-9 w-9'/>
          )}
        </motion.button>
      </div>
    </div>
  );
};

export default SocialMediaFloat;
