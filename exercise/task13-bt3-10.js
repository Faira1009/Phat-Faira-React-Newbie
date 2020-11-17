let bt13Btn = document.getElementById("bt13-btn");
bt13Btn.addEventListener("click", () => {
    bt13Result();
});


function bt13Result() {
    let year = document.getElementById("bt13-input").value;
    let finalResult = StemsAndBranches (year);
    document.getElementById("ketQuaBt13").innerHTML = finalResult;

}


const stems= ["METAL","WATER","WATER","WOOD","WOOD","FIRE","FIRE","EARTH","EARTH","METAL"];
const branches= ["MONKEY","ROOSTER","DOG","PIG","RAT","OX","TIGER","RABBIT","DRAGON","SNAKE","HORSE","SHEEP"];

function StemsAndBranches (year) {
    let dividedNum = year;
    let s = dividedNum % 10;
    let b = dividedNum % 12;
    let result = "";
    result = stems[s] + " " +branches[b]
    return result;
}
