const btnEl = document.getElementById("btn-calc-years")
const birthdayEl= document.getElementById("birthday")
const resultEl=document.getElementById("result")

function calculateAgeYear(){
    const birthdayValue=birthdayEl.value
    if(birthdayValue === ""){
        alert("Please enter your birthday")
        return
    }else{
        const ageYear = getAgeYear(birthdayValue)
        resultEl.innerText=`Your age is ${ageYear} ${ageYear>1?"years":"year"} old`
        
    
    }
}

function getAgeYear(birthdayValue){
    const currentDate= new Date();
    const birthdayDate= new Date(birthdayValue);
    let ageYear = currentDate.getFullYear() - birthdayDate.getFullYear();
    const ageMonth = currentDate.getMonth() - birthdayDate.getMonth();
    if (ageMonth < 0 || ageMonth === 0 ){
        ageYear--;
    }
    return ageYear;
    
}

btnEl.addEventListener("click", calculateAgeYear)