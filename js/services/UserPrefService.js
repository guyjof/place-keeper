'use strict'
function saveColor(color) {
    saveToStorage('color', color)
}
function saveDate(date) {
    saveToStorage('date', date)
}

function saveTime(time) {
    saveToStorage('time', time)
}

function saveEmail(email) {
    saveToStorage('email', email)
}

function saveAge(age) {
    saveToStorage('age', age)
}

function isAgeCorect() {
    let currYear = new Date().getFullYear()
    let userBirthYear = +loadFromStorage('date').split('-')[0]
    let age = +loadFromStorage('age')
    if ((currYear - userBirthYear) !== age) return alert('Age and birth year dont match')
}



