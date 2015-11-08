var myDataRef = new Firebase('https://FortNight.firebaseio.com/');

//Login and Register
function register(){
    var usersRef = ref.child("users");
    emailaddress =$('#emailaddress').val();
    password = $('#password').val();
    ref.createUser({
        email    : emailaddress,
        password : password
        }, function(error, userData) {
            if (error) {
                console.log("Error creating user:", error);
            } else {
                console.log("Successfully created user account with uid:", userData.uid);
            }
        });
}
function loginlol(){
    var usersRef = ref.child("users");
    emailaddress =$('#emailaddress').val();
    password = $('#password').val();
    ref.authWithPassword({
        email    : emailaddress,
        password : password
        }, function(error, authData) {
            if (error) {
                console.log("Login Failed!", error);
            } else {
                console.log("Authenticated successfully with payload:", authData);
            }
        });
    window.location.replace("calendar.html");
}
function authDataCallback(authData) {
  if (authData) {
    console.log("User " + authData.uid + " is logged in with " + authData.provider);
  } else {
    console.log("User is logged out");
  }
}

// Register the callback to be fired every time auth state changes
var ref = new Firebase("https://fortnight.firebaseio.com/");
ref.onAuth(authDataCallback);

function logout() {
    ref.unauth();
}

$('#loginwithfacebook').click(function() {
    myDataRef.authWithOAuthRedirect("facebook", function(error) {
        if (error) {
            console.log("Login Failed!", error);
        } else {
            // We'll never get here, as the page will redirect on success.
        }
    });
});


//Save objects
function saveEvent(uid) {

}
alert("hello");
