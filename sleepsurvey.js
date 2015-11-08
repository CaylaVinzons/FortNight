var myDataRef = new Firebase('https://FortNight.firebaseio.com/');
yo = localStorage.getItem('firebase:session::fortnight')
var authData = JSON.parse(yo);

var classRef = myDataRef.child("users").child(authData.uid).child("classes");
if(authData == null) {
	window.location.replace("home.html")
}

function sleeprecord(){

	
	var classRef = myDataRef.child("users").child(authData.uid).child("sleeprecord");
	key = objectRead();
	if(key[key.length] == 'Wake-Up Time' && $('#category').val()=='Sleep')
	{
		classRef.push().set({
			time: $('#time').val(),
			category: $('#category').val()
			
		})
	}
	if(key[key.length] == 'Sleep' && $('#category').val()=='Wake-Up Time')
	{
		classRef.push().set({
    	time: $('#time').val(),
    	category: $('#category').val()
    	
    	})
	}
}
function objectRead(){
var key = [];
yolo = 0;
classRef.once('value', function(snapshot) {
	yolo = snapshot.val();
	console.log();
	snapshot.forEach(function(childSnapshot) {
		key1 = [];
		key1.push(childSnapshot.key());
		yolo = childSnapshot.val();
		key1.push(yolo.time)
		key1.push(yolo.category)
		
});
	for (i=1; i<=key.length;i++){
		
		console.log(key[i]);
	}
		
}, function (errorObject) {
	console.log("error:" + errorObject.code);
});
return key;
};