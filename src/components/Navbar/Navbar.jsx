import React from 'react'
import './Navbar.css'
import logo from '../../assets/getflowers.svg'
import { Link } from 'react-router-dom'

export default function Navbar (props) {
  if (!props.categories) {
    return (
      <p>Loading categories...</p>
    )
  }

  return (
    <header role='banner'>
      <div className='wrapper'>
        <div className='nav--desktop'>
          <h1>
            <Link to='/'>
              <img src={logo} alt='GetFlowers' className='title' />
            </Link>
          </h1>

          <div className='menu'>
            {props.categories.map(category => (
            <div className='category'>
              <Link to={`/category/${category.id}`} className='link'>
                {category.title}
              </Link>
            </div>
            ))}
          </div>
        </div>
      </div>
    </header>
  )
}
