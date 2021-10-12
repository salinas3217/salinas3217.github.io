function calculate()
{
     var feet = document.getElementById("feet").value;
     var inches = document.getElementById("inches").value;
     var pounds = document.getElementById("pounds").value;
     var userBMI = pounds * 703/ ((+feet * 12 + +inches) * (+feet * 12 + +inches));

    document.getElementById("user-bmi").value = userBMI;

if(userBMI < 18.5)
{
    document.getElementById("user-bmi-classification").innerHTML = "Underweight";
}

else if(userBMI >= 18.5 && userBMI <25.0)
{
    document.getElementById("user-bmi-classification").innerHTML = "Normal or Healthy Weight";
}

else if(userBMI >= 25.0 && userBMI <30.0)
{
    document.getElementById("user-bmi-classification").innerHTML = "Overweight";
}
else
{
    document.getElementById("user-bmi-classification").innerHTML = "Obese";
}
}