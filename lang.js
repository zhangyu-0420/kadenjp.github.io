// 中日切换 + 记忆
function setLang(l){
  document.documentElement.lang=l;
  localStorage.lang=l;
}
window.addEventListener('DOMContentLoaded',()=>{
  setLang(localStorage.lang||'ja');
});