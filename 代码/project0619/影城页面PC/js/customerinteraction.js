$('.problem_plate .problem_plate_box').css('display','none')
$('.problem_plate .one').css('display','block')
$('.pagination #one').css({
  'background-color':'#e80023',
  'color':'#ffffff'
})
$('.pagination li').click(function() {
  let $li = $('.pagination li');
  $li.each(function(index,elem){
    $(elem).css({
      'color':'#666666',
      'background-color':'#ffffff'
    })
  })
  $(this).css({
    'background-color':'#e80023',
    'color':'#ffffff'
  })
  if($(this).text() == 1){
    $('.problem_plate .problem_plate_box').css('display','none')
    $('.problem_plate .one').css('display','block')
    // console.log($('.problem_plate .one'));
  }else if($(this).text() == 2){
    $('.problem_plate .problem_plate_box').css('display','none')
    $('.problem_plate .two').css('display','block')
  }else if($(this).text() == 3){
    $('.problem_plate .problem_plate_box').css('display','none')
    $('.problem_plate .three').css('display','block')
  }else if($(this).text() == 4){
    $('.problem_plate .problem_plate_box').css('display','none')
    $('.problem_plate .four').css('display','block')
  }else if($('#previous_page')){
    console.log($(this));
  }else if($('#next_page')){
    console.log($(this));
  }
})