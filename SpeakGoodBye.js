(function (window) {

  var byeSpeaker = {};
  var speakWord = "Good Bye";

  byeSpeaker.speak = function (byeSpeaker) {
    console.log(speakWord + " " + byeSpeaker)
  }

  window.byeSpeaker = byeSpeaker;

})(window);


