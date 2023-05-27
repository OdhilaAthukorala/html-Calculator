function Sum(){
    alert("button test");
    let fn = parsefloat(Document.getElementById("txtFirstNumber").value);
    let sn = parsefloat(Document.getElementById("txtSecondNumber").value);

    Document.getElementById("txtresult").value = fn +sn;
}