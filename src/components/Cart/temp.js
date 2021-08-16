import React from 'react';
import { BrowserRouter as Router} from "react-router-dom";
import axios from 'axios';

import ReactDOM from 'react-dom';
import './Cart.scss';
import Topheader from "../top_header";
import Footer from '../Footer/footer2';
import Beacon from './beacon2.png';
import { Modal, Button, Form } from "react-bootstrap";
class Temp extends React.Component {
  state = {
   
    street_add:'',
    city:'',
    pin:'',
    user: [],
    prods: [],
    total: [],
    street_addTitle: [],
    cityTitle: [],
    pinTitle: [],
    response:[],
    address: []
  };


handleChange=({target})=>{
  const {name,value} = target;
  this.setState({  [name]:value });
}

changeShow=()=>{

}

componentDidMount=()=>{
    this.getproduct();
}

onChange = i => {
    const street_add = this.state.address[i].street_add;
    const city = this.state.address[i].city;
    const pin = this.state.address[i].pin;
    this.setState({
      street_addTitle: street_add,
      cityTitle: city,
      pinTitle: pin,
      checked: i
  });
};

submit=(e)=>{
    e.preventDefault();
    const payload={
      street_add:this.state.street_add,
      city:this.state.city,
      pin:this.state.pin
};


axios({
      url:'http://localhost:5000/do-addAddress',
      method:'POST',
      data:payload
    }).then(()=>{
      console.log('Data sent');
      this.resetUserInputs();
      this.getproduct();
        }).catch((err)=>{console.log(err);
        });
}

resetUserInputs=()=>{
    this.setState({street_add: '',city: '' , pin:''});
}

getproduct = () => {
    axios.get('/cart')
      .then((res) => {
        console.log(res.data.user.cart.totalPrice);
        const user = res.data.user;
        const prods = res.data.user.cart.items;
        const total = res.data.user.cart.totalPrice;
        const address = res.data.user.address;
        this.setState({ user: user });
        this.setState({ prods: prods });
        this.setState({ total: total });
        this.setState({ address: address });
        this.setState({ checked: 0 });
        this.setState({ street_addTitle: this.state.address[0].street_add })

        
        this.setState({ cityTitle: this.state.address[0].city })
        this.setState({ pinTitle: this.state.address[0].pin })
      })
      .catch(() => {
        alert('error!!')
      });
}




//from here we ARE listing products
cartprod = (prods) => {
    if (!prods.length){
     return(

/* this is demo item*/
      
      <div className="row" id="items">
      
      <div className="col-sm-4 col-md-4 col-6">
      
      <img src={Beacon} />
      </div>
      
      
      <div className="col-sm-8 col-md-8 col-6">
          <h1> Demo name </h1>
          <p> this is only for demo , connected , it will be set off</p>
          <div id="desktop">
          <div className="form-group- form-inline" >
        <label id="itemquantity">Qty:</label>
        <select className="form-control" >
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
        </select>
      </div>
      <table>
          <tr>
              <td>
      <h2>Price: <span>( <del>₹ {2620 + 2620/10} </del>) </span>  <span id="span2">2620</span>  </h2>
      </td>
      <td>
      <button className="btn btn-outline-danger" id="delete">  <i className="fa fa-trash" ></i>Delete</button></td>
      </tr>
      </table>
      </div>
      </div>
      
      <div className="col-sm-0 col-md-0 col-12">
      <div id="phone">
      <table>
          <tr>
              <td>
          <div className="form-group- form-inline" >
        <label id="itemquantity">Qty:</label>
        <select className="form-control" >
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
        </select>
      </div>
      </td>
      <td>
      <form>
      <input type="hidden"  name="prodId"/>
      <button className="btn btn-outline-danger" id="delete" type="submit" value="Delete" >  <i className="fa fa-trash" ></i>Delete</button>
    </form>
    </td>
      </tr>
          <tr>
              <td colSpan={2}>
      <h2>Price: <span>( <del>₹ {2620 + 2620/10} </del>) </span>  <span id="span2">₹ 2629</span>  </h2>
      </td>
      
      </tr>
      </table>
      </div>
      </div>
      
      </div>
            
      

    );
     }
    return prods.map((post, index) => (




     /* <tbody key={index}>
        <tr>
          <td></td>
          <td>{post.product_title}</td>
          <td>{post.price}</td>
          <td>{post.qty}</td>
          <td>{post.price * post.qty}</td>
          <td><form method="POST" action="http://localhost:5000/deleteInCart">
            <input type="hidden" value={post.productId} name="prodId"/>
            <input type="submit" value="Delete" className="btn btn-danger"/></form></td>
        </tr>
      </tbody>
      */
      
      <div className="row" id="items" key={index}>
      
      <div className="col-sm-4 col-md-4 col-5">
      
      <img src={Beacon} />
      </div>
      
      
      <div className="col-sm-8 col-md-8 col-7">
          <h1> {post.product_title} </h1>
          <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
          <div id="desktop">
          <div className="form-group- form-inline" >
        <label id="itemquantity">Qty:</label>
        <select className="form-control" >
          <option>{post.qty}</option>
          <option>{post.qty+1}</option>
          <option>{post.qty+2}</option>
          <option>{post.qty+3}</option>
        </select>
      </div>
      <table>
          <tr>
              <td>
      <h2>Price: <span>( <del>₹ {post.price+(post.price/10)} </del>) </span>  <span id="span2">₹ {post.price} </span>  </h2>
      </td>
      <td>
      <form method="POST" action="http://localhost:5000/deleteInCart">
      <input type="hidden" value={post.productId} name="prodId"/>
     
      <button className="btn btn-outline-danger" id="delete" type="submit" value="Delete" >  <i className="fa fa-trash" ></i>Delete</button>
    </form>
      </td>
      </tr>
      </table>
      </div>
      </div>
      
      <div className="col-sm-0 col-md-0 col-12">
      <div id="phone">
      <table>
          <tr>
              <td>
          <div className="form-group- form-inline" >
        <label id="itemquantity">Qty:</label>
        <select className="form-control" >
        <option>{post.qty}</option>
          <option>{post.qty+1}</option>
          <option>{post.qty+2}</option>
          <option>{post.qty+3}</option>
        </select>
      </div>
      </td>
      <td>
      <form method="POST" action="http://localhost:5000/deleteInCart">
      <input type="hidden" value={post.productId} name="prodId"/>
     
      <button className="btn btn-outline-danger" id="delete" type="submit" value="Delete" >  <i className="fa fa-trash" ></i>Delete</button>
    </form>
    </td>
      </tr>
          <tr>
              <td colSpan={2}>
      <h2>Price: <span>( <del>₹ {post.price+(post.price/10)} </del>)</span>  <span id="span2">₹  {post.price}</span>  </h2>
      </td>
      
      </tr>
      </table>
      </div>
      </div>
      
      </div>
      
      
      
      
      
      
      
      ));
      };






      //from here we are listing the different address
      useraddress = (address) => {
        if (!address.length){
           return (
<div>
<label className="form-check-label" style={{"marginTop":"5px"}}>
        <input type="radio" className="form-check-input" id="radio1" name="optradio" value="option1" checked/>

        this is demo address<br/>demo city <br/> demo pin
      </label>
</div>
        );
           }
        return address.map((add, i) => (
       /*   <div>
            <label key={i}>
              <input type="radio" checked={this.state.checked === i ? true : false} key={i}
                name="deliver" value={this.state.address[i]._id} onChange={this.onChange.bind(this, i)} />
                {add.street_add}<br />{add.city}<br />{add.pin}</label>
          </div>
          */
<div>
<label className="form-check-label" style={{"marginTop":"5px"}} key={i}>
              <input type="radio" className="form-check-input" id="radio1" 
              checked={this.state.checked === i ? true : false} key={i}
              name="deliver" value={this.state.address[i]._id} onChange={this.onChange.bind(this, i)} />
              {add.street_add}<br />{add.city}<br />{add.pin}
            </label>
</div>

        ));
      };




      //from here return starts
   render() {
    return ( 
      <>
      <Topheader/>
      <div id="cart">
      
          <div className="container">
              <div className="row">
              <div className="col-sm-12 col-md-12 col-12 heading">
      
      <h1>My Cart Items  </h1>
      <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
      </div>    
      <div className="col-sm-12 col-md-8 col-12">
      
      {/* listing fo the items */}
      { this.cartprod(this.state.prods)}
      
      </div>
      
      <div className="col-sm-12 col-md-4 col-12">
      
      
          <div className="checkout">
              <table >
      <tr>
          <td colSpan={2}> <h1> Order Details</h1></td>
          </tr>
          <tr>
              <td id="left" style={{"color":"grey"}}>Bag Details</td> <td id="right"> ₹ 6920</td>
              </tr>
              <tr>
              <td id="left" style={{"color":"grey"}}>Bag Discounts</td> <td id="right"> <span style={{"color":"grey"}}> -₹ 2720</span></td>
              </tr>
              <tr>
              <td id="left" style={{"color":"grey"}}>Delivery</td> <td id="right"> <span style={{"color":"grey"}}> ₹ 199</span></td>
              </tr>
              <tr>
              <td id="left">Total Amount:</td> <td id="right"> <span > ₹ 4960</span></td>
              </tr>
              <tr>


          <td colSpan={2}> <button className="btn btn-primary" id="checkoutbtn"> Proceed to Checkout</button></td>

          </tr>
          <tr>
          <td colSpan={2}> <h2> Select Delivery address</h2></td>
          </tr>
      <tr>
          <td colSpan={2}>
          <form className="form">
          <div className="form-check">


          {/* here we are listing address*/}
          {this.useraddress(this.state.address)}
          </div>
          
        </form>
          </td>
      </tr>
      
      <tr>
          <td colSpan={2}> <button className="btn btn-primary"  id="addaddress" data-toggle="collapse" data-target="#collapse" aria-expanded="true"
           aria-controls="collapsePages" > Add new Address </button>
        
          <div  >
         {/* this is the form to add new address */}

          <div id="collapse" className="collapse" style={{"margin-top":"5%"}}>
          <form onSubmit={this.submit}> 
                    <div className="form-group">
                    <div className="row">
                        <div className="col-md-12 div-col-sm-12 col-12">
                        <label>Street Address</label>
                        <input type="text" name="street_add" value={this.state.street_add} placeholder="Enter Street Address" 
                        onChange={this.handleChange} className="form-control" />
                    </div>
                    </div>
                    </div>
                    <div className="form-group">
                    <div className="row">
                    <div className="col-md-12 div-col-sm-12 col-12">
                        <label>City</label>
                        <input type="text" name='city' value={this.state.city} placeholder="Enter City"
                        onChange={this.handleChange} className="form-control" />
                    </div>
                    </div>
                    </div>
                    <div className="form-group">
                    <div className="row">
                    <div className="col-md-12 div-col-sm-12 col-12">
                        <label>Pin</label>
                        <input type="text" name="pin" value={this.state.pin} placeholder="Enter PIN"
                        onChange={this.handleChange} className="form-control" />
                    </div>
                    </div>
                    </div>
                    <button className="btn btn-outline-primary"  >Submit</button>
                </form>
                </div>
          </div>
          </td>


          </tr>
      
              </table>
      
          </div>
      
          
      </div>
      
              </div>
          </div>
      
      
      
      
      
   

      <div className="wrapper"> 
          <form method="POST" name="customerData" action="http://localhost:5000/ccavRequestHandler">
            <input type="hidden" name="merchant_id" id="merchant_id" value="271474" />
            <input type="hidden" name="order_id" value="SNORD1234" />
            <input type="hidden" name="currency" value="INR" />
            <input type="hidden" name="amount" value="1" />
            <input type="hidden" name="redirect_url"
              value="http://localhost:5000/ccavResponseHandler" />
            <input type="hidden" name="cancel_url"
              value="http://localhost:5000/ccavResponseHandler" />
            <input type="hidden" name="language" id="language" value="EN" />
            <input type="hidden" name="billing_name" value={this.state.user.username} />
            <input type="hidden" name="billing_address"
              value={this.state.street_addTitle} />
            <input type="hidden" name="billing_city" value={this.state.cityTitle} />
            <input type="hidden" name="billing_state" value="UP" />
            <input type="hidden" name="billing_zip" value={this.state.pinTitle} />
            <input type="hidden" name="billing_country" value="India" />
            <input type="hidden" name="billing_tel" value={this.state.user.contact_no} />
            <input type="hidden" name="billing_email" value={this.state.user.email} />
            <input type="hidden" name="delivery_name" value="Sam" />
            <input type="hidden" name="delivery_address"
					value="Vile Parle" />
          <input type="hidden" name="delivery_city" value="Mumbai" />
          <input type="hidden" name="delivery_state" value="Maharashtra" />
          <input type="hidden" name="delivery_zip" value={this.state.pinTitle} />
          <input type="hidden" name="delivery_country" value="India" />
          <input type="hidden" name="delivery_tel" value="0123456789" />
            <input type="submit" value="Checkout" className="btn btn-success"/>
          </form>
        </div>
        </div>
      <Footer/>
          </>
    );
  }
}
export default Temp;