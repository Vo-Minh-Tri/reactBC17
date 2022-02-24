import React from 'react'

export default function DatabindingFunc() {
    const title = 'cybersoft'

    const renderTitle = () => {
        return <p>huhu</p>
    }
  return (
    <div className='container'>
        <h3>{title}</h3>
        <p>{renderTitle()}</p>
    </div>
  )
}
