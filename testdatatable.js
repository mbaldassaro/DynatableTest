$(document).ready(function() {
    alert('wired and ready'); 
    $.ajax({
      url: "dummy.json",
        dataType: "json"
    }).done(function(data) {
      var oTable = $('#my-table').dataTable( {
        "aaData": data,
        "aoColumns": [
           
            { "mData": "year" },
            { "mData": "constituency number" },
            { "mData": "district" },
            { "mData": "registered voters" },
            { "mData": "valid votes" },
            { "mData": "voter turnout percentage" },
            { "mData": "four party alliance" },
            { "mData": "four party alliance percentage" },
            { "mData": "awami league" },
            { "mData": "awami league percentage" },
            { "mData": "jatiya party" },
            { "mData": "jatiya party percentage" },
            { "mData": "others" },
            { "mData": "others percentage" },
            { "mData": "winner" }
            /*
            { "mData": "band"},
            { "mData": "song"}
            */
        ]
    } );
    });
    
} );


