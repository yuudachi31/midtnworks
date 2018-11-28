$(document).ready(function(){

    $('.btn1').mouseenter(
        function(){
            $(this).fadeTo(300,1.0);
        }, 
    
    );

    $('.btn1').click(
        function(){
            $(this).hide(0);
            $('.exp1').fadeIn(200);
        
            $('.exp2').fadeIn(1200);
            $('.btn2').fadeIn(1800);
        });
        $('.btn2').mouseenter(
            function(){
                $(this).fadeTo(300,1.0);
            }, 
        
        );
        $('.btn2').click(
            function(){
                $(this).hide(0);
                 $('.hpsh').fadeTo(500,1.0);
            
            });
            $('.img19').hover(
                function(){
                  $('.img19info').fadeTo(300,0.7);
              
                },
                function(){
                  $('.img19info').fadeTo(300,0.0);
              
                }
                )
                $('.img25').hover(
                    function(){
                      $('.img25info').fadeTo(300,0.7);
                  
                    },
                    function(){
                      $('.img25info').fadeTo(300,0.0);
                  
                    }
                    )
    






        
});