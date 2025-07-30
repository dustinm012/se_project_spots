const editProfileBtn = document.querySelector(".profile__edit-button");
const editProfileModal = document.querySelector("#edit-profile-modal");

const editProfileCloseBtn = editProfileModal.querySelector(
  ".modal__close-button"
);
const editProfileForm = document.querySelector(".modal__form");
const editProfileNameInput = editProfileModal.querySelector(
  "#profile-name-input"
);
const editProfileDescriptionInput = editProfileModal.querySelector(
  "#profile-description-input"
);

const editProfileNewPost = document.querySelector(".modal__input");
const editImgLink = editProfileNewPost.querySelector("#image-link");
const editCaptionText = editProfileModal.querySelector("#caption-text");

const newPostBtn = document.querySelector(".profile__new-post");
const newPostModal = document.querySelector("#new-post-modal");
const newPostCloseBtn = newPostModal.querySelector(".modal__close-button");

const profileName = document.querySelector(".profile__name");
const profileDescription = document.querySelector(".profile__description");

editProfileBtn.addEventListener("click", function () {
  editProfileNameInput.value = profileName.textContent;
  editProfileDescriptionInput.value = profileDescription.textContent;
  editProfileModal.classList.add("modal_is-opened");
});

editProfileBtn.addEventListener("click", function () {
  editImgLink.value = editProfileNewPost.textContent;
  editCaptionText.value = editProfileNewPost.textContent;
  editProfileModal.classList.add("modal_is-opened");
});

editProfileCloseBtn.addEventListener("click", function () {
  editProfileModal.classList.remove("modal_is-opened");
});

newPostBtn.addEventListener("click", function () {
  newPostModal.classList.add("modal_is-opened");
});

newPostCloseBtn.addEventListener("click", function () {
  newPostModal.classList.remove("modal_is-opened");
});

function handelEditProfile(evt) {
  evt.preventDefault();
  profileName.textContent = editProfileNameInput.value;
  profileDescription.textContent = editProfileDescriptionInput.value;
  editProfileModal.classList.remove("modal_is-opened");
}

editProfileForm.addEventListener("sumbit");

function handelEditProfile(evt) {
  evt.preventDefault();
  editProfileNewPost.textContent = editImgLink.value;
  editProfileNewPost.textContent = editCaptionText.value;
  editProfileModal.classList.remove("modal_is-opened");
}

editProfileNewPost.addEventListener("sumbit");
