$(document).ready(function() {
  $('.score').each(function() {
    value = $(this).html();
    console.log(value);
    value = value/10000000000000;
    // if(value.length > 13) {
    //   value = value.substring(0,16);
    // }
    if(value>99) {
      value = value/10;
    }
    console.log(value);
    $(this).html(value);
  });
});

$('.smackDat').click(function(e) {
  console.log("hit a button");
  username = e.target.id;
  console.log(username);
  $.ajax({
    url: '/ajax/ajax_like',
    data: {
      'username': username
    },
    dataType: 'json',
    success: function (data) {
      console.log("success")
    }
  })
});

$('.noThanks').click(function(e) {
  console.log("hit a button");
  username = e.target.id;
  console.log(username);
  $.ajax({
    url: '/ajax/ajax_dislike',
    data: {
      'username': username
    },
    dataType: 'json',
    success: function (data) {
      console.log("success")
    }
  })
});
