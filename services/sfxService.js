(function() {
    'use strict';

    angular
      .module('app')
      .factory('sfx', function (ngAudio) {
        // This service is designed to give all controllers access to all music/sound effects
        return {
            "1": ngAudio.load('../assets/audio/yeah1.mp3'),
            "2": ngAudio.load('../assets/audio/wont get fined4.mp3'),
            "3": ngAudio.load('../assets/audio/try again.mp3'),
            "4": ngAudio.load('../assets/audio/try again 2.mp3'),
            "5": ngAudio.load('../assets/audio/thats a yes.mp3'),
            "6": ngAudio.load('../assets/audio/stay on earth.mp3'),
            "7": ngAudio.load('../assets/audio/shout outs.mp3'),
            "8": ngAudio.load('../assets/audio/on dec 14.mp3'),
            "9": ngAudio.load('../assets/audio/okay hold on 1 sec.mp3'),
            "10": ngAudio.load('../assets/audio/not at all.mp3'),
            "11": ngAudio.load('../assets/audio/no juice.mp3'),
            "12": ngAudio.load('../assets/audio/just bout that action.mp3'),
            "13": ngAudio.load('../assets/audio/idk1.mp3'),
            "14": ngAudio.load('../assets/audio/i got a foundation dinner.mp3'),
            "15": ngAudio.load('../assets/audio/hang out with nobody.mp3'),
            "16": ngAudio.load('../assets/audio/cat.mp3'),
            "17": ngAudio.load('../assets/audio/beastmode.mp3'),
            "18": ngAudio.load('../assets/audio/at all.mp3'),
            "19": ngAudio.load('../assets/audio/apreesh2.mp3'),
            "20": ngAudio.load('../assets/audio/all of em.mp3'),
            "21": ngAudio.load('../assets/audio/20 sec.mp3'),
            "22": ngAudio.load('../assets/audio/1 more min.mp3')
        };
      });
})();