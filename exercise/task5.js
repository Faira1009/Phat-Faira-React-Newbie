
// TYOE IN 3 PARAMETERS LENGTH OF ROWS; NUMBER OF ROWS; SYMBOL - RETURNS A FRAME WITH THE ACCORDINGLY PARA.
let bt5Btn = document.getElementById("bt5-btn");
bt5Btn.addEventListener("click", () => {
    document.getElementById("bt5Fra").innerHTML = " "; // xóa nội dung của kết quả cũ
  bt5Result();
});

function bt5Result() {
  let bt5Input = document.getElementById("bt5-input").value;
  let bt5Arr = bt5Input.split(" ");     //tạo chuỗi 3 phần tử từ value được nhập
  let bt5Length = parseInt(bt5Arr[0]); //độ dài của dòng
  let bt5Rows = parseInt(bt5Arr[1]);   //số dòng
  let bt5Smbl = bt5Arr[2];             //kí tự
  let frameArr = drawFrame (bt5Length,bt5Rows,bt5Smbl);
  let tableDiv = document.createElement("div") //tạo div mỗi lần click tạo mới sau khi cái cũ bị xóa
  tableDiv.setAttribute("id","ketQuaBt5")
  
  for (i=0; i < frameArr.length; i++) {
      let finalFrame = document.createElement("TEXTAREA"); //dùng textarea để dấu cách không bị mất khi render
      finalFrame.setAttribute("class","frame")
      finalFrame.setAttribute("cols","100")
      finalFrame.setAttribute("rows","1")
      finalFrame.style.border = "none"           // bỏ viền Textarea
      let innerText = document.createTextNode(frameArr[i]); //gọi từng giá trị trong array ra để in
      finalFrame.appendChild(innerText);
      tableDiv.appendChild(finalFrame)
      console.log (frameArr[i])
  }
  document.getElementById("bt5Fra").appendChild(tableDiv)
}

function drawFrame (bt5Length,bt5Rows,bt5Smbl) { //function tạo mảng trước khi in
    let frameA = [], topBot = "", middle =""; 
    topBot = rowTopBot(bt5Length,bt5Smbl);
    middle = rowMiddle(bt5Length,bt5Smbl);

    frameA.push(topBot)
    for (let i=2; i<= bt5Rows-1; i++) {
        frameA.push(middle)
    }
    frameA.push(topBot)
    return frameA;
}

function rowTopBot(bt5Length,bt5Smbl) { // tạo hàng đầu và sử dụng cho hàng cuối
    let rowTop = "";
    for (let i= 1; i <= bt5Length; i++) {
        rowTop = rowTop + bt5Smbl;
    }
    return rowTop;
}

function rowMiddle(bt5Length,bt5Smbl) { // tạo hàng giữa
    let rowMiddle = "";
    rowMiddle = rowMiddle + bt5Smbl;
    for (i=2; i <= bt5Length-1; i++) { 
        rowMiddle = rowMiddle +" ";
    }
    rowMiddle = rowMiddle + bt5Smbl;
    return rowMiddle;
}