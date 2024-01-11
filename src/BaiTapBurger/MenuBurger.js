import React, { Component } from 'react'
import { connect } from 'react-redux'
import {addRemoveBreadMid} from '../Redux/Action/BaiTapBurgerAction'
class MenuBurger extends Component {

    renderMenu = () => {
        let { menu, burger, total } = this.props;
        return Object.entries(menu).map(([propsMenu, value], index) => {
            return <tr key={index}>
                <td>{propsMenu}</td>
                <td>
                    <button className='btn btn-success mr-1' onClick={()=>{this.props.addRemoveBreadMid(propsMenu, 1)}}>+</button>
                    {burger[propsMenu]}
                    <button className='btn btn-warning ml-1' onClick={()=>{this.props.addRemoveBreadMid(propsMenu, -1)}}>-</button>
                </td>
                <td className='text-center'>{value.toLocaleString()}</td>
                <td className='text-right'>{(burger[propsMenu] * value).toLocaleString()}</td>
            </tr>
        })
    }

    render() {
        return (
            <div>
                <h3 className='text-center text-success burger'>Chọn thức ăn</h3>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Chọn thức ăn</th>
                            <th></th>
                            <th className='text-center'>Đơn giá</th>
                            <th>Thành tiền</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderMenu()}
                    </tbody>
                    <tfoot>
                        <tr>
                            <td colSpan={2}></td>
                            <td className='text-warning'>Tổng cộng:</td>
                            <td className='text-right text-warning'>{this.props.total.toLocaleString()}</td>
                        </tr>
                    </tfoot>
                </table>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        burger: state.BurgerReducer.burger,
        menu: state.BurgerReducer.menu,
        total: state.BurgerReducer.total
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        addRemoveBreadMid: (propsBurger, amount)=>{
            dispatch(addRemoveBreadMid(propsBurger, amount));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MenuBurger)
