import React from 'react'
import './Footer.css';


function Footer() {
    return (
        <footer>
            <div className='contac'>
                <h3>Information</h3>
                <p>Monday to Friday. 10am - 21pm.</p>
                <p>Saturdays. 10am - 17pm.</p>
                <p>Fair. 10am - 15pm</p>
            </div>
            <div className='text-center'>
                <h4>The travel platform for tourism ✈</h4>
                <a className='phone' href="tel:+">0800-824-1784</a>
            </div>
            <div className='info'>
                    <h3>Methods of payment</h3>
                    <p>Debit</p>
                    <p>Credit</p>
                    <p>Transfer</p>
            </div>
        </footer>
    )
}
export {Footer}

