// TYPE IN A STRING AND GET RID ALL OF VOWEL AND 
let bt8Btn = document.getElementById("bt8-btn");
bt8Btn.addEventListener("click", () => {
    bt8Result();
});


function bt8Result() {
    let str = document.getElementById("bt8-input").value;
    let ArrMatrix = turnToArr (str);
    console.log(ArrMatrix)
    let finalResult = TrueOrFalse(ArrMatrix)
    console.log (finalResult)
    if (ArrMatrix.length != ArrMatrix[0].length) { 
        alert ("Nhập 1 array có chiều rộng và dài bằng nhau")
    }
    else { 
        document.getElementById("ketQuaBt8").innerHTML = finalResult;
    }
        
    }
    


function turnToArr(str2D) {
    let str1 = str2D;
    let str = str1.replace(/(\r\n|\n|\r)/gm,"")
    let strWithoutSpace = str.replace(/ /g, "");
    let strToStrArr = strWithoutSpace.split("],[");
    let strToStrNumArr = [];
    let numArr2D = [];
    for (let a = 0; a < strToStrArr.length; a++) {
        let temp = strToStrArr[a].replace(/\[/g, "");
        temp = temp.replace(/]/g, "")
        strToStrNumArr.push(temp)
    }

    for (let b = 0; b < strToStrNumArr.length; b++) {
        let temp1 = strToStrNumArr[b].split(",")
        numArr2D.push(temp1)
    }
    return numArr2D;
}


function TrueOrFalse (ArrMatrix) {
    let checkArr = [];
    checkArr = squareSum (ArrMatrix) ;
    for (i = 0; i < checkArr.length;i++) {
        if ( checkArr[0] != checkArr[i]) {
            return "FALSE";
        }
    }
    return "TRUE";
}
function squareSum (ArrMatrix) {
    let matrix = [];
    matrix = ArrMatrix;
    let result = [];
 let sum = 0;
 let sum2 = 0;
 let sum3 = 0;
    for (let r=0; r < matrix.length; r++) {
        sum = matrix[r].reduce ((acc, val) => { return parseInt(acc) + parseInt(val)})
        result.push (sum);
        console.log(sum)
    }
    for (let col =0; col<matrix.length; col++ ) {
        let sum1 = 0;
        for (let row = 0; row <matrix.length; row ++) {
            sum1 +=parseInt(matrix[row][col])

        }
        result.push(sum1);
        console.log("second")
        console.log(sum1)
    }

    for (let diagonal1 = 0; diagonal1 < matrix.length; diagonal1++ ) {
        sum2 += parseInt(matrix[diagonal1][diagonal1])
    }
    result.push(sum2);
    console.log (sum2);
    let y = matrix.length-1;
    for (let x =0; x <matrix.length; x++) {
        sum3 += parseInt(matrix[x][y])
        y -= 1
    }
    result.push(sum3)
    console.log (sum3)
    console.log (result)
    return result;
}


