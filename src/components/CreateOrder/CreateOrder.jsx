import React from 'react'
import './CreateOrder.css'

export default function CreateOrder (props) {
  const { onSubmit, onChange, name, address, phone_number, product, onClose, formErrors } = props
  console.log('formErrors:', formErrors)
  if (!onSubmit || !onChange || !product || !onClose) {
    console.log('CreateOrder props:', props)
    return (
      <p className='loading'>Loading new order form...</p>
    )
  }

  return (
    <>
      <div className='overlay' onClick={() => onClose()} />
      <div className='modal'>
        <div className='header'>
          <h3>Ваш Заказ</h3>

          <img alt='close' src={require('../../assets/close.svg')} onClick={() => onClose()} />
        </div>
        <div className='body'>
          <div className='product'>
            <img alt={product.title} src={require(`../../assets/products/${product.category}/${product.logo}`)} />
            <p className='text'>
              <span className='title'>{product.title}</span>
              <span>{product.price} грн.</span>
            </p>
          </div>

          <form onSubmit={props.onSubmit}>
            <div className='fields'>
              <input
                type='text'
                name='name'
                onChange={props.onChange}
                value={name}
                placeholder='Полное имя получателя'
                required
                autoFocus
              />
              <br />
              <input
                type='text'
                name='address'
                onChange={props.onChange}
                value={address}
                className='middle-field'
                placeholder='Адрес доставки'
                required
              />
              <br />
              <input
                type='tel'
                name='phone_number'
                onChange={props.onChange}
                value={phone_number}
                placeholder='Контактный номер'
                required
              />
            </div>

            {(formErrors.length > 0) && (
              <ul>
                {formErrors.map(error => (
                  <li key={error}>{error}</li>
                ))}
              </ul>
            )}

            <input type='submit' value='Заказать' />
          </form>
        </div>
      </div>
    </>
  )
}
