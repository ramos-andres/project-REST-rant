//import React and Def function in default.jsx
const React = require('react')
const Def = require('./default')

//home stub function
function home () {
    return (
        <Def>
            <main>
                <h1>Home</h1>
                <div>
                    <img src="/images/samosasS.jpg" alt="Samosas"/>
                    <div>
                    Photo by <a href="https://unsplash.com/@kabircheema?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">kabir cheema</a> on <a href="https://unsplash.com/s/photos/samosa?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
                    </div>
                </div>
                <a href="/places">
                    <button className="btn-primary">Places Page</button>
                </a>
            </main>
        </Def>
    )
}

//export home function
module.exports = home

