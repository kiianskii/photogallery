import{a as b,S as v,i as S}from"./assets/vendor-da186403.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function o(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(t){if(t.ep)return;t.ep=!0;const r=o(t);fetch(t.href,r)}})();async function m(e,s){const o="https://pixabay.com/api/",i={key:"42734676-8c749a784e7b90411d6581e4f",q:e,image_type:"photo",orientation:"horizontal",safesearch:!0,page:s,per_page:15};return await b.get(o,{params:i})}const B=new v(".gallery a",{captionsData:"alt",captionDelay:250}),h=document.querySelector(".gallery");function g(e){const s=E(e);h.insertAdjacentHTML("beforeend",s),B.refresh()}function E(e){return e.map($).join(`
`)}function $(e){return`<li class="gallery-item">
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
            </li>`}function p(){h.innerHTML=""}const y=document.querySelector(".loader"),f=document.querySelector(".load-button");function L(){y.classList.remove("is-hide")}function a(){y.classList.add("is-hide")}function d(e){const s={message:e,messageSize:"16px",messageLineHeight:"24px",messageColor:"#fff",backgroundColor:"#EF4040",progressBarColor:"#B51B1B",theme:"dark",position:"topRight",class:"message"};S.show(s)}function q(){f.classList.remove("is-hide")}function u(){f.classList.add("is-hide")}const M=document.querySelector(".search-form");h.querySelector(".gallery-item");M.addEventListener("submit",P);f.addEventListener("click",k);const O="Sorry, there are no images matching your search query. Please try again!",x="Error, empty field",H="We're sorry, but you've reached the end of search results.";let n=1,c;const w=15;async function P(e){if(e.preventDefault(),L(),p(),u(),c=e.target.elements.data.value.trim().split(" ").filter(o=>o).join("+"),!c){p(),d(x),a();return}try{const o=await m(c,n);o.data.hits.length===0?(a(),d(O)):(g(o.data.hits),q()),a(),o.data.totalHits<=w&&u()}catch{console.log(result),a()}e.target.reset()}async function k(){L(),n+=1;try{const e=await m(c,n),s=Math.ceil(e.data.totalHits/w);g(e.data.hits),s===n&&(u(),d(H)),a()}catch(e){console.log(e),a()}}
//# sourceMappingURL=commonHelpers.js.map
