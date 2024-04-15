import{S as c,i as u}from"./assets/vendor-8c59ed88.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))l(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const n of s.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&l(n)}).observe(document,{childList:!0,subtree:!0});function a(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function l(t){if(t.ep)return;t.ep=!0;const s=a(t);fetch(t.href,s)}})();function d(r){return fetch(`https://pixabay.com/api/?key=43344666-8172f6ac72992b92fe58b4040&q=${r}&image_type=photo&orientation=horizontal&safesearch=true`).then(e=>{if(!e.ok)throw new Error(e.status);return e.json()})}function p(r){return r.map(e=>`<li class="gallery-item">
  <a href="${e.largeImageURL}"
    ><img src="${e.webformatURL}" alt="${e.tags}" class="photo"
  /></a>
  <div class="gallery-item-container">
<div class="label-container"><span class="label">Likes</span><span class="value">${e.likes}</span></div>
    <div class="label-container"><span class="label">Views</span><span class="value">${e.views}</span></div>
    <div class="label-container"><span class="label">Comments</span><span class="value">${e.comments}</span></div>
    <div class="label-container"><span class="label">Downloads</span><span class="value">${e.downloads}</span></div>
  </div>
</li>`).join("")}const f=document.querySelector(".form"),o=document.querySelector(".gallery"),i=document.querySelector(".loader"),m=new c(".gallery a",{captionsData:"alt",captionPosition:"bottom",captionDelay:500});f.addEventListener("submit",h);function h(r){r.preventDefault(),o.innerHTML="";const e=r.target.elements.js_input.value.trim();e!==""&&(i.classList.add("is-visible"),d(e).then(a=>{if(a.hits.length===0){i.classList.remove("is-visible"),u.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),o.innerHTML="";return}i.classList.remove("is-visible"),o.innerHTML=p(a.hits),m.refresh()}).catch(a=>{console.log(a)}))}
//# sourceMappingURL=commonHelpers.js.map
