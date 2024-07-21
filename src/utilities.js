export function getAudi(){
    fetch("https://projectdb-885a.onrender.com/Audi",{
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    })
    .then(response  => response.json())
}

export function getNisaan(){
    fetch("https://projectdb-885a.onrender.com/Nissan",{
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    })
    .then(response  => response.json())
}

export function getToyota(){
    fetch("https://projectdb-885a.onrender.com/Toyota",{
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    })
    .then(response  => response.json())
}

export function getMercedes(){
    fetch("https://projectdb-885a.onrender.com/Mercedes",{
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    })
    .then(response  => response.json())
}

export function getBMW(){
    fetch("https://projectdb-885a.onrender.com/BMW",{
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    })
    .then(response  => response.json())
}

export function getCustomers(){
    fetch("https://projectdb-885a.onrender.com/Customers",{
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    })
    .then(response  => response.json())
}

export function postCustomers(customer){
    fetch("https://projectdb-885a.onrender.com/Customers",{
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(customer)
    })
    .then(response  => response.json())
}