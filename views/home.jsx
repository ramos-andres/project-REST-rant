//import React and Def function in default.jsx
const React = require('react')
const Def = require('./default')

//home stub function
function home () {
    return (
        <Def>
            <main>
                <h1>Home</h1>
            </main>
        </Def>
    )
}

//export home function
module.exports = home
