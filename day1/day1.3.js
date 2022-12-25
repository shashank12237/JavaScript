function calculator()
{

    var num1=parseFloat(document.getElementById("n1").value);
    var num2=parseFloat(document.getElementById("n2").value);
    var op=document.getElementById("opr");
    for(var i=0;i<op.length;i++)
    {
        if(op[i].checked)
        {
            var ch=op[i].value;
        }
        
    }
}