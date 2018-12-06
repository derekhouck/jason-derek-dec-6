function didClick () {
    console.log('didClick ran');
    $('.thumbnail').on('click', function() {
        let imageVariable = $(this).children().clone();
        console.log(imageVariable);
        $('.hero').html(imageVariable);
    });
}

$(didClick());
