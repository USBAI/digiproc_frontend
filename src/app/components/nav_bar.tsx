import './styling/nav_bar.css'
import digiproc_logo from './images/digiproc_logo.svg'



export default function NavBar() {
    return (
        <>
            <div className='navbar_div_940'>
                <div className='navholder__inner'>
                    <div className='__logo__949_digiproc'>
                        <img src="https://cdn.prod.website-files.com/631606e83c13edc22cfb6d57/65b36e2a8debdc76ecd1b75e_digiproc_logo.png" alt="digiproc_logo" />
                    </div>
                    <div className='__quicklinks__032'>
                        <div className='__quicklinks__032_div1'>
                            <div>
                                <div>
                                    <a href="/services">Our Services</a>
                                </div>
                                <div>
                                    <a href="/">Academy & Insights</a>
                                </div>
                                <div>
                                    <a href="/">Career</a>
                                </div>
                                <div>
                                    <a href="/">About</a>
                                </div>
                            </div>
                        </div>
                        <div className='__quicklinks__032_div2'>
                            <div>
                                <div>
                                    <a href="/">Contact Us</a>
                                </div>
                                <div>
                                    <a href="/about">Log in as supplier</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
  }
  