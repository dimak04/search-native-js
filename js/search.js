const localeHTML = document.getElementById("content").innerHTML;
const textInput = document.getElementById("keyword");

function UniqArray(arr) {
  let endArr = new Set(arr);
  endArr.delete("");
  return endArr;
}

function FindOnPage() {
  const input = textInput.value;
  let inputArr = input.split(/[ ]/);
  inputArr = UniqArray(inputArr);
  const searchArea = document.getElementById("content").innerText;
  let modHTML = document.getElementById("content").innerHTML;
  let arraySearch = searchArea.split(/[\s]/);
  arraySearch = UniqArray(arraySearch);
  let markArray = {};
  for (let item of arraySearch) {
    let elem = item;
    inputArr.forEach(function(item) {
      const search = "/(" + item + ")/gi";
      elem = elem.replace(eval(search), function(item) {
        return "<mark>" + item + "</mark>";
      });
    });
    if (item != elem) {
      markArray[item] = elem;
    }
  }
  for (let key in markArray) {
    let regexpSearch = "/(" + key + ")/g";
    console.log(regexpSearch);
    modHTML = modHTML.replace(eval(regexpSearch), markArray[key]);
  }
  document.getElementById("content").innerHTML = modHTML;
}

function Change() {
  ClearSelection();
  FindOnPage();
}

function ClearSelection() {
  document.getElementById("content").innerHTML = localeHTML;
}

textInput.addEventListener("input", Change);
