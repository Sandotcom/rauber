const barriles = [
  // { id: 'golden-ale', name: 'Golden Ale', description: 'Nuestra Golden Ale...', image: null },
  { id: 'session-ipa', name: 'Session IPA', type: 'Barril', types: [{ cantidad: 20, price: 6000 }, { cantidad: 30, price: 7800 }, { cantidad: 50, price: 10000 }],  description: 'Nuestra Session IPA...',  portada: '/cervezas/session/session1.jpg', image: ['/cervezas/session/session1.jpg', '/cervezas/session/session2.jpg', '/cervezas/session/sessionInfo.jpg'] },
  { id: 'ipa-bandida', name: 'IPA Bandida', type: 'Barril', types: [{ cantidad: 20, price: 6000 }, { cantidad: 30, price: 7800 }, { cantidad: 50, price: 10000 }], description: 'La mejor de las nuestras',  portada: '/cervezas/bandida/bandida1.jpg', image: ['/cervezas/bandida/bandida1.jpg', '/cervezas/bandida/bandida2.jpg', '/cervezas/bandida/bandidaInfo.jpg'] },
  { id: 'red-ale', name: 'Red Ale', type: 'Barril', types: [{ cantidad: 20, price: 6000 }, { cantidad: 30, price: 7800 }, { cantidad: 50, price: 10000 }], description: 'Nuestra Red Ale...',  portada: '/cervezas/red/red1.png', image: ['/cervezas/red/red1.jpg', '/cervezas/red/red2.jpg'] },
  { id: 'stout', name: 'Stout', type: 'Barril', types: [{ cantidad: 20, price: 6000 }, { cantidad: 30, price: 7800 }, { cantidad: 50, price: 10000 }], description: 'Nuestra Stout...',  portada: '/cervezas/stout/stout1.jpg', image: ['/cervezas/stout/stout1.jpg', '/cervezas/stout/stout1.jpg'] },
]

export default barriles