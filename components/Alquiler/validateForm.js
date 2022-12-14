export const validateInput = (input) => {
  let error = {}

  if(!input.name) error.name = 'Este campo no puede estar vacío'
  if(!input.date) error.date = 'Este campo no puede estar vacío'
  if(!input.address) error.address = 'Este campo no puede estar vacío'
  if(!input.addNumber) error.addNumber = 'Este campo no puede estar vacío'
  if(!input.entrecalles) error.entrecalles = 'Este campo no puede estar vacío'

  return error
}

export const validateName = (input) => {
  if(!input.name) return 'Este campo no puede estar vacío'
  if(!/^\w\D{2,35}$/.test(input.name)){
    if(/^\d\w*$/.test(input.name)) return 'El nombre no puede incluir números'
    else if(/^\w{0,2}$/.test(input.name)) return 'El nombre tiene que ser más grande que 2 caracteres'
    else if(/^\w{36,}$/.test(input.name)) return 'Nombre muy largo'
    else return 'El nombre debe tener entre 3 y 35 y caracteres y no puede incluir números'
  }
}

export const validateDate = (input) => {
  if(!input.date) return 'Este campo no puede estar vacío'
}

export const validateAddress = (input) => {
  if(!input.address) return 'Este campo no puede estar vacío'
}

export const validateAddNumber = (input) => {
  if(!input.addNumber) return 'Este campo no puede estar vacío'
}

export const validateEntrecalles = (input) => {
  if(!input.entrecalles) return 'Este campo no puede estar vacío'
}