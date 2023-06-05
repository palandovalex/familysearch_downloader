# familysearch_downloader
JavaScript for automate downloading images from familysearch.org

## Using

Open first page with book, that you want to download, like this:

![Снимок экрана от 2023-06-05 14-19-53](https://github.com/palandovalex/familysearch_downloader/assets/75374436/13225e5e-77e6-457b-9230-a9d71ed95f17)

Then open browser devtools(`ctrl+shift+c`) and press to `console`:

![Снимок экрана от 2023-06-05 14-20-07](https://github.com/palandovalex/familysearch_downloader/assets/75374436/a8220c63-32e2-4637-b681-861d09de4757)

![Снимок экрана от 2023-06-05 14-20-23](https://github.com/palandovalex/familysearch_downloader/assets/75374436/ceb48649-9343-4dba-b78e-f25f7ed339d3)

copy minified script version:

```javascript
/*! Familysearch-downloader v1.0 | (c) palandovalex */
(()=>{async function e(e){const t=await fetch(e);if(!t.ok)throw new Error(t.status);console.log(t.type);const n=await t.blob(),o=new FileReader;return o.readAsDataURL(n),new Promise((e,t)=>{o.onloadend=(()=>{e(o.result)}),o.onerror=t})}var t=document.getElementsByClassName("next pager-icon fs-civ-circle-chevron-right enabled")[0],n=document.getElementsByClassName("actionToolbarSaveButton saveButton button save")[0];!function o(a){setTimeout(function(){let c=null;(c=a?async function(t){let n=t.getAttribute("href");var o=!1;do{try{o=await e(n)}catch({name:e,message:t}){let n=18e4;509==t&&(n*=21),await new Promise(e=>setTimeout(e,n))}}while(!o);const a=document.createElement("a");a.href=o,a.download="record_image",document.body.appendChild(a),a.click(),document.body.removeChild(a)}(n):async function(e){if(e.fireEvent)e.fireEvent("onclick");else{var t=document.createEvent("Events");t.initEvent("click",!0,!1),e.dispatchEvent(t)}}(t)).then(()=>{document.getElementsByClassName("next pager-icon fs-civ-circle-chevron-right enabled disabled")[0]||o(!a)})},8e3+Math.floor(8e3*Math.random()))}(!0)})();
```

Paste it to console and press enter:

![Снимок экрана от 2023-06-05 14-21-12](https://github.com/palandovalex/familysearch_downloader/assets/75374436/0af33076-1e92-4c42-9df3-681da6f67912)
![Снимок экрана от 2023-06-05 14-21-20](https://github.com/palandovalex/familysearch_downloader/assets/75374436/29f823ca-bb90-45b4-a848-1f9a1818057b)
![Снимок экрана от 2023-06-05 14-21-34](https://github.com/palandovalex/familysearch_downloader/assets/75374436/e9d98d3c-fa47-43be-a948-e16f298e80b2)

Now script started, and downloading your images.

`Warning! Periodicly you should reset page, again enter my script to console and start it. It needs to prevent overfilyng your RAM.
