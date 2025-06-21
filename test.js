const comments = ["Your amazing Marco", "He's going to be a future multi-millionaire", "What a Legend!"]

const videoTitle = "Hello"

const title = document.querySelector('#title')
const commentContainer = document.querySelector("h2")

title.textContent = videoTitle
title.className = "title" 



comments.forEach (comment => {
    const indivComment = document.createElement("p")
    indivComment.textContent = comment
    indivComment.className = 'comments' 

    commentContainer.append(indivComments) 
})