import React from 'react'
import { useNavigate } from 'react-router-dom'


export const Home = () => {
    
    const navigate = useNavigate();
    return (
        <div>
            <p>
                Home
            </p>
            <button onClick={() => navigate('order-confirmed')}>Order Confirm</button>
        </div>
    )
}
