$(function(){
  $('#myModal').on('shown.bs.modal', function(){
    $('#novoValor').val("");
    $('#novoValor').focus();
  });
  $("#btnAtualizarValor").click(function(){
      $("#id_price").val($("#novoValor").val());
  });
});
