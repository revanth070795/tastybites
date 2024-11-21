import emailjs from '@emailjs/browser';

const SERVICE_ID = 'service_10pu7cn'; // Replace with your EmailJS service ID
const TEMPLATE_ID = 'template_s62smt9'; // Replace with your EmailJS template ID
const PUBLIC_KEY = 'uY9IGrdBRa5G1tEB8'; // Replace with your EmailJS public key

export const sendOrderNotification = async (orderDetails) => {
  try {
    const response = await emailjs.send(
      SERVICE_ID,
      TEMPLATE_ID,
      {
        order_items: orderDetails.items.map(item => 
          `${item.name} x${item.quantity} - $${(item.price * item.quantity).toFixed(2)}`
        ).join('\n'),
        total_amount: `$${orderDetails.total.toFixed(2)}`,
        customer_email: orderDetails.email,
        customer_name: orderDetails.name,
        customer_phone: orderDetails.phone,
      },
      PUBLIC_KEY
    );
    return response;
  } catch (error) {
    throw new Error('Failed to send order notification');
  }
};