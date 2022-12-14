import React, { useEffect } from 'react'
import { getProducts } from '../Redux/App/appAction'
import axios from 'axios'



const Products = () => {


    useEffect(()=>{
            axios.get(`https://mywardrob-database-versel-phi.vercel.app/Product_array`).then((r)=>console.log(r.data))
        getProducts()
    },[])

  return (
    <div>
        <div>NAVBAR</div>

        <div>
                 <div>  <h2>LIPSTICKS</h2></div>
                
                
                <div style={{display:"flex"}}>

               
                <div>
                    <div>
                        <img src="https://files.myglamm.com/site-images/800x800/Lststr-1.jpg" style={{width:"100px", margin:"10px"}}></img>
                    </div>
                    <div>
                        <h4>Combo of 2 MyGlamm LIT Satin Matte Lipstick</h4>
                        <p>
                        Hi-Wattage 3D Satin Matte Finish Lipstick With Intense Colour Payoff
                        </p>
                        <p>₹990</p>
                    </div>
                </div>

                <div>
                    <div>
                        <img src="https://files.myglamm.com/site-images/800x800/Lststr-1.jpg" style={{width:"100px", margin:"10px"}}></img>
                    </div>
                    <div>
                        <h4>Combo of 2 MyGlamm LIT Satin Matte Lipstick</h4>
                        <p>
                        Hi-Wattage 3D Satin Matte Finish Lipstick With Intense Colour Payoff
                        </p>
                        <p>₹990</p>
                    </div>
                </div>

                <div>
                    <div>
                        <img src="https://files.myglamm.com/site-images/800x800/Lststr-1.jpg" style={{width:"100px", margin:"10px"}}></img>
                    </div>
                    <div>
                        <h4>Combo of 2 MyGlamm LIT Satin Matte Lipstick</h4>
                        <p>
                        Hi-Wattage 3D Satin Matte Finish Lipstick With Intense Colour Payoff
                        </p>
                        <p>₹990</p>
                    </div>
                </div>

               

                </div>
        </div>
    </div>
  )
}

export default Products


