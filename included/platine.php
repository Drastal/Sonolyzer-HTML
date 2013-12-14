<section class="platine">
	<div class="gainChannels">
    	<p class="gain">
        	+40dB
        </p>
    	<p class="gain">
        	0dB
        </p>
    	<p class="gain">
        	-40dB
        </p>
    </div>
    <a href="javascript:setAllSliderOff()" class="icon"><img src="img/reset.png" alt="reset"/></a>
    <div class="gainRange">
        <input type="range" class="vertical" id="gain1" name="gain1" value="50" min="0" max="100" step="1" onChange="changeFilterGain(0, this.value);">
        <input type="range" class="vertical" id="gain2" name="gain2" value="50" min="0" max="100" step="1" onChange="changeFilterGain(1, this.value);">
        <input type="range" class="vertical" id="gain3" name="gain3" value="50" min="0" max="100" step="1" onChange="changeFilterGain(2, this.value);">
        <input type="range" class="vertical" id="gain4" name="gain4" value="50" min="0" max="100" step="1" onChange="changeFilterGain(3, this.value);">
        <input type="range" class="vertical" id="gain5" name="gain5" value="50" min="0" max="100" step="1" onChange="changeFilterGain(4, this.value);">
        <input type="range" class="vertical" id="gain6" name="gain6" value="50" min="0" max="100" step="1" onChange="changeFilterGain(5, this.value);">
        <input type="range" class="vertical" id="gain7" name="gain7" value="50" min="0" max="100" step="1" onChange="changeFilterGain(6, this.value);">
        <input type="range" class="vertical" id="gain8" name="gain8" value="50" min="0" max="100" step="1" onChange="changeFilterGain(7, this.value);">
        <input type="range" class="vertical" id="gain9" name="gain9" value="50" min="0" max="100" step="1" onChange="changeFilterGain(8, this.value);">
        <input type="range" class="vertical" id="gain10" name="gain10" value="50" min="0" max="100" step="1" onChange="changeFilterGain(9, this.value);">
        <input type="range" class="vertical" id="gain11" name="gain11" value="50" min="0" max="100" step="1" onChange="changeFilterGain(10, this.value);">
    </div>
</section>

<section class="frequencyChannels">
    <p class="firstFrequency">
        16Hz
    </p>
    <p class="frequency">
        32Hz
    </p>
    <p class="frequency">
        64Hz
    </p>
    <p class="frequency">
        125Hz
    </p>
    <p class="frequency">
        250Hz
    </p>
    <p class="frequency">
        500Hz
    </p>
    <p class="frequency">
        1000Hz
    </p>
    <p class="frequency">
        2000Hz
    </p>
    <p class="frequency">
        4000Hz
    </p>
    <p class="frequency">
        8000Hz
    </p>
    <p class="frequency">
        16000Hz
    </p>
</section>