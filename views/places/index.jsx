//import React and Def function in default.jsx
const React = require('react')
const Def = require('../default')

//index stub function
function index (data) {
    let placesFormatted = data.places.map((place) => {
      return (
//added key={place.name} to div to remove warning
        <div className='col-sm-6' key={place.name}>
          <h2>
              <a href={`/places/${place.id}`} >
                {place.name}
              </a>
          </h2>
          <p className='text-center'>
            {place.cuisines}
          </p>
          <img src={place.pic} alt={place.name}/>
          <p className='text-center'>
            Located in {place.city}, {place.state}
          </p>
        </div>
      )
    })
    return (
      <Def>
          <main>
              <h1>Places to Rant or Rave About</h1>
              <div className='row'>
              {placesFormatted}
              </div>
          </main>
      </Def>
  )
  }
  

//export index function
module.exports = index