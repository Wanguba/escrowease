import welcome from '../images/welcome.png';
import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

export default function Welcome(){
     






    const [cars, setCars] = useState([]);
  const [selectedCar, setSelectedCar] = useState(null);

  useEffect(() => {
    fetchData('BMW');
  }, []);

  const fetchData = (carType) => {
    fetch(`https://projectdb-885a.onrender.com/${carType}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    })
    .then(response => response.json())
    .then(data => setCars(data))
    .catch(error => console.error('Error fetching data:', error));
  }

  const handleButtonClick = (carType) => {
    if (selectedCar === carType) {
      setSelectedCar(null);
      setCars([]); 
    } else {
      setSelectedCar(carType);
      fetchData(carType);
    }
  };

  return (
    <> 
      <div className='welcome-container'>

        <div>
          <img className='welcome' src={welcome} alt="" />
        </div>
       
        <div className='btns'>
          <button onClick={() => handleButtonClick('BMW')}>BMW</button>
          <button onClick={() => handleButtonClick('Toyota')}>TOYOTA</button>
          <button onClick={() => handleButtonClick('Nissan')}>NISSAN</button>
          <button onClick={() => handleButtonClick('Audi')}>AUDI</button>
          <button onClick={() => handleButtonClick('Mercedes')}>MERCEDES</button>
        </div>
      </div>
      <div className="grid-container ">
        {selectedCar && (
          <div className="grid">
            {cars.map(car => (
              <div className="card" key={car.id}>
                <img src={car.pic} className="card-img-top" alt={car.name} />
                <div className="card-body">
                  <h5 className="card-title">{car.name}</h5>
                  <p className="card-text">{car.description}</p>
                  <p className="card-text">{car.price}</p>
                 
                  <NavLink className="button" to={`/form/${car.id}`}>
                        GET THIS
                    </NavLink>


                      </div>
                    </div>
                  ))}
                </div>
              )}
      </div>
    </>
  )
}
