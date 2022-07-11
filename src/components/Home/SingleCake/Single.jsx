import './Single.css';
import { useParams } from "react-router-dom";
import { useLocation } from 'react-router-dom';
import * as React from 'react';
import { styled } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';


const sizes = [
    {
        size: 'Large',
        price: '1300',
    },
    {
        size: 'Medium',
        price: '1000',
    },
];

const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));


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

    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

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
                    <div className="col-lg-6 col-md-6 col-sm-12 single-left">
                        <div className="container" style={{ padding: 0 }}>


                            <Card>
                                {/* <CardHeader
                                avatar={
                                    <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                                        R
                                    </Avatar>
                                }
                                action={
                                    <IconButton aria-label="settings">
                                        <MoreVertIcon />
                                    </IconButton>
                                }
                                title="Shrimp and Chorizo Paella"
                                subheader="September 14, 2016"
                            /> */}


                                <CardMedia
                                    component="img"
                                    image={`https://sweetcups-server.herokuapp.com/${data.cakeImgUrl}`}
                                    alt="Paella dish"
                                />

                                <CardContent className='big-desc'>
                                    <Typography variant="body2" color="text.secondary">
                                        This impressive paella is a perfect party dish and a fun meal to cook
                                        together with your guests. Add 1 cup of frozen peas along with the mussels,
                                        if you like.
                                    </Typography>
                                </CardContent>

                                <CardActions disableSpacing className='d-desc'>
                                    Description
                                    <ExpandMore
                                        expand={expanded}
                                        onClick={handleExpandClick}
                                        aria-expanded={expanded}
                                        aria-label="show more"
                                    >
                                        <ExpandMoreIcon />
                                    </ExpandMore>
                                </CardActions>
                                <Collapse in={expanded} timeout="auto" unmountOnExit>
                                    <CardContent>
                                        <Typography paragraph style={{ textAlign: 'justify' }}>
                                            Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over
                                            medium-high heat. Add chicken, shrimp and chorizo, and cook, stirring
                                            occasionally until lightly browned, 6 to 8 minutes. Transfer shrimp to a
                                            large plate and set aside, leaving chicken and chorizo in the pan. Add
                                            pimentón, bay leaves, garlic, tomatoes, onion, salt and pepper, and cook,
                                            stirring often until thickened and fragrant, about 10 minutes. Add
                                            saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
                                        </Typography>
                                    </CardContent>
                                </Collapse>
                            </Card>
                        </div>
                    </div>

                    <div className="col-lg-6 col-md-6 col-sm-12 single-right">

                        <div className="container">
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

                                            {data.cakeSize.map((option) => (
                                                <ToggleButton className='size-toggle' value={option.size} aria-label={option.price}>
                                                    <div className="container">
                                                        <div className="row">
                                                            <div className="col-12 col-sm-12"> {option.size} </div>
                                                            <div className="col-12 col-sm-12"> {option.price} </div>
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

                                    <div className="col-lg-6 col-md-12 col-sm-12 wishnq wqleft" style={{ paddingLeft: '0px' }}>

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


                                    <div className="col-lg-6 col-md-12 col-sm-12 wishnq wqright" style={{ paddingRight: '0px' }}>

                                        <p id='p-quatity'> Quantity </p>

                                        <TextField
                                            className='quantity-div'
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
            </div>
        </section>
    )

}

export default Single