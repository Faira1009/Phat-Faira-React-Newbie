
let bt11Btn = document.getElementById("bt11-btn");
bt11Btn.addEventListener("click", () => {
    bt11Result();
});


function bt11Result() {
    let str = document.getElementById("bt11-input").value;
    let result = lastResult (str)
    document.getElementById("ketQuaBt11").innerHTML = result;
    
    
}

function lastResult (str) {
    let check0 = checkSame(str)
    console.log(check0)
    let check1 = checkAscend(str);
    console.log(check1)
    let check2 = checkDescend(str)
    console.log(check2)
    let check3 = checkDup(str)
    console.log(check3)
    if (check0 == true ) {
        return "REPDROME"
    }
    else if ( check1 == true && check3 == 0) { 
        return "METADROME"
    }
    else if ( check1 == true && check3 >0) {
        return "PLAINDROME"
    }
    else if ( check2 == true && check3 == 0) {
        return "KATADROME"
    }
    else if ( check2 == true && check3 >0) {
        return "NIALPDROME"
    }
    else {
        return "NONDROME"
    }
    
}
function checkAscend (str) {
    let mainStr1 = "";
    mainStr1 = str;
    let ascend = true;
    console.log(mainStr1[0]);
    console.log(mainStr1[1])
    console.log(parseInt(mainStr1[0])+parseInt(mainStr1[1]))
    for (i=0;i <mainStr1.length -1;i++) {
        if (parseInt(mainStr1[i]) < parseInt(mainStr1[i+1]) | parseInt(mainStr1[i]) == parseInt(mainStr1[i+1])) {
            ascend = true;
        }
        else {
            return false;
        }
    }
    return ascend;
}
function checkDescend (str) {
    let mainStr1 = "";
    mainStr1 = str;
    let ascend = true;
    console.log(mainStr1[0]);
    console.log(mainStr1[1])
    console.log(parseInt(mainStr1[0])+parseInt(mainStr1[1]))
    for (i=0;i <mainStr1.length -1;i++) {
        if (parseInt(mainStr1[i]) > parseInt(mainStr1[i+1]) | parseInt(mainStr1[i]) == parseInt(mainStr1[i+1])) {
            ascend = true;
        }
        else {
            return false;
        }
    }
    return ascend;
}
function checkDup (str) {
    let mainStr1 = str;
    let count = 0;
    for (let i=0;i <mainStr1.length-1;i++) {
        for (let a = i+1; a <mainStr1.length;a++)
        if (mainStr1[i] == mainStr1[a]) {
            count +=1
        }
    }
    return count;

}

function checkSame (str) {
    let mainStr1 = str;
    let count = true;
    for (let i=0;i <mainStr1.length-1;i++) {
        for (let a = i+1; a <mainStr1.length;a++)
        if (mainStr1[i] == mainStr1[a]) {
            count = true;
        }
        else {
            return false;
        }
    }
    return count;

}