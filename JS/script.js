$(document).ready(function(){
$('.aboutme').hover(
    function(){
    $(this).css('color','#19fbff').css('border','2px solid #19fbff');
     $(this).fadeOut(500);
},
    function(){
        
        $(this).fadeIn(500);$(this).css('color','antiquewhite').css('border','1px solid antiquewhite');
    }
);


$('.exp').hover(
    function(){
    $(this).css('color','#f92f94').css('border','2px solid #f92f94');
    $(this).fadeOut(500);
    },
    function(){
       $(this).fadeIn(500); $(this).css('color','antiquewhite').css('border','1px solid antiquewhite');
    }
);


$('.works').hover(
    function(){
    $(this).css('color','#fff605').css('border','2px solid #fff605');
    $(this).fadeOut(500);
    },
    function(){
       $(this).fadeIn(500); $(this).css('color','antiquewhite').css('border','1px solid antiquewhite');
    }
);

$('.skill').hover(
    function(){
    $(this).css('color','#00ff37').css('border','2px solid #00ff37');
    $(this).fadeOut(500);
    },
    function(){
        $(this).fadeIn(500);$(this).css('color','antiquewhite').css('border','1px solid antiquewhite');
    }
);

$('.FBicon').hover(
    function(){
    $(this).css('width','72px').css('height','72px');
    $(this).fadeOut(500);
    },
    function(){
      $(this).fadeIn(500);  $(this).css('width','70px').css('height','70px');
    }
);
$('.IGicon').hover(
    function(){
    $(this).css('width','72px').css('height','72px');$(this).fadeOut(500);
    },
    function(){
        $(this).css('width','70px').css('height','70px');$(this).fadeIn(500);
    }
);










});