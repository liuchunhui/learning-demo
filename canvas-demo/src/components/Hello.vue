<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>测试</p>
    <canvas id="tutorial" width="140" height="140">
      current stock price: $3.15 +0.15
    </canvas>
    <p>绘制矩形</p>
    <canvas id="rect-canvas" width="350" height="140">
      Your browser doesn't support the <code>canvas</code> element.
    </canvas>
    <p>设置画布绘制状态</p>
    <canvas id="drawing-state-canvas" width="350" height="140">
      Your browser doesn't support the <code>canvas</code> element.
    </canvas>
    <p>使用线性渐变</p>
    <canvas id="linear-gradient-canvas" width="350" height="140">
      Your browser doesn't support the <code>canvas</code> element.
    </canvas>
    <p>使用径向渐变</p>
    <canvas id="radial-gradient-canvas" width="500" height="140">
      Your browser doesn't support the <code>canvas</code> element.
    </canvas>
    <p>使用图案</p>
    <canvas id="pattern-gradient-canvas" width="500" height="200">
      Your browser doesn't support the <code>canvas</code> element.
    </canvas>
    <img id="pattern-img" src="../assets/logo.png" hidden/>
    <p>保存和恢复绘制状态</p>
    <canvas id="save-restore-canvas" width="500" height="140">
      Your browser doesn't support the <code>canvas</code> element.
    </canvas>
    <div>
      <button>Save</button>
      <button>Restore</button>
    </div>
    <p>绘制图像</p>
    <canvas id="draw-image-canvas" width="500" height="140">
      Your browser doesn't support the <code>canvas</code> element.
    </canvas>
    <img id="draw-image-img" src="../assets/logo.png" hidden/>
    <p>使用视频图像</p>
    <video id="video-demo" src="../assets/demo.mp4" controls autoplay
       width="360" height="240">
      Video cannot be displayed.
    </video>
    <button id="press-video">截图</button>
    <canvas id="video-canvas" width="360" height="220">
      Your browser doesn't support the <code>canvas</code> element.
    </canvas>
    <p>用canvas显示视频并在上面绘图</p>
    <video id="video-demo2" hidden src="../assets/demo.mp4" controls autoplay
           width="360" height="240">
      Video cannot be displayed.
    </video>
    <canvas id="video-canvas2" width="360" height="220">
      Your browser doesn't support the <code>canvas</code> element.
    </canvas>
    <p>将画布作为drawImage方法来源</p>
    <video id="video-demo3" hidden src="../assets/demo.mp4" controls autoplay
           width="360" height="240">
      Video cannot be displayed.
    </video>
    <canvas id="video-canvas3" width="360" height="220">
      Your browser doesn't support the <code>canvas</code> element.
    </canvas>
    <button id="press-video3">截图</button>
    <canvas id="video-canvas4" width="360" height="220">
      Your browser doesn't support the <code>canvas</code> element.
    </canvas>
    <p>用线条绘制路径</p>
    <canvas id="path-canvas" width="500" height="140">
      Your browser doesn't support the <code>canvas</code> element.
    </canvas>
    <p>使用arcTo方法</p>
    <canvas id="arcTo-canvas" width="500" height="140">
      Your browser doesn't support the <code>canvas</code> element.
    </canvas>
    <p>响应鼠标移动绘制圆弧(按shift或ctrl)</p>
    <canvas id="arcTo-mouse-move-canvas" width="1000" height="500">
      Your browser doesn't support the <code>canvas</code> element.
    </canvas>
    <p>使用arc方法</p>
    <canvas id="arc-canvas" width="500" height="140">
      Your browser doesn't support the <code>canvas</code> element.
    </canvas>
    <p>绘制三次贝塞尔线(按shift或ctrl)</p>
    <canvas id="bezier-curve-canvas" width="1000" height="500">
      Your browser doesn't support the <code>canvas</code> element.
    </canvas>
    <p>绘制二次贝塞尔线(按shift)</p>
    <canvas id="quadratic-curve-canvas" width="1000" height="500">
      Your browser doesn't support the <code>canvas</code> element.
    </canvas>
    <p>创建裁剪区域</p>
    <canvas id="clip-canvas" width="500" height="140">
      Your browser doesn't support the <code>canvas</code> element.
    </canvas>
    <p>绘制文本</p>
    <canvas id="font-canvas" width="500" height="140">
      Your browser doesn't support the <code>canvas</code> element.
    </canvas>
    <p>使用特效和变换</p>
    <canvas id="effects-canvas" width="500" height="140">
      Your browser doesn't support the <code>canvas</code> element.
    </canvas>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Canvas Demo'
    }
  },
  methods: {
    test () {  // 测试
      const canvas = document.getElementById('tutorial')
      if (canvas.getContext) {
        const ctx = canvas.getContext('2d')
        ctx.fillStyle = 'rgb(200,0,0)'
        ctx.fillRect(10, 10, 55, 50)
        ctx.fillStyle = 'rgba(0, 0, 200, 0.5)'
        ctx.fillRect(30, 30, 55, 50)
        ctx.clearRect(0, 0, 55, 50)
        ctx.clearRect(65, 60, 50, 50)
        ctx.strokeRect(5, 5, 100, 100)
        ctx.beginPath()
      } else {
        console.log('浏览器不支持canvas')
      }
    },
    reactCanvas () {  // 绘制矩形
      const RectCanvas = document.getElementById('rect-canvas').getContext('2d')
      const offset = 10
      const size = 50
      const count = 5
      for (let i = 0; i < count; i++) {
        RectCanvas.fillRect(i * (offset + size) + offset, offset, size, size)
        RectCanvas.strokeRect(i * (offset + size) + offset, (2 * offset) + size, size, size)
        RectCanvas.clearRect(i * (offset + size) + offset, offset + 5, size, size - 10)
      }
    },
    drawingStateCanvas () {  // 绘制状态
      const DrawingStateCanvas = document.getElementById('drawing-state-canvas').getContext('2d')
      const offset = 10
      const size = 50
      const count = 5
      const lineTypes = ['round', 'bevel', 'miter']
      const fillColors = ['black', 'grey', 'lightgrey', 'red', 'blue']
      const strokeColors = ['rgb(0, 0, 0)', 'rgb(100, 100, 100)', 'rgb(200, 200, 200)',
        'rgb(255, 0, 0)', 'rgb(0, 0, 255)']
      for (let i = 0; i < count; i++) {
        DrawingStateCanvas.lineWidth = i * 2  // 线条宽度
        DrawingStateCanvas.lineJoin = lineTypes[i % 3]  // 线条或图形连接时的样式
        DrawingStateCanvas.fillStyle = fillColors[i]  // 实心图形的样式
        DrawingStateCanvas.strokeStyle = strokeColors[i]  // 线条样式
        DrawingStateCanvas.fillRect(i * (offset + size) + offset, offset, size, size)
        DrawingStateCanvas.strokeRect(i * (offset + size) + offset, (2 * offset) + size, size, size)
      }
    },
    linearGradientCanvas () {  // 线性渐变
      const linearGradientCanvas = document.getElementById('linear-gradient-canvas').getContext('2d')
      const grad = linearGradientCanvas.createLinearGradient(0, 0, 350, 140)  // 相对于画布
      grad.addColorStop(0, 'red')
      grad.addColorStop(0.5, 'white')
      grad.addColorStop(1, 'black')
      linearGradientCanvas.fillStyle = grad
      linearGradientCanvas.fillRect(0, 0, 350, 140)  // 相对于画布
    },
    radialGradientCanvas () {  // 径向渐变
      const radialGradientCanvas = document.getElementById('radial-gradient-canvas').getContext('2d')
      const grad = radialGradientCanvas.createRadialGradient(200, 70, 20, 200, 70, 100)
      grad.addColorStop(0, 'red')
      grad.addColorStop(0.5, 'white')
      grad.addColorStop(1, 'black')
      radialGradientCanvas.fillStyle = grad  // fillStyle
      radialGradientCanvas.fillRect(0, 0, 250, 140)
      radialGradientCanvas.lineWidth = 100
      radialGradientCanvas.strokeStyle = grad  // strokeStyle
      radialGradientCanvas.strokeRect(301, 0, 150, 140)
    },
    patternCanvas () {  // 使用图案
      const patternGradientCanvas = document.getElementById('pattern-gradient-canvas').getContext('2d')
      const imageElem = document.getElementById('pattern-img')
      const pattern = patternGradientCanvas.createPattern(imageElem, 'repeat')
      patternGradientCanvas.fillStyle = pattern  // fillStyle
      patternGradientCanvas.fillRect(0, 0, 250, 200)
      patternGradientCanvas.lineWidth = 20
      patternGradientCanvas.strokeStyle = pattern  // strokeStyle
      patternGradientCanvas.strokeRect(270, 30, 200, 100)
    },
    saveRestoreCanvas () {  // 保存和恢复绘制状态
      const SaveRestoreCanvas = document.getElementById('save-restore-canvas').getContext('2d')
      const grad = SaveRestoreCanvas.createLinearGradient(500, 0, 500, 140)
      grad.addColorStop(0, 'red')
      grad.addColorStop(0.5, 'white')
      grad.addColorStop(1, 'black')
      const colors = ['black', grad, 'red', 'green', 'yellow', 'black', 'grey']
      let cIndex = 0
      SaveRestoreCanvas.fillStyle = colors[cIndex]
      draw()
      const buttons = document.getElementsByTagName('button')
      for (let i = 0; i < buttons.length; i++) {
        buttons[i].onclick = handleButtonParess
      }
      function handleButtonParess (e) {
        switch (e.target.innerHTML) {
          case 'Save':
            SaveRestoreCanvas.save()
            cIndex = (cIndex + 1) % colors.length
            SaveRestoreCanvas.fillStyle = colors[cIndex]
            draw()
            break
          case 'Restore':
            cIndex = Math.max(0, cIndex - 1)
            SaveRestoreCanvas.restore()
            draw()
            break
        }
      }
      function draw () {
        SaveRestoreCanvas.fillRect(0, 0, 500, 140)
      }
    },
    drawImageCanvas () {  // 绘制图像
      const DrawImageCanvas = document.getElementById('draw-image-canvas').getContext('2d')
      const imageElement = document.getElementById('draw-image-img')
      DrawImageCanvas.drawImage(imageElement, 0, 0)
      DrawImageCanvas.drawImage(imageElement, 220, 0, 100, 100)
      DrawImageCanvas.drawImage(imageElement, 50, 50, 100, 100, 350, 10, 100, 100)
    },
    viedeCanvas () {  // 使用视频图像
      const VideoCanvas = document.getElementById('video-canvas').getContext('2d')
      const imageElement = document.getElementById('video-demo')
      document.getElementById('press-video').onclick = function () {
        VideoCanvas.drawImage(imageElement, 0, 0, 360, 220)
      }
    },
    viedeCanvas2 () {  // 使用视频图像
      const VideoCanvas = document.getElementById('video-canvas2').getContext('2d')
      const imageElement = document.getElementById('video-demo2')
      let width = 100
      let height = 10
      VideoCanvas.lineWidth = 5
      VideoCanvas.strokeStyle = 'red'
      setInterval(function () {
        VideoCanvas.drawImage(imageElement, 0, 0, 360, 240)
        VideoCanvas.strokeRect(180 - (width / 2), 120 - (height / 2), width, height)
      }, 25)
      setInterval(function () {
        width = (width + 1) % 200
        height = (height + 3) % 200
      }, 80)
    },
    viedeCanvas3 () {  // 使用画布图像
      const srcCanvalElement = document.getElementById('video-canvas3')
      const VideoCanvasSource = srcCanvalElement.getContext('2d')
      const VideoCanvasTarget = document.getElementById('video-canvas4').getContext('2d')
      const imageElement = document.getElementById('video-demo3')
      document.getElementById('press-video3').onclick = takeSnapshot
      let width = 100
      let height = 10
      VideoCanvasSource.lineWidth = 5
      VideoCanvasSource.strokeStyle = 'red'
      VideoCanvasTarget.lineWidth = 10
      VideoCanvasTarget.strokeStyle = 'black'
      setInterval(function () {
        VideoCanvasSource.drawImage(imageElement, 0, 0, 360, 240)
        VideoCanvasSource.strokeRect(180 - (width / 2), 120 - (height / 2), width, height)
      }, 25)
      setInterval(function () {
        width = (width + 1) % 200
        height = (height + 3) % 200
      }, 80)
      function takeSnapshot () {
        VideoCanvasTarget.drawImage(srcCanvalElement, 0, 0, 360, 240)
        VideoCanvasTarget.strokeRect(0, 0, 360, 240)
      }
    },
    pathCanvas () {
      const PathCanvas = document.getElementById('path-canvas').getContext('2d')
      PathCanvas.fillStyle = 'yellow'
      PathCanvas.strokeStyle = 'black'
      PathCanvas.lineWidth = 8
      PathCanvas.lineCap = 'round'  // 线条末端样式
      // 用线条绘制路径
      PathCanvas.beginPath()
      PathCanvas.moveTo(10, 10)
      PathCanvas.lineTo(100, 10)
      PathCanvas.lineTo(100, 120)
      PathCanvas.closePath()
      PathCanvas.fill()
      PathCanvas.stroke()
      // 用线条绘制矩形
      PathCanvas.beginPath()
      PathCanvas.moveTo(220, 10)
      PathCanvas.lineTo(220, 100)
      PathCanvas.lineTo(120, 10)
      PathCanvas.closePath()
      PathCanvas.rect(230, 10, 210, 90)
      PathCanvas.rect(250, 100, 240, 30)
      PathCanvas.fill()
      PathCanvas.stroke()
    },
    arcToCanvas () {  // 使用arcTo方法
      const ArcToCanvas = document.getElementById('arcTo-canvas').getContext('2d')
      const point1 = [100, 10]
      const point2 = [200, 10]
      const point3 = [200, 110]
      ArcToCanvas.fillStyle = 'yellow'
      ArcToCanvas.strokeStyle = 'black'
      ArcToCanvas.lineWidth = 4
      // 画圆弧
      ArcToCanvas.beginPath()
      ArcToCanvas.moveTo(point1[0], point1[1])
      ArcToCanvas.arcTo(point2[0], point2[1], point3[0], point3[1], 100)
      ArcToCanvas.stroke()
      // 画辅助点
      drawPoint(point1[0], point1[1])
      drawPoint(point2[0], point2[1])
      drawPoint(point3[0], point3[1])
      // 画辅助线
      ArcToCanvas.beginPath()
      ArcToCanvas.moveTo(point1[0], point1[1])
      ArcToCanvas.lineTo(point2[0], point2[1])
      ArcToCanvas.lineTo(point3[0], point3[1])
      ArcToCanvas.stroke()
      function drawPoint (x, y) {
        ArcToCanvas.lineWidth = 1
        ArcToCanvas.strokeStyle = 'red'
        ArcToCanvas.strokeRect(x - 2, y - 2, 4, 4)
      }
    },
    arcToMouseMoveCanvas () {  // 响应鼠标移动绘制圆弧
      const CanvasElement = document.getElementById('arcTo-mouse-move-canvas')
      const ArcToMouseMoveCanvas = CanvasElement.getContext('2d')
      let point1 = [100, 10]
      let point2 = [200, 10]
      let point3 = [200, 110]
      CanvasElement.onmousemove = function (e) {
        if (e.ctrlKey) {
          point1 = [e.clientX, e.clientY]
        } else if (e.shiftKey) {
          point2 = [e.clientX, e.clientY]
        } else {
          point3 = [e.clientX, e.clientY]
        }
        ArcToMouseMoveCanvas.clearRect(0, 0, 2000, 1400)
        draw()
      }
      function draw () {
        ArcToMouseMoveCanvas.fillStyle = 'yellow'
        ArcToMouseMoveCanvas.strokeStyle = 'black'
        ArcToMouseMoveCanvas.lineWidth = 4
        // 画圆弧
        ArcToMouseMoveCanvas.beginPath()
        ArcToMouseMoveCanvas.moveTo(point1[0], point1[1])
        ArcToMouseMoveCanvas.arcTo(point2[0], point2[1], point3[0], point3[1], 50)
        ArcToMouseMoveCanvas.stroke()
        // 画辅助点
        drawPoint(point1[0], point1[1])
        drawPoint(point2[0], point2[1])
        drawPoint(point3[0], point3[1])
        // 画辅助线
        ArcToMouseMoveCanvas.beginPath()
        ArcToMouseMoveCanvas.moveTo(point1[0], point1[1])
        ArcToMouseMoveCanvas.lineTo(point2[0], point2[1])
        ArcToMouseMoveCanvas.lineTo(point3[0], point3[1])
        ArcToMouseMoveCanvas.stroke()
      }
      function drawPoint (x, y) {
        ArcToMouseMoveCanvas.lineWidth = 1
        ArcToMouseMoveCanvas.strokeStyle = 'red'
        ArcToMouseMoveCanvas.strokeRect(x - 2, y - 2, 4, 4)
      }
    },
    arcCanvas () {
      const ArcCanvas = document.getElementById('arc-canvas').getContext('2d')
      ArcCanvas.fillStyle = 'yellow'
      ArcCanvas.lineWidth = 3
      // 画圆弧一
      ArcCanvas.beginPath()
      ArcCanvas.arc(70, 70, 60, 0, Math.PI * 2, true)
      ArcCanvas.stroke()
      // 画圆弧二
      ArcCanvas.beginPath()
      ArcCanvas.arc(200, 70, 60, Math.PI / 3, Math.PI, true)
      ArcCanvas.fill()
      ArcCanvas.stroke()
      // 圆弧三
      ArcCanvas.beginPath()
      let val = 0
      for (let i = 0; i < 4; i++) {
        ArcCanvas.arc(350, 70, 60, val, val + Math.PI / 4, false)
        val += Math.PI / 2
      }
      ArcCanvas.closePath()
      ArcCanvas.fill()
      ArcCanvas.stroke()
    },
    bezierCurveCanvas () {  // 绘制三次贝塞尔线
      const CavaseElement = document.getElementById('bezier-curve-canvas')
      const BezierCurveCanvas = CavaseElement.getContext('2d')
      const startPoint = [50, 100]
      const endPoint = [400, 100]
      let cp1 = [250, 50]
      let cp2 = [350, 50]
      CavaseElement.onmousemove = function (e) {
        if (e.shiftKey) {
          cp1 = [e.clientX, e.clientY]
        } else if (e.ctrlKey) {
          cp2 = [e.clientX, e.clientY]
        }
        BezierCurveCanvas.clearRect(0, 0, 1000, 500)
        draw()
      }
      function draw () {
        // 画三次贝塞尔曲线
        BezierCurveCanvas.lineWidth = 3
        BezierCurveCanvas.strokeStyle = 'black'
        BezierCurveCanvas.beginPath()
        BezierCurveCanvas.moveTo(startPoint[0], startPoint[1])
        BezierCurveCanvas.bezierCurveTo(cp1[0], cp1[1], cp2[0], cp2[1], endPoint[0], endPoint[1])
        BezierCurveCanvas.stroke()
        // 画辅助线
        BezierCurveCanvas.lineWidth = 1
        BezierCurveCanvas.strokeStyle = 'red'
        const points = [startPoint, endPoint, cp1, cp2]
        for (let i = 0; i < points.length; i++) {
          drawPoint(points[i])
        }
        drawLine(startPoint, cp1)
        drawLine(endPoint, cp2)
      }
      function drawPoint (point) {
        BezierCurveCanvas.beginPath()
        BezierCurveCanvas.strokeRect(point[0] - 2, point[1] - 2, 4, 4)
      }
      function drawLine (from, to) {
        BezierCurveCanvas.beginPath()
        BezierCurveCanvas.moveTo(from[0], from[1])
        BezierCurveCanvas.lineTo(to[0], to[1])
        BezierCurveCanvas.stroke()
      }
    },
    quadraticCurveCanvas () {  // 绘制二次贝塞尔曲线
      const CanvasElement = document.getElementById('quadratic-curve-canvas')
      const QuadraticCurveCanvas = CanvasElement.getContext('2d')
      const startPoint = [50, 100]
      const endPoint = [400, 100]
      let cp1 = [250, 50]
      CanvasElement.onmousemove = function (e) {
        if (e.shiftKey) {
          cp1 = [e.clientX, e.clientY]
        }
        QuadraticCurveCanvas.clearRect(0, 0, 1000, 500)
        draw()
      }
      function draw () {
        // 画二次贝塞尔曲线
        QuadraticCurveCanvas.lineWidth = 3
        QuadraticCurveCanvas.strokeStyle = 'black'
        QuadraticCurveCanvas.beginPath()
        QuadraticCurveCanvas.moveTo(startPoint[0], startPoint[1])
        QuadraticCurveCanvas.quadraticCurveTo(cp1[0], cp1[1], endPoint[0], endPoint[1])
        QuadraticCurveCanvas.stroke()
        // 画辅助线
        QuadraticCurveCanvas.lineWidth = 1
        QuadraticCurveCanvas.strokeStyle = 'red'
        const points = [startPoint, endPoint, cp1]
        for (let i = 0; i < points.length; i++) {
          drawPoint(points[i])
        }
        drawLine(startPoint, cp1)
        drawLine(endPoint, cp1)
      }
      function drawPoint (point) {
        QuadraticCurveCanvas.beginPath()
        QuadraticCurveCanvas.strokeRect(point[0] - 2, point[1] - 2, 4, 4)
      }
      function drawLine (from, to) {
        QuadraticCurveCanvas.beginPath()
        QuadraticCurveCanvas.moveTo(from[0], from[1])
        QuadraticCurveCanvas.lineTo(to[0], to[1])
        QuadraticCurveCanvas.stroke()
      }
    },
    clipCanvas () {  // 创建裁剪区域
      const ClipCanvas = document.getElementById('clip-canvas').getContext('2d')
      // 绘制一个填满画布的矩形
      ClipCanvas.fillStyle = 'yellow'
      ClipCanvas.beginPath()
      ClipCanvas.rect(0, 0, 500, 140)
      ClipCanvas.fill()
      // 绘制裁剪区域
      ClipCanvas.beginPath()
      ClipCanvas.rect(100, 20, 300, 100)
      ClipCanvas.clip()
      // 绘制一个填满画布的矩形
      ClipCanvas.fillStyle = 'red'
      ClipCanvas.beginPath()
      ClipCanvas.rect(0, 0, 500, 140)
      ClipCanvas.fill()
    },
    fontCanvas () {  // 绘制文本
      const FontCanvas = document.getElementById('font-canvas').getContext('2d')
      FontCanvas.fillStyle = 'lightgrey'
      FontCanvas.strokeStyle = 'black'
      FontCanvas.lineWidth = 3
      FontCanvas.font = '80px sans-serif'
      FontCanvas.fillText('Hello', 20, 100)  // fillText
      FontCanvas.strokeText('Hello', 270, 100)  // strokeText
    },
    effectsCanvas () {  // 使用特效和变换
      const EffectsCanvas = document.getElementById('effects-canvas').getContext('2d')
      EffectsCanvas.fillStyle = 'lightgrey'
      EffectsCanvas.strokeStyle = 'black'
      EffectsCanvas.lineWidth = 3
      EffectsCanvas.shadowOffsetX = 5  // 阴影水平偏移量
      EffectsCanvas.shadowOffsetY = 5  // 阴影垂直偏移量
      EffectsCanvas.shadowBlur = 5  // 阴影模糊程度
      EffectsCanvas.shadowColor = 'grey'  // 阴影的颜色
      // 设置文字
      EffectsCanvas.font = '90px sans-serif'
      EffectsCanvas.fillText('Hello', 10, 100)
      EffectsCanvas.strokeText('Hello', 10, 100)
      // 设置矩形
      EffectsCanvas.strokeRect(250, 20, 100, 100)
      // 设置圆弧
      EffectsCanvas.beginPath()
      EffectsCanvas.arc(420, 70, 50, 0, Math.PI, true)
      EffectsCanvas.stroke()
      EffectsCanvas.beginPath()
      EffectsCanvas.arc(420, 80, 40, 0, Math.PI, false)
      EffectsCanvas.fill()

      EffectsCanvas.globalCompositeOperation = 'destination-out'  // 使用合成
      EffectsCanvas.fillStyle = 'red'
      EffectsCanvas.globalAlpha = 0.5  // 使用透明度
      EffectsCanvas.fillRect(80, 20, 65, 100)
      // 使用变换
      EffectsCanvas.scale(0.9, 0.9)
      EffectsCanvas.translate(50, -103)
      EffectsCanvas.rotate(0.3)
      EffectsCanvas.globalCompositeOperation = 'source-over'  // 使用合成
      EffectsCanvas.fillStyle = 'green'
      EffectsCanvas.globalAlpha = 0.5  // 使用透明度
      EffectsCanvas.fillRect(300, 10, 160, 120)
    },
    initCanvas () {
      this.test()
      this.reactCanvas()
      this.drawingStateCanvas()
      this.linearGradientCanvas()
      this.radialGradientCanvas()
      this.patternCanvas()
      this.saveRestoreCanvas()
      this.drawImageCanvas()
      this.viedeCanvas()
      this.viedeCanvas2()
      this.viedeCanvas3()
      this.pathCanvas()
      this.arcToCanvas()
      this.arcToMouseMoveCanvas()
      this.arcCanvas()
      this.bezierCurveCanvas()
      this.quadraticCurveCanvas()
      this.clipCanvas()
      this.fontCanvas()
      this.effectsCanvas()
    }
  },
  mounted () {
    this.initCanvas()
  }
}
</script>

<style scoped>
  canvas {
    border: 1px solid black;
    margin-bottom: 10px;
  }
</style>
