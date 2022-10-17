const pullRequest = localStorage.getItem("profileSearched")
const helloAgain = JSON.parse(pullRequest)
console.log(helloAgain.avatar_url,helloAgain.name, helloAgain.bio)

const profileCard = document.querySelector(".profile-card")
const profileFigure = document.querySelector(".profile-figure")
const profileInfos = document.querySelector(".profile-infos")

function headerAssembly(userData) {
    const profileImg = document.createElement('Img')
    const profileName = document.createElement('h3')
    const profileStack = document.createElement('p')

    profileImg.src = userData.avatar_url
    profileName.innerText = userData.name
    

}
headerAssembly(helloAgain)