// The anonymous function below will fire on page load

// Some things to consider
// $.ajax(); to make your requests a little easier. Or the vanilla js way, it's up to you.
// $.on(); for event handling
// Remember, selecting elements in jQuery is like selecting them in CSS
// You'll probably have to manipulate some strings
// some jQuery functions to help display results
// $.show(), $.hide(), $.slideup(), $.slidedown(), $.fadein(), $.fadeout()
// Add content from requests with something like
// $.html(), $.text(), etc.
// keyup events could be helpful to get value of field as the user types
var valueString;
var values = [];
var that = this;
var list = [];

$(".flexsearch-input").keyup(function(){
	if($(".flexsearch-input").val() == "" || $(".flexsearch-input").val() == null){
		list = [];
		$(".results").html(function(){
			return "";
		});
	}
	else{
		list = [];
		theInput = $(".flexsearch-input").val().toLowerCase();

		values.forEach(function(value){
			if(value.toLowerCase().match(theInput)){
				list.push(value);
			}
		});

		$(".results").html(function(){
			let formattedList = "";
			list.forEach(function(item){
				formattedList = formattedList + item + "<br>";
			});
			return formattedList;
		});
	}
});

(function() {
  // Magic!
  console.log('Keepin\'n it clean with an external script!');
  $.ajax({url: "http://www.mattbowytz.com/simple_api.json?data=all", success: function(result){

  	for( var prop in result.data.interests){
  		values.push(result.data.interests[prop]);
  	}

  	for(var prop in result.data.programming){
  		values.push(result.data.programming[prop]);
  	}
  }});
})();