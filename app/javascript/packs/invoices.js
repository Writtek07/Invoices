$(document).ready(function(){

  $('#addrow').click(function(){
    $('.item-row:last').after('<tr class="item-row"><td><input class="form-control item_desc"/></td><td><input class="form-control cost" placeholder="00.00" /></td><td class="delete_td"><a class="delete" href="javascript:;" title="Remove row">Remove <span class="ti-trash"></span></a></td></tr>');
    if ($('.delete').length > 0) $('.delete').show();
  });

  $('body').on('click','.delete',function(){
    $(this).parents('.item-row').remove();

    if ($('.delete').length < 2) $('.delete').hide();
  });
});