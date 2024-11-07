import React, {useState} from 'react';
import './App.css';

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
    } else {
        console.log('Virhe sähköpostin lähetyksessä');
    }
    } catch (error) {
    console.error('Virhe:', error);
    }
};

function Result({ answers, name, email, phone }) {
    const handleButtonClick = (action) => {
        const formData = {
            name,
            email,
            phone,
            answers,
            action, // Lisätään action-tieto
        };
        
        handleSubmit(formData);
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
        <form className="results-form" onSubmit={handleSubmit}>
            <input type="text" placeholder="Nimi" required value={name} onChange={(e) => name(e.target.value)}/>
            <input type="email" placeholder="Sähköposti" required value={email} onChange={(e) => email(e.target.value)}/>
            <input type="tel" placeholder="Puhelinnumero" required value={phone} onChange={(e) => phone(e.target.value)}/>
            <button type="submit" onClick={() => handleButtonClick ('Osallistu')}>Osallistu</button>
            <footer className="footer">
                Powered by Birra Solutions
            </footer>
        </form>
        </div>
    </div>
    </div>
);
}

export default Result;
