import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
 import {  useContext, useEffect, useState } from "react";
 import useAxiosSecure from "../../hooks/UseAxiosSecure";
import { AuthContext } from "../../Providers/AuthProvider";
import useSelect from "../../hooks/useSelect";

const CheckoutForm = ({chosen,pick}) => {
  const [,refetch] = useSelect();
    const {price} = chosen;
    const {user} = useContext(AuthContext);
    const stripe = useStripe();
    const elements = useElements();
    const [processing,setProcessing] = useState(false);
    const [transaction,setTransaction] = useState('');
    const [clientSecret,setClientSecret] = useState('');
    const [cardError,setCardError] = useState('');
    const [TransError,setTransError] = useState('');
    const [axiosSecure] = useAxiosSecure();
    useEffect(() => {
        // Check if price is available
        if (price>0) {
          axiosSecure
            .post('/create-payment-intent', { price })
            .then((res) => {
              setClientSecret(res.data.clientSecret);
            })
            .catch((error) => {
              console.error('Error:', error);
            });
        }
      }, [price, axiosSecure]);
      
    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!stripe || !elements) {
          return;
        }
        const card = elements.getElement(CardElement);
        if (card === null) {
          return;
        }
        const { error } = await stripe.createPaymentMethod({
          type: 'card',
          card,
        });
        if (error) {
          console.log(error);
          setCardError(error.message); // Use error.message to extract the error message string
        } else {
          setCardError('');
          //console.log('payment method ', paymentMethod);
        }
        setProcessing(true);
        const {paymentIntent, error : confirmError} = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method : {
                    card : card,
                    billing_details : {
                        name : user?.displayName || 'unknown',
                        email : user?.email || 'unknown'
                    }
                }
            }
        )
        if(confirmError){
            setCardError(confirmError.message);
            setTransError('')
        }
        console.log(paymentIntent);
        setProcessing(false);
        if(paymentIntent.status ==='succeeded'){
            const transId = paymentIntent.id;
            setTransaction(transId);
            setTransError('Transaction Completed')
            const payment ={
              ...chosen,
              email : user?.email,
              transactionId : transId,
              price,
              date : new Date(),
              chosenId : pick,
            }
            axiosSecure.post('/payments',payment)
            .then(res=>{
              console.log(res.data);
              if(res.data.insertResult.insertedId){
                refetch();
              }
            })
        }
      };
      
    return (
        <>
            <form className="w-1/2 h-10 bg-slate-50" onSubmit={handleSubmit}>
      <CardElement className="border-b border-slate-200 h-7"
        options={{
          style: {
            base: {
              fontSize: '15px',
              color: '#424770',
              '::placeholder': {
                color: '#aab7c4',
              },
            },
            invalid: {
              color: '#9e2146',
            },
          },
        }}
      />
      <button className="mt-5 btn btn-primary btn-sm w-20 h-8" type="submit" disabled={!stripe || !clientSecret || processing}>
        Pay
      </button>
    </form>
    {cardError && <p className="text-red-600 font-medium text-lg mt-4 md:mt-10 md:w-2/3">{cardError}</p>}
    {transaction && <p className="text-green-600 font-medium text-lg">{TransError}</p>}
        </>
    );
};

export default CheckoutForm;