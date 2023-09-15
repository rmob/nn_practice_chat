// dom query
const chatList = document.querySelector('.chat-list')
const newChatForm = document.querySelector('.new-chat')
const newNameForm = document.querySelector('.new-name')
const updateMssg = document.querySelector('.update-mssg')

// add a new chat
newChatForm.addEventListener('submit', e => {
    e.preventDefault()
    const message = newChatForm.message.value.trim()
    chatroom.addChat(message)
    .then(newChatForm.reset())
    .catch(err => console.log(err))
})

// update username
newNameForm.addEventListener('submit', e => {
    e.preventDefault()
    const newName = newNameForm.name.value.trim()
    chatroom.updateName(newName)
    newNameForm.reset()
    // show then hide update message
    updateMssg.innerText = `Your name was updated to ${newName}`
    setTimeout(() => updateMssg.innerText = '', 3000)
})

// check localStorage for a name
const username = localStorage.username ? localStorage.username : 'anon'

// class instances
const chatUI = new ChatUI(chatList)
const chatroom = new Chatroom('general', username)


// adding a chat
// chatroom.addChat('get bent')
// chatroom.updateName('cyrus')
// chatroom.updateRoom('gaming')
// chatroom.addChat('fuck you')
// chatroom.updateRoom('general')
// get chats and render
chatroom.getChats((data) => {
    chatUI.render(data)
    console.log('hi')
})