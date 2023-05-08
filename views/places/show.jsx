//import React and the Def component from default.jsx layout view
const React = require('react')
const Def = require('../default')

//show stub content
function show (data) {
    return (
        <Def>
          <main>
            <h1>{ data.place.name }</h1>
            <h2>Rating</h2>
              <h3>currently unrated</h3>
            <h2>Description</h2>
              <h3>TBD</h3>
            <h2>Comments</h2>
              <h3>No comments yet!</h3>
            <a href={`/places/${data.id}/edit`} className="btn btn-warning"> 
              Edit
            </a>
            <form method="POST" action={`/places/${data.id}?_method=DELETE`}> 
              <button type="submit" className="btn btn-danger">
                Delete
              </button>
            </form>     
          </main>
        </Def>
    )
}
//export show function
module.exports = show
