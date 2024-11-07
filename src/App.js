import React, { useState } from 'react';
import Question from './Question';
import Results from './Results';
import liberoLogo from './images/Libero-logo-1.png';

function App() {
  const [step, setStep] = useState(1);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  // Siirrytään seuraavaan vaiheeseen
  const nextStep = () => setStep(step + 1);

  // Siirrytään edelliseen vaiheeseen (jos tarpeen)
  const prevStep = () => setStep(step - 1);

  // Kyselyn valmistuttua siirrytään tulossivulle
  const handleComplete = (newName, newEmail, newPhone) => {
    setName(newName);
    setEmail(newEmail);
    setPhone(newPhone);
    setStep(3); // Siirtyy tulossivulle
  };

  return (
    <div className="app">
      {step === 1 && (
        <div className="welcome-container">
          <div className="welcome-box">
            <button onClick={nextStep} className="start-button">
              ALOITA
            </button>
            <img src={liberoLogo} alt="libero-logo" className="libero-logo" />
          </div>
        </div>
      )}

      {step === 2 && (
        <div>
          <Question onNext={nextStep} onBack={prevStep} onComplete={handleComplete} />
        </div>
      )}

      {step === 3 && (
        <div>
          <Results name={name} email={email} phone={phone} />
        </div>
      )}
    </div>
  );
}

export default App;
