import React, { Component } from 'react';
import './Grid.css';

class Grid extends Component {
    render() {
        return (
            <section className="grid">
                <div className="grid_container">

                    <div className="grid-card">
                        <a href="">
                            <img src="https://img2.cgtrader.com/items/2052418/f8a02d1db7/ironman-comics-3d-model-rigged-max--obj-mtl-3ds-fbx.jpg" alt="" className="grid-card_img"/>
                            <div className="grid-card_details">
                                <p>name</p>
                            </div>
                        </a>
                    </div>

                    <div className="grid-card">
                        <a href="">
                            <img src="https://img2.cgtrader.com/items/2052418/f8a02d1db7/ironman-comics-3d-model-rigged-max--obj-mtl-3ds-fbx.jpg" alt="" className="grid-card_img"/>
                            <div className="grid-card_details">
                                <p>name 2</p>
                            </div>
                        </a>
                    </div>
                </div>
            </section>
        );
    }
}

export default Grid;