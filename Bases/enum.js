"use strict";
(() => {
    let AudioLevel;
    (function (AudioLevel) {
        AudioLevel[AudioLevel["min"] = 1] = "min";
        AudioLevel[AudioLevel["medium"] = 5] = "medium";
        AudioLevel[AudioLevel["max"] = 10] = "max";
    })(AudioLevel || (AudioLevel = {}));
    const currentAudio = AudioLevel.medium;
    const minAudio = AudioLevel.min;
    const maxAudio = AudioLevel.max;
    console.log(currentAudio);
    console.log(minAudio);
    console.log(maxAudio);
    console.table(AudioLevel);
})();
