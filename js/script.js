/**
 * Created by sarah amairi on 09/05/2017.
 */

'use strict'

$(function () {

    const p = document.getElementById('crayon')
    const l = document.getElementById('ligne')
    const s = document.getElementById('rectangle')
    const c = document.getElementById('cercle')
    const e = document.getElementById('gomme')
    var curColor = 'red'
    var clickColor = []

    var colorPurple = "#9370DB"
    var colorLGreen = "#90EE90"
    var colorYellow = "#FFFF00"
    var colorBlack = "#000000"
    var colorRed = "#FF0000"
    var colorGrey = "#808080"
    var colorWhite = "#FFFFFF"
    var colorOrange = "#ffc539"
    var colorLBlue = "#ADD8E6"
    var colorLPurple = "#9370DB"
    var colorPink = "#FF6DC3"
    var colorDBlue = "#38478B"
    var colorDGreen = "#26642D"
    var colorDPurple = "#A539E2"

    var blackButton = document.getElementById('black').addEventListener("click", () => {
        curColor = colorBlack
            return curColor
        })
    var whiteButton = document.getElementById('white').addEventListener("click", () => {
        curColor = colorWhite
            return curColor
        })
    var greyButton = document.getElementById('grey').addEventListener("click", () => {
        curColor = colorGrey
            return curColor
        })
    var redButton = document.getElementById('red').addEventListener("click", () => {
        curColor = colorRed
            return curColor
        })
    var orangeButton = document.getElementById('orange').addEventListener("click", () => {
        curColor = colorOrange
            return curColor
        })
    var yellowButton = document.getElementById('yellow').addEventListener("click", () => {
        curColor = colorYellow
            return curColor
        })
    var lightgreenButton = document.getElementById('lightgreen').addEventListener("click", () => {
        curColor = colorLGreen
            return curColor
        })
    var lightblueButton = document.getElementById('lightblue').addEventListener("click", () => {
        curColor = colorLBlue
            return curColor
        })
    var lightpurpleButton = document.getElementById('lightpurple').addEventListener("click", () => {
        curColor = colorLPurple
            return curColor
        })
    var pinkButton = document.getElementById('pink').addEventListener("click", () => {
        curColor = colorPink
            return curColor
        })
    var darkblueButton = document.getElementById('darkblue').addEventListener("click", () => {
        curColor = colorDBlue
            return curColor
        })
    var darkgreenButton = document.getElementById('darkgreen').addEventListener("click", () => {
        curColor = colorDGreen
            return curColor
        })
    var darkpurpleButton = document.getElementById('darkpurple').addEventListener("click", () => {
        curColor = colorDPurple
            return curColor
        })

    var context = document.getElementById('canvas').getContext("2d")
    var canvasDiv = document.getElementById('canvas')
    canvasDiv.setAttribute('width', "800px")
    canvasDiv.setAttribute('height', "600px")

    var eventPen = p.addEventListener("click", () => {

        // if(G_vmlCanvasManager != 'undefined') {
            // canvas = G_vmlCanvasManager.initElement(canvas)
        // }

        $('#canvas').off()

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

        var clickX = []
        var clickY = []
        var clickDrag = []
        var paint

        function addClick(x, y, dragging)
        {
            clickX.push(x)
            clickY.push(y)
            clickDrag.push(dragging)
            clickColor.push(curColor)

        }

        function redraw(){

            // context.clearRect(0, 0, context.canvas.width, context.canvas.height) // Clears the canvas

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
                context.strokeStyle =
                console.log(curColor)
                context.stroke()
            }
        }
    })

    var eventLine = l.addEventListener("click", () => {

        var clicks = 0
        var lastClick = [0, 0]

        $('#canvas').off()

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

            var x = getCursorPosition(e)[0] - this.offsetLeft;
            var y = getCursorPosition(e)[1] - this.offsetTop;

            if (clicks != 1) {
                clicks++;
            } else {
                context.beginPath();
                context.moveTo(lastClick[0], lastClick[1]);
                context.lineTo(x, y, 6);
                context.stroke();

                clicks = 0;
            }

            lastClick = [x, y];
        }

    })

})
