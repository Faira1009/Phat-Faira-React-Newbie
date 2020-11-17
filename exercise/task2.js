// DISTANCE TO THE NEAREST VOWEL

let bt2Btn = document.getElementById("bt2-btn");
bt2Btn.addEventListener("click", () => {
    bt2Result();
});

function bt2Result() {
    let str2D = document.getElementById("bt2-input").value
    let strToArr = turnToArr(str2D);
    console.log(strToArr); // chuyển đổi từ string nhập vào thành number array array
    let finalResult = numberOfOddSquare(strToArr);
    console.log(finalResult)
    document.getElementById("ketQuaBt2").innerHTML = finalResult;
}

function turnToArr(str2D) {
    let str1 = str2D;
    let str = str1.replace(/(\r\n|\n|\r)/gm, "")
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

function numberOfOddSquare(strToArr) {

    let bitMatrix = squareOf1n0(strToArr)
    let sizeWidth = Math.min(bitMatrix[0].length, bitMatrix.length)
    while (sizeWidth != 0) {
        for (let r = 0; r <= bitMatrix.length - sizeWidth; r++) {
            for (let c = 0; c <= bitMatrix[0].length - sizeWidth; c++) {
                if (checkSum(r, c, sizeWidth, bitMatrix) == 0) {
                    console.log(sizeWidth)
                    return sizeWidth;
                }
            }
        }
        sizeWidth -= 1;
    }
    return 0;
}

function checkSum(r, c, sizeWidth, bitMatrix) {
    let Sum = 0;
    for (let x = r; x < r + sizeWidth; x++) {
        for (let y = c; y < c + sizeWidth; y++) {
            Sum += bitMatrix[x][y]
        }
    }
    return Sum;
}

function squareOf1n0(strToArr) { //hoạt động ổn, trả array array 2d 0 và 1
    let mainArr1 = [];
    mainArr1 = strToArr;
    oddnEvenA = [];
    for (a = 0; a < mainArr1.length; a++) {
        let temp2 = [];
        for (b = 0; b < mainArr1[a].length; b++) {
            if (mainArr1[a][b] % 2 == 1) {
                temp2.push(0);
                continue;
            } else {
                temp2.push(1);
            }
        }
        oddnEvenA.push(temp2)
    }
    console.log(oddnEvenA)
    return oddnEvenA;
}