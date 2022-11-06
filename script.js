const menuItems = document.querySelectorAll(".menu-items");
const messagesNotification = document.querySelector("#messages-notifications");
const messages = document.querySelector(".messages");
const message = messages.querySelectorAll(".message");
const messageSearch = document.querySelector("message-search");
const theme = document.querySelector("#theme");
const themeModal = document.querySelector(".customize-theme");

const changeActiveItem = () => {
    menuItems.forEach(item => {
        item.classList.remove("active");
    })
}
menuItems.forEach(item => {
    item.addEventListener('click',() => {
        changeActiveItem();
        item.classList.add("active");
        if(item.id != "notifications"){
            document.querySelector(".notifications-popup").style.display = "none";
        }else{
            document.querySelector(".notifications-popup").style.display = "block";
            document.querySelector("#notifications .notification-count").style.display = "none";
        }
    })
})
const searchMessages = () => {
    const val = messageSearch.value.toLowerCase();
    message.forEach(user => {
        let name = user.querySelector("h5").textContent.toLowerCase();
        if(name.indexOf(val) != -1){
            user.style.display = "flex";
        }else{
            user.style.display = "none";
        }
    })
}


messageSearch.addEventListener('keyup',searchMessages);

messagesNotification.addEventListener('click',() => {
    messages.style.boxShadow = '0 0 1rem var(--color-primary)';
    messagesNotification.querySelector(".notification-count").style.display = "none";
    setTimeout(()=>{
        messages.style.boxShadow = "none";
    },2000);
})

// theme customisation
const openThemeModal = () => {
    themeModal.classList.add("show-theme");
}

theme.addEventListener('click',openThemeModal());


