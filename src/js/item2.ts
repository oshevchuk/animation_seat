/**
 * Created by Oshevchuk on 30.07.2017.
 * http://oshevchuk2016.16mb.com/
 */
/**
 * Created by Oshevchuk on 27.07.2017.
 * http://oshevchuk2016.16mb.com/
 */

var img = new Image();
img.src = $('#mask').attr('xlink:href');

class Entities {
    public entites:SeatControl[];

    constructor() {
        this.entites = [];
    }

    public add(item:SeatControl):void {
        this.entites.push(item);
    }

    public findByColor(color:Number):SeatControl {
        let res = null;
        this.entites.forEach(function (a, b) {
            if (a.color == color)
                res = a;
            // console.log(a, b);
        });
        return res;
    }

    public findById(id:String):SeatControl {
        let res = null;
        this.entites.forEach(function (a, b) {
            if (a.id == id)
                res = a;
            // console.log(a, b);
        });
        return res;
    }

    public setDefauls():void {
        this.entites.forEach(function (a, b) {
            $('#' + a.id).attr('xlink:href', "img/item2/" + a.defaultImg);
        });
    }

    public setActive() {

    }
}

class SeatControl {
    public color:Number;
    public id:string;
    public mask:string;
    public defaultImg:string;

    constructor(color?, id?, mask?, defaulImg?) {
        this.color = color ? color : null;
        this.id = id ? id : null;
        this.mask = mask ? mask : null;
        this.defaultImg = defaulImg ? defaulImg : null;
    }
}

var s = new Entities();
s.add(new SeatControl(40, "p4", "p4select.png", "p4.png"));
s.add(new SeatControl(60, "p6", "p6select.png", "p6.png"));
s.add(new SeatControl(70, "p7", "p7select.png", "p7.png"));
s.add(new SeatControl(80, "p8", "p8select.png", "p8.png"));
s.add(new SeatControl(90, "p9", "p9select.png", "p9.png"));
s.add(new SeatControl(10, "p10", "p10.png", ""));

// console.log( s.findByColor(20));

var freez = false;

$('#mask').click(function (e) {
    if(!freez) {
        var clicked = GetElement(e);
        if(clicked)
            BindClick(clicked.id);
    }
});

function BindClick(clicked){
    if (clicked) {
        freez = true;
        switch (clicked) {
            case 'p4':
                $('#p4').addClass('p4');
                setTimeout(function () {
                    $('#p4side').addClass('p4side');
                    setTimeout(function () {
                        $('#p4side').removeClass('p4side');
                        $('#p4').removeClass('p4');
                        freez = false;
                    }, 1500);
                }, 800);
                break;
            case 'p7':
                $('#p7').addClass('p7');
                setTimeout(function () {
                    $('#p7side').addClass('p7side');
                    setTimeout(function () {
                        $('#p7side').removeClass('p7side');
                        $('#p7').removeClass('p7');
                        freez = false;
                    }, 1500);
                }, 800);
                break;
            case 'p6':
                $('#p6').addClass('p6');
                setTimeout(function () {
                    $('#p6side').addClass('p6side');
                    setTimeout(function () {
                        $('#p6side').removeClass('p6side');
                        $('#p6').removeClass('p6');
                        freez = false;
                    }, 1500);
                }, 800);
                break;
            case 'p9':
                $('#p9').addClass('p9');
                setTimeout(function () {
                    $('#p9side').addClass('p9side');
                    setTimeout(function () {
                        $('#p9side').removeClass('p9side');
                        $('#p9').removeClass('p9');
                        freez = false;
                    }, 1500);
                }, 800);
                break;

            case 'p1':
                $('#p1action').addClass('p1action');
                setTimeout(function () {
                    $('#p1action').removeClass('p1action');
                        freez = false;
                }, 1500);
                break;

            case 'p8':
                $('#arrow-r').show();
                $('#p9side').addClass('p9side-p8');
                setTimeout(function () {
                    $('#p9side').removeClass('p9side-p8');
                        freez = false;
                    $('#arrow-r').hide();
                }, 1500);
                break;

            case 'p10':
                $('#p10ar').show();
                $('#p9side').addClass('p9side');
                setTimeout(function () {
                    $('#p9side').removeClass('p9side');
                        freez = false;
                    $('#p10ar').hide();
                }, 1500);
                break;

            default:
                freez=false;
                break;
        }
    }
}

$('#mask').mousemove(function (e) {
    if(!freez)
        GetElement(e);
});


function GetElement(e) {
    var canvas = document.createElement('canvas');
    canvas.width = 177;
    canvas.height = 83;

    canvas.getContext('2d').drawImage(img, 0, 0, 177, 83);
    var pixelData = canvas.getContext('2d').getImageData(e.offsetX - 24, e.offsetY - 187, 1, 1).data[0];

    let findObj = s.findByColor(pixelData);
    s.setDefauls();
    findObj ? $('#' + findObj.id).attr('xlink:href', "img/item2/" + findObj.mask) : null;
    return findObj;
    console.log(e.offsetX, e.offsetY,  pixelData);
}

//-------------------
$('.link-action').on('mousemove', function (e) {
    // $(self).data('action')
    if (!freez) {
        let findObj = s.findById($(this).data('action'));
        s.setDefauls();
        findObj ? $('#' + findObj.id).attr('xlink:href', "img/item2/" + findObj.mask) : null;
        // BindClick($(this).data('action'));
    }
});

$('.link-action').on('click', function (e) {
    if(!freez){
        let findObj = s.findById($(this).data('action'));
        s.setDefauls();
        findObj ? $('#' + findObj.id).attr('xlink:href', "img/item2/" + findObj.mask) : null;
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