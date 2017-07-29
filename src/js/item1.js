/**
 * Created by Oshevchuk on 27.07.2017.
 * http://oshevchuk2016.16mb.com/
 */
var img = new Image();
img.src = $('#mask').attr('xlink:href');
var Entities = (function () {
    function Entities() {
        this.entites = [];
    }
    Entities.prototype.add = function (item) {
        this.entites.push(item);
    };
    Entities.prototype.findByColor = function (color) {
        var res = null;
        this.entites.forEach(function (a, b) {
            if (a.color == color)
                res = a;
            // console.log(a, b);
        });
        return res;
    };
    Entities.prototype.findById = function (id) {
        var res = null;
        this.entites.forEach(function (a, b) {
            if (a.id == id)
                res = a;
            // console.log(a, b);
        });
        return res;
    };
    Entities.prototype.setDefauls = function () {
        this.entites.forEach(function (a, b) {
            $('#' + a.id).attr('xlink:href', "img/item1/" + a.defaultImg);
        });
    };
    Entities.prototype.setActive = function () {
    };
    return Entities;
}());
var SeatControl = (function () {
    function SeatControl(color, id, mask, defaulImg) {
        this.color = color ? color : null;
        this.id = id ? id : null;
        this.mask = mask ? mask : null;
        this.defaultImg = defaulImg ? defaulImg : null;
    }
    return SeatControl;
}());
var s = new Entities();
s.add(new SeatControl(40, "p4", "p4select.png", "p4.png"));
s.add(new SeatControl(20, "p2", "p2select.png", "p2.png"));
s.add(new SeatControl(60, "p6", "p6select.png", "p6.png"));
s.add(new SeatControl(80, "p7", "p7select.png", "p7.png"));
// console.log( s.findByColor(20));
var freez = false;
$('#mask').click(function (e) {
    if (!freez) {
        var clicked = GetElement(e);
        if (clicked)
            BindClick(clicked.id);
    }
});
function BindClick(clicked) {
    if (clicked) {
        freez = true;
        switch (clicked) {
            case 'p4':
                $('#p4').addClass('p4');
                setTimeout(function () {
                    $('#p4act').addClass('p4act');
                    setTimeout(function () {
                        $('#p4act').removeClass('p4act');
                        $('#p4').removeClass('p4');
                        freez = false;
                    }, 1500);
                }, 800);
                break;
            case 'p2':
                $('#p2').addClass('p2');
                setTimeout(function () {
                    $('#seat-rol').addClass('seat-rol');
                    setTimeout(function () {
                        $('#seat-rol').removeClass('seat-rol');
                        $('#p2').removeClass('p2');
                        freez = false;
                    }, 1500);
                }, 800);
                break;
            case 'p7':
                $('#p7').addClass('p7');
                setTimeout(function () {
                    $('#sideSeat').addClass('sideSeat');
                    setTimeout(function () {
                        $('#sideSeat').removeClass('sideSeat');
                        $('#p7').removeClass('p7');
                        freez = false;
                    }, 1500);
                }, 800);
                break;
            case 'p6':
                $('#p6').addClass('p6');
                setTimeout(function () {
                    $('#seat-top').addClass('seat-top');
                    setTimeout(function () {
                        $('#seat-top').removeClass('seat-top');
                        $('#p6').removeClass('p6');
                        freez = false;
                    }, 1500);
                }, 400);
                break;
            default:
                freez = false;
                break;
        }
    }
}
$('#mask').mousemove(function (e) {
    if (!freez)
        GetElement(e);
});
function GetElement(e) {
    var canvas = document.createElement('canvas');
    canvas.width = 172;
    canvas.height = 95;
    canvas.getContext('2d').drawImage(img, 0, 0, 172, 95);
    var pixelData = canvas.getContext('2d').getImageData(e.offsetX - 17, e.offsetY - 193, 1, 1).data[0];
    var findObj = s.findByColor(pixelData);
    s.setDefauls();
    findObj ? $('#' + findObj.id).attr('xlink:href', "img/item1/" + findObj.mask) : null;
    return findObj;
    // console.log(e.offsetX, e.offsetY,  pixelData);
}
//-------------------
$('.link-action').on('mousemove', function (e) {
    // $(self).data('action')
    if (!freez) {
        var findObj = s.findById($(this).data('action'));
        s.setDefauls();
        findObj ? $('#' + findObj.id).attr('xlink:href', "img/item1/" + findObj.mask) : null;
    }
});
$('.link-action').on('click', function (e) {
    if (!freez) {
        var findObj = s.findById($(this).data('action'));
        s.setDefauls();
        findObj ? $('#' + findObj.id).attr('xlink:href', "img/item1/" + findObj.mask) : null;
        BindClick($(this).data('action'));
    }
});
//------------------------------------------------------------------------------
//In Action list prenn on the info icon
//------------------------------------------------------------------------------
$('.info-action').on('click', function (e) {
    $('.modal').fadeIn(400);
    var selected_act = $(this).data('actioni');
    $('.variant').hide();
    $('#' + selected_act).show();
});
$('.close').on('click', function (e) {
    $('.modal').fadeOut(400);
});
//# sourceMappingURL=item1.js.map