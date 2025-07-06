import React, { useState } from 'react';

function FlightBooker() {
  const [flightType, setFlightType] = useState('oneway');
  const [departureDate, setDepartureDate] = useState('');
  const [returnDate, setReturnDate] = useState('');
  const [message, setMessage] = useState('');

  const today = new Date().toISOString().split('T')[0];

  const isDepartureValid = departureDate && departureDate >= today;
  const isReturnValid =
    flightType === 'oneway' || (flightType === 'return' && returnDate >= departureDate);
  const isFormValid = isDepartureValid && (flightType === 'oneway' || isReturnValid);

  const handleSubmit = () => {
    if (flightType === 'oneway') {
      setMessage(`✅ You have booked a one-way flight on ${departureDate}.`);
    } else {
      setMessage(`✅ You have booked a return flight from ${departureDate} to ${returnDate}.`);
    }
  };

  return (
    <div
      style={{
        maxWidth: '400px',
        margin: '40px auto',
        padding: '20px',
        border: '1px solid #ccc',
        borderRadius: '12px',
        boxShadow: '0 0 10px rgba(0,0,0,0.1)',
        fontFamily: 'Arial, sans-serif',
        backgroundColor: '#f9f9f9',
      }}
    >
      <h2 style={{ textAlign: 'center', color: '#333' }}>✈️ Flight Booker</h2>

      <div style={{ marginBottom: '15px' }}>
        <label style={{ display: 'block', marginBottom: '5px' }}>Flight Type</label>
        <select
          value={flightType}
          onChange={(e) => setFlightType(e.target.value)}
          style={{ width: '100%', padding: '8px', borderRadius: '4px' }}
        >
          <option value="oneway">One Way</option>
          <option value="return">Return</option>
        </select>
      </div>

      <div style={{ marginBottom: '15px' }}>
        <label style={{ display: 'block', marginBottom: '5px' }}>Departure Date</label>
        <input
          type="date"
          value={departureDate}
          min={today}
          onChange={(e) => setDepartureDate(e.target.value)}
          style={{ width: '100%', padding: '8px', borderRadius: '4px' }}
        />
      </div>

      {flightType === 'return' && (
        <div style={{ marginBottom: '15px' }}>
          <label style={{ display: 'block', marginBottom: '5px' }}>Return Date</label>
          <input
            type="date"
            value={returnDate}
            min={departureDate}
            onChange={(e) => setReturnDate(e.target.value)}
            style={{ width: '100%', padding: '8px', borderRadius: '4px' }}
          />
        </div>
      )}

      <button
        onClick={handleSubmit}
        disabled={!isFormValid}
        style={{
          width: '100%',
          padding: '10px',
          backgroundColor: isFormValid ? '#1d4ed8' : '#9ca3af',
          color: '#fff',
          border: 'none',
          borderRadius: '4px',
          cursor: isFormValid ? 'pointer' : 'not-allowed',
        }}
      >
        Book Flight
      </button>

      {message && (
        <div style={{ marginTop: '20px', color: 'green', textAlign: 'center' }}>
          {message}
        </div>
      )}
    </div>
  );
}

export default FlightBooker;
