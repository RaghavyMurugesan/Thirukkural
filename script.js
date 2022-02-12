let input= document.getElementById("userinput");
input.addEventListener("keyup",function(event=KeyboardEvent){
  
  if(event.key === "Enter"){
    event.preventDefault();
      document.getElementById("btn").click("getkural()");
      //console.log(event.key)
    }
    });
var kural;
async function getkural() {
  const url = `https://api-thirukkural.vercel.app/api?num=${input.value}`;
  const response = await fetch(url);
  kural = await response.json();

  console.log(kural);
  result.innerHTML = "";
  displaykural();
}
function displaykural() {
  const kuralnum = input.value;
  let resultkural = document.getElementById("result");

  resultkural.innerHTML += `
  <div class="row" style="align-items:stretch">

    <div class="card col-md-5">
    <div class="card-body ">
      <h6 class="card-title">குறள் ${kuralnum}</h6>
      <p class="card-text"><b>குறள்:<br>${kural.line1}<br>${kural.line2}</b></p>
      <p class="card-text">தெளிவுரை:<br>${kural.tam_exp}</p>
     </div>
     <ul class="list-group list-group-flush">
      <li class="list-group-item"> பால் : ${kural.sect_tam} </li>
      <li class="list-group-item"> இயல் : ${kural.chapgrp_tam}</li>
      <li class="list-group-item"> அதிகாரம் : ${kural.chap_tam}</li>
      </ul>
    </div>&nbsp

    <div class="card col-md-5">
     <div class="card-body ">
       <h6 class="card-title">Couplet ${kuralnum}</h6>
        <p class="card-text"><b>Couplet:<br>${kural.eng}</b></p>
        <p class="card-text">Explanation:<br>${kural.eng_exp}</p>
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item"> Section : ${kural.sect_eng}</li>
        <li class="list-group-item"> Chapter-Group: ${kural.chapgrp_eng}</li>
        <li class="list-group-item"> Chapter : ${kural.chap_eng}</li>
      </ul>
   </div>
 </div>
`;
input.value="";
  
}
