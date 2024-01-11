import React, { Component } from 'react';
import './BaiTapBurger.css';
import BanhBuger from './BanhBuger';
import MenuBurger from './MenuBurger';

export default class BaiTapBurger extends Component {
  render() {
    return (
      <div className='container burger'>
        <h3 className='display-4 text-success text-center' style={{ fontFamily: 'font-game' }}>Bài tập burger cybersoft</h3>
        <div className='row'>
          <div className='col-7'>
           <BanhBuger/>
          </div>
          <div className='col-5'>
            <MenuBurger/>
          </div>
        </div>
      </div>
    )
  }
}

