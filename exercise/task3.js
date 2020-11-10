
// JUNCTION OR SEFT - INPUT A NUMBER AND RETURN WHETHER IT'S A JUNCTION OR A SELF NUMBER 

let bt3Btn = document.getElementById("bt3-btn");
bt3Btn.addEventListener("click", () => {
  bt3Result();
});

function bt3Result() {
  let bt3Num = parseInt(document.getElementById("bt3-input").value);
  let bt3Arr = [];
  bt3Arr = junctionOrSelf(bt3Num);
  if (bt3Arr.length == 0) {
    document.getElementById("ketQuaBt3").innerHTML = "Self";
    document.getElementById("ketQuaBt3Plus").innerHTML = "Không có số nào";
  } else {
    document.getElementById("ketQuaBt3").innerHTML = "Junction";
    document.getElementById("ketQuaBt3Plus").innerHTML = bt3Arr;
  }
}
// Bài tập 3 junction or Self
function junctionOrSelf(num) {
  let finalArr = []; // kết quả cuối cùng 0 = Self >0 Junction
  let numLength = num.toString().split("").length; //đếm số digits của number
  let numStart;
  if (numLength == 1) {
    numStart = 1;
  } else {
    numStart = num - 9 * numLength; //số thấp nhất có thể để bắt đầu vòng lặp
  }
  for (let i = numStart; i < num; i++) {
    numStartArr = i.toString().split("");
    let numSum = numStartArr.reduce((sum, val) => { //tổng mảng
      return parseInt(sum) + parseInt(val);
    });
    if (i + numSum === num) {
      finalArr.push(i);
    } else {
      continue;
    }
  }
  return finalArr;
}
