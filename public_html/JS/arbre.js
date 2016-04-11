$(function() {

    $(".search-input").keyup(function() {

        var searchString = $(this).val();
        console.log(searchString);
        $('#jstree').jstree('search', searchString);
    });


    $('#jstree').jstree({
        'core': {
            'data': [{
                "id": "1998",
                "text": "1998",
            
                "state": {
                    "opened": false,
                    "disabled": false,
                    "selected": false
                },
                "children": [{
                    "id": "1",
                    "text": "Paris",
         
                    "state": {
                        "opened": false,
                        "disabled": false,
                        "selected": false
                    },
                    "children": false,
                    "liAttributes": null,
                    "aAttributes": null
                },{
                    "id": "2",
                    "text": "France",
              
                    "state": {
                        "opened": false,
                        "disabled": false,
                        "selected": false
                    },
                    "children": false,
                    "liAttributes": null,
                    "aAttributes": null
                }],
                "liAttributes": null,
                "aAttributes": null
            },{
                "id": "2002",
                "text": "2002",
         
                "state": {
                    "opened": false,
                    "disabled": false,
                    "selected": false
                },
                "children": [{
                    "id": "3",
                    "text": "Busan",
                 
                    "state": {
                        "opened": false,
                        "disabled": false,
                        "selected": false
                    },
                    "children": false,
                    "liAttributes": null,
                    "aAttributes": null
                },{
                    "id": "4",
                    "text": "Japon",
                
                    "state": {
                        "opened": false,
                        "disabled": false,
                        "selected": false
                    },
                    "children": false,
                    "liAttributes": null,
                    "aAttributes": null
                }],
                "liAttributes": null,
                "aAttributes": null
            },{
                "id": "2006",
                "text": "2006",
              
                "state": {
                    "opened": false,
                    "disabled": false,
                    "selected": false
                },
                "children": [{
                    "id": "5",
                    "text": "Freyburg",
                  
                    "state": {
                        "opened": false,
                        "disabled": false,
                        "selected": false
                    },
                    "children": false,
                    "liAttributes": null,
                    "aAttributes": null
                }, {
                    "id": "6",
                    "text": "Allemagne",
                  
                    "state": {
                        "opened": false,
                        "disabled": false,
                        "selected": false
                    },
                    "children": false,
                    "liAttributes": null,
                    "aAttributes": null
                }],
                "liAttributes": null,
                "aAttributes": null
            },{
                "id": "2010",
                "text": "2010",
               
                "state": {
                    "opened": false,
                    "disabled": false,
                    "selected": false
                },
                "children": [{
                    "id": "7",
                    "text": "Boksburg",
             
                    "state": {
                        "opened": false,
                        "disabled": false,
                        "selected": false
                    },
                    "children": false,
                    "liAttributes": null,
                    "aAttributes": null
                }, {
                    "id": "8",
                    "text": "Afrique du sud",
          
                    "state": {
                        "opened": false,
                        "disabled": false,
                        "selected": false
                    },
                    "children": false,
                    "liAttributes": null,
                    "aAttributes": null
                }],
                "liAttributes": null,
                "aAttributes": null
            },{
                "id": "2014",
                "text": "2014",
             
                "state": {
                    "opened": false,
                    "disabled": false,
                    "selected": false
                },
                "children": [{
                    "id": "9",
                    "text": "Rio de janeiro",
         
                    "state": {
                        "opened": false,
                        "disabled": false,
                        "selected": false
                    },
                    "children": false,
                    "liAttributes": null,
                    "aAttributes": null
                }, {
                    "id": "10",
                    "text": "Brasil",
            
                    "state": {
                        "opened": false,
                        "disabled": false,
                        "selected": false
                    },
                    "children": false,
                    "liAttributes": null,
                    "aAttributes": null
                }],
                "liAttributes": null,
                "aAttributes": null
            }]
        },
        "search": {

            "case_insensitive": true,
            "show_only_matches" : true

        },

        "plugins": ["search"]
    });
});