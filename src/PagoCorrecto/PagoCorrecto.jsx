import React from 'react';
import './PagoCorrecto.css'; 
import payPal from './PayPalLogo.png';
import correcto from './Checkpago.png';

const PagoCorrecto = () => {
  return (
    <div className="pago-container">
      <div className="pago-check-icon">
        <img src={correcto} alt="Éxito" width="80" />
      </div>

      <h1 className="pago-title">Transacción Exitosa</h1>
      
      <div className="pago-brand">
        <img src={payPal} alt="PayPal" width="120" />
      </div>
      
      <div className="pago-divider"></div>
      
      <div className="pago-details">
        <h3 className="pago-subtitle">Pago realizado</h3>
      </div>
      
      <div className="pago-footer">
        <p>Copyright © 2025 - Systems | Systems managers | Financials</p>
      </div>
    </div>
  );
};

export default PagoCorrecto;