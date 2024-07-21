import logo from '../images/logo.png';
import { NavLink } from 'react-router-dom';
export default function Navbar() {


    return(
        <div className="navbar">

                    <div className="logo">
                        <img className='logo2' src={logo} alt="logo" />
                    </div>


                    <div className="menu">
                        <ul> 
                        <NavLink className="btn" to={`/list`}>
                        FIND A CAR
                    </NavLink>
                        <NavLink className="btn" to={`/`}>
                        HOME
                    </NavLink>
                            <NavLink className="btn" to={`/about`}>
                        ABOUT
                    </NavLink>
                   
                    <NavLink className="btn" to={`/contact`}>
                        CONTACT US
                    </NavLink>
                    
                        </ul>
                    </div>
       </div>
    )
}







