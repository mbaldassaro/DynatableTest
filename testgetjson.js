$.ajax({
    ajaxUrl:'testjson.json',
    type: 'json',
    ajax: true,
    success: function(data){
        alert('a sphincter clicks ok');
            alert('sphincter...');
    $('#my-ajax-table').dynatable({
    dataset: {
    records: data
      }
    });
  }
});

