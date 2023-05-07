//import React and the Def component from default.jsx layout view
const React = require('react')
const Def = require('../default')

//define new function
function new_form () {
//return statement and Def component as wrapper
    return (
//HTML added, main tag and title with h1 tag
        <Def>
            <main>
                <h1>Add a New Place</h1>
            </main>
        </Def>
    )
}

//export new function
module.exports = new_form