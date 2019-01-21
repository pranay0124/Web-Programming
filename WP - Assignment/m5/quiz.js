var dict = [{
		"question" : "Question 1",
		"correct_answer" : true,
		"hints" : ["hint1","hint2"]
	},
	{
		"question" : "Question 2",
		"correct_answer" : false,
		"hints" : ["hint1","hint2"]
	},
	{
		"question" : "Question 3",
		"correct_answer" : true,
		"hints" : ["hint1","hint2"]
	},
	{
		"question" : "Question 4",
		"correct_answer" : false,
		"hints" : ["hint1","hint2"]
	},
	{
		"question" : "Question 5",
		"correct_answer" : true,
		"hints" : ["hint1","hint2"]
	},
];

load();
function load(index){
	for (var i = dict.length-1; i >= 0; i--) {
		document.getElementById("question_background").insertAdjacentHTML('afterend', '<div id="question_jumbotron' + i + '" class="jumbotron" style="border:2px solid #a1bed8;"></div>');
		document.getElementById("question_jumbotron" + i).insertAdjacentHTML('afterbegin', '<h4 id="question' + i + '"> Q) ' + dict[i].question + '</h4>');

		var hint_button = '<p>\
			<button id="hint_true_but'+i+'" class="btn btn-primary" type="button" data-toggle="collapse" data-target="#multiCollapseExample1'+i+'" aria-expanded="false" aria-controls="multiCollapseExample1'+i+'">Hint 1</button>\
		    <button id="hint_false_but'+i+'" class="btn btn-primary" type="button" data-toggle="collapse" data-target="#multiCollapseExample2'+i+'" aria-expanded="false" aria-controls="multiCollapseExample2'+i+'">Hint 2</button>\
		    </p>\
			<div class="row">\
			    <div class="col">\
			    	<div class="collapse" id="multiCollapseExample1'+i+'">\
			      		<div class = "row hintmargin">\
			        		<span>'+dict[i].hints[0]+'</span>\
			      		</div>\
		    		</div>\
			  	</div>\
			  	<div class="col">\
			    	<div class="collapse" id="multiCollapseExample2'+i+'">\
			      		<div class="row hintmargin">\
			        		<span>'+dict[i].hints[1]+'</span>\
			      		</div>\
			    	</div>\
			  	</div>\
			</div>'

		document.getElementById("question" + i).insertAdjacentHTML('afterend',hint_button);

		document.getElementById('multiCollapseExample1'+i).insertAdjacentHTML('afterend','<div id="true'+i+'" class="radio"><input id="t'+i+'" type="radio" name="option_radio" value="true" onclick="validation(this)"> TRUE </input></div>');
		document.getElementById('true'+i).insertAdjacentHTML('afterend','<div id="false'+i+'" class="radio"><input id="f'+i+'" type="radio" name="option_radio" value="false" onclick="validation(this)"> FALSE </input></div>');
		document.getElementById('false'+i).insertAdjacentHTML('afterend','<div id="right_alert'+i+'" class="alert alert-success" style="display:none;"> Correct Answer! </div>');
		document.getElementById('false'+i).insertAdjacentHTML('afterend','<div id="wrong_alert'+i+'" class="alert alert-danger" style="display:none;"> Incorrect Answer! </div>');
	}
}

function validation(radio) {
	var tokens = radio.id.split("");
	if(tokens[0] == 't') {
		var answer = true;
	} else {
		var answer = false;
	}

	if(answer == dict[tokens[1]].correct_answer) {
		document.getElementById('right_alert'+tokens[1]).style.display="block";
		document.getElementById('f'+tokens[1]).disabled=true;
		document.getElementById('t'+tokens[1]).disabled=true;
		document.getElementById('hint_true_but'+tokens[1]).disabled=true;
		document.getElementById('hint_false_but'+tokens[1]).disabled=true;
	} else {
		document.getElementById('wrong_alert'+tokens[1]).style.display="block";
		document.getElementById('f'+tokens[1]).disabled=true;
		document.getElementById('t'+tokens[1]).disabled=true;
		document.getElementById('hint_true_but'+tokens[1]).disabled=true;
		document.getElementById('hint_false_but'+tokens[1]).disabled=true;
	}
}