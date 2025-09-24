function setLang(l){
  document.documentElement.lang=l;
  localStorage.lang=l;
}
window.onload=()=>{setLang(localStorage.lang||'ja');};