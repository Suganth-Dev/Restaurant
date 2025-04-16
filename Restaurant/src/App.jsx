import { useState } from 'react'
import './App.css'
import logo from './assets/logo.svg'
import dosa from './assets/dosa.jpg'
import south_thali from './assets/south_thali.jpg'
import biriyani from './assets/biriyani.jpg'
import curry from './assets/curry.jpg'
import thandhoori from './assets/thandhoori.jpg'



function App() {
  const [searchQuery, setSearchQuery] = useState('')

  const restaurants = [
    {
      id: 1,
      name: "South Indian Thali",
      description: "Traditional South Indian meals served on banana leaf",
      image: south_thali,
      Rating: 4.5
    },
    {
      id: 2,
      name: "Biryani Special",
      description: "Aromatic biryani made with finest basmati rice and spices",
      image: biriyani,
      Rating: 4.5
    },
    {
      id: 3,
      name: "Tandoori Delights",
      description: "Fresh from tandoor - naan, kebabs and more",
      image: thandhoori,
      Rating: 4.5
    },
    {
      id: 4,
      name: "Dosa Corner",
      description: "Crispy dosas with variety of chutneys and sambar",
      image: dosa,
      Rating: 4.7
    },
    {
      id: 5,
      name: "Curry House",
      description: "Rich and flavorful curries with naan bread",
      image: curry,
      Rating: 4.8
    }
  ]

  const handleSearch = (e) => {
    e.preventDefault()
    console.log('Searching for:', searchQuery)
  }
 const [resList, setReslist] = useState(restaurants)

//  let reslist1 = restaurants


  return (
    <div className="app-container">
      {/* Header */}
      <header className="header">
        <div className="logo">
          <img src={logo} alt="Sugan Restaurant Logo" className="logo-image" />
          <span>Sugan_Res</span>
        </div>
        <nav className="nav-menu">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
          <a href="#cart" className="cart-link">Cart</a>
        </nav>
      </header>

      {/* Search Section */}
      <section className="search-section">
        <form onSubmit={handleSearch} className="search-form">
          <input
            type="text"
            placeholder="Search our menu..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="search-input"
          />
          <button type="submit" className="search-button" 
          onClick={()=>{
            const filteredData = resList.filter((res)=>res.Rating >4.5)
            setReslist(filteredData)
          
            // reslist1 = reslist1.filter((res)=> res.Rating > 4.5 )
            // console.log(reslist1)
          }}
          
          >
            Top restaurant
          </button>
        </form>
      </section>

      {/* Restaurant Cards Grid */}
      <section className="restaurant-grid">
        {resList.map(restaurants => (
          <div key={restaurants.id} className="restaurant-card">
            <div 
              className="card-image"
              style={{ backgroundImage: `url(${restaurants.image})` }}
            ></div>
            <h3>{restaurants.name}</h3>
            <p>{restaurants.description}</p>
            <p>{restaurants.Rating}</p>
          </div>
        ))}
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Copyright</h3>
            <p>&copy; 2024 Sugan Restaurant. All rights reserved.</p>
          </div>
          <div className="footer-section">
            <h3>Links</h3>
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </div>
          <div className="footer-section">
            <h3>Address</h3>
            <p>123 Culinary Street</p>
            <p>Chennai, TN 600001</p>
          </div>
          <div className="footer-section">
            <h3>Contact Details</h3>
            <p>Phone: (044) 2345-6789</p>
            <p>Email: info@suganrestaurant.com</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App