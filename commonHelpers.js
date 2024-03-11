import{a as f,S as h,i as m}from"./assets/vendor-da186403.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))o(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function a(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(t){if(t.ep)return;t.ep=!0;const s=a(t);fetch(t.href,s)}})();async function p(e){const r="https://pixabay.com/api/",a={key:"42734676-8c749a784e7b90411d6581e4f",q:e,image_type:"photo",orientation:"horizontal",safesearch:!0};return await f.get(r,{params:a})}const g=new h(".gallery a",{captionsData:"alt",captionDelay:250}),d=document.querySelector(".gallery");function y(e){const r=L(e);d.insertAdjacentHTML("beforeend",r),g.refresh()}function L(e){return e.map(w).join(`
`)}function w(e){return`<li class="gallery-item">
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
            </li>`}function l(){d.innerHTML=""}const u=document.querySelector(".loader");function b(e){u.classList.remove("is-hide")}function n(e){u.classList.add("is-hide")}function c(e){const r={message:e,messageSize:"16px",messageLineHeight:"24px",messageColor:"#fff",backgroundColor:"#EF4040",progressBarColor:"#B51B1B",theme:"dark",position:"topRight",class:"message"};m.show(r)}const v=document.querySelector(".search-form"),S="Sorry, there are no images matching your search query. Please try again!",$="Error, empty field";v.addEventListener("submit",E);function E(e){e.preventDefault(),b(),l();const a=e.target.elements.data.value.trim().split(" ").filter(o=>o).join("+");if(!a){l(),c($),n();return}p(a).then(o=>{o.data.hits.length===0?(n(),c(S)):y(o.data.hits)}).catch(console.log).finally(()=>{n()}),e.target.reset()}
//# sourceMappingURL=commonHelpers.js.map
