import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe(
  'pk_test_51Rtv411Wh7udUTRequCZUlyOv9nkjy1eXk6PLS55IrKgvQ4iV3rivlbqe9z5gYUAFo9NSyeRDy293oNHEFYlT5bM00S17vNUfG',
);

export default stripePromise;
