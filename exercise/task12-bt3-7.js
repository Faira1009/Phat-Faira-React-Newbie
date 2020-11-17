let bt12Btn = document.getElementById("bt12-btn");
bt12Btn.addEventListener("click", () => {
    bt12Result();
});


function bt12Result() {
    let str = document.getElementById("bt12-input").value;
    let mainArr = strToArr(str)
    console.log(mainArr)
    let result = checkFlush (mainArr,str)
    console.log(result)
    if (result == true ) {
        document.getElementById("ketQuaBt12").innerHTML = "5 lá cùng loại khác số"
    }
    else {
        document.getElementById("ketQuaBt12").innerHTML = "Không thỏa iu cầu"
    }

}

function strToArr(str) {
    let mainStr = "";
    mainStr = str;
    let mainTestingArr = [];
    let arr1 = mainStr.replace(/ |\[|]|\"/g, "").split(",");
    for (let i=0; i<arr1.length; i++) {
        let a= arr1[i].split("").reverse().join().replace(/\,/g,"")
        mainTestingArr.push(a)
    }
    console.log (mainTestingArr)
    return mainTestingArr;
}

function checkFlush (mainArr,str) {
    let firstArr = str.replace(/ |\[|]|\"/g, "").split(",");
    console.log(firstArr);
    let fullDeck = mainArr;
    let possibleCard = countSame (mainArr);
    let i = possibleCard.indexOf(5);
    console.log(i)
    let card5 = []
    let flush = true;

    if ( i <0) {
        return false;
    }
    else { 
        for (let a=0; a<fullDeck.length; a++) {
            if (fullDeck[i][0] == fullDeck[a][0]) {
                card5.push(firstArr[a])
            }
        }
    }
    console.log(card5)
    for (let b = 0; b < card5.length; b++) {
        let num = card5[b][0] + card5[b][1]
        console.log(num)
        for (let c=b+1; c < card5.length; c++) { 
        let num1= card5[c][0] +card5[c][1]
        console.log (num1)
        if (card5[b][0] != card5[c][0] && num != num1  ) { 
            flush = true;
        }
        else {
            flush = false;
            return flush;
        }
    }
        }
        return flush;
        
}
function countSame(arr) {
    let testArr1 = [];
    testArr1 = arr;
    let numberOfSameCard = [];
    for (let i = 0; i < 3; i++) {
        let count = 1;
        for (let a = i + 1; a < testArr1.length; a++) {
            if (testArr1[i][0] == testArr1[a][0]) {
                count += 1
            }
        }
        numberOfSameCard.push(count);
        }
        console.log(numberOfSameCard)
    return numberOfSameCard;
    }