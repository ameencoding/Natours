import axios from 'axios';
import { showAlert } from './alert';

const stripe = Stripe(
  'pk_test_51HzGEBLjXf9JGKBE8McA62OIbJEHzpMejC6zx22RfugwvoRlFk7UofpKAqr7WkRBG4yndI8JqOEfvGnthdTx46ij00LmJrovj3'
);

export const bookTour = async (tourId) => {
  try {
    // 1) Get checkout session from API.
    const session = await axios(
      `http://127.0.0.1:3000/api/v1/bookings/checkout-session/${tourId}`
    );
    console.log(session);

    // Create checkout from + charge credit card
    await stripe.redirectToCheckout({
      sessionId: session.data.session.id,
    });
  } catch (err) {
    console.log(err);
    showAlert('error', err);
  }
};
