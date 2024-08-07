function getRandomColor() {
    return dmc_colors[Math.floor(Math.random() * dmc_colors.length)]
}

function getTextColor(color, opacity) {
    const brightness = (0.2126 * color.Red) + (0.7152 * color.Green) + (0.0722 * color.Blue);
    opacity = opacity.toString();
    if(brightness >= 128) {
        return 'rgba(0,0,0,' + opacity + ')';
    } else {
        return 'rgba(255,255,255,' + opacity + ')';
    }
}

function getColorIndex(colorNum) {
    for(let i = 0; i < dmc_colors.length; i++) {
        if(dmc_colors[i].Number == colorNum/10000) {
            return i;
        }
    }
}

function setAccentColor(elemId, sessionColor) {
    console.log(elemId);
    console.log(sessionColor);
    let color;
    if(sessionColor >= 10000) {
        color = dmc_colors[getColorIndex(sessionColor)];
    } else {
        color = dmc_colors[sessionColor];
    }
    for(let i = 0; i < elemId.length; i++) {
        document.getElementById(elemId[i]).style.backgroundColor = color.Hex;
        document.getElementById(elemId[i]).style.color = getTextColor(color, 0.75);
    }
}

function setRanAuthBg() {
    const color = getRandomColor();
    document.body.style.backgroundColor = color.Hex;
    document.getElementById('dmc').style.color = getTextColor(color, 0.5);
    const string = "DMC " + color.Number + " - " + color.Name;
    document.getElementById('dmc').innerText = string;
}

function setRanElemBg(elemId) {
    const color = getRandomColor();
    document.getElementById(elemId).style.backgroundColor = color.Hex;
    document.getElementById(elemId).style.color = getTextColor(color, 0.75);
}

function setElemBg(elemId, color) {
    color = colors[getColorIndex(color)];
    document.getElementById(elemId).style.backgroundColor = color.Hex;
    document.getElementById(elemId).style.color = getTextColor(color, 0.75);
}