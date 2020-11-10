
// DISTANCE TO THE NEAREST VOWEL

let bt1Btn = document.getElementById("bt1-btn");
bt1Btn.addEventListener("click", () => {
  bt1Result();
});

function bt1Result() {
  let str = "";
  str = document.getElementById("bt1-input").value;
  let strArr = str.split("")
  let vowelPosMain = vowelPos (strArr)
  let results =resultArr (strArr,vowelPosMain)
 document.getElementById("ketQuaBt1").innerHTML = results;
}

function vowelPos (arr) { 
  let vowelArr = [];
  vowelArr = arr;
  let vowelPosition = [];
  for (i = 0; i < vowelArr.length; i++) {
    if (vowelArr[i] == "u" || vowelArr[i] == "e" || vowelArr[i] == "o" || vowelArr[i] == "a" || vowelArr[i] == "i" ) {
      vowelPosition.push(i)
    }
  }
return vowelPosition;
}

function resultArr (strArr,vowelPosMain) {
  let finalPos = [];
  
  for (i=0; i <strArr.length;i++) { 
    let tempPos =  [];
    for (a = 0; a <vowelPosMain.length; a++) { 
      let count = Math.abs(i - parseInt(vowelPosMain[a]));
      tempPos.push(count)
    }

    console.log (tempPos)
  let min = Math.min(...tempPos)
  console.log (min)
  finalPos.push(min)
  }
  return finalPos;
}

