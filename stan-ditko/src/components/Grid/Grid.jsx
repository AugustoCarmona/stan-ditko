import React, { Component } from 'react';
import './Grid.css';

class Grid extends Component {
    render() {
        return (
            <section className="grid">
                <div className="grid_container">

                    <div className="grid-card">
                        <a href="">
                            <img src="https://i.pinimg.com/originals/87/dc/02/87dc02961d6c4afaf0fd458cf4f3f261.jpg" alt="Wolverine" className="grid-card_img"/>
                            <div className="grid-card_details">
                                <p>Wolverine</p>
                            </div>
                        </a>
                    </div>

                    <div className="grid-card">
                        <a href="">
                            <img src="https://otakukart.com/wp-content/uploads/2021/05/Marvel-Characters-Scarlet-Witch.jpg" alt="Scarlet Witch" className="grid-card_img"/>
                            <div className="grid-card_details">
                                <p>Scarlet Witch</p>
                            </div>
                        </a>
                    </div>

                    <div className="grid-card">
                        <a href="">
                            <img src="https://dam.smashmexico.com.mx/wp-content/uploads/2018/09/07142333/spidermanbio_portada.jpg" alt="Spider Man" className="grid-card_img"/>
                            <div className="grid-card_details">
                                <p>Spider Man</p>
                            </div>
                        </a>
                    </div>

                    <div className="grid-card">
                        <a href="">
                            <img src="https://wallpaperaccess.com/full/3954030.jpg" alt="Hulk" className="grid-card_img"/>
                            <div className="grid-card_details">
                                <p>Hulk</p>
                            </div>
                        </a>
                    </div>

                    <div className="grid-card">
                        <a href="">
                            <img src="https://i.pinimg.com/originals/13/8a/b1/138ab1588ee061065f626c726705a39b.jpg" alt="Capitan America" className="grid-card_img"/>
                            <div className="grid-card_details">
                                <p>Capitan America</p>
                            </div>
                        </a>
                    </div>

                    <div className="grid-card">
                        <a href="">
                            <img src="https://i.pinimg.com/736x/8c/3a/03/8c3a0385d43aea79e3d182f0da1a5d19.jpg" alt="Dr. Strange" className="grid-card_img"/>
                            <div className="grid-card_details">
                                <p>Dr. Strange</p>
                            </div>
                        </a>
                    </div>

                    <div className="grid-card">
                        <a href="">
                            <img src="https://i.pinimg.com/736x/c9/d7/32/c9d7328eaef2bba6e93c313cac0be8e0.jpg" alt="Black Widow" className="grid-card_img"/>
                            <div className="grid-card_details">
                                <p>Black Widow</p>
                            </div>
                        </a>
                    </div>

                    <div className="grid-card">
                        <a href="">
                            <img src="https://i.pinimg.com/originals/5f/ec/01/5fec01fcc234324095cab20cd43dbb6a.jpg" alt="Iron Man" className="grid-card_img"/>
                            <div className="grid-card_details">
                                <p>Iron Man</p>
                            </div>
                        </a>
                    </div>
                </div>
            </section>
        );
    }
}

export default Grid;