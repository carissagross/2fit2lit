// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file ********
const userName = document.getElementsByClassName('header-welcome-username') 
const userIcon = document.getElementsByClassName('header-userlogo') 
const stepsContent = document.getElementsByClassName('steps-content') 
const stepsFriends = document.getElementsByClassName('steps-content-friends') 
const hydrationContent = document.getElementsByClassName('hydration-content') 
const dailyHydrationNodeList = document.querySelectorAll('.daily-hydration')
const sleepContent = document.getElementsByClassName('sleep-content') 



function check() {
  console.log(userData,"<>>>>userData")
  
}
// An example of how you tell webpack to use a CSS file
import './css/styles.css';

// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import './images/turing-logo.png'

console.log('This is the JavaScript entry file - your code begins here.');

// An example of how you tell webpack to use a JS file

import userData from './data/users';

import UserRepository from './UserRepository';
