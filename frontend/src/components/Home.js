
import React, {Component} from 'react';
import  './Home.css';

export default class Home extends Component {
    render(){
        return (
      
    <div className="container-fluid">

    <div className="row">
        <div className="col">
            <div className="main">
                <div className="row justify-content-center">
                    <div className="col-2">
                        <div className="card bg-light" style={{width: 150}}>
              
                            <a href="/order">
                            <img className="card-img-top" src={require('../assets/logos/b1.jpeg')} alt="Card image cap" />
                            </a>
                            <div className="card-body">
                                <p className="card-text"><span className="name12">Laptop</span></p> 
                                <a href="/beauty" className="btn btn-outline-primary stretched-link">View Products</a>  
                            </div>
                        </div>
                    </div>
                    <div className="col-2">
                        <div className="card bg-light"style={{width: 150}} >
                            <a href="/order"><img className="card-img-top" src={require('../assets/logos/b2.jpg')} alt="Card image cap" />
                            </a>
                            <div className="card-body">
                            
                                <p className="card-text"><span className="name12">Sports</span></p>
                                <a href="/beakery" className="btn btn-outline-primary stretched-link">View Sports items</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-2">
                        <div className="card bg-light" style={{width: 150}}>
                            <a href="/order"><img className="card-img-top" src={require('../assets/logos/b4.jpg')} alt="Card image cap" />
                            </a>
                            <div className="card-body">
                            
                                <p className="card-text"><span className="name12">Bevarage</span></p>
                                <a href="/bevarage" className="btn btn-outline-primary stretched-link">View Drinks</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-2">
                        <div className="card bg-light" style={{width: 150}}>
                            <a href="/order"><img className="card-img-top" src={require('../assets/logos/b5.jpg')} alt="Card image cap" />
                            </a>
                            <div className="card-body">
                            
                                <p className="card-text"><span className="name12">MeansWear</span></p>
                                <a href="/food" className="btn btn-outline-primary stretched-link">View Outfits</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-2">
                        <div className="card bg-light" style={{width: 150}}>
                            <a href="/order"><img className="card-img-top" src={require('../assets/logos/lmc1.jpg')} alt="Card image cap" />
                            </a>
                            <div className="card-body">
                            
                                <p className="card-text"><span className="name12">Smartphones</span></p>
                                <a href="/cleaners" className="btn btn-outline-primary stretched-link">View Products</a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
    <div className="row">
        <div className="col">
            <div className="line">
                <span>Latest offers, Best deals</span>
            </div>
        </div>
    </div>

    <div className="row">

        <div className="col-3">
            <div className="card " style={{width: 250}}>
                <img className="card-img-top" src={require('../assets/logos/food2.jpg')} alt="Card image cap" />
                <div className="card-body">
                    <p className="card-text"></p>
                    <a href="/cart" className="btn btn-outline-primary stretched-link">Add to Cart</a>
                    <p className="card-line">Hisense 564 Litres Frost Free Side by Side Refrigerator with Water Dispenser (RS564N4SBNW, Black) Rs.57,990</p>
                </div>
            </div>
        </div>
        <div className="col-3">
            <div className="card " style={{width: 200}}>
                <img className="card-img-top" src={require('../assets/logos/food1.jpg')} alt="Card image cap" />
                <div className="card-body">
                    <p className="card-text"></p>
                    <a href="/cart" className="btn btn-outline-primary stretched-link">Add to Cart</a>
                    <p className="card-line">Kamiliant by American Tourister KAM Kiza Polypropylene 55 cms Ash Blue Hardsided Cabin Luggage Rs.1699</p>
                </div>
            </div>
        </div>
        <div className="col-3">
            <div className="card" style={{width: 200}}>
                <img className="card-img-top" src={require('../assets/logos/beauty1.jpeg')} alt="Card image cap" />
                <div className="card-body">
                <a href="/cart" className="btn btn-outline-primary stretched-link">Add to Cart</a>
                    <p className="card-text">Apple MacBook Pro 2020 (M1, 14.2 inch, 16GB, 1TB, macOS Monterey, Silver)Rs.2,19,990 </p>
                </div>
            </div>
        </div>
        <div className="col-3">
            <div className="card" style={{width: 200}}>
                <img className="card-img-top" src={require('../assets/logos/bev2.jpg')} style={{width: 200,height: 150}} alt="Card image cap" />
                <div className="card-body">
                <a href="/cart" className="btn btn-outline-primary stretched-link">Add to Cart</a>
                    <p className="card-text"> Johnnie Walker Blue Label Blended Scotch Whisky Scotland Rs.17,680</p>
                </div>
            </div>
        </div>

    </div>
</div>
            
 
        )
    }
}