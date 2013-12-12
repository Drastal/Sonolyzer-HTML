<section class="filters">
    <div class="filterType">
        <h3 class="filterTitle">Voix</h3>
        <div class="doubleFilter">
            <span class="choiceLeft">
                Intensifier
            </span>
            <span class="switchTwin">
                <div class="switch">
                    <input type="checkbox" name="voiceLevel" class="switch-checkbox" id="voiceLevel" onchange="voice_filter();">
                    <label class="switch-label" for="voiceLevel">
                        <div class="switch-inner"></div>
                        <div class="switch-switch"></div>
                    </label>
                </div>
            </span>
            <span class="choiceRight">
                R&eacute;duire
            </span>
            <span class="activeFilter">
                <input type="checkbox" value="None" id="activeLevel" name="activeVoice" onchange="voice_filter();"/>
                <label for="activeLevel"></label>
            </span>
        </div>
        <div class="doubleFilter">
            <span class="choiceLeft">
                Aigues
            </span>
            <span class="switchTwin">
                <div class="switch">
                    <input type="checkbox" name="voiceType" class="switch-checkbox" id="voiceType" onchange="voice_filter();">
                    <label class="switch-label" for="voiceType">
                        <div class="switch-inner"></div>
                        <div class="switch-switch"></div>
                    </label>
                </div>
            </span>
            <span class="choiceRight">
                Graves
            </span>
            <span class="activeFilter">
                <input type="checkbox" value="None" id="activeType" name="activeVoice" onchange="voice_filter();" />
                <label for="activeType"></label>
            </span>
        </div>
    </div>
    <div class="filterNoise">
        <h3 class="filterTitle">R&eacute;duction de bruit</h3>
        <div class="singleFilter">
            <span class="label">
                Interf&eacute;rences GSM
            </span>
            <span class="checkBox">
                <span class="activeFilter">
                    <input type="checkbox" value="None" id="activeGSM" name="activeGSM" onchange="noise_activeGSM_checked();" />
                    <label for="activeGSM"></label>
                </span>
            </span>
        </div>
    
    </div>
    <div class="filterType">
        <h3 class="filterTitle">Personnalis&eacute;s</h3>
        <div class="doubleFilter">
            <span class="choiceLeft">
                Passe-haut
            </span>
            <span class="switchTwin">
                <div class="switch">
                    <input type="checkbox" name="passeFilter" class="switch-checkbox" id="passeFilter" onchange="filtre_perso();">
                    <label class="switch-label" for="passeFilter">
                        <div class="switch-inner"></div>
                        <div class="switch-switch"></div>
                    </label>
                </div>
            </span>
            <span class="choiceRight">
                Passe-bas
            </span>
            <span class="activeFilter">
    
                <input type="checkbox" value="None" id="activePass" name="activePerso" onChange="checkboxMax1(this, 'activePerso'), filtre_perso();" />
    
                <label for="activePass"></label>
            </span>
        </div>
        <div class="frequencyRange">
            <form oninput="amount.value=rangePass.value">
    
                <input type="range" class="horizon" id="rangePass" name="rangePass" value="50" min="20" max="3000" step="10" onchange="filtre_perso();">
    
                <span class="smallerToRight">
                    f<sub>C</sub> = 
                    <div class="output">
                        <output name="amount" for="rangePass">?</output>
                    </div>
                    kHz
                </span>
            </form>
        </div>
        <div class="doubleFilter">
            <span class="choiceLeft">
                Passe-bande
            </span>
            <span class="switchTwin">
                <div class="switch">
                    <input type="checkbox" name="bandeFilter" class="switch-checkbox" id="bandeFilter" onChange="filtre_perso();">
                    <label class="switch-label" for="bandeFilter">
                        <div class="switch-inner"></div>
                        <div class="switch-switch"></div>
                    </label>
                </div>
            </span>
            <span class="choiceRight">
                Coupe-bande
            </span>
            <span class="activeFilter">
    
                <input type="checkbox" value="None" id="activeBand" name="activePerso" onChange="checkboxMax1(this, 'activePerso'), filtre_perso();" />
    
                <label for="activeBand"></label>
            </span>
        </div>
        <div class="frequencyRange">
            <form oninput="amount.value=rangeLowBand.value">
                <input type="range" class="horizon" id="rangeLowBand" name="rangeLowBand" value="50" min="20" max="5000" step="10" onchange="filtre_perso();">
                <span class="smallerToRight">
                    f<sub>Cb</sub> = 
                    <div class="output">
                        <output name="amount" for="rangeLowBand">?</output>
                    </div>
                    kHz
                </span>
            </form>
        </div>
        <div class="frequencyRange">
            <form oninput="amount.value=rangeHighBand.value">
                <input type="range" class="horizon" id="rangeHighBand" name="rangeHighBand" value="50" min="20" max="5000" step="10" onchange="filtre_perso();">
                <span class="smallerToRight">
                    f<sub>Ch</sub> = 
                    <div class="output">
                        <output name="amount" for="rangeHighBand">?</output>
                    </div>
                    kHz
                </span>
            </form>
        </div>
    </div>
</section>