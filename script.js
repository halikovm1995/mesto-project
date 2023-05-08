const formElement = document.querySelector('#popup-profile');
const profileButton = document.querySelector('.profile__edit-button') // переменная кнопки редактировать профиль
const nameInput = document.querySelector('#nameinput'); // 
const jobInput = document.querySelector('#jobinput');// 
const profileName = document.querySelector('.profile__name');
const profileDescription = document.querySelector('.profile__description')
const formAddMesto = document.querySelector('#popup-mesto'); 
const addPhotoButton = document.querySelector('.profile__add-button');
const elementContainer = document.querySelector('.element__list')
const itemTemplate = document.querySelector('#template-item').content;
const popupClose = document.querySelectorAll('#popup-close');
const nameMesto = document.querySelector('#name-mesto');
const linkMesto = document.querySelector('#link-mesto');

for(let i = 0; i < popupClose.length; i++){
  const el = popupClose[i]; 
  el.addEventListener('click', function() {
    formElement.classList.remove('popup_opened');
    formAddMesto.classList.remove('popup_opened');
    popupImage.classList.remove('popup_opened');
  })
}

//Массив с картинками
const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
]; 

  //добавление кнопки открытия попап профиля
profileButton.addEventListener('click', function(){ 
  formElement.classList.add('popup_opened')
})

  //добавление кнопки открытия попап профиля
addPhotoButton.addEventListener('click', function(){
  formAddMesto.classList.add('popup_opened')
})

// Функция изменения данных в профиле
function handleFormSubmit(evt) {
  evt.preventDefault(); 
  profileName.textContent = nameInput.value
  profileDescription.textContent = jobInput.value
  formElement.classList.remove('popup_opened');
}

//слушатель события рекдактировать профиль
formElement.addEventListener('submit', handleFormSubmit); 
nameInput.value = profileName.textContent
jobInput.value = profileDescription.textContent 

//метод клонирования карточки место
initialCards.forEach(function (element){
  const itemElement = itemTemplate.querySelector('.element__item').cloneNode(true);
  itemElement.querySelector('.element__image').src = element.link;
  itemElement.querySelector('.element__image').alt = element.name;
  itemElement.querySelector('.element__title').textContent = element.name;
  elementContainer.append(itemElement);
  
  
//Функция создания карточки место с картиной
function createCards(nameCardValue, linkCardValue) {
  const itemElement = itemTemplate.querySelector('.element__item').cloneNode(true);
  itemElement.querySelector('.element__image').src = linkCardValue;
  itemElement.querySelector('.element__image').alt = nameCardValue;
  itemElement.querySelector('.element__title').textContent = nameCardValue;
  itemElement.querySelector('.element__like').addEventListener('click', function(evt){
    evt.target.classList.toggle('element__like_active')
  })
  itemElement.querySelector('.element__delete').addEventListener('click', function(evt){
    evt.target.closest('.element__item').remove()
  })
return itemElement
}
});

const elementDelete = document.querySelectorAll('.element__delete')
//Функция создания карточки место с картиной
function createCards(nameCardValue, linkCardValue) {
  const itemElement = itemTemplate.querySelector('.element__item').cloneNode(true);
  itemElement.querySelector('.element__image').src = linkCardValue;
  itemElement.querySelector('.element__image').alt = nameCardValue;
  itemElement.querySelector('.element__title').textContent = nameCardValue;
  itemElement.querySelector('.element__like').addEventListener('click', function(evt){
    evt.target.classList.toggle('element__like_active')
  })
  itemElement.querySelector('.element__delete').addEventListener('click', function(evt){
    evt.target.closest('.element__item').remove()
  })
return itemElement
}

//Функция добавления карточки место
function addCards(evt) {
  evt.preventDefault(); 
  elementContainer.prepend(createCards(nameMesto.value, linkMesto.value)); 
  formAddMesto.classList.remove('popup_opened');
}

//слушатель события формы место
formAddMesto.addEventListener('submit', addCards); 
const elementLike = document.querySelectorAll('.element__like')
elementLike.forEach(function(element){
  element.addEventListener('click', function (evt){
    evt.target.classList.toggle('element__like_active');
  }); 
})

elementDelete.forEach(function(el){
  el.addEventListener('click', function(evt){
  evt.target.closest('.element__item').remove();
  })
})

const popupImage = document.querySelector('#popup-image');
const elementImages = document.querySelectorAll('.element__image')
const elementBigImage = document.querySelector('.popup__image_big')
const elementBigText = document.querySelector('.popup__image_text');

elementImages.forEach(function(el) {
  el.addEventListener('click', function(evt){
    const imgSrc = evt.target.getAttribute('src');
    const nameNe = evt.target.alt;
    const imageAlt = evt.target.getAttribute('alt');
    elementBigText.textContent = nameNe;
    elementBigImage.setAttribute('src', imgSrc)
    elementBigImage.setAttribute('alt', nameNe)
    popupImage.classList.add("popup_opened");
   })
})

