import React, { useState, useEffect } from 'react';
import { useParams,useNavigate } from 'react-router-dom';

function PaymentForm() {
    const params = useParams();
    const [car, setCar] = useState({});
    const [paymentMethods, setPaymentMethods] = useState([]);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchCarData = async () => {
            setIsLoading(true);
            try {
                const endpoints = [
                    'https://projectdb-885a.onrender.com/Nissan',
                    'https://projectdb-885a.onrender.com/Toyota',
                    'https://projectdb-885a.onrender.com/Mercedes',
                    'https://projectdb-885a.onrender.com/BMW',
                    'https://projectdb-885a.onrender.com/Audi',
                ];

                for (const endpoint of endpoints) {
                    const response = await fetch(`${endpoint}/${params.id}`);
                    if (response.ok) {
                        const data = await response.json();
                        setCar(data);
                        setIsLoading(false);
                        return;
                    }
                }
                setCar(null);
                setIsLoading(false);
            } catch (error) {
                console.error('Error fetching car data:', error);
                setIsLoading(false);
            }
        };

        fetchCarData();
    }, [params.id]);

    if (isLoading) {
        return <div className='loading'>Loading...</div>;
    }

    if (!car) {
        return <div>Car not found</div>;
    }

    const handleCheckboxChange = event => {
        const { value, checked } = event.target;
        if (checked) {
            setPaymentMethods([...paymentMethods, value]);
        } else {
            setPaymentMethods(paymentMethods.filter(method => method !== value));
        }
    };

    const customer = {car,
        paymentMethods,
        name,
        email,
        phone}
    const handleSubmit = event => {
        event.preventDefault();
        fetch("https://projectdb-885a.onrender.com/Customers", {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify(customer)
          })
          .then(response => response.json())
        .then(data => {
            console.log(data);
        })
        console.log(customer);
        navigate(`/`)
        alert("Your Transaction is being processed, we will reach out to you via the email you provided. Thank you for visiting Escrowease.")
    };


   
    return (
        <div className="payment-container">
            <div className="car">

                <h2>{car.name}</h2>
                <img src={car.pic} alt="car" className="car-image" />
                <h3>{car.price}</h3>

            </div>

            <div className="payment-form-container">
                <h2>Start Transaction</h2>
                <form onSubmit={handleSubmit}>
                <div className="payment-methods">
                    <label className="payment-method">
                        <input 
                            type="checkbox"
                            value="M-Pesa"
                            checked={paymentMethods.includes('M-Pesa')}
                            onChange={handleCheckboxChange}
                            
                        />
                        M-Pesa
                    </label>
                    <label className="payment-method">
                        <input 
                            type="checkbox"
                            value="Card"
                            checked={paymentMethods.includes('Card')}
                            onChange={handleCheckboxChange}
                           
                        />
                        Card
                    </label>
                    <label className="payment-method">
                        <input 
                            type="checkbox"
                            value="PayPal"
                            checked={paymentMethods.includes('PayPal')}
                            onChange={handleCheckboxChange}
                           
                        />
                        PayPal
                    </label>
                </div>
                <div className='info'>
                <div>
                    <label>
                        
                        <input 
                        className='name'
                            placeholder='Name'
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                    </label>
                </div>
                <div>
                    <label>
                       
                        <input 
                         className='name'
                        placeholder='Email'
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </label>
                </div>
                <div>
                    <label>
                        
                        <input 
                         className='name'
                        placeholder='Phone Number'
                            type="tel"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            minLength={10}
                            required
                        />
                    </label>
                </div>
                </div>
                <button type="submit">Submit</button>
            </form>
            </div>

            <div className="seller-info">
                <img src={car.seller_img} alt="Seller" className="seller-image" />
                <p className="seller-name">{car.seller}</p>
            </div>
        </div>
    );
}

export default PaymentForm;
