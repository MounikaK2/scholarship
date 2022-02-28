function check(){
    var temp=1;
    let ename = document.forms["myform"]["ename"].value;
    let dept=document.forms["myform"]["dept"].value;
    let design=document.forms["myform"]["design"].value;
    let doj=document.forms["myform"]["doj"].value;
    let mail=document.forms["myform"]["mail"].value;
    let num=document.forms["myform"]["num"].value;
    let cname=document.forms["myform"]["cname"].value;
    let colname=document.forms["myform"]["colname"].value;
    let mark=document.forms["myform"]["mark"].value;

    var dTime=new Date(doj);
    var currDate=new Date();
    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    var phoneno = /^\d{10}$/;
    var nameVal=/^[a-zA-Z]+$/;
    d=true;

    if (!ename.match(nameVal)){
        d=false;
        alert("Invalid name")
    }
    if (!dept.match(nameVal)){
        d=false;
        alert("Invalid department name")
    }
    if (!design.match(nameVal)){
        d=false;
        alert("Invalid designation name")
    }
    if (!cname.match(nameVal)){
        d=false;
        alert("Invalid child name")
    }
    if (!colname.match(nameVal)){
        d=false;
        alert("Invalid collage name")
    }
    if(currDate.getFullYear()-dTime.getFullYear()<10){
        d=false;
    }
    else if(currDate.getFullYear()-dTime.getFullYear()==10){
        if (currDate.getMonth()<dTime.getMonth()){
            d=false;
        }
        else if(currDate.getMonth()==dTime.getMonth()){
            if(currDate.getDate()<dTime.getDate()){
                d=false;
            }
            
        }
    }
    if (d==false){
        temp=0;
        alert("Experience shoul be greater than 10 years")
    }
    
    if (ename == "" || dept == "" || design == "" || doj == "" || mail == "" || num == ""
    || cname == "" || colname == "" || mark == "")
    {
        alert("Missing fields");
        temp=0;
    }
    mark=parseInt(mark)
    if(mark>'100' || mark<'0'){
        alert('Mark should be between 0 and 100')
    }
    if(num.length != 10||!num.match(phoneno))
    {
        alert("Invalid Mobile Number");
        temp=0;
    }
    if(!mail.match(validRegex)){
        temp=0;
        alert("Invalid mail Id");
    }
    if(!document.getElementById('notavailed').checked){
        temp=0;
        alert('Not qualified for scholarship');
    }
    if (temp==1){
        alert("FORM SUBMITTED");
    }
}