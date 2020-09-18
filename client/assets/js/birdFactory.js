
//Random color
function getColor() {
    var randomColor = Math.floor(Math.random() * 16777215).toString(16);
    return randomColor
}

function genColors(){
    var colors = []
    for(var i = 10; i < 99; i ++){
      var color = getColor()
      colors[i] = color
    }
    return colors
}

function headColor(color,code) {
    $('.bird').css('background', '#' + color)  //This changes the color of the bird
    $('#headCode').html('code: '+ code) //This updates text of the badge next to the slider
    $('#dnabody').html(code) //This updates the body color part of the DNA that is displayed below the bird
}

function bellyColor(color,code) {
    $('.belly').css('background', '#' + color)  //This changes the color of the bird
    $('#bellyCode').html('code: '+ code) //This updates text of the badge next to the slider
    $('#dnabelly').html(code) //This updates the bellycolor part of the DNA that is displayed below the bird
}

function eyesColor(color,code) {
    $('.left-eye, .right-eye').css('background', '#' + color)  //This changes the color of the bird
    $('#eyesCode').html('code: '+ code) //This updates text of the badge next to the slider
    $('#dnaeyes').html(code) //This updates the eyescolor part of the DNA that is displayed below the bird
}

function feetColor(color,code) {
    $('.right-foot, .left-foot').css('border-bottom-color', '#' + color)  //This changes the color of the bird
    $('#feetCode').html('code: '+ code) //This updates text of the badge next to the slider
    $('#dnafeet').html(code) //This updates the feetcolor part of the DNA that is displayed below the bird
}

function eyesShape(num) {
    $('#dnashape').html(num)
// switch is like a simple if-statement    
    switch (num) {
        case 1:
            normalEyes()
            $('#eyesShape').html('Basic')
            break
        case 2:
            normalEyes()
            $('#eyesShape').html('Square')
            eyeType1()
            break
        default:
            console.log("not in the range")
            break
    }
}

function hairShape(num) {
    $('#dnadecoration').html(num)
    switch (num) {
        case 1:
            $('#hairvariationCode').html('Basic')
            normaldecoration()
            break
        case 2:
            normaldecoration()
            $('#hairvariationCode').html('Individual')
            hairType1()
            break
        default:
            console.log("not in the range")
            break
    }
}

async function normalEyes() {
    await $('.left-eye, .right-eye').find('span').css('border-radius', '50%')   // take left-eye element and find all of the span within that element
}

async function eyeType1() {
    await $('.left-eye, .right-eye').find('span').css('border-radius', '0%')
}

async function normaldecoration() {
    //Remove all style from other decorations
    //In this way we can also use normalDecoration() to reset the decoration style
    $('.hair-left').css({ "top": "0px", "right": "95px", "background": "#fdbd2c", "width": "80px", "height": "20px", "transform": "rotate(165deg)", "border-bottom-right-radius": "30px" })
    $('.hair-middle').css({ "top": "1px", "right": "73px", "background": "#fdbd2c", "width": "41px", "height": "34px", "transform": "rotate(120deg)", "border-bottom-right-radius": "30px" })
    $('.hair-right').css({ "top": "1px", "right": "22px", "background": "#fdbd2c", "width": "80px", "height": "20px", "transform": "rotate(15deg)", "border-bottom-right-radius": "30px" })
}

async function hairType1() {
    //Remove all style from other decorations
    //In this way we can also use normalDecoration() to reset the decoration style
    $('.hair-left').css({ "transform": "rotate(0deg)", "height": "48px", "width": "14px", "top": "1px", "border-radius": "0 0 50% 50%" })
    $('.hair-middle').css({ "transform": "rotate(0deg)", "height": "35px", "width": "14px", "top": "1px", "border-radius": "50% 0 50% 50%" })
    $('.hair-right').css({ "transform": "rotate(0deg)", "height": "35px", "width": "14px", "top": "5px", "right": "53px", "border-radius": "0 50% 50% 50%" })
}
