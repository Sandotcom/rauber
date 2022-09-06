import React, { useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styles from '../styles/Home.module.css'
import cervezas from '../constants/cervezas'
import Link from 'next/link'
import { ADD_ITEM } from '../app/actions/actionTypes'

const Products = () => {  
  const cart = useSelector(state => state.cart)
  const dispatch = useDispatch()
  const text = useMemo(
    () =>
      cart
        .reduce(
          (message, product) => message.concat(`* ${product.name} - $${product.price}\n`),
          ``
        )
        .concat(`\nTotal: $${cart.reduce((total, product) => total + product.price, 0)}`),
    [cart]
  )

  const onClick = (e, product) => {
    e.preventDefault()
    dispatch({ type: ADD_ITEM, payload: product })
  }
  
  return (
    <div className={styles.section}>
      <h2>Nuestras cervezas</h2>

      <div className={styles.cards}>
        {cervezas.map((product) => (
          <div key={product.id} className={styles.card}>
            <Link key={product.id} href={`cervezas/${product.id}`}>
              <div>
                <h4>{product.name}</h4>
                <img src={product.portada} alt={product.name} />
                <div className={styles.cardFooter}>
                  <p>{product.description}</p>
                  <p>${product.price}</p>
                </div>
              </div>
            </Link>
            <button type='button' onClick={(e) => onClick(e, product)}>Agregar</button>
          </div>
        ))}
      </div>
      {cart.length > 0 && 
        <Link href={`https://wa.me/542214205694?text=${encodeURIComponent(text)}`}>
          <button>Completar pedido ({cart.length} productos)</button>
        </Link>
      }
      
    </div>
  )
}

export default Products