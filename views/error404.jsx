//import React and Def function in default.jsx
const React = require('react')
const Def = require('./default')

//error404 stub function
function error404 () {    
    return (
        <Def>
            <main>
                <h1>404: PAGE NOT FOUND</h1>
                <p>Oops, sorry, we can't find this page!</p>
                <div>
                    <img src="/images/frogpeekingS.jpg" alt="Frog Peeking"/>
                    <div>
                        Photo by <a href="https://unsplash.com/@rayhennessy?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Ray Hennessy</a> on <a href="https://unsplash.com/s/photos/kermit?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
                    </div>
                </div>
            </main>
        </Def>
)}

//export error404 function
module.exports = error404
