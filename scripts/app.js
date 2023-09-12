const chatroom = new Chatroom('general', 'riley')

chatroom.getChats((data) => {
    console.log(data)
})