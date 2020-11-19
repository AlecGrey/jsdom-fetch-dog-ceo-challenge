// console.log('%c HI', 'color: firebrick')
// document.addEventListener('DOMContentLoaded', () => {
//     const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
//     const dogContainer = document.querySelector('#dog-image-container')
//     fetch(imgUrl)
//     .then((resp) => resp.json())
//     .then((myjson) => getImages(myjson.message))

//     function getImages(imgArray) {
//         for (const image of imgArray) {
//             let elImg = document.createElement('img')
//             elImg.src = image
//             dogContainer.appendChild(elImg)
//         }
//     }
// })

document.addEventListener('DOMContentLoaded', () => {

    const elBreeds = document.querySelector('#dog-breeds')
    const dropdown = document.querySelector('#breed-dropdown')
    const dogsArray = []

    fetch('https://dog.ceo/api/breeds/list/all')
        .then((resp) => resp.json())
        .then((myjson) => {
            getBreeds(myjson.message)
            appendList(dogsArray)
        })
    
    dropdown.addEventListener('change', (e) => {
        elBreeds.innerHTML = ''
        newArr = filterList(e.target.value)
        appendList(newArr)
    })
    
    function filterList(letter) {
        // filtered array of dog names
        return dogsArray.filter(name => name[0] == letter)
    }
    
    function getBreeds(breedObj) {
        // modify dogsArray with dog breeds
        for (const key in breedObj) {
          if (breedObj[key].length == 0) {
              dogsArray.push(key)
          } else {
              for (const val of breedObj[key]) {
                 dogsArray.push(val + ' ' + key)
             }
          }
        }
    }
    
    function appendList(array) {
        // appends unordered-list with breed names from an array
        for (const dog of array.sort()) {
            let listItem = document.createElement('li') 
            listItem.textContent = dog
            console.log(listItem)
            console.log(elBreeds)
            elBreeds.appendChild(listItem)
            listItem.addEventListener('click', (e) => {
                e.target.style.color = 'red'
            })
        }
    }
})