const pullRequest = localStorage.getItem("profileSearched")
const helloAgain = JSON.parse(pullRequest)


const profileCard = document.querySelector(".profile-card")
const profileFigure = document.querySelector(".profile-figure")
const profileInfos = document.querySelector(".profile-infos")
const repositoriesFeed = document.querySelector(".projects-feed")


function headerAssembly(userData) {
    const profileImg = document.createElement('Img')
    const profileName = document.createElement('h3')
    const profileStack = document.createElement('p')

    profileImg.src = userData.avatar_url
    profileName.innerText = userData.name
    profileStack.innerText = userData.bio

    profileFigure.append(profileImg)
    profileInfos.append(profileName, profileStack)
}
headerAssembly(helloAgain)

fetch(helloAgain.repos_url)
    .then(function (response) {
        return response.json()
    })
    .then((responseJson) => {
        responseJson.map((repository) => {
            const repoCard = document.createElement('li')
            const name = document.createElement('h4')
            const repoDescriptionbox = document.createElement('div')
            const description = document.createElement('p')
            const repoButtonsBox = document.createElement('div')
            const openBtn = document.createElement('button')
            const demoBtn = document.createElement('button')

            repoCard.classList.add("repo-card")

            name.innerText = repository.name
            description.innerText = repository.full_name

            repoDescriptionbox.append(description)
            repoButtonsBox.append(openBtn, demoBtn)
            repoCard.append(name, repoDescriptionbox, repoButtonsBox)
            repositoriesFeed.append(repoCard)
        })
    })




const changeUserBtn = document.querySelector(".change-user")
    changeUserBtn.addEventListener('click', (event) => {
        event.preventDefault()
        // location.replace('.../home.html')
    })