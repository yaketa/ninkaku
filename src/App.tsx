import React, { useState, useEffect } from 'react';
import TestWindow from './components/TestWindow';
import ConsentModal from './components/ConsentModal';

function App() {
  const [hasConsent, setHasConsent] = useState(() => {
    const saved = localStorage.getItem('pregnancy-test-consent');
    return saved === 'true';
  });

  const handleConsent = () => {
    setHasConsent(true);
    localStorage.setItem('pregnancy-test-consent', 'true');
  };

  return (
    <>
      <ConsentModal isOpen={!hasConsent} onAccept={handleConsent} />
      {hasConsent && <TestWindow />}
    </>
  );
}

export default App;