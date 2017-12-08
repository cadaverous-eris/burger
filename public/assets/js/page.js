$(document).on("ready", function() {
	
	$(".devour-button").on("click", function(event) {
		var id = $(this).data("id");
		
		console.log("awdawda " + id);
		
		$.ajax("/api/burgers/" + id, {
			type: "PUT",
			data: {devoured: 1},
		}).then(function() {
			location.reload();
		});
	});
	
	$("#add-burger").on("submit", function(event) {
		event.preventDefault();
	
		var burger = {
			burger_name: $("#add-burger [name=burger_name]").val().trim()
		};
	
		if (burger.burger_name.length > 0) {
			$.ajax("/api/burgers", {
				type: "POST",
				data: burger,
			}).then(function() {
				location.reload();
			});
		}
	});

});