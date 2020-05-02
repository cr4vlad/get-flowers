import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'

export default function Footer (props) {
  return (
    <footer>
      <div className='wrapper'>
        <div className='block'>
          <div className='title'>
            Разделы Сайта
          </div>
          <hr />
          <>
            <Link to='/' className='link'>
              Главная
            </Link>
            {props.categories && props.categories.map(category => (
              <Link key={category.id} to={`/category/${category.id}`} className='link'>
                {category.title}
              </Link>
            ))}
          </>
        </div>

        { (props.screenWidth > 600) && (
        <div className='block'>
          <div className='title'>
            О Нас
          </div>
          <hr />
          <div className='title'>
            <p>Дарить цветы - это красиво, а дарить цветы, которые нравятся всем - это гарантировано поднять настроение получателю! Поэтому решив подарить букет красивых цветов - закажите их у нас!</p>
            <p>Мы доставляем цветы по всей Украине, а в Киеве находится наш крупный цветочный магазин. Наша курьерская служба доставки цветов в Киеве GetFlowers с удовольствием и в срок выполнит адресную доставку цветов в нужный район города всего за 2 часа!</p>
          </div>
        </div>
        )}

        <div className='block'>
          <div className='title'>
            Контакты
          </div>
          <hr />
          <>
            <p className='line'>Электронная почта: <a href='mailto:2getflowers@gmail.com' className='email'>2getflowers@gmail.com</a></p>
            <p className='line'>Телефон: +380667778899</p>
          </>
        </div>
      </div>

      <Link to='/' className='copyright'>
        © Copyright GetFlowers 2020
      </Link>
    </footer>
  )
}
