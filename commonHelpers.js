import{S as l,i}from"./assets/vendor-8c59ed88.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function e(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(r){if(r.ep)return;r.ep=!0;const o=e(r);fetch(r.href,o)}})();const u="43225123-d236907a3b16930b7c1176894";async function d(s){const t=`https://pixabay.com/api/?key=${u}&q=${s}&image_type=photo&orientation=horizontal&safesearch=true`;try{return(await(await fetch(t)).json()).hits}catch(e){return console.error("Error fetching images:",e),[]}}function f(s){const t=document.getElementById("gallery");t.innerHTML="",s.forEach(e=>{const n=`
        <div class="card">
          <a href="${e.largeImageURL}" data-lightbox="gallery-item">
            <img src="${e.webformatURL}" alt="${e.tags}" data-src="${e.largeImageURL}">
          </a>
          <div class="card-info">
            <span>Likes: ${e.likes}</span>
            <span>Views: ${e.views}</span>
            <span>Comments: ${e.comments}</span>
            <span>Downloads: ${e.downloads}</span>
          </div>
        </div>
      `;t.innerHTML+=n})}const c=document.getElementById("search-form"),p=new l(".gallery a",{captionsData:"alt",captionDelay:250});c.addEventListener("submit",async function(s){s.preventDefault();const t=c.querySelector('input[name="search"]').value.trim();if(!t){i.error({title:"Error",message:"Please enter a search query.",position:"topCenter"});return}try{const e=await d(t);if(e.length===0){i.warning({title:"Warning",message:"Sorry, there are no images matching your search query. Please try again.",position:"topCenter"});return}f(e),p.refresh()}catch(e){console.error("Error searching images:",e),i.error({title:"Error",message:"An error occurred while searching for images. Please try again later.",position:"topCenter"})}});
//# sourceMappingURL=commonHelpers.js.map
