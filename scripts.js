function submitemail () {
    var emailAddress = $('input[name="user-email"]').val();
    var nameField = $('input[name="user-name"]').val();
window.location.href = "mailto:maureen.business@gmail.com?body=name:+nameField+%20Email:%20emailAddress";
  };