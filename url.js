const url = require('url')

const myUrl = new URL('http://mywebsite.com/hello.html?id=100&status=active')

//serialized url
console.log(myUrl.href)
console.log(myUrl.toString())

//Host (root domain)
console.log(myUrl.host)

//hostname
console.log(myUrl.hostname)

//pathname
console.log(myUrl.pathname)

//serialized query
console.log(myUrl.search)