function sliderFunc(){
const slider = document.getElementById("slider");
const sliderOutput = document.getElementById("slider-out");

sliderOutput.innerHTML = slider.value;

slider.addEventListener("input",() => {
    sliderOutput.innerHTML = slider.value;
});
}
sliderFunc();

function mainFunc(){
    const passLen = document.getElementById("slider-out").value;
    let finalPass = passwordGenerator(passLen);

    document.getElementById("final-password").innerHTML = finalPass;

    finalPass = '';
}

function sleep(ms){
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function copyToClipBoard (){
    const copyText = document.getElementById("final-password");
    const toolTip = document.getElementById("tooltip");

    navigator.clipboard.writeText(copyText.innerHTML);

    toolTip.style.display = "block";
    sleep(1000).then(()=> {
        toolTip.style.display = "none";
    })

}

function passwordGenerator(passLength){
    let defChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';

    let smallLetters = 'abcdefghijklmnopqrstuvwxyz';
    let specialChars = "!@#$%&*_?-~";

    let smallLettersChecked = document.getElementById("small").checked;
    let specialCharsChecked = document.getElementById("special").checked;

    if(smallLettersChecked) {
        defChars += smallLetters;
    }

    if(specialCharsChecked) {
        defChars += specialChars;
    }

    str = '';

    for (let i=0; i < passLength; i++){
        str += defChars.charAt(Math.floor(Math.random() * defChars.length));
    }

    return str;
}

