$('.os-adjustments').on('click', function (e) {
    console.log('action ->', $(this).data('action'));
    $('.os-animated').removeClass('slidingSeat');
    switch ($(this).data('action')) {
        case 'pneumatic-tilt':
            //os-top-group
            $('#os-top-group').addClass('pneumaticTilt');
            setTimeout(function () {
                $('#os-top-group').removeClass('pneumaticTilt');
                // alert(1);
            }, 1500);
            break;
        case 'synchronus-tilt':
            break;
        case 'back-heigh-adjustment':
            break;
        case 'multiple-position-lock':
            break;
        case 'sliding-seat':
            $('#p5').addClass('slidingSeat');
            break;
        case 'tension-knob':
            // tensionKnob
            $('#os-top-group').addClass('tensionKnob');
            break;
        case 'roking-tilt':
            break;
        default:
            break;
    }
});
document.addEventListener("DOMContentLoaded", function (e) {
    setTimeout(init_Scene, 200);
}, false);
function init_Scene() {
}
//# sourceMappingURL=main.js.map