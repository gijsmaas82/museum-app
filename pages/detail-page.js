// Event handler 
function submitComment() {
    // getting the name from the user
    let inputField = document.getElementById('name')
    let name = inputField.value
    // getting the message from the user
    let inputMessage = document.getElementById('msg')
    let msg = inputMessage.value
    // creating elements to show name and message from user on the page
    const comment = document.createElement('section')
    const h3 = document.createElement('h3')
    const p = document.createElement('p')
    //change the name and message of the user inside the html of the page
    h3.innerHTML = `${name} said:`
    p.innerHTML = `"${msg}"`
    //creating the space on the page by appending the html
    comment.classList.add('comment')
    comment.appendChild(h3)
    comment.appendChild(p)
    //getting the commentsection of the page and appending the new comment as a child
    let commentSection = document.getElementById('comments')
    commentSection.appendChild(comment)
    inputField.value = null
    inputMessage.value = null
}


