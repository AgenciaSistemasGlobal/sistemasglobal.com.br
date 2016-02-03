$(document).ready(function(){		

	$.smoothScroll();	

	$('.bgParallax').each(function(){
		var $obj = $(this);
		var speed = $obj.data('speed');
	 
		$(window).scroll(function() {
			var yPos = -($(window).scrollTop() / speed);			
	 
			var bgpos = '60% '+ yPos + 'px';
	 
			$obj.css('background-position', bgpos);			
		}); 
	});	

	$(window).scroll(function() {
        var yPos = -$(window).scrollTop(); 
        var zPos = $(window).scrollTop(); 
 
        if(yPos < -0){
        	
        	$('#menu').addClass('activeTopo');        	
        	$('#toTop').addClass('activeToTop');
        }else{
        	
        	$('#menu').removeClass('activeTopo');        	
        	$('#toTop').removeClass('activeToTop');

        	$('._globalGir').removeClass('giraGlobo');

        	$('#tresTextos').css('opacity', '0');
        	$('.sl1').removeClass('fade-in').removeClass('one');
        	$('.sl2').removeClass('fade-in').removeClass('two');
        	$('.sl3').removeClass('fade-in').removeClass('three');

        	$('.contador').each(function(){ $(this).removeClass('contadorZito'); });
        }
        
        if(zPos > 799){
        	//disparar ação que vai rodar a imagem
        	//e ao rodar vai espalhar um texto de cada vez(um texto a cada rodada)
        	//giraGlobo();
        	$('._globalGir').addClass('giraGlobo');
        	$('#tresTextos').css('opacity', '1');
        	$('.sl1').addClass('fade-in').addClass('one');
        	$('.sl2').addClass('fade-in').addClass('two');
        	$('.sl3').addClass('fade-in').addClass('three');
        }
        
        if(zPos > 2149){
        	contadeProgressiva();	        	
        	$('.contador').each(function(){ $(this).addClass('contadorZito'); });
        }
    });
});

function contadeProgressiva(){		
	
	$('.contador').each(function(){
		var time =$(this).data('time');
		var el   =$(this).data('elemento');
		var cont =0;

		if(!$(this).hasClass('contadorZito')){				
			var contador = setInterval(function(){ 
				cont++;
				if(cont == time){
					clearInterval(contador);
				}

				document.getElementById(el).innerHTML = cont;
			}, 50);
		}
	});
}