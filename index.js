const descriptions = document.querySelectorAll('.description-display'),
  ratings = document.querySelectorAll('.rating-display > .value'),
  parks = document.querySelectorAll('.park-display'),
  numberParks = parks.length,
  newElement = document.createElement('div'),
  header = document.querySelector('header')

newElement.innerText = `${numberParks} exciting parks to visit`

newElement.classList.add('header-statement')
header.appendChild(newElement)

for (let desc of descriptions.values()) {
  let content = desc.innerText
  if (content.length > 250) {
    content = content.slice(0, 250)
    content = content + '...'
  }

  console.log(content)
}

for (let rating of ratings) {
  let ratingValue = parseFloat(rating.innerText)

  if (ratingValue > 4.7) {
    rating.classList.add('high-rating')
    rating.classList.remove('value')
  }
}