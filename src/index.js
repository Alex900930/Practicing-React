//const element = document.createElement('h1')

//element.innerText = "Hello React...";

//const container = document.getElementById('root');

//container.appendChild(element);

import React from 'react'
import ReactDOM from 'react-dom'
const user = {
  name: "Alex",
  lastName: "Herrera",
  avatar: '../src/img/076d9a2184bb3d886f169bfc6459fb89.jpg'
};

function getName(user){
  return `${user.name} ${user.lastName}`
}

function getGreeting(user){
  if(user){
   return <h1>Hello {getName(user)}</h1>
  }
  return <h1>Hello Stranger </h1>
}
const element = (
  <div>
    <h1>{getGreeting(user)}</h1>
    <img src={user.avatar} />
  </div>
)
const container = document.getElementById('root')

ReactDOM.render(element, container);