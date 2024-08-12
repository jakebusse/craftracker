const dmcnums = ["1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24","25","26","27","28","29","30","31","32","33","34","35","150","151","152","153","154","155","156","157","158","159","160","161","162","163","164","165","166","167","168","169","208","209","210","211","221","223","224","225","300","301","304","307","309","310","311","312","315","316","317","318","319","320","321","322","326","327","333","334","335","336","340","341","347","349","350","351","352","353","355","356","367","368","369","370","371","372","400","402","407","413","414","415","420","422","433","434","435","436","437","444","445","451","452","453","469","470","471","472","498","500","501","502","503","504","505","517","518","519","520","522","523","524","535","543","550","552","553","554","561","562","563","564","580","581","597","598","600","601","602","603","604","605","606","608","610","611","612","613","632","640","642","644","645","646","647","648","666","676","677","680","699","700","701","702","703","704","712","718","720","721","722","725","726","727","728","729","730","731","732","733","734","738","739","740","741","742","743","744","745","746","747","754","758","760","761","762","772","775","776","777","778","779","780","781","782","783","791","792","793","794","796","797","798","799","800","801","803","806","807","809","813","814","815","816","817","818","819","820","822","823","824","825","826","827","828","829","830","831","832","833","834","838","839","840","841","842","844","869","890","891","892","893","894","895","898","899","900","902","904","905","906","907","909","910","911","912","913","915","917","918","919","920","921","922","924","926","927","928","930","931","932","934","935","936","937","938","939","943","945","946","947","948","950","951","954","955","956","957","958","959","961","962","963","964","966","967","970","971","972","973","975","976","977","986","987","988","989","991","992","993","995","996","3011","3012","3013","3021","3022","3023","3024","3031","3032","3033","3041","3042","3045","3046","3047","3051","3052","3053","3064","3072","3078","3325","3326","3328","3340","3341","3345","3346","3347","3348","3350","3354","3362","3363","3364","3371","3607","3608","3609","3685","3687","3688","3689","3705","3706","3708","3712","3713","3716","3721","3722","3726","3727","3731","3733","3740","3743","3746","3747","3750","3752","3753","3755","3756","3760","3761","3765","3766","3768","3770","3771","3772","3773","3774","3776","3777","3778","3779","3781","3782","3787","3790","3799","3801","3802","3803","3804","3805","3806","3807","3808","3809","3810","3811","3812","3813","3814","3815","3816","3817","3818","3819","3820","3821","3822","3823","3824","3825","3826","3827","3828","3829","3830","3831","3832","3833","3834","3835","3836","3837","3838","3839","3840","3841","3842","3843","3844","3845","3846","3847","3848","3849","3850","3851","3852","3853","3854","3855","3856","3857","3858","3859","3860","3861","3862","3863","3864","3865","3866","ecru","blanc","b5200","white"];

// Declare a global variable to hold the parsed JSON data
var colors;

// Function to load JSON synchronously
function loadJSON(filePath) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', filePath, false); // false makes it synchronous
    xhr.send(null);

    if (xhr.status === 200) {
        return JSON.parse(xhr.responseText);
    } else {
        console.error('Error loading JSON file:', xhr.statusText);
        return null;
    }
}

// Load the JSON data and store it in the global variable
let count = 0;
for(let i = 0; i < window.location.pathname.length; i++) {
    if(window.location.pathname[i] == '/') {
        count += 1;
    }
}

let fp;
if(count <= 1) {
    fp = './'
} else {
    fp = '../'.repeat(count-1);
}

colors = loadJSON(fp + 'lib/js/dmc_colors.json');

function getRandomColor() {
    let randnum = dmcnums[Math.floor(Math.random() * dmcnums.length)];
    return colors[randnum];
}

function getTextColor(color, opacity) {
    const brightness = (0.2126 * color.red) + (0.7152 * color.green) + (0.0722 * color.blue);
    if(brightness >= 200) {
        return 'rgba(0,0,0,' + opacity + ')';
    } else {
        return 'rgba(255,255,255,' + opacity + ')';
    }
}

function setAccentColor(elemIds, sessionColor) {
    let color;
    if(sessionColor > 0) {
        color = colors[sessionColor];
    } else {
        color = getRandomColor();
    }
    // const bgc = color.hex;
    // const tc = getTextColor(color, 0.75);
    // for(let i = 0; i < elemIds.length; i++) {
    //     document.getElementById(elemIds[i]).style.backgroundColor = bgc;
    //     document.getElementById(elemIds[i]).style.color = tc;
    // }
    // setActiveColor(bgc, tc);
    setCssColors(color);
}

function setActiveColor(tc, bgc) {
    console.log(document.getElementsByClassName('active').innerText);
    document.getElementById('active').style.backgroundColor = bgc;
    document.getElementById('active').style.color = tc;
}

function setRanAuthBg() {
    const color = getRandomColor();
    document.body.style.backgroundColor = color.hex;
    document.getElementById('dmc').style.color = getTextColor(color, 0.5);
    const string = "DMC " + color.number + " - " + color.name;
    document.getElementById('dmc').innerText = string;
}

function setRanElemBg(elemId) {
    const color = getRandomColor();
    document.getElementById(elemId).style.backgroundColor = color.hex;
    document.getElementById(elemId).style.color = getTextColor(color, 0.75);
}

function setElemBg(elemId, color) {
    const dmcColor = colors[color];
    document.getElementById(elemId).style.backgroundColor = dmcColor.hex;
    document.getElementById(elemId).style.color = getTextColor(dmcColor, 0.75);
}

function validateDmcColor(colorNum) {
    if(colors[colorNum]) {
        return true;
    } else {
        return false;
    }
}

function setCssColors(color) {
    var r = document.querySelector(':root');
    r.style.setProperty('--session-color', color.hex);
    let text = getTextColor(color);
    console.log(text);
    if(text[5] == '0') {
        console.log(text[5]);
        r.style.setProperty('--text-color', '0,0,0');
    } else {
        console.log(text[5]);
        r.style.setProperty('--text-color', '255,255,255');
    }
}