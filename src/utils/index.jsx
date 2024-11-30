import axios from 'axios';

const productionUrl = 'https://strapi-store-server.onrender.com/api';

export const customFetch = axios.create({
  baseURL: productionUrl,
});


// creer une fonction pour exporter les prix 

export const formatPrice = (price) =>{
  const dollarsAmount = new Intl.NumberFormat('en-US', {
    style: 'currency' , 
    currency: 'USD'
  }).format((price / 100).toFixed(2)) 
  return dollarsAmount
}

// FONCTION DES OPTIONS
export const generateAmountOptions = (number) => {
  return Array.from({ length: number }, (_, index) => {
    const amount = index + 1;

    return (
      <option key={amount} value={amount}>
        {amount}
      </option>
    );
  });
};