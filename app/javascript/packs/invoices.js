function update_subtotal() {
  var subtotal = 0;
  $('.price').each(function(i) {
    var price = $(this).html();
    if (!isNaN(price)) subtotal += Number(price)
  });
  
  subtotal = subtotal.toFixed(2);
  $('#subtotal').html(subtotal);

  update_balance();
}

function update_balance() {
  var  total = Number($('#subtotal').html()) + Number($('#9').val());
  total = total.toFixed(2);

  $('.due').html(total);
}

function update_price() {
  var row = $(this).parents('.item-row');
  var price = row.find('.cost').val();
  price = Number(price).toFixed(2);
  isNaN(price) ? row.find('.price').html('NaN') : row.find('.price').html(price);
  update_subtotal();
}

function bind1() {
  $('.cost').blur(update_price);
}

$(document).ready(function(){

  $('input').click(function() {
    $(this).select();
  })

  $('#9').blur(update_balance);

  $('#addrow').click(function(){
    $('.item-row:last').after('<tr class="item-row"><td><input class="form-control item_desc"/></td><td><input class="form-control cost" placeholder="00.00" /></td><td class="price_td" style="visibility: collapse;"><span class="price">650.00</span><span class="subtotal_currency"></span></td><td class="delete_td"><a class="delete" href="javascript:;" title="Remove row">Remove <span class="ti-trash"></span></a></td></tr>');
    if ($('.delete').length > 0) $('.delete').show();
    bind1();
  });
  bind1();

  $('body').on('click','.delete',function(){
    $(this).parents('.item-row').remove();
    update_subtotal();
    if ($('.delete').length < 2) $('.delete').hide();
  });

  $('body').on('click', '#submit_invoice', function(){
      var e = $('#invoice_total').text();
      $('#invoice_total1').empty();
      $('#invoice_total1').val(Number(e));

    });
});