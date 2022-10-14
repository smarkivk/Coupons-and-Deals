
import React, {Component} from 'react';
import  './Home.css';

export default class Beauty extends Component {
    render(){
        return (
   

    <div className="row">
        <div className="col-3">
            <div className="card " style={{width: 200}}>
                <img className="card-img-top" src={require('../assets/logos/b6.jpg')} alt="Card image cap" />
                <div className="card-body">
                    <p className="card-text"></p>
                    <a href="/order" className="btn btn-outline-primary stretched-link">Buy Now</a>
                    <p className="card-line">Asus HN356W TUF F15 Gaming Laptop (10th Gen Intel Core i5-10300H/16 GB/512 GB SSD/4GB Nvidia GeForce GTX 1650 Graphics/Windows 11/Full HD), 39.62 cm (15.6 inch): In just Rs.61999</p>
                </div>
            </div>
        </div>
        <div className="col-3">
            <div className="card " style={{width: 200}}>
                <img className="card-img-top" src={require('../assets/logos/b7.jpg')} alt="Card image cap" />
                <div className="card-body">
                    <p className="card-text"></p>
                    <a href="/order" className="btn btn-outline-primary stretched-link">Buy Now</a>
                    <p className="card-line">Asus ROG Strix G15 G513IH-HN086T Laptop AMD Octa Core Ryzen 7 4800H NVIDIA GeForce GTX 1650 8GB 512GB SSD Windows 10 In just Rs.71,999</p>
                </div>
            </div>
        </div>
        <div className="col-3">
            <div className="card" style={{width: 200}}>
                <img className="card-img-top" src={require('../assets/logos/beauty1.jpeg')} alt="Card image cap" />
                <div className="card-body">
                <a href="/order" className="btn btn-outline-primary stretched-link">Buy Now</a>
                    <p className="card-text">Apple MacBook Pro 2020 (M1, 14.2 inch, 16GB, 1TB, macOS Monterey, Silver)Rs 2,19,990 </p>
                </div>
            </div>
        </div>
        <div className="col-3">
            <div className="card" style={{width: 200}}>
                <img className="card-img-top" src={require('../assets/logos/b8.jpg')} style={{width: 150,height: 150}} alt="Card image cap" />
                <div className="card-body">
                <a href="/order" className="btn btn-outline-primary stretched-link">Buy Now</a>
                    <p className="card-text">DELL Alienware X15 Gaming Laptop Rs 3,12,000</p>
                </div>
            </div>
        </div>

    </div>

            
 
        )
    }
}