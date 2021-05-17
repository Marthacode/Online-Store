import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import HomeLogo from './HomeLogo.png'
import Acct from './Acct.png'
import Bag from './Bag.png'

const Header=()=>{
    return(
        <div>
            <div className="first-head">
                <p>Welcome to your online store</p>
            </div>
            <div className="row second-head mt-3">
                <div className="col-md-4 col-sm-12 home">
                <div className="homelogo"><li><img src={HomeLogo} alt="home" /></li></div>
                <li><h5 className="ml-3">Terget</h5></li><br />
                <li><p className="mr-5">Plot 12 main market road, Makurdi</p></li>
                </div>
                <div className="col-md-4 col-sm-12 edge">
                    <li><img src={Bag} alt="bag" /></li>
                    <li className="text-muted"><a href="hey.html">Bag</a></li>
                    <li><img src={Acct} alt="account" /></li>
                    <li><a href="idex.html">Account</a></li>
                </div>
                <div className="col-md-4 col-sm-12 s-form">
                    <form action="#" method="get">
                        <div className="input-group">
                            <input className="form-control py-2 border-right-0 border" name="s" type="search"
                                placeholder="Search for Products..." />
                            <span className="input-group-append">
                                <button className="btn border-left-1 border bg-warning" type="submit">
                                    <FontAwesomeIcon icon= {['fas', 'search']} color="blue" />
                                </button>
                            </span>

                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default Header;