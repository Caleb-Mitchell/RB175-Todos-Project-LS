console.log("this is a test.");

$(function() {
  $('form.delete').submit(function(event) {
    event.preventDefault();
    event.stopPropagation();
    
    var ok = confirm("Are you sure? This cannot be undone!");
    if (ok) {
      /* this.submit(); */

      var form = $(this);

      var request = $.ajax({
        url: form.attr("action"),
        method: form.attr("method")
      });

      request.done(function(data, textStatus, jqHXR) {
        form.parent("li").remove()   
      });

    }
  });
});
