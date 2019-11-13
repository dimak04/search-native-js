const locale_HTML = document.getElementById("content").innerHTML;
const textInput = document.getElementById("keyword");

function UniqArray(arr) {
  let end_arr = new Set(arr);
  end_arr.delete("");
  return end_arr;
}

function FindOnPage() {
  const input = textInput.value;
  let input_arr = input.split(/[ ]/);
  input_arr = UniqArray(input_arr);
  const search_area = document.getElementById("content").innerText;
  let pr = document.getElementById("content").innerHTML;
  let array_search = search_area.split(/[\s]/);
  let mark_array = [];
  for (let i = 0; i < array_search.length; i++) {
    mark_array[i] = array_search[i];
    input_arr.forEach(function(item) {
      const search = "/(" + item + ")/gi";
      mark_array[i] = mark_array[i].replace(eval(search), function(item) {
        return "<mark>" + item + "</mark>";
      });
    });
  }
  for (let i = 0; i < mark_array.length; i++) {
    pr = pr.replace(array_search[i], mark_array[i]);
  }
  document.getElementById("content").innerHTML = pr;
}

function Change() {
  ClearSelection();
  FindOnPage();
}

function ClearSelection() {
  document.getElementById("content").innerHTML = locale_HTML;
}

textInput.addEventListener("input", Change);
