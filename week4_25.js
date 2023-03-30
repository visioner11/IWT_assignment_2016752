function validate(){
    Fname=document.forms[0].elements['fname'].value;
    Lname=document.forms[0].elements['lname'].value;
    Uid=document.forms[0].elements['uid'].value;

    Pwd=document.forms[0].elements['pwd'].value;

    Cf=document.forms[0].elements['cf'].value;

   Add =document.forms[0].elements['add'].value;

   Email =document.forms[0].elements['email'].value;

   Cno =document.forms[0].elements['cno'].value;


    fnameReg=/^[a-zA-Z]{2,}$/;
    if(fnameReg.test(Fname)===false)
    {
        alert("invalid fname");
        return false;
    }

   
   
    
   

    uidReg=/^[a-zA-Z]{5}[0-9]{5}$/;
    if(uidReg.test(Uid)===false)
    {
        alert("invalid uid");
        return false;
    }
    pwdReg=/^(?=.*[0-9])(?=.*[A-Z])(?=.*[a-z])$/;
    if(pwdReg.test(Pwd)===false)
    {
        alert("invalid pwd");
        return false;
    }
    
    if(Pwd!==Cf)
    {
        alert("not matched");
        return false;
    }
   
    

    emailReg=/^\w+\w+@[a-zA-Z]+?\.[a-zA-Z]{2,3}$/;
    if(emailReg.test(Email)===false)
    {
        alert("invalid email");
        return false;
    }
    cnoReg=/^[6-9][0-9]{9}$/;
    if(cnoReg.test(Cno)===false)
    {
        alert("invalid cno");
        return false;
    }
    return true;
}
