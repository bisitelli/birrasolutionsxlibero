import React, { useState } from 'react';
import './App.css';

// Lomakkeen lähettämisfunktio
const handleSubmit = async (formData) => {
  try {
    const response = await fetch('/api/send-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      console.log('Sähköposti lähetetty onnistuneesti');
      alert('Sähköposti lähetetty onnistuneesti');
    } else {
      console.log('Virhe sähköpostin lähetyksessä');
      alert('Virhe sähköpostin lähetyksessä');
    }
  } catch (error) {
    console.error('Virhe:', error);
  }
};

function Results({ name, email, phone, answers }) {
  const [userName, setUserName] = useState(name || '');
  const [userEmail, setUserEmail] = useState(email || '');
  const [userPhone, setUserPhone] = useState(phone || '');

  const handleFormSubmit = (e) => {
    e.preventDefault(); // Estää lomakkeen oletustoiminnon (sivun uudelleenlataus)

    const formData = {
      name: userName,
      email: userEmail,
      phone: userPhone,
      answers,
    };

    handleSubmit(formData); // Lähettää tiedot API:lle
  };

  return (
    <div className="results-container">
      <div className="results-content-box">
        <div className="results-info-section">
          <h2>Tiesitkö, että If:in syntymättömän lapsen vakuutus kattaa:</h2>
          <ul>
            <li>✅ Suomen kattavin suorakorvausverkosto</li>
            <li>✅ Lapsen harrastukset 12-vuotiaaksi asti</li>
            <li>✅ Terveysapu-palvelu on apunasi 24/7</li>
            <li>✅ Lapsen tapaturmallisen pysyvän vamman</li>
          </ul>
        </div>
        <div className="results-form-section">
          <h2>Ota tarjous If:in syntymättömän lapsen vakuutuksesta niin voit voittaa vuoden vaipat Liberolta!</h2>
          <form className="results-form" onSubmit={handleFormSubmit}>
            <input
              type="text"
              placeholder="Nimi"
              required
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            />
            <input
              type="email"
              placeholder="Sähköposti"
              required
              value={userEmail}
              onChange={(e) => setUserEmail(e.target.value)}
            />
            <input
              type="tel"
              placeholder="Puhelinnumero"
              required
              value={userPhone}
              onChange={(e) => setUserPhone(e.target.value)}
            />
            <button type="submit">Osallistu</button>
          </form>
          <footer className="footer">Powered by Birra Solutions</footer>
        </div>
      </div>
    </div>
  );
}

export default Results;
