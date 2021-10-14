$(document).ready(function(){

  $('#addrow').click(function(){
    $('.item-row:last').after('<tr class="item-row"><td><input class="form-control item_desc"/></td><td><input class="form-control item_desc"/></td></tr>');
    if ($('.delete').length > 0) $('.delete').show();
  });

  $('body').on('click','.delete',function(){
    &(this).parents.('.item-row').remove();

    if ($('.delete').length < 2) $('.delete').hide();
  });
});