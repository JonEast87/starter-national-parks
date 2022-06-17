const descriptions = document.querySelectorAll('.description-display'),
  ratings = document.querySelectorAll('.rating-display > .value'),
  parks = document.querySelectorAll('.park-display'),
  numberParks = parks.length,
  newElement = document.createElement('div'),
  header = document.querySelector('header'),
  firstBtn = document.querySelector('button'),
  allBtns = document.querySelectorAll('.rate-button');

newElement.innerText = `${numberParks} exciting parks to visit`
newElement.classList.add('header-statement')
header.appendChild(newElement)

// for (let desc of descriptions.values()) {
//   let content = desc.innerText
//   if (content.length > 250) {
//     content = content.slice(0, 250)
//     content = content + '...'
//   }

//   console.log(content)
// }

// for (let rating of ratings) {
//   let ratingValue = parseFloat(rating.innerText)

//   if (ratingValue > 4.7) {
//     rating.classList.add('high-rating')
//     rating.classList.remove('value')
//   }
// }

allBtns.forEach((btn) => {
  btn.addEventListener('click', (event) => {
    const park = event.target.parentNode
    park.style.background = '#c8e6c9'
  })
})

const sortByName = (parkA, parkB) => {
  const parkAName = parkA.querySelector('h2').innerText
  const parkBName = parkB.querySelector('h2').innerText
  if (parkAName < parkBName) {
    return -1
  } else if (parkAName > parkBName) {
    return 1
  } else {
    return 0
  }
}

const sortByRating = (parkA, parkB) => {
  const parkARating = parkA.querySelector('.stats > .rating-display > .value').innerText
  const parkBRating = parkB.querySelector('.stats > .rating-display > .value').innerText
  if (parkARating < parkBRating) {
    return -1
  } else if (parkARating > parkBRating) {
    return 1
  } else {
    return 0
  }
}

const nameSorterClickHandler = (event) => {
  event.preventDefault()

  const main = document.querySelector('main')

  const parksList = main.querySelectorAll('.park-display')

  main.innerHTML = ''

  parksArray = Array.from(parksList)

  parksArray.sort(sortByName)

  parksArray.forEach((park) => {
    main.appendChild(park)
  })
}

const rateSorterClickHander = (event) => {
  event.preventDefault()

  const main = document.querySelector('main')

  const parksList = main.querySelectorAll('.park-display')

  main.innerHTML = ''

  parksArray = Array.from(parksList)

  parksArray.sort(sortByRating)

  parksArray.forEach((park) => {
    main.appendChild(park)
  })
}

const main = () => {
  const nameSorter = document.querySelector('#name-sorter')

  nameSorter.addEventListener('click', nameSorterClickHandler)

  const rateSorter = document.querySelector('#rating-sorter')
  rateSorter.addEventListener('click', rateSorterClickHander)
}

window.addEventListener('DOMContentLoaded', main)