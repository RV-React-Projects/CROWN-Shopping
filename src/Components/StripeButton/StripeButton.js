import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

function StripeButton({ price }) {
	const priceForStripe = price * 100;
	const publishableKey =
		'pk_test_51ItZR7SI77sc8eZ96FA8KUuXGJjqeE9YAdWtlnYGj5yEPOxD7a68efqeypNkAWqR9GmhLXlFtdbhqxEIvdlznPHw00oXSyQcH9';

	const onToken = (token) => {
		console.log(token);
		alert('Payment Successful..!');
	};
	return (
		<StripeCheckout
			label="Pay Now"
			name="Crown Clothing Ltd."
			billingAddress
			shippingAddress
			image="https://cdn3.iconfinder.com/data/icons/shopping-and-payments/50/80-512.png"
			description={`Your Total Prive is $${price}`}
			amount={priceForStripe}
			panelLabel="Pay Now"
			token={onToken}
			stripeKey={publishableKey}
		/>
	);
}

export default StripeButton;
