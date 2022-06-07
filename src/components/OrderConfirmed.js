import React from 'react'
import { useNavigate } from 'react-router-dom'

export const OrderConfirmed = () => {
    const navigate = useNavigate()
    return (
        <div>
            OrderConfirmed!
            <button onClick={() => navigate(-1)}>back</button>
        </div>
    )
}