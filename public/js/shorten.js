

$('.btn-shorten').on('click', function(){

	$.ajax({
		url: '/api/shorten',
		type: 'POST',
		dataType: 'JSON',
		data: {
			url: $('#url-field').val()
		},
		success: function(data){
			console.log('dddd ', data)
			var resultHTML = '<a class="result" href="'+data.shortURL+'">' + data.shortURL+ '</a>';
			$('#link').html(resultHTML);
			$('#link').hide().fadeIn('slow'); 

		}

	});

});