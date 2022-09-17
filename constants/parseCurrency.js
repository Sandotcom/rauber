const parseCurrency = (value) => {    
  return value.toLocaleString('es-AR', {
    style: 'currency',
    currency: 'ARS',
    maximumFractionDigits: 0
   })
}

export default parseCurrency;