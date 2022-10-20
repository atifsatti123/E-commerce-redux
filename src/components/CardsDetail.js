import React, { useEffect, useState } from 'react'
import Table from "react-bootstrap/Table";
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { DLT,ADD,REMOVE } from './service/actions/Action';

const CardsDetail = () => {

const [data,setData] = useState([]);
// console.log(data)

const {id} = useParams();
// console.log(id)

const navigate = useNavigate();

const dispatch = useDispatch();

const getdata = useSelector((state)=> state.Cartreducer.carts);
// console.log(getdata)

const compare = ()=>{
    let comparedata = getdata.filter((i)=> {
        return i.id == id
    });
    setData(comparedata);
}
// add data

const send = (i) => {
    // console.log('xxx',i);
    dispatch(ADD(i));
    }
const dlt = (id)=>{
    console.log(id)
    dispatch(DLT(id))
    navigate('/');
  }

  // remove one
  const remove = (item)=> {
   dispatch(REMOVE(item))
  }


useEffect(()=> {
    compare();
},[id])

  return (
   <>
   <div className='container mt-2'>
    <h2 className='text-center'>Items Details Page</h2>

    <section className="container mt-3">
        <div className='itemsdetails'>
            {
                data.map((itm)=> {
                    return (
                        <>
                        <div className='items_img'>
                <img src={itm.imgdata} />
            </div>
            <div className='details'>
             <Table>
                <tr>
                    <td>
                        <p><strong>Restaurant</strong>  :{itm.rname}</p>
                        <p><strong>Price</strong>  : ₨ {itm.price}</p>
                        <p><strong>Dishes</strong>  :{itm.address} </p>
                        <p><strong>Total</strong>  : ₨ {itm.price * itm.qnty}</p>
                        <div className='mt-5 d-flex justify-content-between align-item-center' style={{width:100,cursor:"pointer",background:"#ddd",color:"#111"}}>
                        <span style={{fontSize:24}} onClick={itm.qnty <=1 ? ()=>dlt(itm.id) : ()=>remove(itm)}>-</span>
                        <span style={{fontSize:22}}>{itm.qnty}</span>
                        <span style={{fontSize:24}} onClick={()=>send(itm)}>+</span>
                        </div>
                        
                    </td>
                    <td>
                        <p><strong>Rating :</strong><span style={{background:"green",color:"#fff",padding:"2px 5px",borderRadius:"5px"}}>{itm.rating} ★</span></p>
                        <p><strong>Order Review :</strong><span>{itm.somedata}</span></p>
                        <p><strong>Remove :</strong><span><i className='fas fa-trash' onClick={()=>dlt(itm.id)} style={{color:"red",fontSize:20,cursor:"pointer"}}></i></span></p>
                    </td>
                </tr>
             </Table>
            </div>
        
                        </>
                    )
                })
            }
           
</div>
    </section>
   </div>
   </>
  )
}

export default CardsDetail