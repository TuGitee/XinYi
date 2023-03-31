<template>
  <div>
    <canvas></canvas>
  </div>
</template>

<script>
export default {
  mounted() {
    const canvas = document.querySelector("canvas");
    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth * devicePixelRatio;
    canvas.height = window.innerHeight * devicePixelRatio;
    class point {
      constructor(x, y, radius, color) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.color = color;
        this.xSpeed = Math.random() - 0.5;
        this.ySpeed = Math.random() - 0.5;
      }
      draw() {
        ctx.beginPath();
        this.x += this.xSpeed;
        this.y += this.ySpeed;

        if (this.x + this.radius > canvas.width || this.x - this.radius < 0) {
          this.xSpeed = -this.xSpeed;
        }
        if (this.y + this.radius > canvas.height || this.y - this.radius < 0) {
          this.ySpeed = -this.ySpeed;
        }

        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        ctx.fillStyle = this.color;
        ctx.fill();
        ctx.closePath();

        for (let i = 0; i < points.length; i++) {
          let distant = Math.sqrt(
            Math.pow(this.x - points[i].x, 2) +
              Math.pow(this.y - points[i].y, 2)
          );
          if (distant < 200) {
            ctx.beginPath();
            ctx.moveTo(this.x, this.y);
            ctx.lineTo(points[i].x, points[i].y);
            ctx.strokeStyle = this.color;
            ctx.globalAlpha = 1 - distant / 200;
            ctx.stroke();
            ctx.globalAlpha = 1;
            ctx.closePath();
          }
        }
      }
    }

    const PointCount = 50;
    const points = [];
    for (let i = 0; i < PointCount; i++) {
      points.push(
        new point(
          Math.random() * canvas.width,
          Math.random() * canvas.height,
          5,
          "#a47aff"
        )
      );
    }
    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      points.forEach((point) => {
        point.draw();
      });
      requestAnimationFrame(animate);
    }
    animate();

    window.addEventListener("click", (e) => {
      let x = e.clientX * devicePixelRatio;
      let y = e.clientY * devicePixelRatio;
      points.push(new point(x, y, 5, "#a47aff"));
    });

    window.addEventListener("resize", () => {
      canvas.width = window.innerWidth * devicePixelRatio;
      canvas.height = window.innerHeight * devicePixelRatio;
    });

    window.addEventListener("touchstart", (e) => {
      let x = e.touches[0].clientX * devicePixelRatio;
      let y = e.touches[0].clientY * devicePixelRatio;
      points.push(new point(x, y, 5, "#a47aff"));
    });
  },
};
</script>

<style lang="less" scoped>
* {
  margin: 0;
  padding: 0;
  overflow: hidden;
  div {
    display: block;
    &::after {
      content: "";
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: #fffc;
      background-size: 200% 200%;
      z-index: -999;
    }
    canvas {
      display: block;
      height: 100%;
      width: 100%;
      background-color: white;
      position: fixed;
      top: 0;
      left: 0;
      z-index: -9999;
    }
  }
}
</style>