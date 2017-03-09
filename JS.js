/**
 * Created by Philip on 27.09.2016.
 */

//region DOM
var thing = document.createElement("p");
thing.id="1";
thing.innerHTML=" TOTAL NÜTZLICHER TEXT";
thing.style.backgroundColor="blue";
thing.style.color="white";
document.body.appendChild(thing);

var link = document.createElement("a");
link.innerHTML="<br> TOTAL NÜTZLICHER LINK";
link.style.backgroundColor="green";
link.style.color="white";
link.href="https://www.youtube.com";
document.getElementById("1").appendChild(link);


//endregion

alert("Programmierwoche 6");