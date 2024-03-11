import { getImages } from "./js/pixabay-API";
import { renderImages, clearMarkup } from "./js/render-functions";
import { showLoader, hideLoader, showMessage } from "./js/modules/helpers";

const formEl = document.querySelector(".search-form")

const msgErr = "Sorry, there are no images matching your search query. Please try again!";
const msgEmpty = "Error, empty field";

formEl.addEventListener("submit", onSubmitBtn);

function onSubmitBtn(e){
    e.preventDefault();
    showLoader();
    clearMarkup();

    const userValue = e.target.elements.data.value.trim().split(" ")
    const userWord = userValue.filter(word => word).join('+');
    if (!userWord) {
        clearMarkup()
        showMessage(msgEmpty)
        hideLoader()
        return;
    }
    getImages(userWord).then(res => {

        if (res.hits.length === 0) {
            hideLoader();
            showMessage(msgErr);
        } else {
            renderImages(res.hits)
        }
    }).catch(console.log).finally(() => {
        hideLoader()
    })

    e.target.reset()
};




