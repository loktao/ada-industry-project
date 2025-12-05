import React, { useState } from 'react';

const Donation = () => {
  const [amount, setAmount] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleDonate = (e) => {
    e.preventDefault();
    if (!amount) return;
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setShowSuccess(true);
      setAmount('');
    }, 2000);
  }

  if (showSuccess) {
    return (
      <div className="page-container" style={{ textAlign: 'center' }}>
        <h2 style={{ color: 'green' }}>✓ Donation Successful</h2>
        <button className="btn-primary" onClick={() => setShowSuccess(false)}>
          Donate Again
        </button>
      </div>
    )
  }

  return (
    <div className="page-container">
      <h2>Support Our Cause</h2>
      <form onSubmit={handleDonate} className="donation-form">
        <label>Donation Amount ($)</label>
        <input 
          type="number" 
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          required
        />
        <button type="submit" className="btn-primary" disabled={isLoading}>
          {isLoading ? "Processing..." : "Donate Now"}
        </button>
      </form>
    </div>
  )
}

export default Donation;