array=[];
function submit(){
var display=[];
for(var S=1;S<=4;S++){
var name=document.getElementById("name_of_the_student_"+S).value;
console.log(name);
array.push(name);
}

var length=array.length;
for(var A=0;A<length;A++){
display.push("<h4>NAME"+array[A]+"</h4>")
}






document.getElementById("display_name_with_commas").innerHTML=display;
var remove=display.join("");
document.getElementById("display_name_without_commas").innerHTML=remove;
document.getElementById("submit_button").style.display="none";
document.getElementById("sort_button").style.display="inline-block";
}

function sorting(){
array.sort();
var displaysort=[];
var length=array.length;
for(var A=0;A<length;A++){
displaysort.push("<h4>NAME"+array[A]+"</h4>")
}
var remove=displaysort.join("");
document.getElementById("display_name_without_commas").innerHTML=remove;
}






