var yes =0;
var no = 0;



function clickk()
{
    var radio = document.querySelector(`input[name="q${i+1}"]:checked`);
    for(var i = 0 ; i < 3 ; i++)
    {
        if(radio=="yes")
        {
            yes++
        }
        else
        {
            no++
        }
    }
    alert(`Yes:${yes} No:${no}`);
}