//import React
const React = require('react')

//stub function Def with one parameter 'html'
//with return statement, includes html skeleton for all pages
function Def (html) {
    return (
        <html>
            <head>
                <title>Title</title>
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css"/>
                <link rel="stylesheet" href="/css/style.css"/>
            </head>
            <body>
                {html.children}
            </body>
        </html>
    )
}

//export Def function
module.exports = Def

