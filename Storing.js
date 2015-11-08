var myDataRef = new Firebase('https://FortNight.firebaseio.com/');
//var authData = JSON.parse(sessionStorage.myObject);
yo = localStorage.getItem('firebase:session::fortnight')
var authData = JSON.parse(yo);
console.log(authData.uid);


var classRef = myDataRef.child("users").child(authData.uid).child("classes");
if(authData == null) {
	window.location.replace("home.html")
}

function saveClass(){

	var classRef = myDataRef.child("users").child(authData.uid).child("classes");
    classRef.push().set({
    	name: $('#class-name').val(),
    	starttime: $('#class-starttime').val(),
    	endtime: $('#class-endtime').val(),
    	sunday: $('#sunday1').is(':checked'),
    	monday: $('#monday1').is(':checked'),
    	tuesday: $('#tuesday1').is(':checked'),
    	wednesday: $('#wednesday1').is(':checked'),
    	thursday: $('#thursday1').is(':checked'),
    	friday: $('#friday1').is(':checked'),
    	saturday: $('#saturday1').is(':checked')
    })
    console.log($('#saturday1').val())

}
var key = [];
yolo = 0;
classRef.once('value', function(snapshot) {
	yolo = snapshot.val();
	console.log();
	snapshot.forEach(function(childSnapshot) {
		key1 = [];
		key1.push(childSnapshot.key());
		yolo = childSnapshot.val();
		key1.push(yolo.starttime)
		key1.push(yolo.endtime)
		key1.push(yolo.monday)
		key1.push(yolo.tuesday)
		key1.push(yolo.wednesday)
		key1.push(yolo.thursday)
		key1.push(yolo.friday)
		key.push(key1)
		
});
	for (i=1; i<=key.length;i++){
		
		console.log(key[i]);
	}
		
}, function (errorObject) {
	console.log("error:" + errorObject.code);
});