 $.ajax({
    url: "https://n0bgt5k411h.firebaseio-demo.com/",
    success: function(resp, textStatus, jqxhr){
        console.log("success");
}
});
    function action(){
        $.ajax({
    url: "https://n0bgt5k411h.firebaseio-demo.com/",
    success: function (resp, textStatus, jqxhr){
    console.log("success");
}
});
}
            
    var ref = new Firebase("https://n0bgt5k411h.firebaseio-demo.com");
ref.createUser({
  email    : "aaa@gmail.com",
  password : "abc123",
}, function(error, userData) {
  if (error) {
    console.log("Error creating user:", error);
  } else {
    console.log("Successfully created user account with uid:", userData.uid);
  }
});

    var ref = new Firebase("https://n0bgt5k411h.firebaseio-demo.com");
ref.authWithPassword({
  email    : "aaa@gmail.com",
  password : "abc123",
}, function(error, authData) {
  if (error) {
    console.log("Login Failed!", error);
  } else {
    console.log("Authenticated successfully with payload:", authData);
  }
});