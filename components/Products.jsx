import React, { useMemo } from 'react'
import { useSelector } from 'react-redux'
import styles from '../styles/Home.module.css'
import cervezas from '../constants/cervezas'
import Link from 'next/link'
import { useState } from 'react'

const Products = () => {  
  const [cart, setCart] = useState([])
  const carrito = useSelector(state => state.cart)
  const text = useMemo(
    () =>
      cart
        .reduce(
          (message, product) => message.concat(`* ${product.name} - $${product.price}\n`),
          ``
        )
        .concat(`\nTotal: ${cart.reduce((total, product) => total + product.price, 0)}`),
    [cart]
  )
  
  return (
    <div className={styles.section}>
      <h2>Nuestras cervezas</h2>

      <div className={styles.cards}>
        {cervezas.map((e) => (
          <div key={e.id} className={styles.card}>
            <Link key={e.id} href={`cervezas/${e.id}`}>
              <div>
                <h4>{e.name}</h4>
                <img src={e.portada} alt={e.name} />
                <div className={styles.cardFooter}>
                  <p>{e.description}</p>
                  <p>${e.price}</p>
                </div>
              </div>
            </Link>
            <button onClick={() => setCart(cart => cart.concat(e))}>Agregar</button>
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