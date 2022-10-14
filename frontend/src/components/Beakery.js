
import React, {Component} from 'react';
import  './Home.css';

export default class Beakery extends Component {
    render(){
        return (
   

    <div className="row">
        <div className="col-3">
            <div className="card " style={{width: 250}}>
                <img className="card-img-top" src={require('../assets/logos/b9.jpg')} alt="Card image cap" />
                <div className="card-body">
                    <p className="card-text"></p>
                    <a href="/order" className="btn btn-outline-primary stretched-link">Buy Now</a>
                    <p className="card-line">Nike Phantom GT2 Elite FG: In just Rs.21,995</p>
                </div>
            </div>
        </div>
        <div className="col-3">
            <div className="card " style={{width: 200}}>
                <img className="card-img-top" src={require('../assets/logos/b10.jpg')} alt="Card image cap" />
                <div className="card-body">
                    <p className="card-text"></p>
                    <a href="/order" className="btn btn-outline-primary stretched-link">Buy Now</a>
                    <p className="card-line">HOKA
Clifton 8 Rock Grey Men Running Shoes:Piece in Rs.11,999</p>
                </div>
            </div>
        </div>
        <div className="col-3">
            <div className="card" style={{width: 200}}>
                <img className="card-img-top" src={require('../assets/logos/b11.jpg')} alt="Card image cap" />
                <div className="card-body">
                <a href="/order" className="btn btn-outline-primary stretched-link">Buy Now</a>
                    <p className="card-text">AL RIHLA LEAGUE BALL:In just Rs.3599 </p>
                </div>
            </div>
        </div>
        <div className="col-3">
            <div className="card" style={{width: 200}}>
                <img className="card-img-top" src={require('../assets/logos/b12.jpg')} style={{width: 200,height: 300}} alt="Card image cap" />
                <div className="card-body">
                <a href="/order" className="btn btn-outline-primary stretched-link">Buy Now</a>
                    <p className="card-text">Venum Elite 2.0 Black BJJ Gi Rs.5181</p>
                </div>
            </div>
        </div>

    </div>

            
 
        )
    }
}