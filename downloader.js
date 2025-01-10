(()=>{async function fetch_file(url) {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(response.status);
  }
  console.log(response.type)
  
  const blob = await response.blob();
  const reader = new FileReader();
  reader.readAsDataURL(blob);
  return new Promise((resolve, reject) => {
    reader.onloadend = () => {
      resolve(reader.result);
    };
    reader.onerror = reject;
  });
}
async function download_file(a){
  let href = a.getAttribute('href');
  var base64File = false
  do{
    try{
      base64File = await fetch_file(href);
    }
    catch ({name, message}){
      let timeout = 3 * 60 * 1000
      if (message == 509)
        timeout = timeout*21
      await new Promise(resolve => setTimeout(resolve, timeout));
    }
  }
  while(!base64File)
  const file_anchor = document.createElement('a');
  file_anchor.href = base64File;
  file_anchor.download = 'record_image';
  document.body.appendChild(file_anchor);
  file_anchor.click();
  document.body.removeChild(file_anchor);
}

var next_page_button=document.getElementsByClassName('next pager-icon fs-civ-circle-chevron-right enabled')[0];
var image_save_button=document.getElementsByClassName('actionToolbarSaveButton saveButton button save' )[0];

async function elm_click(elm) {
  if(elm.fireEvent){
    elm.fireEvent('onclick' ) ;
  }
  else{
    var new_event=document.createEvent('Events' );
    new_event.initEvent('click',true,false);
    elm.dispatchEvent(new_event);
  }
};
function download_loop(d) {
  setTimeout(
    function(){
      let promise = null;
      if(d)
        promise = download_file(image_save_button);
      else
        promise = elm_click(next_page_button);
      promise.then(()=>{
        if(!document.getElementsByClassName('next pager-icon fs-civ-circle-chevron-right enabled disabled' )[0]){
          download_loop(!d);
        }
      })
    }, (8000 + Math.floor((Math.random()*8000)))
  )
};
download_loop(true);
})()
