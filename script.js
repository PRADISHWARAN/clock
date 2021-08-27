
const hour=document.getElementById("hour");
const minut=document.getElementById("minut");
const second=document.getElementById("second");

function soatYurishi(){
    var date=new Date();
    const secondRatio=(date.getSeconds()/60)*360;
    const minutRatio=(secondRatio+date.getMinutes()/60)*360;
    const hourRatio=(minutRatio+date.getHours()/12)*360;
    soatRatio(second,secondRatio);
    soatRatio(minut,minutRatio);
    soatRatio(hour,hourRatio);
    document.getElementById("date").innerHTML=date.getDate();
    var x=date.getMonth();
    switch(x){
        case 0:document.getElementById("month_name").innerHTML="Jan";break;
        case 1:document.getElementById("month_name").innerHTML="Feb";break;
        case 2:document.getElementById("month_name").innerHTML="Mar";break;
        case 3:document.getElementById("month_name").innerHTML="Apr";break;
        case 4:document.getElementById("month_name").innerHTML="May";break;
        case 5:document.getElementById("month_name").innerHTML="Jun";break;
        case 6:document.getElementById("month_name").innerHTML="jul";break;
        case 7:document.getElementById("month_name").innerHTML="Aug";break;
        case 8:document.getElementById("month_name").innerHTML="Sep";break;
        case 9:document.getElementById("month_name").innerHTML="Oct";break;
        case 10:document.getElementById("month_name").innerHTML="Nov";break;
        case 11:document.getElementById("month_name").innerHTML="Dec";break;

    }
}

function soatRatio(element,setRatio){
    element.style.setProperty("--rotation",setRatio);
}
setInterval(soatYurishi,1000);