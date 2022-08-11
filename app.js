function nxtnum() {
  var nxtnum;
  nxtnum = parseFloat(document.getElementById("num").value) + 1;
  document.getElementById("nxtnum").innerHTML = "Next Number is:" + nxtnum;
}
