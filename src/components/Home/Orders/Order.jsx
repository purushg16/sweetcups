import React, { Component } from 'react'
import "./Order.css";
// import HorizontalScroll from 'react-scroll-horizontal';
import img1 from "./img-1.jpg";
import img2 from "./img-2.jpg";
import img3 from "./img-3.jpg";
import img4 from "./img-4.jpg";
import OrderCard from './OrderCard';
import Grid from '@mui/material/Grid';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';


export default class Order extends Component {

    constructor(props) {
        super(props);
        this.state = {
            shift: 0,
            nDiv: 0,
            maxWid: 0
        };
        this.myInput = React.createRef()
    }

    componentDidMount() {

        setTimeout((function () {
            const mw = Number(this.myInput.current.id) * 400;

            this.setState({ maxWid: 0-mw/3 })
            console.log(this.state.maxWid);
        }).bind(this), 100);
    }

    translateleft = () => {
        if (this.state.shift !== 0) this.setState({ shift: this.state.shift + 400 })
        else {
            console.log('yes')
            this.setState({ shift: 100 - this.state.shift })
            setTimeout(() => this.setState({ shift: 0 }), 700);
        }
    }

    translateright = () => {
        if(this.state.shift !== this.state.maxWid) this.setState({ shift: this.state.shift - 400 })
        else {
            console.log('yes')
            this.setState({ shift: this.state.shift - 100 })
            setTimeout(() => this.setState({ shift: this.state.maxWid }), 700);
        }

    }

    render() {
        const child = { width: `25em`, height: `100%`, display: `flex` }
        const parent = { height: `22.7rem`, padding: `3% 0% 5%` }

        const scroll = {
            // `translate3d(${this.state.shift}, 0px, 0px)`
            transform: `translate3d(${this.state.shift}px, 0px, 0px)`,
            display: 'inline-flex', height: '100%',
            position: 'absolute',
            willChange: 'transform',
            transition: 'all 1s'
        }

        return (
            <section id="order-section">
                <h3 id='order-heading'>  See what we have </h3>
                <p style={{ 'fontFamily': 'Righteous' }}> choose what you love and order </p>


                <Grid container spacing={3}>
                    <Grid item xs>
                        <button id='left-nav' onClick={() => this.translateleft()}> <KeyboardDoubleArrowLeftIcon fontSize='large' /> </button>
                    </Grid>

                    <Grid item xs={10}>

                        <div style={parent}>
                            <div class="scroll-horizontal " style={{ height: '100%', width: '100%', overflow: 'hidden', position: 'relative' }}>  {/* ref={this.myInput} */}

                                <div style={scroll}>

                                    <div style={child} id={1}>
                                        <OrderCard src={img1} name='red velvet' price={'1000 /.'} />
                                    </div>
                                    <div style={child} id={2}>
                                        <OrderCard src={img2} name='butterscotch mix' price={'1400 /.'} />
                                    </div>
                                    <div style={child} id={3}>
                                        <OrderCard src={img3} name='honeyfilled one' price={'1200 /.'} />
                                    </div>
                                    <div style={child} id={4} >
                                        <OrderCard src={img4} name='trampoline honey' price={'1200 /.'} />
                                    </div>
                                    <div style={child} id={5}>
                                        <OrderCard src={img1} name='red velvet' price={'1000 /.'} />
                                    </div>
                                    <div id={6} ref={this.myInput} style={child}>
                                        <OrderCard src={img1} name='red velvet' price={'1000 /.'} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Grid>

                    <Grid item xs>
                        <button id='right-nav' onClick={() => this.translateright()}> <KeyboardDoubleArrowRightIcon fontSize='large' /> </button>
                    </Grid>
                </Grid>

            </section >
        )
    }
}



// {/* <div class="scroll-horizontal " style="height: 100%; width: 100%; overflow: hidden; position: relative;">
//                             <div style="transform: translate3d(0px, 0px, 0px); display: inline-flex; height: 100%; position: absolute; will-change: transform;">
//                                 <div style={child}>
//                                     <OrderCard src={img1} name='red velvet' price={'1000 /.'} />
//                                 </div>
//                                 <div style={child}>
//                                     <OrderCard src={img2} name='butterscotch mix' price={'1400 /.'} />
//                                 </div>
//                                 <div style={child}>
//                                     <OrderCard src={img3} name='honeyfilled one' price={'1200 /.'} />
//                                 </div>
//                                 <div style={child}>
//                                     <OrderCard src={img4} name='trampoline honey' price={'1200 /.'} />
//                                 </div>
//                                 <div style={child}>
//                                     <OrderCard src={img1} name='red velvet' price={'1000 /.'} />
//                                 </div>
//                                 </div>
//                             </div>
//                         </div> */}