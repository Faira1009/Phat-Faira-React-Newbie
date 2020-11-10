// TYPE IN A STRING AND GET RID ALL OF VOWEL AND 
let bt7Btn = document.getElementById("bt7-btn");
bt7Btn.addEventListener("click", () => {
    bt7Result();
});


function bt7Result() {
    let num = document.getElementById("bt7-input").value;
    let str = num.toString();
    let strArr = str.split("");
    let numDigit = strArr.length;
    let odd = oddPosition(strArr);
    if (numDigit %2 == 1) {
        alert ("Xin hãy nhập 1 số có tổng số phần tử là số chẵn")
    }
    else {
        let countTotal = countDigit(numDigit, strArr);
        let compareResult = compareNum(odd, countTotal)
    
        if (compareResult >= 1) {
            document.getElementById("ketQuaBt7").innerHTML= "This is NOT A Self-Describing Number"
    
        }
        else { 
            document.getElementById("ketQuaBt7").innerHTML= "This is A Self-Describing Number"
        }
    }
    
}

function oddPosition(strArr) {
    let oddPosi = [];
    let mainArr = strArr;
    for (let i = 0; i < mainArr.length; i += 2) {
        oddPosi.push(mainArr[i])
    }
    return oddPosi;
}

function countDigit(numDigit, strArr1) {
    let totalArr = [];
    for (let i = 1; i < numDigit; i += 2) {
        let digits = 0;
        for (let a = 0; a < numDigit; a++) {
            if (strArr1[i] == strArr1[a]) {
                digits++
            }
        }
        totalArr.push(digits)
    }
    return totalArr;
}

function compareNum(odd, countTotal) {
    let count = [];
    count = countTotal;
    let oddPos = [];
    oddPos = odd;

    let strArrToCompare = [];
    for (let i = 0; i < oddPos.length; i++) {
        if (oddPos[i] == count[i]) {
            strArrToCompare.push("true")
        } else {
            strArrToCompare.push("false")
        }
    }
    let numOfFalse = 0;
    for (let a = 0; a < strArrToCompare.length; a++) {
        if (strArrToCompare[a] == "false") {
            numOfFalse++
        }
    }
    return numOfFalse;
}