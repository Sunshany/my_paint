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
    curColor = "#000000"
    var clickColor = []

    colorPurple = "#9370DB"
    colorLGreen = "#90EE90"
    colorYellow = "#FFFF00"
    colorBlack = "#000000"
    colorRed = "#FF0000"
    colorGrey = "#808080"
    colorWhite = "#FFFFFF"
    colorOrange = "#ffc539"
    colorLBlue = "#ADD8E6"
    colorLPurple = "#9370DB"
    colorPink = "#FF6DC3"
    colorDBlue = "#38478B"
    colorDGreen = "#26642D"
    colorDPurple = "#A539E2"

    var blackButton = document.getElementById('black').addEventListener("click", () => {
        var curColor = colorBlack
            console.log(curColor)

    return curColor
        })

    var whiteButton = document.getElementById('white').addEventListener("click", () => {
        var curColor = colorWhite
            console.log(curColor)
    return curColor

})
    var greyButton = document.getElementById('grey').addEventListener("click", () => {
        var curColor = colorGrey
            console.log(curColor)
    return curColor

})
    console.log(greyButton)
    var redButton = document.getElementById('red').addEventListener("click", () => {
        var curColor = colorRed
            console.log(curColor)

    return curColor
        })
    var orangeButton = document.getElementById('orange').addEventListener("click", () => {
        var curColor = colorOrange
            console.log(curColor)

    return curColor
        })
    var yellowButton = document.getElementById('yellow').addEventListener("click", () => {
        var curColor = colorYellow
            console.log(curColor)

    return curColor
        })
    var lightgreenButton = document.getElementById('lightgreen').addEventListener("click", () => {
        var curColor = colorLGreen
            console.log(curColor)

    return curColor
        })
    var lightblueButton = document.getElementById('lightblue').addEventListener("click", () => {
        var curColor = colorLBlue
            console.log(curColor)

    return curColor
        })
    var lightpurpleButton = document.getElementById('lightpurple').addEventListener("click", () => {
        var curColor = colorLPurple
            console.log(curColor)

    return curColor
        })
    var pinkButton = document.getElementById('pink').addEventListener("click", () => {
        var curColor = colorPink
            console.log(curColor)

    return curColor
        })
    var darkblueButton = document.getElementById('darkblue').addEventListener("click", () => {
        var curColor = colorDBlue
            console.log(curColor)

    return curColor
        })
    var darkgreenButton = document.getElementById('darkgreen').addEventListener("click", () => {
        var curColor = colorDGreen
            console.log(curColor)

    return curColor
        })
    var darkpurpleButton = document.getElementById('darkpurple').addEventListener("click", () => {
        var curColor = colorDPurple
            console.log(curColor)

    return curColor
        })

    console.log(curColor)

    context = document.getElementById('canvas').getContext("2d")
    canvasDiv = document.getElementById('canvas')
    canvasDiv.setAttribute('width', "800px")
    canvasDiv.setAttribute('height', "600px")

    var eventPen = p.addEventListener("click", () => {

        // if(G_vmlCanvasManager != 'undefined') {
            // canvas = G_vmlCanvasManager.initElement(canvas)
        // }

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
                context.strokeStyle =
                console.log(curColor)
                context.stroke()
            }
        }
    })

    var eventLine = l.addEventListener("click", () => {

        var clicks = 0;
        var lastClick = [0, 0];

        $('#canvas').unbind()

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
                context.stroke();

                clicks = 0;
            }

            lastClick = [x, y];
        }

    })

})
