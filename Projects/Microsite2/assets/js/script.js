$('document').ready(function(){





$('.s1crop').hover(function() {
$('.s1full').show();
$('.s1full').css("display", "inline");
$('.container').css("opacity", "0")
}, function() {
$('.s1full').hide();
$('.container').css("opacity", "1")
});

$('.i1crop').hover(function() {
$('.i1full').show();
$('.i1full').css("display", "inline");
$('.container').css("opacity", "0")
}, function() {
$('.i1full').hide();
$('.container').css("opacity", "1")
});

$('.s2crop').hover(function() {
$('.s2full').show();
$('.s2full').css("display", "inline");
$('.container').css("opacity", "0")
}, function() {
$('.s2full').hide();
$('.container').css("opacity", "1")
});

$('.tercrop').hover(function() {
$('.terfull').show();
$('.terfull').css("display", "inline");
$('.container').css("opacity", "0")
}, function() {
$('.terfull').hide();
$('.container').css("opacity", "1")
});


$('.c1crop').hover(function() {
$('.c1full').show();
$('.c1full').css("display", "inline");
$('.container').css("opacity", "0")
}, function() {
$('.c1full').hide();
$('.container').css("opacity", "1")
});

$('.orcrop').hover(function() {
$('.orfull').show();
$('.orfull').css("display", "inline");
$('.container').css("opacity", "0")
}, function() {
$('.orfull').hide();
$('.container').css("opacity", "1")
});

$('.i2crop').hover(function() {
$('.i2full').show();
$('.i2full').css("display", "inline");
$('.container').css("opacity", "0")
}, function() {
$('.i2full').hide();
$('.container').css("opacity", "1")
});


$('.t1crop').hover(function() {
$('.t1full').show();
$('.t1full').css("display", "inline");
$('.container').css("opacity", "0")
}, function() {
$('.t1full').hide();
$('.container').css("opacity", "1")
});

$('.a1crop').hover(function() {
$('.a1full').show();
$('.a1full').css("display", "inline");
$('.container').css("opacity", "0")
}, function() {
$('.a1full').hide();
$('.container').css("opacity", "1")
});

$('.k1crop').hover(function() {
$('.k1full').show();
$('.k1full').css("display", "inline");
$('.container').css("opacity", "0")
}, function() {
$('.k1full').hide();
$('.container').css("opacity", "1")
});



$('button').on('click', function(){
$('#slider').toggleClass('open');

})


});