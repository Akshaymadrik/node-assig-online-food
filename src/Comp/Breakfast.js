import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navs from '../Components/Home';

export default function Breakfast() {

    const [state, setState] = useState({ productData: [] })
    const [filter,setFilter]=useState('')
   

    useEffect(() => {
        const URL = "http://localhost:5004/Breakfast";
        axios.get(URL)
            .then(res => {
                console.log(res.data)
                setState({ ...state, productData: res.data })

            })
    }, [])

    const searchProducts=(event)=>{
        setFilter(event.target.value)
    }
    let dataSearch=state.productData.filter(item =>{
        return Object.keys(item).some(key =>
        item[key].toString().toLowerCase().includes(filter.toString().toLowerCase())
    )
    });
    
    return (
      <>
        <Navs/>
        <div className='container text-center bg-light pt-3'>
        <h1>Our Store</h1>
        <div className="container pt-3">
            <input
               type="text"
               className="form-control"
               placeholder="Search Proucts Here"
               value={filter}
               onChange={searchProducts.bind(this)}
               />
        </div>
        <div className="container bg-light mt-4">
            <div className="row d-flex justify-content-center">
            
                {dataSearch.map(item =>
                    <div className="col-lg-4 col-sm-2">
                        <div className="card m-3 w-75 text-center text-dark">
                            <img src={`images/${item.images}`} height="160px" />
                            <h5>{item.title}</h5>
                            <p>{item.price}</p>

                        </div>
                    </div>
                )}

            </div>
        </div>

        </div>
        </>
    )
}
