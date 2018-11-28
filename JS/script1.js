$(document).ready(function(){

$('.amh').hover(
    function(){
 
    $(this).fadeOut(500);
    },
    function(){
      $(this).fadeIn(500);  

    }
);

$('.intrest').hover(
  function(){

  $(this).fadeTo(500,1.0);
  },
  function(){
    $(this).fadeTo(500,0.4 ) ;
 }

);
$('.intr').hide(100);



$('.intrest').click(
  function(){
    $('.intr').show(100);
    $(this).css('background-color','red')
  }
  
)

$('.img02').hover(
  function(){
    $('.img02info').fadeTo(300,0.7);

  },
  function(){
    $('.img02info').fadeTo(300,0.0);

  }
  )
  $('.img14').hover(
    function(){
      $('.img14info').fadeTo(300,0.7);
  
    },
    function(){
      $('.img14info').fadeTo(300,0.0);
  
    }
    )
    $('.img21').hover(
      function(){
        $('.img21info').fadeTo(300,0.7);
    
      },
      function(){
        $('.img21info').fadeTo(300,0.0);
    
      }
      )
      $('.img04').hover(
        function(){
          $('.img04info').fadeTo(300,0.7);
      
        },
        function(){
          $('.img04info').fadeTo(300,0.0);
      
        }
        )
        $('.img13').hover(
          function(){
            $('.img13info').fadeTo(300,0.7);
        
          },
          function(){
            $('.img13info').fadeTo(300,0.0);
        
          }
          )
          $('.img24').hover(
            function(){
             $('.img24info').fadeTo(300,0.7);
          
          },
           function(){
             $('.img24info').fadeTo(300,0.0);
         
          }
          )
            








});