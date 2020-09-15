function check1()
{
    var email1 = document.getElementById("email").value;
    var pass = document.getElementById("pass").value;
    var passle = document.getElementsByClassName("pass").length;
    if(email1=="")
    {
        alert("E-mail I'd can not be left blank");
    }
    else if(pass.length<8)
    {
        alert("Password too short. Password must atleast be 8 digits long.");
    }
    else if(pass=="")
    {
        alert("Password can not be left blank.");
    }
    else if(pass==" ")
    {
        alert("Password can not start with space.")
    }
    else
    {
        redi();
        alert("Log-in sucessfull!");
    }
}
function redi()
{
    window.location = "https://christuniversity.in/";
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