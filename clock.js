function binary(){
    var date = new Date();
    var hour = date.getHours();
    var minute = date.getMinutes();
    var second = date.getSeconds();
    var a = hour.toString(2);
    var b = minute.toString(2);
    var c = second.toString(2);
    document.getElementById("111").textContent = a + " : " + b + " : " + c;
    var binaryLoop = setInterval(binary, 1000);
}
