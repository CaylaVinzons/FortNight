var myDataRef = new Firebase('https://FortNight.firebaseio.com/');
$('#createaccount').click(function() {
    myDataRef.createUser({
        email : ("#emailaddress"),
        password : ('#password')
    }, function(error, userData) {
        if(error) {
            console.log("Error creating user:" , error);
        } else {
            console.log("Successfully created user account with uid:", userData.uid);
        }
    });
});
alert("hello");