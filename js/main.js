$(document).ready(function () {
    var banner = $(".main-content");
    var items = $(".animate");

    function showAllObjects(object) {
        object.fadeIn(900);
    }

    function moving(object, speed) {
        banner.on('mousemove', function (event) {
            var X = Math.floor((event.pageX) / speed - 20) + "px";
            object.css('transform', 'translate('+X+')');
            object.css('box-sizing', 'border-box')
        });
    }

    function moveAll(object) {
        moving($(object[0]), 10);
        moving($(object[1]), 15);
        moving($(object[2]), 8);
        moving($(object[3]), 12);
        moving($(object[4]), 20);
        moving($(object[5]), 14);
    }

    showAllObjects(items);
    moveAll(items);
});

// (function(){
//     var body = document.querySelector('.bg'),
//         startX = -100,
//         startY = -100,
//         w = document.documentElement.offsetWidth,
//         h = document.documentElement.offsetHeight;
//
//     body.addEventListener('mousemove', function(evt){
//         var posX = Math.round(evt.clientX / w * startX)
//          var posY = Math.round(evt.clientY / h * startY)
//         body.style.backgroundPosition = posX + 'px ' + posY + 'px';
//     })
// })()
