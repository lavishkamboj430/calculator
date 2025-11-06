function getdata(val)
{
    document.getElementById("display").value+=val;
}
function clear1()
{
    document.getElementById("display").value="";
}
function calculate()
{
    let result = eval(document.getElementById("display").value);
    document.getElementById("display").value=result;
}
function back()
{
    let num=document.getElementById("display").value;
    num=num.slice(0, -1);
    document.getElementById("display").value= num;
}
