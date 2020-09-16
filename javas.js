function check1()
{
    var fname = document.getElementById("fname").value;
    var lname = document.getElementById("sname").value;
    var email = document.getElementById("email").value;
    var pass = document.getElementById("pass").value;
    var cpass = document.getElementById("cpass").value;
    var num = document.getElementById("num").value;
    if(fname=="" || fname==" ")
    {
        alert("First Name can not be left blank.");
    }
    else if(lname=="" || lname==" ")
    {
        alert("Last Name can not be left blank.");
    }
    else if(email=="" || email==" ")
    {
        alert("E-mail I'd can not be left blank.");
    }
    else if(pass=="")
    {
        alert("Password can not be left blank.");
    }
    else if(pass.length<8)
    {
        alert("Password too short. Password must atleast be 8 digits long.");
    }
    else if(cpass!=pass)
    {
        alert("Passwords dosen't match!");
    }
    else if(num=="" || num==" ")
    {
        alert("Number can not be left blank");
    }
    else if(num.length!=10)
    {
        alert("Enter valid 10 digit Number.");
    }
    else
    {
        window.location = "https://christuniversity.in/";
        alert("Signed-in sucessfull!");
    }
}

function big()
{
    document.getElementById("butt").style.width="88px";
    document.getElementById("butt").style.height="33px";
}

function small()
{
    document.getElementById("butt").style.width="80px";
    document.getElementById("butt").style.height="25px";
}