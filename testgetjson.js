/*
$(document).ready(function() {
$.ajax({
    ajaxUrl:'Bangla2001ParlResults.json',
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
*/

$(document).ready(function() {
$.ajax({
    url:'Bangla2001ParlResults.json',
    dataType: 'json',
    }).done(function(data) {
            alert('a sphincter clicks ok');
            alert('sphincter...');
           // var  myRecords = JSON.parse(data);
       console.log(data);
           $('#my-ajax-table').dynatable({
        dataset: {
        records: data
      }
     }); 
    });
});

