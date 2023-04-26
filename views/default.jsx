//import React
const React = require('react')

//stub function Def with one parameter 'html'
//with return statement, includes html skeleton for all pages
function Def (html) {
    return (
        <html>
            <head>
                <title>Title</title>
            </head>
            <body>
                {html.children}
            </body>
        </html>
    )
}

//export Def function
module.exports = Def

