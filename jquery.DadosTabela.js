$.fn.DadosTabela = function(){
  var tabela = this.find('tbody tr').map(function(){
    return [
      $('td',this).map(function(){
        return $(this).text();
      }).get()
    ];
  }).get();
  return tabela;
}