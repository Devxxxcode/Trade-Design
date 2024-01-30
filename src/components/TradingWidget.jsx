// TradingViewWidget.js
import React, { useEffect } from 'react';

const TradingViewWidget = () => {
  useEffect(() => {
    // Load TradingView widget script
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-forex-cross-rates.js';
    script.async = true;
    script.innerHTML = `
      {
        "width": "100%",
        "height": "100%",
        "currencies": ["EUR", "USD", "JPY", "GBP", "CHF", "AUD", "CAD", "NZD"],
        "isTransparent": false,
        "colorTheme": "dark",
        "locale": "en"
      }
    `;
    document.getElementById('tradingview-widget-container').appendChild(script);

    // Clean up the script when the component unmounts
    return () => {
      document.getElementById('tradingview-widget-container').removeChild(script);
    };
  }, []);

  return (
    <div id="tradingview-widget-container" className="tradingview-widget-container">
      <div className="tradingview-widget-container__widget"></div>
      <div className="tradingview-widget-copyright">
        <a href="https://www.tradingview.com/" rel="noopener nofollow" target="_blank">
          <span className="blue-text">Track all markets on TradingView</span>
        </a>
      </div>
    </div>
  );
};

export default TradingViewWidget;
