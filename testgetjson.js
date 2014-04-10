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
      url: "Bangla2001ParlResults.json"
    }).done(function(data) {
      var oTable = $('#my-table').dataTable( {
        
        "aaData": data,
        "aoColumns": [
            { "mData": "year" },
            { "mData": "constituency Number" },
            { "mData": "district" },
            { "mData": "registered Voters" },
            { "mData": "valid Votes" },
            { "mData": "voter Turnout Percentage" },
            { "mData": "four Party Alliance Votes" },
            { "mData": "four Party Alliance Percentage" },
            { "mData": "awami League" },
            { "mData": "awami Leage Percentage" },
            { "mData": "jatiya Party" },
            { "mData": "jatiya Party Percentage" },
            { "mData": "others" },
            { "mData": "others Percentage" },
            { "mData": "winner" }
   
        ]
    } );
    });
    
} );