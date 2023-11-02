function makeBigger() {
  var textArea = document.getElementById("inputText");
  textArea.style.fontSize = "24pt";
}

function applyStyle() {
  var textArea = document.getElementById("inputText");
  var fancyRadio = document.getElementById("fancyRadio");

  if (fancyRadio.checked) {
    textArea.style.fontWeight = "bold";
    textArea.style.color = "blue";
    textArea.style.textDecoration = "underline";
  } else {
    textArea.style.fontWeight = "normal";
    textArea.style.color = "black";
    textArea.style.textDecoration = "none";
  }
}

function makeMoo() {
  var textArea = document.getElementById("inputText");
  var text = textArea.value;

  // Uppercase the text
  textArea.value = text.toUpperCase();

  // Add "-Moo" to the last word of each sentence
  var sentences = text.split(".");
  for (var i = 0; i < sentences.length; i++) {
    var words = sentences[i].trim().split(" ");
    if (words.length > 0) {
      words[words.length - 1] += "-Moo";
      sentences[i] = words.join(" ");
    }
  }
  textArea.value = sentences.join(".");
}

// Initial alert for testing
alert("Hello, world!");
