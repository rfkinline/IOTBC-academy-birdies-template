
var colors = Object.values(allColors())

var defaultDNA = {
    "headColor" : 10,
    "bellyColor" : 55,
    "eyesColor" : 96,
    "feetColor" : 50,
    //Birdtributes
    "eyesShape" : 1,
    "hairShape" : 1,
    "decorationMidcolor" : 33,
    "decorationSidescolor" : 13,
    "animation" :  1,
    "lastNum" :  1
    }

// when page load
$( document ).ready(function() {
  $('#dnabody').html(defaultDNA.headColor);
  $('#dnabelly').html(defaultDNA.bellyColor);
  $('#dnaeyes').html(defaultDNA.eyesColor);
  $('#dnafeet').html(defaultDNA.feetColor);
  $('#dnashape').html(defaultDNA.eyesShape)
  $('#dnadecoration').html(defaultDNA.hairShape)
  $('#dnadecorationMid').html(defaultDNA.decorationMidcolor)
  $('#dnadecorationSides').html(defaultDNA.decorationSidescolor)
  $('#dnaanimation').html(defaultDNA.animation)
  $('#dnaspecial').html(defaultDNA.lastNum)

  renderBird(defaultDNA)
  renderBelly(defaultDNA)
  renderEyes(defaultDNA)
  renderFeet(defaultDNA)
  rendereyesShape(defaultDNA)
  renderhairShape(defaultDNA)
});

function getDna(){
    var dna = ''
    dna += $('#dnabody').html()
    dna += $('#dnabelly').html()
    dna += $('#dnaeyes').html()
    dna += $('#dnafeet').html()
    dna += $('#dnashape').html()
    dna += $('#dnadecoration').html()
    dna += $('#dnadecorationMid').html()
    dna += $('#dnadecorationSides').html()
    dna += $('#dnaanimation').html()
    dna += $('#dnaspecial').html()

    return parseInt(dna)
}

function renderBird(dna){
  headColor(colors[dna.headColor],dna.headColor)
  $('#bodyColor').val(dna.headColor)
}

// Changing bird colors
$('#bodyColor').change(()=>{
  var colorVal = $('#bodyColor').val()
  headColor(colors[colorVal],colorVal)
})

function renderBelly(dna){
  bellyColor(colors[dna.bellyColor],dna.bellyColor)
  $('#bellyColor').val(dna.bellyColor)
}

// Changing belly colors
$('#bellyColor').change(()=>{
  var colorVal = $('#bellyColor').val()
  bellyColor(colors[colorVal],colorVal)
})

function renderEyes(dna){
  eyesColor(colors[dna.eyesColor],dna.eyesColor)
  $('#eyesColor').val(dna.eyesColor)
}

// Changing eyes colors
$('#eyesColor').change(()=>{
  var colorVal = $('#eyesColor').val()
  eyesColor(colors[colorVal],colorVal)
})

function renderFeet(dna){
  feetColor(colors[dna.feetColor],dna.feetColor)
  $('#feetColor').val(dna.feetColor)
}

// Changing feet colors
$('#feetColor').change(()=>{
  var colorVal = $('#feetColor').val()
  feetColor(colors[colorVal],colorVal)
})

function renderEyeshape(dna){
  eyesShape(colors[dna.eyesShape],dna.eyesShape)
  $('#eyesShape').val(dna.eyesShape)
}
$('#eyesShape').change(()=>{
  var shape = parseInt($('#eyesShape').val())
  eyesShape(shape)
})

function renderhairshape(dna){
  hairShape(colors[dna.hairShape],dna.hairShape)
  $('#hairShape').val(dna.hairShape)
}
$('#hairShape').change(()=>{
  var shape = parseInt($('#hairShape').val())
  hairShape(shape)
})