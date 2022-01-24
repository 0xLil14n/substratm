import React, { useState, useEffect } from 'react';
function useBreakpoint() {
  // Initialize state with undefined width/height so server and client renders match
  // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
  const [windowSize, setWindowSize] = useState({
    width: 500,
    height: 500,
  });

  useEffect(() => {
    // useEffect is only called client-side, so don't need to check if window

    // Handler to call on window resize
    function handleResize() {
      console.log('handling resize width', window.innerWidth);
      // console.log('handling resize height', width)
      // Set window width/height to state
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });

      // Add event listener
      window.addEventListener('resize', handleResize);

      // Call handler right away so state gets updated with initial window size
      handleResize();

      // Remove event listener on cleanup
      //   return () => window.removeEventListener('resize', handleResize);
    }
  }, []); // Empty array ensures that effect is only run on mount
  return windowSize;
}
export default useBreakpoint;
