angular.module('MyApp.Exercise')

.value("pianoKeys", [{interval: "Perfect Unison", class: "ivory", note: "C"}, {interval: "Minor 2nd", class: "ebony", note: "C#/Db"},
	{interval: "Major 2nd", class: "ivory", note: "D"},{interval: "Minor 3rd", class: "ebony", note: "D#/Eb"}, 
	{interval: "Major 3rd", class: "ivory", note: "E"}, {interval: "Perfect 4th", class: "ivory", note: "F"},
	{interval: "Dim. 5th", class: "ebony", note: "F#/Gb"}, {interval: "Perfect 5th", class: "ivory", note: "G"}, 
	{interval: "Minor 6th", class: "ebony", note: "G#/Ab"}, {interval: "Major 6th", class: "ivory", note: "A"},
	{interval: "Minor 7th", class: "ebony", note: "A#/Bb"}, {interval: "Major 7th", class: "ivory", note: "B"}, 
	{interval: "Perfect Octave", class: "ivory", note: "C"},{interval: "Minor 9th", class: "ebony", note: "C#/Db"},
	{interval: "Major 9th", class: "ivory", note: "D"}, {interval: "Minor 10th", class: "ebony", note: "D#/Eb"},
	{interval: "Major 10th", class: "ivory", note: "E"}, {interval: "Perfect 11th", class: "ivory", note: "F"},
	{interval: "Dim. 12th", class: "ebony", note: "F#/Gb"}, {interval: "Perfect 12th", class: "ivory", note: "G"}, 
	{interval: "Minor 13th", class: "ebony", note: "G#/Ab"}, {interval: "Major 13th", class: "ivory", note: "A"},
	{interval: "Minor 14th", class: "ebony", note: "A#/Bb"}, {interval: "Major 14th", class: "ivory", note: "B"}, 
	{interval: "Perfect 15th", class: "ivory", note: "C"}]
);