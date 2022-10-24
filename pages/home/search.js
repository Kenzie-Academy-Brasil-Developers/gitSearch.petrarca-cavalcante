const searchForm = document.querySelector('.search-form')
const searchInput = document.getElementById('search_input')
const viewProfBtn = document.querySelector('.view-profile-btn')

function searchReceive() {
    document.querySelector('.view-profile-btn').disabled = true         
    searchInput.addEventListener('input', (event) => {
        if (searchInput.value == "") {  
            viewProfBtn.classList.remove('filled-search')
        } else {
            document.querySelector('.view-profile-btn').disabled = false
            viewProfBtn.classList.add('filled-search')
            searchForm.addEventListener('submit', async (event) => {
                event.preventDefault()
                viewProfBtn.classList.add('spinner-load')
                viewProfBtn.classList.add('hidden-text')

                const callCatcher = `https://api.github.com/users/${searchInput.value}`
                const rawData = await fetch(callCatcher)
                const dataJson = await rawData.json();


                if (dataJson.message == "Not Found") {
                    return searchReturn('Not Found')
                }

                searchLog(dataJson)
                passValues(dataJson)
                searchReturn(dataJson)
            })
        }
    })
}
searchReceive()

const inputContainer = document.querySelector('.input-box')
function searchReturn(userData) {
    viewProfBtn.classList.remove('spinner-load')
    viewProfBtn.classList.remove('hidden-text')


    inputContainer.innerText = ""
    searchInput.style.outline = "1px solid #212529"
    if (userData == "Not Found") {
        const failAdvice = document.createElement('p')
        failAdvice.classList.add("fail-advice")
        failAdvice.innerText = "Usuário não encontrado"
        failAdvice.style.color = "#C22554"
        searchInput.style.outline = "1px solid #C22554"

        inputContainer.append(failAdvice)

    } else {
        // location.replace('./pages/profile/index.html')
    }

}

function passValues(profile) {
    const convert = JSON.stringify(profile)
    localStorage.setItem("profileSearched", convert)
}

function searchLog(lastProfile) {
    let threeSaves = []
    const convert = JSON.stringify(threeSaves)

    threeSaves.push(lastProfile)
    if (threeSaves.length > 3) {
        threeSaves.shift()
    }
    localStorage.setItem("savedProfiles", threeSaves)
}

const seeAgainPlace = document.querySelector('.recently-searched')

function renderHistory() {
    const pullRequest = localStorage.getItem("savedProfiles")
    const recentlySearched = JSON.parse(pullRequest)

    if(pullRequest === null){
       return "" 
    }

//     recentlySearched.forEach(element => {
// // console.log(element)
//         const historyFigure = document.createElement('figure')
//         const historyPhoto = document.createElement('img')
        
//         historyFigure.classList.add("searched-wrapper")
//         historyPhoto.classList.add("searched-user-photo")
        
//         historyPhoto.img = element.avatar_url
        
        
//         historyFigure.append(historyPhoto)
//         seeAgainPlace.append(historyFigure)
//     });
}
renderHistory()