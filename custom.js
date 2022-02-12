document.getElementById('button').addEventListener('click',changeBackground)

function changeBackground(){
   
    const blue = Math.floor(Math.random() * 255);
    const green = Math.floor(Math.random() * 255)
    const red = Math.floor(Math.random() * 255)
    
    const color = `rgb(${red},${green},${blue})`
     console.log(color)
    const bluehexaConvert = blue.toString(16)
    const greenhexaConvert = green.toString(16)
    const redhexaConvert = red.toString(16)
    const hexaConvert = redhexaConvert + greenhexaConvert + bluehexaConvert;
    document.getElementsByTagName('body')[0].style.background = color;
    const hexColor = document.getElementById('title').innerText = `Hex Color Code : #${hexaConvert}`

    return hexColor;
    
}

