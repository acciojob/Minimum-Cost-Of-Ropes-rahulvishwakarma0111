function wow(event) {
	event.preventDefault();
	var a = document.querySelector("input").value
    var r = a.split(",");

var sum =0;
    while(r.length>1){
    r.sort( function (a , b ){ return a-b} );
    var inssum =    Number(r[0])+Number(r[1]);
    sum = sum + inssum
    console.log(r);
    r.splice(0 , 2 , inssum)
    }

	document.querySelector("#result").innerText = sum;
}