
var colors = Object.values(allColors())

var defaultDNA = {
    "headColor" : 10,
    "bellyColor" : 23,
    "eyesColor" : 96,
    "earsColor" : 10,
    //Birdtributes
    "eyesShape" : 1,
    "decorationPattern" : 1,
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
  $('#dnaears').html(defaultDNA.earsColor);
    
//   $('#dnashape').html(defaultDNA.eyesShape)
//   $('#dnadecoration').html(defaultDNA.decorationPattern)
//   $('#dnadecorationMid').html(defaultDNA.decorationMidcolor)
//   $('#dnadecorationSides').html(defaultDNA.decorationSidescolor)
//   $('#dnaanimation').html(defaultDNA.animation)
//   $('#dnaspecial').html(defaultDNA.lastNum)

  renderBird(defaultDNA)
  renderBelly(defaultDNA)
  renderEyes(defaultDNA)
});

function getDna(){
    var dna = ''
    dna += $('#dnabody').html()
    dna += $('#dnabelly').html()
    dna += $('#dnaeyes').html()
    dna += $('#dnaears').html()
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
