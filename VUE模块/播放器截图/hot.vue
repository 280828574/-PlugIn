<template>
  <!--热门-->
  <div>
    <video id="video" controls="controls">
      <source src="/static/radio/111.mp4" />
    </video>
    <button id="capture" @click="changeIcon">Capture</button>
    <div id="output"></div>
  </div>
</template>

<script>
  import $ from 'jquery'
    export default {
        name: "hot",
      methods:{
          changeIcon:function () {
            "use strict";
            var video, $output;
            var scale = 0.25;
            var initialize = function() {
              $output = $("#output");
              video = $("#video").get(0);
              $("#capture").click(captureImage);
            };
            var captureImage = function() {
              var canvas = document.createElement("canvas");
              canvas.width = video.videoWidth * scale;
              canvas.height = video.videoHeight * scale;
              canvas.getContext('2d')
                .drawImage(video, 0, 0, canvas.width, canvas.height);
              var img = document.createElement("img");
              img.src = canvas.toDataURL();
              $output.prepend(img);
            };
            $(initialize);
          }
       }

    }
</script>

<style scoped>
  video{
    width: 100%;

  }
</style>
