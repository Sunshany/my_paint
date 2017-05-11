/**
 * Created by sarah amairi on 09/05/2017.
 */

$(function () {

    var p = document.getElementById('crayon')
    var l = document.getElementById('ligne')
    var s = document.getElementById('rectangle')
    var c = document.getElementById('cercle')
    var e = document.getElementById('gomme')
    var clicks = 0
    var lastClick = [0,0]


    context = document.getElementById('canvas').getContext("2d")
    canvasDiv = document.getElementById('canvas')
    canvasDiv.setAttribute('width', "800px")
    canvasDiv.setAttribute('height', "600px")

    var eventPen = p.addEventListener("click", () => {

        if(typeof G_vmlCanvasManager != 'undefined') {
            canvas = G_vmlCanvasManager.initElement(canvas)
        }

        $('#canvas').unbind()

        $('#canvas').mousedown(function(e){
            var mouseX = e.pageX - this.offsetLeft
            var mouseY = e.pageY - this.offsetTop
            paint = true
            addClick(e.pageX - this.offsetLeft, e.pageY - this.offsetTop)
            redraw()
        })

        $('#canvas').mousemove(function(e){
            if(paint) {
                addClick(e.pageX - this.offsetLeft, e.pageY - this.offsetTop, true)
                redraw()
                // $('#canvas').unbind()
            }
        })

        $('#canvas').mouseup(function(e){
            paint = false
        })

        $('#canvas').mouseleave(function(e){
            paint = false
        })

        var clickX = new Array()
        var clickY = new Array()
        var clickDrag = new Array()
        var paint

        function addClick(x, y, dragging)
        {
            clickX.push(x)
            clickY.push(y)
            clickDrag.push(dragging)
        }

        function redraw(){

            // context.clearRect(0, 0, context.canvas.width, context.canvas.height) // Clears the canvas
            context.strokeStyle = "black"
            context.lineJoin = "round"

            context.lineWidth = 5
            for(var i=0; i < clickX.length; i++) {
                context.beginPath()
                if(clickDrag[i] && i){
                    context.moveTo(clickX[i-1], clickY[i-1])
                }else{
                    context.moveTo(clickX[i]-1, clickY[i])
                }
                context.lineTo(clickX[i], clickY[i])
                context.closePath()
                context.stroke()
            }
        }
    })

    var eventLine = l.addEventListener("click", () => {

        $('#canvas').unbind()

        var clicks = 0;
        var lastClick = [0, 0];

        document.getElementById('canvas').addEventListener('click', drawLine);

        function getCursorPosition(e) {
            var x;
            var y;

            if (e.pageX != undefined && e.pageY != undefined) {
                x = e.pageX;
                y = e.pageY;
            } else {
                x = e.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
                y = e.clientY + document.body.scrollTop + document.documentElement.scrollTop;
            }

            return [x, y];
        }

        function drawLine(e) {
            context = this.getContext('2d');

            x = getCursorPosition(e)[0] - this.offsetLeft;
            y = getCursorPosition(e)[1] - this.offsetTop;

            if (clicks != 1) {
                clicks++;
            } else {
                context.beginPath();
                context.moveTo(lastClick[0], lastClick[1]);
                context.lineTo(x, y, 6);

                context.strokeStyle = '#febace';
                context.stroke();

                clicks = 0;
            }

            lastClick = [x, y];
        }

    })

})
