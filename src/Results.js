import React, {useState} from 'react';
import './App.css';

function Result({ answers, name, email, phone }) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');


const handleSubmit = async (event) => {
    event.preventDefault(); // Estä lomakkeen oletustoiminto
    
    try {
        const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            name,
            email,
            phone,
            surveyType: 'Vauvavakuutus', // Survey-tyyppi määritelty täällä
            answers,
        }),
        });
    
        if (response.ok) {
        alert('Sähköposti lähetetty onnistuneesti!');
        } else {
        alert('Virhe sähköpostin lähetyksessä. Yritä uudelleen.');
        }
    } catch (error) {
        console.error('Error:', error);
        alert('Virhe sähköpostin lähetyksessä. Yritä uudelleen.');
    }
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
            <input type="text" placeholder="Nimi" required value={name} onChange={(e) => setName(e.target.value)}/>
            <input type="email" placeholder="Sähköposti" required value={email} onChange={(e) => setEmail(e.target.value)}/>
            <input type="tel" placeholder="Puhelinnumero" required value={phone} onChange={(e) => setPhone(e.target.value)}/>
            <button type="submit">Osallistu</button>
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
