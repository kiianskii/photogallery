import { getImages } from "./js/pixabay-API";
import { renderImages, clearMarkup, gallery } from "./js/render-functions";
import { showLoader, hideLoader, showMessage, showLoadBtn, hideLoadBtn, loadBtn } from "./js/modules/helpers";

const formEl = document.querySelector(".search-form")
const imgCard = gallery.querySelector(".gallery-item")

formEl.addEventListener("submit", onSubmitBtn);
loadBtn.addEventListener("click", onLoadBtn)

const msgErr = "Sorry, there are no images matching your search query. Please try again!";
const msgEmpty = "Error, empty field";
const msgEndLoad = "We're sorry, but you've reached the end of search results."

let page = 1;
let userWord;
const per_page = 15;


async function onSubmitBtn(e){
    e.preventDefault();
    showLoader();
    clearMarkup();
    hideLoadBtn()

    const userValue = e.target.elements.data.value.trim().split(" ")
    userWord = userValue.filter(word => word).join('+');
    if (!userWord) {
        clearMarkup()
        showMessage(msgEmpty)
        hideLoader()
        return;
    }

    try {
    const result = await getImages(userWord, page)
        if (result.data.hits.length === 0) {
            hideLoader();
            showMessage(msgErr);
        } else {
            renderImages(result.data.hits)
            showLoadBtn()
        }    
        hideLoader()
       
    } catch {
        console.log(result)
        hideLoader()
    }
   
    e.target.reset()
};

async function onLoadBtn() {
    showLoader()
    page += 1;

    try {
        const res = await getImages(userWord, page)
        const lastPage = Math.ceil(res.data.totalHits / per_page);
        renderImages(res.data.hits);

        if (lastPage === page) {
            hideLoadBtn();
           showMessage(msgEndLoad)
        }
        hideLoader()
         } catch (err) {
        console.log(err)
        hideLoader()
        }


}
 
