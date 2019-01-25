var comments_array = [];
function fun(){
	var admin_key = "123";
	var name_value = document.getElementById('name_data').value;
	var comment_value = document.getElementById('comment_data').value;
	var key_value = document.getElementById('key_data').value;

	var obj = new Object();
	obj.personName = name_value;
	obj.personcomment = comment_value;

	if(admin_key === key_value) {
		if(name_value == "") {
			alert("please fill the name");
			return false;
		}
		if(comment_value == "") {
			alert("please fill the comment box");
			return false;
		}
		comments_array.push(obj.personName);
		comments_array.push(obj.personcomment);
		document.getElementById('comments').insertAdjacentHTML('afterend','<div id="comment_alert" class="alert alert-info alert-dismissable" style="display:block;"><h3>Comment : '+obj.personcomment+'</h3> <br> <h5>By : '+obj.personName+'</h5></div>');
		document.getElementById('form_data').reset()
	} else {
		document.getElementById('key_data').insertAdjacentHTML('afterend','<div id="wrong_alert" class="alert alert-danger alert-dismissable" style="display:block;"> Incorrect Password! </div>');
	}
}


