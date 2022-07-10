import './Single.css';
import { useParams } from "react-router-dom";
import img1 from "./img-1.jpg";
import { useLocation } from 'react-router-dom';
import * as React from 'react';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormatAlignLeftIcon from '@mui/icons-material/FormatAlignLeft';
import FormatAlignCenterIcon from '@mui/icons-material/FormatAlignCenter';
import FormatAlignRightIcon from '@mui/icons-material/FormatAlignRight';
import FormatAlignJustifyIcon from '@mui/icons-material/FormatAlignJustify';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import Button from '@mui/material/Button';


const currencies = [
    {
        value: 'Large',
        label: '1300',
    },
    {
        value: 'Medium',
        label: '1000',
    },
];


function Single(props) {

    let params = useParams();
    console.log(params.cakename)
    const location = useLocation()
    const data = location.state

    const [size, setsize] = React.useState('Medium');
    const [price, setprice] = React.useState(data.price1);
    const [quantity, setq] = React.useState(1);

    // const handleAlignment = (event, newAlignment) => {
    //     setAlignment(newAlignment);
    // };

    const handleChange = (event, newValue) => {
        console.log(newValue);
        if (newValue !== null) {
            setsize(newValue);
        }
        setprice(newValue);
    };

    // console.log("f: " + fixedPrice);

    const printD = (event) => {
        console.log(event.target.value);
        setq(event.target.value);
        // fixedPrice = price * q;
    }

    const [values, setValues] = React.useState({
        amount: '',
        password: '',
        weight: '',
        weightRange: '',
        showPassword: false,
    });
    const handleChange1 = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };

    return (
        <section id='single-cake'>

            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-12">
                        <img src={`https://sweetcups-server.herokuapp.com/${data.cakeImgUrl}`} alt="" />
                    </div>

                    <div className="col-lg-6 col-md-6 col-sm-12 single-right">

                        <div className="container">
                            <div className="row">

                                <div className="col-lg-6 col-md-6 col-sm-6 top-div">


                                    <h3 id='cake-name' > {data.cakeName} </h3>
                                </div>

                                <div className="col-lg-6 col-md-6 col-sm-6 price-div">
                                    <p id='cake-size' style={{ marginBottom: '0px' }}> <span id='price'> {price * quantity} </span> /- </p>
                                </div>
                            </div>
                        </div>

                        <hr></hr>
                        <p> {data.size1} </p>

                        <div className="container">
                            <div className="row">

                                <div className="col-lg-6 col-md-12 col-sm-12 size-div">
                                    <ToggleButtonGroup
                                        color="success"
                                        value={size}
                                        exclusive
                                        onChange={handleChange}
                                        aria-label="text alignment"
                                    >

                                        {currencies.map((option) => (
                                            <ToggleButton className='size-toggle' value={option.label} aria-label={option.value}>
                                                <div className="container">
                                                    <div className="row">
                                                        <div className="col-12 col-sm-12"> {option.value} </div>
                                                        <div className="col-12 col-sm-12"> {option.label} </div>
                                                    </div>
                                                </div>

                                            </ToggleButton>
                                        ))}

                                    </ToggleButtonGroup>
                                </div>



                            </div>
                        </div>

                        <div className="container">
                            <div className="row">

                                <div className="col-lg-6 col-md-6 col-sm-6 wishnq" style={{ paddingLeft: '0px' }}>

                                    <p> Wishes goes here </p>
                                    <FormControl fullWidth sx={{ m: 1 }}>
                                        <InputLabel htmlFor="outlined"> Wishes </InputLabel>
                                        <OutlinedInput
                                            id="outlined-adornment"
                                            value={values.amount}
                                            onChange={handleChange1('amount')}
                                            label="Amount"
                                        />
                                    </FormControl>
                                </div>


                                <div className="col-lg-6 col-md-6 col-sm-6 wishnq" style={{ paddingRight: '0px' }}>

                                    <p id='p-quatity'> Quantity </p>

                                    <TextField
                                        required={true}
                                        id="outlined-number"
                                        label="Quantity"
                                        type="number"
                                        defaultValue={1}
                                        onChange={printD}
                                        InputLabelProps={{
                                            shrink: true,
                                        }}
                                        style={{
                                            marginTop: '2%',
                                            marginRight: '2%'
                                        }}
                                    />

                                </div>

                            </div>
                        </div>

                        <Button color='success' variant="contained"> Add to Cart </Button>


                    </div>
                </div>
            </div>
        </section>
    )

}

export default Single