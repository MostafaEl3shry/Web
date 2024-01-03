var InfoArray = 
[
    UserName="Mostafa",PassWord="mostafa123"
]
function click_Login()
{
    var LogUser = document.getElementById("LogUser").value;
    var LogPass = document.getElementById("LogPass").value;
    for(var i = 0 ; i < InfoArray.length ; i++ )
    {
        if(InfoArray[i].UserName==LogUser.value&&InfoArray[i].PassWord==LogPass.value)
        {
            alert("Login Succesfuly");
            window.location("FeedBack.html")
        }
        else
        {
            alert("Try again");
        }
    }
}

//////////////////////////////////////////////////////////////////////////////////////////////////////

function click_SignUp()
{
    var SignUser = document.getElementById("SignUser");
    var SignPass = document.getElementById("SignPass");
    var age = document.getElementById("age");
    var numbeer = document.getElementById("numbeer");
    var gender = document.querySelector("gender");
    var regex = /^(?=.*\d)(?=.*\w)(?=.*[a-z])(?=.*[A-Z]).{1,8}$/
    var radio = document.querySelector(`input[name="gender"]:checked`);
    if(SignUser==(InfoArray.UserName=SignUser)&&regex.test(SignPass)&&18<age<60&&numbeer.length==11)
    {
        var inputs=
        [
            {
                UserName:SignUser,
                PassWord:SignPass,
                Age:age,
                Phone:numbeer,
                Gender:gender,
            }
        ]
        InfoArray.push(inputs);
        console.log(InfoArray);
    }
    else
    {
        console.log("error 404")
    }
}


//////////////////////////////////////////////////////////////////////////////////////


function newpass()
{
    var ForUser = document.getElementById("forUser");
    var NewPass = document.getElementById("forPass");
    InfoArray.forEach(element => {
        if(UserName==ForUser)
        {
            var newp=[{PassWord:NewPass}];
            InfoArray.PassWord.push(newp);
            console.log(InfoArray);
        }
    });
}