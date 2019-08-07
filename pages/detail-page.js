// Event handler 
function submitComment() {
    // getting the name from the user
    let inputField = document.getElementById('name')
    let name = inputField.value
    // getting the message from the user
    let inputMessage = document.getElementById('msg')
    let msg = inputMessage.value
    //running the validation function and checking it
    if (doesNotPassAllValidation(name, msg)) {
        return null
    }
     // capitalize name
     if (name[0] !== name[0].toUpperCase()) {
         name = name.replace(name[0], name[0].toUpperCase())
        }
    // checking for bad language
    let swear = ['fuck', 'shit', 'asshole', 'pussy']
    for (let i = 0; i < swear.length; i++) {
        if (msg.search(swear[i]) !== -1) {
            alert('Warning: this comment has been flagged as offensive.')
            return null
        }
    }
     
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
}

function doesNotPassAllValidation(name, msg) {
    // checking whether the user typed something
    if (!name && !msg) {
        alert('You forgot to fill in your name and message!')
        return true
    } else if (!name) {
        alert('You forgot to fill in your name!')
        return true
    } else if (!msg) {
        alert('You forgot to fill in your message!')
        return true
    } else if (msg.length > 280) {
        alert('This message is too long')
        return true
    } else {
        return false
    }
}