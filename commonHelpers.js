import{a as w,S as b,i as v}from"./assets/vendor-da186403.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function o(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(t){if(t.ep)return;t.ep=!0;const r=o(t);fetch(t.href,r)}})();async function p(e,s){const o="https://pixabay.com/api/",i={key:"42734676-8c749a784e7b90411d6581e4f",q:e,image_type:"photo",orientation:"horizontal",safesearch:!0,page:s,per_page:15};return await w.get(o,{params:i})}const S=new b(".gallery a",{captionsData:"alt",captionDelay:250}),u=document.querySelector(".gallery");function m(e){const s=B(e);u.insertAdjacentHTML("beforeend",s),S.refresh()}function B(e){return e.map(E).join(`
`)}function E(e){return`<li class="gallery-item">
                <a class="gallery-link" href="${e.largeImageURL}">
                    <img
                        class="gallery-image"
                        src="${e.webformatURL}"
                        alt="${e.tags}"
                        width="${e.previewWidth}"
                        height="${e.previewHeight}"
                    />
                </a>
                <ul class="description">
                        <li class="desc-item">
                            <h3 class="des-head">Likes</h3>
                            <p>${e.likes}</p>
                        </li>
                        <li class="desc-item">
                            <h3 class="des-head">Views</h3>
                            <p>${e.views}</p>
                        </li>
                        <li class="desc-item">
                            <h3 class="des-head">Comments</h3>
                            <p>${e.comments}</p>
                        </li>
                        <li class="desc-item">
                            <h3 class="des-head">Downloads</h3>
                            <p>${e.downloads}</p>
                        </li>
                    </ul>
            </li>`}function f(){u.innerHTML=""}const g=document.querySelector(".loader"),h=document.querySelector(".load-button");function y(){g.classList.remove("is-hide")}function a(){g.classList.add("is-hide")}function d(e){const s={message:e,messageSize:"16px",messageLineHeight:"24px",messageColor:"#fff",backgroundColor:"#EF4040",progressBarColor:"#B51B1B",theme:"dark",position:"topRight",class:"message"};v.show(s)}function $(){h.classList.remove("is-hide")}function L(){h.classList.add("is-hide")}const q=document.querySelector(".search-form");u.querySelector(".gallery-item");q.addEventListener("submit",k);h.addEventListener("click",C);const M="Sorry, there are no images matching your search query. Please try again!",O="Error, empty field",x="We're sorry, but you've reached the end of search results.";let n=1,c;const P=15;async function k(e){if(e.preventDefault(),y(),f(),L(),c=e.target.elements.data.value.trim().split(" ").filter(o=>o).join("+"),!c){f(),d(O),a();return}try{const o=await p(c,n);o.data.hits.length===0?(a(),d(M)):(m(o.data.hits),$()),a()}catch{console.log(result),a()}e.target.reset()}async function C(){y(),n+=1;try{const e=await p(c,n),s=Math.ceil(e.data.totalHits/P);m(e.data.hits),s===n&&(L(),d(x)),a()}catch(e){console.log(e),a()}}
//# sourceMappingURL=commonHelpers.js.map
