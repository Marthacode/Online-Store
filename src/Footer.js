import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'


const Footer=()=>{
    return(
        <div>
            <div className="fouth-section row">
                <div className="col-md-4 mt-5">
                <FontAwesomeIcon icon="truck" size="3x" color="yellow" />
                <p>Fast Delivery</p>
                </div>
                <div className="col-md-4 mt-5">
                <FontAwesomeIcon icon= {['fas', 'user-shield']}  size="3x" color="yellow" />
                <p>Buyer Protection</p>
                </div>
                <div className="col-md-4 mt-5">
                <FontAwesomeIcon icon={['fas', 'phone-volume']}  size="3x" color="yellow" />
                <p>Customer Support</p>
                </div>
            </div>
            <div className="mt-5 last">
                <h6 className="text-muted">STORE DETAILS</h6>
                <h5>Target</h5>
                <p>Plot 12 main market road, Makurdi</p>
                <button type="button" class="btn btn-success">chat with us</button>
            </div>

        </div>
    )
}

export default Footer;