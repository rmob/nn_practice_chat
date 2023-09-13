// dom query
const chatList = document.querySelector('.chat-list')
const newChatForm = document.querySelector('.new-chat')

// add a new chat
newChatForm.addEventListener('submit', e => {
    e.preventDefault()
    const message = newChatForm.message.value.trim()
    chatroom.addChat(message)
    .then(newChatForm.reset())
    .catch(err => console.log(err))
})

// class instances
const chatUI = new ChatUI(chatList)
const chatroom = new Chatroom('general', 'riley')


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