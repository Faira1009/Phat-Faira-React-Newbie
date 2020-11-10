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
    document.getElementById("ketQuaBt2").innerHTML = finalResult;
}

function turnToArr(str2D) {
    let str = str2D;
    let strWithoutSpace = str.replace(/ /g, "");
    let strToStrArr = strWithoutSpace.split("],[");
    let strToStrNumArr = [];
    let numArr2D = [];
    for (let a = 0; a < strToStrArr.length; a++) {
        let temp = strToStrArr[a].replace("[", "");
        temp = temp.replace("]", "")
        strToStrNumArr.push(temp)
    }

    for (let b = 0; b < strToStrNumArr.length; b++) {
        let temp1 = strToStrNumArr[b].split(",")
        numArr2D.push(temp1)
    }
    return numArr2D;
}

function numberOfOddSquare(strToArr) {
    let mainArr = [];
    mainArr = strToArr;
    let size = Math.abs(mainArr[0].length - mainArr.length)
    let sizeWidth = Math.min (mainArr[0].length, mainArr.length)
    let findingIn = squareOf1n0(strToArr)
    for (x=0; x<findingIn-size;x++) {
        for(b=x;b <sizeWidth;b++) {

        }
    }
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
    return oddnEvenA;
}