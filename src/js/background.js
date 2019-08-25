$(document).ready(function () {
    var newPhoto = new Image();
    newPhoto.src = '../img/bcg/dentist.png';
    var oldSrc = $('#bcg').attr('src');
    $('#bcg').hover(
        function () {
            $(this).attr('src', newPhoto.src);
        },
        function () {
            $(this).attr('src, oldSrc');
        });
});