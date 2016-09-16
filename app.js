$(document).ready(function() {

  var contacts = [];

  var Contact = function(firstName, lastName, street, phone, city, state) {
    this.fullName = firstName + " " + lastName;
    this.firstName = firstName;
    this.lastName = lastName;
    this.street = street;
    this.phone = phone;
    this.city = city;
    this.state = state;
  }

  $("#contactForm").submit(function(event) {
    event.preventDefault();

    var firstName = $("#firstName").val();
    var lastName = $("#lastName").val();
    var phone = $("#phone").val();
    var street = $("#street").val();
    var city = $("#city").val();
    var state = $("#state").val();

    $("#contactList").append("<a><li class='contactName text-danger'>" + 
      firstName + " " + lastName + "</li></a>");

    var newContact = new Contact(firstName, lastName, street, phone, city, state);
    contacts.push(newContact);
    resetForm();
  });

  $(document).on("click", ".contactName", function() {
    console.log(this)
    var selectedContact = findContact($(this).text());
    $("#contactDetail").empty();
    $("#contactDetail").append("<p>" + selectedContact.fullName + "</p>");
    $("#contactDetail").append("<p>" + selectedContact.city + "</p>");
    $("#contactDetail").append("<p>" + selectedContact.state + "</p>");     
  })

  function resetForm() {
    $("#firstName").val("");
    $("#lastName").val("");
    $("#phone").val("");
    $("#street").val("");
    $("#city").val("");
    $("#state").val("");
  }

  function findContact(name) {
    for (var i=0; i<contacts.length; i++) {
      if (contacts[i].fullName === name) {
        return contacts[i];
      }
    }
  }

})