// <-- heading -->>

$(document).ready(function () {
  $('.select-heading').on('submit', function (event) {
    event.preventDefault();
    var a = $('input', this).val();
    console.log(a)
    $(".select-heading")[0].reset();
    $('main').append('<section><h1>' + a + '</h1></section>')
    $('.headingSelect option').remove()
    $('.headingSelect select').append("<option value=''selected disabled >--select--</option>")
    $('main section h1').each(function (key) {
      key = key + 1;
      var h = $(this).text()
      console.log(h)
      $('.headingSelect').append("<option value = " + key + ">" + h + " </option>")
    });
  })
});

// <--sub heading -->>

$('.select-sub-heading').on('submit', function (event) {
  event.preventDefault();
  var b = $('input', this).val();
  console.log(b)
  $(".select-sub-heading")[0].reset();
  $('main').append('<section><h3>' + b + '</h3></section>')
  $('.subheadingSelect option').remove()
  $('.subheadingSelect select').append("<option value=''selected disabled >--select--</option>")
  $('main section h3').each(function (key2) {
    key2 = key2 + 1;
    var f = $(this).text()
    console.log(f)
    $('.subheadingSelect').append("<option value = " + key2 + ">" + f + " </option>")
  });
})

// <--form -->>




