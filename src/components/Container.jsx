import React from 'react'

const Container = ({x, y, yOffSet = 0, xOffSet = 0}) => {
  return (
    <div style={{ left: x + xOffSet, top: y + yOffSet, position: "absolute", transform: `translate(-50%, -50%)` }}>Container</div>
  )
}

export default Container