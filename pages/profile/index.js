const pullRequest = localStorage.getItem("profileSearched")
const helloAgain = JSON.parse(pullRequest)


const profileCard = document.querySelector(".profile-card")
const profileFigure = document.querySelector(".profile-figure")
const profileInfos = document.querySelector(".profile-infos")
const repositoriesFeed = document.querySelector(".projects-feed")


function headerAssembly(userData) {
    const profileImg = document.createElement('Img')
    const profileName = document.createElement('h3')
    const bio = document.createElement('p')
    const email = document.createElement('p')

    profileImg.src = userData.avatar_url
    profileName.innerText = userData.name
    bio.innerText = userData.bio
    email.innerText = userData.email

    profileFigure.append(profileImg)
    profileInfos.append(profileName, bio, email)
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
            repoButtonsBox.classList.add("repo-buttons")

            name.innerText = repository.name
            description.innerText = repository.full_name
            openBtn.innerText = "Repositório"
            demoBtn.innerText = "Demo"


            repoDescriptionbox.append(description)
            repoButtonsBox.append(openBtn, demoBtn)
            repoCard.append(name, repoDescriptionbox, repoButtonsBox)
            repositoriesFeed.append(repoCard)
        })
    })




const changeUserBtn = document.querySelector(".change-user")
    changeUserBtn.addEventListener('click', (event) => {
        event.preventDefault()
        location.replace('/index.html')
    })