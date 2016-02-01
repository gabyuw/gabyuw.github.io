$(document).ready(function () {
  $('[data-toggle=offcanvas]').click(function () {
    $('.row-offcanvas').toggleClass('active')
  });

  resizeRows();


  $(window).resize(resizeRows);



	function resizeRows() {
		var i=0,j=0;
		$(".col-6").each(function(){
			$(this).css('height', 'auto');
		});
		$(".col-6").each(function(){
		    j=$(this).height();
		    if (i<j)
		        i=j;
		});
		$(".col-6").each(function(){
		    $(this).height(i);//set Max height of div to other divs
		});

	}

});

