console.log('%c HI', 'color: firebrick')
document.addEventListener('DOMContentLoaded', () => {
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
    const dogContainer = document.querySelector('#dog-image-container')
    fetch(imgUrl)
    .then((resp) => resp.json())
    .then((myjson) => getImages(myjson.message))

    function getImages(imgArray) {
        for (const image of imgArray) {
            let elImg = document.createElement('img')
            elImg.src = image
            dogContainer.appendChild(elImg)
        }
    }
})

document.addEventListener('DOMContentLoaded', () => {
    const breedUrl = 'https://dog.ceo/api/breeds/list/all'
    fetch(breedUrl)
    .then((resp) => resp.json())
    .then((myjson) => {
        getBreeds(myjson.message)
        appendList(array)
    })
        

    const array = []
    const elBreeds = document.querySelector('#dog-breeds')

    function getBreeds(breedObj) {
        for (const key in breedObj) {
          if (breedObj[key].length == 0) {
              array.push(key)
          } else {
              for (const val of breedObj[key]) {
                 array.push(val + ' ' + key)
             }
          }
        }
        // console.log(array.sort())
    }
    function appendList(array) {
        for (const dog of array.sort()) {
            let listItem = document.createElement('li') 
            listItem.textContent = dog
            elBreeds.appendChild(listItem)
            listItem.addEventListener('click', (e) => {
                e.target.style.color = 'red'
            })
        }
    }
    const dropdown = document.querySelector('#breed-dropdown')
    dropdown.addEventListener('change', (e) => {
        alert(e.target.value)
        elBreeds.innerText = ''
        array.filter(name => name[0] == e.target.value)
        appendList(array)
    })
})

// function changeColor(inEvent) {
//     inEvent.target.style.color = 'blue'
// }