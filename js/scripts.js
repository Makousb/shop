$("document").ready(function() {
  $("#blanks form").submit(function(event) {
    var nameInput = $("input#name").val();
    var itemInput = $("input#item").val();
    var emailInput= $("input#email").val();
    var telephoneInput = $("input#tele").val();
    var passwordInput = $("input#pass").val();
    var numberInput = $("input#number").val();
    var dateInput = $("input#date").val();
    var colorInput = $("input#color").val();


    $(".name").text(nameInput);
    $(".item").text(itemInput);
    $(".email").text(emailInput);
    $(".tele").text(telephoneInput);
    $(".pass").text(passwordInput);
    $(".number").text(numberInput);
    $(".date").text(dateInput);
    $(".color").text(colorInput);

    event.preventDefault();
   });
   });
