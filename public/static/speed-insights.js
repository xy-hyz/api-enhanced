/**
 * Vercel Speed Insights Initialization
 * This script loads and initializes Speed Insights for tracking web performance metrics
 */
(function() {
  // Create the queue for Speed Insights
  window.si = window.si || function () {
    (window.siq = window.siq || []).push(arguments);
  };

  // Load the Speed Insights script
  var script = document.createElement('script');
  script.defer = true;
  script.src = '/_vercel/speed-insights/script.js';
  script.onerror = function() {
    // Fallback: If the Vercel-hosted script is not available,
    // Speed Insights will not track data (expected in local development)
    if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
      console.log('[Speed Insights] Running in local environment - tracking disabled');
    }
  };
  
  // Insert script into the page
  var firstScript = document.getElementsByTagName('script')[0];
  firstScript.parentNode.insertBefore(script, firstScript);
})();
