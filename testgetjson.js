/*$.ajax({
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
*/
$(document).ready(function() {
    
    $.ajax({
        url: "./Bangla2001ParlResults.json",
         }).done(function(data) {
           // var  myRecords = JSON.parse(data);
            console.log(data);
            $('#my-table').dynatable({
      dataset: {
        records: data
     }
    }); 
        });
    
    
   
});