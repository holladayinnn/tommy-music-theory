/* global malarkey:false, moment:false */
(function() {
  'use strict';

  angular
    .module('template')
    .constant('STATES', {
        kHomeState:'home',
        kFreeplayState:'freeplay',
        kLessonState:'lessons',
        kExerciseState:'exercises',
        kContactState:'contact',
        kAuthState:'auth',

    	//Lesson child states
        kCh1State:'lessons.ch1',
        kCh2State:'lessons.ch2',
        kCh3State:'lessons.ch3',

        //Chapter 1 Child states
    	kNoteState:'lessons.ch1.note',
        kStepState:'lessons.ch1.step',
        kIntervalState:'lessons.ch1.interval',
        kScaleState:'lessons.ch1.scale',
        kMajorScaleState:'lessons.ch1.majorScale',
    	kDiatonicIntervalState:'lessons.ch1.diatonicInterval',

        //Chapter 2 Child states
        kChromaticIntervalState:'lessons.ch2.chromaticInterval',

        //Exercise Child States
        kETIntervalState:'exercises.interval',
        kLeaderboardState:'exercises.leader',
        kSongTrainerState:'exercises.song',

        //Contact Child States
        kContactLessonState:'contact.lessons',
        kFeedbackState:'contact.feedback',
        kDonateState:'contact.donate',

        //Auth Child States
        kLoginState:'auth.login',
        kRegisterState:'auth.register'

    });

})();
