
$('#contact-form').submit(function(e) {
  var name = document.getElementById('inputName');
   email = document.getElementById('inputEmial');
   message = document.getElementById('inputMessage');
  
  if (!name.value || !email.value || !message.value) {
    alertify.error('Please check your entries')
  } else {
    $.ajax({
      url: "http://formspree.io/obrie23e@mtholyoke.edu",
      method:"POST",
      data: $(this).serialize(),
      dataType: "json"
    });
    e.preventDefault()
    $(this).get(0).reset()
    altertify.success('Message sent')
  }
})
