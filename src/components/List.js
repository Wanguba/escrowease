import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import Header from './Header';


export default function Navbar() {
  const [searchQuery, setSearchQuery] = useState('');
  const [cars, setCars] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const endpoints = [
          'https://projectdb-885a.onrender.com/Nissan',
          'https://projectdb-885a.onrender.com/Toyota',
          'https://projectdb-885a.onrender.com/Mercedes',
          'https://projectdb-885a.onrender.com/BMW',
          'https://projectdb-885a.onrender.com/Audi',
        ];

        const responses = await Promise.all(
          endpoints.map(endpoint => fetch(endpoint))
        );

        const data = await Promise.all(responses.map(response => response.json()));
        const allCars = data.flat(); 
        setCars(allCars);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  const filteredCars = searchQuery ? cars.filter(car =>
    car.name.toLowerCase().includes(searchQuery.toLowerCase())
  ) : cars;

  const handleSearchChange = (event) => {
    const query = event.target.value;
    setSearchQuery(query);
  };

  return (
    <>
    <Header />
     <NavLink className="goback3" to={`/`}>
                        Go Back
                    </NavLink>
      <div className="searchbar2">
        <input
          className='search'
          type="text"
          placeholder="find a car"
          value={searchQuery}
          onChange={handleSearchChange}
        />
      </div>

     
    
          <div className="grid2">
            {filteredCars.map(car => (
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
           
    </>
  );
}
