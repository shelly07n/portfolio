<template>
    <div class="center">
        <div class="squares-container">
          <div class="squares">
            <div class="square"></div>
            <div class="square"></div>
            <div class="square"></div>
            <div class="square"></div>
          </div>
          <div class="reflection">
            <div class="squares squares-2">
              <div class="square"></div>
              <div class="square"></div>
              <div class="square"></div>
              <div class="square"></div>
            </div>
          </div>
        </div>
      </div>
</template>

<style lang="scss">
.center {
    height: 100%;
    padding: 0;
    margin: 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .squares-container {
    display: inline-block;
    position: relative;
  
    .squares {
      font-size: 10px;
      display: grid;
      grid-template-columns: 10em 10em;
      grid-row: auto auto;
      grid-gap: 4em;
      animation: rotateSquares 5s infinite ease-in-out;
      transform-origin: center center;
      position: relative;
  
      .square {
        position: relative;
        width: 10em;
        height: 10em;
        border-radius: 0 0 0 15em;
        animation: rotateSquare 5s infinite ease-in-out;
  
        &:after {
          position: absolute;
          content: "";
          border-radius: 50%;
          width: 10px;
          height: 10px;
          display: block;
          animation: ballGravity 5s infinite ease-in-out;
        }
      }
  
      $black: #fabc05;
      $yellow: #34a853;
      $orange: #ea4436;
      $blue: #4185f4;
  
      $squares: 1 $black $yellow, 2 $orange $black, 3 $yellow $blue,
        4 $blue $orange;
  
      @each $nth, $color, $dotColor in $squares {
        .square:nth-child(#{$nth}) {
          background: #{$color};
  
          &:after {
            background: #{$dotColor};
          }
        }
      }
  
      @keyframes rotateSquares {
        0% {
          transform: rotate(0deg);
          grid-gap: 4em;
        }
        10%, 35%, 60%, 85% {
          grid-gap: 8em;
        }
        20% {
          transform: rotate(90deg);
          grid-gap: 4em;
        }
        25% {
          transform: rotate(90deg);
          grid-gap: 4em;
        }
        45% {
          transform: rotate(180deg);
          grid-gap: 4em;
        }
        50% {
          transform: rotate(180deg);
          grid-gap: 4em;
        }
        70% {
          transform: rotate(270deg);
          grid-gap: 4em;
        }
        75% {
          transform: rotate(270deg);
          grid-gap: 4em;
        }
        95% {
          transform: rotate(360deg);
          grid-gap: 4em;
        }
        100% {
          transform: rotate(360deg);
          grid-gap: 4em;
        }
      }
    }
  
    @keyframes rotateSquare {
      0% {
        border-radius: 0 0 0 15em;
        transform: rotate(0deg);
      }
      15%,
      65% {
        border-radius: 0 15em 0 0;
      }
      20% {
        border-radius: 0 15em 0 0;
        transform: rotate(90deg);
      }
      25% {
        border-radius: 0 15em 0 0;
        transform: rotate(90deg);
      }
      40%,
      90% {
        border-radius: 0 0 0 15em;
      }
      45% {
        transform: rotate(180deg);
      }
      50% {
        border-radius: 0 0 0 15em;
        transform: rotate(180deg);
      }
  
      70% {
        transform: rotate(270deg);
      }
      75% {
        border-radius: 0 15em 0 0;
        transform: rotate(270deg);
      }
      95%,
      100% {
        transform: rotate(360deg);
      }
    }
  
    @keyframes ballGravity {
      0%,
      50%,
      100% {
        transform: translate(9em, 9em);
      }
      25%,
      75% {
        transform: translate(0, 0);
      }
    }
  
    .reflection {
      opacity: 0.3;
      filter: blur(1em);
      transform: rotate3d(1, 0, 0, 85deg);
      bottom: -13em;
      position: absolute;
    }
  }
  

</style>