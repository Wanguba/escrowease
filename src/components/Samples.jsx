import car1 from '../images/BMW (1).jpg';
import car2 from '../images/BMW X6 M Competition 2024.jpg';
import car3 from '../images/BMW.jpg';
export default function Samples(){
    return(

        <div className='sample-container'>

            <div>
            <img className='car1' src={car1} alt="" />
            </div>
            <div>
            <img className='car2' src={car2} alt="" />
            </div>
            <div>
            <img className='car1' src={car3} alt="" />
            </div>

        </div>

    )
}