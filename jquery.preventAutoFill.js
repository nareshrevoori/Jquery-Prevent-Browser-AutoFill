(function($){
	
	var sTime = new Date().getTime();
	
	$(function(){
		
		return $('form').each(function(i, frm){
			var inputs = $(frm +':input');
			$.each(inputs, function(){
				if($(this).attr('type') == 'text')
					$(this).attr('name', $(this).attr('name') + "_" + sTime);
			});

			$(frm).bind('submit', function(){
				var inputs = $(frm +':input');
				$.each(inputs, function(){
					if($(this).attr('type') == 'text')
						$(this).attr('name', $(this).attr('name').replace('_'+sTime, ''));
				});	
			})
		})
	})

})(jQuery);