
let bt9Btn = document.getElementById("bt9-btn");
bt9Btn.addEventListener("click", () => {
    bt9Result();
});


function bt9Result() {
    let str = document.getElementById("bt9-input").value;
    let mainObj = turnToObj(str);
    console.log(mainObj)
    let Fiscal = finalCode (mainObj);
    document.getElementById("ketQuaBt9").innerHTML = Fiscal

}

function turnToObj(str) {
    let str1 = str;
    let str2 = str1.replace("{", "")
        .replace("}", "")
        .replace(/(\r\n|\n|\r)/gm, "")
        .replace(/ /g, "")
        .replace(/(['"])/g, "")
        .split(",")
    console.log(str2)
    let mainObj = {}

    for (i = 0; i < str2.length; i++) {
        let b = []
        b = str2[i].split(":")
        console.log(b)
        let a = b[0]
        mainObj[a] = b[1].toUpperCase();
    }

    return mainObj;
}

function finalCode (mainObj) {
    let arr1=decodeStr (mainObj,"surname")
    console.log (arr1)
    let arr2=decodeStr (mainObj,"name")
    console.log (arr2)
    let arr3=decodeDoB (mainObj)
   
    let temp2 = arr3.join().replace(/\,/g,"")
    let temp = arr1[0] + arr1[1] + arr1[2] + arr2[0] + arr2[1] + arr2[2] +temp2

    return temp;
}
function decodeStr (mainObj,type) {
    let Obj = mainObj;
    let strType = type;
    console.log(Obj)
    let Name = "";
    if ( strType == "name") {
        Name = Obj.name.split("");
    }
    else {
        Name = Obj.surname.split("");
    }
    
    let vowel = [];
    let consonant = [];
    let CodeConsonant = [];
    let finalArr = [];
    for (i=0; i< Name.length; i++) {
        if (Name[i] == "U" || Name[i] == "E" || Name[i] == "O" || Name[i] == "A" || Name[i] == "I" ) {
            vowel.push(Name[i])
        }
        else {
            consonant.push (Name[i])
        }
    }
    if (strType == "surname") { 
        if (consonant.length > 3) {
            CodeConsonant.push(consonant[0]);
            CodeConsonant.push(consonant[1]);
            CodeConsonant.push(consonant[2]);
         }
         else {
             CodeConsonant = [...consonant];
         }
    }
    
    else if (strType == "name") {
        if (consonant.length > 3) {
            CodeConsonant.push(consonant[0]);
            CodeConsonant.push(consonant[2]);
            CodeConsonant.push(consonant[3]);
         }
         else {
             CodeConsonant = [...consonant];
         }
    }
    finalArr = [...CodeConsonant, ...vowel];
    finalArr.push ("X");
    finalArr.push ("X");
    finalArr.push ("X");
    
    return finalArr;
}

const months = {
    1: "A",
    2: "B",
    3: "C",
    4: "D",
    5: "E",
    6: "H",
    7: "L",
    8: "M",
    9: "P",
    10: "R",
    11: "S",
    12: "T"
}

function decodeDoB (mainObj) {
    let dob = mainObj.dob;
    let dobArr = dob.split("/");
    let finalArr=[];
    let temp = "";
    let temp2 = dobArr[2][2] +dobArr[2][3];
    finalArr.push(temp2)
    
    finalArr.push(months[dobArr[1]])

    if (mainObj.gender == "M") {
        if(parseInt(dobArr[0]) <10) {
            temp = "0" + dobArr[0]
            finalArr.push(temp)
        }
        else {
            finalArr.push(dobArr[0])
        }
    }
    
    else {
        let temp1 = parseInt(dobArr[0])+40
    finalArr.push(temp1)
    }

    console.log (finalArr)
    return finalArr;
    
}

