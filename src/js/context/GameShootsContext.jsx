import React, { useState, createContext } from 'react'

const GameShootsContext = createContext({
  userFire: [],
  setUSerFire: () => []
})

const GameShootsContextProvider = (props) => {
  const [userFire, setUSerFire] = useState([])

  const contextProps = {
    userFire,
    setUSerFire
  }

  return <GameShootsContext.Provider value={contextProps}>{props.children}</GameShootsContext.Provider>
}

export { GameShootsContext, GameShootsContextProvider }