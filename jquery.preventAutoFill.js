(function($){
	
	var sTime = new Date().getTime();
	
	$(function(){
		
		return $('form').each(function(i, frm){
			
			var inputs = $(frm +':input[type=text]');
			$.each(inputs, function(){
				var $self = $(this);
				$self.attr('name', $self.attr('name') + "_" + sTime);
			});

			$(frm).bind('submit', function(){
				var inputs = $(frm +':input[type=text]');
				$.each(inputs, function(){
					var $self = $(this);
					$self.attr('name', $self.attr('name').replace('_'+sTime, ''));
				});	
			})
		})
	})

})(jQuery);