import{a as v,S as B,i as m}from"./assets/vendor-da186403.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function r(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(t){if(t.ep)return;t.ep=!0;const o=r(t);fetch(t.href,o)}})();async function g(e,s){const r="https://pixabay.com/api/",i={key:"42734676-8c749a784e7b90411d6581e4f",q:e,image_type:"photo",orientation:"horizontal",safesearch:!0,page:s,per_page:15};return await v.get(r,{params:i})}const S=new B(".gallery a",{captionsData:"alt",captionDelay:250}),u=document.querySelector(".gallery");function y(e){const s=C(e);u.insertAdjacentHTML("beforeend",s),S.refresh()}function C(e){return e.map(E).join(`
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
            </li>`}function p(){u.innerHTML=""}const L=document.querySelector(".loader"),h=document.querySelector(".load-button");function w(){L.classList.remove("is-hide")}function a(){L.classList.add("is-hide")}function f(e){const s={message:e,messageSize:"16px",messageLineHeight:"24px",messageColor:"#fff",backgroundColor:"#EF4040",progressBarColor:"#B51B1B",theme:"dark",position:"topRight",class:"message"};m.show(s)}function $(){h.classList.remove("is-hide")}function d(){h.classList.add("is-hide")}function x(e){const s={message:e,messageSize:"16px",messageLineHeight:"24px",messageColor:"#000000",backgroundColor:"#F5F5DC",progressBarColor:"#5F9EA0",theme:"dark",position:"topRight",class:"message"};m.show(s)}const M=document.querySelector(".search-form");M.addEventListener("submit",H);h.addEventListener("click",P);const O="Sorry, there are no images matching your search query. Please try again!",k="Error, empty field",q="We're sorry, but you've reached the end of search results.";let n=1,c;const b=15;async function H(e){if(e.preventDefault(),w(),p(),d(),c=e.target.elements.data.value.trim().split(" ").filter(r=>r).join("+"),!c){p(),f(k),a();return}try{const r=await g(c,n);r.data.hits.length===0?(a(),f(O)):(y(r.data.hits),$()),a(),r.data.totalHits<=b&&d()}catch{console.log(result),a()}e.target.reset()}async function P(){w(),n+=1;try{const e=await g(c,n),s=Math.ceil(e.data.totalHits/b);y(e.data.hits),D(),s===n&&(d(),x(q)),a()}catch(e){console.log(e),a()}}function D(){const e=u.firstElementChild.getBoundingClientRect().height*2;window.scrollBy({behavior:"smooth",top:e})}
//# sourceMappingURL=commonHelpers.js.map
