(function() {
    //'use strict';

    angular
      .module('app')
      .controller('mainController', mainControllerFunction);

    function mainControllerFunction($scope, sfx) {
        $scope.showTriangle = false;
        $scope.sfx = sfx;

        //add functions
        $scope.randomize = function(){
            $scope.showTriangle = true;
            var rnd = JSON.stringify(Math.floor((Math.random()*22)+1));
            // dic has stringified numbers for property names
            getAudio(rnd);
            getText(rnd);
        };

        var getAudio = function(num) {
            dic[num]['sound'].play();
        }

        var getText = function(num){
            console.log(dic[num]['text']);
        }

        var dic = {
            '1': {'sound': sfx['1'],'text': '...yeah...'},
            '2': {'sound': sfx['2'],'text': 'I\'m just here so I wont get fined...'},
            '3': {'sound': sfx['3'],'text': 'Y\'all wanna try again huh?'},
            '4': {'sound': sfx['4'],'text': 'So y\'all gonna try again that\'s what we gonna do we gonna try one more time?'},
            '5': { 'sound': sfx['5'], 'text': 'Oh that\'s a yes' },
            '6': { 'sound': sfx['6'], 'text': 'I\'ll stay right here on earph' },
            '7': { 'sound': sfx['7'], 'text': 'Shot out to my real African\'s out dair' },
            '8': { 'sound': sfx['8'], 'text': 'On December 14' },
            '9': { 'sound': sfx['9'], 'text': 'Okay hold on one sec' },
            '10': { 'sound': sfx['10'], 'text': 'Not at all' },
            '11': { 'sound': sfx['11'], 'text': 'No juice' },
            '12': { 'sound': sfx['12'], 'text': 'I\'m just about that action boss...' },
            '13': { 'sound': sfx['13'], 'text': 'I don\'t know' },
            '14': { 'sound': sfx['14'], 'text': 'I got a foundation dinner at the Edgewater' },
            '15': { 'sound': sfx['15'], 'text': 'I wouldn\'t wanna hang out with nobody who talk\'s' },
            '16': { 'sound': sfx['16'], 'text': 'I\'ll watch the cat...' },
            '17': { 'sound': sfx['17'], 'text': 'www.beastmodeonline.com' },
            '18': { 'sound': sfx['18'], 'text': 'At all' },
            '19': { 'sound': sfx['19'], 'text': 'I apreciatechu aksin bout my stomach thank you' },
            '20': { 'sound': sfx['20'], 'text': 'All of \'em' },
            '21': { 'sound': sfx['21'],'text': 'I got 20 second'},
            '22': { 'sound': sfx['22'],'text': 'Y\'all got another minute to look at me tho'}
        }
      }; 
})();