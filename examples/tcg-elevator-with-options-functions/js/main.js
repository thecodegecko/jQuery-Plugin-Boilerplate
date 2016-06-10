$(document).ready(function(){
	$('.elevator').tcgElevator({
		toggleSelector: '.panel-heading',
		contentSelector: '.panel-body'
	});
	$('.elevator .panel-heading').click(function(e){
		var el = $(this).closest('.elevator');
		if(el.hasClass('open'))
		{
			el.tcgElevator('close');
			el.removeClass('open');
		}
		else
		{
			el.tcgElevator('open');
			el.addClass('open');
		}
	})
})
