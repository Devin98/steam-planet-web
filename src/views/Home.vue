<template>
  <div id="home">
    <canvas id="canvas" class="canvas"></canvas>
    <img src="../assets/steam-planet-logo.png" class="myself">
    <div class="button topic">话题</div>
    <div class="button friend">交友</div>
    <div class="button radio">电台</div>
    <div class="button song">歌单</div>
    <div class="button music">音乐</div>

  </div>

</template>

<script>
// @ is an alias to /src
import Vue from "vue";
import { Button } from "vant";

Vue.use(Button);

export default {
  name: "Home",
  data() {
    return {};
  },
  mounted() {
    var canvas = document.querySelector("canvas"),
      ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    ctx.lineWidth = 0.3;
    ctx.strokeStyle = new Color(150).style;

    var mousePosition = {
      x: canvas.width - 100,
      y: canvas.height - 60
    };

    var dots = {
      nb: 50,
      distance: 100,
      d_radius: 150,
      array: []
    };

    function colorValue(min) {
      return Math.floor(Math.random() * 255 + min);
    }

    function createColorStyle(r, g, b) {
      return "rgba(" + r + "," + g + "," + b + ", 0.8)";
    }

    function mixComponents(comp1, weight1, comp2, weight2) {
      return (comp1 * weight1 + comp2 * weight2) / (weight1 + weight2);
    }

    function averageColorStyles(dot1, dot2) {
      var color1 = dot1.color,
        color2 = dot2.color;

      var r = mixComponents(color1.r, dot1.radius, color2.r, dot2.radius),
        g = mixComponents(color1.g, dot1.radius, color2.g, dot2.radius),
        b = mixComponents(color1.b, dot1.radius, color2.b, dot2.radius);
      return createColorStyle(Math.floor(r), Math.floor(g), Math.floor(b));
    }

    function Color(min) {
      min = min || 0;
      this.r = colorValue(min);
      this.g = colorValue(min);
      this.b = colorValue(min);
      this.style = createColorStyle(this.r, this.g, this.b);
    }

    function Dot() {
      this.x = Math.random() * canvas.width;
      this.y = Math.random() * canvas.height;

      this.vx = -0.5 + Math.random();
      this.vy = -0.5 + Math.random();

      this.radius = Math.random() * 2;

      this.color = new Color();
    }

    Dot.prototype = {
      draw: function() {
        ctx.beginPath();
        ctx.fillStyle = this.color.style;
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        ctx.fill();
      }
    };

    function createDots() {
      for (var i = 0; i < dots.nb; i++) {
        dots.array.push(new Dot());
      }
    }

    function moveDots() {
      for (var i = 0; i < dots.nb; i++) {
        var dot = dots.array[i];

        if (dot.y < 0 || dot.y > canvas.height) {
          dot.vx = dot.vx;
          dot.vy = -dot.vy;
        } else if (dot.x < 0 || dot.x > canvas.width) {
          dot.vx = -dot.vx;
          dot.vy = dot.vy;
        }
        dot.x += dot.vx;
        dot.y += dot.vy;
      }
    }

    function connectDots() {
      for (var i = 0; i < dots.nb; i++) {
        for (var j = 0; j < dots.nb; j++) {
          var i_dot = dots.array[i];
          var j_dot = dots.array[j];

          if (
            i_dot.x - j_dot.x < dots.distance &&
            i_dot.y - j_dot.y < dots.distance &&
            i_dot.x - j_dot.x > -dots.distance &&
            i_dot.y - j_dot.y > -dots.distance
          ) {
            if (
              i_dot.x - mousePosition.x < dots.d_radius &&
              i_dot.y - mousePosition.y < dots.d_radius &&
              i_dot.x - mousePosition.x > -dots.d_radius &&
              i_dot.y - mousePosition.y > -dots.d_radius
            ) {
              ctx.beginPath();
              ctx.strokeStyle = averageColorStyles(i_dot, j_dot);
              ctx.moveTo(i_dot.x, i_dot.y);
              ctx.lineTo(j_dot.x, j_dot.y);
              ctx.stroke();
              ctx.closePath();
            }
          }
        }
      }
    }

    function drawDots() {
      for (var i = 0; i < dots.nb; i++) {
        var dot = dots.array[i];
        dot.draw();
      }
    }

    function animateDots() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      moveDots();
      connectDots();
      drawDots();

      requestAnimationFrame(animateDots);
    }

    //----------------------跟着鼠标动--------------------
    document.getElementById("home").addE


    ventListener("mousemove", function(e) {
      mousePosition.x = e.pageX;
      mousePosition.y = e.pageY;
    });

    document.getElementById("home").addEventListener("mouseleave", function(e) {
      mousePosition.x = canvas.width / 2;
      mousePosition.y = canvas.height / 2;
    });
    //----------------------跟着鼠标动--------------------

    createDots();
    requestAnimationFrame(animateDots);
  },
  components: {},
  methods: {}
};
</script>


<style lang="less" scoped>
#home {
  width: 100vw;
  height: 100vh;
  color: #fff;
  background: rgba(7, 17, 27, 0.95);

  .canvas {
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    z-index: 1;
  }

  img{
    float: left;
    position: absolute;
    top: 200px;
    left: 90px;
    width:50%;
    background-position: center center;
    animation: shake 30s ease-in-out infinite;
  }

  .button{
    color: lightgoldenrodyellow;
    position: absolute;
    top:0;
    left:0;
    width: 50px;
    border: 2px white solid;
    text-align: center;
    vertical-align: middle;
    padding: 2px;


  }

  .topic{
    position: absolute;
    top: 180px;
    left: 100px;
    animation: shake 20s ease-in-out infinite;

  }

  .friend{
    position: absolute;
    top: 290px;
    left: 20px;
    animation: shake 22s ease-in-out infinite;

  }

  .radio{
    position: absolute;
    top: 220px;
    left: 280px;
    animation: shake 10s ease-in-out infinite;


  }

  .song{
    position: absolute;
    top: 340px;
    left: 255px;
    animation: shake 25s ease-in-out infinite;



  }

  .music{
    position: absolute;
    top: 365px;
    left: 110px;
    animation: shake 15s ease-in-out infinite;

  }


  @keyframes shake {
    0%{
      /*transform-origin: 50% 0;*/
      transform: rotate(90deg);
     transform: translate(-5px -3px);
    }
    20%{
      /*transform-origin: 50% 0;*/
      transform: rotate(180deg);
      transform: translate(-10px -6px);
    }
    40%{
      /*transform-origin: 50% 0;*/
      transform: rotate(0deg);
      transform: translate(0px 0px);
    }
    60%{
      /*transform-origin: 50% 0;*/
      transform: rotate(-90deg);
      transform: translate(5px 3px);
    }
    80%{
      /*transform-origin: 50% 0;*/
      transform: rotate(-180deg);
      transform: translate(10px 6px);
    }
    100%{
      /*transform-origin: 50% 0;*/
      transform: rotate(0deg);
      transform: translate(0px 0px);
    }
  }



}
</style>





