
import React, {Component} from 'react';
import  './Home.css';

export default class Bevarage extends Component {
    render(){
        return (
   

    <div className="row">
        <div className="col-3">
            <div className="card " style={{width: 250}}>
                <img className="card-img-top" src={require('../assets/logos/b13.jpg')} alt="Card image cap" />
                <div className="card-body">
                    <p className="card-text"></p>
                    <a href="/order" className="btn btn-outline-primary stretched-link">Buy Now</a>
                    <p className="card-line">META MOON 12 PACK INR 2099</p>
                </div>
            </div>
        </div>
        <div className="col-3">
            <div className="card " style={{width: 200}}>
                <img className="card-img-top" src={require('../assets/logos/b14.jpg')} alt="Card image cap" />
                <div className="card-body">
                    <p className="card-text"></p>
                    <a href="/order" className="btn btn-outline-primary stretched-link">Buy Now</a>
                    <p className="card-line">Fresh Mint Lemonade Regular price Sale price Rs. 49.00</p>
                </div>
            </div>
        </div>
        <div className="col-3">
            <div className="card" style={{width: 200}}>
                <img className="card-img-top" src={require('../assets/logos/b15.jpg')} alt="Card image cap" />
                <div className="card-body">
                <a href="/order" className="btn btn-outline-primary stretched-link">Buy Now</a>
                    <p className="card-text">Sleepy Owl Cold Brew Coffee, 200 ml Bottle Rs.75 </p>
                </div>
            </div>
        </div>
        <div className="col-3">
            <div className="card" style={{width: 200}}>
                <img className="card-img-top" src={require('../assets/logos/bev2.jpg')} alt="Card image cap" />
                <div className="card-body">
                <a href="/order" className="btn btn-outline-primary stretched-link">Buy Now</a>
                    <p className="card-text">Johnnie Walker Blue Label Blended Scotch Whisky Scotland Rs.17,680</p>
                </div>
            </div>
        </div>

    </div>

            
 
        )
    }
}