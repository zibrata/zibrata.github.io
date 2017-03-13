var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var myObj = JSON.parse(this.responseText);
        document.getElementById("info").innerHTML = "\n blocks: "+myObj.blocks+"\n version: "+myObj.version+"\n paytxfee: "+myObj.paytxfee;
    }
};
xmlhttp.open("GET", "http://bitcoin.mubiz.com/info", true);
xmlhttp.send();



var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var myObj = JSON.parse(this.responseText);
        document.getElementById("blockchaininfo").innerHTML = "\n main: "+myObj.main+"\n version: "+myObj.version+"\n paytxfee: "+myObj.paytxfee;
    }
};
xmlhttp.open("GET", "http://bitcoin.mubiz.com/blockchaininfo", true);
xmlhttp.send();



var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var myObj = JSON.parse(this.responseText);
      document.getElementById("mininginfo").innerHTML = "\n blocks: "+myObj.blocks+"\n difficulty: "+myObj.difficulty+"\n chain: "+myObj.chain;
    }
};
xmlhttp.open("GET", "http://bitcoin.mubiz.com/mininginfo", true);
xmlhttp.send();


// A FAIRE LE PEER INFO

var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var myObj = this.responseText;
        var jsonPretty = JSON.stringify(JSON.parse(myObj),null,2);
        document.getElementById("peerinfo").innerHTML = jsonPretty;
    }
};
xmlhttp.open("GET", "http://bitcoin.mubiz.com/peerinfo", true);
xmlhttp.send();
