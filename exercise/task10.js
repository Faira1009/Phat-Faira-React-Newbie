
let bt10Btn = document.getElementById("bt10-btn");
bt10Btn.addEventListener("click", () => {
    bt10Result();
});


function bt10Result() {
    let str = document.getElementById("bt10-input").value;
    let final = sum1(str);
    document.getElementById("ketQuaBt10").innerHTML = final;
    
}

function sum1 (str) {
    let mainStr = "";
    mainStr = str;
    mainStr = mainStr.replace(/\[|]| /g,"");
    let mainArr = mainStr.split(",");
    console.log(mainArr)
    let sum = 0;
    for (i=0; i < mainArr.length - 2; i++) {
        if (mainArr[i] == mainArr[i+2] && mainArr[i] != mainArr[i+1]){ 
            sum +=1;
        }
    }
    console.log(sum)
    return sum;
    

}