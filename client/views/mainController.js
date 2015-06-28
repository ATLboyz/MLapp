(function() {
    //'use strict';

    angular
      .module('app')
      .controller('mainController', mainControllerFunction);

    function mainControllerFunction($scope) {
        $scope.showTriangle = false;
        //add functions
        $scope.randomize = function(){
            //var rnd = Math.floor((Math.Random()*22)+1);
            $scope.showTriangle = true;


        };

        function getAudio(num) {

        }

        function getText(num){

        }

        var dic = {
            '1': {'sound': '\assets\audio\yeah1.mp3','text': '...yeah...'},
            '2': {'sound': '\assets\audio\wont get fined4.mp3','text': 'I\'m just here so I wont get fined...'},
            '3': {'sound': '\assets\audio\try again.mp3','text': 'Y\'all wanna try again huh?'},
            '4': {'sound': '\assets\audio\try again2.mp3','text': 'So y\'all gonna try again that\'s what we gonna do we gonna try one more time?'},
            '5': { 'sound': '\assets\audio\thats a yes.mp3', 'text': 'Oh that\'s a yes' },
            '6': { 'sound': '\assets\audio\stay on earth.mp3', 'text': 'I\'ll stay right here on earph' },
            '7': { 'sound': '\assets\audio\shout outs.mp3', 'text': 'Shot out to my real African\'s out dair' },
            '8': { 'sound': '\assets\audio\on dec 14.mp3', 'text': 'On December 14' },
            '9': { 'sound': '\assets\audio\okay hold on 1 sec.mp3', 'text': 'Okay hold on one sec' },
            '10': { 'sound': '\assets\audio\not at all.mp3', 'text': 'Not at all' },
            '11': { 'sound': '\assets\audio\no juice.mp3', 'text': 'No juice' },
            '12': { 'sound': '\assets\audio\just bout that action.mp3', 'text': 'I\'m just about that action boss...' },
            '13': { 'sound': '\assets\audio\idk1.mp3', 'text': 'I don\'t know' },
            '14': { 'sound': '\assets\audio\i got a foundation dinner.mp3', 'text': 'I got a foundation dinner at the Edgewater' },
            '15': { 'sound': '\assets\audio\hang out with nobody.mp3', 'text': 'I wouldn\'t wanna hang out with nobody who talk\'s' },
            '16': { 'sound': '\assets\audio\cat.mp3', 'text': 'I\'ll watch the cat...' },
            '17': { 'sound': '\assets\audio\beastmode.mp3', 'text': 'www.beastmodeonline.com' },
            '18': { 'sound': '\assets\audio\at all.mp3', 'text': 'At all' },
            '19': { 'sound': '\assets\audio\apreesh2.mp3', 'text': 'I apreciatechu aksin bout my stomach thank you' },
            '20': { 'sound': '\assets\audio\all of em.mp3', 'text': 'All of \'em' },
            '21': {'sound': '\assets\audio\20 sec.mp3','text': 'I got 20 second'},
            '22': {'sound': '\assets\audio\1 more min.mp3','text': 'Y\'all got another minute to look at me tho'}
        }



        $scope.test = 'Testing!!!';
      }; 
})();