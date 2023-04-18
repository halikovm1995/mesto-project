const formElement = document.querySelector('#popup-profile');
const profileButton = document.querySelector('.profile__edit-button')
const nameInput = document.querySelector('#nameinput'); // Воспользуйтесь инструментом .querySelector()
const jobInput = document.querySelector('#jobinput');// Воспользуйтесь инструментом .querySelector()
const profileName = document.querySelector('.profile__name');
const profileDescription = document.querySelector('.profile__description')

 profileButton.addEventListener('click', function(){ //добавление кнопки открытия попап профиля
    formElement.classList.add('popup_opened')
 })
const popupClose = document.querySelector('.popup__close-icon');
popupClose.addEventListener('click', function() {
    formElement.classList.remove('popup_opened');

})
 

function handleFormSubmit(evt) {
    evt.preventDefault(); 
    profileName.textContent = nameInput.value
    profileDescription.textContent = jobInput.value
    formElement.classList.remove('popup_opened');

}

formElement.addEventListener('submit', handleFormSubmit); 
nameInput.value = profileName.textContent
jobInput.value = profileDescription.textContent 