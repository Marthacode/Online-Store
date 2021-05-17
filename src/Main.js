import React  from 'react'
import SadEmogi from './SadEmogi.png'
import data from './data.json'

const Main =()=>{
    return(
        <div>
            <div className="row main">
            <div className="col-3 first">
                    <h6 class="mt-4 text-primary">Electronics [12]</h6>
                    <p>Face Mask [3]</p>
                    <p>Home [6]</p>
                    <p>kids [26]</p>
                    <p>Grocery [9]</p><br />
                    <h6 className="text-primary">View all categories </h6>
            </div>
            <div className="col-6 second">
                <div className="row">
                <li><h3 className="mt-4">Electronics  </h3></li>
                <li><button className="btn btn-primary mt-4">12</button></li>
                </div>
                <div>

                {
                    data.map(data =>
                      <div className="row all">
                            <div className="col-md-8 myimg">
                            <img src={data.image} alt="item " style={{width:200+'px'}} />
                        </div>
                        <div className="col-md-4 details">
                            <h4>{data.name}</h4>
                            <h6>{data.price}</h6>
                            <button className="btn btn-primary" type="button">Add to Bag</button>
                        </div>
                      </div>
                       
                    )
                }

                    
            </div>
             </div>

            <div className="col-3 third">
                <li><h3 className="mt-4">Bag</h3></li>
                <li><button className="btn btn-primary mt-4">0</button></li>
                <img src={SadEmogi} alt="sad emogi" width="50%" />
                <h6>It's empty here</h6>
                <p>start shopping to add items to your bag</p>
            </div>
            </div>
        </div>
      
    )
}


export default Main;