<template>
  <div class="back-card">
    <div class="back-pattern-wrapper">
      <div class="back-inner-pattern-wrapper">
        <div class="circle top-left"></div>
        <div class="circle top-right"></div>
        <div class="circle bottom-left"></div>
        <div class="circle bottom-right"></div>
      </div>
    </div>
</div>
</template>

<script>

  export default {
    name: 'back-card'
  }

</script>

<style>

  .back-card {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-items: center;
    transform: rotateY(180deg) translateZ(1px);
    background: #ffffff;
    background: -moz-radial-gradient(center, ellipse cover, #ffffff 60%, #fffce5 100%);
    background: -webkit-radial-gradient(center, ellipse cover, #ffffff 60%,#fffce5 100%);
    background: radial-gradient(ellipse at center, #ffffff 60%,#fffce5 100%);
    border-radius: 0.5em;
  }

  .side.back {
    transform: rotateY(180deg) translateZ(1px);
    background: #ffffff;
  }

  .back-pattern-wrapper {
    width: 90%;
    height: 90%;
    border: 2px dotted #c33;
    border-radius: 0.3em;
    position: relative;
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-items: center;
  }

  .back-pattern-wrapper .circle {
    width: 1em;
    height: 1em;
    display: inline-block;
    position: absolute;
    background: white;
  }

  .back-pattern-wrapper .circle:after {
    content: '';
    position: absolute;
    width: 0.5em;
    height: 0.5em;
    border-radius: 50%;
    background-color: #c33;
  }

  .back-pattern-wrapper .circle.top-left {
    top: -1px;
    left: -1px;
    border-bottom: 1px solid #c33;
    border-right: 1px solid #c33;
    border-bottom-right-radius: 1em;
  }

  .back-pattern-wrapper .circle.top-left:after {
    top: 0;
    left: 0;
  }

  .back-pattern-wrapper .circle.top-right {
    top: -1px;
    right: -1px;
    border-left: 1px solid #c33;
    border-bottom: 1px solid #c33;
    border-bottom-left-radius: 1em;
  }

  .back-pattern-wrapper .circle.top-right:after {
    top: 0;
    right: 0;
  }

  .back-pattern-wrapper .circle.bottom-left {
    bottom: -1px;
    left: -1px;
    border-right: 1px solid #c33;
    border-top: 1px solid #c33;
    border-top-right-radius: 1em;
  }

  .back-pattern-wrapper .circle.bottom-left:after {
    left: 0;
    bottom: 0;
  }

  .back-pattern-wrapper .circle.bottom-right {
    bottom: -1px;
    right: -1px;
    border-top: 1px solid #c33;
    border-left: 1px solid #c33;
    border-top-left-radius: 1em;
  }

  .back-pattern-wrapper .circle.bottom-right:after {
    right: 0;
    bottom: 0;
  }

  .back-inner-pattern-wrapper {
    position: absolute;
    width: 90%;
    height: 90%;
    border: 1px solid #c33;
    background: #f5d6d6;
    background: linear-gradient(135deg, rgba(255,255,255,.8) 25%, transparent 25%) 0 0, linear-gradient(225deg, rgba(255,255,255,.8) 25%, transparent 25%), linear-gradient(45deg, rgba(255,255,255,.8) 25%, transparent 25%), linear-gradient(315deg, rgba(255,255,255,.8) 25%, transparent 25%), #c33;
    background-size: 12px 12px;
  }
</style>
