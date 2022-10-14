
import React, {Component} from 'react';
import  './Home.css';

export default class Cleaners extends Component {
    render(){
        return (
   

    <div className="row">

        <div className="col-3">
            <div className="card " style={{width: 250}}>
                <img className="card-img-top" src={require('../assets/logos/b20.jpg')} alt="Card image cap" />
                <div className="card-body">
                    <p className="card-text"></p>
                    <a href="/order" className="btn btn-outline-primary stretched-link">Buy Now</a>
                    <p className="card-line">Redmi 10s: In just Rs.14500</p>
                </div>
            </div>
        </div>
        <div className="col-3">
            <div className="card " style={{width: 300}}>
                <img className="card-img-top" src={require('../assets/logos/b21.jpg')} alt="Card image cap" />
                <div className="card-body">
                    <p className="card-text"></p>
                    <a href="/order" className="btn btn-outline-primary stretched-link">Buy Now</a>
                    <p className="card-line">OnePlus Nord CE 2 5G (Gray Mirror, 6GB RAM, 128GB Storage): in Rs.22,999</p>
                </div>
            </div>
        </div>
        <div className="col-3">
            <div className="card" style={{width: 200}}>
                <img className="card-img-top" src={require('../assets/logos/b23.jpg')} style={{width: 180,height: 220}} alt="Card image cap" />
                <div className="card-body">
                <a href="/order" className="btn btn-outline-primary stretched-link">Buy Now</a>
                    <p className="card-text">Apple iPhone 13 (128GB, Midnight Black) Rs.63,000</p>
                </div>
            </div>
        </div>

    </div>

            
 
        )
    }
}