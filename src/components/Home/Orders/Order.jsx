import React, { Component } from 'react'
import "./Order.css";
import HorizontalScroll from 'react-scroll-horizontal';
import img1 from "./img-1.jpg";
import img2 from "./img-2.jpg";
import img3 from "./img-3.jpg";
import img4 from "./img-4.jpg";
import OrderCard from './OrderCard';


export default class Order extends Component {
    render() {
        const child = { width: `25em`, height: `100%`, display: `flex` }
        const parent = { height: `22.7rem`, padding: `3% 5% 5%` }
        return (
            <section id="order-section">
                <h3 id='order-heading'>  See what we have </h3>
                <p style={{ 'fontFamily': 'Righteous' }}> choose what you love and order </p>
                <div style={parent}>
                    <HorizontalScroll>
                        <div style={child}>
                            <OrderCard src={img1} name='red velvet' price={'1000 /.'} />
                        </div>
                        <div style={child}>
                            <OrderCard src={img2} name='butterscotch mix' price={'1400 /.'} />
                        </div>
                        <div style={child}>
                            <OrderCard src={img3} name='honeyfilled one' price={'1200 /.'} />
                        </div>
                        <div style={child}>
                            <OrderCard src={img4} name='trampoline honey' price={'1200 /.'} />
                        </div>
                        <div style={child}>
                            <OrderCard src={img1} name='red velvet' price={'1000 /.'} />
                        </div>
                    </HorizontalScroll>
                </div>
            </section>
        )
    }
}


