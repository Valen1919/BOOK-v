import React, { useState } from "react";
import "./PaymentForm.css";

const PaymentForm = () => {
  const [paymentMethod, setPaymentMethod] = useState("tarjeta");
  const [showCreditCardForm, setShowCreditCardForm] = useState(false);
  const [showPaypalForm, setShowPaypalForm] = useState(false);
  const [deliveryAddress, setDeliveryAddress] = useState("");
  const [amount, setAmount] = useState("");
  const [paymentResponse, setPaymentResponse] = useState("");

  const showPaymentForm = () => {
    const selectedMethod = document.getElementById("paymentMethod").value;
    setPaymentMethod(selectedMethod);

    setShowCreditCardForm(selectedMethod === "tarjeta");
    setShowPaypalForm(selectedMethod === "paypal");
  };

  const processPayment = async () => {
    // Simulamos un proceso de pago asincrónico (por ejemplo, una llamada a una API)
    // Aquí podrías conectar con una pasarela de pago real
    try {
      // Simulamos una espera de 2 segundos para el proceso de pago
      await new Promise((resolve) => setTimeout(resolve, 2000));
      
      // Simulamos una respuesta exitosa del pago
      setPaymentResponse(`Pago procesado con éxito. Monto: ${amount}, Método: ${paymentMethod}`);
    } catch (error) {
      // Manejo de errores en caso de fallo en el pago
      setPaymentResponse("Error en el proceso de pago. Por favor, inténtelo de nuevo.");
    }
  };

  return (
    <div className="payment-form">
      <label htmlFor="paymentMethod">Método de Pago:</label>
      <select id="paymentMethod" onChange={showPaymentForm}>
        <option value="tarjeta">Tarjeta de Crédito</option>
        <option value="paypal">PayPal</option>
      </select>

      {showCreditCardForm && (
        <div>
          <label htmlFor="cardNumber">Número de Tarjeta:</label>
          <input
            type="text"
            id="cardNumber"
            placeholder="Ingrese el número de tarjeta"
            maxLength="16"
          />

          <label htmlFor="expiryDate">Fecha de Expiración:</label>
          <input type="text" id="expiryDate" placeholder="MM/AA" />

          <label htmlFor="cvv">CVV:</label>
          <input type="text" id="cvv" placeholder="CVV" maxLength="3" />
        </div>
      )}

      {showPaypalForm && (
        <div>
          <label htmlFor="paypalUsername">Nombre de Usuario PayPal:</label>
          <input
            type="text"
            id="paypalUsername"
            placeholder="Ingrese el nombre de usuario PayPal"
          />
        </div>
      )}

      <label htmlFor="deliveryAddress">Dirección de Envío:</label>
      <textarea
        id="deliveryAddress"
        placeholder="Ingrese la dirección de envío"
        value={deliveryAddress}
        onChange={(e) => setDeliveryAddress(e.target.value)}
      />

      <label htmlFor="amount">Monto a Pagar:</label>
      <input
        type="text"
        id="amount"
        placeholder="Ingrese el monto"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />

      <button onClick={processPayment}>Pagar</button>

      <div className="payment-response" id="paymentResponse">
        {paymentResponse && <p>{paymentResponse}</p>}
      </div>
    </div>
  );
};

export default PaymentForm;
