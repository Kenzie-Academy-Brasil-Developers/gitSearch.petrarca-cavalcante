const searchForm = document.querySelector('.search-form')
const searchInput = document.getElementById('search_input')
const viewProfBtn = document.querySelector('.view-profile-btn')

function searchReceive() {
    searchInput.addEventListener('input', (event) => {
        if (searchInput.value == "") {
            searchForm.addEventListener('submit', (event) => {
                event.preventDefault()
            })
            viewProfBtn.classList.remove('filled-search')

        } else {
            viewProfBtn.classList.add('filled-search')
            searchForm.addEventListener('submit', async (event) => {
                event.preventDefault()

                const callCatcher = `https://api.github.com/users/${searchInput.value}`
                const rawData = await fetch(callCatcher)
                const dataJson = await rawData.json();

                if (dataJson.message == "Not Found") {
                    return searchReturn('Not Found')
                }
                passValues(dataJson)
                searchReturn(dataJson)
            })
        }
    })
}
searchReceive()

const inputContainer = document.querySelector('.input-box')
function searchReturn(userData) {
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