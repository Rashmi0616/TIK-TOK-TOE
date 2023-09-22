var count=1;
function tap(v)
{
    if(count<=9)
    {
if(count%2==0)
{
document.getElementById(v.id).innerHTML="X";
}
else
{
    document.getElementById(v.id).innerHTML="O";
}
count++;
if(win())
{
    alert("winner");
    reset();
}
}
else
{
alert("match tie  want to play again cleck ok");
reset();
}
}

function win()
{
    if(checkCondition('div1','div2','div3') ||checkCondition('div1','div4','div7') ||checkCondition('div1','div5','div9') ||checkCondition('div4','div5','div6') ||checkCondition('div7','div8','div9') ||checkCondition('div2','div5','div8') ||checkCondition('div3','div5','div7') ||checkCondition('div3','div6','div9'))
    {
        return true;
    }
}
function checkCondition(div1,div2,div3)
{
if(document.getElementById(div1).innerHTML!="" && document.getElementById(div2).innerHTML!="" && document.getElementById(div3).innerHTML!="" && document.getElementById(div1).innerHTML==document.getElementById(div2).innerHTML&& document.getElementById(div2).innerHTML==document.getElementById(div3).innerHTML)
{
    return true;
}
}
function reset()
{
    for(var i=1;i<=9;i++)
    {
        document.getElementById('div'+i).innerHTML="";
    }
    count=1;
}
function myfun()
{
   reset();
}