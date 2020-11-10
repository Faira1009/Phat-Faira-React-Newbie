// TYPE IN A STRING AND GET RID ALL OF VOWEL AND 
let bt8Btn = document.getElementById("bt8-btn");
bt8Btn.addEventListener("click", () => {
    bt6Result();
});


function bt8Result() {
    let beforeStr = "";
    beforeStr = document.getElementById("bt8-input").value;
    let upperCase = ""
    upperCase = beforeStr.toUpperCase()
    let mainArr = [];
    mainArr = vowelDel(upperCase)
    let finalSigil = "";
    finalSigil = duplicateDel(mainArr);
    document.getElementById("ketQuaBt6").innerHTML = finalSigil
    console.log(finalSigil)
    console.log(mainArr)
}

function vowelDel(upperCase) {
    let startStr = "";
    startStr = upperCase;
    let mainArr1 = startStr.split("")
    let withoutVowel = [];
    for (let i = 0; i < mainArr1.length; i++) {
        if (mainArr1[i] != "U" && mainArr1[i] != "E" && mainArr1[i] != "O" && mainArr1[i] != "A" && mainArr1[i] != "I") {
            withoutVowel.push(mainArr1[i])
        }
    }
    return withoutVowel;

}

function duplicateDel(arrWithoutVowel) {
    let arr = [];
    arr = arrWithoutVowel;
    let arrToSet = [];
    arrToSet = new Set(arr);
    let setToArr = [];
    setToArr = Array.from(arrToSet);
    let newString = ""
    newString = setToArr.join()
    let sigil = "";
    sigil = newString.replace(/,/g, "");

    return sigil;
}