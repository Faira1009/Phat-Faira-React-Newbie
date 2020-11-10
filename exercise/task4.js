const morseToDots = {
    ".-": "A",
    "-...": "B",
    "-.-.": "C",
    "-..": "D",
    ".": "E",
    "..-.": "F",
    "--.": "G",
    "....": "H",
    "..": "I",
    ".---": "J",
    "-.-": "K",
    ".-..": "L",
    "--": "M",
    "-.": "N",
    "---": "O",
    ".--.": "P",
    "--.-": "Q",
    ".-.": "R",
    "...": "S",
    "-": "T",
    "..-": "U",
    "...-": "V",
    ".--": "W",
    "-..-": "X",
    "-.--": "Y",
    "--..": "Z",
    "-----": "0",
    ".----": "1",
    "..---": "2",
    "...--": "3",
    "....-": "4",
    ".....": "5",
    "-....": "6",
    "--...": "7",
    "---..": "8",
    "----.": "9",
    "-.-.--": "!",
    "   ": " ",
    "..--..": "?",
    ".-.-.-": ".",
    ".----.": '"',
    "---...": ":",
    "--..--": ", ",
    " ": "",
  };
  
// TYPE IN MORSE AND RETURNS THE DECODED TEXT
let bt4Btn = document.getElementById("bt4-btn");
bt4Btn.addEventListener("click", () => {
  bt4Result();
});

function bt4Result() {
  let bt4Input = document.getElementById("bt4-input").value;
  let Text = decodeMorse(bt4Input);
  document.getElementById("ketQuaBt4").innerHTML = Text;
}
function decodeMorse(bt4Input) {
  let bt4Arr = bt4Input.split(" ");
  let bt4Decoded = bt4Arr.map((val) => {
    return morseToDots[val];
  });
  let bt4Text = bt4Decoded.join();
  let bt4Text2 = bt4Text.replace(",,,", " ");
  let bt4Text3 = bt4Text2.replace(/,/g, "");
  return bt4Text3;
}
