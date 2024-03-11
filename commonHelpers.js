import{S as h,i as f}from"./assets/vendor-7659544d.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))o(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const n of s.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&o(n)}).observe(document,{childList:!0,subtree:!0});function a(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(t){if(t.ep)return;t.ep=!0;const s=a(t);fetch(t.href,s)}})();function m(e){const r="https://pixabay.com/",a="api/",o=new URLSearchParams({key:"42734676-8c749a784e7b90411d6581e4f",q:e,image_type:"photo",orientation:"horizontal",safesearch:!0}),t=`${r}${a}?${o}`;return fetch(t).then(s=>{if(!s.ok)throw new Error(s.status);return s.json()})}const p=new h(".gallery a",{captionsData:"alt",captionDelay:250}),u=document.querySelector(".gallery");function g(e){const r=y(e);u.innerHTML=r,p.refresh()}function y(e){return e.map(L).join(`
`)}function L(e){return`<li class="gallery-item">
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
            </li>`}function c(){u.innerHTML=""}const d=document.querySelector(".loader");function w(e){d.classList.remove("is-hide")}function i(e){d.classList.add("is-hide")}function l(e){const r={message:e,messageSize:"16px",messageLineHeight:"24px",messageColor:"#fff",backgroundColor:"#EF4040",progressBarColor:"#B51B1B",theme:"dark",position:"topRight",class:"message"};f.show(r)}const $=document.querySelector(".search-form"),b="Sorry, there are no images matching your search query. Please try again!",S="Error, empty field";$.addEventListener("submit",E);function E(e){e.preventDefault(),w(),c();const a=e.target.elements.data.value.trim().split(" ").filter(o=>o).join("+");if(!a){c(),l(S),i();return}m(a).then(o=>{o.hits.length===0?(i(),l(b)):g(o.hits)}).catch(console.log).finally(()=>{i()}),e.target.reset()}
//# sourceMappingURL=commonHelpers.js.map
