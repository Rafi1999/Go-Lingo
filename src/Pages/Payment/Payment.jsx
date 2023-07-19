import { Helmet } from "react-helmet";
import { useParams } from "react-router-dom";
import SectionTitle from "../Shared/SectionTitle/SectionTitle";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";
import { useEffect, useState } from "react";
import axios from "axios";


const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK)
const Payment = () => {
    const paymentClassID = useParams();
    const [chosen, setChosen] = useState([]);
    console.log(chosen);
    useEffect(() => {
        const pickedClassLoad = async () => {
          try {
            const res = await axios.get(`http://localhost:5000/picked/${paymentClassID.id}`);
            const data = res.data;
            setChosen(data[0]);
          } catch (error) {
            // Handle the error here
            console.error('Error:', error);
          }
        };
      
        pickedClassLoad();
      }, [paymentClassID.id]);
      
    return (
        <>
            <Helmet>
                <title>Go-Lingo || Payment</title>
            </Helmet>
            <SectionTitle title="Payment" />
            <p className="md:text-lg mb-2 link-warning">Please Pay : ${chosen.price}</p>
            <Elements stripe={stripePromise}>
                <CheckoutForm chosen={chosen} pick={paymentClassID}></CheckoutForm>
            </Elements>
        </>
    );
};

export default Payment;