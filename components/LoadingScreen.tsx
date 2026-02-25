import React, { useEffect, useState } from 'react';
import { Logo } from './Logo';

interface LoadingScreenProps {
  onLoadingComplete: () => void;
}

export const LoadingScreen = ({ onLoadingComplete }: LoadingScreenProps) => {
  const [isVisible, setIsVisible] = useState(true);
  const [progress, setProgress] = useState(0);
  const [estimatedDuration, setEstimatedDuration] = useState(5000);
  const [resourcesLoaded, setResourcesLoaded] = useState(false);

  useEffect(() => {
    // Detect network speed and set minimum loading time
    const detectNetworkSpeed = async () => {
      try {
        // Check if Network Information API is available
        const connection = (navigator as any).connection || 
                          (navigator as any).mozConnection || 
                          (navigator as any).webkitConnection;
        
        if (connection) {
          const effectiveType = connection.effectiveType;
          const downlink = connection.downlink; // Mbps
          
          // Set minimum duration based on network speed
          let minDuration = 5000;
          
          if (downlink) {
            // Calculate based on actual Mbps
            if (downlink >= 10) {
              minDuration = 3000; // Fast network - 3 seconds minimum
            } else if (downlink >= 4) {
              minDuration = 3500;
            } else if (downlink >= 1.6) {
              minDuration = 4500;
            } else {
              minDuration = 6000; // Slow network - 6 seconds minimum
            }
          } else {
            // Fallback to effective type
            switch (effectiveType) {
              case '4g':
                minDuration = 3000;
                break;
              case '3g':
                minDuration = 4500;
                break;
              case '2g':
              case 'slow-2g':
                minDuration = 6000;
                break;
              default:
                minDuration = 5000;
            }
          }
          
          setEstimatedDuration(minDuration);
        }
      } catch (error) {
        console.error('Error detecting network speed:', error);
      }
    };

    detectNetworkSpeed();

    // Monitor when the page becomes fully interactive
    const handlePageLoad = () => {
      setResourcesLoaded(true);
    };

    window.addEventListener('load', handlePageLoad);

    return () => {
      window.removeEventListener('load', handlePageLoad);
    };
  }, []);

  useEffect(() => {
    let progressInterval: NodeJS.Timeout;
    let hideTimer: NodeJS.Timeout;
    const startTime = Date.now();

    // Simulate progress with variable speed
    const updateProgress = () => {
      const elapsedTime = Date.now() - startTime;
      const progressPercent = Math.min((elapsedTime / estimatedDuration) * 100, 90);
      setProgress(progressPercent);
    };

    progressInterval = setInterval(updateProgress, 100);

    // Determine when to hide the splash screen
    const hideTimer2 = setTimeout(() => {
      // If resources loaded AND minimum time passed, hide immediately
      if (resourcesLoaded) {
        setProgress(100);
        hideTimer = setTimeout(() => {
          setIsVisible(false);
          // Mark loading as shown for this session (persists on reload, cleared on tab close)
          sessionStorage.setItem('prosysIT_loading_shown', 'true');
          onLoadingComplete();
        }, 300);
      } else {
        // If minimum time passed but resources not loaded, show at 90% and wait
        setProgress(90);
      }
    }, estimatedDuration);

    // Always hide after maximum time (estimated duration + 2 seconds buffer)
    const maxTimer = setTimeout(() => {
      setProgress(100);
      hideTimer = setTimeout(() => {
        setIsVisible(false);
        // Mark loading as shown for this session (persists on reload, cleared on tab close)
        sessionStorage.setItem('prosysIT_loading_shown', 'true');
        onLoadingComplete();
      }, 300);
    }, estimatedDuration + 2000);

    return () => {
      clearInterval(progressInterval);
      clearTimeout(hideTimer2);
      clearTimeout(maxTimer);
      if (hideTimer) clearTimeout(hideTimer);
    };
  }, [estimatedDuration, resourcesLoaded, onLoadingComplete]);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-amber-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-amber-600 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-amber-400 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center gap-8">
        {/* Logo with scale animation */}
        <div className="animate-bounce-slow">
          <Logo isDarkMode={true} />
        </div>

        {/* Loading text */}
        <div className="text-center">
          <p className="text-white text-lg font-semibold tracking-widest mb-2">
            LAUNCHING
          </p>
          <p className="text-amber-500 text-sm font-medium">prosysIT Solutions</p>
        </div>

        {/* Progress bar */}
        <div className="w-48 h-1 bg-gray-700 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 transition-all duration-500 ease-out rounded-full"
            style={{ width: `${progress}%` }}
          ></div>
        </div>

        {/* Dots animation */}
        <div className="flex gap-2 mt-4">
          <div className="w-2 h-2 bg-amber-500 rounded-full animate-pulse"></div>
          <div className="w-2 h-2 bg-amber-500 rounded-full animate-pulse animation-delay-100"></div>
          <div className="w-2 h-2 bg-amber-500 rounded-full animate-pulse animation-delay-200"></div>
        </div>
      </div>

      <style>{`
        @keyframes bounce-slow {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        @keyframes blob {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
        }

        .animate-bounce-slow {
          animation: bounce-slow 2s infinite;
        }

        .animate-blob {
          animation: blob 7s infinite;
        }

        .animation-delay-100 {
          animation-delay: 100ms;
        }

        .animation-delay-200 {
          animation-delay: 200ms;
        }

        .animation-delay-2000 {
          animation-delay: 2s;
        }

        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </div>
  );
};
