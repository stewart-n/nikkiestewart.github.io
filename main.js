// Check if the fields are empty or not.

function isEmpty() {
	if (document.querySelector(".text-input").value.length == 0) {
		alert("Please fill all fields!");
	} else {
		// the .submit() is causing an error,so I just removed it to make the alert work
		alert("Contact information Successful!");
	}
}
