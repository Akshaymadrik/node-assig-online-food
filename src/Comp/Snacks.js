import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navs from '../Components/Home';

export default function Snacks() {
    const [state, setState] = useState({ productData: [] })
    const [filter,setFilter]=useState('')

    useEffect(() => {
        const URL = "http://localhost:5004/Snacks";
        axios.get(URL)
            .then(res => {
                console.log(res.data)
                setState({ ...state, productData: res.data })

            })
    }, [])

    
  
  return (
    <>
    <Navs/>
     
      <div className="container bg-light mt-4">
            <div className="row d-flex justify-content-center">
                {state.productData.map(item =>
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
       
        </>
    )
}
