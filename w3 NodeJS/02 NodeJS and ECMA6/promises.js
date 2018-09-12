/* Exploring ECMA6 promise chains and arrow functions */
"use strict"

const stdin = process.openStdin()

function reverse(string) {
    return new Promise((resolve, reject) => {
        const reversed = string.split('').reverse().join('')
        resolve(reversed)
    })
}

function capitalise(string) {
    return new Promise((resolve, reject) => {
        let cap = string.charAt(0).toUpperCase() + string.slice(1)
        resolve(cap)
    })
}


function promise1(data) {
  reverse(data).then(data => {
    return capitalise(data)
  }).then(data => {
    console.log(data)
  }).catch((err) => {
    console.log('Error occurred: '+err)
  })
}

function promise2(data) {
  reverse(data).then(data => {
    return capitalise(data)
  }).then(data => {
    console.log(data)
  }).catch((err) => {
    console.log('Error occurred: '+err)
  })
}
function promise3(data) {
  reverse(data)
    .then( data => capitalise(data)  )
    
    .then( data => reverse(data)  )
    .then( data => capitalise(data)  )
    .then( data => reverse(data)  )
    
    .then( data => console.log(data) )
    .catch( (e) => console.log('Error occurred: '+e) )
}
function promise4(data) {
  reverse(data)
    .then(capitalise)
    .then(reverse)
    .then(capitalise)
    .then(reverse)
    .then( data => console.log(data) )
    .catch(  (e) => console.log('Error occurred: '+e) )
}

stdin.on('data', function(chunk) {
  const text = chunk.toString().trim()
  promise1(text)
  promise2(text)
  promise3(text)
  promise4(text)
})