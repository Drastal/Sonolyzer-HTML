<section class="player">
    <span class="controls">
        <div class="play">
            <input type="checkbox" value="None" id="play" name="play" onChange="playPause('song');" />
            <label for="play"></label>
        </div>
        <div class="volumeControl">
            <form oninput="amount.value=volume.value">
                <span class="volumeMuter">
                    <input type="checkbox" value="None" id="mute" name="mute" onChange="muteVolume(this);" />
                    <label for="mute"></label>
                </span>
                <span class="volumeSlider">
                    <input type="range" class="horizon" min="0" max="100" step="1" value="100" id="volume" name="volume" onchange="slideVolume();">
                </span>
                <span class="volumeLevel">
                    <output name="amount" for="volume">&nbsp;</output>
                </span>
            </form>
        </div>
    </span>
    <span class="songSlider">
        <input type="range" step="any" id="seekbar" onchange="ChangeTheTime();">
    </span>
    <span class="songTimer">
        <label id="currentTime">--:--</label>
        <br />
        <label id="totalTime"></label>
    </span>

    <audio id="song" ontimeupdate="updateTime()" preload="auto" loop>
        <source type="audio/mpeg" <?php echo "src = " . $sound ?>>
    </audio>
</section>