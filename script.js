
$('window').ready(function() {

    $('[toggle-target]').on('click', function(e) {
        var target = e.currentTarget.attributes['toggle-target'].value
        // $('.toggle').hide( 400)

        if($("#" + target).css("display") == 'none')
            $('#' + target).show(400)
        else if($("#" + target).css("display") == 'block')
            $('#' + target).hide(400)
    })
})
