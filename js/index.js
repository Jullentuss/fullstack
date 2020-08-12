$(function(){
    $("[data-toggle='tooltip']").tooltip();
    $("[data-toggle='popover']").popover();
    $('.carousel').carousel({
        interval: 2000
    });

    $('#contacto').on('show.bs.modal', function(e) {
        console.log('show.bs.modal');

        $('#btnContacto').removeClass('btn-outline-success');
        $('#btnContacto').addClass('btn-success');
        $('#btnContacto').prop('disabled', true);

    });

    $('#contacto').on('shown.bs.modal', function(e) {
        console.log('shown.bs.modal');
    });

    $('#contacto').on('hide.bs.modal', function(e) {
        console.log('hide.bs.modal');

        $('#btnContacto').addClass('btn-outline-success');
        $('#btnContacto').removeClass('btn-success');
        $('#btnContacto').prop('disabled', false);

    });

    $('#contacto').on('hidden.bs.modal', function(e) {
        console.log('hidden.bs.modal');
    });

});

