// Check if the fields are empty or not.

function isEmpty() {
  if (document.querySelector("fieldinfo").value == "") {
    alert("Please fill all fields!");
  } else {
    document.getElementById("submit").submit();
    alert("Contact information Successful!");
  }
}
