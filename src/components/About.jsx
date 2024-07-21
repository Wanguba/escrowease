import Header from "./Header"
import { NavLink } from "react-router-dom"
export default function About(){
    return (
        <>
        <Header/>
        <div className="aboutcontainer">
        <h1 className="aboutus">ABOUT US</h1>
          <div className="aboutCard">
            <p className="paragraph">Welcome to our escrow service, where trust meets efficiency.
             With a commitment to safeguarding your transactions, we provide a secure platform for seamless exchanges.
             Our experienced team ensures transparency and reliability every step of the way, offering peace of mind in your financial dealings.
              Whether you're buying, selling, or trading, trust us to facilitate your transactions with integrity and professionalism.</p>
          </div>
          <NavLink className="goback" to={`/`}>
                        Go Back
                    </NavLink>
      </div>
        </>
    )
}