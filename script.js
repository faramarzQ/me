
$('window').ready(function() {
    playAudio()

    $('[toggle-target]').on('click', function(e) {
        var target = e.currentTarget.attributes['toggle-target'].value

        $('.toggle').hide( 400)

        if($("#" + target).css("display") == 'none')
            $('#' + target).show(400)
        else if($("#" + target).css("display") == 'block')
            $('#' + target).hide(400)
    })
})

function playAudio() {
    $('#song')[0].play();
    $('#play').hide()
    $('#pause').show()
}

function pauseAudio() {
    $('#song')[0].pause();
    $('#pause').hide()
    $('#play').show()
}
