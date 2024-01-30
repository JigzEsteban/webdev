function validateForm() {
    let x = document.forms["dataform"]["First Name"].value;
    if (x == "") {
        alert("Name is Required!");
    } else {
        alert("Form submitted successfully!");
    }
}
