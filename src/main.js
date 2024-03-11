import { getImages } from "./js/pixabay-API";
import { renderImages, clearMarkup } from "./js/render-functions";
import { showLoader, hideLoader, showMessage, showLoadBtn, hideLoadBtn, loadBtn } from "./js/modules/helpers";

const formEl = document.querySelector(".search-form")

const msgErr = "Sorry, there are no images matching your search query. Please try again!";
const msgEmpty = "Error, empty field";

formEl.addEventListener("submit", onSubmitBtn);

async function onSubmitBtn(e){
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

    try {
    const result = await getImages(userWord)
        if (result.data.hits.length === 0) {
            hideLoader();
            showMessage(msgErr);
        } else {
            renderImages(result.data.hits)
        }    
        hideLoader()
    } catch {
        console.log(result)
        hideLoader()
    }

    e.target.reset()
};




