function ran_bg_col() {
    const color = colors[Math.floor(Math.random() * colors.length)]
    document.body.style.backgroundColor = color.Hex;
    const brightness = (0.2126 * color.Red) + (0.7152 * color.Green) + (0.0722 * color.Blue);
    if(brightness >= 128) {
        document.getElementById('dmc').style.color = 'rgba(0,0,0,0.5)';
    } else {
        document.getElementById('dmc').style.color = 'rgba(255,255,255,0.5)';
    }
    const string = "DMC " + color.Number + " - " + color.Name
    document.getElementById('dmc').innerText = string;
}

function ran_elem_col(elemId, sessionColor) {
    console.log(sessionColor);
    let color = colors[0];
    if(sessionColor >= 10000) {
        for(let i = 0; i < colors.length; i++) {
            if(colors[i].Number == sessionColor/10000) {
                color = colors[i];
            }
        }
    } else {
        color = colors[sessionColor];
    }
    for(let i = 0; i < elemId.length; i++) {
        document.getElementById(elemId[i]).style.backgroundColor = color.Hex;
        const brightness = (0.2126 * color.Red) + (0.7152 * color.Green) + (0.0722 * color.Blue);
        if(brightness >=128) {
            document.getElementById(elemId[i]).style.color = 'rgba(0,0,0,0.75)';
        } else {
            document.getElementById(elemId[i]).style.color = 'rgba(255,255,255,0.75)';
        }
    }
}