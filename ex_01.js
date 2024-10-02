function getAngryDog(numberOfWoofs)
// Your code here 
{    let nbr = "";
         
    for (i = 0; i < numberOfWoofs; i++) nbr += "woof";
    return nbr;

}



//Some code to test your function output : (you can modify it but /!\ do not deliver it /!\ ). Only deliver your function
var result = getAngryDog(3);
displayResult(result);
