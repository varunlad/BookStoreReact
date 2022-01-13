import React from 'react'
import './OrderPlaced.css'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import img from '../../asserts/orderplaced.jpeg'
import { Button } from 'antd';
import { useHistory } from "react-router-dom";
import { Table } from 'antd';

function OrderPlaced() {
    let history=useHistory();
    const columns = [
        {
          title: 'Email us',
          dataIndex: 'email',
          key: 'email'
        },
        {
          title: 'Contact us',
          dataIndex: 'contact',
          key: 'contact',
        },
        {
          title: 'Address',
          dataIndex: 'address',
          key: 'address',
        }]
        const data = [
            {
              key: '1',
              email: 'admin@bookstore.com',
              contact: '8163475881',
              address: '42, 14th Main, 15th Cross, Sector 4 ,opp to BDA complex, near Kumarakom restaurant, HSR Layout, Bangalore 560034'
            }]
    return (
        <div className="MainHeader">
        <Header />      
        <div className="OrdersDetails">
            <div className="orderdetail1">
            <div className="orderdetail1a">
            <img src={img} class="place" />
            <div className="textplaced">
            <p><b>hurry!!!! your order is confirmed</b></p>
            <p><b>your order id is #12345 save the order id for</b> </p>
            <p><b>further  Communication</b></p>
            
            </div>
            {/* <Table className="table" columns={columns} dataSource={data} /> */}
            </div>
            <div className="orderdetail1b">
            <Table className="table" columns={columns} dataSource={data} />
            </div>
            <div className="Bottomab">
                 <Button type="primary" style={{width:120}} onClick={()=>(history.push('/'))}>Signup/Login</Button>
                 </div>
            </div>
            
        </div>
        <Footer />
    </div>
    )
}

export default OrderPlaced
