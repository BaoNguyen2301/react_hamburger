import React, { Component } from 'react'
import { connect } from 'react-redux';
class BanhBuger extends Component {

    renderBreadMid = () => {
        let {burger} = this.props;
        return  Object.entries(burger).map(([propsBurger, value], index) => {
            let breadMid = [];
            for(let i = 0; i<value; i++){
                breadMid.push(<div key={i} className={propsBurger}></div>)
            }
            return breadMid;
        });
    }

  render() {
    return (
      <div>
         <h3 className='text-center text-warning burger'>Bánh burger của bạn</h3>
            <div className='breadTop'></div>
            {this.renderBreadMid()}
            <div className='breadBottom'></div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    burger: state.BurgerReducer.burger
  }
}

export default connect (mapStateToProps) (BanhBuger)
