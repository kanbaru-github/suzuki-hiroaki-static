import"./main-CBVWv15F.js";function u(e){let t=0;const n=o=>{t=o,e.innerHTML=`count is ${t}`};e.addEventListener("click",()=>n(t+1)),n(0)}document.querySelector("#app").innerHTML=`
  <div>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
  </div>
`;u(document.querySelector("#counter"));
