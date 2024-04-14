import{S as c,i as u}from"./assets/vendor-8c59ed88.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))o(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const n of s.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&o(n)}).observe(document,{childList:!0,subtree:!0});function r(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(t){if(t.ep)return;t.ep=!0;const s=r(t);fetch(t.href,s)}})();function d(a){return fetch(`https://pixabay.com/api/?key=43344666-8172f6ac72992b92fe58b4040&q=${a}&image_type=photo&orientation=horizontal&safesearch=true`).then(e=>{if(!e.ok)throw new Error(e.status);return e.json()})}function p(a){return a.map(e=>`<li class="gallery-item">
  <a href="${e.largeImageURL}"
    ><img src="${e.webformatURL}" alt="${e.tags}" class="photo"
  /></a>
  <div class="gallery-item-container">
<div class="label-container"><span class="label">Likes</span><span class="value">${e.likes}</span></div>
    <div class="label-container"><span class="label">Views</span><span class="value">${e.views}</span></div>
    <div class="label-container"><span class="label">Comments</span><span class="value">${e.comments}</span></div>
    <div class="label-container"><span class="label">Downloads</span><span class="value">${e.downloads}</span></div>
  </div>
</li>`).join("")}const f=document.querySelector(".form"),l=document.querySelector(".gallery"),i=document.querySelector(".loader"),m=new c(".gallery a",{captionsData:"alt",captionPosition:"bottom",captionDelay:500});f.addEventListener("submit",h);function h(a){a.preventDefault();const e=a.target.elements.js_input.value.trim();e!==""&&(i.classList.add("is-visible"),d(e).then(r=>{if(r.hits.length===0){u.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),l.innerHTML="";return}l.innerHTML=p(r.hits),m.refresh()}).catch(r=>{console.log(r)}).finally(()=>{i.classList.remove("is-visible")}))}
//# sourceMappingURL=commonHelpers.js.map
