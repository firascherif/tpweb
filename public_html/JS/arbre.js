$(document).ready(function () {

    $("#jstree").jstree({
        'core': {
            'data': {           
                'url': function (node) {
                    return node.id === "#" ?
                            '../JSON/Arbre.json' :
                            '../JSON/Arbre.json';
                },
                'data': function (node) {
                    return{'id': node.id};
                },
                'dataType': 'json'
            }
        }
    });
});

