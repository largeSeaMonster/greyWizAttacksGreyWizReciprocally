const $viewportBackground = document.body;

var blueWizPcBackground = () => {
    $viewportBackground.setAttribute("class", "blueWizBackgroundColor")    
}

var greyWizPcBackground = () => {
    $viewportBackground.setAttribute("class", "greyWizBackgroundColor")    
}

var redWizPcBackground = () => {
    $viewportBackground.setAttribute("class", "redWizBackgroundColor")    
}

const $whiteBackground = document.getElementById("whiteBackground");

//pc blueWiz

//archie placeholder
const $blueWizArmPcAttackLeft = document.getElementById("blueWizArmPcAttackLeft");
const $blueWizArmPcAttackRight = document.getElementById("blueWizArmPcAttackRight");
const $blueWizArmPcDefaultLeft = document.getElementById("blueWizArmPcDefaultLeft");
const $blueWizArmPcDefaultRight = document.getElementById("blueWizArmPcDefaultRight");
const $blueWizArmPcDefendLeft = document.getElementById("blueWizArmPcDefendLeft");
const $blueWizArmPcDefendRight = document.getElementById("blueWizArmPcDefendRight");
const $blueWizArmPcClenchLeft = document.getElementById("blueWizArmPcClenchLeft");
const $blueWizArmPcClenchRight = document.getElementById("blueWizArmPcClenchRight");
const $blueWizPcWithoutArmsOrArchimedes = document.getElementById("blueWizPcWithoutArmsOrArchimedes");
const $magicMissile_0PcLeft = document.getElementById("magicMissile_0PcLeft");
const $magicMissile_0PcRight = document.getElementById("magicMissile_0PcRight");
const $magicMissile_1PcLeft = document.getElementById("magicMissile_1PcLeft");
const $magicMissile_1PcRight = document.getElementById("magicMissile_1PcRight");
const $magicMissile_2PcLeft = document.getElementById("magicMissile_2PcLeft");
const $magicMissile_2PcRight = document.getElementById("magicMissile_2PcRight");
const $magicMissile_3PcLeft = document.getElementById("magicMissile_3PcLeft");
const $magicMissile_3PcRight = document.getElementById("magicMissile_3PcRight");
const $magicMissileCondensation_0PcLeft = document.getElementById("magicMissileCondensation_0PcLeft");
const $magicMissileCondensation_0PcRight = document.getElementById("magicMissileCondensation_0PcRight");
const $magicMissileCondensation_1PcLeft = document.getElementById("magicMissileCondensation_1PcLeft");
const $magicMissileCondensation_1PcRight = document.getElementById("magicMissileCondensation_1PcRight");
const $magicMissileCondensation_2PcLeft = document.getElementById("magicMissileCondensation_2PcLeft");
const $magicMissileCondensation_2PcRight = document.getElementById("magicMissileCondensation_2PcRight");
const $magicMissileCondensation_3PcLeft = document.getElementById("magicMissileCondensation_3PcLeft");
const $magicMissileCondensation_3PcRight = document.getElementById("magicMissileCondensation_3PcRight");
const $magicMissileCondensation_4PcLeft = document.getElementById("magicMissileCondensation_4PcLeft");
const $magicMissileCondensation_4PcRight = document.getElementById("magicMissileCondensation_4PcRight");
const $magicMissileCondensation_5PcLeft = document.getElementById("magicMissileCondensation_5PcLeft");
const $magicMissileCondensation_5PcRight = document.getElementById("magicMissileCondensation_5PcRight");
const $magicMissilePcDefendedLeft = document.getElementById("magicMissilePcDefendedLeft");
const $magicMissilePcDefendedRight = document.getElementById("magicMissilePcDefendedRight");
const $magicMissileSplosionPcDefendedLeft = document.getElementById("magicMissileSplosionPcDefendedLeft");
const $magicMissileSplosionPcDefendedRight = document.getElementById("magicMissileSplosionPcDefendedRight");
const $magicMissileSplosionPcLeft = document.getElementById("magicMissileSplosionPcLeft");
const $magicMissileSplosionPcRight = document.getElementById("magicMissileSplosionPcRight");
const $star_0PcLeft = document.getElementById("star_0PcLeft");
const $star_0PcRight = document.getElementById("star_0PcRight");
const $star_1PcLeft = document.getElementById("star_1PcLeft");
const $star_1PcRight = document.getElementById("star_1PcRight");
const $star_2PcLeft = document.getElementById("star_2PcLeft");
const $star_2PcRight = document.getElementById("star_2PcRight");
const $star_3PcLeft = document.getElementById("star_3PcLeft");
const $star_3PcRight = document.getElementById("star_3PcRight");
const $star_4PcLeft= document.getElementById("star_4PcLeft");
const $star_4PcRight= document.getElementById("star_4PcRight");

//npc blueWiz

//archie placeholder
const $blueWizArmNpcAttackLeft = document.getElementById("blueWizArmNpcAttackLeft");
const $blueWizArmNpcAttackRight = document.getElementById("blueWizArmNpcAttackRight");
const $blueWizArmNpcDefaultLeft = document.getElementById("blueWizArmNpcDefaultLeft");
const $blueWizArmNpcDefaultRight = document.getElementById("blueWizArmNpcDefaultRight");
const $blueWizArmNpcDefendLeft = document.getElementById("blueWizArmNpcDefendLeft");
const $blueWizArmNpcDefendRight = document.getElementById("blueWizArmNpcDefendRight");
const $blueWizArmNpcClenchLeft = document.getElementById("blueWizArmNpcClenchLeft");
const $blueWizArmNpcClenchRight = document.getElementById("blueWizArmNpcClenchRight");
const $blueWizNpcWithoutArmsOrArchimedes = document.getElementById("blueWizNpcWithoutArmsOrArchimedes");
const $magicMissile_0NpcLeft = document.getElementById("magicMissile_0NpcLeft");
const $magicMissile_0NpcRight = document.getElementById("magicMissile_0NpcRight");
const $magicMissile_1NpcLeft = document.getElementById("magicMissile_1NpcLeft");
const $magicMissile_1NpcRight = document.getElementById("magicMissile_1NpcRight");
const $magicMissile_2NpcLeft = document.getElementById("magicMissile_2NpcLeft");
const $magicMissile_2NpcRight = document.getElementById("magicMissile_2NpcRight");
const $magicMissile_3NpcLeft = document.getElementById("magicMissile_3NpcLeft");
const $magicMissile_3NpcRight = document.getElementById("magicMissile_3NpcRight");
const $magicMissileCondensation_0NpcLeft = document.getElementById("magicMissileCondensation_0NpcLeft");
const $magicMissileCondensation_0NpcRight = document.getElementById("magicMissileCondensation_0NpcRight");
const $magicMissileCondensation_1NpcLeft = document.getElementById("magicMissileCondensation_1NpcLeft");
const $magicMissileCondensation_1NpcRight = document.getElementById("magicMissileCondensation_1NpcRight");
const $magicMissileCondensation_2NpcLeft = document.getElementById("magicMissileCondensation_2NpcLeft");
const $magicMissileCondensation_2NpcRight = document.getElementById("magicMissileCondensation_2NpcRight");
const $magicMissileCondensation_3NpcLeft = document.getElementById("magicMissileCondensation_3NpcLeft");
const $magicMissileCondensation_3NpcRight = document.getElementById("magicMissileCondensation_3NpcRight");
const $magicMissileCondensation_4NpcLeft = document.getElementById("magicMissileCondensation_4NpcLeft");
const $magicMissileCondensation_4NpcRight = document.getElementById("magicMissileCondensation_4NpcRight");
const $magicMissileCondensation_5NpcLeft = document.getElementById("magicMissileCondensation_5NpcLeft");
const $magicMissileCondensation_5NpcRight = document.getElementById("magicMissileCondensation_5NpcRight");
const $magicMissileNpcDefendedLeft = document.getElementById("magicMissileNpcDefendedLeft");
const $magicMissileNpcDefendedRight = document.getElementById("magicMissileNpcDefendedRight");
const $magicMissileSplosionNpcDefendedLeft = document.getElementById("magicMissileSplosionNpcDefendedLeft");
const $magicMissileSplosionNpcDefendedRight = document.getElementById("magicMissileSplosionNpcDefendedRight");
const $magicMissileSplosionNpcLeft = document.getElementById("magicMissileSplosionNpcLeft");
const $magicMissileSplosionNpcRight = document.getElementById("magicMissileSplosionNpcRight");
const $star_0NpcLeft = document.getElementById("star_0NpcLeft");
const $star_0NpcRight = document.getElementById("star_0NpcRight");
const $star_1NpcLeft = document.getElementById("star_1NpcLeft");
const $star_1NpcRight = document.getElementById("star_1NpcRight");
const $star_2NpcLeft = document.getElementById("star_2NpcLeft");
const $star_2NpcRight = document.getElementById("star_2NpcRight");
const $star_3NpcLeft = document.getElementById("star_3NpcLeft");
const $star_3NpcRight = document.getElementById("star_3NpcRight");
const $star_4NpcLeft= document.getElementById("star_4NpcLeft");
const $star_4NpcRight= document.getElementById("star_4NpcRight");

//pc greyWiz

const $greyWizArmPcDefaultLeft = document.getElementById("greyWizArmPcDefaultLeft");
const $greyWizArmPcDefaultRight = document.getElementById("greyWizArmPcDefaultRight");
const $greyWizArmPcDefendLeft = document.getElementById("greyWizArmPcDefendLeft");
const $greyWizArmPcDefendRight = document.getElementById("greyWizArmPcDefendRight");
const $greyWizPcWithoutArms = document.getElementById("greyWizPcWithoutArms");
const $greyWizPcStruckLeft = document.getElementById("greyWizPcStruckLeft");
const $greyWizPcStruckRight = document.getElementById("greyWizPcStruckRight");
const $greyWizPcWithoutHands = document.getElementById("greyWizPcWithoutHands");
const $greyWizHandPcDefaultLeft = document.getElementById("greyWizHandPcDefaultLeft");
const $greyWizHandPc15DegreesLeft = document.getElementById("greyWizHandPc15DegreesLeft");
const $greyWizHandPc30DegreesLeft = document.getElementById("greyWizHandPc30DegreesLeft");
const $greyWizHandPc45DegreesLeft = document.getElementById("greyWizHandPc45DegreesLeft");
const $greyWizHandPcDefaultRight = document.getElementById("greyWizHandPcDefaultRight");
const $greyWizHandPc345DegreesRight = document.getElementById("greyWizHandPc345DegreesRight");
const $greyWizHandPc330DegreesRight = document.getElementById("greyWizHandPc330DegreesRight");
const $greyWizHandPc315DegreesRight = document.getElementById("greyWizHandPc315DegreesRight");
const $protrudingFireworkTop_0PcLeft = document.getElementById("protrudingFireworkTop_0PcLeft");
const $protrudingFireworkTop_1PcLeft = document.getElementById("protrudingFireworkTop_1PcLeft");
const $protrudingFireworkTop_2PcLeft = document.getElementById("protrudingFireworkTop_2PcLeft");
const $protrudingFireworkTop_3PcLeft = document.getElementById("protrudingFireworkTop_3PcLeft");
const $protrudingFireworkTop_4PcLeft = document.getElementById("protrudingFireworkTop_4PcLeft");
const $protrudingFireworkTop_5PcLeft = document.getElementById("protrudingFireworkTop_5PcLeft");
const $protrudingFireworkTop_6PcLeft = document.getElementById("protrudingFireworkTop_6PcLeft");
const $protrudingFireworkTop_0PcRight = document.getElementById("protrudingFireworkTop_0PcRight");
const $protrudingFireworkTop_1PcRight = document.getElementById("protrudingFireworkTop_1PcRight");
const $protrudingFireworkTop_2PcRight = document.getElementById("protrudingFireworkTop_2PcRight");
const $protrudingFireworkTop_3PcRight = document.getElementById("protrudingFireworkTop_3PcRight");
const $protrudingFireworkTop_4PcRight = document.getElementById("protrudingFireworkTop_4PcRight");
const $protrudingFireworkTop_5PcRight = document.getElementById("protrudingFireworkTop_5PcRight");
const $protrudingFireworkTop_6PcRight = document.getElementById("protrudingFireworkTop_6PcRight");
const $protrudingFireworkMiddle_0PcLeft = document.getElementById("protrudingFireworkMiddle_0PcLeft");
const $protrudingFireworkMiddle_1PcLeft = document.getElementById("protrudingFireworkMiddle_1PcLeft");
const $protrudingFireworkMiddle_2PcLeft = document.getElementById("protrudingFireworkMiddle_2PcLeft");
const $protrudingFireworkMiddle_3PcLeft = document.getElementById("protrudingFireworkMiddle_3PcLeft");
const $protrudingFireworkMiddle_4PcLeft = document.getElementById("protrudingFireworkMiddle_4PcLeft");
const $protrudingFireworkMiddle_5PcLeft = document.getElementById("protrudingFireworkMiddle_5PcLeft");
const $protrudingFireworkMiddle_6PcLeft = document.getElementById("protrudingFireworkMiddle_6PcLeft");
const $protrudingFireworkMiddle_0PcRight = document.getElementById("protrudingFireworkMiddle_0PcRight");
const $protrudingFireworkMiddle_1PcRight = document.getElementById("protrudingFireworkMiddle_1PcRight");
const $protrudingFireworkMiddle_2PcRight = document.getElementById("protrudingFireworkMiddle_2PcRight");
const $protrudingFireworkMiddle_3PcRight = document.getElementById("protrudingFireworkMiddle_3PcRight");
const $protrudingFireworkMiddle_4PcRight = document.getElementById("protrudingFireworkMiddle_4PcRight");
const $protrudingFireworkMiddle_5PcRight = document.getElementById("protrudingFireworkMiddle_5PcRight");
const $protrudingFireworkMiddle_6PcRight = document.getElementById("protrudingFireworkMiddle_6PcRight");
const $protrudingFireworkBottom_0PcLeft = document.getElementById("protrudingFireworkBottom_0PcLeft");
const $protrudingFireworkBottom_1PcLeft = document.getElementById("protrudingFireworkBottom_1PcLeft");
const $protrudingFireworkBottom_2PcLeft = document.getElementById("protrudingFireworkBottom_2PcLeft");
const $protrudingFireworkBottom_3PcLeft = document.getElementById("protrudingFireworkBottom_3PcLeft");
const $protrudingFireworkBottom_4PcLeft = document.getElementById("protrudingFireworkBottom_4PcLeft");
const $protrudingFireworkBottom_5PcLeft = document.getElementById("protrudingFireworkBottom_5PcLeft");
const $protrudingFireworkBottom_6PcLeft = document.getElementById("protrudingFireworkBottom_6PcLeft");
const $protrudingFireworkBottom_0PcRight = document.getElementById("protrudingFireworkBottom_0PcRight");
const $protrudingFireworkBottom_1PcRight = document.getElementById("protrudingFireworkBottom_1PcRight");
const $protrudingFireworkBottom_2PcRight = document.getElementById("protrudingFireworkBottom_2PcRight");
const $protrudingFireworkBottom_3PcRight = document.getElementById("protrudingFireworkBottom_3PcRight");
const $protrudingFireworkBottom_4PcRight = document.getElementById("protrudingFireworkBottom_4PcRight");
const $protrudingFireworkBottom_5PcRight = document.getElementById("protrudingFireworkBottom_5PcRight");
const $protrudingFireworkBottom_6PcRight = document.getElementById("protrudingFireworkBottom_6PcRight");
const $topFirework_0PcLeft = document.getElementById("topFirework_0PcLeft");
const $topFirework_1PcLeft = document.getElementById("topFirework_1PcLeft");
const $topFirework_2PcLeft = document.getElementById("topFirework_2PcLeft");
const $topFirework_3PcLeft = document.getElementById("topFirework_3PcLeft");
const $topFirework_4PcLeft = document.getElementById("topFirework_4PcLeft");
const $topFirework_5PcLeft = document.getElementById("topFirework_5PcLeft");
const $topFirework_6PcLeft = document.getElementById("topFirework_6PcLeft");
const $topFirework_0PcRight = document.getElementById("topFirework_0PcRight");
const $topFirework_1PcRight = document.getElementById("topFirework_1PcRight");
const $topFirework_2PcRight = document.getElementById("topFirework_2PcRight");
const $topFirework_3PcRight = document.getElementById("topFirework_3PcRight");
const $topFirework_4PcRight = document.getElementById("topFirework_4PcRight");
const $topFirework_5PcRight = document.getElementById("topFirework_5PcRight");
const $topFirework_6PcRight = document.getElementById("topFirework_6PcRight");
const $middleFirework_0PcLeft = document.getElementById("middleFirework_0PcLeft");
const $middleFirework_1PcLeft = document.getElementById("middleFirework_1PcLeft");
const $middleFirework_2PcLeft = document.getElementById("middleFirework_2PcLeft");
const $middleFirework_3PcLeft = document.getElementById("middleFirework_3PcLeft");
const $middleFirework_4PcLeft = document.getElementById("middleFirework_4PcLeft");
const $middleFirework_5PcLeft = document.getElementById("middleFirework_5PcLeft");
const $middleFirework_0PcRight = document.getElementById("middleFirework_0PcRight");
const $middleFirework_1PcRight = document.getElementById("middleFirework_1PcRight");
const $middleFirework_2PcRight = document.getElementById("middleFirework_2PcRight");
const $middleFirework_3PcRight = document.getElementById("middleFirework_3PcRight");
const $middleFirework_4PcRight = document.getElementById("middleFirework_4PcRight");
const $middleFirework_5PcRight = document.getElementById("middleFirework_5PcRight");
const $bottomFirework_0PcLeft = document.getElementById("bottomFirework_0PcLeft");
const $bottomFirework_1PcLeft = document.getElementById("bottomFirework_1PcLeft");
const $bottomFirework_2PcLeft = document.getElementById("bottomFirework_2PcLeft");
const $bottomFirework_3PcLeft = document.getElementById("bottomFirework_3PcLeft");
const $bottomFirework_4PcLeft = document.getElementById("bottomFirework_4PcLeft");
const $bottomFirework_0PcRight = document.getElementById("bottomFirework_0PcRight");
const $bottomFirework_1PcRight = document.getElementById("bottomFirework_1PcRight");
const $bottomFirework_2PcRight = document.getElementById("bottomFirework_2PcRight");
const $bottomFirework_3PcRight = document.getElementById("bottomFirework_3PcRight");
const $bottomFirework_4PcRight = document.getElementById("bottomFirework_4PcRight");
const $middleFirework_3Z_1PcLeft = document.getElementById("middleFirework_3Z_1PcLeft");
const $middleFirework_3Z_1PcRight = document.getElementById("middleFirework_3Z_1PcRight");
const $middleFirework_4Z_2PcLeft = document.getElementById("middleFirework_4Z_2PcLeft");
const $middleFirework_4Z_2PcRight = document.getElementById("middleFirework_4Z_2PcRight");
const $bottomFirework_3Z_1PcLeft = document.getElementById("bottomFirework_3Z_1PcLeft");
const $bottomFirework_3Z_1PcRight = document.getElementById("bottomFirework_3Z_1PcRight");
const $middleFirework_5Z_1PcLeft = document.getElementById("middleFirework_5Z_1PcLeft");
const $middleFirework_5Z_1PcRight = document.getElementById("middleFirework_5Z_1PcRight");
const $bottomFirework_4Z_2PcLeft = document.getElementById("bottomFirework_4Z_2PcLeft");
const $bottomFirework_4Z_2PcRight = document.getElementById("bottomFirework_4Z_2PcRight");
const $axeFireworkExplosionPcLeft = document.getElementById("axeFireworkExplosionPcLeft");
const $axeFireworkExplosionPcRight = document.getElementById("axeFireworkExplosionPcRight");
const $axeSmokePcFullMinus10Left = document.getElementById("axeSmokePcFullMinus10Left");
const $axeSmokePcFullMinus9Left = document.getElementById("axeSmokePcFullMinus9Left");
const $axeSmokePcFullMinus8Left = document.getElementById("axeSmokePcFullMinus8Left");
const $axeSmokePcFullMinus7Left = document.getElementById("axeSmokePcFullMinus7Left");
const $axeSmokePcFullMinus6Left = document.getElementById("axeSmokePcFullMinus6Left");
const $axeSmokePcFullMinus5Left = document.getElementById("axeSmokePcFullMinus5Left");
const $axeSmokePcFullMinus4Left = document.getElementById("axeSmokePcFullMinus4Left");
const $axeSmokePcFullMinus3Left = document.getElementById("axeSmokePcFullMinus3Left");
const $axeSmokePcFullMinus2Left = document.getElementById("axeSmokePcFullMinus2Left");
const $axeSmokePcFullMinus1Left = document.getElementById("axeSmokePcFullMinus1Left");
const $axeSmokePcFullLeft = document.getElementById("axeSmokePcFullLeft");
const $axeSmokePcFullMinus10Right = document.getElementById("axeSmokePcFullMinus10Right");
const $axeSmokePcFullMinus9Right = document.getElementById("axeSmokePcFullMinus9Right");
const $axeSmokePcFullMinus8Right = document.getElementById("axeSmokePcFullMinus8Right");
const $axeSmokePcFullMinus7Right = document.getElementById("axeSmokePcFullMinus7Right");
const $axeSmokePcFullMinus6Right = document.getElementById("axeSmokePcFullMinus6Right");
const $axeSmokePcFullMinus5Right = document.getElementById("axeSmokePcFullMinus5Right");
const $axeSmokePcFullMinus4Right = document.getElementById("axeSmokePcFullMinus4Right");
const $axeSmokePcFullMinus3Right = document.getElementById("axeSmokePcFullMinus3Right");
const $axeSmokePcFullMinus2Right = document.getElementById("axeSmokePcFullMinus2Right");
const $axeSmokePcFullMinus1Right = document.getElementById("axeSmokePcFullMinus1Right");
const $axeSmokePcFullRight = document.getElementById("axeSmokePcFullRight");
const $bowFireworkExplosionPcLeft = document.getElementById("bowFireworkExplosionPcLeft");
const $bowFireworkExplosionPcRight = document.getElementById("bowFireworkExplosionPcRight");
const $bowSmokePcFullMinus10Left = document.getElementById("bowSmokePcFullMinus10Left");
const $bowSmokePcFullMinus9Left = document.getElementById("bowSmokePcFullMinus9Left");
const $bowSmokePcFullMinus8Left = document.getElementById("bowSmokePcFullMinus8Left");
const $bowSmokePcFullMinus7Left = document.getElementById("bowSmokePcFullMinus7Left");
const $bowSmokePcFullMinus6Left = document.getElementById("bowSmokePcFullMinus6Left");
const $bowSmokePcFullMinus5Left = document.getElementById("bowSmokePcFullMinus5Left");
const $bowSmokePcFullMinus4Left = document.getElementById("bowSmokePcFullMinus4Left");
const $bowSmokePcFullMinus3Left = document.getElementById("bowSmokePcFullMinus3Left");
const $bowSmokePcFullMinus2Left = document.getElementById("bowSmokePcFullMinus2Left");
const $bowSmokePcFullMinus1Left = document.getElementById("bowSmokePcFullMinus1Left");
const $bowSmokePcFullLeft = document.getElementById("bowSmokePcFullLeft");
const $bowSmokePcFullMinus10Right = document.getElementById("bowSmokePcFullMinus10Right");
const $bowSmokePcFullMinus9Right = document.getElementById("bowSmokePcFullMinus9Right");
const $bowSmokePcFullMinus8Right = document.getElementById("bowSmokePcFullMinus8Right");
const $bowSmokePcFullMinus7Right = document.getElementById("bowSmokePcFullMinus7Right");
const $bowSmokePcFullMinus6Right = document.getElementById("bowSmokePcFullMinus6Right");
const $bowSmokePcFullMinus5Right = document.getElementById("bowSmokePcFullMinus5Right");
const $bowSmokePcFullMinus4Right = document.getElementById("bowSmokePcFullMinus4Right");
const $bowSmokePcFullMinus3Right = document.getElementById("bowSmokePcFullMinus3Right");
const $bowSmokePcFullMinus2Right = document.getElementById("bowSmokePcFullMinus2Right");
const $bowSmokePcFullMinus1Right = document.getElementById("bowSmokePcFullMinus1Right");
const $bowSmokePcFullRight = document.getElementById("bowSmokePcFullRight");
const $swordFireworkExplosionPcLeft = document.getElementById("swordFireworkExplosionPcLeft");
const $swordFireworkExplosionPcRight = document.getElementById("swordFireworkExplosionPcRight");
const $swordSmokePcFullMinus10Left = document.getElementById("swordSmokePcFullMinus10Left");
const $swordSmokePcFullMinus9Left = document.getElementById("swordSmokePcFullMinus9Left");
const $swordSmokePcFullMinus8Left = document.getElementById("swordSmokePcFullMinus8Left");
const $swordSmokePcFullMinus7Left = document.getElementById("swordSmokePcFullMinus7Left");
const $swordSmokePcFullMinus6Left = document.getElementById("swordSmokePcFullMinus6Left");
const $swordSmokePcFullMinus5Left = document.getElementById("swordSmokePcFullMinus5Left");
const $swordSmokePcFullMinus4Left = document.getElementById("swordSmokePcFullMinus4Left");
const $swordSmokePcFullMinus3Left = document.getElementById("swordSmokePcFullMinus3Left");
const $swordSmokePcFullMinus2Left = document.getElementById("swordSmokePcFullMinus2Left");
const $swordSmokePcFullMinus1Left = document.getElementById("swordSmokePcFullMinus1Left");
const $swordSmokePcFullLeft = document.getElementById("swordSmokePcFullLeft");
const $swordSmokePcFullMinus10Right = document.getElementById("swordSmokePcFullMinus10Right");
const $swordSmokePcFullMinus9Right = document.getElementById("swordSmokePcFullMinus9Right");
const $swordSmokePcFullMinus8Right = document.getElementById("swordSmokePcFullMinus8Right");
const $swordSmokePcFullMinus7Right = document.getElementById("swordSmokePcFullMinus7Right");
const $swordSmokePcFullMinus6Right = document.getElementById("swordSmokePcFullMinus6Right");
const $swordSmokePcFullMinus5Right = document.getElementById("swordSmokePcFullMinus5Right");
const $swordSmokePcFullMinus4Right = document.getElementById("swordSmokePcFullMinus4Right");
const $swordSmokePcFullMinus3Right = document.getElementById("swordSmokePcFullMinus3Right");
const $swordSmokePcFullMinus2Right = document.getElementById("swordSmokePcFullMinus2Right");
const $swordSmokePcFullMinus1Right = document.getElementById("swordSmokePcFullMinus1Right");
const $swordSmokePcFullRight = document.getElementById("swordSmokePcFullRight");
const $axeBowFireworkExplosionPcLeft = document.getElementById("axeBowFireworkExplosionPcLeft");
const $axeBowFireworkExplosionPcRight = document.getElementById("axeBowFireworkExplosionPcRight");
const $axeBowSmokePcFullMinus10Left = document.getElementById("axeBowSmokePcFullMinus10Left");
const $axeBowSmokePcFullMinus9Left = document.getElementById("axeBowSmokePcFullMinus9Left");
const $axeBowSmokePcFullMinus8Left = document.getElementById("axeBowSmokePcFullMinus8Left");
const $axeBowSmokePcFullMinus7Left = document.getElementById("axeBowSmokePcFullMinus7Left");
const $axeBowSmokePcFullMinus6Left = document.getElementById("axeBowSmokePcFullMinus6Left");
const $axeBowSmokePcFullMinus5Left = document.getElementById("axeBowSmokePcFullMinus5Left");
const $axeBowSmokePcFullMinus4Left = document.getElementById("axeBowSmokePcFullMinus4Left");
const $axeBowSmokePcFullMinus3Left = document.getElementById("axeBowSmokePcFullMinus3Left");
const $axeBowSmokePcFullMinus2Left = document.getElementById("axeBowSmokePcFullMinus2Left");
const $axeBowSmokePcFullMinus1Left = document.getElementById("axeBowSmokePcFullMinus1Left");
const $axeBowSmokeFullPcLeft = document.getElementById("axeBowSmokePcFullLeft");
const $axeBowSmokePcFullMinus10Right = document.getElementById("axeBowSmokePcFullMinus10Right");
const $axeBowSmokePcFullMinus9Right = document.getElementById("axeBowSmokePcFullMinus9Right");
const $axeBowSmokePcFullMinus8Right = document.getElementById("axeBowSmokePcFullMinus8Right");
const $axeBowSmokePcFullMinus7Right = document.getElementById("axeBowSmokePcFullMinus7Right");
const $axeBowSmokePcFullMinus6Right = document.getElementById("axeBowSmokePcFullMinus6Right");
const $axeBowSmokePcFullMinus5Right = document.getElementById("axeBowSmokePcFullMinus5Right");
const $axeBowSmokePcFullMinus4Right = document.getElementById("axeBowSmokePcFullMinus4Right");
const $axeBowSmokePcFullMinus3Right = document.getElementById("axeBowSmokePcFullMinus3Right");
const $axeBowSmokePcFullMinus2Right = document.getElementById("axeBowSmokePcFullMinus2Right");
const $axeBowSmokePcFullMinus1Right = document.getElementById("axeBowSmokePcFullMinus1Right");
const $axeBowSmokeFullPcRight = document.getElementById("axeBowSmokePcFullRight");
const $axeSwordFireworkExplosionPcLeft = document.getElementById("axeSwordFireworkExplosionPcLeft");
const $axeSwordFireworkExplosionPcRight = document.getElementById("axeSwordFireworkExplosionPcRight");
const $axeSwordSmokePcFullMinus10Left = document.getElementById("axeSwordSmokePcFullMinus10Left");
const $axeSwordSmokePcFullMinus9Left = document.getElementById("axeSwordSmokePcFullMinus9Left");
const $axeSwordSmokePcFullMinus8Left = document.getElementById("axeSwordSmokePcFullMinus8Left");
const $axeSwordSmokePcFullMinus7Left = document.getElementById("axeSwordSmokePcFullMinus7Left");
const $axeSwordSmokePcFullMinus6Left = document.getElementById("axeSwordSmokePcFullMinus6Left");
const $axeSwordSmokePcFullMinus5Left = document.getElementById("axeSwordSmokePcFullMinus5Left");
const $axeSwordSmokePcFullMinus4Left = document.getElementById("axeSwordSmokePcFullMinus4Left");
const $axeSwordSmokePcFullMinus3Left = document.getElementById("axeSwordSmokePcFullMinus3Left");
const $axeSwordSmokePcFullMinus2Left = document.getElementById("axeSwordSmokePcFullMinus2Left");
const $axeSwordSmokePcFullMinus1Left = document.getElementById("axeSwordSmokePcFullMinus1Left");
const $axeSwordSmokePcFullLeft = document.getElementById("axeSwordSmokePcFullLeft");
const $axeSwordSmokePcFullMinus10Right = document.getElementById("axeSwordSmokePcFullMinus10Right");
const $axeSwordSmokePcFullMinus9Right = document.getElementById("axeSwordSmokePcFullMinus9Right");
const $axeSwordSmokePcFullMinus8Right = document.getElementById("axeSwordSmokePcFullMinus8Right");
const $axeSwordSmokePcFullMinus7Right = document.getElementById("axeSwordSmokePcFullMinus7Right");
const $axeSwordSmokePcFullMinus6Right = document.getElementById("axeSwordSmokePcFullMinus6Right");
const $axeSwordSmokePcFullMinus5Right = document.getElementById("axeSwordSmokePcFullMinus5Right");
const $axeSwordSmokePcFullMinus4Right = document.getElementById("axeSwordSmokePcFullMinus4Right");
const $axeSwordSmokePcFullMinus3Right = document.getElementById("axeSwordSmokePcFullMinus3Right");
const $axeSwordSmokePcFullMinus2Right = document.getElementById("axeSwordSmokePcFullMinus2Right");
const $axeSwordSmokePcFullMinus1Right = document.getElementById("axeSwordSmokePcFullMinus1Right");
const $axeSwordSmokePcFullRight = document.getElementById("axeSwordSmokePcFullRight");
const $bowSwordFireworkExplosionPcLeft = document.getElementById("bowSwordFireworkExplosionPcLeft");
const $bowSwordFireworkExplosionPcRight = document.getElementById("bowSwordFireworkExplosionPcRight");
const $bowSwordSmokePcFullMinus10Left = document.getElementById("bowSwordSmokePcFullMinus10Left");
const $bowSwordSmokePcFullMinus9Left = document.getElementById("bowSwordSmokePcFullMinus9Left");
const $bowSwordSmokePcFullMinus8Left = document.getElementById("bowSwordSmokePcFullMinus8Left");
const $bowSwordSmokePcFullMinus7Left = document.getElementById("bowSwordSmokePcFullMinus7Left");
const $bowSwordSmokePcFullMinus6Left = document.getElementById("bowSwordSmokePcFullMinus6Left");
const $bowSwordSmokePcFullMinus5Left = document.getElementById("bowSwordSmokePcFullMinus5Left");
const $bowSwordSmokePcFullMinus4Left = document.getElementById("bowSwordSmokePcFullMinus4Left");
const $bowSwordSmokePcFullMinus3Left = document.getElementById("bowSwordSmokePcFullMinus3Left");
const $bowSwordSmokePcFullMinus2Left = document.getElementById("bowSwordSmokePcFullMinus2Left");
const $bowSwordSmokePcFullMinus1Left = document.getElementById("bowSwordSmokePcFullMinus1Left");
const $bowSwordSmokePcFullLeft = document.getElementById("bowSwordSmokePcFullLeft");
const $bowSwordSmokePcFullMinus10Right = document.getElementById("bowSwordSmokePcFullMinus10Right");
const $bowSwordSmokePcFullMinus9Right = document.getElementById("bowSwordSmokePcFullMinus9Right");
const $bowSwordSmokePcFullMinus8Right = document.getElementById("bowSwordSmokePcFullMinus8Right");
const $bowSwordSmokePcFullMinus7Right = document.getElementById("bowSwordSmokePcFullMinus7Right");
const $bowSwordSmokePcFullMinus6Right = document.getElementById("bowSwordSmokePcFullMinus6Right");
const $bowSwordSmokePcFullMinus5Right = document.getElementById("bowSwordSmokePcFullMinus5Right");
const $bowSwordSmokePcFullMinus4Right = document.getElementById("bowSwordSmokePcFullMinus4Right");
const $bowSwordSmokePcFullMinus3Right = document.getElementById("bowSwordSmokePcFullMinus3Right");
const $bowSwordSmokePcFullMinus2Right = document.getElementById("bowSwordSmokePcFullMinus2Right");
const $bowSwordSmokePcFullMinus1Right = document.getElementById("bowSwordSmokePcFullMinus1Right");
const $bowSwordSmokePcFullRight = document.getElementById("bowSwordSmokePcFullRight");
const $axeBowSwordFireworkExplosionPcLeft = document.getElementById("axeBowSwordFireworkExplosionPcLeft");
const $axeBowSwordFireworkExplosionPcRight = document.getElementById("axeBowSwordFireworkExplosionPcRight");
const $axeBowSwordSmokePcFullMinus10Left = document.getElementById("axeBowSwordSmokePcFullMinus10Left");
const $axeBowSwordSmokePcFullMinus9Left = document.getElementById("axeBowSwordSmokePcFullMinus9Left");
const $axeBowSwordSmokePcFullMinus8Left = document.getElementById("axeBowSwordSmokePcFullMinus8Left");
const $axeBowSwordSmokePcFullMinus7Left = document.getElementById("axeBowSwordSmokePcFullMinus7Left");
const $axeBowSwordSmokePcFullMinus6Left = document.getElementById("axeBowSwordSmokePcFullMinus6Left");
const $axeBowSwordSmokePcFullMinus5Left = document.getElementById("axeBowSwordSmokePcFullMinus5Left");
const $axeBowSwordSmokePcFullMinus4Left = document.getElementById("axeBowSwordSmokePcFullMinus4Left");
const $axeBowSwordSmokePcFullMinus3Left = document.getElementById("axeBowSwordSmokePcFullMinus3Left");
const $axeBowSwordSmokePcFullMinus2Left = document.getElementById("axeBowSwordSmokePcFullMinus2Left");
const $axeBowSwordSmokePcFullMinus1Left = document.getElementById("axeBowSwordSmokePcFullMinus1Left");
const $axeBowSwordSmokePcFullLeft = document.getElementById("axeBowSwordSmokePcFullLeft");
const $axeBowSwordSmokePcFullMinus10Right = document.getElementById("axeBowSwordSmokePcFullMinus10Right");
const $axeBowSwordSmokePcFullMinus9Right = document.getElementById("axeBowSwordSmokePcFullMinus9Right");
const $axeBowSwordSmokePcFullMinus8Right = document.getElementById("axeBowSwordSmokePcFullMinus8Right");
const $axeBowSwordSmokePcFullMinus7Right = document.getElementById("axeBowSwordSmokePcFullMinus7Right");
const $axeBowSwordSmokePcFullMinus6Right = document.getElementById("axeBowSwordSmokePcFullMinus6Right");
const $axeBowSwordSmokePcFullMinus5Right = document.getElementById("axeBowSwordSmokePcFullMinus5Right");
const $axeBowSwordSmokePcFullMinus4Right = document.getElementById("axeBowSwordSmokePcFullMinus4Right");
const $axeBowSwordSmokePcFullMinus3Right = document.getElementById("axeBowSwordSmokePcFullMinus3Right");
const $axeBowSwordSmokePcFullMinus2Right = document.getElementById("axeBowSwordSmokePcFullMinus2Right");
const $axeBowSwordSmokePcFullMinus1Right = document.getElementById("axeBowSwordSmokePcFullMinus1Right");
const $axeBowSwordSmokePcFullRight = document.getElementById("axeBowSwordSmokePcFullRight");
const $fireworkAxePcLeft = document.getElementById("fireworkAxePcLeft");
const $fireworkBowPcLeft = document.getElementById("fireworkBowPcLeft");
const $fireworkSwordPcLeft = document.getElementById("fireworkSwordPcLeft");
const $fireworkAxePcRight = document.getElementById("fireworkAxePcRight");
const $fireworkBowPcRight = document.getElementById("fireworkBowPcRight");
const $fireworkSwordPcRight = document.getElementById("fireworkSwordPcRight");
const $fireworkAxeShimmerPcFullLeft = document.getElementById("fireworkAxeShimmerPcFullLeft");
const $fireworkBowShimmerPcFullLeft = document.getElementById("fireworkBowShimmerPcFullLeft");
const $fireworkSwordShimmerPcFullLeft = document.getElementById("fireworkSwordShimmerPcFullLeft");
const $fireworkAxeShimmerPcFullRight = document.getElementById("fireworkAxeShimmerPcFullRight");
const $fireworkBowShimmerPcFullRight = document.getElementById("fireworkBowShimmerPcFullRight");
const $fireworkSwordShimmerPcFullRight = document.getElementById("fireworkSwordShimmerPcFullRight");

//npc greyWiz

const $greyWizArmNpcDefaultLeft = document.getElementById("greyWizArmNpcDefaultLeft");
const $greyWizArmNpcDefaultRight = document.getElementById("greyWizArmNpcDefaultRight");
const $greyWizArmNpcDefendLeft = document.getElementById("greyWizArmNpcDefendLeft");
const $greyWizArmNpcDefendRight = document.getElementById("greyWizArmNpcDefendRight");
const $greyWizNpcWithoutArms = document.getElementById("greyWizNpcWithoutArms");
const $greyWizNpcStruckLeft = document.getElementById("greyWizNpcStruckLeft");
const $greyWizNpcStruckRight = document.getElementById("greyWizNpcStruckRight");
const $greyWizNpcWithoutHands = document.getElementById("greyWizNpcWithoutHands");
const $greyWizHandNpcDefaultLeft = document.getElementById("greyWizHandNpcDefaultLeft");
const $greyWizHandNpc15DegreesLeft = document.getElementById("greyWizHandNpc15DegreesLeft");
const $greyWizHandNpc30DegreesLeft = document.getElementById("greyWizHandNpc30DegreesLeft");
const $greyWizHandNpc45DegreesLeft = document.getElementById("greyWizHandNpc45DegreesLeft");
const $greyWizHandNpcDefaultRight = document.getElementById("greyWizHandNpcDefaultRight");
const $greyWizHandNpc345DegreesRight = document.getElementById("greyWizHandNpc345DegreesRight");
const $greyWizHandNpc330DegreesRight = document.getElementById("greyWizHandNpc330DegreesRight");
const $greyWizHandNpc315DegreesRight = document.getElementById("greyWizHandNpc315DegreesRight");
const $protrudingFireworkTop_0NpcLeft = document.getElementById("protrudingFireworkTop_0NpcLeft");
const $protrudingFireworkTop_1NpcLeft = document.getElementById("protrudingFireworkTop_1NpcLeft");
const $protrudingFireworkTop_2NpcLeft = document.getElementById("protrudingFireworkTop_2NpcLeft");
const $protrudingFireworkTop_3NpcLeft = document.getElementById("protrudingFireworkTop_3NpcLeft");
const $protrudingFireworkTop_4NpcLeft = document.getElementById("protrudingFireworkTop_4NpcLeft");
const $protrudingFireworkTop_5NpcLeft = document.getElementById("protrudingFireworkTop_5NpcLeft");
const $protrudingFireworkTop_6NpcLeft = document.getElementById("protrudingFireworkTop_6NpcLeft");
const $protrudingFireworkTop_7NpcLeft = document.getElementById("protrudingFireworkTop_7NpcLeft");
const $protrudingFireworkTop_0NpcRight = document.getElementById("protrudingFireworkTop_0NpcRight");
const $protrudingFireworkTop_1NpcRight = document.getElementById("protrudingFireworkTop_1NpcRight");
const $protrudingFireworkTop_2NpcRight = document.getElementById("protrudingFireworkTop_2NpcRight");
const $protrudingFireworkTop_3NpcRight = document.getElementById("protrudingFireworkTop_3NpcRight");
const $protrudingFireworkTop_4NpcRight = document.getElementById("protrudingFireworkTop_4NpcRight");
const $protrudingFireworkTop_5NpcRight = document.getElementById("protrudingFireworkTop_5NpcRight");
const $protrudingFireworkTop_6NpcRight = document.getElementById("protrudingFireworkTop_6NpcRight");
const $protrudingFireworkTop_7NpcRight = document.getElementById("protrudingFireworkTop_7NpcRight");
const $protrudingFireworkMiddle_0NpcLeft = document.getElementById("protrudingFireworkMiddle_0NpcLeft");
const $protrudingFireworkMiddle_1NpcLeft = document.getElementById("protrudingFireworkMiddle_1NpcLeft");
const $protrudingFireworkMiddle_2NpcLeft = document.getElementById("protrudingFireworkMiddle_2NpcLeft");
const $protrudingFireworkMiddle_3NpcLeft = document.getElementById("protrudingFireworkMiddle_3NpcLeft");
const $protrudingFireworkMiddle_4NpcLeft = document.getElementById("protrudingFireworkMiddle_4NpcLeft");
const $protrudingFireworkMiddle_5NpcLeft = document.getElementById("protrudingFireworkMiddle_5NpcLeft");
const $protrudingFireworkMiddle_6NpcLeft = document.getElementById("protrudingFireworkMiddle_6NpcLeft");
const $protrudingFireworkMiddle_7NpcLeft = document.getElementById("protrudingFireworkMiddle_7NpcLeft");
const $protrudingFireworkMiddle_0NpcRight = document.getElementById("protrudingFireworkMiddle_0NpcRight");
const $protrudingFireworkMiddle_1NpcRight = document.getElementById("protrudingFireworkMiddle_1NpcRight");
const $protrudingFireworkMiddle_2NpcRight = document.getElementById("protrudingFireworkMiddle_2NpcRight");
const $protrudingFireworkMiddle_3NpcRight = document.getElementById("protrudingFireworkMiddle_3NpcRight");
const $protrudingFireworkMiddle_4NpcRight = document.getElementById("protrudingFireworkMiddle_4NpcRight");
const $protrudingFireworkMiddle_5NpcRight = document.getElementById("protrudingFireworkMiddle_5NpcRight");
const $protrudingFireworkMiddle_6NpcRight = document.getElementById("protrudingFireworkMiddle_6NpcRight");
const $protrudingFireworkMiddle_7NpcRight = document.getElementById("protrudingFireworkMiddle_7NpcRight");
const $protrudingFireworkBottom_0NpcLeft = document.getElementById("protrudingFireworkBottom_0NpcLeft");
const $protrudingFireworkBottom_1NpcLeft = document.getElementById("protrudingFireworkBottom_1NpcLeft");
const $protrudingFireworkBottom_2NpcLeft = document.getElementById("protrudingFireworkBottom_2NpcLeft");
const $protrudingFireworkBottom_3NpcLeft = document.getElementById("protrudingFireworkBottom_3NpcLeft");
const $protrudingFireworkBottom_4NpcLeft = document.getElementById("protrudingFireworkBottom_4NpcLeft");
const $protrudingFireworkBottom_5NpcLeft = document.getElementById("protrudingFireworkBottom_5NpcLeft");
const $protrudingFireworkBottom_6NpcLeft = document.getElementById("protrudingFireworkBottom_6NpcLeft");
const $protrudingFireworkBottom_7NpcLeft = document.getElementById("protrudingFireworkBottom_7NpcLeft");
const $protrudingFireworkBottom_0NpcRight = document.getElementById("protrudingFireworkBottom_0NpcRight");
const $protrudingFireworkBottom_1NpcRight = document.getElementById("protrudingFireworkBottom_1NpcRight");
const $protrudingFireworkBottom_2NpcRight = document.getElementById("protrudingFireworkBottom_2NpcRight");
const $protrudingFireworkBottom_3NpcRight = document.getElementById("protrudingFireworkBottom_3NpcRight");
const $protrudingFireworkBottom_4NpcRight = document.getElementById("protrudingFireworkBottom_4NpcRight");
const $protrudingFireworkBottom_5NpcRight = document.getElementById("protrudingFireworkBottom_5NpcRight");
const $protrudingFireworkBottom_6NpcRight = document.getElementById("protrudingFireworkBottom_6NpcRight");
const $protrudingFireworkBottom_7NpcRight = document.getElementById("protrudingFireworkBottom_7NpcRight");
const $topFirework_0NpcLeft = document.getElementById("topFirework_0NpcLeft");
const $topFirework_1NpcLeft = document.getElementById("topFirework_1NpcLeft");
const $topFirework_2NpcLeft = document.getElementById("topFirework_2NpcLeft");
const $topFirework_3NpcLeft = document.getElementById("topFirework_3NpcLeft");
const $topFirework_4NpcLeft = document.getElementById("topFirework_4NpcLeft");
const $topFirework_5NpcLeft = document.getElementById("topFirework_5NpcLeft");
const $topFirework_6NpcLeft = document.getElementById("topFirework_6NpcLeft");
const $topFirework_0NpcRight = document.getElementById("topFirework_0NpcRight");
const $topFirework_1NpcRight = document.getElementById("topFirework_1NpcRight");
const $topFirework_2NpcRight = document.getElementById("topFirework_2NpcRight");
const $topFirework_3NpcRight = document.getElementById("topFirework_3NpcRight");
const $topFirework_4NpcRight = document.getElementById("topFirework_4NpcRight");
const $topFirework_5NpcRight = document.getElementById("topFirework_5NpcRight");
const $topFirework_6NpcRight = document.getElementById("topFirework_6NpcRight");
const $middleFirework_0NpcLeft = document.getElementById("middleFirework_0NpcLeft");
const $middleFirework_1NpcLeft = document.getElementById("middleFirework_1NpcLeft");
const $middleFirework_2NpcLeft = document.getElementById("middleFirework_2NpcLeft");
const $middleFirework_0NpcRight = document.getElementById("middleFirework_0NpcRight");
const $middleFirework_1NpcRight = document.getElementById("middleFirework_1NpcRight");
const $middleFirework_2NpcRight = document.getElementById("middleFirework_2NpcRight");
const $topFirework_3Z_1NpcLeft = document.getElementById("topFirework_3Z_1NpcLeft");
const $topFirework_3Z_1NpcRight = document.getElementById("topFirework_3Z_1NpcRight");
const $middleFirework_3NpcLeft = document.getElementById("middleFirework_3NpcLeft");
const $middleFirework_4NpcLeft = document.getElementById("middleFirework_4NpcLeft");
const $middleFirework_5NpcLeft = document.getElementById("middleFirework_5NpcLeft");
const $middleFirework_3NpcRight = document.getElementById("middleFirework_3NpcRight");
const $middleFirework_4NpcRight = document.getElementById("middleFirework_4NpcRight");
const $middleFirework_5NpcRight = document.getElementById("middleFirework_5NpcRight");
const $bottomFirework_0NpcLeft = document.getElementById("bottomFirework_0NpcLeft");
const $bottomFirework_1NpcLeft = document.getElementById("bottomFirework_1NpcLeft");
const $bottomFirework_0NpcRight = document.getElementById("bottomFirework_0NpcRight");
const $bottomFirework_1NpcRight = document.getElementById("bottomFirework_1NpcRight");
const $middleFirework_2Z_2NpcLeft = document.getElementById("middleFirework_2Z_2NpcLeft");
const $middleFirework_2Z_2NpcRight = document.getElementById("middleFirework_2Z_2NpcRight");
const $bottomFirework_2NpcLeft = document.getElementById("bottomFirework_2NpcLeft");
const $bottomFirework_2NpcRight = document.getElementById("bottomFirework_2NpcRight");
const $middleFirework_3Z_2NpcLeft = document.getElementById("middleFirework_3Z_2NpcLeft");
const $middleFirework_3Z_2NpcRight = document.getElementById("middleFirework_3Z_2NpcRight");
const $topFirework_4Z_1NpcLeft = document.getElementById("topFirework_4Z_1NpcLeft");
const $topFirework_4Z_1NpcRight = document.getElementById("topFirework_4Z_1NpcRight");
const $bottomFirework_3NpcLeft = document.getElementById("bottomFirework_3NpcLeft");
const $bottomFirework_3NpcRight = document.getElementById("bottomFirework_3NpcRight");
const $middleFirework_4Z_2NpcLeft = document.getElementById("middleFirework_4Z_2NpcLeft");
const $middleFirework_4Z_2NpcRight = document.getElementById("middleFirework_4Z_2NpcRight");
const $topFirework_5Z_1NpcLeft = document.getElementById("topFirework_5Z_1NpcLeft");
const $topFirework_5Z_1NpcRight = document.getElementById("topFirework_5Z_1NpcRight");
const $bottomFirework_4NpcLeft = document.getElementById("bottomFirework_4NpcLeft");
const $bottomFirework_4NpcRight = document.getElementById("bottomFirework_4NpcRight");
const $middleFirework_5Z_4NpcLeft = document.getElementById("middleFirework_5Z_4NpcLeft");
const $middleFirework_5Z_4NpcRight = document.getElementById("middleFirework_5Z_4NpcRight");
const $topFirework_6Z_3NpcLeft = document.getElementById("topFirework_6Z_3NpcLeft");
const $topFirework_6Z_3NpcRight = document.getElementById("topFirework_6Z_3NpcRight");
const $middleFirework_5Z_2NpcLeft = document.getElementById("middleFirework_5Z_2NpcLeft");
const $middleFirework_5Z_2NpcRight = document.getElementById("middleFirework_5Z_2NpcRight");
const $topFirework_6Z_1NpcLeft = document.getElementById("topFirework_6Z_1NpcLeft");
const $topFirework_6Z_1NpcRight = document.getElementById("topFirework_6Z_1NpcRight");
const $axeFireworkExplosionNpcLeft = document.getElementById("axeFireworkExplosionNpcLeft");
const $axeFireworkExplosionNpcRight = document.getElementById("axeFireworkExplosionNpcRight");
const $axeSmokeNpcFullMinus10Left = document.getElementById("axeSmokeNpcFullMinus10Left");
const $axeSmokeNpcFullMinus9Left = document.getElementById("axeSmokeNpcFullMinus9Left");
const $axeSmokeNpcFullMinus8Left = document.getElementById("axeSmokeNpcFullMinus8Left");
const $axeSmokeNpcFullMinus7Left = document.getElementById("axeSmokeNpcFullMinus7Left");
const $axeSmokeNpcFullMinus6Left = document.getElementById("axeSmokeNpcFullMinus6Left");
const $axeSmokeNpcFullMinus5Left = document.getElementById("axeSmokeNpcFullMinus5Left");
const $axeSmokeNpcFullMinus4Left = document.getElementById("axeSmokeNpcFullMinus4Left");
const $axeSmokeNpcFullMinus3Left = document.getElementById("axeSmokeNpcFullMinus3Left");
const $axeSmokeNpcFullMinus2Left = document.getElementById("axeSmokeNpcFullMinus2Left");
const $axeSmokeNpcFullMinus1Left = document.getElementById("axeSmokeNpcFullMinus1Left");
const $axeSmokeNpcFullLeft = document.getElementById("axeSmokeNpcFullLeft");
const $axeSmokeNpcFullMinus10Right = document.getElementById("axeSmokeNpcFullMinus10Right");
const $axeSmokeNpcFullMinus9Right = document.getElementById("axeSmokeNpcFullMinus9Right");
const $axeSmokeNpcFullMinus8Right = document.getElementById("axeSmokeNpcFullMinus8Right");
const $axeSmokeNpcFullMinus7Right = document.getElementById("axeSmokeNpcFullMinus7Right");
const $axeSmokeNpcFullMinus6Right = document.getElementById("axeSmokeNpcFullMinus6Right");
const $axeSmokeNpcFullMinus5Right = document.getElementById("axeSmokeNpcFullMinus5Right");
const $axeSmokeNpcFullMinus4Right = document.getElementById("axeSmokeNpcFullMinus4Right");
const $axeSmokeNpcFullMinus3Right = document.getElementById("axeSmokeNpcFullMinus3Right");
const $axeSmokeNpcFullMinus2Right = document.getElementById("axeSmokeNpcFullMinus2Right");
const $axeSmokeNpcFullMinus1Right = document.getElementById("axeSmokeNpcFullMinus1Right");
const $axeSmokeNpcFullRight = document.getElementById("axeSmokeNpcFullRight");
const $bowFireworkExplosionNpcLeft = document.getElementById("bowFireworkExplosionNpcLeft");
const $bowFireworkExplosionNpcRight = document.getElementById("bowFireworkExplosionNpcRight");
const $bowSmokeNpcFullMinus10Left = document.getElementById("bowSmokeNpcFullMinus10Left");
const $bowSmokeNpcFullMinus9Left = document.getElementById("bowSmokeNpcFullMinus9Left");
const $bowSmokeNpcFullMinus8Left = document.getElementById("bowSmokeNpcFullMinus8Left");
const $bowSmokeNpcFullMinus7Left = document.getElementById("bowSmokeNpcFullMinus7Left");
const $bowSmokeNpcFullMinus6Left = document.getElementById("bowSmokeNpcFullMinus6Left");
const $bowSmokeNpcFullMinus5Left = document.getElementById("bowSmokeNpcFullMinus5Left");
const $bowSmokeNpcFullMinus4Left = document.getElementById("bowSmokeNpcFullMinus4Left");
const $bowSmokeNpcFullMinus3Left = document.getElementById("bowSmokeNpcFullMinus3Left");
const $bowSmokeNpcFullMinus2Left = document.getElementById("bowSmokeNpcFullMinus2Left");
const $bowSmokeNpcFullMinus1Left = document.getElementById("bowSmokeNpcFullMinus1Left");
const $bowSmokeNpcFullLeft = document.getElementById("bowSmokeNpcFullLeft");
const $bowSmokeNpcFullMinus10Right = document.getElementById("bowSmokeNpcFullMinus10Right");
const $bowSmokeNpcFullMinus9Right = document.getElementById("bowSmokeNpcFullMinus9Right");
const $bowSmokeNpcFullMinus8Right = document.getElementById("bowSmokeNpcFullMinus8Right");
const $bowSmokeNpcFullMinus7Right = document.getElementById("bowSmokeNpcFullMinus7Right");
const $bowSmokeNpcFullMinus6Right = document.getElementById("bowSmokeNpcFullMinus6Right");
const $bowSmokeNpcFullMinus5Right = document.getElementById("bowSmokeNpcFullMinus5Right");
const $bowSmokeNpcFullMinus4Right = document.getElementById("bowSmokeNpcFullMinus4Right");
const $bowSmokeNpcFullMinus3Right = document.getElementById("bowSmokeNpcFullMinus3Right");
const $bowSmokeNpcFullMinus2Right = document.getElementById("bowSmokeNpcFullMinus2Right");
const $bowSmokeNpcFullMinus1Right = document.getElementById("bowSmokeNpcFullMinus1Right");
const $bowSmokeNpcFullRight = document.getElementById("bowSmokeNpcFullRight");
const $swordFireworkExplosionNpcLeft = document.getElementById("swordFireworkExplosionNpcLeft");
const $swordFireworkExplosionNpcRight = document.getElementById("swordFireworkExplosionNpcRight");
const $swordSmokeNpcFullMinus10Left = document.getElementById("swordSmokeNpcFullMinus10Left");
const $swordSmokeNpcFullMinus9Left = document.getElementById("swordSmokeNpcFullMinus9Left");
const $swordSmokeNpcFullMinus8Left = document.getElementById("swordSmokeNpcFullMinus8Left");
const $swordSmokeNpcFullMinus7Left = document.getElementById("swordSmokeNpcFullMinus7Left");
const $swordSmokeNpcFullMinus6Left = document.getElementById("swordSmokeNpcFullMinus6Left");
const $swordSmokeNpcFullMinus5Left = document.getElementById("swordSmokeNpcFullMinus5Left");
const $swordSmokeNpcFullMinus4Left = document.getElementById("swordSmokeNpcFullMinus4Left");
const $swordSmokeNpcFullMinus3Left = document.getElementById("swordSmokeNpcFullMinus3Left");
const $swordSmokeNpcFullMinus2Left = document.getElementById("swordSmokeNpcFullMinus2Left");
const $swordSmokeNpcFullMinus1Left = document.getElementById("swordSmokeNpcFullMinus1Left");
const $swordSmokeNpcFullLeft = document.getElementById("swordSmokeNpcFullLeft");
const $swordSmokeNpcFullMinus10Right = document.getElementById("swordSmokeNpcFullMinus10Right");
const $swordSmokeNpcFullMinus9Right = document.getElementById("swordSmokeNpcFullMinus9Right");
const $swordSmokeNpcFullMinus8Right = document.getElementById("swordSmokeNpcFullMinus8Right");
const $swordSmokeNpcFullMinus7Right = document.getElementById("swordSmokeNpcFullMinus7Right");
const $swordSmokeNpcFullMinus6Right = document.getElementById("swordSmokeNpcFullMinus6Right");
const $swordSmokeNpcFullMinus5Right = document.getElementById("swordSmokeNpcFullMinus5Right");
const $swordSmokeNpcFullMinus4Right = document.getElementById("swordSmokeNpcFullMinus4Right");
const $swordSmokeNpcFullMinus3Right = document.getElementById("swordSmokeNpcFullMinus3Right");
const $swordSmokeNpcFullMinus2Right = document.getElementById("swordSmokeNpcFullMinus2Right");
const $swordSmokeNpcFullMinus1Right = document.getElementById("swordSmokeNpcFullMinus1Right");
const $swordSmokeNpcFullRight = document.getElementById("swordSmokeNpcFullRight");
const $axeBowFireworkExplosionNpcLeft = document.getElementById("axeBowFireworkExplosionNpcLeft");
const $axeBowFireworkExplosionNpcRight = document.getElementById("axeBowFireworkExplosionNpcRight");
const $axeBowSmokeNpcFullMinus10Left = document.getElementById("axeBowSmokeNpcFullMinus10Left");
const $axeBowSmokeNpcFullMinus9Left = document.getElementById("axeBowSmokeNpcFullMinus9Left");
const $axeBowSmokeNpcFullMinus8Left = document.getElementById("axeBowSmokeNpcFullMinus8Left");
const $axeBowSmokeNpcFullMinus7Left = document.getElementById("axeBowSmokeNpcFullMinus7Left");
const $axeBowSmokeNpcFullMinus6Left = document.getElementById("axeBowSmokeNpcFullMinus6Left");
const $axeBowSmokeNpcFullMinus5Left = document.getElementById("axeBowSmokeNpcFullMinus5Left");
const $axeBowSmokeNpcFullMinus4Left = document.getElementById("axeBowSmokeNpcFullMinus4Left");
const $axeBowSmokeNpcFullMinus3Left = document.getElementById("axeBowSmokeNpcFullMinus3Left");
const $axeBowSmokeNpcFullMinus2Left = document.getElementById("axeBowSmokeNpcFullMinus2Left");
const $axeBowSmokeNpcFullMinus1Left = document.getElementById("axeBowSmokeNpcFullMinus1Left");
const $axeBowSmokeFullNpcLeft = document.getElementById("axeBowSmokeNpcFullLeft");
const $axeBowSmokeNpcFullMinus10Right = document.getElementById("axeBowSmokeNpcFullMinus10Right");
const $axeBowSmokeNpcFullMinus9Right = document.getElementById("axeBowSmokeNpcFullMinus9Right");
const $axeBowSmokeNpcFullMinus8Right = document.getElementById("axeBowSmokeNpcFullMinus8Right");
const $axeBowSmokeNpcFullMinus7Right = document.getElementById("axeBowSmokeNpcFullMinus7Right");
const $axeBowSmokeNpcFullMinus6Right = document.getElementById("axeBowSmokeNpcFullMinus6Right");
const $axeBowSmokeNpcFullMinus5Right = document.getElementById("axeBowSmokeNpcFullMinus5Right");
const $axeBowSmokeNpcFullMinus4Right = document.getElementById("axeBowSmokeNpcFullMinus4Right");
const $axeBowSmokeNpcFullMinus3Right = document.getElementById("axeBowSmokeNpcFullMinus3Right");
const $axeBowSmokeNpcFullMinus2Right = document.getElementById("axeBowSmokeNpcFullMinus2Right");
const $axeBowSmokeNpcFullMinus1Right = document.getElementById("axeBowSmokeNpcFullMinus1Right");
const $axeBowSmokeFullNpcRight = document.getElementById("axeBowSmokeNpcFullRight");
const $axeSwordFireworkExplosionNpcLeft = document.getElementById("axeSwordFireworkExplosionNpcLeft");
const $axeSwordFireworkExplosionNpcRight = document.getElementById("axeSwordFireworkExplosionNpcRight");
const $axeSwordSmokeNpcFullMinus10Left = document.getElementById("axeSwordSmokeNpcFullMinus10Left");
const $axeSwordSmokeNpcFullMinus9Left = document.getElementById("axeSwordSmokeNpcFullMinus9Left");
const $axeSwordSmokeNpcFullMinus8Left = document.getElementById("axeSwordSmokeNpcFullMinus8Left");
const $axeSwordSmokeNpcFullMinus7Left = document.getElementById("axeSwordSmokeNpcFullMinus7Left");
const $axeSwordSmokeNpcFullMinus6Left = document.getElementById("axeSwordSmokeNpcFullMinus6Left");
const $axeSwordSmokeNpcFullMinus5Left = document.getElementById("axeSwordSmokeNpcFullMinus5Left");
const $axeSwordSmokeNpcFullMinus4Left = document.getElementById("axeSwordSmokeNpcFullMinus4Left");
const $axeSwordSmokeNpcFullMinus3Left = document.getElementById("axeSwordSmokeNpcFullMinus3Left");
const $axeSwordSmokeNpcFullMinus2Left = document.getElementById("axeSwordSmokeNpcFullMinus2Left");
const $axeSwordSmokeNpcFullMinus1Left = document.getElementById("axeSwordSmokeNpcFullMinus1Left");
const $axeSwordSmokeNpcFullLeft = document.getElementById("axeSwordSmokeNpcFullLeft");
const $axeSwordSmokeNpcFullMinus10Right = document.getElementById("axeSwordSmokeNpcFullMinus10Right");
const $axeSwordSmokeNpcFullMinus9Right = document.getElementById("axeSwordSmokeNpcFullMinus9Right");
const $axeSwordSmokeNpcFullMinus8Right = document.getElementById("axeSwordSmokeNpcFullMinus8Right");
const $axeSwordSmokeNpcFullMinus7Right = document.getElementById("axeSwordSmokeNpcFullMinus7Right");
const $axeSwordSmokeNpcFullMinus6Right = document.getElementById("axeSwordSmokeNpcFullMinus6Right");
const $axeSwordSmokeNpcFullMinus5Right = document.getElementById("axeSwordSmokeNpcFullMinus5Right");
const $axeSwordSmokeNpcFullMinus4Right = document.getElementById("axeSwordSmokeNpcFullMinus4Right");
const $axeSwordSmokeNpcFullMinus3Right = document.getElementById("axeSwordSmokeNpcFullMinus3Right");
const $axeSwordSmokeNpcFullMinus2Right = document.getElementById("axeSwordSmokeNpcFullMinus2Right");
const $axeSwordSmokeNpcFullMinus1Right = document.getElementById("axeSwordSmokeNpcFullMinus1Right");
const $axeSwordSmokeNpcFullRight = document.getElementById("axeSwordSmokeNpcFullRight");
const $bowSwordFireworkExplosionNpcLeft = document.getElementById("bowSwordFireworkExplosionNpcLeft");
const $bowSwordFireworkExplosionNpcRight = document.getElementById("bowSwordFireworkExplosionNpcRight");
const $bowSwordSmokeNpcFullMinus10Left = document.getElementById("bowSwordSmokeNpcFullMinus10Left");
const $bowSwordSmokeNpcFullMinus9Left = document.getElementById("bowSwordSmokeNpcFullMinus9Left");
const $bowSwordSmokeNpcFullMinus8Left = document.getElementById("bowSwordSmokeNpcFullMinus8Left");
const $bowSwordSmokeNpcFullMinus7Left = document.getElementById("bowSwordSmokeNpcFullMinus7Left");
const $bowSwordSmokeNpcFullMinus6Left = document.getElementById("bowSwordSmokeNpcFullMinus6Left");
const $bowSwordSmokeNpcFullMinus5Left = document.getElementById("bowSwordSmokeNpcFullMinus5Left");
const $bowSwordSmokeNpcFullMinus4Left = document.getElementById("bowSwordSmokeNpcFullMinus4Left");
const $bowSwordSmokeNpcFullMinus3Left = document.getElementById("bowSwordSmokeNpcFullMinus3Left");
const $bowSwordSmokeNpcFullMinus2Left = document.getElementById("bowSwordSmokeNpcFullMinus2Left");
const $bowSwordSmokeNpcFullMinus1Left = document.getElementById("bowSwordSmokeNpcFullMinus1Left");
const $bowSwordSmokeNpcFullLeft = document.getElementById("bowSwordSmokeNpcFullLeft");
const $bowSwordSmokeNpcFullMinus10Right = document.getElementById("bowSwordSmokeNpcFullMinus10Right");
const $bowSwordSmokeNpcFullMinus9Right = document.getElementById("bowSwordSmokeNpcFullMinus9Right");
const $bowSwordSmokeNpcFullMinus8Right = document.getElementById("bowSwordSmokeNpcFullMinus8Right");
const $bowSwordSmokeNpcFullMinus7Right = document.getElementById("bowSwordSmokeNpcFullMinus7Right");
const $bowSwordSmokeNpcFullMinus6Right = document.getElementById("bowSwordSmokeNpcFullMinus6Right");
const $bowSwordSmokeNpcFullMinus5Right = document.getElementById("bowSwordSmokeNpcFullMinus5Right");
const $bowSwordSmokeNpcFullMinus4Right = document.getElementById("bowSwordSmokeNpcFullMinus4Right");
const $bowSwordSmokeNpcFullMinus3Right = document.getElementById("bowSwordSmokeNpcFullMinus3Right");
const $bowSwordSmokeNpcFullMinus2Right = document.getElementById("bowSwordSmokeNpcFullMinus2Right");
const $bowSwordSmokeNpcFullMinus1Right = document.getElementById("bowSwordSmokeNpcFullMinus1Right");
const $bowSwordSmokeNpcFullRight = document.getElementById("bowSwordSmokeNpcFullRight");
const $axeBowSwordFireworkExplosionNpcLeft = document.getElementById("axeBowSwordFireworkExplosionNpcLeft");
const $axeBowSwordFireworkExplosionNpcRight = document.getElementById("axeBowSwordFireworkExplosionNpcRight");
const $axeBowSwordSmokeNpcFullMinus10Left = document.getElementById("axeBowSwordSmokeNpcFullMinus10Left");
const $axeBowSwordSmokeNpcFullMinus9Left = document.getElementById("axeBowSwordSmokeNpcFullMinus9Left");
const $axeBowSwordSmokeNpcFullMinus8Left = document.getElementById("axeBowSwordSmokeNpcFullMinus8Left");
const $axeBowSwordSmokeNpcFullMinus7Left = document.getElementById("axeBowSwordSmokeNpcFullMinus7Left");
const $axeBowSwordSmokeNpcFullMinus6Left = document.getElementById("axeBowSwordSmokeNpcFullMinus6Left");
const $axeBowSwordSmokeNpcFullMinus5Left = document.getElementById("axeBowSwordSmokeNpcFullMinus5Left");
const $axeBowSwordSmokeNpcFullMinus4Left = document.getElementById("axeBowSwordSmokeNpcFullMinus4Left");
const $axeBowSwordSmokeNpcFullMinus3Left = document.getElementById("axeBowSwordSmokeNpcFullMinus3Left");
const $axeBowSwordSmokeNpcFullMinus2Left = document.getElementById("axeBowSwordSmokeNpcFullMinus2Left");
const $axeBowSwordSmokeNpcFullMinus1Left = document.getElementById("axeBowSwordSmokeNpcFullMinus1Left");
const $axeBowSwordSmokeNpcFullLeft = document.getElementById("axeBowSwordSmokeNpcFullLeft");
const $axeBowSwordSmokeNpcFullMinus10Right = document.getElementById("axeBowSwordSmokeNpcFullMinus10Right");
const $axeBowSwordSmokeNpcFullMinus9Right = document.getElementById("axeBowSwordSmokeNpcFullMinus9Right");
const $axeBowSwordSmokeNpcFullMinus8Right = document.getElementById("axeBowSwordSmokeNpcFullMinus8Right");
const $axeBowSwordSmokeNpcFullMinus7Right = document.getElementById("axeBowSwordSmokeNpcFullMinus7Right");
const $axeBowSwordSmokeNpcFullMinus6Right = document.getElementById("axeBowSwordSmokeNpcFullMinus6Right");
const $axeBowSwordSmokeNpcFullMinus5Right = document.getElementById("axeBowSwordSmokeNpcFullMinus5Right");
const $axeBowSwordSmokeNpcFullMinus4Right = document.getElementById("axeBowSwordSmokeNpcFullMinus4Right");
const $axeBowSwordSmokeNpcFullMinus3Right = document.getElementById("axeBowSwordSmokeNpcFullMinus3Right");
const $axeBowSwordSmokeNpcFullMinus2Right = document.getElementById("axeBowSwordSmokeNpcFullMinus2Right");
const $axeBowSwordSmokeNpcFullMinus1Right = document.getElementById("axeBowSwordSmokeNpcFullMinus1Right");
const $axeBowSwordSmokeNpcFullRight = document.getElementById("axeBowSwordSmokeNpcFullRight");
const $fireworkAxeNpcLeft = document.getElementById("fireworkAxeNpcLeft");
const $fireworkBowNpcLeft = document.getElementById("fireworkBowNpcLeft");
const $fireworkSwordNpcLeft = document.getElementById("fireworkSwordNpcLeft");
const $fireworkAxeNpcRight = document.getElementById("fireworkAxeNpcRight");
const $fireworkBowNpcRight = document.getElementById("fireworkBowNpcRight");
const $fireworkSwordNpcRight = document.getElementById("fireworkSwordNpcRight");
const $fireworkAxeShimmerNpcFullLeft = document.getElementById("fireworkAxeShimmerNpcFullLeft");
const $fireworkBowShimmerNpcFullLeft = document.getElementById("fireworkBowShimmerNpcFullLeft");
const $fireworkSwordShimmerNpcFullLeft = document.getElementById("fireworkSwordShimmerNpcFullLeft");
const $fireworkAxeShimmerNpcFullRight = document.getElementById("fireworkAxeShimmerNpcFullRight");
const $fireworkBowShimmerNpcFullRight = document.getElementById("fireworkBowShimmerNpcFullRight");
const $fireworkSwordShimmerNpcFullRight = document.getElementById("fireworkSwordShimmerNpcFullRight");
//const $ = document.getElementById("");

//pc redWiz

const $redWizPcDefendLeft = document.getElementById("redWizPcDefendLeft");
const $redWizPcDefendRight = document.getElementById("redWizPcDefendRight");
const $redWizPc = document.getElementById("redWizPc");
const $redWizPcStruckLeft = document.getElementById("redWizPcStruckLeft");
const $redWizPcStruckRight = document.getElementById("redWizPcStruckRight");

//npc redWiz

const $redWizNpcDefendLeft = document.getElementById("redWizNpcDefendLeft");
const $redWizNpcDefendRight = document.getElementById("redWizNpcDefendRight");
const $redWizNpc = document.getElementById("redWizNpc");
const $redWizNpcStruckLeft = document.getElementById("redWizNpcStruckLeft");
const $redWizNpcStruckRight = document.getElementById("redWizNpcStruckRight");

var init = () => {
    $whiteBackground.setAttribute("class", "visible")    
}

//Initial Character Setup And Final Removal

var setSceneWithBluePc = () => {
    $blueWizArmPcDefaultLeft.setAttribute("class", "visible")
    $blueWizArmPcDefaultRight.setAttribute("class", "visible")
    $blueWizPcWithoutArmsOrArchimedes.setAttribute("class", "visible")
}

var cleanSceneOfBluePc = () => {
    $blueWizArmPcDefaultLeft.setAttribute("class", "hidden")
    $blueWizArmPcDefaultRight.setAttribute("class", "hidden")
    $blueWizPcWithoutArmsOrArchimedes.setAttribute("class", "hidden")
}

var setSceneWithBlueNpc = () => {
    $blueWizArmNpcDefaultLeft.setAttribute("class", "visible")
    $blueWizArmNpcDefaultRight.setAttribute("class", "visible")    
    $blueWizNpcWithoutArmsOrArchimedes.setAttribute("class", "visible")
}

var cleanSceneOfBlueNpc = () => {
    $blueWizArmNpcDefaultLeft.setAttribute("class", "hidden")
    $blueWizArmNpcDefaultRight.setAttribute("class", "hidden")
    $blueWizNpcWithoutArmsOrArchimedes.setAttribute("class", "hidden")
}

var setSceneWithGreyPc = () => {
    $greyWizArmPcDefaultLeft.setAttribute("class", "visible")
    $greyWizArmPcDefaultRight.setAttribute("class", "visible")
    $greyWizPcWithoutArms.setAttribute("class", "visible")    
}

var cleanSceneOfGreyPc = () => {
    $greyWizArmPcDefaultLeft.setAttribute("class", "hidden")
    $greyWizArmPcDefaultRight.setAttribute("class", "hidden")
    $greyWizPcWithoutArms.setAttribute("class", "hidden")
}

var setSceneWithGreyNpc = () => {   
    $greyWizArmNpcDefaultLeft.setAttribute("class", "visible")
    $greyWizArmNpcDefaultRight.setAttribute("class", "visible")
    $greyWizNpcWithoutArms.setAttribute("class", "visible")
}

var cleanSceneOfGreyNpc = () => {
    $greyWizArmNpcDefaultLeft.setAttribute("class", "hidden")
    $greyWizArmNpcDefaultRight.setAttribute("class", "hidden")
    $greyWizNpcWithoutArms.setAttribute("class", "hidden")
}

var setSceneWithRedPc = () => {
    $redWizPc.setAttribute("class", "visible")    
}

var cleanSceneOfRedPc = () => {
    $redWizPc.setAttribute("class", "hidden")    
}

var setSceneWithRedNpc = () => {
    $redWizNpc.setAttribute("class", "visible")
}

var cleanSceneOfRedNpc = () => {
    $redWizNpc.setAttribute("class", "hidden")
}

//pc blueWiz

var blueWizPcDefendsLeft = () => {
    $blueWizArmPcDefendLeft.setAttribute("class", "visible")
    $blueWizArmPcDefaultLeft.setAttribute("class", "hidden")
}

var blueWizPcDefendsRight = () => {
    $blueWizArmPcDefendRight.setAttribute("class", "visible")
    $blueWizArmPcDefaultRight.setAttribute("class", "hidden")
}

var blueWizPcAttacksLeft = () => {
    $blueWizArmPcAttackLeft.setAttribute("class", "visible")
    $blueWizArmPcDefaultLeft.setAttribute("class", "hidden")
}

var blueWizPcAttacksRight = () => {
    $blueWizArmPcAttackRight.setAttribute("class", "visible")
    $blueWizArmPcDefaultRight.setAttribute("class", "hidden")
}

var blueWizPcClenchsLeft = () => {
    $blueWizArmPcClenchLeft.setAttribute("class", "visible")
    $blueWizArmPcAttackLeft.setAttribute("class", "hidden")    
}

var blueWizPcClenchsRight = () => {
    $blueWizArmPcClenchRight.setAttribute("class", "visible")
    $blueWizArmPcAttackRight.setAttribute("class", "hidden")    
}

var blueWizPcRestsArmLeft = () => {
    $blueWizArmPcDefaultLeft.setAttribute("class", "visible")
    $blueWizArmPcAttackLeft.setAttribute("class", "hidden")  
    $blueWizArmPcDefendLeft.setAttribute("class", "hidden")   
}

var blueWizPcRestsArmRight = () => {
    $blueWizArmPcDefaultRight.setAttribute("class", "visible")
    $blueWizArmPcAttackRight.setAttribute("class", "hidden") 
    $blueWizArmPcDefendRight.setAttribute("class", "hidden")    
}

var magicMissileFiresPcLeft = () => {
    $magicMissile_0PcLeft.setAttribute("class", "visible")
    $blueWizArmPcAttackLeft.setAttribute("class", "visible")
    $blueWizArmPcClenchLeft.setAttribute("class", "hidden")
    $magicMissileCondensation_5PcLeft.setAttribute("class", "hidden")
}

var magicMissileFiresPcRight = () => {
    $magicMissile_0PcRight.setAttribute("class", "visible")
    $blueWizArmPcAttackRight.setAttribute("class", "visible")
    $blueWizArmPcClenchRight.setAttribute("class", "hidden")
    $magicMissileCondensation_5PcRight.setAttribute("class", "hidden")
}

var magicMissileFires2PcLeft = () => {
    $magicMissile_1PcLeft.setAttribute("class", "visible")
    $magicMissile_0PcLeft.setAttribute("class", "hidden")    
}

var magicMissileFires2PcRight = () => {
    $magicMissile_1PcRight.setAttribute("class", "visible")
    $magicMissile_0PcRight.setAttribute("class", "hidden")    
}

var magicMissileFires3PcLeft = () => {
    $magicMissile_2PcLeft.setAttribute("class", "visible")
    $magicMissile_1PcLeft.setAttribute("class", "hidden")    
}

var magicMissileFires3PcRight = () => {
    $magicMissile_2PcRight.setAttribute("class", "visible")
    $magicMissile_1PcRight.setAttribute("class", "hidden")    
}

var magicMissileFires4PcLeft = () => {
    $magicMissile_3PcLeft.setAttribute("class", "visible")
    $magicMissile_2PcLeft.setAttribute("class", "hidden")    
}

var magicMissileFires4PcRight = () => {
    $magicMissile_3PcRight.setAttribute("class", "visible")
    $magicMissile_2PcRight.setAttribute("class", "hidden")    
}

var magicMissileCondensesPcLeft = () => {
    $magicMissileCondensation_0PcLeft.setAttribute("class", "visible")
    $star_4PcLeft.setAttribute("class", "hidden")
}

var magicMissileCondensesPcRight = () => {
    $magicMissileCondensation_0PcRight.setAttribute("class", "visible")
    $star_4PcRight.setAttribute("class", "hidden")
}

var magicMissileCondenses2PcLeft = () => {
    $magicMissileCondensation_1PcLeft.setAttribute("class", "visible")
    $magicMissileCondensation_0PcLeft.setAttribute("class", "hidden")        
}

var magicMissileCondenses2PcRight = () => {
    $magicMissileCondensation_1PcRight.setAttribute("class", "visible")
    $magicMissileCondensation_0PcRight.setAttribute("class", "hidden")        
}

var magicMissileCondenses3PcLeft = () => {
    $magicMissileCondensation_2PcLeft.setAttribute("class", "visible")
    $magicMissileCondensation_1PcLeft.setAttribute("class", "hidden")        
}

var magicMissileCondenses3PcRight = () => {
    $magicMissileCondensation_2PcRight.setAttribute("class", "visible")
    $magicMissileCondensation_1PcRight.setAttribute("class", "hidden")        
}

var magicMissileCondenses4PcLeft = () => {
    $magicMissileCondensation_3PcLeft.setAttribute("class", "visible")
    $magicMissileCondensation_2PcLeft.setAttribute("class", "hidden")        
}

var magicMissileCondenses4PcRight = () => {
    $magicMissileCondensation_3PcRight.setAttribute("class", "visible")
    $magicMissileCondensation_2PcRight.setAttribute("class", "hidden")        
}

var magicMissileCondenses5PcLeft = () => {
    $magicMissileCondensation_4PcLeft.setAttribute("class", "visible")
    $magicMissileCondensation_3PcLeft.setAttribute("class", "hidden")        
}

var magicMissileCondenses5PcRight = () => {
    $magicMissileCondensation_4PcRight.setAttribute("class", "visible")
    $magicMissileCondensation_3PcRight.setAttribute("class", "hidden")        
}

var magicMissileCondenses6PcLeft = () => {
    $magicMissileCondensation_5PcLeft.setAttribute("class", "visible")
    $magicMissileCondensation_4PcLeft.setAttribute("class", "hidden")        
}

var magicMissileCondenses6PcRight = () => {
    $magicMissileCondensation_5PcRight.setAttribute("class", "visible")
    $magicMissileCondensation_4PcRight.setAttribute("class", "hidden")        
}

var magicMissilePcDeflectedLeft = () => {
    $magicMissilePcDefendedLeft.setAttribute("class", "visible")
    $magicMissile_3PcLeft.setAttribute("class", "hidden")
}

var magicMissilePcDeflectedRight = () => {
    $magicMissilePcDefendedRight.setAttribute("class", "visible")
    $magicMissile_3PcRight.setAttribute("class", "hidden")
}

var magicMissileExplodesPcDeflectedLeft = () => {
    $magicMissileSplosionPcDefendedLeft.setAttribute("class", "visible")
    $magicMissilePcDefendedLeft.setAttribute("class", "hidden")
}

var magicMissileExplodesPcDeflectedRight = () => {
    $magicMissileSplosionPcDefendedRight.setAttribute("class", "visible")
    $magicMissilePcDefendedRight.setAttribute("class", "hidden")
}

var magicMissileExplosionDissipatesPcDefendedLeft = () => {
    $magicMissileSplosionPcDefendedLeft.setAttribute("class", "hidden")
}

var magicMissileExplosionDissipatesPcDefendedRight = () => {
    $magicMissileSplosionPcDefendedRight.setAttribute("class", "hidden")
}

var magicMissileExplodesPcLeft = () => {
    $magicMissile_3PcLeft.setAttribute("class", "hidden")    
    $magicMissileSplosionPcLeft.setAttribute("class", "visible")    
}

var magicMissileExplodesPcRight = () => {
    $magicMissile_3PcRight.setAttribute("class", "hidden")
    $magicMissileSplosionPcRight.setAttribute("class", "visible")    
}

var magicMissileExplosionDissipatesPcLeft = () => {
    $magicMissileSplosionPcLeft.setAttribute("class", "hidden")
}

var magicMissileExplosionDissipatesPcRight = () => {
    $magicMissileSplosionPcRight.setAttribute("class", "hidden")
}

var starFormsPcLeft = () => {
    $star_0PcLeft.setAttribute("class", "visible")
}

var starFormsPcRight = () => {
    $star_0PcRight.setAttribute("class", "visible")
}

var starForms2PcLeft = () => {
    $star_1PcLeft.setAttribute("class", "visible")
    $star_0PcLeft.setAttribute("class", "hidden")
}

var starForms2PcRight = () => {
    $star_1PcRight.setAttribute("class", "visible")
    $star_0PcRight.setAttribute("class", "hidden")
}

var starForms3PcLeft = () => {
    $star_2PcLeft.setAttribute("class", "visible")
    $star_1PcLeft.setAttribute("class", "hidden")
}

var starForms3PcRight = () => {
    $star_2PcRight.setAttribute("class", "visible")
    $star_1PcRight.setAttribute("class", "hidden")
}

var starForms4PcLeft = () => {
    $star_3PcLeft.setAttribute("class", "visible")
    $star_2PcLeft.setAttribute("class", "hidden")
}

var starForms4PcRight = () => {
    $star_3PcRight.setAttribute("class", "visible")
    $star_2PcRight.setAttribute("class", "hidden")
}

var starForms5PcLeft = () => {
    $star_4PcLeft.setAttribute("class", "visible")
    $star_3PcLeft.setAttribute("class", "hidden")
}

var starForms5PcRight = () => {
    $star_4PcRight.setAttribute("class", "visible")
    $star_3PcRight.setAttribute("class", "hidden")
}

//npc blueWiz

var blueWizNpcDefendsLeft = () => {
    $blueWizArmNpcDefendLeft.setAttribute("class", "visible")
    $blueWizArmNpcDefaultLeft.setAttribute("class", "hidden")     
}

var blueWizNpcDefendsRight = () => {
    $blueWizArmNpcDefendRight.setAttribute("class", "visible")
    $blueWizArmNpcDefaultRight.setAttribute("class", "hidden")  
}

var blueWizNpcAttacksLeft = () => {
    $blueWizArmNpcAttackLeft.setAttribute("class", "visible")
    $blueWizArmNpcDefaultLeft.setAttribute("class", "hidden")
}

var blueWizNpcAttacksRight = () => {
    $blueWizArmNpcAttackRight.setAttribute("class", "visible")
    $blueWizArmNpcDefaultRight.setAttribute("class", "hidden")
}

var blueWizNpcClenchsLeft = () => {
    $blueWizArmNpcClenchLeft.setAttribute("class", "visible")
    $blueWizArmNpcAttackLeft.setAttribute("class", "hidden")
    $magicMissileCondensation_5NpcLeft.setAttribute("class", "hidden")
}

var blueWizNpcClenchsRight = () => {
    $blueWizArmNpcClenchRight.setAttribute("class", "visible")
    $blueWizArmNpcAttackRight.setAttribute("class", "hidden")
    $magicMissileCondensation_5NpcRight.setAttribute("class", "hidden")    
}

var blueWizNpcRestsArmLeft = () => {
    $blueWizArmNpcDefaultLeft.setAttribute("class", "visible")
    $blueWizArmNpcAttackLeft.setAttribute("class", "hidden")
    $blueWizArmNpcDefendLeft.setAttribute("class", "hidden")     
}

var blueWizNpcRestsArmRight = () => {
    $blueWizArmNpcDefaultRight.setAttribute("class", "visible")
    $blueWizArmNpcAttackRight.setAttribute("class", "hidden")
    $blueWizArmNpcDefendRight.setAttribute("class", "hidden")     
}

var magicMissileFiresNpcLeft = () => {
    $magicMissile_0NpcLeft.setAttribute("class", "visible")
    $blueWizArmNpcAttackLeft.setAttribute("class", "visible")
    $blueWizArmNpcClenchLeft.setAttribute("class", "hidden")
}

var magicMissileFiresNpcRight = () => {
    $magicMissile_0NpcRight.setAttribute("class", "visible")
    $blueWizArmNpcAttackRight.setAttribute("class", "visible")
    $blueWizArmNpcClenchRight.setAttribute("class", "hidden")
}

var magicMissileFires2NpcLeft = () => {
    $magicMissile_1NpcLeft.setAttribute("class", "visible")
    $magicMissile_0NpcLeft.setAttribute("class", "hidden")    
}

var magicMissileFires2NpcRight = () => {
    $magicMissile_1NpcRight.setAttribute("class", "visible")
    $magicMissile_0NpcRight.setAttribute("class", "hidden")    
}

var magicMissileFires3NpcLeft = () => {
    $magicMissile_2NpcLeft.setAttribute("class", "visible")
    $magicMissile_1NpcLeft.setAttribute("class", "hidden")    
}

var magicMissileFires3NpcRight = () => {
    $magicMissile_2NpcRight.setAttribute("class", "visible")
    $magicMissile_1NpcRight.setAttribute("class", "hidden")    
}

var magicMissileFires4NpcLeft = () => {
    $magicMissile_3NpcLeft.setAttribute("class", "visible")
    $magicMissile_2NpcLeft.setAttribute("class", "hidden")    
}

var magicMissileFires4NpcRight = () => {
    $magicMissile_3NpcRight.setAttribute("class", "visible")
    $magicMissile_2NpcRight.setAttribute("class", "hidden")    
}

var magicMissileCondensesNpcLeft = () => {
    $magicMissileCondensation_0NpcLeft.setAttribute("class", "visible")
    $star_4NpcLeft.setAttribute("class", "hidden")
}

var magicMissileCondensesNpcRight = () => {
    $magicMissileCondensation_0NpcRight.setAttribute("class", "visible")
    $star_4NpcRight.setAttribute("class", "hidden")
}

var magicMissileCondenses2NpcLeft = () => {
    $magicMissileCondensation_1NpcLeft.setAttribute("class", "visible")
    $magicMissileCondensation_0NpcLeft.setAttribute("class", "hidden")        
}

var magicMissileCondenses2NpcRight = () => {
    $magicMissileCondensation_1NpcRight.setAttribute("class", "visible")
    $magicMissileCondensation_0NpcRight.setAttribute("class", "hidden")        
}

var magicMissileCondenses3NpcLeft = () => {
    $magicMissileCondensation_2NpcLeft.setAttribute("class", "visible")
    $magicMissileCondensation_1NpcLeft.setAttribute("class", "hidden")        
}

var magicMissileCondenses3NpcRight = () => {
    $magicMissileCondensation_2NpcRight.setAttribute("class", "visible")
    $magicMissileCondensation_1NpcRight.setAttribute("class", "hidden")        
}

var magicMissileCondenses4NpcLeft = () => {
    $magicMissileCondensation_3NpcLeft.setAttribute("class", "visible")
    $magicMissileCondensation_2NpcLeft.setAttribute("class", "hidden")        
}

var magicMissileCondenses4NpcRight = () => {
    $magicMissileCondensation_3NpcRight.setAttribute("class", "visible")
    $magicMissileCondensation_2NpcRight.setAttribute("class", "hidden")        
}

var magicMissileCondenses5NpcLeft = () => {
    $magicMissileCondensation_4NpcLeft.setAttribute("class", "visible")
    $magicMissileCondensation_3NpcLeft.setAttribute("class", "hidden")        
}

var magicMissileCondenses5NpcRight = () => {
    $magicMissileCondensation_4NpcRight.setAttribute("class", "visible")
    $magicMissileCondensation_3NpcRight.setAttribute("class", "hidden")        
}

var magicMissileCondenses6NpcLeft = () => {
    $magicMissileCondensation_5NpcLeft.setAttribute("class", "visible")
    $magicMissileCondensation_4NpcLeft.setAttribute("class", "hidden")        
}

var magicMissileCondenses6NpcRight = () => {
    $magicMissileCondensation_5NpcRight.setAttribute("class", "visible")
    $magicMissileCondensation_4NpcRight.setAttribute("class", "hidden")        
}

var magicMissileNpcDeflectedLeft = () => {
    $magicMissileNpcDefendedLeft.setAttribute("class", "visible")
    $magicMissile_3NpcLeft.setAttribute("class", "hidden")
}

var magicMissileNpcDeflectedRight = () => {
    $magicMissileNpcDefendedRight.setAttribute("class", "visible")
    $magicMissile_3NpcRight.setAttribute("class", "hidden")
}

var magicMissileExplodesNpcDeflectedLeft = () => {
    $magicMissileSplosionNpcDefendedLeft.setAttribute("class", "visible")
    $magicMissileNpcDefendedLeft.setAttribute("class", "hidden")
}

var magicMissileExplodesNpcDeflectedRight = () => {
    $magicMissileSplosionNpcDefendedRight.setAttribute("class", "visible")
    $magicMissileNpcDefendedRight.setAttribute("class", "hidden")
}

var magicMissileExplosionDissipatesNpcDefendedLeft = () => {
    $magicMissileSplosionNpcDefendedLeft.setAttribute("class", "hidden")
}

var magicMissileExplosionDissipatesNpcDefendedRight = () => {
    $magicMissileSplosionNpcDefendedRight.setAttribute("class", "hidden")
}

var magicMissileExplodesNpcLeft = () => {
    $magicMissile_3NpcLeft.setAttribute("class", "hidden")    
    $magicMissileSplosionNpcLeft.setAttribute("class", "visible")    
}

var magicMissileExplodesNpcRight = () => {
    $magicMissile_3NpcRight.setAttribute("class", "hidden")
    $magicMissileSplosionNpcRight.setAttribute("class", "visible")    
}

var magicMissileExplosionDissipatesNpcLeft = () => {
    $magicMissileSplosionNpcLeft.setAttribute("class", "hidden")
}

var magicMissileExplosionDissipatesNpcRight = () => {
    $magicMissileSplosionNpcRight.setAttribute("class", "hidden")
}

var starFormsNpcLeft = () => {
    $star_0NpcLeft.setAttribute("class", "visible")
}

var starFormsNpcRight = () => {
    $star_0NpcRight.setAttribute("class", "visible")
}

var starForms2NpcLeft = () => {
    $star_1NpcLeft.setAttribute("class", "visible")
    $star_0NpcLeft.setAttribute("class", "hidden")
}

var starForms2NpcRight = () => {
    $star_1NpcRight.setAttribute("class", "visible")
    $star_0NpcRight.setAttribute("class", "hidden")
}

var starForms3NpcLeft = () => {
    $star_2NpcLeft.setAttribute("class", "visible")
    $star_1NpcLeft.setAttribute("class", "hidden")
}

var starForms3NpcRight = () => {
    $star_2NpcRight.setAttribute("class", "visible")
    $star_1NpcRight.setAttribute("class", "hidden")
}

var starForms4NpcLeft = () => {
    $star_3NpcLeft.setAttribute("class", "visible")
    $star_2NpcLeft.setAttribute("class", "hidden")
}

var starForms4NpcRight = () => {
    $star_3NpcRight.setAttribute("class", "visible")
    $star_2NpcRight.setAttribute("class", "hidden")
}

var starForms5NpcLeft = () => {
    $star_4NpcLeft.setAttribute("class", "visible")
    $star_3NpcLeft.setAttribute("class", "hidden")
}

var starForms5NpcRight = () => {
    $star_4NpcRight.setAttribute("class", "visible")
    $star_3NpcRight.setAttribute("class", "hidden")
}

//pc greyWiz

var greyWizPcDefendsLeft = () => {
    $greyWizArmPcDefendLeft.setAttribute("class", "visible")
    $greyWizArmPcDefaultLeft.setAttribute("class", "hidden")     
}

var greyWizPcDefendsRight = () => {
    $greyWizArmPcDefendRight.setAttribute("class", "visible")
    $greyWizArmPcDefaultRight.setAttribute("class", "hidden")  
}

var greyWizPcRestsArmLeft = () => {
    $greyWizArmPcDefaultLeft.setAttribute("class", "visible")
    $greyWizArmPcDefendLeft.setAttribute("class", "hidden")     
}

var greyWizPcRestsArmRight = () => {
    $greyWizArmPcDefaultRight.setAttribute("class", "visible")
    $greyWizArmPcDefendRight.setAttribute("class", "hidden")     
}

var greyWizPcStruckLeft = () => {
    $greyWizPcWithoutArms.setAttribute("class", "hidden")
    $greyWizArmPcDefaultLeft.setAttribute("class", "hidden")
    $greyWizArmPcDefendRight.setAttribute("class", "hidden")    
    $greyWizPcStruckLeft.setAttribute("class", "visible")
}

var greyWizPcStruckRight = () => {
    $greyWizPcWithoutArms.setAttribute("class", "hidden")
    $greyWizArmPcDefendLeft.setAttribute("class", "hidden")
    $greyWizArmPcDefaultRight.setAttribute("class", "hidden")
    $greyWizPcStruckRight.setAttribute("class", "visible")
}

var greyWizPcRegainsComposureLeft = () => {
    $greyWizPcWithoutArms.setAttribute("class", "visible")
    $greyWizArmPcDefaultLeft.setAttribute("class", "visible")
    $greyWizArmPcDefaultRight.setAttribute("class", "visible")    
    $greyWizPcStruckLeft.setAttribute("class", "hidden")
}

var greyWizPcRegainsComposureRight = () => {
    $greyWizPcWithoutArms.setAttribute("class", "visible")
    $greyWizArmPcDefaultLeft.setAttribute("class", "visible")
    $greyWizArmPcDefaultRight.setAttribute("class", "visible")
    $greyWizPcStruckRight.setAttribute("class", "hidden")
}

var greyWizArmPcRotationForAttack_0Left = () => {
    $greyWizPcWithoutHands.setAttribute("class", "visible")
    $greyWizHandPc15DegreesLeft.setAttribute("class", "visible")
    $greyWizHandPcDefaultRight.setAttribute("class", "visible")
    $greyWizPcWithoutArms.setAttribute("class", "hidden")
    $greyWizArmPcDefaultLeft.setAttribute("class", "hidden")
    $greyWizArmPcDefaultRight.setAttribute("class", "hidden")
}

var greyWizArmPcRotationForAttack_1Left = () => {
    $greyWizHandPc30DegreesLeft.setAttribute("class", "visible")    
    $greyWizHandPc15DegreesLeft.setAttribute("class", "hidden")    
}

var greyWizArmPcRotationForAttack_2Left = () => {
    $greyWizHandPc45DegreesLeft.setAttribute("class", "visible")    
    $greyWizHandPc30DegreesLeft.setAttribute("class", "hidden")    
}

var greyWizArmPcRotationForAttack_0Right = () => {
    $greyWizPcWithoutHands.setAttribute("class", "visible")
    $greyWizHandPc345DegreesRight.setAttribute("class", "visible")
    $greyWizHandPcDefaultLeft.setAttribute("class", "visible")
    $greyWizPcWithoutArms.setAttribute("class", "hidden")
    $greyWizArmPcDefaultRight.setAttribute("class", "hidden")
    $greyWizArmPcDefaultLeft.setAttribute("class", "hidden")
}

var greyWizArmPcRotationForAttack_1Right = () => {
    $greyWizHandPc330DegreesRight.setAttribute("class", "visible")    
    $greyWizHandPc345DegreesRight.setAttribute("class", "hidden")    
}

var greyWizArmPcRotationForAttack_2Right = () => {
    $greyWizHandPc315DegreesRight.setAttribute("class", "visible")    
    $greyWizHandPc330DegreesRight.setAttribute("class", "hidden")    
}

var greyWizArmPcRotationBackFromAttack_0Left = () => {        
    $greyWizHandPc30DegreesLeft.setAttribute("class", "visible")
    $greyWizHandPc45DegreesLeft.setAttribute("class", "hidden")    
}

var greyWizArmPcRotationBackFromAttack_1Left = () => {
    $greyWizHandPc15DegreesLeft.setAttribute("class", "visible")
    $greyWizHandPc30DegreesLeft.setAttribute("class", "hidden")        
}

var greyWizArmPcRotationBackFromAttack_2Left = () => {
    $greyWizPcWithoutArms.setAttribute("class", "visible")
    $greyWizArmPcDefaultLeft.setAttribute("class", "visible")
    $greyWizArmPcDefaultRight.setAttribute("class", "visible")
    $greyWizPcWithoutHands.setAttribute("class", "hidden")
    $greyWizHandPc15DegreesLeft.setAttribute("class", "hidden")
    $greyWizHandPcDefaultRight.setAttribute("class", "hidden")    
}

var greyWizArmPcRotationBackFromAttack_0Right = () => {        
    $greyWizHandPc330DegreesRight.setAttribute("class", "visible")
    $greyWizHandPc315DegreesRight.setAttribute("class", "hidden")    
}

var greyWizArmPcRotationBackFromAttack_1Right = () => {
    $greyWizHandPc345DegreesRight.setAttribute("class", "visible")
    $greyWizHandPc330DegreesRight.setAttribute("class", "hidden")        
}

var greyWizArmPcRotationBackFromAttack_2Right = () => {
    $greyWizPcWithoutArms.setAttribute("class", "visible")
    $greyWizArmPcDefaultRight.setAttribute("class", "visible")
    $greyWizArmPcDefaultLeft.setAttribute("class", "visible")
    $greyWizPcWithoutHands.setAttribute("class", "hidden")
    $greyWizHandPc345DegreesRight.setAttribute("class", "hidden")
    $greyWizHandPcDefaultLeft.setAttribute("class", "hidden")    
}

// axe Scenario Pc

var axeProtrudingFlyingFireworks_0PcLeft = () => {
    $protrudingFireworkTop_0PcLeft.setAttribute("class", "hidden")
}

var axeProtrudingFlyingFireworks_1PcLeft = () => {
    $protrudingFireworkTop_1PcLeft.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_0PcLeft.setAttribute("class", "hidden")
    $protrudingFireworkTop_0PcLeft.setAttribute("class", "hidden")
}

var axeProtrudingFlyingFireworks_2PcLeft = () => {
    $protrudingFireworkTop_2PcLeft.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_1PcLeft.setAttribute("class", "hidden")
    $protrudingFireworkBottom_0PcLeft.setAttribute("class", "visible")
    $protrudingFireworkTop_1PcLeft.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_0PcLeft.setAttribute("class", "hidden")
}

var axeProtrudingFlyingFireworks_3PcLeft = () => {
    $protrudingFireworkTop_3PcLeft.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_2PcLeft.setAttribute("class", "hidden")
    $protrudingFireworkBottom_1PcLeft.setAttribute("class", "visible")
    $protrudingFireworkTop_2PcLeft.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_1PcLeft.setAttribute("class", "hidden")
    $protrudingFireworkBottom_0PcLeft.setAttribute("class", "hidden")    
}

var axeProtrudingFlyingFireworks_4PcLeft = () => {
    $protrudingFireworkTop_4PcLeft.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_3PcLeft.setAttribute("class", "hidden")
    $protrudingFireworkBottom_2PcLeft.setAttribute("class", "visible")
    $protrudingFireworkTop_3PcLeft.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_2PcLeft.setAttribute("class", "hidden")
    $protrudingFireworkBottom_1PcLeft.setAttribute("class", "hidden")    
}

var axeProtrudingFlyingFireworks_5PcLeft = () => {
    $protrudingFireworkTop_5PcLeft.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_4PcLeft.setAttribute("class", "hidden")
    $protrudingFireworkBottom_3PcLeft.setAttribute("class", "visible")
    $protrudingFireworkTop_4PcLeft.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_3PcLeft.setAttribute("class", "hidden")
    $protrudingFireworkBottom_2PcLeft.setAttribute("class", "hidden")    
}

var axeProtrudingFlyingFireworks_6PcLeft = () => {
    $protrudingFireworkTop_6PcLeft.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_5PcLeft.setAttribute("class", "hidden")
    $protrudingFireworkBottom_4PcLeft.setAttribute("class", "visible")
    $protrudingFireworkTop_5PcLeft.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_4PcLeft.setAttribute("class", "hidden")
    $protrudingFireworkBottom_3PcLeft.setAttribute("class", "hidden")    
}

var axeProtrudingFlyingFireworks_7PcLeft = () => {
    $protrudingFireworkMiddle_6PcLeft.setAttribute("class", "hidden")
    $protrudingFireworkBottom_5PcLeft.setAttribute("class", "visible")
    $protrudingFireworkTop_6PcLeft.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_5PcLeft.setAttribute("class", "hidden")
    $protrudingFireworkBottom_4PcLeft.setAttribute("class", "hidden")    
}

var axeProtrudingFlyingFireworks_8PcLeft = () => {
    $topFirework_0PcLeft.setAttribute("class", "hidden")    
    $protrudingFireworkBottom_6PcLeft.setAttribute("class", "visible")    
    $protrudingFireworkMiddle_6PcLeft.setAttribute("class", "hidden")
    $protrudingFireworkBottom_5PcLeft.setAttribute("class", "hidden")    
}

var axeProtrudingFlyingFireworks_9PcLeft = () => {
    $topFirework_1PcLeft.setAttribute("class", "hidden")
    $middleFirework_0PcLeft.setAttribute("class", "hidden")    
    $topFirework_0PcLeft.setAttribute("class", "hidden")    
    $protrudingFireworkBottom_6PcLeft.setAttribute("class", "hidden")    
}

var axeProtrudingFlyingFireworks_10PcLeft = () => {
    $topFirework_2PcLeft.setAttribute("class", "hidden")
    $middleFirework_1PcLeft.setAttribute("class", "hidden")
    $bottomFirework_0PcLeft.setAttribute("class", "visible")
    $topFirework_1PcLeft.setAttribute("class", "hidden")
    $middleFirework_0PcLeft.setAttribute("class", "hidden")            
}

var axeProtrudingFlyingFireworks_11PcLeft = () => {
    $topFirework_3PcLeft.setAttribute("class", "hidden")    
    $middleFirework_2PcLeft.setAttribute("class", "hidden")    
    $bottomFirework_1PcLeft.setAttribute("class", "visible")
    $topFirework_2PcLeft.setAttribute("class", "hidden")
    $middleFirework_1PcLeft.setAttribute("class", "hidden")
    $bottomFirework_0PcLeft.setAttribute("class", "hidden")        
}

var axeProtrudingFlyingFireworks_12PcLeft = () => {
    $topFirework_4PcLeft.setAttribute("class", "hidden")    
    $middleFirework_3PcLeft.setAttribute("class", "hidden")
    $middleFirework_3Z_1PcLeft.setAttribute("class", "hidden")    
    $bottomFirework_2PcLeft.setAttribute("class", "visible")
    $topFirework_3PcLeft.setAttribute("class", "hidden")    
    $middleFirework_2PcLeft.setAttribute("class", "hidden")    
    $bottomFirework_1PcLeft.setAttribute("class", "hidden")            
}

var axeProtrudingFlyingFireworks_13PcLeft = () => {
    $bottomFirework_3Z_1PcLeft.setAttribute("class", "visible")
    $middleFirework_4Z_2PcLeft.setAttribute("class", "hidden")
    $topFirework_5PcLeft.setAttribute("class", "hidden")    
    $middleFirework_4PcLeft.setAttribute("class", "hidden")    
    $bottomFirework_3PcLeft.setAttribute("class", "visible")
    $topFirework_4PcLeft.setAttribute("class", "hidden")    
    $middleFirework_3PcLeft.setAttribute("class", "hidden")
    $middleFirework_3Z_1PcLeft.setAttribute("class", "hidden")    
    $bottomFirework_2PcLeft.setAttribute("class", "hidden")                
}

var axeProtrudingFlyingFireworks_14PcLeft = () => {
    $middleFirework_5Z_1PcLeft.setAttribute("class", "hidden")    
    $bottomFirework_4Z_2PcLeft.setAttribute("class", "visible")
    $topFirework_6PcLeft.setAttribute("class", "hidden")    
    $middleFirework_5PcLeft.setAttribute("class", "hidden")    
    $bottomFirework_4PcLeft.setAttribute("class", "visible")
    $bottomFirework_3Z_1PcLeft.setAttribute("class", "hidden")
    $middleFirework_4Z_2PcLeft.setAttribute("class", "hidden")
    $topFirework_5PcLeft.setAttribute("class", "hidden")    
    $middleFirework_4PcLeft.setAttribute("class", "hidden")    
    $bottomFirework_3PcLeft.setAttribute("class", "hidden")                    
}

var axeFireworkExplodesPcLeft = () => {
    $axeFireworkExplosionPcLeft.setAttribute("class", "visible")
    $middleFirework_5Z_1PcLeft.setAttribute("class", "hidden")    
    $bottomFirework_4Z_2PcLeft.setAttribute("class", "hidden")
    $topFirework_6PcLeft.setAttribute("class", "hidden")    
    $middleFirework_5PcLeft.setAttribute("class", "hidden")    
    $bottomFirework_4PcLeft.setAttribute("class", "hidden")                        
}

var axeFireworkDisplays_0PcLeft = () => {
    $axeSmokePcFullMinus10Left.setAttribute("class", "visible")
    $axeFireworkExplosionPcLeft.setAttribute("class", "hidden")
}

var axeFireworkDisplays_1PcLeft = () => {
    $axeSmokePcFullMinus9Left.setAttribute("class", "visible")        
    $axeSmokePcFullMinus10Left.setAttribute("class", "hidden")    
}

var axeFireworkDisplays_2PcLeft = () => {
    $axeSmokePcFullMinus8Left.setAttribute("class", "visible")        
    $axeSmokePcFullMinus9Left.setAttribute("class", "hidden")    
}

var axeFireworkDisplays_3PcLeft = () => {
    $axeSmokePcFullMinus7Left.setAttribute("class", "visible")        
    $axeSmokePcFullMinus8Left.setAttribute("class", "hidden")    
}

var axeFireworkDisplays_4PcLeft = () => {
    $axeSmokePcFullMinus6Left.setAttribute("class", "visible")        
    $axeSmokePcFullMinus7Left.setAttribute("class", "hidden")    
}

var axeFireworkDisplays_5PcLeft = () => {
    $axeSmokePcFullMinus5Left.setAttribute("class", "visible")        
    $axeSmokePcFullMinus6Left.setAttribute("class", "hidden")    
}

var axeFireworkDisplays_6PcLeft = () => {
    $axeSmokePcFullMinus4Left.setAttribute("class", "visible")        
    $axeSmokePcFullMinus5Left.setAttribute("class", "hidden")    
}

var axeFireworkDisplays_7PcLeft = () => {
    $axeSmokePcFullMinus3Left.setAttribute("class", "visible")        
    $axeSmokePcFullMinus4Left.setAttribute("class", "hidden")    
}

var axeFireworkDisplays_8PcLeft = () => {
    $axeSmokePcFullMinus2Left.setAttribute("class", "visible")        
    $axeSmokePcFullMinus3Left.setAttribute("class", "hidden")    
}

var axeFireworkDisplays_9PcLeft = () => {
    $axeSmokePcFullMinus1Left.setAttribute("class", "visible")        
    $axeSmokePcFullMinus2Left.setAttribute("class", "hidden")    
}

var axeFireworkDisplays_10PcLeft = () => {
    $axeSmokePcFullLeft.setAttribute("class", "visible")        
    $axeSmokePcFullMinus1Left.setAttribute("class", "hidden")    
}

var axeFireworkDisplays_11PcLeft = () => {
    $fireworkAxePcLeft.setAttribute("class", "visible")
    $fireworkBowPcLeft.setAttribute("class", "hidden")
    $fireworkSwordPcLeft.setAttribute("class", "hidden")
}

var axeFireworkDisplays_12PcLeft = () => {
    $fireworkAxeShimmerPcFullLeft.setAttribute("class", "visible")
    $fireworkBowShimmerPcFullLeft.setAttribute("class", "hidden")
    $fireworkSwordShimmerPcFullLeft.setAttribute("class", "hidden")
    $axeSmokePcFullLeft.setAttribute("class", "hidden")
}

var axeFireworkDisplays_13PcLeft = () => {
    $fireworkAxePcLeft.setAttribute("class", "hidden")
    $fireworkBowPcLeft.setAttribute("class", "hidden")
    $fireworkSwordPcLeft.setAttribute("class", "hidden")
}

var axeFireworkDisplays_14PcLeft = () => {
    $fireworkAxeShimmerPcFullLeft.setAttribute("class", "hidden")
    $fireworkBowShimmerPcFullLeft.setAttribute("class", "hidden")
    $fireworkSwordShimmerPcFullLeft.setAttribute("class", "hidden")
}

var axeProtrudingFlyingFireworks_0PcRight = () => {
    $protrudingFireworkTop_0PcRight.setAttribute("class", "hidden")
}

var axeProtrudingFlyingFireworks_1PcRight = () => {
    $protrudingFireworkTop_1PcRight.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_0PcRight.setAttribute("class", "hidden")
    $protrudingFireworkTop_0PcRight.setAttribute("class", "hidden")
}

var axeProtrudingFlyingFireworks_2PcRight = () => {
    $protrudingFireworkTop_2PcRight.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_1PcRight.setAttribute("class", "hidden")
    $protrudingFireworkBottom_0PcRight.setAttribute("class", "visible")
    $protrudingFireworkTop_1PcRight.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_0PcRight.setAttribute("class", "hidden")
}

var axeProtrudingFlyingFireworks_3PcRight = () => {
    $protrudingFireworkTop_3PcRight.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_2PcRight.setAttribute("class", "hidden")
    $protrudingFireworkBottom_1PcRight.setAttribute("class", "visible")
    $protrudingFireworkTop_2PcRight.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_1PcRight.setAttribute("class", "hidden")
    $protrudingFireworkBottom_0PcRight.setAttribute("class", "hidden")    
}

var axeProtrudingFlyingFireworks_4PcRight = () => {
    $protrudingFireworkTop_4PcRight.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_3PcRight.setAttribute("class", "hidden")
    $protrudingFireworkBottom_2PcRight.setAttribute("class", "visible")
    $protrudingFireworkTop_3PcRight.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_2PcRight.setAttribute("class", "hidden")
    $protrudingFireworkBottom_1PcRight.setAttribute("class", "hidden")    
}

var axeProtrudingFlyingFireworks_5PcRight = () => {
    $protrudingFireworkTop_5PcRight.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_4PcRight.setAttribute("class", "hidden")
    $protrudingFireworkBottom_3PcRight.setAttribute("class", "visible")
    $protrudingFireworkTop_4PcRight.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_3PcRight.setAttribute("class", "hidden")
    $protrudingFireworkBottom_2PcRight.setAttribute("class", "hidden")    
}

var axeProtrudingFlyingFireworks_6PcRight = () => {
    $protrudingFireworkTop_6PcRight.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_5PcRight.setAttribute("class", "hidden")
    $protrudingFireworkBottom_4PcRight.setAttribute("class", "visible")
    $protrudingFireworkTop_5PcRight.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_4PcRight.setAttribute("class", "hidden")
    $protrudingFireworkBottom_3PcRight.setAttribute("class", "hidden")    
}

var axeProtrudingFlyingFireworks_7PcRight = () => {
    $protrudingFireworkMiddle_6PcRight.setAttribute("class", "hidden")
    $protrudingFireworkBottom_5PcRight.setAttribute("class", "visible")
    $protrudingFireworkTop_6PcRight.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_5PcRight.setAttribute("class", "hidden")
    $protrudingFireworkBottom_4PcRight.setAttribute("class", "hidden")    
}

var axeProtrudingFlyingFireworks_8PcRight = () => {
    $topFirework_0PcRight.setAttribute("class", "hidden")    
    $protrudingFireworkBottom_6PcRight.setAttribute("class", "visible")    
    $protrudingFireworkMiddle_6PcRight.setAttribute("class", "hidden")
    $protrudingFireworkBottom_5PcRight.setAttribute("class", "hidden")    
}

var axeProtrudingFlyingFireworks_9PcRight = () => {
    $topFirework_1PcRight.setAttribute("class", "hidden")
    $middleFirework_0PcRight.setAttribute("class", "hidden")    
    $topFirework_0PcRight.setAttribute("class", "hidden")    
    $protrudingFireworkBottom_6PcRight.setAttribute("class", "hidden")    
}

var axeProtrudingFlyingFireworks_10PcRight = () => {
    $topFirework_2PcRight.setAttribute("class", "hidden")
    $middleFirework_1PcRight.setAttribute("class", "hidden")
    $bottomFirework_0PcRight.setAttribute("class", "visible")
    $topFirework_1PcRight.setAttribute("class", "hidden")
    $middleFirework_0PcRight.setAttribute("class", "hidden")            
}

var axeProtrudingFlyingFireworks_11PcRight = () => {
    $topFirework_3PcRight.setAttribute("class", "hidden")    
    $middleFirework_2PcRight.setAttribute("class", "hidden")    
    $bottomFirework_1PcRight.setAttribute("class", "visible")
    $topFirework_2PcRight.setAttribute("class", "hidden")
    $middleFirework_1PcRight.setAttribute("class", "hidden")
    $bottomFirework_0PcRight.setAttribute("class", "hidden")        
}

var axeProtrudingFlyingFireworks_12PcRight = () => {
    $topFirework_4PcRight.setAttribute("class", "hidden")    
    $middleFirework_3PcRight.setAttribute("class", "hidden")
    $middleFirework_3Z_1PcRight.setAttribute("class", "hidden")    
    $bottomFirework_2PcRight.setAttribute("class", "visible")
    $topFirework_3PcRight.setAttribute("class", "hidden")    
    $middleFirework_2PcRight.setAttribute("class", "hidden")    
    $bottomFirework_1PcRight.setAttribute("class", "hidden")            
}

var axeProtrudingFlyingFireworks_13PcRight = () => {
    $bottomFirework_3Z_1PcRight.setAttribute("class", "visible")
    $middleFirework_4Z_2PcRight.setAttribute("class", "hidden")
    $topFirework_5PcRight.setAttribute("class", "hidden")    
    $middleFirework_4PcRight.setAttribute("class", "hidden")    
    $bottomFirework_3PcRight.setAttribute("class", "visible")
    $topFirework_4PcRight.setAttribute("class", "hidden")    
    $middleFirework_3PcRight.setAttribute("class", "hidden")
    $middleFirework_3Z_1PcRight.setAttribute("class", "hidden")    
    $bottomFirework_2PcRight.setAttribute("class", "hidden")                
}

var axeProtrudingFlyingFireworks_14PcRight = () => {
    $middleFirework_5Z_1PcRight.setAttribute("class", "hidden")    
    $bottomFirework_4Z_2PcRight.setAttribute("class", "visible")
    $topFirework_6PcRight.setAttribute("class", "hidden")    
    $middleFirework_5PcRight.setAttribute("class", "hidden")    
    $bottomFirework_4PcRight.setAttribute("class", "visible")
    $bottomFirework_3Z_1PcRight.setAttribute("class", "hidden")
    $middleFirework_4Z_2PcRight.setAttribute("class", "hidden")
    $topFirework_5PcRight.setAttribute("class", "hidden")    
    $middleFirework_4PcRight.setAttribute("class", "hidden")    
    $bottomFirework_3PcRight.setAttribute("class", "hidden")                    
}

var axeFireworkExplodesPcRight = () => {
    $axeFireworkExplosionPcRight.setAttribute("class", "visible")
    $middleFirework_5Z_1PcRight.setAttribute("class", "hidden")    
    $bottomFirework_4Z_2PcRight.setAttribute("class", "hidden")
    $topFirework_6PcRight.setAttribute("class", "hidden")    
    $middleFirework_5PcRight.setAttribute("class", "hidden")    
    $bottomFirework_4PcRight.setAttribute("class", "hidden")                        
}

var axeFireworkDisplays_0PcRight = () => {
    $axeSmokePcFullMinus10Right.setAttribute("class", "visible")
    $axeFireworkExplosionPcRight.setAttribute("class", "hidden")
}

var axeFireworkDisplays_1PcRight = () => {
    $axeSmokePcFullMinus9Right.setAttribute("class", "visible")        
    $axeSmokePcFullMinus10Right.setAttribute("class", "hidden")    
}

var axeFireworkDisplays_2PcRight = () => {
    $axeSmokePcFullMinus8Right.setAttribute("class", "visible")        
    $axeSmokePcFullMinus9Right.setAttribute("class", "hidden")    
}

var axeFireworkDisplays_3PcRight = () => {
    $axeSmokePcFullMinus7Right.setAttribute("class", "visible")        
    $axeSmokePcFullMinus8Right.setAttribute("class", "hidden")    
}

var axeFireworkDisplays_4PcRight = () => {
    $axeSmokePcFullMinus6Right.setAttribute("class", "visible")        
    $axeSmokePcFullMinus7Right.setAttribute("class", "hidden")    
}

var axeFireworkDisplays_5PcRight = () => {
    $axeSmokePcFullMinus5Right.setAttribute("class", "visible")        
    $axeSmokePcFullMinus6Right.setAttribute("class", "hidden")    
}

var axeFireworkDisplays_6PcRight = () => {
    $axeSmokePcFullMinus4Right.setAttribute("class", "visible")        
    $axeSmokePcFullMinus5Right.setAttribute("class", "hidden")    
}

var axeFireworkDisplays_7PcRight = () => {
    $axeSmokePcFullMinus3Right.setAttribute("class", "visible")        
    $axeSmokePcFullMinus4Right.setAttribute("class", "hidden")    
}

var axeFireworkDisplays_8PcRight = () => {
    $axeSmokePcFullMinus2Right.setAttribute("class", "visible")        
    $axeSmokePcFullMinus3Right.setAttribute("class", "hidden")    
}

var axeFireworkDisplays_9PcRight = () => {
    $axeSmokePcFullMinus1Right.setAttribute("class", "visible")        
    $axeSmokePcFullMinus2Right.setAttribute("class", "hidden")    
}

var axeFireworkDisplays_10PcRight = () => {
    $axeSmokePcFullRight.setAttribute("class", "visible")        
    $axeSmokePcFullMinus1Right.setAttribute("class", "hidden")    
}

var axeFireworkDisplays_11PcRight = () => {
    $fireworkAxePcRight.setAttribute("class", "visible")
    $fireworkBowPcRight.setAttribute("class", "hidden")
    $fireworkSwordPcRight.setAttribute("class", "hidden")
}

var axeFireworkDisplays_12PcRight = () => {
    $fireworkAxeShimmerPcFullRight.setAttribute("class", "visible")
    $fireworkBowShimmerPcFullRight.setAttribute("class", "hidden")
    $fireworkSwordShimmerPcFullRight.setAttribute("class", "hidden")
    $axeSmokePcFullRight.setAttribute("class", "hidden")
}

var axeFireworkDisplays_13PcRight = () => {
    $fireworkAxePcRight.setAttribute("class", "hidden")
    $fireworkBowPcRight.setAttribute("class", "hidden")
    $fireworkSwordPcRight.setAttribute("class", "hidden")
}

var axeFireworkDisplays_14PcRight = () => {
    $fireworkAxeShimmerPcFullRight.setAttribute("class", "hidden")
    $fireworkBowShimmerPcFullRight.setAttribute("class", "hidden")
    $fireworkSwordShimmerPcFullRight.setAttribute("class", "hidden")
}

// bow Scenario Pc

var bowProtrudingFlyingFireworks_0PcLeft = () => {
    $protrudingFireworkTop_0PcLeft.setAttribute("class", "hidden")
}

var bowProtrudingFlyingFireworks_1PcLeft = () => {
    $protrudingFireworkTop_1PcLeft.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_0PcLeft.setAttribute("class", "visible")
    $protrudingFireworkTop_0PcLeft.setAttribute("class", "hidden")
}

var bowProtrudingFlyingFireworks_2PcLeft = () => {
    $protrudingFireworkTop_2PcLeft.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_1PcLeft.setAttribute("class", "visible")
    $protrudingFireworkBottom_0PcLeft.setAttribute("class", "hidden")
    $protrudingFireworkTop_1PcLeft.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_0PcLeft.setAttribute("class", "hidden")
}

var bowProtrudingFlyingFireworks_3PcLeft = () => {
    $protrudingFireworkTop_3PcLeft.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_2PcLeft.setAttribute("class", "visible")
    $protrudingFireworkBottom_1PcLeft.setAttribute("class", "hidden")
    $protrudingFireworkTop_2PcLeft.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_1PcLeft.setAttribute("class", "hidden")
    $protrudingFireworkBottom_0PcLeft.setAttribute("class", "hidden")    
}

var bowProtrudingFlyingFireworks_4PcLeft = () => {
    $protrudingFireworkTop_4PcLeft.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_3PcLeft.setAttribute("class", "visible")
    $protrudingFireworkBottom_2PcLeft.setAttribute("class", "hidden")
    $protrudingFireworkTop_3PcLeft.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_2PcLeft.setAttribute("class", "hidden")
    $protrudingFireworkBottom_1PcLeft.setAttribute("class", "hidden")    
}

var bowProtrudingFlyingFireworks_5PcLeft = () => {
    $protrudingFireworkTop_5PcLeft.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_4PcLeft.setAttribute("class", "visible")
    $protrudingFireworkBottom_3PcLeft.setAttribute("class", "hidden")
    $protrudingFireworkTop_4PcLeft.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_3PcLeft.setAttribute("class", "hidden")
    $protrudingFireworkBottom_2PcLeft.setAttribute("class", "hidden")    
}

var bowProtrudingFlyingFireworks_6PcLeft = () => {
    $protrudingFireworkTop_6PcLeft.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_5PcLeft.setAttribute("class", "visible")
    $protrudingFireworkBottom_4PcLeft.setAttribute("class", "hidden")
    $protrudingFireworkTop_5PcLeft.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_4PcLeft.setAttribute("class", "hidden")
    $protrudingFireworkBottom_3PcLeft.setAttribute("class", "hidden")    
}

var bowProtrudingFlyingFireworks_7PcLeft = () => {
    $protrudingFireworkMiddle_6PcLeft.setAttribute("class", "visible")
    $protrudingFireworkBottom_5PcLeft.setAttribute("class", "hidden")
    $protrudingFireworkTop_6PcLeft.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_5PcLeft.setAttribute("class", "hidden")
    $protrudingFireworkBottom_4PcLeft.setAttribute("class", "hidden")    
}

var bowProtrudingFlyingFireworks_8PcLeft = () => {
    $topFirework_0PcLeft.setAttribute("class", "hidden")    
    $protrudingFireworkBottom_6PcLeft.setAttribute("class", "hidden")    
    $protrudingFireworkMiddle_6PcLeft.setAttribute("class", "hidden")
    $protrudingFireworkBottom_5PcLeft.setAttribute("class", "hidden")    
}

var bowProtrudingFlyingFireworks_9PcLeft = () => {
    $topFirework_1PcLeft.setAttribute("class", "hidden")
    $middleFirework_0PcLeft.setAttribute("class", "visible")    
    $topFirework_0PcLeft.setAttribute("class", "hidden")    
    $protrudingFireworkBottom_6PcLeft.setAttribute("class", "hidden")    
}

var bowProtrudingFlyingFireworks_10PcLeft = () => {
    $topFirework_2PcLeft.setAttribute("class", "hidden")
    $middleFirework_1PcLeft.setAttribute("class", "visible")
    $bottomFirework_0PcLeft.setAttribute("class", "hidden")
    $topFirework_1PcLeft.setAttribute("class", "hidden")
    $middleFirework_0PcLeft.setAttribute("class", "hidden")            
}

var bowProtrudingFlyingFireworks_11PcLeft = () => {
    $topFirework_3PcLeft.setAttribute("class", "hidden")    
    $middleFirework_2PcLeft.setAttribute("class", "visible")    
    $bottomFirework_1PcLeft.setAttribute("class", "hidden")
    $topFirework_2PcLeft.setAttribute("class", "hidden")
    $middleFirework_1PcLeft.setAttribute("class", "hidden")
    $bottomFirework_0PcLeft.setAttribute("class", "hidden")        
}

var bowProtrudingFlyingFireworks_12PcLeft = () => {
    $middleFirework_3Z_1PcLeft.setAttribute("class", "visible")
    $topFirework_4PcLeft.setAttribute("class", "hidden")    
    $middleFirework_3PcLeft.setAttribute("class", "visible")        
    $bottomFirework_2PcLeft.setAttribute("class", "hidden")
    $topFirework_3PcLeft.setAttribute("class", "hidden")    
    $middleFirework_2PcLeft.setAttribute("class", "hidden")    
    $bottomFirework_1PcLeft.setAttribute("class", "hidden")            
}

var bowProtrudingFlyingFireworks_13PcLeft = () => {
    $bottomFirework_3Z_1PcLeft.setAttribute("class", "hidden")
    $middleFirework_4Z_2PcLeft.setAttribute("class", "visible")
    $topFirework_5PcLeft.setAttribute("class", "hidden")    
    $middleFirework_4PcLeft.setAttribute("class", "visible")    
    $bottomFirework_3PcLeft.setAttribute("class", "hidden")
    $topFirework_4PcLeft.setAttribute("class", "hidden")    
    $middleFirework_3PcLeft.setAttribute("class", "hidden")
    $middleFirework_3Z_1PcLeft.setAttribute("class", "hidden")    
    $bottomFirework_2PcLeft.setAttribute("class", "hidden")                
}

var bowProtrudingFlyingFireworks_14PcLeft = () => {
    $middleFirework_5Z_1PcLeft.setAttribute("class", "visible")    
    $bottomFirework_4Z_2PcLeft.setAttribute("class", "hidden")
    $topFirework_6PcLeft.setAttribute("class", "hidden")    
    $middleFirework_5PcLeft.setAttribute("class", "visible")    
    $bottomFirework_4PcLeft.setAttribute("class", "hidden")
    $bottomFirework_3Z_1PcLeft.setAttribute("class", "hidden")
    $middleFirework_4Z_2PcLeft.setAttribute("class", "hidden")
    $topFirework_5PcLeft.setAttribute("class", "hidden")    
    $middleFirework_4PcLeft.setAttribute("class", "hidden")    
    $bottomFirework_3PcLeft.setAttribute("class", "hidden")                    
}

var bowFireworkExplodesPcLeft = () => {
    $bowFireworkExplosionPcLeft.setAttribute("class", "visible")
    $middleFirework_5Z_1PcLeft.setAttribute("class", "hidden")    
    $bottomFirework_4Z_2PcLeft.setAttribute("class", "hidden")
    $topFirework_6PcLeft.setAttribute("class", "hidden")    
    $middleFirework_5PcLeft.setAttribute("class", "hidden")    
    $bottomFirework_4PcLeft.setAttribute("class", "hidden")                        
}

var bowFireworkDisplays_0PcLeft = () => {
    $bowSmokePcFullMinus10Left.setAttribute("class", "visible")
    $bowFireworkExplosionPcLeft.setAttribute("class", "hidden")
}

var bowFireworkDisplays_1PcLeft = () => {
    $bowSmokePcFullMinus9Left.setAttribute("class", "visible")        
    $bowSmokePcFullMinus10Left.setAttribute("class", "hidden")    
}

var bowFireworkDisplays_2PcLeft = () => {
    $bowSmokePcFullMinus8Left.setAttribute("class", "visible")        
    $bowSmokePcFullMinus9Left.setAttribute("class", "hidden")    
}

var bowFireworkDisplays_3PcLeft = () => {
    $bowSmokePcFullMinus7Left.setAttribute("class", "visible")        
    $bowSmokePcFullMinus8Left.setAttribute("class", "hidden")    
}

var bowFireworkDisplays_4PcLeft = () => {
    $bowSmokePcFullMinus6Left.setAttribute("class", "visible")        
    $bowSmokePcFullMinus7Left.setAttribute("class", "hidden")    
}

var bowFireworkDisplays_5PcLeft = () => {
    $bowSmokePcFullMinus5Left.setAttribute("class", "visible")        
    $bowSmokePcFullMinus6Left.setAttribute("class", "hidden")    
}

var bowFireworkDisplays_6PcLeft = () => {
    $bowSmokePcFullMinus4Left.setAttribute("class", "visible")        
    $bowSmokePcFullMinus5Left.setAttribute("class", "hidden")    
}

var bowFireworkDisplays_7PcLeft = () => {
    $bowSmokePcFullMinus3Left.setAttribute("class", "visible")        
    $bowSmokePcFullMinus4Left.setAttribute("class", "hidden")    
}

var bowFireworkDisplays_8PcLeft = () => {
    $bowSmokePcFullMinus2Left.setAttribute("class", "visible")        
    $bowSmokePcFullMinus3Left.setAttribute("class", "hidden")    
}

var bowFireworkDisplays_9PcLeft = () => {
    $bowSmokePcFullMinus1Left.setAttribute("class", "visible")        
    $bowSmokePcFullMinus2Left.setAttribute("class", "hidden")    
}

var bowFireworkDisplays_10PcLeft = () => {
    $bowSmokePcFullLeft.setAttribute("class", "visible")        
    $bowSmokePcFullMinus1Left.setAttribute("class", "hidden")    
}

var bowFireworkDisplays_11PcLeft = () => {
    $fireworkAxePcLeft.setAttribute("class", "hidden")
    $fireworkBowPcLeft.setAttribute("class", "visible")
    $fireworkSwordPcLeft.setAttribute("class", "hidden")
}

var bowFireworkDisplays_12PcLeft = () => {
    $fireworkAxeShimmerPcFullLeft.setAttribute("class", "hidden")
    $fireworkBowShimmerPcFullLeft.setAttribute("class", "visible")
    $fireworkSwordShimmerPcFullLeft.setAttribute("class", "hidden")
    $bowSmokePcFullLeft.setAttribute("class", "hidden")
}

var bowFireworkDisplays_13PcLeft = () => {
    $fireworkAxePcLeft.setAttribute("class", "hidden")
    $fireworkBowPcLeft.setAttribute("class", "hidden")
    $fireworkSwordPcLeft.setAttribute("class", "hidden")
}

var bowFireworkDisplays_14PcLeft = () => {
    $fireworkAxeShimmerPcFullLeft.setAttribute("class", "hidden")
    $fireworkBowShimmerPcFullLeft.setAttribute("class", "hidden")
    $fireworkSwordShimmerPcFullLeft.setAttribute("class", "hidden")
}

var bowProtrudingFlyingFireworks_0PcRight = () => {
    $protrudingFireworkTop_0PcRight.setAttribute("class", "hidden")
}

var bowProtrudingFlyingFireworks_1PcRight = () => {
    $protrudingFireworkTop_1PcRight.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_0PcRight.setAttribute("class", "visible")
    $protrudingFireworkTop_0PcRight.setAttribute("class", "hidden")
}

var bowProtrudingFlyingFireworks_2PcRight = () => {
    $protrudingFireworkTop_2PcRight.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_1PcRight.setAttribute("class", "visible")
    $protrudingFireworkBottom_0PcRight.setAttribute("class", "hidden")
    $protrudingFireworkTop_1PcRight.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_0PcRight.setAttribute("class", "hidden")
}

var bowProtrudingFlyingFireworks_3PcRight = () => {
    $protrudingFireworkTop_3PcRight.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_2PcRight.setAttribute("class", "visible")
    $protrudingFireworkBottom_1PcRight.setAttribute("class", "hidden")
    $protrudingFireworkTop_2PcRight.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_1PcRight.setAttribute("class", "hidden")
    $protrudingFireworkBottom_0PcRight.setAttribute("class", "hidden")    
}

var bowProtrudingFlyingFireworks_4PcRight = () => {
    $protrudingFireworkTop_4PcRight.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_3PcRight.setAttribute("class", "visible")
    $protrudingFireworkBottom_2PcRight.setAttribute("class", "hidden")
    $protrudingFireworkTop_3PcRight.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_2PcRight.setAttribute("class", "hidden")
    $protrudingFireworkBottom_1PcRight.setAttribute("class", "hidden")    
}

var bowProtrudingFlyingFireworks_5PcRight = () => {
    $protrudingFireworkTop_5PcRight.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_4PcRight.setAttribute("class", "visible")
    $protrudingFireworkBottom_3PcRight.setAttribute("class", "hidden")
    $protrudingFireworkTop_4PcRight.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_3PcRight.setAttribute("class", "hidden")
    $protrudingFireworkBottom_2PcRight.setAttribute("class", "hidden")    
}

var bowProtrudingFlyingFireworks_6PcRight = () => {
    $protrudingFireworkTop_6PcRight.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_5PcRight.setAttribute("class", "visible")
    $protrudingFireworkBottom_4PcRight.setAttribute("class", "hidden")
    $protrudingFireworkTop_5PcRight.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_4PcRight.setAttribute("class", "hidden")
    $protrudingFireworkBottom_3PcRight.setAttribute("class", "hidden")    
}

var bowProtrudingFlyingFireworks_7PcRight = () => {
    $protrudingFireworkMiddle_6PcRight.setAttribute("class", "visible")
    $protrudingFireworkBottom_5PcRight.setAttribute("class", "hidden")
    $protrudingFireworkTop_6PcRight.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_5PcRight.setAttribute("class", "hidden")
    $protrudingFireworkBottom_4PcRight.setAttribute("class", "hidden")    
}

var bowProtrudingFlyingFireworks_8PcRight = () => {
    $topFirework_0PcRight.setAttribute("class", "hidden")    
    $protrudingFireworkBottom_6PcRight.setAttribute("class", "hidden")    
    $protrudingFireworkMiddle_6PcRight.setAttribute("class", "hidden")
    $protrudingFireworkBottom_5PcRight.setAttribute("class", "hidden")    
}

var bowProtrudingFlyingFireworks_9PcRight = () => {
    $topFirework_1PcRight.setAttribute("class", "hidden")
    $middleFirework_0PcRight.setAttribute("class", "visible")    
    $topFirework_0PcRight.setAttribute("class", "hidden")    
    $protrudingFireworkBottom_6PcRight.setAttribute("class", "hidden")    
}

var bowProtrudingFlyingFireworks_10PcRight = () => {
    $topFirework_2PcRight.setAttribute("class", "hidden")
    $middleFirework_1PcRight.setAttribute("class", "visible")
    $bottomFirework_0PcRight.setAttribute("class", "hidden")
    $topFirework_1PcRight.setAttribute("class", "hidden")
    $middleFirework_0PcRight.setAttribute("class", "hidden")            
}

var bowProtrudingFlyingFireworks_11PcRight = () => {
    $topFirework_3PcRight.setAttribute("class", "hidden")    
    $middleFirework_2PcRight.setAttribute("class", "visible")    
    $bottomFirework_1PcRight.setAttribute("class", "hidden")
    $topFirework_2PcRight.setAttribute("class", "hidden")
    $middleFirework_1PcRight.setAttribute("class", "hidden")
    $bottomFirework_0PcRight.setAttribute("class", "hidden")        
}

var bowProtrudingFlyingFireworks_12PcRight = () => {
    $middleFirework_3Z_1PcRight.setAttribute("class", "visible")
    $topFirework_4PcRight.setAttribute("class", "hidden")    
    $middleFirework_3PcRight.setAttribute("class", "visible")        
    $bottomFirework_2PcRight.setAttribute("class", "hidden")
    $topFirework_3PcRight.setAttribute("class", "hidden")    
    $middleFirework_2PcRight.setAttribute("class", "hidden")    
    $bottomFirework_1PcRight.setAttribute("class", "hidden")            
}

var bowProtrudingFlyingFireworks_13PcRight = () => {
    $bottomFirework_3Z_1PcRight.setAttribute("class", "hidden")
    $middleFirework_4Z_2PcRight.setAttribute("class", "visible")
    $topFirework_5PcRight.setAttribute("class", "hidden")    
    $middleFirework_4PcRight.setAttribute("class", "visible")    
    $bottomFirework_3PcRight.setAttribute("class", "hidden")
    $topFirework_4PcRight.setAttribute("class", "hidden")    
    $middleFirework_3PcRight.setAttribute("class", "hidden")
    $middleFirework_3Z_1PcRight.setAttribute("class", "hidden")    
    $bottomFirework_2PcRight.setAttribute("class", "hidden")                
}

var bowProtrudingFlyingFireworks_14PcRight = () => {
    $middleFirework_5Z_1PcRight.setAttribute("class", "visible")    
    $bottomFirework_4Z_2PcRight.setAttribute("class", "hidden")
    $topFirework_6PcRight.setAttribute("class", "hidden")    
    $middleFirework_5PcRight.setAttribute("class", "visible")    
    $bottomFirework_4PcRight.setAttribute("class", "hidden")
    $bottomFirework_3Z_1PcRight.setAttribute("class", "hidden")
    $middleFirework_4Z_2PcRight.setAttribute("class", "hidden")
    $topFirework_5PcRight.setAttribute("class", "hidden")    
    $middleFirework_4PcRight.setAttribute("class", "hidden")    
    $bottomFirework_3PcRight.setAttribute("class", "hidden")                    
}

var bowFireworkExplodesPcRight = () => {
    $bowFireworkExplosionPcRight.setAttribute("class", "visible")
    $middleFirework_5Z_1PcRight.setAttribute("class", "hidden")    
    $bottomFirework_4Z_2PcRight.setAttribute("class", "hidden")
    $topFirework_6PcRight.setAttribute("class", "hidden")    
    $middleFirework_5PcRight.setAttribute("class", "hidden")    
    $bottomFirework_4PcRight.setAttribute("class", "hidden")                        
}

var bowFireworkDisplays_0PcRight = () => {
    $bowSmokePcFullMinus10Right.setAttribute("class", "visible")
    $bowFireworkExplosionPcRight.setAttribute("class", "hidden")
}

var bowFireworkDisplays_1PcRight = () => {
    $bowSmokePcFullMinus9Right.setAttribute("class", "visible")        
    $bowSmokePcFullMinus10Right.setAttribute("class", "hidden")    
}

var bowFireworkDisplays_2PcRight = () => {
    $bowSmokePcFullMinus8Right.setAttribute("class", "visible")        
    $bowSmokePcFullMinus9Right.setAttribute("class", "hidden")    
}

var bowFireworkDisplays_3PcRight = () => {
    $bowSmokePcFullMinus7Right.setAttribute("class", "visible")        
    $bowSmokePcFullMinus8Right.setAttribute("class", "hidden")    
}

var bowFireworkDisplays_4PcRight = () => {
    $bowSmokePcFullMinus6Right.setAttribute("class", "visible")        
    $bowSmokePcFullMinus7Right.setAttribute("class", "hidden")    
}

var bowFireworkDisplays_5PcRight = () => {
    $bowSmokePcFullMinus5Right.setAttribute("class", "visible")        
    $bowSmokePcFullMinus6Right.setAttribute("class", "hidden")    
}

var bowFireworkDisplays_6PcRight = () => {
    $bowSmokePcFullMinus4Right.setAttribute("class", "visible")        
    $bowSmokePcFullMinus5Right.setAttribute("class", "hidden")    
}

var bowFireworkDisplays_7PcRight = () => {
    $bowSmokePcFullMinus3Right.setAttribute("class", "visible")        
    $bowSmokePcFullMinus4Right.setAttribute("class", "hidden")    
}

var bowFireworkDisplays_8PcRight = () => {
    $bowSmokePcFullMinus2Right.setAttribute("class", "visible")        
    $bowSmokePcFullMinus3Right.setAttribute("class", "hidden")    
}

var bowFireworkDisplays_9PcRight = () => {
    $bowSmokePcFullMinus1Right.setAttribute("class", "visible")        
    $bowSmokePcFullMinus2Right.setAttribute("class", "hidden")    
}

var bowFireworkDisplays_10PcRight = () => {
    $bowSmokePcFullRight.setAttribute("class", "visible")        
    $bowSmokePcFullMinus1Right.setAttribute("class", "hidden")    
}

var bowFireworkDisplays_11PcRight = () => {
    $fireworkAxePcRight.setAttribute("class", "hidden")
    $fireworkBowPcRight.setAttribute("class", "visible")
    $fireworkSwordPcRight.setAttribute("class", "hidden")
}

var bowFireworkDisplays_12PcRight = () => {
    $fireworkAxeShimmerPcFullRight.setAttribute("class", "hidden")
    $fireworkBowShimmerPcFullRight.setAttribute("class", "visible")
    $fireworkSwordShimmerPcFullRight.setAttribute("class", "hidden")
    $bowSmokePcFullRight.setAttribute("class", "hidden")
}

var bowFireworkDisplays_13PcRight = () => {
    $fireworkAxePcRight.setAttribute("class", "hidden")
    $fireworkBowPcRight.setAttribute("class", "hidden")
    $fireworkSwordPcRight.setAttribute("class", "hidden")
}

var bowFireworkDisplays_14PcRight = () => {
    $fireworkAxeShimmerPcFullRight.setAttribute("class", "hidden")
    $fireworkBowShimmerPcFullRight.setAttribute("class", "hidden")
    $fireworkSwordShimmerPcFullRight.setAttribute("class", "hidden")
}

// sword Scenario Pc

var swordProtrudingFlyingFireworks_0PcLeft = () => {
    $protrudingFireworkTop_0PcLeft.setAttribute("class", "visible")
}

var swordProtrudingFlyingFireworks_1PcLeft = () => {
    $protrudingFireworkTop_1PcLeft.setAttribute("class", "visible")
    $protrudingFireworkMiddle_0PcLeft.setAttribute("class", "hidden")
    $protrudingFireworkTop_0PcLeft.setAttribute("class", "hidden")
}

var swordProtrudingFlyingFireworks_2PcLeft = () => {
    $protrudingFireworkTop_2PcLeft.setAttribute("class", "visible")
    $protrudingFireworkMiddle_1PcLeft.setAttribute("class", "hidden")
    $protrudingFireworkBottom_0PcLeft.setAttribute("class", "hidden")
    $protrudingFireworkTop_1PcLeft.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_0PcLeft.setAttribute("class", "hidden")
}

var swordProtrudingFlyingFireworks_3PcLeft = () => {
    $protrudingFireworkTop_3PcLeft.setAttribute("class", "visible")
    $protrudingFireworkMiddle_2PcLeft.setAttribute("class", "hidden")
    $protrudingFireworkBottom_1PcLeft.setAttribute("class", "hidden")
    $protrudingFireworkTop_2PcLeft.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_1PcLeft.setAttribute("class", "hidden")
    $protrudingFireworkBottom_0PcLeft.setAttribute("class", "hidden")    
}

var swordProtrudingFlyingFireworks_4PcLeft = () => {
    $protrudingFireworkTop_4PcLeft.setAttribute("class", "visible")
    $protrudingFireworkMiddle_3PcLeft.setAttribute("class", "hidden")
    $protrudingFireworkBottom_2PcLeft.setAttribute("class", "hidden")
    $protrudingFireworkTop_3PcLeft.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_2PcLeft.setAttribute("class", "hidden")
    $protrudingFireworkBottom_1PcLeft.setAttribute("class", "hidden")    
}

var swordProtrudingFlyingFireworks_5PcLeft = () => {
    $protrudingFireworkTop_5PcLeft.setAttribute("class", "visible")
    $protrudingFireworkMiddle_4PcLeft.setAttribute("class", "hidden")
    $protrudingFireworkBottom_3PcLeft.setAttribute("class", "hidden")
    $protrudingFireworkTop_4PcLeft.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_3PcLeft.setAttribute("class", "hidden")
    $protrudingFireworkBottom_2PcLeft.setAttribute("class", "hidden")    
}

var swordProtrudingFlyingFireworks_6PcLeft = () => {
    $protrudingFireworkTop_6PcLeft.setAttribute("class", "visible")
    $protrudingFireworkMiddle_5PcLeft.setAttribute("class", "hidden")
    $protrudingFireworkBottom_4PcLeft.setAttribute("class", "hidden")
    $protrudingFireworkTop_5PcLeft.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_4PcLeft.setAttribute("class", "hidden")
    $protrudingFireworkBottom_3PcLeft.setAttribute("class", "hidden")    
}

var swordProtrudingFlyingFireworks_7PcLeft = () => {
    $protrudingFireworkMiddle_6PcLeft.setAttribute("class", "hidden")
    $protrudingFireworkBottom_5PcLeft.setAttribute("class", "hidden")
    $protrudingFireworkTop_6PcLeft.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_5PcLeft.setAttribute("class", "hidden")
    $protrudingFireworkBottom_4PcLeft.setAttribute("class", "hidden")    
}

var swordProtrudingFlyingFireworks_8PcLeft = () => {
    $topFirework_0PcLeft.setAttribute("class", "visible")    
    $protrudingFireworkBottom_6PcLeft.setAttribute("class", "hidden")    
    $protrudingFireworkMiddle_6PcLeft.setAttribute("class", "hidden")
    $protrudingFireworkBottom_5PcLeft.setAttribute("class", "hidden")    
}

var swordProtrudingFlyingFireworks_9PcLeft = () => {
    $topFirework_1PcLeft.setAttribute("class", "visible")
    $middleFirework_0PcLeft.setAttribute("class", "hidden")    
    $topFirework_0PcLeft.setAttribute("class", "hidden")    
    $protrudingFireworkBottom_6PcLeft.setAttribute("class", "hidden")    
}

var swordProtrudingFlyingFireworks_10PcLeft = () => {
    $topFirework_2PcLeft.setAttribute("class", "visible")
    $middleFirework_1PcLeft.setAttribute("class", "hidden")
    $bottomFirework_0PcLeft.setAttribute("class", "hidden")
    $topFirework_1PcLeft.setAttribute("class", "hidden")
    $middleFirework_0PcLeft.setAttribute("class", "hidden")            
}

var swordProtrudingFlyingFireworks_11PcLeft = () => {
    $topFirework_3PcLeft.setAttribute("class", "visible")    
    $middleFirework_2PcLeft.setAttribute("class", "hidden")    
    $bottomFirework_1PcLeft.setAttribute("class", "hidden")
    $topFirework_2PcLeft.setAttribute("class", "hidden")
    $middleFirework_1PcLeft.setAttribute("class", "hidden")
    $bottomFirework_0PcLeft.setAttribute("class", "hidden")        
}

var swordProtrudingFlyingFireworks_12PcLeft = () => {
    $middleFirework_3Z_1PcLeft.setAttribute("class", "hidden")
    $topFirework_4PcLeft.setAttribute("class", "visible")    
    $middleFirework_3PcLeft.setAttribute("class", "hidden")        
    $bottomFirework_2PcLeft.setAttribute("class", "hidden")
    $topFirework_3PcLeft.setAttribute("class", "hidden")    
    $middleFirework_2PcLeft.setAttribute("class", "hidden")    
    $bottomFirework_1PcLeft.setAttribute("class", "hidden")            
}

var swordProtrudingFlyingFireworks_13PcLeft = () => {
    $bottomFirework_3Z_1PcLeft.setAttribute("class", "hidden")
    $middleFirework_4Z_2PcLeft.setAttribute("class", "hidden")
    $topFirework_5PcLeft.setAttribute("class", "visible")    
    $middleFirework_4PcLeft.setAttribute("class", "hidden")    
    $bottomFirework_3PcLeft.setAttribute("class", "hidden")
    $topFirework_4PcLeft.setAttribute("class", "hidden")    
    $middleFirework_3PcLeft.setAttribute("class", "hidden")
    $middleFirework_3Z_1PcLeft.setAttribute("class", "hidden")    
    $bottomFirework_2PcLeft.setAttribute("class", "hidden")                
}

var swordProtrudingFlyingFireworks_14PcLeft = () => {
    $middleFirework_5Z_1PcLeft.setAttribute("class", "hidden")    
    $bottomFirework_4Z_2PcLeft.setAttribute("class", "hidden")
    $topFirework_6PcLeft.setAttribute("class", "visible")    
    $middleFirework_5PcLeft.setAttribute("class", "hidden")    
    $bottomFirework_4PcLeft.setAttribute("class", "hidden")
    $bottomFirework_3Z_1PcLeft.setAttribute("class", "hidden")
    $middleFirework_4Z_2PcLeft.setAttribute("class", "hidden")
    $topFirework_5PcLeft.setAttribute("class", "hidden")    
    $middleFirework_4PcLeft.setAttribute("class", "hidden")    
    $bottomFirework_3PcLeft.setAttribute("class", "hidden")                    
}

var swordFireworkExplodesPcLeft = () => {
    $swordFireworkExplosionPcLeft.setAttribute("class", "visible")
    $middleFirework_5Z_1PcLeft.setAttribute("class", "hidden")    
    $bottomFirework_4Z_2PcLeft.setAttribute("class", "hidden")
    $topFirework_6PcLeft.setAttribute("class", "hidden")    
    $middleFirework_5PcLeft.setAttribute("class", "hidden")    
    $bottomFirework_4PcLeft.setAttribute("class", "hidden")                        
}

var swordFireworkDisplays_0PcLeft = () => {
    $swordSmokePcFullMinus10Left.setAttribute("class", "visible")
    $swordFireworkExplosionPcLeft.setAttribute("class", "hidden")
}

var swordFireworkDisplays_1PcLeft = () => {
    $swordSmokePcFullMinus9Left.setAttribute("class", "visible")        
    $swordSmokePcFullMinus10Left.setAttribute("class", "hidden")    
}

var swordFireworkDisplays_2PcLeft = () => {
    $swordSmokePcFullMinus8Left.setAttribute("class", "visible")        
    $swordSmokePcFullMinus9Left.setAttribute("class", "hidden")    
}

var swordFireworkDisplays_3PcLeft = () => {
    $swordSmokePcFullMinus7Left.setAttribute("class", "visible")        
    $swordSmokePcFullMinus8Left.setAttribute("class", "hidden")    
}

var swordFireworkDisplays_4PcLeft = () => {
    $swordSmokePcFullMinus6Left.setAttribute("class", "visible")        
    $swordSmokePcFullMinus7Left.setAttribute("class", "hidden")    
}

var swordFireworkDisplays_5PcLeft = () => {
    $swordSmokePcFullMinus5Left.setAttribute("class", "visible")        
    $swordSmokePcFullMinus6Left.setAttribute("class", "hidden")    
}

var swordFireworkDisplays_6PcLeft = () => {
    $swordSmokePcFullMinus4Left.setAttribute("class", "visible")        
    $swordSmokePcFullMinus5Left.setAttribute("class", "hidden")    
}

var swordFireworkDisplays_7PcLeft = () => {
    $swordSmokePcFullMinus3Left.setAttribute("class", "visible")        
    $swordSmokePcFullMinus4Left.setAttribute("class", "hidden")    
}

var swordFireworkDisplays_8PcLeft = () => {
    $swordSmokePcFullMinus2Left.setAttribute("class", "visible")        
    $swordSmokePcFullMinus3Left.setAttribute("class", "hidden")    
}

var swordFireworkDisplays_9PcLeft = () => {
    $swordSmokePcFullMinus1Left.setAttribute("class", "visible")        
    $swordSmokePcFullMinus2Left.setAttribute("class", "hidden")    
}

var swordFireworkDisplays_10PcLeft = () => {
    $swordSmokePcFullLeft.setAttribute("class", "visible")        
    $swordSmokePcFullMinus1Left.setAttribute("class", "hidden")    
}

var swordFireworkDisplays_11PcLeft = () => {
    $fireworkAxePcLeft.setAttribute("class", "hidden")
    $fireworkBowPcLeft.setAttribute("class", "hidden")
    $fireworkSwordPcLeft.setAttribute("class", "visible")
}

var swordFireworkDisplays_12PcLeft = () => {
    $fireworkAxeShimmerPcFullLeft.setAttribute("class", "hidden")
    $fireworkBowShimmerPcFullLeft.setAttribute("class", "hidden")
    $fireworkSwordShimmerPcFullLeft.setAttribute("class", "visible")
    $swordSmokePcFullLeft.setAttribute("class", "hidden")
}

var swordFireworkDisplays_13PcLeft = () => {
    $fireworkAxePcLeft.setAttribute("class", "hidden")
    $fireworkBowPcLeft.setAttribute("class", "hidden")
    $fireworkSwordPcLeft.setAttribute("class", "hidden")
}

var swordFireworkDisplays_14PcLeft = () => {
    $fireworkAxeShimmerPcFullLeft.setAttribute("class", "hidden")
    $fireworkBowShimmerPcFullLeft.setAttribute("class", "hidden")
    $fireworkSwordShimmerPcFullLeft.setAttribute("class", "hidden")
}

var swordProtrudingFlyingFireworks_0PcRight = () => {
    $protrudingFireworkTop_0PcRight.setAttribute("class", "visible")
}

var swordProtrudingFlyingFireworks_1PcRight = () => {
    $protrudingFireworkTop_1PcRight.setAttribute("class", "visible")
    $protrudingFireworkMiddle_0PcRight.setAttribute("class", "hidden")
    $protrudingFireworkTop_0PcRight.setAttribute("class", "hidden")
}

var swordProtrudingFlyingFireworks_2PcRight = () => {
    $protrudingFireworkTop_2PcRight.setAttribute("class", "visible")
    $protrudingFireworkMiddle_1PcRight.setAttribute("class", "hidden")
    $protrudingFireworkBottom_0PcRight.setAttribute("class", "hidden")
    $protrudingFireworkTop_1PcRight.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_0PcRight.setAttribute("class", "hidden")
}

var swordProtrudingFlyingFireworks_3PcRight = () => {
    $protrudingFireworkTop_3PcRight.setAttribute("class", "visible")
    $protrudingFireworkMiddle_2PcRight.setAttribute("class", "hidden")
    $protrudingFireworkBottom_1PcRight.setAttribute("class", "hidden")
    $protrudingFireworkTop_2PcRight.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_1PcRight.setAttribute("class", "hidden")
    $protrudingFireworkBottom_0PcRight.setAttribute("class", "hidden")    
}

var swordProtrudingFlyingFireworks_4PcRight = () => {
    $protrudingFireworkTop_4PcRight.setAttribute("class", "visible")
    $protrudingFireworkMiddle_3PcRight.setAttribute("class", "hidden")
    $protrudingFireworkBottom_2PcRight.setAttribute("class", "hidden")
    $protrudingFireworkTop_3PcRight.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_2PcRight.setAttribute("class", "hidden")
    $protrudingFireworkBottom_1PcRight.setAttribute("class", "hidden")    
}

var swordProtrudingFlyingFireworks_5PcRight = () => {
    $protrudingFireworkTop_5PcRight.setAttribute("class", "visible")
    $protrudingFireworkMiddle_4PcRight.setAttribute("class", "hidden")
    $protrudingFireworkBottom_3PcRight.setAttribute("class", "hidden")
    $protrudingFireworkTop_4PcRight.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_3PcRight.setAttribute("class", "hidden")
    $protrudingFireworkBottom_2PcRight.setAttribute("class", "hidden")    
}

var swordProtrudingFlyingFireworks_6PcRight = () => {
    $protrudingFireworkTop_6PcRight.setAttribute("class", "visible")
    $protrudingFireworkMiddle_5PcRight.setAttribute("class", "hidden")
    $protrudingFireworkBottom_4PcRight.setAttribute("class", "hidden")
    $protrudingFireworkTop_5PcRight.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_4PcRight.setAttribute("class", "hidden")
    $protrudingFireworkBottom_3PcRight.setAttribute("class", "hidden")    
}

var swordProtrudingFlyingFireworks_7PcRight = () => {
    $protrudingFireworkMiddle_6PcRight.setAttribute("class", "hidden")
    $protrudingFireworkBottom_5PcRight.setAttribute("class", "hidden")
    $protrudingFireworkTop_6PcRight.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_5PcRight.setAttribute("class", "hidden")
    $protrudingFireworkBottom_4PcRight.setAttribute("class", "hidden")    
}

var swordProtrudingFlyingFireworks_8PcRight = () => {
    $topFirework_0PcRight.setAttribute("class", "visible")    
    $protrudingFireworkBottom_6PcRight.setAttribute("class", "hidden")    
    $protrudingFireworkMiddle_6PcRight.setAttribute("class", "hidden")
    $protrudingFireworkBottom_5PcRight.setAttribute("class", "hidden")    
}

var swordProtrudingFlyingFireworks_9PcRight = () => {
    $topFirework_1PcRight.setAttribute("class", "visible")
    $middleFirework_0PcRight.setAttribute("class", "hidden")    
    $topFirework_0PcRight.setAttribute("class", "hidden")    
    $protrudingFireworkBottom_6PcRight.setAttribute("class", "hidden")    
}

var swordProtrudingFlyingFireworks_10PcRight = () => {
    $topFirework_2PcRight.setAttribute("class", "visible")
    $middleFirework_1PcRight.setAttribute("class", "hidden")
    $bottomFirework_0PcRight.setAttribute("class", "hidden")
    $topFirework_1PcRight.setAttribute("class", "hidden")
    $middleFirework_0PcRight.setAttribute("class", "hidden")            
}

var swordProtrudingFlyingFireworks_11PcRight = () => {
    $topFirework_3PcRight.setAttribute("class", "visible")    
    $middleFirework_2PcRight.setAttribute("class", "hidden")    
    $bottomFirework_1PcRight.setAttribute("class", "hidden")
    $topFirework_2PcRight.setAttribute("class", "hidden")
    $middleFirework_1PcRight.setAttribute("class", "hidden")
    $bottomFirework_0PcRight.setAttribute("class", "hidden")        
}

var swordProtrudingFlyingFireworks_12PcRight = () => {
    $middleFirework_3Z_1PcRight.setAttribute("class", "hidden")
    $topFirework_4PcRight.setAttribute("class", "visible")    
    $middleFirework_3PcRight.setAttribute("class", "hidden")        
    $bottomFirework_2PcRight.setAttribute("class", "hidden")
    $topFirework_3PcRight.setAttribute("class", "hidden")    
    $middleFirework_2PcRight.setAttribute("class", "hidden")    
    $bottomFirework_1PcRight.setAttribute("class", "hidden")            
}

var swordProtrudingFlyingFireworks_13PcRight = () => {
    $bottomFirework_3Z_1PcRight.setAttribute("class", "hidden")
    $middleFirework_4Z_2PcRight.setAttribute("class", "hidden")
    $topFirework_5PcRight.setAttribute("class", "visible")    
    $middleFirework_4PcRight.setAttribute("class", "hidden")    
    $bottomFirework_3PcRight.setAttribute("class", "hidden")
    $topFirework_4PcRight.setAttribute("class", "hidden")    
    $middleFirework_3PcRight.setAttribute("class", "hidden")
    $middleFirework_3Z_1PcRight.setAttribute("class", "hidden")    
    $bottomFirework_2PcRight.setAttribute("class", "hidden")                
}

var swordProtrudingFlyingFireworks_14PcRight = () => {
    $middleFirework_5Z_1PcRight.setAttribute("class", "hidden")    
    $bottomFirework_4Z_2PcRight.setAttribute("class", "hidden")
    $topFirework_6PcRight.setAttribute("class", "visible")    
    $middleFirework_5PcRight.setAttribute("class", "hidden")    
    $bottomFirework_4PcRight.setAttribute("class", "hidden")
    $bottomFirework_3Z_1PcRight.setAttribute("class", "hidden")
    $middleFirework_4Z_2PcRight.setAttribute("class", "hidden")
    $topFirework_5PcRight.setAttribute("class", "hidden")    
    $middleFirework_4PcRight.setAttribute("class", "hidden")    
    $bottomFirework_3PcRight.setAttribute("class", "hidden")                    
}

var swordFireworkExplodesPcRight = () => {
    $swordFireworkExplosionPcRight.setAttribute("class", "visible")
    $middleFirework_5Z_1PcRight.setAttribute("class", "hidden")    
    $bottomFirework_4Z_2PcRight.setAttribute("class", "hidden")
    $topFirework_6PcRight.setAttribute("class", "hidden")    
    $middleFirework_5PcRight.setAttribute("class", "hidden")    
    $bottomFirework_4PcRight.setAttribute("class", "hidden")                        
}

var swordFireworkDisplays_0PcRight = () => {
    $swordSmokePcFullMinus10Right.setAttribute("class", "visible")
    $swordFireworkExplosionPcRight.setAttribute("class", "hidden")
}

var swordFireworkDisplays_1PcRight = () => {
    $swordSmokePcFullMinus9Right.setAttribute("class", "visible")        
    $swordSmokePcFullMinus10Right.setAttribute("class", "hidden")    
}

var swordFireworkDisplays_2PcRight = () => {
    $swordSmokePcFullMinus8Right.setAttribute("class", "visible")        
    $swordSmokePcFullMinus9Right.setAttribute("class", "hidden")    
}

var swordFireworkDisplays_3PcRight = () => {
    $swordSmokePcFullMinus7Right.setAttribute("class", "visible")        
    $swordSmokePcFullMinus8Right.setAttribute("class", "hidden")    
}

var swordFireworkDisplays_4PcRight = () => {
    $swordSmokePcFullMinus6Right.setAttribute("class", "visible")        
    $swordSmokePcFullMinus7Right.setAttribute("class", "hidden")    
}

var swordFireworkDisplays_5PcRight = () => {
    $swordSmokePcFullMinus5Right.setAttribute("class", "visible")        
    $swordSmokePcFullMinus6Right.setAttribute("class", "hidden")    
}

var swordFireworkDisplays_6PcRight = () => {
    $swordSmokePcFullMinus4Right.setAttribute("class", "visible")        
    $swordSmokePcFullMinus5Right.setAttribute("class", "hidden")    
}

var swordFireworkDisplays_7PcRight = () => {
    $swordSmokePcFullMinus3Right.setAttribute("class", "visible")        
    $swordSmokePcFullMinus4Right.setAttribute("class", "hidden")    
}

var swordFireworkDisplays_8PcRight = () => {
    $swordSmokePcFullMinus2Right.setAttribute("class", "visible")        
    $swordSmokePcFullMinus3Right.setAttribute("class", "hidden")    
}

var swordFireworkDisplays_9PcRight = () => {
    $swordSmokePcFullMinus1Right.setAttribute("class", "visible")        
    $swordSmokePcFullMinus2Right.setAttribute("class", "hidden")    
}

var swordFireworkDisplays_10PcRight = () => {
    $swordSmokePcFullRight.setAttribute("class", "visible")        
    $swordSmokePcFullMinus1Right.setAttribute("class", "hidden")    
}

var swordFireworkDisplays_11PcRight = () => {
    $fireworkAxePcRight.setAttribute("class", "hidden")
    $fireworkBowPcRight.setAttribute("class", "hidden")
    $fireworkSwordPcRight.setAttribute("class", "visible")
}

var swordFireworkDisplays_12PcRight = () => {
    $fireworkAxeShimmerPcFullRight.setAttribute("class", "hidden")
    $fireworkBowShimmerPcFullRight.setAttribute("class", "hidden")
    $fireworkSwordShimmerPcFullRight.setAttribute("class", "visible")
    $swordSmokePcFullRight.setAttribute("class", "hidden")
}

var swordFireworkDisplays_13PcRight = () => {
    $fireworkAxePcRight.setAttribute("class", "hidden")
    $fireworkBowPcRight.setAttribute("class", "hidden")
    $fireworkSwordPcRight.setAttribute("class", "hidden")
}

var swordFireworkDisplays_14PcRight = () => {
    $fireworkAxeShimmerPcFullRight.setAttribute("class", "hidden")
    $fireworkBowShimmerPcFullRight.setAttribute("class", "hidden")
    $fireworkSwordShimmerPcFullRight.setAttribute("class", "hidden")
}

// axeBow Scenario Pc

var axeBowProtrudingFlyingFireworks_0PcLeft = () => {
    $protrudingFireworkTop_0PcLeft.setAttribute("class", "hidden")
}

var axeBowProtrudingFlyingFireworks_1PcLeft = () => {
    $protrudingFireworkTop_1PcLeft.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_0PcLeft.setAttribute("class", "visible")
    $protrudingFireworkTop_0PcLeft.setAttribute("class", "hidden")
}

var axeBowProtrudingFlyingFireworks_2PcLeft = () => {
    $protrudingFireworkTop_2PcLeft.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_1PcLeft.setAttribute("class", "visible")
    $protrudingFireworkBottom_0PcLeft.setAttribute("class", "visible")
    $protrudingFireworkTop_1PcLeft.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_0PcLeft.setAttribute("class", "hidden")
}

var axeBowProtrudingFlyingFireworks_3PcLeft = () => {
    $protrudingFireworkTop_3PcLeft.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_2PcLeft.setAttribute("class", "visible")
    $protrudingFireworkBottom_1PcLeft.setAttribute("class", "visible")
    $protrudingFireworkTop_2PcLeft.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_1PcLeft.setAttribute("class", "hidden")
    $protrudingFireworkBottom_0PcLeft.setAttribute("class", "hidden")    
}

var axeBowProtrudingFlyingFireworks_4PcLeft = () => {
    $protrudingFireworkTop_4PcLeft.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_3PcLeft.setAttribute("class", "visible")
    $protrudingFireworkBottom_2PcLeft.setAttribute("class", "visible")
    $protrudingFireworkTop_3PcLeft.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_2PcLeft.setAttribute("class", "hidden")
    $protrudingFireworkBottom_1PcLeft.setAttribute("class", "hidden")    
}

var axeBowProtrudingFlyingFireworks_5PcLeft = () => {
    $protrudingFireworkTop_5PcLeft.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_4PcLeft.setAttribute("class", "visible")
    $protrudingFireworkBottom_3PcLeft.setAttribute("class", "visible")
    $protrudingFireworkTop_4PcLeft.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_3PcLeft.setAttribute("class", "hidden")
    $protrudingFireworkBottom_2PcLeft.setAttribute("class", "hidden")    
}

var axeBowProtrudingFlyingFireworks_6PcLeft = () => {
    $protrudingFireworkTop_6PcLeft.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_5PcLeft.setAttribute("class", "visible")
    $protrudingFireworkBottom_4PcLeft.setAttribute("class", "visible")
    $protrudingFireworkTop_5PcLeft.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_4PcLeft.setAttribute("class", "hidden")
    $protrudingFireworkBottom_3PcLeft.setAttribute("class", "hidden")    
}

var axeBowProtrudingFlyingFireworks_7PcLeft = () => {
    $protrudingFireworkMiddle_6PcLeft.setAttribute("class", "visible")
    $protrudingFireworkBottom_5PcLeft.setAttribute("class", "visible")
    $protrudingFireworkTop_6PcLeft.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_5PcLeft.setAttribute("class", "hidden")
    $protrudingFireworkBottom_4PcLeft.setAttribute("class", "hidden")    
}

var axeBowProtrudingFlyingFireworks_8PcLeft = () => {
    $topFirework_0PcLeft.setAttribute("class", "hidden")    
    $protrudingFireworkBottom_6PcLeft.setAttribute("class", "visible")    
    $protrudingFireworkMiddle_6PcLeft.setAttribute("class", "hidden")
    $protrudingFireworkBottom_5PcLeft.setAttribute("class", "hidden")    
}

var axeBowProtrudingFlyingFireworks_9PcLeft = () => {
    $topFirework_1PcLeft.setAttribute("class", "hidden")
    $middleFirework_0PcLeft.setAttribute("class", "visible")    
    $topFirework_0PcLeft.setAttribute("class", "hidden")    
    $protrudingFireworkBottom_6PcLeft.setAttribute("class", "hidden")    
}

var axeBowProtrudingFlyingFireworks_10PcLeft = () => {
    $topFirework_2PcLeft.setAttribute("class", "hidden")
    $middleFirework_1PcLeft.setAttribute("class", "visible")
    $bottomFirework_0PcLeft.setAttribute("class", "visible")
    $topFirework_1PcLeft.setAttribute("class", "hidden")
    $middleFirework_0PcLeft.setAttribute("class", "hidden")            
}

var axeBowProtrudingFlyingFireworks_11PcLeft = () => {
    $topFirework_3PcLeft.setAttribute("class", "hidden")    
    $middleFirework_2PcLeft.setAttribute("class", "visible")    
    $bottomFirework_1PcLeft.setAttribute("class", "visible")
    $topFirework_2PcLeft.setAttribute("class", "hidden")
    $middleFirework_1PcLeft.setAttribute("class", "hidden")
    $bottomFirework_0PcLeft.setAttribute("class", "hidden")        
}

var axeBowProtrudingFlyingFireworks_12PcLeft = () => {
    $middleFirework_3Z_1PcLeft.setAttribute("class", "visible")
    $topFirework_4PcLeft.setAttribute("class", "hidden")    
    $middleFirework_3PcLeft.setAttribute("class", "visible")        
    $bottomFirework_2PcLeft.setAttribute("class", "visible")
    $topFirework_3PcLeft.setAttribute("class", "hidden")    
    $middleFirework_2PcLeft.setAttribute("class", "hidden")    
    $bottomFirework_1PcLeft.setAttribute("class", "hidden")            
}

var axeBowProtrudingFlyingFireworks_13PcLeft = () => {
    $bottomFirework_3Z_1PcLeft.setAttribute("class", "visible")
    $middleFirework_4Z_2PcLeft.setAttribute("class", "visible")
    $topFirework_5PcLeft.setAttribute("class", "hidden")    
    $middleFirework_4PcLeft.setAttribute("class", "visible")    
    $bottomFirework_3PcLeft.setAttribute("class", "visible")
    $topFirework_4PcLeft.setAttribute("class", "hidden")    
    $middleFirework_3PcLeft.setAttribute("class", "hidden")
    $middleFirework_3Z_1PcLeft.setAttribute("class", "hidden")    
    $bottomFirework_2PcLeft.setAttribute("class", "hidden")                
}

var axeBowProtrudingFlyingFireworks_14PcLeft = () => {
    $middleFirework_5Z_1PcLeft.setAttribute("class", "visible")    
    $bottomFirework_4Z_2PcLeft.setAttribute("class", "visible")
    $topFirework_6PcLeft.setAttribute("class", "hidden")    
    $middleFirework_5PcLeft.setAttribute("class", "visible")    
    $bottomFirework_4PcLeft.setAttribute("class", "visible")
    $bottomFirework_3Z_1PcLeft.setAttribute("class", "hidden")
    $middleFirework_4Z_2PcLeft.setAttribute("class", "hidden")
    $topFirework_5PcLeft.setAttribute("class", "hidden")    
    $middleFirework_4PcLeft.setAttribute("class", "hidden")    
    $bottomFirework_3PcLeft.setAttribute("class", "hidden")                    
}

var axeBowFireworkExplodesPcLeft = () => {
    $axeBowFireworkExplosionPcLeft.setAttribute("class", "visible")
    $middleFirework_5Z_1PcLeft.setAttribute("class", "hidden")    
    $bottomFirework_4Z_2PcLeft.setAttribute("class", "hidden")
    $topFirework_6PcLeft.setAttribute("class", "hidden")    
    $middleFirework_5PcLeft.setAttribute("class", "hidden")    
    $bottomFirework_4PcLeft.setAttribute("class", "hidden")                        
}

var axeBowFireworkDisplays_0PcLeft = () => {
    $axeBowSmokePcFullMinus10Left.setAttribute("class", "visible")
    $axeBowFireworkExplosionPcLeft.setAttribute("class", "hidden")
}

var axeBowFireworkDisplays_1PcLeft = () => {
    $axeBowSmokePcFullMinus9Left.setAttribute("class", "visible")        
    $axeBowSmokePcFullMinus10Left.setAttribute("class", "hidden")    
}

var axeBowFireworkDisplays_2PcLeft = () => {
    $axeBowSmokePcFullMinus8Left.setAttribute("class", "visible")        
    $axeBowSmokePcFullMinus9Left.setAttribute("class", "hidden")    
}

var axeBowFireworkDisplays_3PcLeft = () => {
    $axeBowSmokePcFullMinus7Left.setAttribute("class", "visible")        
    $axeBowSmokePcFullMinus8Left.setAttribute("class", "hidden")    
}

var axeBowFireworkDisplays_4PcLeft = () => {
    $axeBowSmokePcFullMinus6Left.setAttribute("class", "visible")        
    $axeBowSmokePcFullMinus7Left.setAttribute("class", "hidden")    
}

var axeBowFireworkDisplays_5PcLeft = () => {
    $axeBowSmokePcFullMinus5Left.setAttribute("class", "visible")        
    $axeBowSmokePcFullMinus6Left.setAttribute("class", "hidden")    
}

var axeBowFireworkDisplays_6PcLeft = () => {
    $axeBowSmokePcFullMinus4Left.setAttribute("class", "visible")        
    $axeBowSmokePcFullMinus5Left.setAttribute("class", "hidden")    
}

var axeBowFireworkDisplays_7PcLeft = () => {
    $axeBowSmokePcFullMinus3Left.setAttribute("class", "visible")        
    $axeBowSmokePcFullMinus4Left.setAttribute("class", "hidden")    
}

var axeBowFireworkDisplays_8PcLeft = () => {
    $axeBowSmokePcFullMinus2Left.setAttribute("class", "visible")        
    $axeBowSmokePcFullMinus3Left.setAttribute("class", "hidden")    
}

var axeBowFireworkDisplays_9PcLeft = () => {
    $axeBowSmokePcFullMinus1Left.setAttribute("class", "visible")        
    $axeBowSmokePcFullMinus2Left.setAttribute("class", "hidden")    
}

var axeBowFireworkDisplays_10PcLeft = () => {
    $axeBowSmokeFullPcLeft.setAttribute("class", "visible")        
    $axeBowSmokePcFullMinus1Left.setAttribute("class", "hidden")    
}

var axeBowFireworkDisplays_11PcLeft = () => {
    $fireworkAxePcLeft.setAttribute("class", "visible")
    $fireworkBowPcLeft.setAttribute("class", "visible")
    $fireworkSwordPcLeft.setAttribute("class", "hidden")
}

var axeBowFireworkDisplays_12PcLeft = () => {
    $fireworkAxeShimmerPcFullLeft.setAttribute("class", "visible")
    $fireworkBowShimmerPcFullLeft.setAttribute("class", "visible")
    $fireworkSwordShimmerPcFullLeft.setAttribute("class", "hidden")
    $axeBowSmokeFullPcLeft.setAttribute("class", "hidden")
}

var axeBowFireworkDisplays_13PcLeft = () => {
    $fireworkAxePcLeft.setAttribute("class", "hidden")
    $fireworkBowPcLeft.setAttribute("class", "hidden")
    $fireworkSwordPcLeft.setAttribute("class", "hidden")
}

var axeBowFireworkDisplays_14PcLeft = () => {
    $fireworkAxeShimmerPcFullLeft.setAttribute("class", "hidden")
    $fireworkBowShimmerPcFullLeft.setAttribute("class", "hidden")
    $fireworkSwordShimmerPcFullLeft.setAttribute("class", "hidden")
}

var axeBowProtrudingFlyingFireworks_0PcRight = () => {
    $protrudingFireworkTop_0PcRight.setAttribute("class", "hidden")
}

var axeBowProtrudingFlyingFireworks_1PcRight = () => {
    $protrudingFireworkTop_1PcRight.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_0PcRight.setAttribute("class", "visible")
    $protrudingFireworkTop_0PcRight.setAttribute("class", "hidden")
}

var axeBowProtrudingFlyingFireworks_2PcRight = () => {
    $protrudingFireworkTop_2PcRight.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_1PcRight.setAttribute("class", "visible")
    $protrudingFireworkBottom_0PcRight.setAttribute("class", "visible")
    $protrudingFireworkTop_1PcRight.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_0PcRight.setAttribute("class", "hidden")
}

var axeBowProtrudingFlyingFireworks_3PcRight = () => {
    $protrudingFireworkTop_3PcRight.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_2PcRight.setAttribute("class", "visible")
    $protrudingFireworkBottom_1PcRight.setAttribute("class", "visible")
    $protrudingFireworkTop_2PcRight.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_1PcRight.setAttribute("class", "hidden")
    $protrudingFireworkBottom_0PcRight.setAttribute("class", "hidden")    
}

var axeBowProtrudingFlyingFireworks_4PcRight = () => {
    $protrudingFireworkTop_4PcRight.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_3PcRight.setAttribute("class", "visible")
    $protrudingFireworkBottom_2PcRight.setAttribute("class", "visible")
    $protrudingFireworkTop_3PcRight.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_2PcRight.setAttribute("class", "hidden")
    $protrudingFireworkBottom_1PcRight.setAttribute("class", "hidden")    
}

var axeBowProtrudingFlyingFireworks_5PcRight = () => {
    $protrudingFireworkTop_5PcRight.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_4PcRight.setAttribute("class", "visible")
    $protrudingFireworkBottom_3PcRight.setAttribute("class", "visible")
    $protrudingFireworkTop_4PcRight.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_3PcRight.setAttribute("class", "hidden")
    $protrudingFireworkBottom_2PcRight.setAttribute("class", "hidden")    
}

var axeBowProtrudingFlyingFireworks_6PcRight = () => {
    $protrudingFireworkTop_6PcRight.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_5PcRight.setAttribute("class", "visible")
    $protrudingFireworkBottom_4PcRight.setAttribute("class", "visible")
    $protrudingFireworkTop_5PcRight.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_4PcRight.setAttribute("class", "hidden")
    $protrudingFireworkBottom_3PcRight.setAttribute("class", "hidden")    
}

var axeBowProtrudingFlyingFireworks_7PcRight = () => {
    $protrudingFireworkMiddle_6PcRight.setAttribute("class", "visible")
    $protrudingFireworkBottom_5PcRight.setAttribute("class", "visible")
    $protrudingFireworkTop_6PcRight.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_5PcRight.setAttribute("class", "hidden")
    $protrudingFireworkBottom_4PcRight.setAttribute("class", "hidden")    
}

var axeBowProtrudingFlyingFireworks_8PcRight = () => {
    $topFirework_0PcRight.setAttribute("class", "hidden")    
    $protrudingFireworkBottom_6PcRight.setAttribute("class", "visible")    
    $protrudingFireworkMiddle_6PcRight.setAttribute("class", "hidden")
    $protrudingFireworkBottom_5PcRight.setAttribute("class", "hidden")    
}

var axeBowProtrudingFlyingFireworks_9PcRight = () => {
    $topFirework_1PcRight.setAttribute("class", "hidden")
    $middleFirework_0PcRight.setAttribute("class", "visible")    
    $topFirework_0PcRight.setAttribute("class", "hidden")    
    $protrudingFireworkBottom_6PcRight.setAttribute("class", "hidden")    
}

var axeBowProtrudingFlyingFireworks_10PcRight = () => {
    $topFirework_2PcRight.setAttribute("class", "hidden")
    $middleFirework_1PcRight.setAttribute("class", "visible")
    $bottomFirework_0PcRight.setAttribute("class", "visible")
    $topFirework_1PcRight.setAttribute("class", "hidden")
    $middleFirework_0PcRight.setAttribute("class", "hidden")            
}

var axeBowProtrudingFlyingFireworks_11PcRight = () => {
    $topFirework_3PcRight.setAttribute("class", "hidden")    
    $middleFirework_2PcRight.setAttribute("class", "visible")    
    $bottomFirework_1PcRight.setAttribute("class", "visible")
    $topFirework_2PcRight.setAttribute("class", "hidden")
    $middleFirework_1PcRight.setAttribute("class", "hidden")
    $bottomFirework_0PcRight.setAttribute("class", "hidden")        
}

var axeBowProtrudingFlyingFireworks_12PcRight = () => {
    $middleFirework_3Z_1PcRight.setAttribute("class", "visible")
    $topFirework_4PcRight.setAttribute("class", "hidden")    
    $middleFirework_3PcRight.setAttribute("class", "visible")        
    $bottomFirework_2PcRight.setAttribute("class", "visible")
    $topFirework_3PcRight.setAttribute("class", "hidden")    
    $middleFirework_2PcRight.setAttribute("class", "hidden")    
    $bottomFirework_1PcRight.setAttribute("class", "hidden")            
}

var axeBowProtrudingFlyingFireworks_13PcRight = () => {
    $bottomFirework_3Z_1PcRight.setAttribute("class", "visible")
    $middleFirework_4Z_2PcRight.setAttribute("class", "visible")
    $topFirework_5PcRight.setAttribute("class", "hidden")    
    $middleFirework_4PcRight.setAttribute("class", "visible")    
    $bottomFirework_3PcRight.setAttribute("class", "visible")
    $topFirework_4PcRight.setAttribute("class", "hidden")    
    $middleFirework_3PcRight.setAttribute("class", "hidden")
    $middleFirework_3Z_1PcRight.setAttribute("class", "hidden")    
    $bottomFirework_2PcRight.setAttribute("class", "hidden")                
}

var axeBowProtrudingFlyingFireworks_14PcRight = () => {
    $middleFirework_5Z_1PcRight.setAttribute("class", "visible")    
    $bottomFirework_4Z_2PcRight.setAttribute("class", "visible")
    $topFirework_6PcRight.setAttribute("class", "hidden")    
    $middleFirework_5PcRight.setAttribute("class", "visible")    
    $bottomFirework_4PcRight.setAttribute("class", "visible")
    $bottomFirework_3Z_1PcRight.setAttribute("class", "hidden")
    $middleFirework_4Z_2PcRight.setAttribute("class", "hidden")
    $topFirework_5PcRight.setAttribute("class", "hidden")    
    $middleFirework_4PcRight.setAttribute("class", "hidden")    
    $bottomFirework_3PcRight.setAttribute("class", "hidden")                    
}

var axeBowFireworkExplodesPcRight = () => {
    $axeBowFireworkExplosionPcRight.setAttribute("class", "visible")
    $middleFirework_5Z_1PcRight.setAttribute("class", "hidden")    
    $bottomFirework_4Z_2PcRight.setAttribute("class", "hidden")
    $topFirework_6PcRight.setAttribute("class", "hidden")    
    $middleFirework_5PcRight.setAttribute("class", "hidden")    
    $bottomFirework_4PcRight.setAttribute("class", "hidden")                        
}

var axeBowFireworkDisplays_0PcRight = () => {
    $axeBowSmokePcFullMinus10Right.setAttribute("class", "visible")
    $axeBowFireworkExplosionPcRight.setAttribute("class", "hidden")
}

var axeBowFireworkDisplays_1PcRight = () => {
    $axeBowSmokePcFullMinus9Right.setAttribute("class", "visible")        
    $axeBowSmokePcFullMinus10Right.setAttribute("class", "hidden")    
}

var axeBowFireworkDisplays_2PcRight = () => {
    $axeBowSmokePcFullMinus8Right.setAttribute("class", "visible")        
    $axeBowSmokePcFullMinus9Right.setAttribute("class", "hidden")    
}

var axeBowFireworkDisplays_3PcRight = () => {
    $axeBowSmokePcFullMinus7Right.setAttribute("class", "visible")        
    $axeBowSmokePcFullMinus8Right.setAttribute("class", "hidden")    
}

var axeBowFireworkDisplays_4PcRight = () => {
    $axeBowSmokePcFullMinus6Right.setAttribute("class", "visible")        
    $axeBowSmokePcFullMinus7Right.setAttribute("class", "hidden")    
}

var axeBowFireworkDisplays_5PcRight = () => {
    $axeBowSmokePcFullMinus5Right.setAttribute("class", "visible")        
    $axeBowSmokePcFullMinus6Right.setAttribute("class", "hidden")    
}

var axeBowFireworkDisplays_6PcRight = () => {
    $axeBowSmokePcFullMinus4Right.setAttribute("class", "visible")        
    $axeBowSmokePcFullMinus5Right.setAttribute("class", "hidden")    
}

var axeBowFireworkDisplays_7PcRight = () => {
    $axeBowSmokePcFullMinus3Right.setAttribute("class", "visible")        
    $axeBowSmokePcFullMinus4Right.setAttribute("class", "hidden")    
}

var axeBowFireworkDisplays_8PcRight = () => {
    $axeBowSmokePcFullMinus2Right.setAttribute("class", "visible")        
    $axeBowSmokePcFullMinus3Right.setAttribute("class", "hidden")    
}

var axeBowFireworkDisplays_9PcRight = () => {
    $axeBowSmokePcFullMinus1Right.setAttribute("class", "visible")        
    $axeBowSmokePcFullMinus2Right.setAttribute("class", "hidden")    
}

var axeBowFireworkDisplays_10PcRight = () => {
    $axeBowSmokeFullPcRight.setAttribute("class", "visible")        
    $axeBowSmokePcFullMinus1Right.setAttribute("class", "hidden")    
}

var axeBowFireworkDisplays_11PcRight = () => {
    $fireworkAxePcRight.setAttribute("class", "visible")
    $fireworkBowPcRight.setAttribute("class", "visible")
    $fireworkSwordPcRight.setAttribute("class", "hidden")
}

var axeBowFireworkDisplays_12PcRight = () => {
    $fireworkAxeShimmerPcFullRight.setAttribute("class", "visible")
    $fireworkBowShimmerPcFullRight.setAttribute("class", "visible")
    $fireworkSwordShimmerPcFullRight.setAttribute("class", "hidden")
    $axeBowSmokeFullPcRight.setAttribute("class", "hidden")
}

var axeBowFireworkDisplays_13PcRight = () => {
    $fireworkAxePcRight.setAttribute("class", "hidden")
    $fireworkBowPcRight.setAttribute("class", "hidden")
    $fireworkSwordPcRight.setAttribute("class", "hidden")
}

var axeBowFireworkDisplays_14PcRight = () => {
    $fireworkAxeShimmerPcFullRight.setAttribute("class", "hidden")
    $fireworkBowShimmerPcFullRight.setAttribute("class", "hidden")
    $fireworkSwordShimmerPcFullRight.setAttribute("class", "hidden")
}

// axeSword Scenario Pc

var axeSwordProtrudingFlyingFireworks_0PcLeft = () => {
    $protrudingFireworkTop_0PcLeft.setAttribute("class", "visible")
}

var axeSwordProtrudingFlyingFireworks_1PcLeft = () => {
    $protrudingFireworkTop_1PcLeft.setAttribute("class", "visible")
    $protrudingFireworkMiddle_0PcLeft.setAttribute("class", "hidden")
    $protrudingFireworkTop_0PcLeft.setAttribute("class", "hidden")
}

var axeSwordProtrudingFlyingFireworks_2PcLeft = () => {
    $protrudingFireworkTop_2PcLeft.setAttribute("class", "visible")
    $protrudingFireworkMiddle_1PcLeft.setAttribute("class", "hidden")
    $protrudingFireworkBottom_0PcLeft.setAttribute("class", "visible")
    $protrudingFireworkTop_1PcLeft.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_0PcLeft.setAttribute("class", "hidden")
}

var axeSwordProtrudingFlyingFireworks_3PcLeft = () => {
    $protrudingFireworkTop_3PcLeft.setAttribute("class", "visible")
    $protrudingFireworkMiddle_2PcLeft.setAttribute("class", "hidden")
    $protrudingFireworkBottom_1PcLeft.setAttribute("class", "visible")
    $protrudingFireworkTop_2PcLeft.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_1PcLeft.setAttribute("class", "hidden")
    $protrudingFireworkBottom_0PcLeft.setAttribute("class", "hidden")    
}

var axeSwordProtrudingFlyingFireworks_4PcLeft = () => {
    $protrudingFireworkTop_4PcLeft.setAttribute("class", "visible")
    $protrudingFireworkMiddle_3PcLeft.setAttribute("class", "hidden")
    $protrudingFireworkBottom_2PcLeft.setAttribute("class", "visible")
    $protrudingFireworkTop_3PcLeft.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_2PcLeft.setAttribute("class", "hidden")
    $protrudingFireworkBottom_1PcLeft.setAttribute("class", "hidden")    
}

var axeSwordProtrudingFlyingFireworks_5PcLeft = () => {
    $protrudingFireworkTop_5PcLeft.setAttribute("class", "visible")
    $protrudingFireworkMiddle_4PcLeft.setAttribute("class", "hidden")
    $protrudingFireworkBottom_3PcLeft.setAttribute("class", "visible")
    $protrudingFireworkTop_4PcLeft.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_3PcLeft.setAttribute("class", "hidden")
    $protrudingFireworkBottom_2PcLeft.setAttribute("class", "hidden")    
}

var axeSwordProtrudingFlyingFireworks_6PcLeft = () => {
    $protrudingFireworkTop_6PcLeft.setAttribute("class", "visible")
    $protrudingFireworkMiddle_5PcLeft.setAttribute("class", "hidden")
    $protrudingFireworkBottom_4PcLeft.setAttribute("class", "visible")
    $protrudingFireworkTop_5PcLeft.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_4PcLeft.setAttribute("class", "hidden")
    $protrudingFireworkBottom_3PcLeft.setAttribute("class", "hidden")    
}

var axeSwordProtrudingFlyingFireworks_7PcLeft = () => {
    $protrudingFireworkMiddle_6PcLeft.setAttribute("class", "hidden")
    $protrudingFireworkBottom_5PcLeft.setAttribute("class", "visible")
    $protrudingFireworkTop_6PcLeft.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_5PcLeft.setAttribute("class", "hidden")
    $protrudingFireworkBottom_4PcLeft.setAttribute("class", "hidden")    
}

var axeSwordProtrudingFlyingFireworks_8PcLeft = () => {
    $topFirework_0PcLeft.setAttribute("class", "visible")    
    $protrudingFireworkBottom_6PcLeft.setAttribute("class", "visible")    
    $protrudingFireworkMiddle_6PcLeft.setAttribute("class", "hidden")
    $protrudingFireworkBottom_5PcLeft.setAttribute("class", "hidden")    
}

var axeSwordProtrudingFlyingFireworks_9PcLeft = () => {
    $topFirework_1PcLeft.setAttribute("class", "visible")
    $middleFirework_0PcLeft.setAttribute("class", "hidden")    
    $topFirework_0PcLeft.setAttribute("class", "hidden")    
    $protrudingFireworkBottom_6PcLeft.setAttribute("class", "hidden")    
}

var axeSwordProtrudingFlyingFireworks_10PcLeft = () => {
    $topFirework_2PcLeft.setAttribute("class", "visible")
    $middleFirework_1PcLeft.setAttribute("class", "hidden")
    $bottomFirework_0PcLeft.setAttribute("class", "visible")
    $topFirework_1PcLeft.setAttribute("class", "hidden")
    $middleFirework_0PcLeft.setAttribute("class", "hidden")            
}

var axeSwordProtrudingFlyingFireworks_11PcLeft = () => {
    $topFirework_3PcLeft.setAttribute("class", "visible")    
    $middleFirework_2PcLeft.setAttribute("class", "hidden")    
    $bottomFirework_1PcLeft.setAttribute("class", "visible")
    $topFirework_2PcLeft.setAttribute("class", "hidden")
    $middleFirework_1PcLeft.setAttribute("class", "hidden")
    $bottomFirework_0PcLeft.setAttribute("class", "hidden")        
}

var axeSwordProtrudingFlyingFireworks_12PcLeft = () => {
    $middleFirework_3Z_1PcLeft.setAttribute("class", "hidden")
    $topFirework_4PcLeft.setAttribute("class", "visible")    
    $middleFirework_3PcLeft.setAttribute("class", "hidden")        
    $bottomFirework_2PcLeft.setAttribute("class", "visible")
    $topFirework_3PcLeft.setAttribute("class", "hidden")    
    $middleFirework_2PcLeft.setAttribute("class", "hidden")    
    $bottomFirework_1PcLeft.setAttribute("class", "hidden")            
}

var axeSwordProtrudingFlyingFireworks_13PcLeft = () => {
    $bottomFirework_3Z_1PcLeft.setAttribute("class", "visible")
    $middleFirework_4Z_2PcLeft.setAttribute("class", "hidden")
    $topFirework_5PcLeft.setAttribute("class", "visible")    
    $middleFirework_4PcLeft.setAttribute("class", "hidden")    
    $bottomFirework_3PcLeft.setAttribute("class", "visible")
    $topFirework_4PcLeft.setAttribute("class", "hidden")    
    $middleFirework_3PcLeft.setAttribute("class", "hidden")
    $middleFirework_3Z_1PcLeft.setAttribute("class", "hidden")    
    $bottomFirework_2PcLeft.setAttribute("class", "hidden")                
}

var axeSwordProtrudingFlyingFireworks_14PcLeft = () => {
    $middleFirework_5Z_1PcLeft.setAttribute("class", "hidden")    
    $bottomFirework_4Z_2PcLeft.setAttribute("class", "visible")
    $topFirework_6PcLeft.setAttribute("class", "visible")    
    $middleFirework_5PcLeft.setAttribute("class", "hidden")    
    $bottomFirework_4PcLeft.setAttribute("class", "visible")
    $bottomFirework_3Z_1PcLeft.setAttribute("class", "hidden")
    $middleFirework_4Z_2PcLeft.setAttribute("class", "hidden")
    $topFirework_5PcLeft.setAttribute("class", "hidden")    
    $middleFirework_4PcLeft.setAttribute("class", "hidden")    
    $bottomFirework_3PcLeft.setAttribute("class", "hidden")                    
}

var axeSwordFireworkExplodesPcLeft = () => {
    $axeSwordFireworkExplosionPcLeft.setAttribute("class", "visible")
    $middleFirework_5Z_1PcLeft.setAttribute("class", "hidden")    
    $bottomFirework_4Z_2PcLeft.setAttribute("class", "hidden")
    $topFirework_6PcLeft.setAttribute("class", "hidden")    
    $middleFirework_5PcLeft.setAttribute("class", "hidden")    
    $bottomFirework_4PcLeft.setAttribute("class", "hidden")                        
}

var axeSwordFireworkDisplays_0PcLeft = () => {
    $axeSwordSmokePcFullMinus10Left.setAttribute("class", "visible")
    $axeSwordFireworkExplosionPcLeft.setAttribute("class", "hidden")
}

var axeSwordFireworkDisplays_1PcLeft = () => {
    $axeSwordSmokePcFullMinus9Left.setAttribute("class", "visible")        
    $axeSwordSmokePcFullMinus10Left.setAttribute("class", "hidden")    
}

var axeSwordFireworkDisplays_2PcLeft = () => {
    $axeSwordSmokePcFullMinus8Left.setAttribute("class", "visible")        
    $axeSwordSmokePcFullMinus9Left.setAttribute("class", "hidden")    
}

var axeSwordFireworkDisplays_3PcLeft = () => {
    $axeSwordSmokePcFullMinus7Left.setAttribute("class", "visible")        
    $axeSwordSmokePcFullMinus8Left.setAttribute("class", "hidden")    
}

var axeSwordFireworkDisplays_4PcLeft = () => {
    $axeSwordSmokePcFullMinus6Left.setAttribute("class", "visible")        
    $axeSwordSmokePcFullMinus7Left.setAttribute("class", "hidden")    
}

var axeSwordFireworkDisplays_5PcLeft = () => {
    $axeSwordSmokePcFullMinus5Left.setAttribute("class", "visible")        
    $axeSwordSmokePcFullMinus6Left.setAttribute("class", "hidden")    
}

var axeSwordFireworkDisplays_6PcLeft = () => {
    $axeSwordSmokePcFullMinus4Left.setAttribute("class", "visible")        
    $axeSwordSmokePcFullMinus5Left.setAttribute("class", "hidden")    
}

var axeSwordFireworkDisplays_7PcLeft = () => {
    $axeSwordSmokePcFullMinus3Left.setAttribute("class", "visible")        
    $axeSwordSmokePcFullMinus4Left.setAttribute("class", "hidden")    
}

var axeSwordFireworkDisplays_8PcLeft = () => {
    $axeSwordSmokePcFullMinus2Left.setAttribute("class", "visible")        
    $axeSwordSmokePcFullMinus3Left.setAttribute("class", "hidden")    
}

var axeSwordFireworkDisplays_9PcLeft = () => {
    $axeSwordSmokePcFullMinus1Left.setAttribute("class", "visible")        
    $axeSwordSmokePcFullMinus2Left.setAttribute("class", "hidden")    
}

var axeSwordFireworkDisplays_10PcLeft = () => {
    $axeSwordSmokePcFullLeft.setAttribute("class", "visible")        
    $axeSwordSmokePcFullMinus1Left.setAttribute("class", "hidden")    
}

var axeSwordFireworkDisplays_11PcLeft = () => {
    $fireworkAxePcLeft.setAttribute("class", "visible")
    $fireworkBowPcLeft.setAttribute("class", "hidden")
    $fireworkSwordPcLeft.setAttribute("class", "visible")
}

var axeSwordFireworkDisplays_12PcLeft = () => {
    $fireworkAxeShimmerPcFullLeft.setAttribute("class", "visible")
    $fireworkBowShimmerPcFullLeft.setAttribute("class", "hidden")
    $fireworkSwordShimmerPcFullLeft.setAttribute("class", "visible")
    $axeSwordSmokePcFullLeft.setAttribute("class", "hidden")
}

var axeSwordFireworkDisplays_13PcLeft = () => {
    $fireworkAxePcLeft.setAttribute("class", "hidden")
    $fireworkBowPcLeft.setAttribute("class", "hidden")
    $fireworkSwordPcLeft.setAttribute("class", "hidden")
}

var axeSwordFireworkDisplays_14PcLeft = () => {
    $fireworkAxeShimmerPcFullLeft.setAttribute("class", "hidden")
    $fireworkBowShimmerPcFullLeft.setAttribute("class", "hidden")
    $fireworkSwordShimmerPcFullLeft.setAttribute("class", "hidden")
}

var axeSwordProtrudingFlyingFireworks_0PcRight = () => {
    $protrudingFireworkTop_0PcRight.setAttribute("class", "visible")
}

var axeSwordProtrudingFlyingFireworks_1PcRight = () => {
    $protrudingFireworkTop_1PcRight.setAttribute("class", "visible")
    $protrudingFireworkMiddle_0PcRight.setAttribute("class", "hidden")
    $protrudingFireworkTop_0PcRight.setAttribute("class", "hidden")
}

var axeSwordProtrudingFlyingFireworks_2PcRight = () => {
    $protrudingFireworkTop_2PcRight.setAttribute("class", "visible")
    $protrudingFireworkMiddle_1PcRight.setAttribute("class", "hidden")
    $protrudingFireworkBottom_0PcRight.setAttribute("class", "visible")
    $protrudingFireworkTop_1PcRight.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_0PcRight.setAttribute("class", "hidden")
}

var axeSwordProtrudingFlyingFireworks_3PcRight = () => {
    $protrudingFireworkTop_3PcRight.setAttribute("class", "visible")
    $protrudingFireworkMiddle_2PcRight.setAttribute("class", "hidden")
    $protrudingFireworkBottom_1PcRight.setAttribute("class", "visible")
    $protrudingFireworkTop_2PcRight.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_1PcRight.setAttribute("class", "hidden")
    $protrudingFireworkBottom_0PcRight.setAttribute("class", "hidden")    
}

var axeSwordProtrudingFlyingFireworks_4PcRight = () => {
    $protrudingFireworkTop_4PcRight.setAttribute("class", "visible")
    $protrudingFireworkMiddle_3PcRight.setAttribute("class", "hidden")
    $protrudingFireworkBottom_2PcRight.setAttribute("class", "visible")
    $protrudingFireworkTop_3PcRight.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_2PcRight.setAttribute("class", "hidden")
    $protrudingFireworkBottom_1PcRight.setAttribute("class", "hidden")    
}

var axeSwordProtrudingFlyingFireworks_5PcRight = () => {
    $protrudingFireworkTop_5PcRight.setAttribute("class", "visible")
    $protrudingFireworkMiddle_4PcRight.setAttribute("class", "hidden")
    $protrudingFireworkBottom_3PcRight.setAttribute("class", "visible")
    $protrudingFireworkTop_4PcRight.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_3PcRight.setAttribute("class", "hidden")
    $protrudingFireworkBottom_2PcRight.setAttribute("class", "hidden")    
}

var axeSwordProtrudingFlyingFireworks_6PcRight = () => {
    $protrudingFireworkTop_6PcRight.setAttribute("class", "visible")
    $protrudingFireworkMiddle_5PcRight.setAttribute("class", "hidden")
    $protrudingFireworkBottom_4PcRight.setAttribute("class", "visible")
    $protrudingFireworkTop_5PcRight.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_4PcRight.setAttribute("class", "hidden")
    $protrudingFireworkBottom_3PcRight.setAttribute("class", "hidden")    
}

var axeSwordProtrudingFlyingFireworks_7PcRight = () => {
    $protrudingFireworkMiddle_6PcRight.setAttribute("class", "hidden")
    $protrudingFireworkBottom_5PcRight.setAttribute("class", "visible")
    $protrudingFireworkTop_6PcRight.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_5PcRight.setAttribute("class", "hidden")
    $protrudingFireworkBottom_4PcRight.setAttribute("class", "hidden")    
}

var axeSwordProtrudingFlyingFireworks_8PcRight = () => {
    $topFirework_0PcRight.setAttribute("class", "visible")    
    $protrudingFireworkBottom_6PcRight.setAttribute("class", "visible")    
    $protrudingFireworkMiddle_6PcRight.setAttribute("class", "hidden")
    $protrudingFireworkBottom_5PcRight.setAttribute("class", "hidden")    
}

var axeSwordProtrudingFlyingFireworks_9PcRight = () => {
    $topFirework_1PcRight.setAttribute("class", "visible")
    $middleFirework_0PcRight.setAttribute("class", "hidden")    
    $topFirework_0PcRight.setAttribute("class", "hidden")    
    $protrudingFireworkBottom_6PcRight.setAttribute("class", "hidden")    
}

var axeSwordProtrudingFlyingFireworks_10PcRight = () => {
    $topFirework_2PcRight.setAttribute("class", "visible")
    $middleFirework_1PcRight.setAttribute("class", "hidden")
    $bottomFirework_0PcRight.setAttribute("class", "visible")
    $topFirework_1PcRight.setAttribute("class", "hidden")
    $middleFirework_0PcRight.setAttribute("class", "hidden")            
}

var axeSwordProtrudingFlyingFireworks_11PcRight = () => {
    $topFirework_3PcRight.setAttribute("class", "visible")    
    $middleFirework_2PcRight.setAttribute("class", "hidden")    
    $bottomFirework_1PcRight.setAttribute("class", "visible")
    $topFirework_2PcRight.setAttribute("class", "hidden")
    $middleFirework_1PcRight.setAttribute("class", "hidden")
    $bottomFirework_0PcRight.setAttribute("class", "hidden")        
}

var axeSwordProtrudingFlyingFireworks_12PcRight = () => {
    $middleFirework_3Z_1PcRight.setAttribute("class", "hidden")
    $topFirework_4PcRight.setAttribute("class", "visible")    
    $middleFirework_3PcRight.setAttribute("class", "hidden")        
    $bottomFirework_2PcRight.setAttribute("class", "visible")
    $topFirework_3PcRight.setAttribute("class", "hidden")    
    $middleFirework_2PcRight.setAttribute("class", "hidden")    
    $bottomFirework_1PcRight.setAttribute("class", "hidden")            
}

var axeSwordProtrudingFlyingFireworks_13PcRight = () => {
    $bottomFirework_3Z_1PcRight.setAttribute("class", "visible")
    $middleFirework_4Z_2PcRight.setAttribute("class", "hidden")
    $topFirework_5PcRight.setAttribute("class", "visible")    
    $middleFirework_4PcRight.setAttribute("class", "hidden")    
    $bottomFirework_3PcRight.setAttribute("class", "visible")
    $topFirework_4PcRight.setAttribute("class", "hidden")    
    $middleFirework_3PcRight.setAttribute("class", "hidden")
    $middleFirework_3Z_1PcRight.setAttribute("class", "hidden")    
    $bottomFirework_2PcRight.setAttribute("class", "hidden")                
}

var axeSwordProtrudingFlyingFireworks_14PcRight = () => {
    $middleFirework_5Z_1PcRight.setAttribute("class", "hidden")    
    $bottomFirework_4Z_2PcRight.setAttribute("class", "visible")
    $topFirework_6PcRight.setAttribute("class", "visible")    
    $middleFirework_5PcRight.setAttribute("class", "hidden")    
    $bottomFirework_4PcRight.setAttribute("class", "visible")
    $bottomFirework_3Z_1PcRight.setAttribute("class", "hidden")
    $middleFirework_4Z_2PcRight.setAttribute("class", "hidden")
    $topFirework_5PcRight.setAttribute("class", "hidden")    
    $middleFirework_4PcRight.setAttribute("class", "hidden")    
    $bottomFirework_3PcRight.setAttribute("class", "hidden")                    
}

var axeSwordFireworkExplodesPcRight = () => {
    $axeSwordFireworkExplosionPcRight.setAttribute("class", "visible")
    $middleFirework_5Z_1PcRight.setAttribute("class", "hidden")    
    $bottomFirework_4Z_2PcRight.setAttribute("class", "hidden")
    $topFirework_6PcRight.setAttribute("class", "hidden")    
    $middleFirework_5PcRight.setAttribute("class", "hidden")    
    $bottomFirework_4PcRight.setAttribute("class", "hidden")                        
}

var axeSwordFireworkDisplays_0PcRight = () => {
    $axeSwordSmokePcFullMinus10Right.setAttribute("class", "visible")
    $axeSwordFireworkExplosionPcRight.setAttribute("class", "hidden")
}

var axeSwordFireworkDisplays_1PcRight = () => {
    $axeSwordSmokePcFullMinus9Right.setAttribute("class", "visible")        
    $axeSwordSmokePcFullMinus10Right.setAttribute("class", "hidden")    
}

var axeSwordFireworkDisplays_2PcRight = () => {
    $axeSwordSmokePcFullMinus8Right.setAttribute("class", "visible")        
    $axeSwordSmokePcFullMinus9Right.setAttribute("class", "hidden")    
}

var axeSwordFireworkDisplays_3PcRight = () => {
    $axeSwordSmokePcFullMinus7Right.setAttribute("class", "visible")        
    $axeSwordSmokePcFullMinus8Right.setAttribute("class", "hidden")    
}

var axeSwordFireworkDisplays_4PcRight = () => {
    $axeSwordSmokePcFullMinus6Right.setAttribute("class", "visible")        
    $axeSwordSmokePcFullMinus7Right.setAttribute("class", "hidden")    
}

var axeSwordFireworkDisplays_5PcRight = () => {
    $axeSwordSmokePcFullMinus5Right.setAttribute("class", "visible")        
    $axeSwordSmokePcFullMinus6Right.setAttribute("class", "hidden")    
}

var axeSwordFireworkDisplays_6PcRight = () => {
    $axeSwordSmokePcFullMinus4Right.setAttribute("class", "visible")        
    $axeSwordSmokePcFullMinus5Right.setAttribute("class", "hidden")    
}

var axeSwordFireworkDisplays_7PcRight = () => {
    $axeSwordSmokePcFullMinus3Right.setAttribute("class", "visible")        
    $axeSwordSmokePcFullMinus4Right.setAttribute("class", "hidden")    
}

var axeSwordFireworkDisplays_8PcRight = () => {
    $axeSwordSmokePcFullMinus2Right.setAttribute("class", "visible")        
    $axeSwordSmokePcFullMinus3Right.setAttribute("class", "hidden")    
}

var axeSwordFireworkDisplays_9PcRight = () => {
    $axeSwordSmokePcFullMinus1Right.setAttribute("class", "visible")        
    $axeSwordSmokePcFullMinus2Right.setAttribute("class", "hidden")    
}

var axeSwordFireworkDisplays_10PcRight = () => {
    $axeSwordSmokePcFullRight.setAttribute("class", "visible")        
    $axeSwordSmokePcFullMinus1Right.setAttribute("class", "hidden")    
}

var axeSwordFireworkDisplays_11PcRight = () => {
    $fireworkAxePcRight.setAttribute("class", "visible")
    $fireworkBowPcRight.setAttribute("class", "hidden")
    $fireworkSwordPcRight.setAttribute("class", "visible")
}

var axeSwordFireworkDisplays_12PcRight = () => {
    $fireworkAxeShimmerPcFullRight.setAttribute("class", "visible")
    $fireworkBowShimmerPcFullRight.setAttribute("class", "hidden")
    $fireworkSwordShimmerPcFullRight.setAttribute("class", "visible")
    $axeSwordSmokePcFullRight.setAttribute("class", "hidden")
}

var axeSwordFireworkDisplays_13PcRight = () => {
    $fireworkAxePcRight.setAttribute("class", "hidden")
    $fireworkBowPcRight.setAttribute("class", "hidden")
    $fireworkSwordPcRight.setAttribute("class", "hidden")
}

var axeSwordFireworkDisplays_14PcRight = () => {
    $fireworkAxeShimmerPcFullRight.setAttribute("class", "hidden")
    $fireworkBowShimmerPcFullRight.setAttribute("class", "hidden")
    $fireworkSwordShimmerPcFullRight.setAttribute("class", "hidden")
}

// bowSword Scenario Pc

var bowSwordProtrudingFlyingFireworks_0PcLeft = () => {
    $protrudingFireworkTop_0PcLeft.setAttribute("class", "visible")
}

var bowSwordProtrudingFlyingFireworks_1PcLeft = () => {
    $protrudingFireworkTop_1PcLeft.setAttribute("class", "visible")
    $protrudingFireworkMiddle_0PcLeft.setAttribute("class", "visible")
    $protrudingFireworkTop_0PcLeft.setAttribute("class", "hidden")
}

var bowSwordProtrudingFlyingFireworks_2PcLeft = () => {
    $protrudingFireworkTop_2PcLeft.setAttribute("class", "visible")
    $protrudingFireworkMiddle_1PcLeft.setAttribute("class", "visible")
    $protrudingFireworkBottom_0PcLeft.setAttribute("class", "hidden")
    $protrudingFireworkTop_1PcLeft.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_0PcLeft.setAttribute("class", "hidden")
}

var bowSwordProtrudingFlyingFireworks_3PcLeft = () => {
    $protrudingFireworkTop_3PcLeft.setAttribute("class", "visible")
    $protrudingFireworkMiddle_2PcLeft.setAttribute("class", "visible")
    $protrudingFireworkBottom_1PcLeft.setAttribute("class", "hidden")
    $protrudingFireworkTop_2PcLeft.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_1PcLeft.setAttribute("class", "hidden")
    $protrudingFireworkBottom_0PcLeft.setAttribute("class", "hidden")    
}

var bowSwordProtrudingFlyingFireworks_4PcLeft = () => {
    $protrudingFireworkTop_4PcLeft.setAttribute("class", "visible")
    $protrudingFireworkMiddle_3PcLeft.setAttribute("class", "visible")
    $protrudingFireworkBottom_2PcLeft.setAttribute("class", "hidden")
    $protrudingFireworkTop_3PcLeft.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_2PcLeft.setAttribute("class", "hidden")
    $protrudingFireworkBottom_1PcLeft.setAttribute("class", "hidden")    
}

var bowSwordProtrudingFlyingFireworks_5PcLeft = () => {
    $protrudingFireworkTop_5PcLeft.setAttribute("class", "visible")
    $protrudingFireworkMiddle_4PcLeft.setAttribute("class", "visible")
    $protrudingFireworkBottom_3PcLeft.setAttribute("class", "hidden")
    $protrudingFireworkTop_4PcLeft.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_3PcLeft.setAttribute("class", "hidden")
    $protrudingFireworkBottom_2PcLeft.setAttribute("class", "hidden")    
}

var bowSwordProtrudingFlyingFireworks_6PcLeft = () => {
    $protrudingFireworkTop_6PcLeft.setAttribute("class", "visible")
    $protrudingFireworkMiddle_5PcLeft.setAttribute("class", "visible")
    $protrudingFireworkBottom_4PcLeft.setAttribute("class", "hidden")
    $protrudingFireworkTop_5PcLeft.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_4PcLeft.setAttribute("class", "hidden")
    $protrudingFireworkBottom_3PcLeft.setAttribute("class", "hidden")    
}

var bowSwordProtrudingFlyingFireworks_7PcLeft = () => {
    $protrudingFireworkMiddle_6PcLeft.setAttribute("class", "visible")
    $protrudingFireworkBottom_5PcLeft.setAttribute("class", "hidden")
    $protrudingFireworkTop_6PcLeft.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_5PcLeft.setAttribute("class", "hidden")
    $protrudingFireworkBottom_4PcLeft.setAttribute("class", "hidden")    
}

var bowSwordProtrudingFlyingFireworks_8PcLeft = () => {
    $topFirework_0PcLeft.setAttribute("class", "visible")    
    $protrudingFireworkBottom_6PcLeft.setAttribute("class", "hidden")    
    $protrudingFireworkMiddle_6PcLeft.setAttribute("class", "hidden")
    $protrudingFireworkBottom_5PcLeft.setAttribute("class", "hidden")    
}

var bowSwordProtrudingFlyingFireworks_9PcLeft = () => {
    $topFirework_1PcLeft.setAttribute("class", "visible")
    $middleFirework_0PcLeft.setAttribute("class", "visible")    
    $topFirework_0PcLeft.setAttribute("class", "hidden")    
    $protrudingFireworkBottom_6PcLeft.setAttribute("class", "hidden")    
}

var bowSwordProtrudingFlyingFireworks_10PcLeft = () => {
    $topFirework_2PcLeft.setAttribute("class", "visible")
    $middleFirework_1PcLeft.setAttribute("class", "visible")
    $bottomFirework_0PcLeft.setAttribute("class", "hidden")
    $topFirework_1PcLeft.setAttribute("class", "hidden")
    $middleFirework_0PcLeft.setAttribute("class", "hidden")            
}

var bowSwordProtrudingFlyingFireworks_11PcLeft = () => {
    $topFirework_3PcLeft.setAttribute("class", "visible")    
    $middleFirework_2PcLeft.setAttribute("class", "visible")    
    $bottomFirework_1PcLeft.setAttribute("class", "hidden")
    $topFirework_2PcLeft.setAttribute("class", "hidden")
    $middleFirework_1PcLeft.setAttribute("class", "hidden")
    $bottomFirework_0PcLeft.setAttribute("class", "hidden")        
}

var bowSwordProtrudingFlyingFireworks_12PcLeft = () => {
    $middleFirework_3Z_1PcLeft.setAttribute("class", "visible")
    $topFirework_4PcLeft.setAttribute("class", "visible")    
    $middleFirework_3PcLeft.setAttribute("class", "visible")        
    $bottomFirework_2PcLeft.setAttribute("class", "hidden")
    $topFirework_3PcLeft.setAttribute("class", "hidden")    
    $middleFirework_2PcLeft.setAttribute("class", "hidden")    
    $bottomFirework_1PcLeft.setAttribute("class", "hidden")            
}

var bowSwordProtrudingFlyingFireworks_13PcLeft = () => {
    $bottomFirework_3Z_1PcLeft.setAttribute("class", "hidden")
    $middleFirework_4Z_2PcLeft.setAttribute("class", "visible")
    $topFirework_5PcLeft.setAttribute("class", "visible")    
    $middleFirework_4PcLeft.setAttribute("class", "visible")    
    $bottomFirework_3PcLeft.setAttribute("class", "hidden")
    $topFirework_4PcLeft.setAttribute("class", "hidden")    
    $middleFirework_3PcLeft.setAttribute("class", "hidden")
    $middleFirework_3Z_1PcLeft.setAttribute("class", "hidden")    
    $bottomFirework_2PcLeft.setAttribute("class", "hidden")                
}

var bowSwordProtrudingFlyingFireworks_14PcLeft = () => {
    $middleFirework_5Z_1PcLeft.setAttribute("class", "visible")    
    $bottomFirework_4Z_2PcLeft.setAttribute("class", "hidden")
    $topFirework_6PcLeft.setAttribute("class", "visible")    
    $middleFirework_5PcLeft.setAttribute("class", "visible")    
    $bottomFirework_4PcLeft.setAttribute("class", "hidden")
    $bottomFirework_3Z_1PcLeft.setAttribute("class", "hidden")
    $middleFirework_4Z_2PcLeft.setAttribute("class", "hidden")
    $topFirework_5PcLeft.setAttribute("class", "hidden")    
    $middleFirework_4PcLeft.setAttribute("class", "hidden")    
    $bottomFirework_3PcLeft.setAttribute("class", "hidden")                    
}

var bowSwordFireworkExplodesPcLeft = () => {
    $bowSwordFireworkExplosionPcLeft.setAttribute("class", "visible")
    $middleFirework_5Z_1PcLeft.setAttribute("class", "hidden")    
    $bottomFirework_4Z_2PcLeft.setAttribute("class", "hidden")
    $topFirework_6PcLeft.setAttribute("class", "hidden")    
    $middleFirework_5PcLeft.setAttribute("class", "hidden")    
    $bottomFirework_4PcLeft.setAttribute("class", "hidden")                        
}

var bowSwordFireworkDisplays_0PcLeft = () => {
    $bowSwordSmokePcFullMinus10Left.setAttribute("class", "visible")
    $bowSwordFireworkExplosionPcLeft.setAttribute("class", "hidden")
}

var bowSwordFireworkDisplays_1PcLeft = () => {
    $bowSwordSmokePcFullMinus9Left.setAttribute("class", "visible")        
    $bowSwordSmokePcFullMinus10Left.setAttribute("class", "hidden")    
}

var bowSwordFireworkDisplays_2PcLeft = () => {
    $bowSwordSmokePcFullMinus8Left.setAttribute("class", "visible")        
    $bowSwordSmokePcFullMinus9Left.setAttribute("class", "hidden")    
}

var bowSwordFireworkDisplays_3PcLeft = () => {
    $bowSwordSmokePcFullMinus7Left.setAttribute("class", "visible")        
    $bowSwordSmokePcFullMinus8Left.setAttribute("class", "hidden")    
}

var bowSwordFireworkDisplays_4PcLeft = () => {
    $bowSwordSmokePcFullMinus6Left.setAttribute("class", "visible")        
    $bowSwordSmokePcFullMinus7Left.setAttribute("class", "hidden")    
}

var bowSwordFireworkDisplays_5PcLeft = () => {
    $bowSwordSmokePcFullMinus5Left.setAttribute("class", "visible")        
    $bowSwordSmokePcFullMinus6Left.setAttribute("class", "hidden")    
}

var bowSwordFireworkDisplays_6PcLeft = () => {
    $bowSwordSmokePcFullMinus4Left.setAttribute("class", "visible")        
    $bowSwordSmokePcFullMinus5Left.setAttribute("class", "hidden")    
}

var bowSwordFireworkDisplays_7PcLeft = () => {
    $bowSwordSmokePcFullMinus3Left.setAttribute("class", "visible")        
    $bowSwordSmokePcFullMinus4Left.setAttribute("class", "hidden")    
}

var bowSwordFireworkDisplays_8PcLeft = () => {
    $bowSwordSmokePcFullMinus2Left.setAttribute("class", "visible")        
    $bowSwordSmokePcFullMinus3Left.setAttribute("class", "hidden")    
}

var bowSwordFireworkDisplays_9PcLeft = () => {
    $bowSwordSmokePcFullMinus1Left.setAttribute("class", "visible")        
    $bowSwordSmokePcFullMinus2Left.setAttribute("class", "hidden")    
}

var bowSwordFireworkDisplays_10PcLeft = () => {
    $bowSwordSmokePcFullLeft.setAttribute("class", "visible")        
    $bowSwordSmokePcFullMinus1Left.setAttribute("class", "hidden")    
}

var bowSwordFireworkDisplays_11PcLeft = () => {
    $fireworkAxePcLeft.setAttribute("class", "hidden")
    $fireworkBowPcLeft.setAttribute("class", "visible")
    $fireworkSwordPcLeft.setAttribute("class", "visible")
}

var bowSwordFireworkDisplays_12PcLeft = () => {
    $fireworkAxeShimmerPcFullLeft.setAttribute("class", "hidden")
    $fireworkBowShimmerPcFullLeft.setAttribute("class", "visible")
    $fireworkSwordShimmerPcFullLeft.setAttribute("class", "visible")
    $bowSwordSmokePcFullLeft.setAttribute("class", "hidden")
}

var bowSwordFireworkDisplays_13PcLeft = () => {
    $fireworkAxePcLeft.setAttribute("class", "hidden")
    $fireworkBowPcLeft.setAttribute("class", "hidden")
    $fireworkSwordPcLeft.setAttribute("class", "hidden")
}

var bowSwordFireworkDisplays_14PcLeft = () => {
    $fireworkAxeShimmerPcFullLeft.setAttribute("class", "hidden")
    $fireworkBowShimmerPcFullLeft.setAttribute("class", "hidden")
    $fireworkSwordShimmerPcFullLeft.setAttribute("class", "hidden")
}

var bowSwordProtrudingFlyingFireworks_0PcRight = () => {
    $protrudingFireworkTop_0PcRight.setAttribute("class", "visible")
}

var bowSwordProtrudingFlyingFireworks_1PcRight = () => {
    $protrudingFireworkTop_1PcRight.setAttribute("class", "visible")
    $protrudingFireworkMiddle_0PcRight.setAttribute("class", "visible")
    $protrudingFireworkTop_0PcRight.setAttribute("class", "hidden")
}

var bowSwordProtrudingFlyingFireworks_2PcRight = () => {
    $protrudingFireworkTop_2PcRight.setAttribute("class", "visible")
    $protrudingFireworkMiddle_1PcRight.setAttribute("class", "visible")
    $protrudingFireworkBottom_0PcRight.setAttribute("class", "hidden")
    $protrudingFireworkTop_1PcRight.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_0PcRight.setAttribute("class", "hidden")
}

var bowSwordProtrudingFlyingFireworks_3PcRight = () => {
    $protrudingFireworkTop_3PcRight.setAttribute("class", "visible")
    $protrudingFireworkMiddle_2PcRight.setAttribute("class", "visible")
    $protrudingFireworkBottom_1PcRight.setAttribute("class", "hidden")
    $protrudingFireworkTop_2PcRight.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_1PcRight.setAttribute("class", "hidden")
    $protrudingFireworkBottom_0PcRight.setAttribute("class", "hidden")    
}

var bowSwordProtrudingFlyingFireworks_4PcRight = () => {
    $protrudingFireworkTop_4PcRight.setAttribute("class", "visible")
    $protrudingFireworkMiddle_3PcRight.setAttribute("class", "visible")
    $protrudingFireworkBottom_2PcRight.setAttribute("class", "hidden")
    $protrudingFireworkTop_3PcRight.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_2PcRight.setAttribute("class", "hidden")
    $protrudingFireworkBottom_1PcRight.setAttribute("class", "hidden")    
}

var bowSwordProtrudingFlyingFireworks_5PcRight = () => {
    $protrudingFireworkTop_5PcRight.setAttribute("class", "visible")
    $protrudingFireworkMiddle_4PcRight.setAttribute("class", "visible")
    $protrudingFireworkBottom_3PcRight.setAttribute("class", "hidden")
    $protrudingFireworkTop_4PcRight.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_3PcRight.setAttribute("class", "hidden")
    $protrudingFireworkBottom_2PcRight.setAttribute("class", "hidden")    
}

var bowSwordProtrudingFlyingFireworks_6PcRight = () => {
    $protrudingFireworkTop_6PcRight.setAttribute("class", "visible")
    $protrudingFireworkMiddle_5PcRight.setAttribute("class", "visible")
    $protrudingFireworkBottom_4PcRight.setAttribute("class", "hidden")
    $protrudingFireworkTop_5PcRight.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_4PcRight.setAttribute("class", "hidden")
    $protrudingFireworkBottom_3PcRight.setAttribute("class", "hidden")    
}

var bowSwordProtrudingFlyingFireworks_7PcRight = () => {
    $protrudingFireworkMiddle_6PcRight.setAttribute("class", "visible")
    $protrudingFireworkBottom_5PcRight.setAttribute("class", "hidden")
    $protrudingFireworkTop_6PcRight.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_5PcRight.setAttribute("class", "hidden")
    $protrudingFireworkBottom_4PcRight.setAttribute("class", "hidden")    
}

var bowSwordProtrudingFlyingFireworks_8PcRight = () => {
    $topFirework_0PcRight.setAttribute("class", "visible")    
    $protrudingFireworkBottom_6PcRight.setAttribute("class", "hidden")    
    $protrudingFireworkMiddle_6PcRight.setAttribute("class", "hidden")
    $protrudingFireworkBottom_5PcRight.setAttribute("class", "hidden")    
}

var bowSwordProtrudingFlyingFireworks_9PcRight = () => {
    $topFirework_1PcRight.setAttribute("class", "visible")
    $middleFirework_0PcRight.setAttribute("class", "visible")    
    $topFirework_0PcRight.setAttribute("class", "hidden")    
    $protrudingFireworkBottom_6PcRight.setAttribute("class", "hidden")    
}

var bowSwordProtrudingFlyingFireworks_10PcRight = () => {
    $topFirework_2PcRight.setAttribute("class", "visible")
    $middleFirework_1PcRight.setAttribute("class", "visible")
    $bottomFirework_0PcRight.setAttribute("class", "hidden")
    $topFirework_1PcRight.setAttribute("class", "hidden")
    $middleFirework_0PcRight.setAttribute("class", "hidden")            
}

var bowSwordProtrudingFlyingFireworks_11PcRight = () => {
    $topFirework_3PcRight.setAttribute("class", "visible")    
    $middleFirework_2PcRight.setAttribute("class", "visible")    
    $bottomFirework_1PcRight.setAttribute("class", "hidden")
    $topFirework_2PcRight.setAttribute("class", "hidden")
    $middleFirework_1PcRight.setAttribute("class", "hidden")
    $bottomFirework_0PcRight.setAttribute("class", "hidden")        
}

var bowSwordProtrudingFlyingFireworks_12PcRight = () => {
    $middleFirework_3Z_1PcRight.setAttribute("class", "visible")
    $topFirework_4PcRight.setAttribute("class", "visible")    
    $middleFirework_3PcRight.setAttribute("class", "visible")        
    $bottomFirework_2PcRight.setAttribute("class", "hidden")
    $topFirework_3PcRight.setAttribute("class", "hidden")    
    $middleFirework_2PcRight.setAttribute("class", "hidden")    
    $bottomFirework_1PcRight.setAttribute("class", "hidden")            
}

var bowSwordProtrudingFlyingFireworks_13PcRight = () => {
    $bottomFirework_3Z_1PcRight.setAttribute("class", "hidden")
    $middleFirework_4Z_2PcRight.setAttribute("class", "visible")
    $topFirework_5PcRight.setAttribute("class", "visible")    
    $middleFirework_4PcRight.setAttribute("class", "visible")    
    $bottomFirework_3PcRight.setAttribute("class", "hidden")
    $topFirework_4PcRight.setAttribute("class", "hidden")    
    $middleFirework_3PcRight.setAttribute("class", "hidden")
    $middleFirework_3Z_1PcRight.setAttribute("class", "hidden")    
    $bottomFirework_2PcRight.setAttribute("class", "hidden")                
}

var bowSwordProtrudingFlyingFireworks_14PcRight = () => {
    $middleFirework_5Z_1PcRight.setAttribute("class", "visible")    
    $bottomFirework_4Z_2PcRight.setAttribute("class", "hidden")
    $topFirework_6PcRight.setAttribute("class", "visible")    
    $middleFirework_5PcRight.setAttribute("class", "visible")    
    $bottomFirework_4PcRight.setAttribute("class", "hidden")
    $bottomFirework_3Z_1PcRight.setAttribute("class", "hidden")
    $middleFirework_4Z_2PcRight.setAttribute("class", "hidden")
    $topFirework_5PcRight.setAttribute("class", "hidden")    
    $middleFirework_4PcRight.setAttribute("class", "hidden")    
    $bottomFirework_3PcRight.setAttribute("class", "hidden")                    
}

var bowSwordFireworkExplodesPcRight = () => {
    $bowSwordFireworkExplosionPcRight.setAttribute("class", "visible")
    $middleFirework_5Z_1PcRight.setAttribute("class", "hidden")    
    $bottomFirework_4Z_2PcRight.setAttribute("class", "hidden")
    $topFirework_6PcRight.setAttribute("class", "hidden")    
    $middleFirework_5PcRight.setAttribute("class", "hidden")    
    $bottomFirework_4PcRight.setAttribute("class", "hidden")                        
}

var bowSwordFireworkDisplays_0PcRight = () => {
    $bowSwordSmokePcFullMinus10Right.setAttribute("class", "visible")
    $bowSwordFireworkExplosionPcRight.setAttribute("class", "hidden")
}

var bowSwordFireworkDisplays_1PcRight = () => {
    $bowSwordSmokePcFullMinus9Right.setAttribute("class", "visible")        
    $bowSwordSmokePcFullMinus10Right.setAttribute("class", "hidden")    
}

var bowSwordFireworkDisplays_2PcRight = () => {
    $bowSwordSmokePcFullMinus8Right.setAttribute("class", "visible")        
    $bowSwordSmokePcFullMinus9Right.setAttribute("class", "hidden")    
}

var bowSwordFireworkDisplays_3PcRight = () => {
    $bowSwordSmokePcFullMinus7Right.setAttribute("class", "visible")        
    $bowSwordSmokePcFullMinus8Right.setAttribute("class", "hidden")    
}

var bowSwordFireworkDisplays_4PcRight = () => {
    $bowSwordSmokePcFullMinus6Right.setAttribute("class", "visible")        
    $bowSwordSmokePcFullMinus7Right.setAttribute("class", "hidden")    
}

var bowSwordFireworkDisplays_5PcRight = () => {
    $bowSwordSmokePcFullMinus5Right.setAttribute("class", "visible")        
    $bowSwordSmokePcFullMinus6Right.setAttribute("class", "hidden")    
}

var bowSwordFireworkDisplays_6PcRight = () => {
    $bowSwordSmokePcFullMinus4Right.setAttribute("class", "visible")        
    $bowSwordSmokePcFullMinus5Right.setAttribute("class", "hidden")    
}

var bowSwordFireworkDisplays_7PcRight = () => {
    $bowSwordSmokePcFullMinus3Right.setAttribute("class", "visible")        
    $bowSwordSmokePcFullMinus4Right.setAttribute("class", "hidden")    
}

var bowSwordFireworkDisplays_8PcRight = () => {
    $bowSwordSmokePcFullMinus2Right.setAttribute("class", "visible")        
    $bowSwordSmokePcFullMinus3Right.setAttribute("class", "hidden")    
}

var bowSwordFireworkDisplays_9PcRight = () => {
    $bowSwordSmokePcFullMinus1Right.setAttribute("class", "visible")        
    $bowSwordSmokePcFullMinus2Right.setAttribute("class", "hidden")    
}

var bowSwordFireworkDisplays_10PcRight = () => {
    $bowSwordSmokePcFullRight.setAttribute("class", "visible")        
    $bowSwordSmokePcFullMinus1Right.setAttribute("class", "hidden")    
}

var bowSwordFireworkDisplays_11PcRight = () => {
    $fireworkAxePcRight.setAttribute("class", "hidden")
    $fireworkBowPcRight.setAttribute("class", "visible")
    $fireworkSwordPcRight.setAttribute("class", "visible")
}

var bowSwordFireworkDisplays_12PcRight = () => {
    $fireworkAxeShimmerPcFullRight.setAttribute("class", "hidden")
    $fireworkBowShimmerPcFullRight.setAttribute("class", "visible")
    $fireworkSwordShimmerPcFullRight.setAttribute("class", "visible")
    $bowSwordSmokePcFullRight.setAttribute("class", "hidden")
}

var bowSwordFireworkDisplays_13PcRight = () => {
    $fireworkAxePcRight.setAttribute("class", "hidden")
    $fireworkBowPcRight.setAttribute("class", "hidden")
    $fireworkSwordPcRight.setAttribute("class", "hidden")
}

var bowSwordFireworkDisplays_14PcRight = () => {
    $fireworkAxeShimmerPcFullRight.setAttribute("class", "hidden")
    $fireworkBowShimmerPcFullRight.setAttribute("class", "hidden")
    $fireworkSwordShimmerPcFullRight.setAttribute("class", "hidden")
}

// axeBowSword Scenario Pc

var axeBowSwordProtrudingFlyingFireworks_0PcLeft = () => {
    $protrudingFireworkTop_0PcLeft.setAttribute("class", "visible")
}

var axeBowSwordProtrudingFlyingFireworks_1PcLeft = () => {
    $protrudingFireworkTop_1PcLeft.setAttribute("class", "visible")
    $protrudingFireworkMiddle_0PcLeft.setAttribute("class", "visible")
    $protrudingFireworkTop_0PcLeft.setAttribute("class", "hidden")
}

var axeBowSwordProtrudingFlyingFireworks_2PcLeft = () => {
    $protrudingFireworkTop_2PcLeft.setAttribute("class", "visible")
    $protrudingFireworkMiddle_1PcLeft.setAttribute("class", "visible")
    $protrudingFireworkBottom_0PcLeft.setAttribute("class", "visible")
    $protrudingFireworkTop_1PcLeft.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_0PcLeft.setAttribute("class", "hidden")
}

var axeBowSwordProtrudingFlyingFireworks_3PcLeft = () => {
    $protrudingFireworkTop_3PcLeft.setAttribute("class", "visible")
    $protrudingFireworkMiddle_2PcLeft.setAttribute("class", "visible")
    $protrudingFireworkBottom_1PcLeft.setAttribute("class", "visible")
    $protrudingFireworkTop_2PcLeft.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_1PcLeft.setAttribute("class", "hidden")
    $protrudingFireworkBottom_0PcLeft.setAttribute("class", "hidden")    
}

var axeBowSwordProtrudingFlyingFireworks_4PcLeft = () => {
    $protrudingFireworkTop_4PcLeft.setAttribute("class", "visible")
    $protrudingFireworkMiddle_3PcLeft.setAttribute("class", "visible")
    $protrudingFireworkBottom_2PcLeft.setAttribute("class", "visible")
    $protrudingFireworkTop_3PcLeft.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_2PcLeft.setAttribute("class", "hidden")
    $protrudingFireworkBottom_1PcLeft.setAttribute("class", "hidden")    
}

var axeBowSwordProtrudingFlyingFireworks_5PcLeft = () => {
    $protrudingFireworkTop_5PcLeft.setAttribute("class", "visible")
    $protrudingFireworkMiddle_4PcLeft.setAttribute("class", "visible")
    $protrudingFireworkBottom_3PcLeft.setAttribute("class", "visible")
    $protrudingFireworkTop_4PcLeft.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_3PcLeft.setAttribute("class", "hidden")
    $protrudingFireworkBottom_2PcLeft.setAttribute("class", "hidden")    
}

var axeBowSwordProtrudingFlyingFireworks_6PcLeft = () => {
    $protrudingFireworkTop_6PcLeft.setAttribute("class", "visible")
    $protrudingFireworkMiddle_5PcLeft.setAttribute("class", "visible")
    $protrudingFireworkBottom_4PcLeft.setAttribute("class", "visible")
    $protrudingFireworkTop_5PcLeft.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_4PcLeft.setAttribute("class", "hidden")
    $protrudingFireworkBottom_3PcLeft.setAttribute("class", "hidden")    
}

var axeBowSwordProtrudingFlyingFireworks_7PcLeft = () => {
    $protrudingFireworkMiddle_6PcLeft.setAttribute("class", "visible")
    $protrudingFireworkBottom_5PcLeft.setAttribute("class", "visible")
    $protrudingFireworkTop_6PcLeft.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_5PcLeft.setAttribute("class", "hidden")
    $protrudingFireworkBottom_4PcLeft.setAttribute("class", "hidden")    
}

var axeBowSwordProtrudingFlyingFireworks_8PcLeft = () => {
    $topFirework_0PcLeft.setAttribute("class", "visible")    
    $protrudingFireworkBottom_6PcLeft.setAttribute("class", "visible")    
    $protrudingFireworkMiddle_6PcLeft.setAttribute("class", "hidden")
    $protrudingFireworkBottom_5PcLeft.setAttribute("class", "hidden")    
}

var axeBowSwordProtrudingFlyingFireworks_9PcLeft = () => {
    $topFirework_1PcLeft.setAttribute("class", "visible")
    $middleFirework_0PcLeft.setAttribute("class", "visible")    
    $topFirework_0PcLeft.setAttribute("class", "hidden")    
    $protrudingFireworkBottom_6PcLeft.setAttribute("class", "hidden")    
}

var axeBowSwordProtrudingFlyingFireworks_10PcLeft = () => {
    $topFirework_2PcLeft.setAttribute("class", "visible")
    $middleFirework_1PcLeft.setAttribute("class", "visible")
    $bottomFirework_0PcLeft.setAttribute("class", "visible")
    $topFirework_1PcLeft.setAttribute("class", "hidden")
    $middleFirework_0PcLeft.setAttribute("class", "hidden")            
}

var axeBowSwordProtrudingFlyingFireworks_11PcLeft = () => {
    $topFirework_3PcLeft.setAttribute("class", "visible")    
    $middleFirework_2PcLeft.setAttribute("class", "visible")    
    $bottomFirework_1PcLeft.setAttribute("class", "visible")
    $topFirework_2PcLeft.setAttribute("class", "hidden")
    $middleFirework_1PcLeft.setAttribute("class", "hidden")
    $bottomFirework_0PcLeft.setAttribute("class", "hidden")        
}

var axeBowSwordProtrudingFlyingFireworks_12PcLeft = () => {
    $topFirework_4PcLeft.setAttribute("class", "visible")    
    $middleFirework_3PcLeft.setAttribute("class", "visible")
    $middleFirework_3Z_1PcLeft.setAttribute("class", "visible")    
    $bottomFirework_2PcLeft.setAttribute("class", "visible")
    $topFirework_3PcLeft.setAttribute("class", "hidden")    
    $middleFirework_2PcLeft.setAttribute("class", "hidden")    
    $bottomFirework_1PcLeft.setAttribute("class", "hidden")            
}

var axeBowSwordProtrudingFlyingFireworks_13PcLeft = () => {
    $bottomFirework_3Z_1PcLeft.setAttribute("class", "visible")
    $middleFirework_4Z_2PcLeft.setAttribute("class", "visible")
    $topFirework_5PcLeft.setAttribute("class", "visible")    
    $middleFirework_4PcLeft.setAttribute("class", "visible")    
    $bottomFirework_3PcLeft.setAttribute("class", "visible")
    $topFirework_4PcLeft.setAttribute("class", "hidden")    
    $middleFirework_3PcLeft.setAttribute("class", "hidden")
    $middleFirework_3Z_1PcLeft.setAttribute("class", "hidden")    
    $bottomFirework_2PcLeft.setAttribute("class", "hidden")                
}

var axeBowSwordProtrudingFlyingFireworks_14PcLeft = () => {
    $middleFirework_5Z_1PcLeft.setAttribute("class", "visible")    
    $bottomFirework_4Z_2PcLeft.setAttribute("class", "visible")
    $topFirework_6PcLeft.setAttribute("class", "visible")    
    $middleFirework_5PcLeft.setAttribute("class", "visible")    
    $bottomFirework_4PcLeft.setAttribute("class", "visible")
    $bottomFirework_3Z_1PcLeft.setAttribute("class", "hidden")
    $middleFirework_4Z_2PcLeft.setAttribute("class", "hidden")
    $topFirework_5PcLeft.setAttribute("class", "hidden")    
    $middleFirework_4PcLeft.setAttribute("class", "hidden")    
    $bottomFirework_3PcLeft.setAttribute("class", "hidden")                    
}

var axeBowSwordFireworkExplodesPcLeft = () => {
    $axeBowSwordFireworkExplosionPcLeft.setAttribute("class", "visible")
    $middleFirework_5Z_1PcLeft.setAttribute("class", "hidden")    
    $bottomFirework_4Z_2PcLeft.setAttribute("class", "hidden")
    $topFirework_6PcLeft.setAttribute("class", "hidden")    
    $middleFirework_5PcLeft.setAttribute("class", "hidden")    
    $bottomFirework_4PcLeft.setAttribute("class", "hidden")                        
}

var axeBowSwordFireworkDisplays_0PcLeft = () => {
    $axeBowSwordSmokePcFullMinus10Left.setAttribute("class", "visible")
    $axeBowSwordFireworkExplosionPcLeft.setAttribute("class", "hidden")
}

var axeBowSwordFireworkDisplays_1PcLeft = () => {
    $axeBowSwordSmokePcFullMinus9Left.setAttribute("class", "visible")        
    $axeBowSwordSmokePcFullMinus10Left.setAttribute("class", "hidden")    
}

var axeBowSwordFireworkDisplays_2PcLeft = () => {
    $axeBowSwordSmokePcFullMinus8Left.setAttribute("class", "visible")        
    $axeBowSwordSmokePcFullMinus9Left.setAttribute("class", "hidden")    
}

var axeBowSwordFireworkDisplays_3PcLeft = () => {
    $axeBowSwordSmokePcFullMinus7Left.setAttribute("class", "visible")        
    $axeBowSwordSmokePcFullMinus8Left.setAttribute("class", "hidden")    
}

var axeBowSwordFireworkDisplays_4PcLeft = () => {
    $axeBowSwordSmokePcFullMinus6Left.setAttribute("class", "visible")        
    $axeBowSwordSmokePcFullMinus7Left.setAttribute("class", "hidden")    
}

var axeBowSwordFireworkDisplays_5PcLeft = () => {
    $axeBowSwordSmokePcFullMinus5Left.setAttribute("class", "visible")        
    $axeBowSwordSmokePcFullMinus6Left.setAttribute("class", "hidden")    
}

var axeBowSwordFireworkDisplays_6PcLeft = () => {
    $axeBowSwordSmokePcFullMinus4Left.setAttribute("class", "visible")        
    $axeBowSwordSmokePcFullMinus5Left.setAttribute("class", "hidden")    
}

var axeBowSwordFireworkDisplays_7PcLeft = () => {
    $axeBowSwordSmokePcFullMinus3Left.setAttribute("class", "visible")        
    $axeBowSwordSmokePcFullMinus4Left.setAttribute("class", "hidden")    
}

var axeBowSwordFireworkDisplays_8PcLeft = () => {
    $axeBowSwordSmokePcFullMinus2Left.setAttribute("class", "visible")        
    $axeBowSwordSmokePcFullMinus3Left.setAttribute("class", "hidden")    
}

var axeBowSwordFireworkDisplays_9PcLeft = () => {
    $axeBowSwordSmokePcFullMinus1Left.setAttribute("class", "visible")        
    $axeBowSwordSmokePcFullMinus2Left.setAttribute("class", "hidden")    
}

var axeBowSwordFireworkDisplays_10PcLeft = () => {
    $axeBowSwordSmokePcFullLeft.setAttribute("class", "visible")        
    $axeBowSwordSmokePcFullMinus1Left.setAttribute("class", "hidden")    
}

var axeBowSwordFireworkDisplays_11PcLeft = () => {
    $fireworkAxePcLeft.setAttribute("class", "visible")
    $fireworkBowPcLeft.setAttribute("class", "visible")
    $fireworkSwordPcLeft.setAttribute("class", "visible")
}

var axeBowSwordFireworkDisplays_12PcLeft = () => {
    $fireworkAxeShimmerPcFullLeft.setAttribute("class", "visible")
    $fireworkBowShimmerPcFullLeft.setAttribute("class", "visible")
    $fireworkSwordShimmerPcFullLeft.setAttribute("class", "visible")
    $axeBowSwordSmokePcFullLeft.setAttribute("class", "hidden")
}

var axeBowSwordFireworkDisplays_13PcLeft = () => {
    $fireworkAxePcLeft.setAttribute("class", "hidden")
    $fireworkBowPcLeft.setAttribute("class", "hidden")
    $fireworkSwordPcLeft.setAttribute("class", "hidden")
}

var axeBowSwordFireworkDisplays_14PcLeft = () => {
    $fireworkAxeShimmerPcFullLeft.setAttribute("class", "hidden")
    $fireworkBowShimmerPcFullLeft.setAttribute("class", "hidden")
    $fireworkSwordShimmerPcFullLeft.setAttribute("class", "hidden")
}

var axeBowSwordProtrudingFlyingFireworks_0PcRight = () => {
    $protrudingFireworkTop_0PcRight.setAttribute("class", "visible")
}

var axeBowSwordProtrudingFlyingFireworks_1PcRight = () => {
    $protrudingFireworkTop_1PcRight.setAttribute("class", "visible")
    $protrudingFireworkMiddle_0PcRight.setAttribute("class", "visible")
    $protrudingFireworkTop_0PcRight.setAttribute("class", "hidden")
}

var axeBowSwordProtrudingFlyingFireworks_2PcRight = () => {
    $protrudingFireworkTop_2PcRight.setAttribute("class", "visible")
    $protrudingFireworkMiddle_1PcRight.setAttribute("class", "visible")
    $protrudingFireworkBottom_0PcRight.setAttribute("class", "visible")
    $protrudingFireworkTop_1PcRight.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_0PcRight.setAttribute("class", "hidden")
}

var axeBowSwordProtrudingFlyingFireworks_3PcRight = () => {
    $protrudingFireworkTop_3PcRight.setAttribute("class", "visible")
    $protrudingFireworkMiddle_2PcRight.setAttribute("class", "visible")
    $protrudingFireworkBottom_1PcRight.setAttribute("class", "visible")
    $protrudingFireworkTop_2PcRight.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_1PcRight.setAttribute("class", "hidden")
    $protrudingFireworkBottom_0PcRight.setAttribute("class", "hidden")    
}

var axeBowSwordProtrudingFlyingFireworks_4PcRight = () => {
    $protrudingFireworkTop_4PcRight.setAttribute("class", "visible")
    $protrudingFireworkMiddle_3PcRight.setAttribute("class", "visible")
    $protrudingFireworkBottom_2PcRight.setAttribute("class", "visible")
    $protrudingFireworkTop_3PcRight.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_2PcRight.setAttribute("class", "hidden")
    $protrudingFireworkBottom_1PcRight.setAttribute("class", "hidden")    
}

var axeBowSwordProtrudingFlyingFireworks_5PcRight = () => {
    $protrudingFireworkTop_5PcRight.setAttribute("class", "visible")
    $protrudingFireworkMiddle_4PcRight.setAttribute("class", "visible")
    $protrudingFireworkBottom_3PcRight.setAttribute("class", "visible")
    $protrudingFireworkTop_4PcRight.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_3PcRight.setAttribute("class", "hidden")
    $protrudingFireworkBottom_2PcRight.setAttribute("class", "hidden")    
}

var axeBowSwordProtrudingFlyingFireworks_6PcRight = () => {
    $protrudingFireworkTop_6PcRight.setAttribute("class", "visible")
    $protrudingFireworkMiddle_5PcRight.setAttribute("class", "visible")
    $protrudingFireworkBottom_4PcRight.setAttribute("class", "visible")
    $protrudingFireworkTop_5PcRight.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_4PcRight.setAttribute("class", "hidden")
    $protrudingFireworkBottom_3PcRight.setAttribute("class", "hidden")    
}

var axeBowSwordProtrudingFlyingFireworks_7PcRight = () => {
    $protrudingFireworkMiddle_6PcRight.setAttribute("class", "visible")
    $protrudingFireworkBottom_5PcRight.setAttribute("class", "visible")
    $protrudingFireworkTop_6PcRight.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_5PcRight.setAttribute("class", "hidden")
    $protrudingFireworkBottom_4PcRight.setAttribute("class", "hidden")    
}

var axeBowSwordProtrudingFlyingFireworks_8PcRight = () => {
    $topFirework_0PcRight.setAttribute("class", "visible")    
    $protrudingFireworkBottom_6PcRight.setAttribute("class", "visible")    
    $protrudingFireworkMiddle_6PcRight.setAttribute("class", "hidden")
    $protrudingFireworkBottom_5PcRight.setAttribute("class", "hidden")    
}

var axeBowSwordProtrudingFlyingFireworks_9PcRight = () => {
    $topFirework_1PcRight.setAttribute("class", "visible")
    $middleFirework_0PcRight.setAttribute("class", "visible")    
    $topFirework_0PcRight.setAttribute("class", "hidden")    
    $protrudingFireworkBottom_6PcRight.setAttribute("class", "hidden")    
}

var axeBowSwordProtrudingFlyingFireworks_10PcRight = () => {
    $topFirework_2PcRight.setAttribute("class", "visible")
    $middleFirework_1PcRight.setAttribute("class", "visible")
    $bottomFirework_0PcRight.setAttribute("class", "visible")
    $topFirework_1PcRight.setAttribute("class", "hidden")
    $middleFirework_0PcRight.setAttribute("class", "hidden")            
}

var axeBowSwordProtrudingFlyingFireworks_11PcRight = () => {
    $topFirework_3PcRight.setAttribute("class", "visible")    
    $middleFirework_2PcRight.setAttribute("class", "visible")    
    $bottomFirework_1PcRight.setAttribute("class", "visible")
    $topFirework_2PcRight.setAttribute("class", "hidden")
    $middleFirework_1PcRight.setAttribute("class", "hidden")
    $bottomFirework_0PcRight.setAttribute("class", "hidden")        
}

var axeBowSwordProtrudingFlyingFireworks_12PcRight = () => {
    $topFirework_4PcRight.setAttribute("class", "visible")    
    $middleFirework_3PcRight.setAttribute("class", "visible")
    $middleFirework_3Z_1PcRight.setAttribute("class", "visible")    
    $bottomFirework_2PcRight.setAttribute("class", "visible")
    $topFirework_3PcRight.setAttribute("class", "hidden")    
    $middleFirework_2PcRight.setAttribute("class", "hidden")    
    $bottomFirework_1PcRight.setAttribute("class", "hidden")            
}

var axeBowSwordProtrudingFlyingFireworks_13PcRight = () => {
    $bottomFirework_3Z_1PcRight.setAttribute("class", "visible")
    $middleFirework_4Z_2PcRight.setAttribute("class", "visible")
    $topFirework_5PcRight.setAttribute("class", "visible")    
    $middleFirework_4PcRight.setAttribute("class", "visible")    
    $bottomFirework_3PcRight.setAttribute("class", "visible")
    $topFirework_4PcRight.setAttribute("class", "hidden")    
    $middleFirework_3PcRight.setAttribute("class", "hidden")
    $middleFirework_3Z_1PcRight.setAttribute("class", "hidden")    
    $bottomFirework_2PcRight.setAttribute("class", "hidden")                
}

var axeBowSwordProtrudingFlyingFireworks_14PcRight = () => {
    $middleFirework_5Z_1PcRight.setAttribute("class", "visible")    
    $bottomFirework_4Z_2PcRight.setAttribute("class", "visible")
    $topFirework_6PcRight.setAttribute("class", "visible")    
    $middleFirework_5PcRight.setAttribute("class", "visible")    
    $bottomFirework_4PcRight.setAttribute("class", "visible")
    $bottomFirework_3Z_1PcRight.setAttribute("class", "hidden")
    $middleFirework_4Z_2PcRight.setAttribute("class", "hidden")
    $topFirework_5PcRight.setAttribute("class", "hidden")    
    $middleFirework_4PcRight.setAttribute("class", "hidden")    
    $bottomFirework_3PcRight.setAttribute("class", "hidden")                    
}

var axeBowSwordFireworkExplodesPcRight = () => {
    $axeBowSwordFireworkExplosionPcRight.setAttribute("class", "visible")
    $middleFirework_5Z_1PcRight.setAttribute("class", "hidden")    
    $bottomFirework_4Z_2PcRight.setAttribute("class", "hidden")
    $topFirework_6PcRight.setAttribute("class", "hidden")    
    $middleFirework_5PcRight.setAttribute("class", "hidden")    
    $bottomFirework_4PcRight.setAttribute("class", "hidden")                        
}

var axeBowSwordFireworkDisplays_0PcRight = () => {
    $axeBowSwordSmokePcFullMinus10Right.setAttribute("class", "visible")
    $axeBowSwordFireworkExplosionPcRight.setAttribute("class", "hidden")
}

var axeBowSwordFireworkDisplays_1PcRight = () => {
    $axeBowSwordSmokePcFullMinus9Right.setAttribute("class", "visible")        
    $axeBowSwordSmokePcFullMinus10Right.setAttribute("class", "hidden")    
}

var axeBowSwordFireworkDisplays_2PcRight = () => {
    $axeBowSwordSmokePcFullMinus8Right.setAttribute("class", "visible")        
    $axeBowSwordSmokePcFullMinus9Right.setAttribute("class", "hidden")    
}

var axeBowSwordFireworkDisplays_3PcRight = () => {
    $axeBowSwordSmokePcFullMinus7Right.setAttribute("class", "visible")        
    $axeBowSwordSmokePcFullMinus8Right.setAttribute("class", "hidden")    
}

var axeBowSwordFireworkDisplays_4PcRight = () => {
    $axeBowSwordSmokePcFullMinus6Right.setAttribute("class", "visible")        
    $axeBowSwordSmokePcFullMinus7Right.setAttribute("class", "hidden")    
}

var axeBowSwordFireworkDisplays_5PcRight = () => {
    $axeBowSwordSmokePcFullMinus5Right.setAttribute("class", "visible")        
    $axeBowSwordSmokePcFullMinus6Right.setAttribute("class", "hidden")    
}

var axeBowSwordFireworkDisplays_6PcRight = () => {
    $axeBowSwordSmokePcFullMinus4Right.setAttribute("class", "visible")        
    $axeBowSwordSmokePcFullMinus5Right.setAttribute("class", "hidden")    
}

var axeBowSwordFireworkDisplays_7PcRight = () => {
    $axeBowSwordSmokePcFullMinus3Right.setAttribute("class", "visible")        
    $axeBowSwordSmokePcFullMinus4Right.setAttribute("class", "hidden")    
}

var axeBowSwordFireworkDisplays_8PcRight = () => {
    $axeBowSwordSmokePcFullMinus2Right.setAttribute("class", "visible")        
    $axeBowSwordSmokePcFullMinus3Right.setAttribute("class", "hidden")    
}

var axeBowSwordFireworkDisplays_9PcRight = () => {
    $axeBowSwordSmokePcFullMinus1Right.setAttribute("class", "visible")        
    $axeBowSwordSmokePcFullMinus2Right.setAttribute("class", "hidden")    
}

var axeBowSwordFireworkDisplays_10PcRight = () => {
    $axeBowSwordSmokePcFullRight.setAttribute("class", "visible")        
    $axeBowSwordSmokePcFullMinus1Right.setAttribute("class", "hidden")    
}

var axeBowSwordFireworkDisplays_11PcRight = () => {
    $fireworkAxePcRight.setAttribute("class", "visible")
    $fireworkBowPcRight.setAttribute("class", "visible")
    $fireworkSwordPcRight.setAttribute("class", "visible")
}

var axeBowSwordFireworkDisplays_12PcRight = () => {
    $fireworkAxeShimmerPcFullRight.setAttribute("class", "visible")
    $fireworkBowShimmerPcFullRight.setAttribute("class", "visible")
    $fireworkSwordShimmerPcFullRight.setAttribute("class", "visible")
    $axeBowSwordSmokePcFullRight.setAttribute("class", "hidden")
}

var axeBowSwordFireworkDisplays_13PcRight = () => {
    $fireworkAxePcRight.setAttribute("class", "hidden")
    $fireworkBowPcRight.setAttribute("class", "hidden")
    $fireworkSwordPcRight.setAttribute("class", "hidden")
}

var axeBowSwordFireworkDisplays_14PcRight = () => {
    $fireworkAxeShimmerPcFullRight.setAttribute("class", "hidden")
    $fireworkBowShimmerPcFullRight.setAttribute("class", "hidden")
    $fireworkSwordShimmerPcFullRight.setAttribute("class", "hidden")
}

//npc greyWiz

var greyWizNpcDefendsLeft = () => {
    $greyWizArmNpcDefendLeft.setAttribute("class", "visible")
    $greyWizArmNpcDefaultLeft.setAttribute("class", "hidden")     
}

var greyWizNpcDefendsRight = () => {
    $greyWizArmNpcDefendRight.setAttribute("class", "visible")
    $greyWizArmNpcDefaultRight.setAttribute("class", "hidden")  
}

var greyWizNpcRestsArmLeft = () => {
    $greyWizArmNpcDefaultLeft.setAttribute("class", "visible")
    $greyWizArmNpcDefendLeft.setAttribute("class", "hidden")     
}

var greyWizNpcRestsArmRight = () => {
    $greyWizArmNpcDefaultRight.setAttribute("class", "visible")
    $greyWizArmNpcDefendRight.setAttribute("class", "hidden")     
}

var greyWizNpcStruckLeft = () => {
    $greyWizNpcWithoutArms.setAttribute("class", "hidden")
    $greyWizArmNpcDefaultLeft.setAttribute("class", "hidden")
    $greyWizArmNpcDefendRight.setAttribute("class", "hidden")    
    $greyWizNpcStruckLeft.setAttribute("class", "visible")
}

var greyWizNpcStruckRight = () => {
    $greyWizNpcWithoutArms.setAttribute("class", "hidden")
    $greyWizArmNpcDefendLeft.setAttribute("class", "hidden")
    $greyWizArmNpcDefaultRight.setAttribute("class", "hidden")
    $greyWizNpcStruckRight.setAttribute("class", "visible")
}

var greyWizNpcRegainsComposureLeft = () => {
    $greyWizNpcWithoutArms.setAttribute("class", "visible")
    $greyWizArmNpcDefaultLeft.setAttribute("class", "visible")
    $greyWizArmNpcDefaultRight.setAttribute("class", "visible")    
    $greyWizNpcStruckLeft.setAttribute("class", "hidden")
}

var greyWizNpcRegainsComposureRight = () => {
    $greyWizNpcWithoutArms.setAttribute("class", "visible")
    $greyWizArmNpcDefaultLeft.setAttribute("class", "visible")
    $greyWizArmNpcDefaultRight.setAttribute("class", "visible")
    $greyWizNpcStruckRight.setAttribute("class", "hidden")
}

var greyWizArmNpcRotationForAttack_0Left = () => {
    $greyWizNpcWithoutHands.setAttribute("class", "visible")
    $greyWizHandNpc15DegreesLeft.setAttribute("class", "visible")
    $greyWizHandNpcDefaultRight.setAttribute("class", "visible")
    $greyWizNpcWithoutArms.setAttribute("class", "hidden")
    $greyWizArmNpcDefaultLeft.setAttribute("class", "hidden")
    $greyWizArmNpcDefaultRight.setAttribute("class", "hidden")
}

var greyWizArmNpcRotationForAttack_1Left = () => {
    $greyWizHandNpc30DegreesLeft.setAttribute("class", "visible")    
    $greyWizHandNpc15DegreesLeft.setAttribute("class", "hidden")    
}

var greyWizArmNpcRotationForAttack_2Left = () => {
    $greyWizHandNpc45DegreesLeft.setAttribute("class", "visible")    
    $greyWizHandNpc30DegreesLeft.setAttribute("class", "hidden")    
}

var greyWizArmNpcRotationForAttack_0Right = () => {
    $greyWizNpcWithoutHands.setAttribute("class", "visible")
    $greyWizHandNpc345DegreesRight.setAttribute("class", "visible")
    $greyWizHandNpcDefaultLeft.setAttribute("class", "visible")
    $greyWizNpcWithoutArms.setAttribute("class", "hidden")
    $greyWizArmNpcDefaultRight.setAttribute("class", "hidden")
    $greyWizArmNpcDefaultLeft.setAttribute("class", "hidden")
}

var greyWizArmNpcRotationForAttack_1Right = () => {
    $greyWizHandNpc330DegreesRight.setAttribute("class", "visible")    
    $greyWizHandNpc345DegreesRight.setAttribute("class", "hidden")    
}

var greyWizArmNpcRotationForAttack_2Right = () => {
    $greyWizHandNpc315DegreesRight.setAttribute("class", "visible")    
    $greyWizHandNpc330DegreesRight.setAttribute("class", "hidden")    
}

var greyWizArmNpcRotationBackFromAttack_0Left = () => {        
    $greyWizHandNpc30DegreesLeft.setAttribute("class", "visible")
    $greyWizHandNpc45DegreesLeft.setAttribute("class", "hidden")    
}

var greyWizArmNpcRotationBackFromAttack_1Left = () => {
    $greyWizHandNpc15DegreesLeft.setAttribute("class", "visible")
    $greyWizHandNpc30DegreesLeft.setAttribute("class", "hidden")        
}

var greyWizArmNpcRotationBackFromAttack_2Left = () => {
    $greyWizNpcWithoutArms.setAttribute("class", "visible")
    $greyWizArmNpcDefaultLeft.setAttribute("class", "visible")
    $greyWizArmNpcDefaultRight.setAttribute("class", "visible")
    $greyWizNpcWithoutHands.setAttribute("class", "hidden")
    $greyWizHandNpc15DegreesLeft.setAttribute("class", "hidden")
    $greyWizHandNpcDefaultRight.setAttribute("class", "hidden")    
}

var greyWizArmNpcRotationBackFromAttack_0Right = () => {        
    $greyWizHandNpc330DegreesRight.setAttribute("class", "visible")
    $greyWizHandNpc315DegreesRight.setAttribute("class", "hidden")    
}

var greyWizArmNpcRotationBackFromAttack_1Right = () => {
    $greyWizHandNpc345DegreesRight.setAttribute("class", "visible")
    $greyWizHandNpc330DegreesRight.setAttribute("class", "hidden")        
}

var greyWizArmNpcRotationBackFromAttack_2Right = () => {
    $greyWizNpcWithoutArms.setAttribute("class", "visible")
    $greyWizArmNpcDefaultRight.setAttribute("class", "visible")
    $greyWizArmNpcDefaultLeft.setAttribute("class", "visible")
    $greyWizNpcWithoutHands.setAttribute("class", "hidden")
    $greyWizHandNpc345DegreesRight.setAttribute("class", "hidden")
    $greyWizHandNpcDefaultLeft.setAttribute("class", "hidden")    
}

// axe Scenario

var axeProtrudingFlyingFireworks_0NpcLeft = () => {
    $protrudingFireworkTop_0NpcLeft.setAttribute("class", "hidden")
}

var axeProtrudingFlyingFireworks_1NpcLeft = () => {
    $protrudingFireworkTop_1NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_0NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkTop_0NpcLeft.setAttribute("class", "hidden")
}

var axeProtrudingFlyingFireworks_2NpcLeft = () => {
    $protrudingFireworkTop_2NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_1NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkBottom_0NpcLeft.setAttribute("class", "visible")
    $protrudingFireworkTop_1NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_0NpcLeft.setAttribute("class", "hidden")
}

var axeProtrudingFlyingFireworks_3NpcLeft = () => {
    $protrudingFireworkTop_3NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_2NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkBottom_1NpcLeft.setAttribute("class", "visible")
    $protrudingFireworkTop_2NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_1NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkBottom_0NpcLeft.setAttribute("class", "hidden")    
}

var axeProtrudingFlyingFireworks_4NpcLeft = () => {
    $protrudingFireworkTop_4NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_3NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkBottom_2NpcLeft.setAttribute("class", "visible")
    $protrudingFireworkTop_3NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_2NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkBottom_1NpcLeft.setAttribute("class", "hidden")    
}

var axeProtrudingFlyingFireworks_5NpcLeft = () => {
    $protrudingFireworkTop_5NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_4NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkBottom_3NpcLeft.setAttribute("class", "visible")
    $protrudingFireworkTop_4NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_3NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkBottom_2NpcLeft.setAttribute("class", "hidden")    
}

var axeProtrudingFlyingFireworks_6NpcLeft = () => {
    $protrudingFireworkTop_6NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_5NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkBottom_4NpcLeft.setAttribute("class", "visible")
    $protrudingFireworkTop_5NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_4NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkBottom_3NpcLeft.setAttribute("class", "hidden")    
}

var axeProtrudingFlyingFireworks_7NpcLeft = () => {
    $protrudingFireworkTop_7NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_6NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkBottom_5NpcLeft.setAttribute("class", "visible")
    $protrudingFireworkTop_6NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_5NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkBottom_4NpcLeft.setAttribute("class", "hidden")    
}

var axeProtrudingFlyingFireworks_8NpcLeft = () => {
    $topFirework_0NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_7NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkBottom_6NpcLeft.setAttribute("class", "visible")
    $protrudingFireworkTop_7NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_6NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkBottom_5NpcLeft.setAttribute("class", "hidden")    
}

var axeProtrudingFlyingFireworks_9NpcLeft = () => {
    $topFirework_1NpcLeft.setAttribute("class", "hidden")
    $middleFirework_0NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkBottom_7NpcLeft.setAttribute("class", "visible")
    $topFirework_0NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_7NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkBottom_6NpcLeft.setAttribute("class", "hidden")    
}

var axeProtrudingFlyingFireworks_10NpcLeft = () => {
    $topFirework_2NpcLeft.setAttribute("class", "hidden")
    $middleFirework_1NpcLeft.setAttribute("class", "hidden")
    $bottomFirework_0NpcLeft.setAttribute("class", "visible")
    $topFirework_1NpcLeft.setAttribute("class", "hidden")
    $middleFirework_0NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkBottom_7NpcLeft.setAttribute("class", "hidden")        
}

var axeProtrudingFlyingFireworks_11NpcLeft = () => {
    $topFirework_3NpcLeft.setAttribute("class", "hidden")
    $topFirework_3Z_1NpcLeft.setAttribute("class", "hidden")
    $middleFirework_2NpcLeft.setAttribute("class", "hidden")
    $middleFirework_2Z_2NpcLeft.setAttribute("class", "hidden")
    $bottomFirework_1NpcLeft.setAttribute("class", "visible")
    $topFirework_2NpcLeft.setAttribute("class", "hidden")
    $middleFirework_1NpcLeft.setAttribute("class", "hidden")
    $bottomFirework_0NpcLeft.setAttribute("class", "hidden")        
}

var axeProtrudingFlyingFireworks_12NpcLeft = () => {
    $topFirework_4NpcLeft.setAttribute("class", "hidden")
    $topFirework_4Z_1NpcLeft.setAttribute("class", "hidden")
    $middleFirework_3NpcLeft.setAttribute("class", "hidden")
    $middleFirework_3Z_2NpcLeft.setAttribute("class", "hidden")
    $bottomFirework_2NpcLeft.setAttribute("class", "visible")
    $topFirework_3NpcLeft.setAttribute("class", "hidden")
    $topFirework_3Z_1NpcLeft.setAttribute("class", "hidden")
    $middleFirework_2NpcLeft.setAttribute("class", "hidden")
    $middleFirework_2Z_2NpcLeft.setAttribute("class", "hidden")
    $bottomFirework_1NpcLeft.setAttribute("class", "hidden")            
}

var axeProtrudingFlyingFireworks_13NpcLeft = () => {
    $topFirework_5NpcLeft.setAttribute("class", "hidden")
    $topFirework_5Z_1NpcLeft.setAttribute("class", "hidden")
    $middleFirework_4NpcLeft.setAttribute("class", "hidden")
    $middleFirework_4Z_2NpcLeft.setAttribute("class", "hidden")
    $bottomFirework_3NpcLeft.setAttribute("class", "visible")
    $topFirework_4NpcLeft.setAttribute("class", "hidden")
    $topFirework_4Z_1NpcLeft.setAttribute("class", "hidden")
    $middleFirework_3NpcLeft.setAttribute("class", "hidden")
    $middleFirework_3Z_2NpcLeft.setAttribute("class", "hidden")
    $bottomFirework_2NpcLeft.setAttribute("class", "hidden")                
}

var axeProtrudingFlyingFireworks_14NpcLeft = () => {
    $topFirework_6NpcLeft.setAttribute("class", "hidden")
    $topFirework_6Z_1NpcLeft.setAttribute("class", "hidden")
    $topFirework_6Z_3NpcLeft.setAttribute("class", "hidden")
    $middleFirework_5NpcLeft.setAttribute("class", "hidden")
    $middleFirework_5Z_2NpcLeft.setAttribute("class", "hidden")
    $middleFirework_5Z_4NpcLeft.setAttribute("class", "hidden")
    $bottomFirework_4NpcLeft.setAttribute("class", "visible")
    $topFirework_5NpcLeft.setAttribute("class", "hidden")
    $topFirework_5Z_1NpcLeft.setAttribute("class", "hidden")
    $middleFirework_4NpcLeft.setAttribute("class", "hidden")
    $middleFirework_4Z_2NpcLeft.setAttribute("class", "hidden")
    $bottomFirework_3NpcLeft.setAttribute("class", "hidden")                    
}

var axeFireworkExplodesNpcLeft = () => {
    $axeFireworkExplosionNpcLeft.setAttribute("class", "visible")
    $topFirework_6NpcLeft.setAttribute("class", "hidden")
    $topFirework_6Z_1NpcLeft.setAttribute("class", "hidden")
    $topFirework_6Z_3NpcLeft.setAttribute("class", "hidden")
    $middleFirework_5NpcLeft.setAttribute("class", "hidden")
    $middleFirework_5Z_2NpcLeft.setAttribute("class", "hidden")
    $middleFirework_5Z_4NpcLeft.setAttribute("class", "hidden")
    $bottomFirework_4NpcLeft.setAttribute("class", "hidden")                        
}

var axeFireworkDisplays_0NpcLeft = () => {
    $axeSmokeNpcFullMinus10Left.setAttribute("class", "visible")
    $axeFireworkExplosionNpcLeft.setAttribute("class", "hidden")
}

var axeFireworkDisplays_1NpcLeft = () => {
    $axeSmokeNpcFullMinus9Left.setAttribute("class", "visible")        
    $axeSmokeNpcFullMinus10Left.setAttribute("class", "hidden")    
}

var axeFireworkDisplays_2NpcLeft = () => {
    $axeSmokeNpcFullMinus8Left.setAttribute("class", "visible")        
    $axeSmokeNpcFullMinus9Left.setAttribute("class", "hidden")    
}

var axeFireworkDisplays_3NpcLeft = () => {
    $axeSmokeNpcFullMinus7Left.setAttribute("class", "visible")        
    $axeSmokeNpcFullMinus8Left.setAttribute("class", "hidden")    
}

var axeFireworkDisplays_4NpcLeft = () => {
    $axeSmokeNpcFullMinus6Left.setAttribute("class", "visible")        
    $axeSmokeNpcFullMinus7Left.setAttribute("class", "hidden")    
}

var axeFireworkDisplays_5NpcLeft = () => {
    $axeSmokeNpcFullMinus5Left.setAttribute("class", "visible")        
    $axeSmokeNpcFullMinus6Left.setAttribute("class", "hidden")    
}

var axeFireworkDisplays_6NpcLeft = () => {
    $axeSmokeNpcFullMinus4Left.setAttribute("class", "visible")        
    $axeSmokeNpcFullMinus5Left.setAttribute("class", "hidden")    
}

var axeFireworkDisplays_7NpcLeft = () => {
    $axeSmokeNpcFullMinus3Left.setAttribute("class", "visible")        
    $axeSmokeNpcFullMinus4Left.setAttribute("class", "hidden")    
}

var axeFireworkDisplays_8NpcLeft = () => {
    $axeSmokeNpcFullMinus2Left.setAttribute("class", "visible")        
    $axeSmokeNpcFullMinus3Left.setAttribute("class", "hidden")    
}

var axeFireworkDisplays_9NpcLeft = () => {
    $axeSmokeNpcFullMinus1Left.setAttribute("class", "visible")        
    $axeSmokeNpcFullMinus2Left.setAttribute("class", "hidden")    
}

var axeFireworkDisplays_10NpcLeft = () => {
    $axeSmokeNpcFullLeft.setAttribute("class", "visible")        
    $axeSmokeNpcFullMinus1Left.setAttribute("class", "hidden")    
}

var axeFireworkDisplays_11NpcLeft = () => {
    $fireworkAxeNpcLeft.setAttribute("class", "visible")
    $fireworkBowNpcLeft.setAttribute("class", "hidden")
    $fireworkSwordNpcLeft.setAttribute("class", "hidden")
}

var axeFireworkDisplays_12NpcLeft = () => {
    $fireworkAxeShimmerNpcFullLeft.setAttribute("class", "visible")
    $fireworkBowShimmerNpcFullLeft.setAttribute("class", "hidden")
    $fireworkSwordShimmerNpcFullLeft.setAttribute("class", "hidden")
    $axeSmokeNpcFullLeft.setAttribute("class", "hidden")
}

var axeFireworkDisplays_13NpcLeft = () => {
    $fireworkAxeNpcLeft.setAttribute("class", "hidden")
    $fireworkBowNpcLeft.setAttribute("class", "hidden")
    $fireworkSwordNpcLeft.setAttribute("class", "hidden")
}

var axeFireworkDisplays_14NpcLeft = () => {
    $fireworkAxeShimmerNpcFullLeft.setAttribute("class", "hidden")
    $fireworkBowShimmerNpcFullLeft.setAttribute("class", "hidden")
    $fireworkSwordShimmerNpcFullLeft.setAttribute("class", "hidden")
}

var axeProtrudingFlyingFireworks_0NpcRight = () => {
    $protrudingFireworkTop_0NpcRight.setAttribute("class", "hidden")
}

var axeProtrudingFlyingFireworks_1NpcRight = () => {
    $protrudingFireworkTop_1NpcRight.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_0NpcRight.setAttribute("class", "hidden")
    $protrudingFireworkTop_0NpcRight.setAttribute("class", "hidden")
}

var axeProtrudingFlyingFireworks_2NpcRight = () => {
    $protrudingFireworkTop_2NpcRight.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_1NpcRight.setAttribute("class", "hidden")
    $protrudingFireworkBottom_0NpcRight.setAttribute("class", "visible")
    $protrudingFireworkTop_1NpcRight.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_0NpcRight.setAttribute("class", "hidden")
}

var axeProtrudingFlyingFireworks_3NpcRight = () => {
    $protrudingFireworkTop_3NpcRight.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_2NpcRight.setAttribute("class", "hidden")
    $protrudingFireworkBottom_1NpcRight.setAttribute("class", "visible")
    $protrudingFireworkTop_2NpcRight.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_1NpcRight.setAttribute("class", "hidden")
    $protrudingFireworkBottom_0NpcRight.setAttribute("class", "hidden")    
}

var axeProtrudingFlyingFireworks_4NpcRight = () => {
    $protrudingFireworkTop_4NpcRight.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_3NpcRight.setAttribute("class", "hidden")
    $protrudingFireworkBottom_2NpcRight.setAttribute("class", "visible")
    $protrudingFireworkTop_3NpcRight.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_2NpcRight.setAttribute("class", "hidden")
    $protrudingFireworkBottom_1NpcRight.setAttribute("class", "hidden")    
}

var axeProtrudingFlyingFireworks_5NpcRight = () => {
    $protrudingFireworkTop_5NpcRight.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_4NpcRight.setAttribute("class", "hidden")
    $protrudingFireworkBottom_3NpcRight.setAttribute("class", "visible")
    $protrudingFireworkTop_4NpcRight.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_3NpcRight.setAttribute("class", "hidden")
    $protrudingFireworkBottom_2NpcRight.setAttribute("class", "hidden")    
}

var axeProtrudingFlyingFireworks_6NpcRight = () => {
    $protrudingFireworkTop_6NpcRight.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_5NpcRight.setAttribute("class", "hidden")
    $protrudingFireworkBottom_4NpcRight.setAttribute("class", "visible")
    $protrudingFireworkTop_5NpcRight.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_4NpcRight.setAttribute("class", "hidden")
    $protrudingFireworkBottom_3NpcRight.setAttribute("class", "hidden")    
}

var axeProtrudingFlyingFireworks_7NpcRight = () => {
    $protrudingFireworkTop_7NpcRight.setAttribute("class", "hidden")    
    $protrudingFireworkMiddle_6NpcRight.setAttribute("class", "hidden")
    $protrudingFireworkBottom_5NpcRight.setAttribute("class", "visible")
    $protrudingFireworkTop_6NpcRight.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_5NpcRight.setAttribute("class", "hidden")
    $protrudingFireworkBottom_4NpcRight.setAttribute("class", "hidden")    
}

var axeProtrudingFlyingFireworks_8NpcRight = () => {
    $topFirework_0NpcRight.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_7NpcRight.setAttribute("class", "hidden")    
    $protrudingFireworkBottom_6NpcRight.setAttribute("class", "visible")
    $protrudingFireworkTop_7NpcRight.setAttribute("class", "hidden")    
    $protrudingFireworkMiddle_6NpcRight.setAttribute("class", "hidden")
    $protrudingFireworkBottom_5NpcRight.setAttribute("class", "hidden")    
}

var axeProtrudingFlyingFireworks_9NpcRight = () => {
    $topFirework_1NpcRight.setAttribute("class", "hidden")
    $middleFirework_0NpcRight.setAttribute("class", "hidden")
    $protrudingFireworkBottom_7NpcRight.setAttribute("class", "visible")    
    $topFirework_0NpcRight.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_7NpcRight.setAttribute("class", "hidden")    
    $protrudingFireworkBottom_6NpcRight.setAttribute("class", "hidden")    
}

var axeProtrudingFlyingFireworks_10NpcRight = () => {
    $topFirework_2NpcRight.setAttribute("class", "hidden")
    $middleFirework_1NpcRight.setAttribute("class", "hidden")
    $bottomFirework_0NpcRight.setAttribute("class", "visible")
    $topFirework_1NpcRight.setAttribute("class", "hidden")
    $middleFirework_0NpcRight.setAttribute("class", "hidden")
    $protrudingFireworkBottom_7NpcRight.setAttribute("class", "hidden")            
}

var axeProtrudingFlyingFireworks_11NpcRight = () => {
    $topFirework_3NpcRight.setAttribute("class", "hidden")
    $topFirework_3Z_1NpcRight.setAttribute("class", "hidden")
    $middleFirework_2NpcRight.setAttribute("class", "hidden")
    $middleFirework_2Z_2NpcRight.setAttribute("class", "hidden")
    $bottomFirework_1NpcRight.setAttribute("class", "visible")
    $topFirework_2NpcRight.setAttribute("class", "hidden")
    $middleFirework_1NpcRight.setAttribute("class", "hidden")
    $bottomFirework_0NpcRight.setAttribute("class", "hidden")        
}

var axeProtrudingFlyingFireworks_12NpcRight = () => {
    $topFirework_4NpcRight.setAttribute("class", "hidden")
    $topFirework_4Z_1NpcRight.setAttribute("class", "hidden")
    $middleFirework_3NpcRight.setAttribute("class", "hidden")
    $middleFirework_3Z_2NpcRight.setAttribute("class", "hidden")
    $bottomFirework_2NpcRight.setAttribute("class", "visible")
    $topFirework_3NpcRight.setAttribute("class", "hidden")
    $topFirework_3Z_1NpcRight.setAttribute("class", "hidden")
    $middleFirework_2NpcRight.setAttribute("class", "hidden")
    $middleFirework_2Z_2NpcRight.setAttribute("class", "hidden")
    $bottomFirework_1NpcRight.setAttribute("class", "hidden")            
}

var axeProtrudingFlyingFireworks_13NpcRight = () => {
    $topFirework_5NpcRight.setAttribute("class", "hidden")
    $topFirework_5Z_1NpcRight.setAttribute("class", "hidden")
    $middleFirework_4NpcRight.setAttribute("class", "hidden")
    $middleFirework_4Z_2NpcRight.setAttribute("class", "hidden")
    $bottomFirework_3NpcRight.setAttribute("class", "visible")
    $topFirework_4NpcRight.setAttribute("class", "hidden")
    $topFirework_4Z_1NpcRight.setAttribute("class", "hidden")
    $middleFirework_3NpcRight.setAttribute("class", "hidden")
    $middleFirework_3Z_2NpcRight.setAttribute("class", "hidden")
    $bottomFirework_2NpcRight.setAttribute("class", "hidden")                
}

var axeProtrudingFlyingFireworks_14NpcRight = () => {
    $topFirework_6NpcRight.setAttribute("class", "hidden")
    $topFirework_6Z_1NpcRight.setAttribute("class", "hidden")
    $topFirework_6Z_3NpcRight.setAttribute("class", "hidden")
    $middleFirework_5NpcRight.setAttribute("class", "hidden")
    $middleFirework_5Z_2NpcRight.setAttribute("class", "hidden")
    $middleFirework_5Z_4NpcRight.setAttribute("class", "hidden")
    $bottomFirework_4NpcRight.setAttribute("class", "visible")
    $topFirework_5NpcRight.setAttribute("class", "hidden")
    $topFirework_5Z_1NpcRight.setAttribute("class", "hidden")
    $middleFirework_4NpcRight.setAttribute("class", "hidden")
    $middleFirework_4Z_2NpcRight.setAttribute("class", "hidden")
    $bottomFirework_3NpcRight.setAttribute("class", "hidden")                    
}

var axeFireworkExplodesNpcRight = () => {
    $axeFireworkExplosionNpcRight.setAttribute("class", "visible")
    $topFirework_6NpcRight.setAttribute("class", "hidden")
    $topFirework_6Z_1NpcRight.setAttribute("class", "hidden")
    $topFirework_6Z_3NpcRight.setAttribute("class", "hidden")
    $middleFirework_5NpcRight.setAttribute("class", "hidden")
    $middleFirework_5Z_2NpcRight.setAttribute("class", "hidden")
    $middleFirework_5Z_4NpcRight.setAttribute("class", "hidden")
    $bottomFirework_4NpcRight.setAttribute("class", "hidden")                        
}

var axeFireworkDisplays_0NpcRight = () => {
    $axeSmokeNpcFullMinus10Right.setAttribute("class", "visible")
    $axeFireworkExplosionNpcRight.setAttribute("class", "hidden")
}

var axeFireworkDisplays_1NpcRight = () => {
    $axeSmokeNpcFullMinus9Right.setAttribute("class", "visible")        
    $axeSmokeNpcFullMinus10Right.setAttribute("class", "hidden")    
}

var axeFireworkDisplays_2NpcRight = () => {
    $axeSmokeNpcFullMinus8Right.setAttribute("class", "visible")        
    $axeSmokeNpcFullMinus9Right.setAttribute("class", "hidden")    
}

var axeFireworkDisplays_3NpcRight = () => {
    $axeSmokeNpcFullMinus7Right.setAttribute("class", "visible")        
    $axeSmokeNpcFullMinus8Right.setAttribute("class", "hidden")    
}

var axeFireworkDisplays_4NpcRight = () => {
    $axeSmokeNpcFullMinus6Right.setAttribute("class", "visible")        
    $axeSmokeNpcFullMinus7Right.setAttribute("class", "hidden")    
}

var axeFireworkDisplays_5NpcRight = () => {
    $axeSmokeNpcFullMinus5Right.setAttribute("class", "visible")        
    $axeSmokeNpcFullMinus6Right.setAttribute("class", "hidden")    
}

var axeFireworkDisplays_6NpcRight = () => {
    $axeSmokeNpcFullMinus4Right.setAttribute("class", "visible")        
    $axeSmokeNpcFullMinus5Right.setAttribute("class", "hidden")    
}

var axeFireworkDisplays_7NpcRight = () => {
    $axeSmokeNpcFullMinus3Right.setAttribute("class", "visible")        
    $axeSmokeNpcFullMinus4Right.setAttribute("class", "hidden")    
}

var axeFireworkDisplays_8NpcRight = () => {
    $axeSmokeNpcFullMinus2Right.setAttribute("class", "visible")        
    $axeSmokeNpcFullMinus3Right.setAttribute("class", "hidden")    
}

var axeFireworkDisplays_9NpcRight = () => {
    $axeSmokeNpcFullMinus1Right.setAttribute("class", "visible")        
    $axeSmokeNpcFullMinus2Right.setAttribute("class", "hidden")    
}

var axeFireworkDisplays_10NpcRight = () => {
    $axeSmokeNpcFullRight.setAttribute("class", "visible")        
    $axeSmokeNpcFullMinus1Right.setAttribute("class", "hidden")    
}

var axeFireworkDisplays_11NpcRight = () => {
    $fireworkAxeNpcRight.setAttribute("class", "visible")
    $fireworkBowNpcRight.setAttribute("class", "hidden")
    $fireworkSwordNpcRight.setAttribute("class", "hidden")
}

var axeFireworkDisplays_12NpcRight = () => {
    $fireworkAxeShimmerNpcFullRight.setAttribute("class", "visible")
    $fireworkBowShimmerNpcFullRight.setAttribute("class", "hidden")
    $fireworkSwordShimmerNpcFullRight.setAttribute("class", "hidden")
    $axeSmokeNpcFullRight.setAttribute("class", "hidden")
}

var axeFireworkDisplays_13NpcRight = () => {
    $fireworkAxeNpcRight.setAttribute("class", "hidden")
    $fireworkBowNpcRight.setAttribute("class", "hidden")
    $fireworkSwordNpcRight.setAttribute("class", "hidden")
}

var axeFireworkDisplays_14NpcRight = () => {
    $fireworkAxeShimmerNpcFullRight.setAttribute("class", "hidden")
    $fireworkBowShimmerNpcFullRight.setAttribute("class", "hidden")
    $fireworkSwordShimmerNpcFullRight.setAttribute("class", "hidden")
}

// bow Scenario

var bowProtrudingFlyingFireworks_0NpcLeft = () => {
    $protrudingFireworkTop_0NpcLeft.setAttribute("class", "hidden")
}

var bowProtrudingFlyingFireworks_1NpcLeft = () => {
    $protrudingFireworkTop_1NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_0NpcLeft.setAttribute("class", "visible")
    $protrudingFireworkTop_0NpcLeft.setAttribute("class", "hidden")
}

var bowProtrudingFlyingFireworks_2NpcLeft = () => {
    $protrudingFireworkTop_2NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_1NpcLeft.setAttribute("class", "visible")
    $protrudingFireworkBottom_0NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkTop_1NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_0NpcLeft.setAttribute("class", "hidden")
}

var bowProtrudingFlyingFireworks_3NpcLeft = () => {
    $protrudingFireworkTop_3NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_2NpcLeft.setAttribute("class", "visible")
    $protrudingFireworkBottom_1NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkTop_2NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_1NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkBottom_0NpcLeft.setAttribute("class", "hidden")    
}

var bowProtrudingFlyingFireworks_4NpcLeft = () => {
    $protrudingFireworkTop_4NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_3NpcLeft.setAttribute("class", "visible")
    $protrudingFireworkBottom_2NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkTop_3NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_2NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkBottom_1NpcLeft.setAttribute("class", "hidden")    
}

var bowProtrudingFlyingFireworks_5NpcLeft = () => {
    $protrudingFireworkTop_5NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_4NpcLeft.setAttribute("class", "visible")
    $protrudingFireworkBottom_3NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkTop_4NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_3NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkBottom_2NpcLeft.setAttribute("class", "hidden")    
}

var bowProtrudingFlyingFireworks_6NpcLeft = () => {
    $protrudingFireworkTop_6NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_5NpcLeft.setAttribute("class", "visible")
    $protrudingFireworkBottom_4NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkTop_5NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_4NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkBottom_3NpcLeft.setAttribute("class", "hidden")    
}

var bowProtrudingFlyingFireworks_7NpcLeft = () => {
    $protrudingFireworkTop_7NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_6NpcLeft.setAttribute("class", "visible")
    $protrudingFireworkBottom_5NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkTop_6NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_5NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkBottom_4NpcLeft.setAttribute("class", "hidden")    
}

var bowProtrudingFlyingFireworks_8NpcLeft = () => {
    $topFirework_0NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_7NpcLeft.setAttribute("class", "visible")
    $protrudingFireworkBottom_6NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkTop_7NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_6NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkBottom_5NpcLeft.setAttribute("class", "hidden")    
}

var bowProtrudingFlyingFireworks_9NpcLeft = () => {
    $topFirework_1NpcLeft.setAttribute("class", "hidden")
    $middleFirework_0NpcLeft.setAttribute("class", "visible")
    $protrudingFireworkBottom_7NpcLeft.setAttribute("class", "hidden")
    $topFirework_0NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_7NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkBottom_6NpcLeft.setAttribute("class", "hidden")    
}

var bowProtrudingFlyingFireworks_10NpcLeft = () => {
    $topFirework_2NpcLeft.setAttribute("class", "hidden")
    $middleFirework_1NpcLeft.setAttribute("class", "visible")
    $bottomFirework_0NpcLeft.setAttribute("class", "hidden")
    $topFirework_1NpcLeft.setAttribute("class", "hidden")
    $middleFirework_0NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkBottom_7NpcLeft.setAttribute("class", "hidden")        
}

var bowProtrudingFlyingFireworks_11NpcLeft = () => {
    $topFirework_3NpcLeft.setAttribute("class", "hidden")
    $topFirework_3Z_1NpcLeft.setAttribute("class", "hidden")
    $middleFirework_2NpcLeft.setAttribute("class", "visible")
    $middleFirework_2Z_2NpcLeft.setAttribute("class", "visible")
    $bottomFirework_1NpcLeft.setAttribute("class", "hidden")
    $topFirework_2NpcLeft.setAttribute("class", "hidden")
    $middleFirework_1NpcLeft.setAttribute("class", "hidden")
    $bottomFirework_0NpcLeft.setAttribute("class", "hidden")        
}

var bowProtrudingFlyingFireworks_12NpcLeft = () => {
    $topFirework_4NpcLeft.setAttribute("class", "hidden")
    $topFirework_4Z_1NpcLeft.setAttribute("class", "hidden")
    $middleFirework_3NpcLeft.setAttribute("class", "visible")
    $middleFirework_3Z_2NpcLeft.setAttribute("class", "visible")
    $bottomFirework_2NpcLeft.setAttribute("class", "hidden")
    $topFirework_3NpcLeft.setAttribute("class", "hidden")
    $topFirework_3Z_1NpcLeft.setAttribute("class", "hidden")
    $middleFirework_2NpcLeft.setAttribute("class", "hidden")
    $middleFirework_2Z_2NpcLeft.setAttribute("class", "hidden")
    $bottomFirework_1NpcLeft.setAttribute("class", "hidden")            
}

var bowProtrudingFlyingFireworks_13NpcLeft = () => {
    $topFirework_5NpcLeft.setAttribute("class", "hidden")
    $topFirework_5Z_1NpcLeft.setAttribute("class", "hidden")
    $middleFirework_4NpcLeft.setAttribute("class", "visible")
    $middleFirework_4Z_2NpcLeft.setAttribute("class", "visible")
    $bottomFirework_3NpcLeft.setAttribute("class", "hidden")
    $topFirework_4NpcLeft.setAttribute("class", "hidden")
    $topFirework_4Z_1NpcLeft.setAttribute("class", "hidden")
    $middleFirework_3NpcLeft.setAttribute("class", "hidden")
    $middleFirework_3Z_2NpcLeft.setAttribute("class", "hidden")
    $bottomFirework_2NpcLeft.setAttribute("class", "hidden")                
}

var bowProtrudingFlyingFireworks_14NpcLeft = () => {
    $topFirework_6NpcLeft.setAttribute("class", "hidden")
    $topFirework_6Z_1NpcLeft.setAttribute("class", "hidden")
    $topFirework_6Z_3NpcLeft.setAttribute("class", "hidden")
    $middleFirework_5NpcLeft.setAttribute("class", "visible")
    $middleFirework_5Z_2NpcLeft.setAttribute("class", "visible")
    $middleFirework_5Z_4NpcLeft.setAttribute("class", "visible")
    $bottomFirework_4NpcLeft.setAttribute("class", "hidden")
    $topFirework_5NpcLeft.setAttribute("class", "hidden")
    $topFirework_5Z_1NpcLeft.setAttribute("class", "hidden")
    $middleFirework_4NpcLeft.setAttribute("class", "hidden")
    $middleFirework_4Z_2NpcLeft.setAttribute("class", "hidden")
    $bottomFirework_3NpcLeft.setAttribute("class", "hidden")                    
}

var bowFireworkExplodesNpcLeft = () => {
    $bowFireworkExplosionNpcLeft.setAttribute("class", "visible")
    $topFirework_6NpcLeft.setAttribute("class", "hidden")
    $topFirework_6Z_1NpcLeft.setAttribute("class", "hidden")
    $topFirework_6Z_3NpcLeft.setAttribute("class", "hidden")
    $middleFirework_5NpcLeft.setAttribute("class", "hidden")
    $middleFirework_5Z_2NpcLeft.setAttribute("class", "hidden")
    $middleFirework_5Z_4NpcLeft.setAttribute("class", "hidden")
    $bottomFirework_4NpcLeft.setAttribute("class", "hidden")                        
}

var bowFireworkDisplays_0NpcLeft = () => {
    $bowSmokeNpcFullMinus10Left.setAttribute("class", "visible")
    $bowFireworkExplosionNpcLeft.setAttribute("class", "hidden")
}

var bowFireworkDisplays_1NpcLeft = () => {
    $bowSmokeNpcFullMinus9Left.setAttribute("class", "visible")        
    $bowSmokeNpcFullMinus10Left.setAttribute("class", "hidden")    
}

var bowFireworkDisplays_2NpcLeft = () => {
    $bowSmokeNpcFullMinus8Left.setAttribute("class", "visible")        
    $bowSmokeNpcFullMinus9Left.setAttribute("class", "hidden")    
}

var bowFireworkDisplays_3NpcLeft = () => {
    $bowSmokeNpcFullMinus7Left.setAttribute("class", "visible")        
    $bowSmokeNpcFullMinus8Left.setAttribute("class", "hidden")    
}

var bowFireworkDisplays_4NpcLeft = () => {
    $bowSmokeNpcFullMinus6Left.setAttribute("class", "visible")        
    $bowSmokeNpcFullMinus7Left.setAttribute("class", "hidden")    
}

var bowFireworkDisplays_5NpcLeft = () => {
    $bowSmokeNpcFullMinus5Left.setAttribute("class", "visible")        
    $bowSmokeNpcFullMinus6Left.setAttribute("class", "hidden")    
}

var bowFireworkDisplays_6NpcLeft = () => {
    $bowSmokeNpcFullMinus4Left.setAttribute("class", "visible")        
    $bowSmokeNpcFullMinus5Left.setAttribute("class", "hidden")    
}

var bowFireworkDisplays_7NpcLeft = () => {
    $bowSmokeNpcFullMinus3Left.setAttribute("class", "visible")        
    $bowSmokeNpcFullMinus4Left.setAttribute("class", "hidden")    
}

var bowFireworkDisplays_8NpcLeft = () => {
    $bowSmokeNpcFullMinus2Left.setAttribute("class", "visible")        
    $bowSmokeNpcFullMinus3Left.setAttribute("class", "hidden")    
}

var bowFireworkDisplays_9NpcLeft = () => {
    $bowSmokeNpcFullMinus1Left.setAttribute("class", "visible")        
    $bowSmokeNpcFullMinus2Left.setAttribute("class", "hidden")    
}

var bowFireworkDisplays_10NpcLeft = () => {
    $bowSmokeNpcFullLeft.setAttribute("class", "visible")        
    $bowSmokeNpcFullMinus1Left.setAttribute("class", "hidden")    
}

var bowFireworkDisplays_11NpcLeft = () => {
    $fireworkAxeNpcLeft.setAttribute("class", "hidden")
    $fireworkBowNpcLeft.setAttribute("class", "visible")
    $fireworkSwordNpcLeft.setAttribute("class", "hidden")
}

var bowFireworkDisplays_12NpcLeft = () => {
    $fireworkAxeShimmerNpcFullLeft.setAttribute("class", "hidden")
    $fireworkBowShimmerNpcFullLeft.setAttribute("class", "visible")
    $fireworkSwordShimmerNpcFullLeft.setAttribute("class", "hidden")
    $bowSmokeNpcFullLeft.setAttribute("class", "hidden")
}

var bowFireworkDisplays_13NpcLeft = () => {
    $fireworkAxeNpcLeft.setAttribute("class", "hidden")
    $fireworkBowNpcLeft.setAttribute("class", "hidden")
    $fireworkSwordNpcLeft.setAttribute("class", "hidden")
}

var bowFireworkDisplays_14NpcLeft = () => {
    $fireworkAxeShimmerNpcFullLeft.setAttribute("class", "hidden")
    $fireworkBowShimmerNpcFullLeft.setAttribute("class", "hidden")
    $fireworkSwordShimmerNpcFullLeft.setAttribute("class", "hidden")
}

var bowProtrudingFlyingFireworks_0NpcRight = () => {
    $protrudingFireworkTop_0NpcRight.setAttribute("class", "hidden")
}

var bowProtrudingFlyingFireworks_1NpcRight = () => {
    $protrudingFireworkTop_1NpcRight.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_0NpcRight.setAttribute("class", "visible")
    $protrudingFireworkTop_0NpcRight.setAttribute("class", "hidden")
}

var bowProtrudingFlyingFireworks_2NpcRight = () => {
    $protrudingFireworkTop_2NpcRight.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_1NpcRight.setAttribute("class", "visible")
    $protrudingFireworkBottom_0NpcRight.setAttribute("class", "hidden")
    $protrudingFireworkTop_1NpcRight.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_0NpcRight.setAttribute("class", "hidden")
}

var bowProtrudingFlyingFireworks_3NpcRight = () => {
    $protrudingFireworkTop_3NpcRight.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_2NpcRight.setAttribute("class", "visible")
    $protrudingFireworkBottom_1NpcRight.setAttribute("class", "hidden")
    $protrudingFireworkTop_2NpcRight.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_1NpcRight.setAttribute("class", "hidden")
    $protrudingFireworkBottom_0NpcRight.setAttribute("class", "hidden")    
}

var bowProtrudingFlyingFireworks_4NpcRight = () => {
    $protrudingFireworkTop_4NpcRight.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_3NpcRight.setAttribute("class", "visible")
    $protrudingFireworkBottom_2NpcRight.setAttribute("class", "hidden")
    $protrudingFireworkTop_3NpcRight.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_2NpcRight.setAttribute("class", "hidden")
    $protrudingFireworkBottom_1NpcRight.setAttribute("class", "hidden")    
}

var bowProtrudingFlyingFireworks_5NpcRight = () => {
    $protrudingFireworkTop_5NpcRight.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_4NpcRight.setAttribute("class", "visible")
    $protrudingFireworkBottom_3NpcRight.setAttribute("class", "hidden")
    $protrudingFireworkTop_4NpcRight.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_3NpcRight.setAttribute("class", "hidden")
    $protrudingFireworkBottom_2NpcRight.setAttribute("class", "hidden")    
}

var bowProtrudingFlyingFireworks_6NpcRight = () => {
    $protrudingFireworkTop_6NpcRight.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_5NpcRight.setAttribute("class", "visible")
    $protrudingFireworkBottom_4NpcRight.setAttribute("class", "hidden")
    $protrudingFireworkTop_5NpcRight.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_4NpcRight.setAttribute("class", "hidden")
    $protrudingFireworkBottom_3NpcRight.setAttribute("class", "hidden")    
}

var bowProtrudingFlyingFireworks_7NpcRight = () => {
    $protrudingFireworkTop_7NpcRight.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_6NpcRight.setAttribute("class", "visible")
    $protrudingFireworkBottom_5NpcRight.setAttribute("class", "hidden")
    $protrudingFireworkTop_6NpcRight.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_5NpcRight.setAttribute("class", "hidden")
    $protrudingFireworkBottom_4NpcRight.setAttribute("class", "hidden")    
}

var bowProtrudingFlyingFireworks_8NpcRight = () => {
    $topFirework_0NpcRight.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_7NpcRight.setAttribute("class", "visible")
    $protrudingFireworkBottom_6NpcRight.setAttribute("class", "hidden")
    $protrudingFireworkTop_7NpcRight.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_6NpcRight.setAttribute("class", "hidden")
    $protrudingFireworkBottom_5NpcRight.setAttribute("class", "hidden")    
}

var bowProtrudingFlyingFireworks_9NpcRight = () => {
    $topFirework_1NpcRight.setAttribute("class", "hidden")
    $middleFirework_0NpcRight.setAttribute("class", "visible")
    $protrudingFireworkBottom_7NpcRight.setAttribute("class", "hidden")
    $topFirework_0NpcRight.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_7NpcRight.setAttribute("class", "hidden")
    $protrudingFireworkBottom_6NpcRight.setAttribute("class", "hidden")    
}

var bowProtrudingFlyingFireworks_10NpcRight = () => {
    $topFirework_2NpcRight.setAttribute("class", "hidden")
    $middleFirework_1NpcRight.setAttribute("class", "visible")
    $bottomFirework_0NpcRight.setAttribute("class", "hidden")
    $topFirework_1NpcRight.setAttribute("class", "hidden")
    $middleFirework_0NpcRight.setAttribute("class", "hidden")
    $protrudingFireworkBottom_7NpcRight.setAttribute("class", "hidden")        
}

var bowProtrudingFlyingFireworks_11NpcRight = () => {
    $topFirework_3NpcRight.setAttribute("class", "hidden")
    $topFirework_3Z_1NpcRight.setAttribute("class", "hidden")
    $middleFirework_2NpcRight.setAttribute("class", "visible")
    $middleFirework_2Z_2NpcRight.setAttribute("class", "visible")
    $bottomFirework_1NpcRight.setAttribute("class", "hidden")
    $topFirework_2NpcRight.setAttribute("class", "hidden")
    $middleFirework_1NpcRight.setAttribute("class", "hidden")
    $bottomFirework_0NpcRight.setAttribute("class", "hidden")        
}

var bowProtrudingFlyingFireworks_12NpcRight = () => {
    $topFirework_4NpcRight.setAttribute("class", "hidden")
    $topFirework_4Z_1NpcRight.setAttribute("class", "hidden")
    $middleFirework_3NpcRight.setAttribute("class", "visible")
    $middleFirework_3Z_2NpcRight.setAttribute("class", "visible")
    $bottomFirework_2NpcRight.setAttribute("class", "hidden")
    $topFirework_3NpcRight.setAttribute("class", "hidden")
    $topFirework_3Z_1NpcRight.setAttribute("class", "hidden")
    $middleFirework_2NpcRight.setAttribute("class", "hidden")
    $middleFirework_2Z_2NpcRight.setAttribute("class", "hidden")
    $bottomFirework_1NpcRight.setAttribute("class", "hidden")            
}

var bowProtrudingFlyingFireworks_13NpcRight = () => {
    $topFirework_5NpcRight.setAttribute("class", "hidden")
    $topFirework_5Z_1NpcRight.setAttribute("class", "hidden")
    $middleFirework_4NpcRight.setAttribute("class", "visible")
    $middleFirework_4Z_2NpcRight.setAttribute("class", "visible")
    $bottomFirework_3NpcRight.setAttribute("class", "hidden")
    $topFirework_4NpcRight.setAttribute("class", "hidden")
    $topFirework_4Z_1NpcRight.setAttribute("class", "hidden")
    $middleFirework_3NpcRight.setAttribute("class", "hidden")
    $middleFirework_3Z_2NpcRight.setAttribute("class", "hidden")
    $bottomFirework_2NpcRight.setAttribute("class", "hidden")                
}

var bowProtrudingFlyingFireworks_14NpcRight = () => {
    $topFirework_6NpcRight.setAttribute("class", "hidden")
    $topFirework_6Z_1NpcRight.setAttribute("class", "hidden")
    $topFirework_6Z_3NpcRight.setAttribute("class", "hidden")
    $middleFirework_5NpcRight.setAttribute("class", "visible")
    $middleFirework_5Z_2NpcRight.setAttribute("class", "visible")
    $middleFirework_5Z_4NpcRight.setAttribute("class", "visible")
    $bottomFirework_4NpcRight.setAttribute("class", "hidden")
    $topFirework_5NpcRight.setAttribute("class", "hidden")
    $topFirework_5Z_1NpcRight.setAttribute("class", "hidden")
    $middleFirework_4NpcRight.setAttribute("class", "hidden")
    $middleFirework_4Z_2NpcRight.setAttribute("class", "hidden")
    $bottomFirework_3NpcRight.setAttribute("class", "hidden")                    
}

var bowFireworkExplodesNpcRight = () => {
    $bowFireworkExplosionNpcRight.setAttribute("class", "visible")
    $topFirework_6NpcRight.setAttribute("class", "hidden")
    $topFirework_6Z_1NpcRight.setAttribute("class", "hidden")
    $topFirework_6Z_3NpcRight.setAttribute("class", "hidden")
    $middleFirework_5NpcRight.setAttribute("class", "hidden")
    $middleFirework_5Z_2NpcRight.setAttribute("class", "hidden")
    $middleFirework_5Z_4NpcRight.setAttribute("class", "hidden")
    $bottomFirework_4NpcRight.setAttribute("class", "hidden")                        
}

var bowFireworkDisplays_0NpcRight = () => {
    $bowSmokeNpcFullMinus10Right.setAttribute("class", "visible")
    $bowFireworkExplosionNpcRight.setAttribute("class", "hidden")
}

var bowFireworkDisplays_1NpcRight = () => {
    $bowSmokeNpcFullMinus9Right.setAttribute("class", "visible")        
    $bowSmokeNpcFullMinus10Right.setAttribute("class", "hidden")    
}

var bowFireworkDisplays_2NpcRight = () => {
    $bowSmokeNpcFullMinus8Right.setAttribute("class", "visible")        
    $bowSmokeNpcFullMinus9Right.setAttribute("class", "hidden")    
}

var bowFireworkDisplays_3NpcRight = () => {
    $bowSmokeNpcFullMinus7Right.setAttribute("class", "visible")        
    $bowSmokeNpcFullMinus8Right.setAttribute("class", "hidden")    
}

var bowFireworkDisplays_4NpcRight = () => {
    $bowSmokeNpcFullMinus6Right.setAttribute("class", "visible")        
    $bowSmokeNpcFullMinus7Right.setAttribute("class", "hidden")    
}

var bowFireworkDisplays_5NpcRight = () => {
    $bowSmokeNpcFullMinus5Right.setAttribute("class", "visible")        
    $bowSmokeNpcFullMinus6Right.setAttribute("class", "hidden")    
}

var bowFireworkDisplays_6NpcRight = () => {
    $bowSmokeNpcFullMinus4Right.setAttribute("class", "visible")        
    $bowSmokeNpcFullMinus5Right.setAttribute("class", "hidden")    
}

var bowFireworkDisplays_7NpcRight = () => {
    $bowSmokeNpcFullMinus3Right.setAttribute("class", "visible")        
    $bowSmokeNpcFullMinus4Right.setAttribute("class", "hidden")    
}

var bowFireworkDisplays_8NpcRight = () => {
    $bowSmokeNpcFullMinus2Right.setAttribute("class", "visible")        
    $bowSmokeNpcFullMinus3Right.setAttribute("class", "hidden")    
}

var bowFireworkDisplays_9NpcRight = () => {
    $bowSmokeNpcFullMinus1Right.setAttribute("class", "visible")        
    $bowSmokeNpcFullMinus2Right.setAttribute("class", "hidden")    
}

var bowFireworkDisplays_10NpcRight = () => {
    $bowSmokeNpcFullRight.setAttribute("class", "visible")        
    $bowSmokeNpcFullMinus1Right.setAttribute("class", "hidden")    
}

var bowFireworkDisplays_11NpcRight = () => {
    $fireworkAxeNpcRight.setAttribute("class", "hidden")
    $fireworkBowNpcRight.setAttribute("class", "visible")
    $fireworkSwordNpcRight.setAttribute("class", "hidden")
}

var bowFireworkDisplays_12NpcRight = () => {
    $fireworkAxeShimmerNpcFullRight.setAttribute("class", "hidden")
    $fireworkBowShimmerNpcFullRight.setAttribute("class", "visible")
    $fireworkSwordShimmerNpcFullRight.setAttribute("class", "hidden")
    $bowSmokeNpcFullRight.setAttribute("class", "hidden")
}

var bowFireworkDisplays_13NpcRight = () => {
    $fireworkAxeNpcRight.setAttribute("class", "hidden")
    $fireworkBowNpcRight.setAttribute("class", "hidden")
    $fireworkSwordNpcRight.setAttribute("class", "hidden")
}

var bowFireworkDisplays_14NpcRight = () => {
    $fireworkAxeShimmerNpcFullRight.setAttribute("class", "hidden")
    $fireworkBowShimmerNpcFullRight.setAttribute("class", "hidden")
    $fireworkSwordShimmerNpcFullRight.setAttribute("class", "hidden")
}

// sword Scenario

var swordProtrudingFlyingFireworks_0NpcLeft = () => {
    $protrudingFireworkTop_0NpcLeft.setAttribute("class", "visible")
}

var swordProtrudingFlyingFireworks_1NpcLeft = () => {
    $protrudingFireworkTop_1NpcLeft.setAttribute("class", "visible")
    $protrudingFireworkMiddle_0NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkTop_0NpcLeft.setAttribute("class", "hidden")
}

var swordProtrudingFlyingFireworks_2NpcLeft = () => {
    $protrudingFireworkTop_2NpcLeft.setAttribute("class", "visible")
    $protrudingFireworkMiddle_1NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkBottom_0NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkTop_1NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_0NpcLeft.setAttribute("class", "hidden")
}

var swordProtrudingFlyingFireworks_3NpcLeft = () => {
    $protrudingFireworkTop_3NpcLeft.setAttribute("class", "visible")
    $protrudingFireworkMiddle_2NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkBottom_1NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkTop_2NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_1NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkBottom_0NpcLeft.setAttribute("class", "hidden")    
}

var swordProtrudingFlyingFireworks_4NpcLeft = () => {
    $protrudingFireworkTop_4NpcLeft.setAttribute("class", "visible")
    $protrudingFireworkMiddle_3NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkBottom_2NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkTop_3NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_2NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkBottom_1NpcLeft.setAttribute("class", "hidden")    
}

var swordProtrudingFlyingFireworks_5NpcLeft = () => {
    $protrudingFireworkTop_5NpcLeft.setAttribute("class", "visible")
    $protrudingFireworkMiddle_4NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkBottom_3NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkTop_4NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_3NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkBottom_2NpcLeft.setAttribute("class", "hidden")    
}

var swordProtrudingFlyingFireworks_6NpcLeft = () => {
    $protrudingFireworkTop_6NpcLeft.setAttribute("class", "visible")
    $protrudingFireworkMiddle_5NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkBottom_4NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkTop_5NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_4NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkBottom_3NpcLeft.setAttribute("class", "hidden")    
}

var swordProtrudingFlyingFireworks_7NpcLeft = () => {
    $protrudingFireworkTop_7NpcLeft.setAttribute("class", "visible")
    $protrudingFireworkMiddle_6NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkBottom_5NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkTop_6NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_5NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkBottom_4NpcLeft.setAttribute("class", "hidden")    
}

var swordProtrudingFlyingFireworks_8NpcLeft = () => {
    $topFirework_0NpcLeft.setAttribute("class", "visible")
    $protrudingFireworkMiddle_7NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkBottom_6NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkTop_7NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_6NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkBottom_5NpcLeft.setAttribute("class", "hidden")    
}

var swordProtrudingFlyingFireworks_9NpcLeft = () => {
    $topFirework_1NpcLeft.setAttribute("class", "visible")
    $middleFirework_0NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkBottom_7NpcLeft.setAttribute("class", "hidden")
    $topFirework_0NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_7NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkBottom_6NpcLeft.setAttribute("class", "hidden")    
}

var swordProtrudingFlyingFireworks_10NpcLeft = () => {
    $topFirework_2NpcLeft.setAttribute("class", "visible")
    $middleFirework_1NpcLeft.setAttribute("class", "hidden")
    $bottomFirework_0NpcLeft.setAttribute("class", "hidden")
    $topFirework_1NpcLeft.setAttribute("class", "hidden")
    $middleFirework_0NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkBottom_7NpcLeft.setAttribute("class", "hidden")        
}

var swordProtrudingFlyingFireworks_11NpcLeft = () => {
    $topFirework_3NpcLeft.setAttribute("class", "visible")
    $topFirework_3Z_1NpcLeft.setAttribute("class", "visible")
    $middleFirework_2NpcLeft.setAttribute("class", "hidden")
    $middleFirework_2Z_2NpcLeft.setAttribute("class", "hidden")
    $bottomFirework_1NpcLeft.setAttribute("class", "hidden")
    $topFirework_2NpcLeft.setAttribute("class", "hidden")
    $middleFirework_1NpcLeft.setAttribute("class", "hidden")
    $bottomFirework_0NpcLeft.setAttribute("class", "hidden")        
}

var swordProtrudingFlyingFireworks_12NpcLeft = () => {
    $topFirework_4NpcLeft.setAttribute("class", "visible")
    $topFirework_4Z_1NpcLeft.setAttribute("class", "visible")
    $middleFirework_3NpcLeft.setAttribute("class", "hidden")
    $middleFirework_3Z_2NpcLeft.setAttribute("class", "hidden")
    $bottomFirework_2NpcLeft.setAttribute("class", "hidden")
    $topFirework_3NpcLeft.setAttribute("class", "hidden")
    $topFirework_3Z_1NpcLeft.setAttribute("class", "hidden")
    $middleFirework_2NpcLeft.setAttribute("class", "hidden")
    $middleFirework_2Z_2NpcLeft.setAttribute("class", "hidden")
    $bottomFirework_1NpcLeft.setAttribute("class", "hidden")            
}

var swordProtrudingFlyingFireworks_13NpcLeft = () => {
    $topFirework_5NpcLeft.setAttribute("class", "visible")
    $topFirework_5Z_1NpcLeft.setAttribute("class", "visible")
    $middleFirework_4NpcLeft.setAttribute("class", "hidden")
    $middleFirework_4Z_2NpcLeft.setAttribute("class", "hidden")
    $bottomFirework_3NpcLeft.setAttribute("class", "hidden")
    $topFirework_4NpcLeft.setAttribute("class", "hidden")
    $topFirework_4Z_1NpcLeft.setAttribute("class", "hidden")
    $middleFirework_3NpcLeft.setAttribute("class", "hidden")
    $middleFirework_3Z_2NpcLeft.setAttribute("class", "hidden")
    $bottomFirework_2NpcLeft.setAttribute("class", "hidden")                
}

var swordProtrudingFlyingFireworks_14NpcLeft = () => {
    $topFirework_6NpcLeft.setAttribute("class", "visible")
    $topFirework_6Z_1NpcLeft.setAttribute("class", "visible")
    $topFirework_6Z_3NpcLeft.setAttribute("class", "visible")
    $middleFirework_5NpcLeft.setAttribute("class", "hidden")
    $middleFirework_5Z_2NpcLeft.setAttribute("class", "hidden")
    $middleFirework_5Z_4NpcLeft.setAttribute("class", "hidden")
    $bottomFirework_4NpcLeft.setAttribute("class", "hidden")
    $topFirework_5NpcLeft.setAttribute("class", "hidden")
    $topFirework_5Z_1NpcLeft.setAttribute("class", "hidden")
    $middleFirework_4NpcLeft.setAttribute("class", "hidden")
    $middleFirework_4Z_2NpcLeft.setAttribute("class", "hidden")
    $bottomFirework_3NpcLeft.setAttribute("class", "hidden")                    
}

var swordFireworkExplodesNpcLeft = () => {
    $swordFireworkExplosionNpcLeft.setAttribute("class", "visible")
    $topFirework_6NpcLeft.setAttribute("class", "hidden")
    $topFirework_6Z_1NpcLeft.setAttribute("class", "hidden")
    $topFirework_6Z_3NpcLeft.setAttribute("class", "hidden")
    $middleFirework_5NpcLeft.setAttribute("class", "hidden")
    $middleFirework_5Z_2NpcLeft.setAttribute("class", "hidden")
    $middleFirework_5Z_4NpcLeft.setAttribute("class", "hidden")
    $bottomFirework_4NpcLeft.setAttribute("class", "hidden")                        
}

var swordFireworkDisplays_0NpcLeft = () => {
    $swordSmokeNpcFullMinus10Left.setAttribute("class", "visible")
    $swordFireworkExplosionNpcLeft.setAttribute("class", "hidden")
}

var swordFireworkDisplays_1NpcLeft = () => {
    $swordSmokeNpcFullMinus9Left.setAttribute("class", "visible")        
    $swordSmokeNpcFullMinus10Left.setAttribute("class", "hidden")    
}

var swordFireworkDisplays_2NpcLeft = () => {
    $swordSmokeNpcFullMinus8Left.setAttribute("class", "visible")        
    $swordSmokeNpcFullMinus9Left.setAttribute("class", "hidden")    
}

var swordFireworkDisplays_3NpcLeft = () => {
    $swordSmokeNpcFullMinus7Left.setAttribute("class", "visible")        
    $swordSmokeNpcFullMinus8Left.setAttribute("class", "hidden")    
}

var swordFireworkDisplays_4NpcLeft = () => {
    $swordSmokeNpcFullMinus6Left.setAttribute("class", "visible")        
    $swordSmokeNpcFullMinus7Left.setAttribute("class", "hidden")    
}

var swordFireworkDisplays_5NpcLeft = () => {
    $swordSmokeNpcFullMinus5Left.setAttribute("class", "visible")        
    $swordSmokeNpcFullMinus6Left.setAttribute("class", "hidden")    
}

var swordFireworkDisplays_6NpcLeft = () => {
    $swordSmokeNpcFullMinus4Left.setAttribute("class", "visible")        
    $swordSmokeNpcFullMinus5Left.setAttribute("class", "hidden")    
}

var swordFireworkDisplays_7NpcLeft = () => {
    $swordSmokeNpcFullMinus3Left.setAttribute("class", "visible")        
    $swordSmokeNpcFullMinus4Left.setAttribute("class", "hidden")    
}

var swordFireworkDisplays_8NpcLeft = () => {
    $swordSmokeNpcFullMinus2Left.setAttribute("class", "visible")        
    $swordSmokeNpcFullMinus3Left.setAttribute("class", "hidden")    
}

var swordFireworkDisplays_9NpcLeft = () => {
    $swordSmokeNpcFullMinus1Left.setAttribute("class", "visible")        
    $swordSmokeNpcFullMinus2Left.setAttribute("class", "hidden")    
}

var swordFireworkDisplays_10NpcLeft = () => {
    $swordSmokeNpcFullLeft.setAttribute("class", "visible")        
    $swordSmokeNpcFullMinus1Left.setAttribute("class", "hidden")    
}

var swordFireworkDisplays_11NpcLeft = () => {
    $fireworkAxeNpcLeft.setAttribute("class", "hidden")
    $fireworkBowNpcLeft.setAttribute("class", "hidden")
    $fireworkSwordNpcLeft.setAttribute("class", "visible")
}

var swordFireworkDisplays_12NpcLeft = () => {
    $fireworkAxeShimmerNpcFullLeft.setAttribute("class", "hidden")
    $fireworkBowShimmerNpcFullLeft.setAttribute("class", "hidden")
    $fireworkSwordShimmerNpcFullLeft.setAttribute("class", "visible")
    $swordSmokeNpcFullLeft.setAttribute("class", "hidden")
}

var swordFireworkDisplays_13NpcLeft = () => {
    $fireworkAxeNpcLeft.setAttribute("class", "hidden")
    $fireworkBowNpcLeft.setAttribute("class", "hidden")
    $fireworkSwordNpcLeft.setAttribute("class", "hidden")
}

var swordFireworkDisplays_14NpcLeft = () => {
    $fireworkAxeShimmerNpcFullLeft.setAttribute("class", "hidden")
    $fireworkBowShimmerNpcFullLeft.setAttribute("class", "hidden")
    $fireworkSwordShimmerNpcFullLeft.setAttribute("class", "hidden")
}

var swordProtrudingFlyingFireworks_0NpcRight = () => {
    $protrudingFireworkTop_0NpcRight.setAttribute("class", "visible")
}

var swordProtrudingFlyingFireworks_1NpcRight = () => {
    $protrudingFireworkTop_1NpcRight.setAttribute("class", "visible")
    $protrudingFireworkMiddle_0NpcRight.setAttribute("class", "hidden")
    $protrudingFireworkTop_0NpcRight.setAttribute("class", "hidden")
}

var swordProtrudingFlyingFireworks_2NpcRight = () => {
    $protrudingFireworkTop_2NpcRight.setAttribute("class", "visible")
    $protrudingFireworkMiddle_1NpcRight.setAttribute("class", "hidden")
    $protrudingFireworkBottom_0NpcRight.setAttribute("class", "hidden")
    $protrudingFireworkTop_1NpcRight.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_0NpcRight.setAttribute("class", "hidden")
}

var swordProtrudingFlyingFireworks_3NpcRight = () => {
    $protrudingFireworkTop_3NpcRight.setAttribute("class", "visible")
    $protrudingFireworkMiddle_2NpcRight.setAttribute("class", "hidden")
    $protrudingFireworkBottom_1NpcRight.setAttribute("class", "hidden")
    $protrudingFireworkTop_2NpcRight.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_1NpcRight.setAttribute("class", "hidden")
    $protrudingFireworkBottom_0NpcRight.setAttribute("class", "hidden")    
}

var swordProtrudingFlyingFireworks_4NpcRight = () => {
    $protrudingFireworkTop_4NpcRight.setAttribute("class", "visible")
    $protrudingFireworkMiddle_3NpcRight.setAttribute("class", "hidden")
    $protrudingFireworkBottom_2NpcRight.setAttribute("class", "hidden")
    $protrudingFireworkTop_3NpcRight.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_2NpcRight.setAttribute("class", "hidden")
    $protrudingFireworkBottom_1NpcRight.setAttribute("class", "hidden")    
}

var swordProtrudingFlyingFireworks_5NpcRight = () => {
    $protrudingFireworkTop_5NpcRight.setAttribute("class", "visible")
    $protrudingFireworkMiddle_4NpcRight.setAttribute("class", "hidden")
    $protrudingFireworkBottom_3NpcRight.setAttribute("class", "hidden")
    $protrudingFireworkTop_4NpcRight.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_3NpcRight.setAttribute("class", "hidden")
    $protrudingFireworkBottom_2NpcRight.setAttribute("class", "hidden")    
}

var swordProtrudingFlyingFireworks_6NpcRight = () => {
    $protrudingFireworkTop_6NpcRight.setAttribute("class", "visible")
    $protrudingFireworkMiddle_5NpcRight.setAttribute("class", "hidden")
    $protrudingFireworkBottom_4NpcRight.setAttribute("class", "hidden")
    $protrudingFireworkTop_5NpcRight.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_4NpcRight.setAttribute("class", "hidden")
    $protrudingFireworkBottom_3NpcRight.setAttribute("class", "hidden")    
}

var swordProtrudingFlyingFireworks_7NpcRight = () => {
    $protrudingFireworkTop_7NpcRight.setAttribute("class", "visible")
    $protrudingFireworkMiddle_6NpcRight.setAttribute("class", "hidden")
    $protrudingFireworkBottom_5NpcRight.setAttribute("class", "hidden")
    $protrudingFireworkTop_6NpcRight.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_5NpcRight.setAttribute("class", "hidden")
    $protrudingFireworkBottom_4NpcRight.setAttribute("class", "hidden")    
}

var swordProtrudingFlyingFireworks_8NpcRight = () => {
    $topFirework_0NpcRight.setAttribute("class", "visible")
    $protrudingFireworkMiddle_7NpcRight.setAttribute("class", "hidden")
    $protrudingFireworkBottom_6NpcRight.setAttribute("class", "hidden")
    $protrudingFireworkTop_7NpcRight.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_6NpcRight.setAttribute("class", "hidden")
    $protrudingFireworkBottom_5NpcRight.setAttribute("class", "hidden")    
}

var swordProtrudingFlyingFireworks_9NpcRight = () => {
    $topFirework_1NpcRight.setAttribute("class", "visible")
    $middleFirework_0NpcRight.setAttribute("class", "hidden")
    $protrudingFireworkBottom_7NpcRight.setAttribute("class", "hidden")
    $topFirework_0NpcRight.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_7NpcRight.setAttribute("class", "hidden")
    $protrudingFireworkBottom_6NpcRight.setAttribute("class", "hidden")    
}

var swordProtrudingFlyingFireworks_10NpcRight = () => {
    $topFirework_2NpcRight.setAttribute("class", "visible")
    $middleFirework_1NpcRight.setAttribute("class", "hidden")
    $bottomFirework_0NpcRight.setAttribute("class", "hidden")
    $topFirework_1NpcRight.setAttribute("class", "hidden")
    $middleFirework_0NpcRight.setAttribute("class", "hidden")
    $protrudingFireworkBottom_7NpcRight.setAttribute("class", "hidden")        
}

var swordProtrudingFlyingFireworks_11NpcRight = () => {
    $topFirework_3NpcRight.setAttribute("class", "visible")
    $topFirework_3Z_1NpcRight.setAttribute("class", "visible")
    $middleFirework_2NpcRight.setAttribute("class", "hidden")
    $middleFirework_2Z_2NpcRight.setAttribute("class", "hidden")
    $bottomFirework_1NpcRight.setAttribute("class", "hidden")
    $topFirework_2NpcRight.setAttribute("class", "hidden")
    $middleFirework_1NpcRight.setAttribute("class", "hidden")
    $bottomFirework_0NpcRight.setAttribute("class", "hidden")        
}

var swordProtrudingFlyingFireworks_12NpcRight = () => {
    $topFirework_4NpcRight.setAttribute("class", "visible")
    $topFirework_4Z_1NpcRight.setAttribute("class", "visible")
    $middleFirework_3NpcRight.setAttribute("class", "hidden")
    $middleFirework_3Z_2NpcRight.setAttribute("class", "hidden")
    $bottomFirework_2NpcRight.setAttribute("class", "hidden")
    $topFirework_3NpcRight.setAttribute("class", "hidden")
    $topFirework_3Z_1NpcRight.setAttribute("class", "hidden")
    $middleFirework_2NpcRight.setAttribute("class", "hidden")
    $middleFirework_2Z_2NpcRight.setAttribute("class", "hidden")
    $bottomFirework_1NpcRight.setAttribute("class", "hidden")            
}

var swordProtrudingFlyingFireworks_13NpcRight = () => {
    $topFirework_5NpcRight.setAttribute("class", "visible")
    $topFirework_5Z_1NpcRight.setAttribute("class", "visible")
    $middleFirework_4NpcRight.setAttribute("class", "hidden")
    $middleFirework_4Z_2NpcRight.setAttribute("class", "hidden")
    $bottomFirework_3NpcRight.setAttribute("class", "hidden")
    $topFirework_4NpcRight.setAttribute("class", "hidden")
    $topFirework_4Z_1NpcRight.setAttribute("class", "hidden")
    $middleFirework_3NpcRight.setAttribute("class", "hidden")
    $middleFirework_3Z_2NpcRight.setAttribute("class", "hidden")
    $bottomFirework_2NpcRight.setAttribute("class", "hidden")                
}

var swordProtrudingFlyingFireworks_14NpcRight = () => {
    $topFirework_6NpcRight.setAttribute("class", "visible")
    $topFirework_6Z_1NpcRight.setAttribute("class", "visible")
    $topFirework_6Z_3NpcRight.setAttribute("class", "visible")
    $middleFirework_5NpcRight.setAttribute("class", "hidden")
    $middleFirework_5Z_2NpcRight.setAttribute("class", "hidden")
    $middleFirework_5Z_4NpcRight.setAttribute("class", "hidden")
    $bottomFirework_4NpcRight.setAttribute("class", "hidden")
    $topFirework_5NpcRight.setAttribute("class", "hidden")
    $topFirework_5Z_1NpcRight.setAttribute("class", "hidden")
    $middleFirework_4NpcRight.setAttribute("class", "hidden")
    $middleFirework_4Z_2NpcRight.setAttribute("class", "hidden")
    $bottomFirework_3NpcRight.setAttribute("class", "hidden")                    
}

var swordFireworkExplodesNpcRight = () => {
    $swordFireworkExplosionNpcRight.setAttribute("class", "visible")
    $topFirework_6NpcRight.setAttribute("class", "hidden")
    $topFirework_6Z_1NpcRight.setAttribute("class", "hidden")
    $topFirework_6Z_3NpcRight.setAttribute("class", "hidden")
    $middleFirework_5NpcRight.setAttribute("class", "hidden")
    $middleFirework_5Z_2NpcRight.setAttribute("class", "hidden")
    $middleFirework_5Z_4NpcRight.setAttribute("class", "hidden")
    $bottomFirework_4NpcRight.setAttribute("class", "hidden")                        
}

var swordFireworkDisplays_0NpcRight = () => {
    $swordSmokeNpcFullMinus10Right.setAttribute("class", "visible")
    $swordFireworkExplosionNpcRight.setAttribute("class", "hidden")
}

var swordFireworkDisplays_1NpcRight = () => {
    $swordSmokeNpcFullMinus9Right.setAttribute("class", "visible")        
    $swordSmokeNpcFullMinus10Right.setAttribute("class", "hidden")    
}

var swordFireworkDisplays_2NpcRight = () => {
    $swordSmokeNpcFullMinus8Right.setAttribute("class", "visible")        
    $swordSmokeNpcFullMinus9Right.setAttribute("class", "hidden")    
}

var swordFireworkDisplays_3NpcRight = () => {
    $swordSmokeNpcFullMinus7Right.setAttribute("class", "visible")        
    $swordSmokeNpcFullMinus8Right.setAttribute("class", "hidden")    
}

var swordFireworkDisplays_4NpcRight = () => {
    $swordSmokeNpcFullMinus6Right.setAttribute("class", "visible")        
    $swordSmokeNpcFullMinus7Right.setAttribute("class", "hidden")    
}

var swordFireworkDisplays_5NpcRight = () => {
    $swordSmokeNpcFullMinus5Right.setAttribute("class", "visible")        
    $swordSmokeNpcFullMinus6Right.setAttribute("class", "hidden")    
}

var swordFireworkDisplays_6NpcRight = () => {
    $swordSmokeNpcFullMinus4Right.setAttribute("class", "visible")        
    $swordSmokeNpcFullMinus5Right.setAttribute("class", "hidden")    
}

var swordFireworkDisplays_7NpcRight = () => {
    $swordSmokeNpcFullMinus3Right.setAttribute("class", "visible")        
    $swordSmokeNpcFullMinus4Right.setAttribute("class", "hidden")    
}

var swordFireworkDisplays_8NpcRight = () => {
    $swordSmokeNpcFullMinus2Right.setAttribute("class", "visible")        
    $swordSmokeNpcFullMinus3Right.setAttribute("class", "hidden")    
}

var swordFireworkDisplays_9NpcRight = () => {
    $swordSmokeNpcFullMinus1Right.setAttribute("class", "visible")        
    $swordSmokeNpcFullMinus2Right.setAttribute("class", "hidden")    
}

var swordFireworkDisplays_10NpcRight = () => {
    $swordSmokeNpcFullRight.setAttribute("class", "visible")        
    $swordSmokeNpcFullMinus1Right.setAttribute("class", "hidden")    
}

var swordFireworkDisplays_11NpcRight = () => {
    $fireworkAxeNpcRight.setAttribute("class", "hidden")
    $fireworkBowNpcRight.setAttribute("class", "hidden")
    $fireworkSwordNpcRight.setAttribute("class", "visible")
}

var swordFireworkDisplays_12NpcRight = () => {
    $fireworkAxeShimmerNpcFullRight.setAttribute("class", "hidden")
    $fireworkBowShimmerNpcFullRight.setAttribute("class", "hidden")
    $fireworkSwordShimmerNpcFullRight.setAttribute("class", "visible")
    $swordSmokeNpcFullRight.setAttribute("class", "hidden")
}

var swordFireworkDisplays_13NpcRight = () => {
    $fireworkAxeNpcRight.setAttribute("class", "hidden")
    $fireworkBowNpcRight.setAttribute("class", "hidden")
    $fireworkSwordNpcRight.setAttribute("class", "hidden")
}

var swordFireworkDisplays_14NpcRight = () => {
    $fireworkAxeShimmerNpcFullRight.setAttribute("class", "hidden")
    $fireworkBowShimmerNpcFullRight.setAttribute("class", "hidden")
    $fireworkSwordShimmerNpcFullRight.setAttribute("class", "hidden")
}

// axeBow Scenario

var axeBowProtrudingFlyingFireworks_0NpcLeft = () => {
    $protrudingFireworkTop_0NpcLeft.setAttribute("class", "hidden")
}

var axeBowProtrudingFlyingFireworks_1NpcLeft = () => {
    $protrudingFireworkTop_1NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_0NpcLeft.setAttribute("class", "visible")
    $protrudingFireworkTop_0NpcLeft.setAttribute("class", "hidden")
}

var axeBowProtrudingFlyingFireworks_2NpcLeft = () => {
    $protrudingFireworkTop_2NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_1NpcLeft.setAttribute("class", "visible")
    $protrudingFireworkBottom_0NpcLeft.setAttribute("class", "visible")
    $protrudingFireworkTop_1NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_0NpcLeft.setAttribute("class", "hidden")
}

var axeBowProtrudingFlyingFireworks_3NpcLeft = () => {
    $protrudingFireworkTop_3NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_2NpcLeft.setAttribute("class", "visible")
    $protrudingFireworkBottom_1NpcLeft.setAttribute("class", "visible")
    $protrudingFireworkTop_2NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_1NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkBottom_0NpcLeft.setAttribute("class", "hidden")    
}

var axeBowProtrudingFlyingFireworks_4NpcLeft = () => {
    $protrudingFireworkTop_4NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_3NpcLeft.setAttribute("class", "visible")
    $protrudingFireworkBottom_2NpcLeft.setAttribute("class", "visible")
    $protrudingFireworkTop_3NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_2NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkBottom_1NpcLeft.setAttribute("class", "hidden")    
}

var axeBowProtrudingFlyingFireworks_5NpcLeft = () => {
    $protrudingFireworkTop_5NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_4NpcLeft.setAttribute("class", "visible")
    $protrudingFireworkBottom_3NpcLeft.setAttribute("class", "visible")
    $protrudingFireworkTop_4NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_3NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkBottom_2NpcLeft.setAttribute("class", "hidden")    
}

var axeBowProtrudingFlyingFireworks_6NpcLeft = () => {
    $protrudingFireworkTop_6NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_5NpcLeft.setAttribute("class", "visible")
    $protrudingFireworkBottom_4NpcLeft.setAttribute("class", "visible")
    $protrudingFireworkTop_5NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_4NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkBottom_3NpcLeft.setAttribute("class", "hidden")    
}

var axeBowProtrudingFlyingFireworks_7NpcLeft = () => {
    $protrudingFireworkTop_7NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_6NpcLeft.setAttribute("class", "visible")
    $protrudingFireworkBottom_5NpcLeft.setAttribute("class", "visible")
    $protrudingFireworkTop_6NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_5NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkBottom_4NpcLeft.setAttribute("class", "hidden")    
}

var axeBowProtrudingFlyingFireworks_8NpcLeft = () => {
    $topFirework_0NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_7NpcLeft.setAttribute("class", "visible")
    $protrudingFireworkBottom_6NpcLeft.setAttribute("class", "visible")
    $protrudingFireworkTop_7NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_6NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkBottom_5NpcLeft.setAttribute("class", "hidden")    
}

var axeBowProtrudingFlyingFireworks_9NpcLeft = () => {
    $topFirework_1NpcLeft.setAttribute("class", "hidden")
    $middleFirework_0NpcLeft.setAttribute("class", "visible")
    $protrudingFireworkBottom_7NpcLeft.setAttribute("class", "visible")
    $topFirework_0NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_7NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkBottom_6NpcLeft.setAttribute("class", "hidden")    
}

var axeBowProtrudingFlyingFireworks_10NpcLeft = () => {
    $topFirework_2NpcLeft.setAttribute("class", "hidden")
    $middleFirework_1NpcLeft.setAttribute("class", "visible")
    $bottomFirework_0NpcLeft.setAttribute("class", "visible")
    $topFirework_1NpcLeft.setAttribute("class", "hidden")
    $middleFirework_0NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkBottom_7NpcLeft.setAttribute("class", "hidden")        
}

var axeBowProtrudingFlyingFireworks_11NpcLeft = () => {
    $topFirework_3NpcLeft.setAttribute("class", "hidden")
    $topFirework_3Z_1NpcLeft.setAttribute("class", "hidden")
    $middleFirework_2NpcLeft.setAttribute("class", "visible")
    $middleFirework_2Z_2NpcLeft.setAttribute("class", "visible")
    $bottomFirework_1NpcLeft.setAttribute("class", "visible")
    $topFirework_2NpcLeft.setAttribute("class", "hidden")
    $middleFirework_1NpcLeft.setAttribute("class", "hidden")
    $bottomFirework_0NpcLeft.setAttribute("class", "hidden")        
}

var axeBowProtrudingFlyingFireworks_12NpcLeft = () => {
    $topFirework_4NpcLeft.setAttribute("class", "hidden")
    $topFirework_4Z_1NpcLeft.setAttribute("class", "hidden")
    $middleFirework_3NpcLeft.setAttribute("class", "visible")
    $middleFirework_3Z_2NpcLeft.setAttribute("class", "visible")
    $bottomFirework_2NpcLeft.setAttribute("class", "visible")
    $topFirework_3NpcLeft.setAttribute("class", "hidden")
    $topFirework_3Z_1NpcLeft.setAttribute("class", "hidden")
    $middleFirework_2NpcLeft.setAttribute("class", "hidden")
    $middleFirework_2Z_2NpcLeft.setAttribute("class", "hidden")
    $bottomFirework_1NpcLeft.setAttribute("class", "hidden")            
}

var axeBowProtrudingFlyingFireworks_13NpcLeft = () => {
    $topFirework_5NpcLeft.setAttribute("class", "hidden")
    $topFirework_5Z_1NpcLeft.setAttribute("class", "hidden")
    $middleFirework_4NpcLeft.setAttribute("class", "visible")
    $middleFirework_4Z_2NpcLeft.setAttribute("class", "visible")
    $bottomFirework_3NpcLeft.setAttribute("class", "visible")
    $topFirework_4NpcLeft.setAttribute("class", "hidden")
    $topFirework_4Z_1NpcLeft.setAttribute("class", "hidden")
    $middleFirework_3NpcLeft.setAttribute("class", "hidden")
    $middleFirework_3Z_2NpcLeft.setAttribute("class", "hidden")
    $bottomFirework_2NpcLeft.setAttribute("class", "hidden")                
}

var axeBowProtrudingFlyingFireworks_14NpcLeft = () => {
    $topFirework_6NpcLeft.setAttribute("class", "hidden")
    $topFirework_6Z_1NpcLeft.setAttribute("class", "hidden")
    $topFirework_6Z_3NpcLeft.setAttribute("class", "hidden")
    $middleFirework_5NpcLeft.setAttribute("class", "visible")
    $middleFirework_5Z_2NpcLeft.setAttribute("class", "visible")
    $middleFirework_5Z_4NpcLeft.setAttribute("class", "visible")
    $bottomFirework_4NpcLeft.setAttribute("class", "visible")
    $topFirework_5NpcLeft.setAttribute("class", "hidden")
    $topFirework_5Z_1NpcLeft.setAttribute("class", "hidden")
    $middleFirework_4NpcLeft.setAttribute("class", "hidden")
    $middleFirework_4Z_2NpcLeft.setAttribute("class", "hidden")
    $bottomFirework_3NpcLeft.setAttribute("class", "hidden")                    
}

var axeBowFireworkExplodesNpcLeft = () => {
    $axeBowFireworkExplosionNpcLeft.setAttribute("class", "visible")
    $topFirework_6NpcLeft.setAttribute("class", "hidden")
    $topFirework_6Z_1NpcLeft.setAttribute("class", "hidden")
    $topFirework_6Z_3NpcLeft.setAttribute("class", "hidden")
    $middleFirework_5NpcLeft.setAttribute("class", "hidden")
    $middleFirework_5Z_2NpcLeft.setAttribute("class", "hidden")
    $middleFirework_5Z_4NpcLeft.setAttribute("class", "hidden")
    $bottomFirework_4NpcLeft.setAttribute("class", "hidden")                        
}

var axeBowFireworkDisplays_0NpcLeft = () => {
    $axeBowSmokeNpcFullMinus10Left.setAttribute("class", "visible")
    $axeBowFireworkExplosionNpcLeft.setAttribute("class", "hidden")
}

var axeBowFireworkDisplays_1NpcLeft = () => {
    $axeBowSmokeNpcFullMinus9Left.setAttribute("class", "visible")        
    $axeBowSmokeNpcFullMinus10Left.setAttribute("class", "hidden")    
}

var axeBowFireworkDisplays_2NpcLeft = () => {
    $axeBowSmokeNpcFullMinus8Left.setAttribute("class", "visible")        
    $axeBowSmokeNpcFullMinus9Left.setAttribute("class", "hidden")    
}

var axeBowFireworkDisplays_3NpcLeft = () => {
    $axeBowSmokeNpcFullMinus7Left.setAttribute("class", "visible")        
    $axeBowSmokeNpcFullMinus8Left.setAttribute("class", "hidden")    
}

var axeBowFireworkDisplays_4NpcLeft = () => {
    $axeBowSmokeNpcFullMinus6Left.setAttribute("class", "visible")        
    $axeBowSmokeNpcFullMinus7Left.setAttribute("class", "hidden")    
}

var axeBowFireworkDisplays_5NpcLeft = () => {
    $axeBowSmokeNpcFullMinus5Left.setAttribute("class", "visible")        
    $axeBowSmokeNpcFullMinus6Left.setAttribute("class", "hidden")    
}

var axeBowFireworkDisplays_6NpcLeft = () => {
    $axeBowSmokeNpcFullMinus4Left.setAttribute("class", "visible")        
    $axeBowSmokeNpcFullMinus5Left.setAttribute("class", "hidden")    
}

var axeBowFireworkDisplays_7NpcLeft = () => {
    $axeBowSmokeNpcFullMinus3Left.setAttribute("class", "visible")        
    $axeBowSmokeNpcFullMinus4Left.setAttribute("class", "hidden")    
}

var axeBowFireworkDisplays_8NpcLeft = () => {
    $axeBowSmokeNpcFullMinus2Left.setAttribute("class", "visible")        
    $axeBowSmokeNpcFullMinus3Left.setAttribute("class", "hidden")    
}

var axeBowFireworkDisplays_9NpcLeft = () => {
    $axeBowSmokeNpcFullMinus1Left.setAttribute("class", "visible")        
    $axeBowSmokeNpcFullMinus2Left.setAttribute("class", "hidden")    
}

var axeBowFireworkDisplays_10NpcLeft = () => {
    $axeBowSmokeFullNpcLeft.setAttribute("class", "visible")        
    $axeBowSmokeNpcFullMinus1Left.setAttribute("class", "hidden")    
}

var axeBowFireworkDisplays_11NpcLeft = () => {
    $fireworkAxeNpcLeft.setAttribute("class", "visible")
    $fireworkBowNpcLeft.setAttribute("class", "visible")
    $fireworkSwordNpcLeft.setAttribute("class", "hidden")
}

var axeBowFireworkDisplays_12NpcLeft = () => {
    $fireworkAxeShimmerNpcFullLeft.setAttribute("class", "visible")
    $fireworkBowShimmerNpcFullLeft.setAttribute("class", "visible")
    $fireworkSwordShimmerNpcFullLeft.setAttribute("class", "hidden")
    $axeBowSmokeFullNpcLeft.setAttribute("class", "hidden")
}

var axeBowFireworkDisplays_13NpcLeft = () => {
    $fireworkAxeNpcLeft.setAttribute("class", "hidden")
    $fireworkBowNpcLeft.setAttribute("class", "hidden")
    $fireworkSwordNpcLeft.setAttribute("class", "hidden")
}

var axeBowFireworkDisplays_14NpcLeft = () => {
    $fireworkAxeShimmerNpcFullLeft.setAttribute("class", "hidden")
    $fireworkBowShimmerNpcFullLeft.setAttribute("class", "hidden")
    $fireworkSwordShimmerNpcFullLeft.setAttribute("class", "hidden")
}

var axeBowProtrudingFlyingFireworks_0NpcRight = () => {
    $protrudingFireworkTop_0NpcRight.setAttribute("class", "hidden")
}

var axeBowProtrudingFlyingFireworks_1NpcRight = () => {
    $protrudingFireworkTop_1NpcRight.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_0NpcRight.setAttribute("class", "visible")
    $protrudingFireworkTop_0NpcRight.setAttribute("class", "hidden")
}

var axeBowProtrudingFlyingFireworks_2NpcRight = () => {
    $protrudingFireworkTop_2NpcRight.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_1NpcRight.setAttribute("class", "visible")
    $protrudingFireworkBottom_0NpcRight.setAttribute("class", "visible")
    $protrudingFireworkTop_1NpcRight.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_0NpcRight.setAttribute("class", "hidden")
}

var axeBowProtrudingFlyingFireworks_3NpcRight = () => {
    $protrudingFireworkTop_3NpcRight.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_2NpcRight.setAttribute("class", "visible")
    $protrudingFireworkBottom_1NpcRight.setAttribute("class", "visible")
    $protrudingFireworkTop_2NpcRight.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_1NpcRight.setAttribute("class", "hidden")
    $protrudingFireworkBottom_0NpcRight.setAttribute("class", "hidden")    
}

var axeBowProtrudingFlyingFireworks_4NpcRight = () => {
    $protrudingFireworkTop_4NpcRight.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_3NpcRight.setAttribute("class", "visible")
    $protrudingFireworkBottom_2NpcRight.setAttribute("class", "visible")
    $protrudingFireworkTop_3NpcRight.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_2NpcRight.setAttribute("class", "hidden")
    $protrudingFireworkBottom_1NpcRight.setAttribute("class", "hidden")    
}

var axeBowProtrudingFlyingFireworks_5NpcRight = () => {
    $protrudingFireworkTop_5NpcRight.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_4NpcRight.setAttribute("class", "visible")
    $protrudingFireworkBottom_3NpcRight.setAttribute("class", "visible")
    $protrudingFireworkTop_4NpcRight.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_3NpcRight.setAttribute("class", "hidden")
    $protrudingFireworkBottom_2NpcRight.setAttribute("class", "hidden")    
}

var axeBowProtrudingFlyingFireworks_6NpcRight = () => {
    $protrudingFireworkTop_6NpcRight.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_5NpcRight.setAttribute("class", "visible")
    $protrudingFireworkBottom_4NpcRight.setAttribute("class", "visible")
    $protrudingFireworkTop_5NpcRight.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_4NpcRight.setAttribute("class", "hidden")
    $protrudingFireworkBottom_3NpcRight.setAttribute("class", "hidden")    
}

var axeBowProtrudingFlyingFireworks_7NpcRight = () => {
    $protrudingFireworkTop_7NpcRight.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_6NpcRight.setAttribute("class", "visible")
    $protrudingFireworkBottom_5NpcRight.setAttribute("class", "visible")
    $protrudingFireworkTop_6NpcRight.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_5NpcRight.setAttribute("class", "hidden")
    $protrudingFireworkBottom_4NpcRight.setAttribute("class", "hidden")    
}

var axeBowProtrudingFlyingFireworks_8NpcRight = () => {
    $topFirework_0NpcRight.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_7NpcRight.setAttribute("class", "visible")
    $protrudingFireworkBottom_6NpcRight.setAttribute("class", "visible")
    $protrudingFireworkTop_7NpcRight.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_6NpcRight.setAttribute("class", "hidden")
    $protrudingFireworkBottom_5NpcRight.setAttribute("class", "hidden")    
}

var axeBowProtrudingFlyingFireworks_9NpcRight = () => {
    $topFirework_1NpcRight.setAttribute("class", "hidden")
    $middleFirework_0NpcRight.setAttribute("class", "visible")
    $protrudingFireworkBottom_7NpcRight.setAttribute("class", "visible")
    $topFirework_0NpcRight.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_7NpcRight.setAttribute("class", "hidden")
    $protrudingFireworkBottom_6NpcRight.setAttribute("class", "hidden")    
}

var axeBowProtrudingFlyingFireworks_10NpcRight = () => {
    $topFirework_2NpcRight.setAttribute("class", "hidden")
    $middleFirework_1NpcRight.setAttribute("class", "visible")
    $bottomFirework_0NpcRight.setAttribute("class", "visible")
    $topFirework_1NpcRight.setAttribute("class", "hidden")
    $middleFirework_0NpcRight.setAttribute("class", "hidden")
    $protrudingFireworkBottom_7NpcRight.setAttribute("class", "hidden")        
}

var axeBowProtrudingFlyingFireworks_11NpcRight = () => {
    $topFirework_3NpcRight.setAttribute("class", "hidden")
    $topFirework_3Z_1NpcRight.setAttribute("class", "hidden")
    $middleFirework_2NpcRight.setAttribute("class", "visible")
    $middleFirework_2Z_2NpcRight.setAttribute("class", "visible")
    $bottomFirework_1NpcRight.setAttribute("class", "visible")
    $topFirework_2NpcRight.setAttribute("class", "hidden")
    $middleFirework_1NpcRight.setAttribute("class", "hidden")
    $bottomFirework_0NpcRight.setAttribute("class", "hidden")        
}

var axeBowProtrudingFlyingFireworks_12NpcRight = () => {
    $topFirework_4NpcRight.setAttribute("class", "hidden")
    $topFirework_4Z_1NpcRight.setAttribute("class", "hidden")
    $middleFirework_3NpcRight.setAttribute("class", "visible")
    $middleFirework_3Z_2NpcRight.setAttribute("class", "visible")
    $bottomFirework_2NpcRight.setAttribute("class", "visible")
    $topFirework_3NpcRight.setAttribute("class", "hidden")
    $topFirework_3Z_1NpcRight.setAttribute("class", "hidden")
    $middleFirework_2NpcRight.setAttribute("class", "hidden")
    $middleFirework_2Z_2NpcRight.setAttribute("class", "hidden")
    $bottomFirework_1NpcRight.setAttribute("class", "hidden")            
}

var axeBowProtrudingFlyingFireworks_13NpcRight = () => {
    $topFirework_5NpcRight.setAttribute("class", "hidden")
    $topFirework_5Z_1NpcRight.setAttribute("class", "hidden")
    $middleFirework_4NpcRight.setAttribute("class", "visible")
    $middleFirework_4Z_2NpcRight.setAttribute("class", "visible")
    $bottomFirework_3NpcRight.setAttribute("class", "visible")
    $topFirework_4NpcRight.setAttribute("class", "hidden")
    $topFirework_4Z_1NpcRight.setAttribute("class", "hidden")
    $middleFirework_3NpcRight.setAttribute("class", "hidden")
    $middleFirework_3Z_2NpcRight.setAttribute("class", "hidden")
    $bottomFirework_2NpcRight.setAttribute("class", "hidden")                
}

var axeBowProtrudingFlyingFireworks_14NpcRight = () => {
    $topFirework_6NpcRight.setAttribute("class", "hidden")
    $topFirework_6Z_1NpcRight.setAttribute("class", "hidden")
    $topFirework_6Z_3NpcRight.setAttribute("class", "hidden")
    $middleFirework_5NpcRight.setAttribute("class", "visible")
    $middleFirework_5Z_2NpcRight.setAttribute("class", "visible")
    $middleFirework_5Z_4NpcRight.setAttribute("class", "visible")
    $bottomFirework_4NpcRight.setAttribute("class", "visible")
    $topFirework_5NpcRight.setAttribute("class", "hidden")
    $topFirework_5Z_1NpcRight.setAttribute("class", "hidden")
    $middleFirework_4NpcRight.setAttribute("class", "hidden")
    $middleFirework_4Z_2NpcRight.setAttribute("class", "hidden")
    $bottomFirework_3NpcRight.setAttribute("class", "hidden")                    
}

var axeBowFireworkExplodesNpcRight = () => {
    $axeBowFireworkExplosionNpcRight.setAttribute("class", "visible")
    $topFirework_6NpcRight.setAttribute("class", "hidden")
    $topFirework_6Z_1NpcRight.setAttribute("class", "hidden")
    $topFirework_6Z_3NpcRight.setAttribute("class", "hidden")
    $middleFirework_5NpcRight.setAttribute("class", "hidden")
    $middleFirework_5Z_2NpcRight.setAttribute("class", "hidden")
    $middleFirework_5Z_4NpcRight.setAttribute("class", "hidden")
    $bottomFirework_4NpcRight.setAttribute("class", "hidden")                        
}

var axeBowFireworkDisplays_0NpcRight = () => {
    $axeBowSmokeNpcFullMinus10Right.setAttribute("class", "visible")
    $axeBowFireworkExplosionNpcRight.setAttribute("class", "hidden")
}

var axeBowFireworkDisplays_1NpcRight = () => {
    $axeBowSmokeNpcFullMinus9Right.setAttribute("class", "visible")        
    $axeBowSmokeNpcFullMinus10Right.setAttribute("class", "hidden")    
}

var axeBowFireworkDisplays_2NpcRight = () => {
    $axeBowSmokeNpcFullMinus8Right.setAttribute("class", "visible")        
    $axeBowSmokeNpcFullMinus9Right.setAttribute("class", "hidden")    
}

var axeBowFireworkDisplays_3NpcRight = () => {
    $axeBowSmokeNpcFullMinus7Right.setAttribute("class", "visible")        
    $axeBowSmokeNpcFullMinus8Right.setAttribute("class", "hidden")    
}

var axeBowFireworkDisplays_4NpcRight = () => {
    $axeBowSmokeNpcFullMinus6Right.setAttribute("class", "visible")        
    $axeBowSmokeNpcFullMinus7Right.setAttribute("class", "hidden")    
}

var axeBowFireworkDisplays_5NpcRight = () => {
    $axeBowSmokeNpcFullMinus5Right.setAttribute("class", "visible")        
    $axeBowSmokeNpcFullMinus6Right.setAttribute("class", "hidden")    
}

var axeBowFireworkDisplays_6NpcRight = () => {
    $axeBowSmokeNpcFullMinus4Right.setAttribute("class", "visible")        
    $axeBowSmokeNpcFullMinus5Right.setAttribute("class", "hidden")    
}

var axeBowFireworkDisplays_7NpcRight = () => {
    $axeBowSmokeNpcFullMinus3Right.setAttribute("class", "visible")        
    $axeBowSmokeNpcFullMinus4Right.setAttribute("class", "hidden")    
}

var axeBowFireworkDisplays_8NpcRight = () => {
    $axeBowSmokeNpcFullMinus2Right.setAttribute("class", "visible")        
    $axeBowSmokeNpcFullMinus3Right.setAttribute("class", "hidden")    
}

var axeBowFireworkDisplays_9NpcRight = () => {
    $axeBowSmokeNpcFullMinus1Right.setAttribute("class", "visible")        
    $axeBowSmokeNpcFullMinus2Right.setAttribute("class", "hidden")    
}

var axeBowFireworkDisplays_10NpcRight = () => {
    $axeBowSmokeFullNpcRight.setAttribute("class", "visible")        
    $axeBowSmokeNpcFullMinus1Right.setAttribute("class", "hidden")    
}

var axeBowFireworkDisplays_11NpcRight = () => {
    $fireworkAxeNpcRight.setAttribute("class", "visible")
    $fireworkBowNpcRight.setAttribute("class", "visible")
    $fireworkSwordNpcRight.setAttribute("class", "hidden")
}

var axeBowFireworkDisplays_12NpcRight = () => {
    $fireworkAxeShimmerNpcFullRight.setAttribute("class", "visible")
    $fireworkBowShimmerNpcFullRight.setAttribute("class", "visible")
    $fireworkSwordShimmerNpcFullRight.setAttribute("class", "hidden")
    $axeBowSmokeFullNpcRight.setAttribute("class", "hidden")
}

var axeBowFireworkDisplays_13NpcRight = () => {
    $fireworkAxeNpcRight.setAttribute("class", "hidden")
    $fireworkBowNpcRight.setAttribute("class", "hidden")
    $fireworkSwordNpcRight.setAttribute("class", "hidden")
}

var axeBowFireworkDisplays_14NpcRight = () => {
    $fireworkAxeShimmerNpcFullRight.setAttribute("class", "hidden")
    $fireworkBowShimmerNpcFullRight.setAttribute("class", "hidden")
    $fireworkSwordShimmerNpcFullRight.setAttribute("class", "hidden")
}

// axeSword Scenario

var axeSwordProtrudingFlyingFireworks_0NpcLeft = () => {
    $protrudingFireworkTop_0NpcLeft.setAttribute("class", "visible")
}

var axeSwordProtrudingFlyingFireworks_1NpcLeft = () => {
    $protrudingFireworkTop_1NpcLeft.setAttribute("class", "visible")
    $protrudingFireworkMiddle_0NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkTop_0NpcLeft.setAttribute("class", "hidden")
}

var axeSwordProtrudingFlyingFireworks_2NpcLeft = () => {
    $protrudingFireworkTop_2NpcLeft.setAttribute("class", "visible")
    $protrudingFireworkMiddle_1NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkBottom_0NpcLeft.setAttribute("class", "visible")
    $protrudingFireworkTop_1NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_0NpcLeft.setAttribute("class", "hidden")
}

var axeSwordProtrudingFlyingFireworks_3NpcLeft = () => {
    $protrudingFireworkTop_3NpcLeft.setAttribute("class", "visible")
    $protrudingFireworkMiddle_2NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkBottom_1NpcLeft.setAttribute("class", "visible")
    $protrudingFireworkTop_2NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_1NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkBottom_0NpcLeft.setAttribute("class", "hidden")    
}

var axeSwordProtrudingFlyingFireworks_4NpcLeft = () => {
    $protrudingFireworkTop_4NpcLeft.setAttribute("class", "visible")
    $protrudingFireworkMiddle_3NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkBottom_2NpcLeft.setAttribute("class", "visible")
    $protrudingFireworkTop_3NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_2NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkBottom_1NpcLeft.setAttribute("class", "hidden")    
}

var axeSwordProtrudingFlyingFireworks_5NpcLeft = () => {
    $protrudingFireworkTop_5NpcLeft.setAttribute("class", "visible")
    $protrudingFireworkMiddle_4NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkBottom_3NpcLeft.setAttribute("class", "visible")
    $protrudingFireworkTop_4NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_3NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkBottom_2NpcLeft.setAttribute("class", "hidden")    
}

var axeSwordProtrudingFlyingFireworks_6NpcLeft = () => {
    $protrudingFireworkTop_6NpcLeft.setAttribute("class", "visible")
    $protrudingFireworkMiddle_5NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkBottom_4NpcLeft.setAttribute("class", "visible")
    $protrudingFireworkTop_5NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_4NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkBottom_3NpcLeft.setAttribute("class", "hidden")    
}

var axeSwordProtrudingFlyingFireworks_7NpcLeft = () => {
    $protrudingFireworkTop_7NpcLeft.setAttribute("class", "visible")
    $protrudingFireworkMiddle_6NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkBottom_5NpcLeft.setAttribute("class", "visible")
    $protrudingFireworkTop_6NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_5NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkBottom_4NpcLeft.setAttribute("class", "hidden")    
}

var axeSwordProtrudingFlyingFireworks_8NpcLeft = () => {
    $topFirework_0NpcLeft.setAttribute("class", "visible")
    $protrudingFireworkMiddle_7NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkBottom_6NpcLeft.setAttribute("class", "visible")
    $protrudingFireworkTop_7NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_6NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkBottom_5NpcLeft.setAttribute("class", "hidden")    
}

var axeSwordProtrudingFlyingFireworks_9NpcLeft = () => {
    $topFirework_1NpcLeft.setAttribute("class", "visible")
    $middleFirework_0NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkBottom_7NpcLeft.setAttribute("class", "visible")
    $topFirework_0NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_7NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkBottom_6NpcLeft.setAttribute("class", "hidden")    
}

var axeSwordProtrudingFlyingFireworks_10NpcLeft = () => {
    $topFirework_2NpcLeft.setAttribute("class", "visible")
    $middleFirework_1NpcLeft.setAttribute("class", "hidden")
    $bottomFirework_0NpcLeft.setAttribute("class", "visible")
    $topFirework_1NpcLeft.setAttribute("class", "hidden")
    $middleFirework_0NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkBottom_7NpcLeft.setAttribute("class", "hidden")        
}

var axeSwordProtrudingFlyingFireworks_11NpcLeft = () => {
    $topFirework_3NpcLeft.setAttribute("class", "visible")
    $topFirework_3Z_1NpcLeft.setAttribute("class", "visible")
    $middleFirework_2NpcLeft.setAttribute("class", "hidden")
    $middleFirework_2Z_2NpcLeft.setAttribute("class", "hidden")
    $bottomFirework_1NpcLeft.setAttribute("class", "visible")
    $topFirework_2NpcLeft.setAttribute("class", "hidden")
    $middleFirework_1NpcLeft.setAttribute("class", "hidden")
    $bottomFirework_0NpcLeft.setAttribute("class", "hidden")        
}

var axeSwordProtrudingFlyingFireworks_12NpcLeft = () => {
    $topFirework_4NpcLeft.setAttribute("class", "visible")
    $topFirework_4Z_1NpcLeft.setAttribute("class", "visible")
    $middleFirework_3NpcLeft.setAttribute("class", "hidden")
    $middleFirework_3Z_2NpcLeft.setAttribute("class", "hidden")
    $bottomFirework_2NpcLeft.setAttribute("class", "visible")
    $topFirework_3NpcLeft.setAttribute("class", "hidden")
    $topFirework_3Z_1NpcLeft.setAttribute("class", "hidden")
    $middleFirework_2NpcLeft.setAttribute("class", "hidden")
    $middleFirework_2Z_2NpcLeft.setAttribute("class", "hidden")
    $bottomFirework_1NpcLeft.setAttribute("class", "hidden")            
}

var axeSwordProtrudingFlyingFireworks_13NpcLeft = () => {
    $topFirework_5NpcLeft.setAttribute("class", "visible")
    $topFirework_5Z_1NpcLeft.setAttribute("class", "visible")
    $middleFirework_4NpcLeft.setAttribute("class", "hidden")
    $middleFirework_4Z_2NpcLeft.setAttribute("class", "hidden")
    $bottomFirework_3NpcLeft.setAttribute("class", "visible")
    $topFirework_4NpcLeft.setAttribute("class", "hidden")
    $topFirework_4Z_1NpcLeft.setAttribute("class", "hidden")
    $middleFirework_3NpcLeft.setAttribute("class", "hidden")
    $middleFirework_3Z_2NpcLeft.setAttribute("class", "hidden")
    $bottomFirework_2NpcLeft.setAttribute("class", "hidden")                
}

var axeSwordProtrudingFlyingFireworks_14NpcLeft = () => {
    $topFirework_6NpcLeft.setAttribute("class", "visible")
    $topFirework_6Z_1NpcLeft.setAttribute("class", "visible")
    $topFirework_6Z_3NpcLeft.setAttribute("class", "visible")
    $middleFirework_5NpcLeft.setAttribute("class", "hidden")
    $middleFirework_5Z_2NpcLeft.setAttribute("class", "hidden")
    $middleFirework_5Z_4NpcLeft.setAttribute("class", "hidden")
    $bottomFirework_4NpcLeft.setAttribute("class", "visible")
    $topFirework_5NpcLeft.setAttribute("class", "hidden")
    $topFirework_5Z_1NpcLeft.setAttribute("class", "hidden")
    $middleFirework_4NpcLeft.setAttribute("class", "hidden")
    $middleFirework_4Z_2NpcLeft.setAttribute("class", "hidden")
    $bottomFirework_3NpcLeft.setAttribute("class", "hidden")                    
}

var axeSwordFireworkExplodesNpcLeft = () => {
    $axeSwordFireworkExplosionNpcLeft.setAttribute("class", "visible")
    $topFirework_6NpcLeft.setAttribute("class", "hidden")
    $topFirework_6Z_1NpcLeft.setAttribute("class", "hidden")
    $topFirework_6Z_3NpcLeft.setAttribute("class", "hidden")
    $middleFirework_5NpcLeft.setAttribute("class", "hidden")
    $middleFirework_5Z_2NpcLeft.setAttribute("class", "hidden")
    $middleFirework_5Z_4NpcLeft.setAttribute("class", "hidden")
    $bottomFirework_4NpcLeft.setAttribute("class", "hidden")                        
}

var axeSwordFireworkDisplays_0NpcLeft = () => {
    $axeSwordSmokeNpcFullMinus10Left.setAttribute("class", "visible")
    $axeSwordFireworkExplosionNpcLeft.setAttribute("class", "hidden")
}

var axeSwordFireworkDisplays_1NpcLeft = () => {
    $axeSwordSmokeNpcFullMinus9Left.setAttribute("class", "visible")        
    $axeSwordSmokeNpcFullMinus10Left.setAttribute("class", "hidden")    
}

var axeSwordFireworkDisplays_2NpcLeft = () => {
    $axeSwordSmokeNpcFullMinus8Left.setAttribute("class", "visible")        
    $axeSwordSmokeNpcFullMinus9Left.setAttribute("class", "hidden")    
}

var axeSwordFireworkDisplays_3NpcLeft = () => {
    $axeSwordSmokeNpcFullMinus7Left.setAttribute("class", "visible")        
    $axeSwordSmokeNpcFullMinus8Left.setAttribute("class", "hidden")    
}

var axeSwordFireworkDisplays_4NpcLeft = () => {
    $axeSwordSmokeNpcFullMinus6Left.setAttribute("class", "visible")        
    $axeSwordSmokeNpcFullMinus7Left.setAttribute("class", "hidden")    
}

var axeSwordFireworkDisplays_5NpcLeft = () => {
    $axeSwordSmokeNpcFullMinus5Left.setAttribute("class", "visible")        
    $axeSwordSmokeNpcFullMinus6Left.setAttribute("class", "hidden")    
}

var axeSwordFireworkDisplays_6NpcLeft = () => {
    $axeSwordSmokeNpcFullMinus4Left.setAttribute("class", "visible")        
    $axeSwordSmokeNpcFullMinus5Left.setAttribute("class", "hidden")    
}

var axeSwordFireworkDisplays_7NpcLeft = () => {
    $axeSwordSmokeNpcFullMinus3Left.setAttribute("class", "visible")        
    $axeSwordSmokeNpcFullMinus4Left.setAttribute("class", "hidden")    
}

var axeSwordFireworkDisplays_8NpcLeft = () => {
    $axeSwordSmokeNpcFullMinus2Left.setAttribute("class", "visible")        
    $axeSwordSmokeNpcFullMinus3Left.setAttribute("class", "hidden")    
}

var axeSwordFireworkDisplays_9NpcLeft = () => {
    $axeSwordSmokeNpcFullMinus1Left.setAttribute("class", "visible")        
    $axeSwordSmokeNpcFullMinus2Left.setAttribute("class", "hidden")    
}

var axeSwordFireworkDisplays_10NpcLeft = () => {
    $axeSwordSmokeNpcFullLeft.setAttribute("class", "visible")        
    $axeSwordSmokeNpcFullMinus1Left.setAttribute("class", "hidden")    
}

var axeSwordFireworkDisplays_11NpcLeft = () => {
    $fireworkAxeNpcLeft.setAttribute("class", "visible")
    $fireworkBowNpcLeft.setAttribute("class", "hidden")
    $fireworkSwordNpcLeft.setAttribute("class", "visible")
}

var axeSwordFireworkDisplays_12NpcLeft = () => {
    $fireworkAxeShimmerNpcFullLeft.setAttribute("class", "visible")
    $fireworkBowShimmerNpcFullLeft.setAttribute("class", "hidden")
    $fireworkSwordShimmerNpcFullLeft.setAttribute("class", "visible")
    $axeSwordSmokeNpcFullLeft.setAttribute("class", "hidden")
}

var axeSwordFireworkDisplays_13NpcLeft = () => {
    $fireworkAxeNpcLeft.setAttribute("class", "hidden")
    $fireworkBowNpcLeft.setAttribute("class", "hidden")
    $fireworkSwordNpcLeft.setAttribute("class", "hidden")
}

var axeSwordFireworkDisplays_14NpcLeft = () => {
    $fireworkAxeShimmerNpcFullLeft.setAttribute("class", "hidden")
    $fireworkBowShimmerNpcFullLeft.setAttribute("class", "hidden")
    $fireworkSwordShimmerNpcFullLeft.setAttribute("class", "hidden")
}

var axeSwordProtrudingFlyingFireworks_0NpcRight = () => {
    $protrudingFireworkTop_0NpcRight.setAttribute("class", "visible")
}

var axeSwordProtrudingFlyingFireworks_1NpcRight = () => {
    $protrudingFireworkTop_1NpcRight.setAttribute("class", "visible")
    $protrudingFireworkMiddle_0NpcRight.setAttribute("class", "hidden")
    $protrudingFireworkTop_0NpcRight.setAttribute("class", "hidden")
}

var axeSwordProtrudingFlyingFireworks_2NpcRight = () => {
    $protrudingFireworkTop_2NpcRight.setAttribute("class", "visible")
    $protrudingFireworkMiddle_1NpcRight.setAttribute("class", "hidden")
    $protrudingFireworkBottom_0NpcRight.setAttribute("class", "visible")
    $protrudingFireworkTop_1NpcRight.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_0NpcRight.setAttribute("class", "hidden")
}

var axeSwordProtrudingFlyingFireworks_3NpcRight = () => {
    $protrudingFireworkTop_3NpcRight.setAttribute("class", "visible")
    $protrudingFireworkMiddle_2NpcRight.setAttribute("class", "hidden")
    $protrudingFireworkBottom_1NpcRight.setAttribute("class", "visible")
    $protrudingFireworkTop_2NpcRight.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_1NpcRight.setAttribute("class", "hidden")
    $protrudingFireworkBottom_0NpcRight.setAttribute("class", "hidden")    
}

var axeSwordProtrudingFlyingFireworks_4NpcRight = () => {
    $protrudingFireworkTop_4NpcRight.setAttribute("class", "visible")
    $protrudingFireworkMiddle_3NpcRight.setAttribute("class", "hidden")
    $protrudingFireworkBottom_2NpcRight.setAttribute("class", "visible")
    $protrudingFireworkTop_3NpcRight.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_2NpcRight.setAttribute("class", "hidden")
    $protrudingFireworkBottom_1NpcRight.setAttribute("class", "hidden")    
}

var axeSwordProtrudingFlyingFireworks_5NpcRight = () => {
    $protrudingFireworkTop_5NpcRight.setAttribute("class", "visible")
    $protrudingFireworkMiddle_4NpcRight.setAttribute("class", "hidden")
    $protrudingFireworkBottom_3NpcRight.setAttribute("class", "visible")
    $protrudingFireworkTop_4NpcRight.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_3NpcRight.setAttribute("class", "hidden")
    $protrudingFireworkBottom_2NpcRight.setAttribute("class", "hidden")    
}

var axeSwordProtrudingFlyingFireworks_6NpcRight = () => {
    $protrudingFireworkTop_6NpcRight.setAttribute("class", "visible")
    $protrudingFireworkMiddle_5NpcRight.setAttribute("class", "hidden")
    $protrudingFireworkBottom_4NpcRight.setAttribute("class", "visible")
    $protrudingFireworkTop_5NpcRight.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_4NpcRight.setAttribute("class", "hidden")
    $protrudingFireworkBottom_3NpcRight.setAttribute("class", "hidden")    
}

var axeSwordProtrudingFlyingFireworks_7NpcRight = () => {
    $protrudingFireworkTop_7NpcRight.setAttribute("class", "visible")
    $protrudingFireworkMiddle_6NpcRight.setAttribute("class", "hidden")
    $protrudingFireworkBottom_5NpcRight.setAttribute("class", "visible")
    $protrudingFireworkTop_6NpcRight.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_5NpcRight.setAttribute("class", "hidden")
    $protrudingFireworkBottom_4NpcRight.setAttribute("class", "hidden")    
}

var axeSwordProtrudingFlyingFireworks_8NpcRight = () => {
    $topFirework_0NpcRight.setAttribute("class", "visible")
    $protrudingFireworkMiddle_7NpcRight.setAttribute("class", "hidden")
    $protrudingFireworkBottom_6NpcRight.setAttribute("class", "visible")
    $protrudingFireworkTop_7NpcRight.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_6NpcRight.setAttribute("class", "hidden")
    $protrudingFireworkBottom_5NpcRight.setAttribute("class", "hidden")    
}

var axeSwordProtrudingFlyingFireworks_9NpcRight = () => {
    $topFirework_1NpcRight.setAttribute("class", "visible")
    $middleFirework_0NpcRight.setAttribute("class", "hidden")
    $protrudingFireworkBottom_7NpcRight.setAttribute("class", "visible")
    $topFirework_0NpcRight.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_7NpcRight.setAttribute("class", "hidden")
    $protrudingFireworkBottom_6NpcRight.setAttribute("class", "hidden")    
}

var axeSwordProtrudingFlyingFireworks_10NpcRight = () => {
    $topFirework_2NpcRight.setAttribute("class", "visible")
    $middleFirework_1NpcRight.setAttribute("class", "hidden")
    $bottomFirework_0NpcRight.setAttribute("class", "visible")
    $topFirework_1NpcRight.setAttribute("class", "hidden")
    $middleFirework_0NpcRight.setAttribute("class", "hidden")
    $protrudingFireworkBottom_7NpcRight.setAttribute("class", "hidden")        
}

var axeSwordProtrudingFlyingFireworks_11NpcRight = () => {
    $topFirework_3NpcRight.setAttribute("class", "visible")
    $topFirework_3Z_1NpcRight.setAttribute("class", "visible")
    $middleFirework_2NpcRight.setAttribute("class", "hidden")
    $middleFirework_2Z_2NpcRight.setAttribute("class", "hidden")
    $bottomFirework_1NpcRight.setAttribute("class", "visible")
    $topFirework_2NpcRight.setAttribute("class", "hidden")
    $middleFirework_1NpcRight.setAttribute("class", "hidden")
    $bottomFirework_0NpcRight.setAttribute("class", "hidden")        
}

var axeSwordProtrudingFlyingFireworks_12NpcRight = () => {
    $topFirework_4NpcRight.setAttribute("class", "visible")
    $topFirework_4Z_1NpcRight.setAttribute("class", "visible")
    $middleFirework_3NpcRight.setAttribute("class", "hidden")
    $middleFirework_3Z_2NpcRight.setAttribute("class", "hidden")
    $bottomFirework_2NpcRight.setAttribute("class", "visible")
    $topFirework_3NpcRight.setAttribute("class", "hidden")
    $topFirework_3Z_1NpcRight.setAttribute("class", "hidden")
    $middleFirework_2NpcRight.setAttribute("class", "hidden")
    $middleFirework_2Z_2NpcRight.setAttribute("class", "hidden")
    $bottomFirework_1NpcRight.setAttribute("class", "hidden")            
}

var axeSwordProtrudingFlyingFireworks_13NpcRight = () => {
    $topFirework_5NpcRight.setAttribute("class", "visible")
    $topFirework_5Z_1NpcRight.setAttribute("class", "visible")
    $middleFirework_4NpcRight.setAttribute("class", "hidden")
    $middleFirework_4Z_2NpcRight.setAttribute("class", "hidden")
    $bottomFirework_3NpcRight.setAttribute("class", "visible")
    $topFirework_4NpcRight.setAttribute("class", "hidden")
    $topFirework_4Z_1NpcRight.setAttribute("class", "hidden")
    $middleFirework_3NpcRight.setAttribute("class", "hidden")
    $middleFirework_3Z_2NpcRight.setAttribute("class", "hidden")
    $bottomFirework_2NpcRight.setAttribute("class", "hidden")                
}

var axeSwordProtrudingFlyingFireworks_14NpcRight = () => {
    $topFirework_6NpcRight.setAttribute("class", "visible")
    $topFirework_6Z_1NpcRight.setAttribute("class", "visible")
    $topFirework_6Z_3NpcRight.setAttribute("class", "visible")
    $middleFirework_5NpcRight.setAttribute("class", "hidden")
    $middleFirework_5Z_2NpcRight.setAttribute("class", "hidden")
    $middleFirework_5Z_4NpcRight.setAttribute("class", "hidden")
    $bottomFirework_4NpcRight.setAttribute("class", "visible")
    $topFirework_5NpcRight.setAttribute("class", "hidden")
    $topFirework_5Z_1NpcRight.setAttribute("class", "hidden")
    $middleFirework_4NpcRight.setAttribute("class", "hidden")
    $middleFirework_4Z_2NpcRight.setAttribute("class", "hidden")
    $bottomFirework_3NpcRight.setAttribute("class", "hidden")                    
}

var axeSwordFireworkExplodesNpcRight = () => {
    $axeSwordFireworkExplosionNpcRight.setAttribute("class", "visible")
    $topFirework_6NpcRight.setAttribute("class", "hidden")
    $topFirework_6Z_1NpcRight.setAttribute("class", "hidden")
    $topFirework_6Z_3NpcRight.setAttribute("class", "hidden")
    $middleFirework_5NpcRight.setAttribute("class", "hidden")
    $middleFirework_5Z_2NpcRight.setAttribute("class", "hidden")
    $middleFirework_5Z_4NpcRight.setAttribute("class", "hidden")
    $bottomFirework_4NpcRight.setAttribute("class", "hidden")                        
}

var axeSwordFireworkDisplays_0NpcRight = () => {
    $axeSwordSmokeNpcFullMinus10Right.setAttribute("class", "visible")
    $axeSwordFireworkExplosionNpcRight.setAttribute("class", "hidden")
}

var axeSwordFireworkDisplays_1NpcRight = () => {
    $axeSwordSmokeNpcFullMinus9Right.setAttribute("class", "visible")        
    $axeSwordSmokeNpcFullMinus10Right.setAttribute("class", "hidden")    
}

var axeSwordFireworkDisplays_2NpcRight = () => {
    $axeSwordSmokeNpcFullMinus8Right.setAttribute("class", "visible")        
    $axeSwordSmokeNpcFullMinus9Right.setAttribute("class", "hidden")    
}

var axeSwordFireworkDisplays_3NpcRight = () => {
    $axeSwordSmokeNpcFullMinus7Right.setAttribute("class", "visible")        
    $axeSwordSmokeNpcFullMinus8Right.setAttribute("class", "hidden")    
}

var axeSwordFireworkDisplays_4NpcRight = () => {
    $axeSwordSmokeNpcFullMinus6Right.setAttribute("class", "visible")        
    $axeSwordSmokeNpcFullMinus7Right.setAttribute("class", "hidden")    
}

var axeSwordFireworkDisplays_5NpcRight = () => {
    $axeSwordSmokeNpcFullMinus5Right.setAttribute("class", "visible")        
    $axeSwordSmokeNpcFullMinus6Right.setAttribute("class", "hidden")    
}

var axeSwordFireworkDisplays_6NpcRight = () => {
    $axeSwordSmokeNpcFullMinus4Right.setAttribute("class", "visible")        
    $axeSwordSmokeNpcFullMinus5Right.setAttribute("class", "hidden")    
}

var axeSwordFireworkDisplays_7NpcRight = () => {
    $axeSwordSmokeNpcFullMinus3Right.setAttribute("class", "visible")        
    $axeSwordSmokeNpcFullMinus4Right.setAttribute("class", "hidden")    
}

var axeSwordFireworkDisplays_8NpcRight = () => {
    $axeSwordSmokeNpcFullMinus2Right.setAttribute("class", "visible")        
    $axeSwordSmokeNpcFullMinus3Right.setAttribute("class", "hidden")    
}

var axeSwordFireworkDisplays_9NpcRight = () => {
    $axeSwordSmokeNpcFullMinus1Right.setAttribute("class", "visible")        
    $axeSwordSmokeNpcFullMinus2Right.setAttribute("class", "hidden")    
}

var axeSwordFireworkDisplays_10NpcRight = () => {
    $axeSwordSmokeNpcFullRight.setAttribute("class", "visible")        
    $axeSwordSmokeNpcFullMinus1Right.setAttribute("class", "hidden")    
}

var axeSwordFireworkDisplays_11NpcRight = () => {
    $fireworkAxeNpcRight.setAttribute("class", "visible")
    $fireworkBowNpcRight.setAttribute("class", "hidden")
    $fireworkSwordNpcRight.setAttribute("class", "visible")
}

var axeSwordFireworkDisplays_12NpcRight = () => {
    $fireworkAxeShimmerNpcFullRight.setAttribute("class", "visible")
    $fireworkBowShimmerNpcFullRight.setAttribute("class", "hidden")
    $fireworkSwordShimmerNpcFullRight.setAttribute("class", "visible")
    $axeSwordSmokeNpcFullRight.setAttribute("class", "hidden")
}

var axeSwordFireworkDisplays_13NpcRight = () => {
    $fireworkAxeNpcRight.setAttribute("class", "hidden")
    $fireworkBowNpcRight.setAttribute("class", "hidden")
    $fireworkSwordNpcRight.setAttribute("class", "hidden")
}

var axeSwordFireworkDisplays_14NpcRight = () => {
    $fireworkAxeShimmerNpcFullRight.setAttribute("class", "hidden")
    $fireworkBowShimmerNpcFullRight.setAttribute("class", "hidden")
    $fireworkSwordShimmerNpcFullRight.setAttribute("class", "hidden")
}

// bowSword Scenario

var bowSwordProtrudingFlyingFireworks_0NpcLeft = () => {
    $protrudingFireworkTop_0NpcLeft.setAttribute("class", "visible")
}

var bowSwordProtrudingFlyingFireworks_1NpcLeft = () => {
    $protrudingFireworkTop_1NpcLeft.setAttribute("class", "visible")
    $protrudingFireworkMiddle_0NpcLeft.setAttribute("class", "visible")
    $protrudingFireworkTop_0NpcLeft.setAttribute("class", "hidden")
}

var bowSwordProtrudingFlyingFireworks_2NpcLeft = () => {
    $protrudingFireworkTop_2NpcLeft.setAttribute("class", "visible")
    $protrudingFireworkMiddle_1NpcLeft.setAttribute("class", "visible")
    $protrudingFireworkBottom_0NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkTop_1NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_0NpcLeft.setAttribute("class", "hidden")
}

var bowSwordProtrudingFlyingFireworks_3NpcLeft = () => {
    $protrudingFireworkTop_3NpcLeft.setAttribute("class", "visible")
    $protrudingFireworkMiddle_2NpcLeft.setAttribute("class", "visible")
    $protrudingFireworkBottom_1NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkTop_2NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_1NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkBottom_0NpcLeft.setAttribute("class", "hidden")    
}

var bowSwordProtrudingFlyingFireworks_4NpcLeft = () => {
    $protrudingFireworkTop_4NpcLeft.setAttribute("class", "visible")
    $protrudingFireworkMiddle_3NpcLeft.setAttribute("class", "visible")
    $protrudingFireworkBottom_2NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkTop_3NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_2NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkBottom_1NpcLeft.setAttribute("class", "hidden")    
}

var bowSwordProtrudingFlyingFireworks_5NpcLeft = () => {
    $protrudingFireworkTop_5NpcLeft.setAttribute("class", "visible")
    $protrudingFireworkMiddle_4NpcLeft.setAttribute("class", "visible")
    $protrudingFireworkBottom_3NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkTop_4NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_3NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkBottom_2NpcLeft.setAttribute("class", "hidden")    
}

var bowSwordProtrudingFlyingFireworks_6NpcLeft = () => {
    $protrudingFireworkTop_6NpcLeft.setAttribute("class", "visible")
    $protrudingFireworkMiddle_5NpcLeft.setAttribute("class", "visible")
    $protrudingFireworkBottom_4NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkTop_5NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_4NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkBottom_3NpcLeft.setAttribute("class", "hidden")    
}

var bowSwordProtrudingFlyingFireworks_7NpcLeft = () => {
    $protrudingFireworkTop_7NpcLeft.setAttribute("class", "visible")
    $protrudingFireworkMiddle_6NpcLeft.setAttribute("class", "visible")
    $protrudingFireworkBottom_5NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkTop_6NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_5NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkBottom_4NpcLeft.setAttribute("class", "hidden")    
}

var bowSwordProtrudingFlyingFireworks_8NpcLeft = () => {
    $topFirework_0NpcLeft.setAttribute("class", "visible")
    $protrudingFireworkMiddle_7NpcLeft.setAttribute("class", "visible")
    $protrudingFireworkBottom_6NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkTop_7NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_6NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkBottom_5NpcLeft.setAttribute("class", "hidden")    
}

var bowSwordProtrudingFlyingFireworks_9NpcLeft = () => {
    $topFirework_1NpcLeft.setAttribute("class", "visible")
    $middleFirework_0NpcLeft.setAttribute("class", "visible")
    $protrudingFireworkBottom_7NpcLeft.setAttribute("class", "hidden")
    $topFirework_0NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_7NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkBottom_6NpcLeft.setAttribute("class", "hidden")    
}

var bowSwordProtrudingFlyingFireworks_10NpcLeft = () => {
    $topFirework_2NpcLeft.setAttribute("class", "visible")
    $middleFirework_1NpcLeft.setAttribute("class", "visible")
    $bottomFirework_0NpcLeft.setAttribute("class", "hidden")
    $topFirework_1NpcLeft.setAttribute("class", "hidden")
    $middleFirework_0NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkBottom_7NpcLeft.setAttribute("class", "hidden")        
}

var bowSwordProtrudingFlyingFireworks_11NpcLeft = () => {
    $topFirework_3NpcLeft.setAttribute("class", "visible")
    $topFirework_3Z_1NpcLeft.setAttribute("class", "visible")
    $middleFirework_2NpcLeft.setAttribute("class", "visible")
    $middleFirework_2Z_2NpcLeft.setAttribute("class", "visible")
    $bottomFirework_1NpcLeft.setAttribute("class", "hidden")
    $topFirework_2NpcLeft.setAttribute("class", "hidden")
    $middleFirework_1NpcLeft.setAttribute("class", "hidden")
    $bottomFirework_0NpcLeft.setAttribute("class", "hidden")        
}

var bowSwordProtrudingFlyingFireworks_12NpcLeft = () => {
    $topFirework_4NpcLeft.setAttribute("class", "visible")
    $topFirework_4Z_1NpcLeft.setAttribute("class", "visible")
    $middleFirework_3NpcLeft.setAttribute("class", "visible")
    $middleFirework_3Z_2NpcLeft.setAttribute("class", "visible")
    $bottomFirework_2NpcLeft.setAttribute("class", "hidden")
    $topFirework_3NpcLeft.setAttribute("class", "hidden")
    $topFirework_3Z_1NpcLeft.setAttribute("class", "hidden")
    $middleFirework_2NpcLeft.setAttribute("class", "hidden")
    $middleFirework_2Z_2NpcLeft.setAttribute("class", "hidden")
    $bottomFirework_1NpcLeft.setAttribute("class", "hidden")            
}

var bowSwordProtrudingFlyingFireworks_13NpcLeft = () => {
    $topFirework_5NpcLeft.setAttribute("class", "visible")
    $topFirework_5Z_1NpcLeft.setAttribute("class", "visible")
    $middleFirework_4NpcLeft.setAttribute("class", "visible")
    $middleFirework_4Z_2NpcLeft.setAttribute("class", "visible")
    $bottomFirework_3NpcLeft.setAttribute("class", "hidden")
    $topFirework_4NpcLeft.setAttribute("class", "hidden")
    $topFirework_4Z_1NpcLeft.setAttribute("class", "hidden")
    $middleFirework_3NpcLeft.setAttribute("class", "hidden")
    $middleFirework_3Z_2NpcLeft.setAttribute("class", "hidden")
    $bottomFirework_2NpcLeft.setAttribute("class", "hidden")                
}

var bowSwordProtrudingFlyingFireworks_14NpcLeft = () => {
    $topFirework_6NpcLeft.setAttribute("class", "visible")
    $topFirework_6Z_1NpcLeft.setAttribute("class", "visible")
    $topFirework_6Z_3NpcLeft.setAttribute("class", "visible")
    $middleFirework_5NpcLeft.setAttribute("class", "visible")
    $middleFirework_5Z_2NpcLeft.setAttribute("class", "visible")
    $middleFirework_5Z_4NpcLeft.setAttribute("class", "visible")
    $bottomFirework_4NpcLeft.setAttribute("class", "hidden")
    $topFirework_5NpcLeft.setAttribute("class", "hidden")
    $topFirework_5Z_1NpcLeft.setAttribute("class", "hidden")
    $middleFirework_4NpcLeft.setAttribute("class", "hidden")
    $middleFirework_4Z_2NpcLeft.setAttribute("class", "hidden")
    $bottomFirework_3NpcLeft.setAttribute("class", "hidden")                    
}

var bowSwordFireworkExplodesNpcLeft = () => {
    $bowSwordFireworkExplosionNpcLeft.setAttribute("class", "visible")
    $topFirework_6NpcLeft.setAttribute("class", "hidden")
    $topFirework_6Z_1NpcLeft.setAttribute("class", "hidden")
    $topFirework_6Z_3NpcLeft.setAttribute("class", "hidden")
    $middleFirework_5NpcLeft.setAttribute("class", "hidden")
    $middleFirework_5Z_2NpcLeft.setAttribute("class", "hidden")
    $middleFirework_5Z_4NpcLeft.setAttribute("class", "hidden")
    $bottomFirework_4NpcLeft.setAttribute("class", "hidden")                        
}

var bowSwordFireworkDisplays_0NpcLeft = () => {
    $bowSwordSmokeNpcFullMinus10Left.setAttribute("class", "visible")
    $bowSwordFireworkExplosionNpcLeft.setAttribute("class", "hidden")
}

var bowSwordFireworkDisplays_1NpcLeft = () => {
    $bowSwordSmokeNpcFullMinus9Left.setAttribute("class", "visible")        
    $bowSwordSmokeNpcFullMinus10Left.setAttribute("class", "hidden")    
}

var bowSwordFireworkDisplays_2NpcLeft = () => {
    $bowSwordSmokeNpcFullMinus8Left.setAttribute("class", "visible")        
    $bowSwordSmokeNpcFullMinus9Left.setAttribute("class", "hidden")    
}

var bowSwordFireworkDisplays_3NpcLeft = () => {
    $bowSwordSmokeNpcFullMinus7Left.setAttribute("class", "visible")        
    $bowSwordSmokeNpcFullMinus8Left.setAttribute("class", "hidden")    
}

var bowSwordFireworkDisplays_4NpcLeft = () => {
    $bowSwordSmokeNpcFullMinus6Left.setAttribute("class", "visible")        
    $bowSwordSmokeNpcFullMinus7Left.setAttribute("class", "hidden")    
}

var bowSwordFireworkDisplays_5NpcLeft = () => {
    $bowSwordSmokeNpcFullMinus5Left.setAttribute("class", "visible")        
    $bowSwordSmokeNpcFullMinus6Left.setAttribute("class", "hidden")    
}

var bowSwordFireworkDisplays_6NpcLeft = () => {
    $bowSwordSmokeNpcFullMinus4Left.setAttribute("class", "visible")        
    $bowSwordSmokeNpcFullMinus5Left.setAttribute("class", "hidden")    
}

var bowSwordFireworkDisplays_7NpcLeft = () => {
    $bowSwordSmokeNpcFullMinus3Left.setAttribute("class", "visible")        
    $bowSwordSmokeNpcFullMinus4Left.setAttribute("class", "hidden")    
}

var bowSwordFireworkDisplays_8NpcLeft = () => {
    $bowSwordSmokeNpcFullMinus2Left.setAttribute("class", "visible")        
    $bowSwordSmokeNpcFullMinus3Left.setAttribute("class", "hidden")    
}

var bowSwordFireworkDisplays_9NpcLeft = () => {
    $bowSwordSmokeNpcFullMinus1Left.setAttribute("class", "visible")        
    $bowSwordSmokeNpcFullMinus2Left.setAttribute("class", "hidden")    
}

var bowSwordFireworkDisplays_10NpcLeft = () => {
    $bowSwordSmokeNpcFullLeft.setAttribute("class", "visible")        
    $bowSwordSmokeNpcFullMinus1Left.setAttribute("class", "hidden")    
}

var bowSwordFireworkDisplays_11NpcLeft = () => {
    $fireworkAxeNpcLeft.setAttribute("class", "hidden")
    $fireworkBowNpcLeft.setAttribute("class", "visible")
    $fireworkSwordNpcLeft.setAttribute("class", "visible")
}

var bowSwordFireworkDisplays_12NpcLeft = () => {
    $fireworkAxeShimmerNpcFullLeft.setAttribute("class", "hidden")
    $fireworkBowShimmerNpcFullLeft.setAttribute("class", "visible")
    $fireworkSwordShimmerNpcFullLeft.setAttribute("class", "visible")
    $bowSwordSmokeNpcFullLeft.setAttribute("class", "hidden")
}

var bowSwordFireworkDisplays_13NpcLeft = () => {
    $fireworkAxeNpcLeft.setAttribute("class", "hidden")
    $fireworkBowNpcLeft.setAttribute("class", "hidden")
    $fireworkSwordNpcLeft.setAttribute("class", "hidden")
}

var bowSwordFireworkDisplays_14NpcLeft = () => {
    $fireworkAxeShimmerNpcFullLeft.setAttribute("class", "hidden")
    $fireworkBowShimmerNpcFullLeft.setAttribute("class", "hidden")
    $fireworkSwordShimmerNpcFullLeft.setAttribute("class", "hidden")
}

var bowSwordProtrudingFlyingFireworks_0NpcRight = () => {
    $protrudingFireworkTop_0NpcRight.setAttribute("class", "visible")
}

var bowSwordProtrudingFlyingFireworks_1NpcRight = () => {
    $protrudingFireworkTop_1NpcRight.setAttribute("class", "visible")
    $protrudingFireworkMiddle_0NpcRight.setAttribute("class", "visible")
    $protrudingFireworkTop_0NpcRight.setAttribute("class", "hidden")
}

var bowSwordProtrudingFlyingFireworks_2NpcRight = () => {
    $protrudingFireworkTop_2NpcRight.setAttribute("class", "visible")
    $protrudingFireworkMiddle_1NpcRight.setAttribute("class", "visible")
    $protrudingFireworkBottom_0NpcRight.setAttribute("class", "hidden")
    $protrudingFireworkTop_1NpcRight.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_0NpcRight.setAttribute("class", "hidden")
}

var bowSwordProtrudingFlyingFireworks_3NpcRight = () => {
    $protrudingFireworkTop_3NpcRight.setAttribute("class", "visible")
    $protrudingFireworkMiddle_2NpcRight.setAttribute("class", "visible")
    $protrudingFireworkBottom_1NpcRight.setAttribute("class", "hidden")
    $protrudingFireworkTop_2NpcRight.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_1NpcRight.setAttribute("class", "hidden")
    $protrudingFireworkBottom_0NpcRight.setAttribute("class", "hidden")    
}

var bowSwordProtrudingFlyingFireworks_4NpcRight = () => {
    $protrudingFireworkTop_4NpcRight.setAttribute("class", "visible")
    $protrudingFireworkMiddle_3NpcRight.setAttribute("class", "visible")
    $protrudingFireworkBottom_2NpcRight.setAttribute("class", "hidden")
    $protrudingFireworkTop_3NpcRight.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_2NpcRight.setAttribute("class", "hidden")
    $protrudingFireworkBottom_1NpcRight.setAttribute("class", "hidden")    
}

var bowSwordProtrudingFlyingFireworks_5NpcRight = () => {
    $protrudingFireworkTop_5NpcRight.setAttribute("class", "visible")
    $protrudingFireworkMiddle_4NpcRight.setAttribute("class", "visible")
    $protrudingFireworkBottom_3NpcRight.setAttribute("class", "hidden")
    $protrudingFireworkTop_4NpcRight.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_3NpcRight.setAttribute("class", "hidden")
    $protrudingFireworkBottom_2NpcRight.setAttribute("class", "hidden")    
}

var bowSwordProtrudingFlyingFireworks_6NpcRight = () => {
    $protrudingFireworkTop_6NpcRight.setAttribute("class", "visible")
    $protrudingFireworkMiddle_5NpcRight.setAttribute("class", "visible")
    $protrudingFireworkBottom_4NpcRight.setAttribute("class", "hidden")
    $protrudingFireworkTop_5NpcRight.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_4NpcRight.setAttribute("class", "hidden")
    $protrudingFireworkBottom_3NpcRight.setAttribute("class", "hidden")    
}

var bowSwordProtrudingFlyingFireworks_7NpcRight = () => {
    $protrudingFireworkTop_7NpcRight.setAttribute("class", "visible")
    $protrudingFireworkMiddle_6NpcRight.setAttribute("class", "visible")
    $protrudingFireworkBottom_5NpcRight.setAttribute("class", "hidden")
    $protrudingFireworkTop_6NpcRight.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_5NpcRight.setAttribute("class", "hidden")
    $protrudingFireworkBottom_4NpcRight.setAttribute("class", "hidden")    
}

var bowSwordProtrudingFlyingFireworks_8NpcRight = () => {
    $topFirework_0NpcRight.setAttribute("class", "visible")
    $protrudingFireworkMiddle_7NpcRight.setAttribute("class", "visible")
    $protrudingFireworkBottom_6NpcRight.setAttribute("class", "hidden")
    $protrudingFireworkTop_7NpcRight.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_6NpcRight.setAttribute("class", "hidden")
    $protrudingFireworkBottom_5NpcRight.setAttribute("class", "hidden")    
}

var bowSwordProtrudingFlyingFireworks_9NpcRight = () => {
    $topFirework_1NpcRight.setAttribute("class", "visible")
    $middleFirework_0NpcRight.setAttribute("class", "visible")
    $protrudingFireworkBottom_7NpcRight.setAttribute("class", "hidden")
    $topFirework_0NpcRight.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_7NpcRight.setAttribute("class", "hidden")
    $protrudingFireworkBottom_6NpcRight.setAttribute("class", "hidden")    
}

var bowSwordProtrudingFlyingFireworks_10NpcRight = () => {
    $topFirework_2NpcRight.setAttribute("class", "visible")
    $middleFirework_1NpcRight.setAttribute("class", "visible")
    $bottomFirework_0NpcRight.setAttribute("class", "hidden")
    $topFirework_1NpcRight.setAttribute("class", "hidden")
    $middleFirework_0NpcRight.setAttribute("class", "hidden")
    $protrudingFireworkBottom_7NpcRight.setAttribute("class", "hidden")        
}

var bowSwordProtrudingFlyingFireworks_11NpcRight = () => {
    $topFirework_3NpcRight.setAttribute("class", "visible")
    $topFirework_3Z_1NpcRight.setAttribute("class", "visible")
    $middleFirework_2NpcRight.setAttribute("class", "visible")
    $middleFirework_2Z_2NpcRight.setAttribute("class", "visible")
    $bottomFirework_1NpcRight.setAttribute("class", "hidden")
    $topFirework_2NpcRight.setAttribute("class", "hidden")
    $middleFirework_1NpcRight.setAttribute("class", "hidden")
    $bottomFirework_0NpcRight.setAttribute("class", "hidden")        
}

var bowSwordProtrudingFlyingFireworks_12NpcRight = () => {
    $topFirework_4NpcRight.setAttribute("class", "visible")
    $topFirework_4Z_1NpcRight.setAttribute("class", "visible")
    $middleFirework_3NpcRight.setAttribute("class", "visible")
    $middleFirework_3Z_2NpcRight.setAttribute("class", "visible")
    $bottomFirework_2NpcRight.setAttribute("class", "hidden")
    $topFirework_3NpcRight.setAttribute("class", "hidden")
    $topFirework_3Z_1NpcRight.setAttribute("class", "hidden")
    $middleFirework_2NpcRight.setAttribute("class", "hidden")
    $middleFirework_2Z_2NpcRight.setAttribute("class", "hidden")
    $bottomFirework_1NpcRight.setAttribute("class", "hidden")            
}

var bowSwordProtrudingFlyingFireworks_13NpcRight = () => {
    $topFirework_5NpcRight.setAttribute("class", "visible")
    $topFirework_5Z_1NpcRight.setAttribute("class", "visible")
    $middleFirework_4NpcRight.setAttribute("class", "visible")
    $middleFirework_4Z_2NpcRight.setAttribute("class", "visible")
    $bottomFirework_3NpcRight.setAttribute("class", "hidden")
    $topFirework_4NpcRight.setAttribute("class", "hidden")
    $topFirework_4Z_1NpcRight.setAttribute("class", "hidden")
    $middleFirework_3NpcRight.setAttribute("class", "hidden")
    $middleFirework_3Z_2NpcRight.setAttribute("class", "hidden")
    $bottomFirework_2NpcRight.setAttribute("class", "hidden")                
}

var bowSwordProtrudingFlyingFireworks_14NpcRight = () => {
    $topFirework_6NpcRight.setAttribute("class", "visible")
    $topFirework_6Z_1NpcRight.setAttribute("class", "visible")
    $topFirework_6Z_3NpcRight.setAttribute("class", "visible")
    $middleFirework_5NpcRight.setAttribute("class", "visible")
    $middleFirework_5Z_2NpcRight.setAttribute("class", "visible")
    $middleFirework_5Z_4NpcRight.setAttribute("class", "visible")
    $bottomFirework_4NpcRight.setAttribute("class", "hidden")
    $topFirework_5NpcRight.setAttribute("class", "hidden")
    $topFirework_5Z_1NpcRight.setAttribute("class", "hidden")
    $middleFirework_4NpcRight.setAttribute("class", "hidden")
    $middleFirework_4Z_2NpcRight.setAttribute("class", "hidden")
    $bottomFirework_3NpcRight.setAttribute("class", "hidden")                    
}

var bowSwordFireworkExplodesNpcRight = () => {
    $bowSwordFireworkExplosionNpcRight.setAttribute("class", "visible")
    $topFirework_6NpcRight.setAttribute("class", "hidden")
    $topFirework_6Z_1NpcRight.setAttribute("class", "hidden")
    $topFirework_6Z_3NpcRight.setAttribute("class", "hidden")
    $middleFirework_5NpcRight.setAttribute("class", "hidden")
    $middleFirework_5Z_2NpcRight.setAttribute("class", "hidden")
    $middleFirework_5Z_4NpcRight.setAttribute("class", "hidden")
    $bottomFirework_4NpcRight.setAttribute("class", "hidden")                        
}

var bowSwordFireworkDisplays_0NpcRight = () => {
    $bowSwordSmokeNpcFullMinus10Right.setAttribute("class", "visible")
    $bowSwordFireworkExplosionNpcRight.setAttribute("class", "hidden")
}

var bowSwordFireworkDisplays_1NpcRight = () => {
    $bowSwordSmokeNpcFullMinus9Right.setAttribute("class", "visible")        
    $bowSwordSmokeNpcFullMinus10Right.setAttribute("class", "hidden")    
}

var bowSwordFireworkDisplays_2NpcRight = () => {
    $bowSwordSmokeNpcFullMinus8Right.setAttribute("class", "visible")        
    $bowSwordSmokeNpcFullMinus9Right.setAttribute("class", "hidden")    
}

var bowSwordFireworkDisplays_3NpcRight = () => {
    $bowSwordSmokeNpcFullMinus7Right.setAttribute("class", "visible")        
    $bowSwordSmokeNpcFullMinus8Right.setAttribute("class", "hidden")    
}

var bowSwordFireworkDisplays_4NpcRight = () => {
    $bowSwordSmokeNpcFullMinus6Right.setAttribute("class", "visible")        
    $bowSwordSmokeNpcFullMinus7Right.setAttribute("class", "hidden")    
}

var bowSwordFireworkDisplays_5NpcRight = () => {
    $bowSwordSmokeNpcFullMinus5Right.setAttribute("class", "visible")        
    $bowSwordSmokeNpcFullMinus6Right.setAttribute("class", "hidden")    
}

var bowSwordFireworkDisplays_6NpcRight = () => {
    $bowSwordSmokeNpcFullMinus4Right.setAttribute("class", "visible")        
    $bowSwordSmokeNpcFullMinus5Right.setAttribute("class", "hidden")    
}

var bowSwordFireworkDisplays_7NpcRight = () => {
    $bowSwordSmokeNpcFullMinus3Right.setAttribute("class", "visible")        
    $bowSwordSmokeNpcFullMinus4Right.setAttribute("class", "hidden")    
}

var bowSwordFireworkDisplays_8NpcRight = () => {
    $bowSwordSmokeNpcFullMinus2Right.setAttribute("class", "visible")        
    $bowSwordSmokeNpcFullMinus3Right.setAttribute("class", "hidden")    
}

var bowSwordFireworkDisplays_9NpcRight = () => {
    $bowSwordSmokeNpcFullMinus1Right.setAttribute("class", "visible")        
    $bowSwordSmokeNpcFullMinus2Right.setAttribute("class", "hidden")    
}

var bowSwordFireworkDisplays_10NpcRight = () => {
    $bowSwordSmokeNpcFullRight.setAttribute("class", "visible")        
    $bowSwordSmokeNpcFullMinus1Right.setAttribute("class", "hidden")    
}

var bowSwordFireworkDisplays_11NpcRight = () => {
    $fireworkAxeNpcRight.setAttribute("class", "hidden")
    $fireworkBowNpcRight.setAttribute("class", "visible")
    $fireworkSwordNpcRight.setAttribute("class", "visible")
}

var bowSwordFireworkDisplays_12NpcRight = () => {
    $fireworkAxeShimmerNpcFullRight.setAttribute("class", "hidden")
    $fireworkBowShimmerNpcFullRight.setAttribute("class", "visible")
    $fireworkSwordShimmerNpcFullRight.setAttribute("class", "visible")
    $bowSwordSmokeNpcFullRight.setAttribute("class", "hidden")
}

var bowSwordFireworkDisplays_13NpcRight = () => {
    $fireworkAxeNpcRight.setAttribute("class", "hidden")
    $fireworkBowNpcRight.setAttribute("class", "hidden")
    $fireworkSwordNpcRight.setAttribute("class", "hidden")
}

var bowSwordFireworkDisplays_14NpcRight = () => {
    $fireworkAxeShimmerNpcFullRight.setAttribute("class", "hidden")
    $fireworkBowShimmerNpcFullRight.setAttribute("class", "hidden")
    $fireworkSwordShimmerNpcFullRight.setAttribute("class", "hidden")
}

// axeBowSword Scenario

var axeBowSwordProtrudingFlyingFireworks_0NpcLeft = () => {
    $protrudingFireworkTop_0NpcLeft.setAttribute("class", "visible")
}

var axeBowSwordProtrudingFlyingFireworks_1NpcLeft = () => {
    $protrudingFireworkTop_1NpcLeft.setAttribute("class", "visible")
    $protrudingFireworkMiddle_0NpcLeft.setAttribute("class", "visible")
    $protrudingFireworkTop_0NpcLeft.setAttribute("class", "hidden")
}

var axeBowSwordProtrudingFlyingFireworks_2NpcLeft = () => {
    $protrudingFireworkTop_2NpcLeft.setAttribute("class", "visible")
    $protrudingFireworkMiddle_1NpcLeft.setAttribute("class", "visible")
    $protrudingFireworkBottom_0NpcLeft.setAttribute("class", "visible")
    $protrudingFireworkTop_1NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_0NpcLeft.setAttribute("class", "hidden")
}

var axeBowSwordProtrudingFlyingFireworks_3NpcLeft = () => {
    $protrudingFireworkTop_3NpcLeft.setAttribute("class", "visible")
    $protrudingFireworkMiddle_2NpcLeft.setAttribute("class", "visible")
    $protrudingFireworkBottom_1NpcLeft.setAttribute("class", "visible")
    $protrudingFireworkTop_2NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_1NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkBottom_0NpcLeft.setAttribute("class", "hidden")    
}

var axeBowSwordProtrudingFlyingFireworks_4NpcLeft = () => {
    $protrudingFireworkTop_4NpcLeft.setAttribute("class", "visible")
    $protrudingFireworkMiddle_3NpcLeft.setAttribute("class", "visible")
    $protrudingFireworkBottom_2NpcLeft.setAttribute("class", "visible")
    $protrudingFireworkTop_3NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_2NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkBottom_1NpcLeft.setAttribute("class", "hidden")    
}

var axeBowSwordProtrudingFlyingFireworks_5NpcLeft = () => {
    $protrudingFireworkTop_5NpcLeft.setAttribute("class", "visible")
    $protrudingFireworkMiddle_4NpcLeft.setAttribute("class", "visible")
    $protrudingFireworkBottom_3NpcLeft.setAttribute("class", "visible")
    $protrudingFireworkTop_4NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_3NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkBottom_2NpcLeft.setAttribute("class", "hidden")    
}

var axeBowSwordProtrudingFlyingFireworks_6NpcLeft = () => {
    $protrudingFireworkTop_6NpcLeft.setAttribute("class", "visible")
    $protrudingFireworkMiddle_5NpcLeft.setAttribute("class", "visible")
    $protrudingFireworkBottom_4NpcLeft.setAttribute("class", "visible")
    $protrudingFireworkTop_5NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_4NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkBottom_3NpcLeft.setAttribute("class", "hidden")    
}

var axeBowSwordProtrudingFlyingFireworks_7NpcLeft = () => {
    $protrudingFireworkTop_7NpcLeft.setAttribute("class", "visible")
    $protrudingFireworkMiddle_6NpcLeft.setAttribute("class", "visible")
    $protrudingFireworkBottom_5NpcLeft.setAttribute("class", "visible")
    $protrudingFireworkTop_6NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_5NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkBottom_4NpcLeft.setAttribute("class", "hidden")    
}

var axeBowSwordProtrudingFlyingFireworks_8NpcLeft = () => {
    $topFirework_0NpcLeft.setAttribute("class", "visible")
    $protrudingFireworkMiddle_7NpcLeft.setAttribute("class", "visible")
    $protrudingFireworkBottom_6NpcLeft.setAttribute("class", "visible")
    $protrudingFireworkTop_7NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_6NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkBottom_5NpcLeft.setAttribute("class", "hidden")    
}

var axeBowSwordProtrudingFlyingFireworks_9NpcLeft = () => {
    $topFirework_1NpcLeft.setAttribute("class", "visible")
    $middleFirework_0NpcLeft.setAttribute("class", "visible")
    $protrudingFireworkBottom_7NpcLeft.setAttribute("class", "visible")
    $topFirework_0NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_7NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkBottom_6NpcLeft.setAttribute("class", "hidden")    
}

var axeBowSwordProtrudingFlyingFireworks_10NpcLeft = () => {
    $topFirework_2NpcLeft.setAttribute("class", "visible")
    $middleFirework_1NpcLeft.setAttribute("class", "visible")
    $bottomFirework_0NpcLeft.setAttribute("class", "visible")
    $topFirework_1NpcLeft.setAttribute("class", "hidden")
    $middleFirework_0NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkBottom_7NpcLeft.setAttribute("class", "hidden")        
}

var axeBowSwordProtrudingFlyingFireworks_11NpcLeft = () => {
    $topFirework_3NpcLeft.setAttribute("class", "visible")
    $topFirework_3Z_1NpcLeft.setAttribute("class", "visible")
    $middleFirework_2NpcLeft.setAttribute("class", "visible")
    $middleFirework_2Z_2NpcLeft.setAttribute("class", "visible")
    $bottomFirework_1NpcLeft.setAttribute("class", "visible")
    $topFirework_2NpcLeft.setAttribute("class", "hidden")
    $middleFirework_1NpcLeft.setAttribute("class", "hidden")
    $bottomFirework_0NpcLeft.setAttribute("class", "hidden")        
}

var axeBowSwordProtrudingFlyingFireworks_12NpcLeft = () => {
    $topFirework_4NpcLeft.setAttribute("class", "visible")
    $topFirework_4Z_1NpcLeft.setAttribute("class", "visible")
    $middleFirework_3NpcLeft.setAttribute("class", "visible")
    $middleFirework_3Z_2NpcLeft.setAttribute("class", "visible")
    $bottomFirework_2NpcLeft.setAttribute("class", "visible")
    $topFirework_3NpcLeft.setAttribute("class", "hidden")
    $topFirework_3Z_1NpcLeft.setAttribute("class", "hidden")
    $middleFirework_2NpcLeft.setAttribute("class", "hidden")
    $middleFirework_2Z_2NpcLeft.setAttribute("class", "hidden")
    $bottomFirework_1NpcLeft.setAttribute("class", "hidden")            
}

var axeBowSwordProtrudingFlyingFireworks_13NpcLeft = () => {
    $topFirework_5NpcLeft.setAttribute("class", "visible")
    $topFirework_5Z_1NpcLeft.setAttribute("class", "visible")
    $middleFirework_4NpcLeft.setAttribute("class", "visible")
    $middleFirework_4Z_2NpcLeft.setAttribute("class", "visible")
    $bottomFirework_3NpcLeft.setAttribute("class", "visible")
    $topFirework_4NpcLeft.setAttribute("class", "hidden")
    $topFirework_4Z_1NpcLeft.setAttribute("class", "hidden")
    $middleFirework_3NpcLeft.setAttribute("class", "hidden")
    $middleFirework_3Z_2NpcLeft.setAttribute("class", "hidden")
    $bottomFirework_2NpcLeft.setAttribute("class", "hidden")                
}

var axeBowSwordProtrudingFlyingFireworks_14NpcLeft = () => {
    $topFirework_6NpcLeft.setAttribute("class", "visible")
    $topFirework_6Z_1NpcLeft.setAttribute("class", "visible")
    $topFirework_6Z_3NpcLeft.setAttribute("class", "visible")
    $middleFirework_5NpcLeft.setAttribute("class", "visible")
    $middleFirework_5Z_2NpcLeft.setAttribute("class", "visible")
    $middleFirework_5Z_4NpcLeft.setAttribute("class", "visible")
    $bottomFirework_4NpcLeft.setAttribute("class", "visible")
    $topFirework_5NpcLeft.setAttribute("class", "hidden")
    $topFirework_5Z_1NpcLeft.setAttribute("class", "hidden")
    $middleFirework_4NpcLeft.setAttribute("class", "hidden")
    $middleFirework_4Z_2NpcLeft.setAttribute("class", "hidden")
    $bottomFirework_3NpcLeft.setAttribute("class", "hidden")                    
}

var axeBowSwordFireworkExplodesNpcLeft = () => {
    $axeBowSwordFireworkExplosionNpcLeft.setAttribute("class", "visible")
    $topFirework_6NpcLeft.setAttribute("class", "hidden")
    $topFirework_6Z_1NpcLeft.setAttribute("class", "hidden")
    $topFirework_6Z_3NpcLeft.setAttribute("class", "hidden")
    $middleFirework_5NpcLeft.setAttribute("class", "hidden")
    $middleFirework_5Z_2NpcLeft.setAttribute("class", "hidden")
    $middleFirework_5Z_4NpcLeft.setAttribute("class", "hidden")
    $bottomFirework_4NpcLeft.setAttribute("class", "hidden")                        
}

var axeBowSwordFireworkDisplays_0NpcLeft = () => {
    $axeBowSwordSmokeNpcFullMinus10Left.setAttribute("class", "visible")
    $axeBowSwordFireworkExplosionNpcLeft.setAttribute("class", "hidden")
}

var axeBowSwordFireworkDisplays_1NpcLeft = () => {
    $axeBowSwordSmokeNpcFullMinus9Left.setAttribute("class", "visible")        
    $axeBowSwordSmokeNpcFullMinus10Left.setAttribute("class", "hidden")    
}

var axeBowSwordFireworkDisplays_2NpcLeft = () => {
    $axeBowSwordSmokeNpcFullMinus8Left.setAttribute("class", "visible")        
    $axeBowSwordSmokeNpcFullMinus9Left.setAttribute("class", "hidden")    
}

var axeBowSwordFireworkDisplays_3NpcLeft = () => {
    $axeBowSwordSmokeNpcFullMinus7Left.setAttribute("class", "visible")        
    $axeBowSwordSmokeNpcFullMinus8Left.setAttribute("class", "hidden")    
}

var axeBowSwordFireworkDisplays_4NpcLeft = () => {
    $axeBowSwordSmokeNpcFullMinus6Left.setAttribute("class", "visible")        
    $axeBowSwordSmokeNpcFullMinus7Left.setAttribute("class", "hidden")    
}

var axeBowSwordFireworkDisplays_5NpcLeft = () => {
    $axeBowSwordSmokeNpcFullMinus5Left.setAttribute("class", "visible")        
    $axeBowSwordSmokeNpcFullMinus6Left.setAttribute("class", "hidden")    
}

var axeBowSwordFireworkDisplays_6NpcLeft = () => {
    $axeBowSwordSmokeNpcFullMinus4Left.setAttribute("class", "visible")        
    $axeBowSwordSmokeNpcFullMinus5Left.setAttribute("class", "hidden")    
}

var axeBowSwordFireworkDisplays_7NpcLeft = () => {
    $axeBowSwordSmokeNpcFullMinus3Left.setAttribute("class", "visible")        
    $axeBowSwordSmokeNpcFullMinus4Left.setAttribute("class", "hidden")    
}

var axeBowSwordFireworkDisplays_8NpcLeft = () => {
    $axeBowSwordSmokeNpcFullMinus2Left.setAttribute("class", "visible")        
    $axeBowSwordSmokeNpcFullMinus3Left.setAttribute("class", "hidden")    
}

var axeBowSwordFireworkDisplays_9NpcLeft = () => {
    $axeBowSwordSmokeNpcFullMinus1Left.setAttribute("class", "visible")        
    $axeBowSwordSmokeNpcFullMinus2Left.setAttribute("class", "hidden")    
}

var axeBowSwordFireworkDisplays_10NpcLeft = () => {
    $axeBowSwordSmokeNpcFullLeft.setAttribute("class", "visible")        
    $axeBowSwordSmokeNpcFullMinus1Left.setAttribute("class", "hidden")    
}

var axeBowSwordFireworkDisplays_11NpcLeft = () => {
    $fireworkAxeNpcLeft.setAttribute("class", "visible")
    $fireworkBowNpcLeft.setAttribute("class", "visible")
    $fireworkSwordNpcLeft.setAttribute("class", "visible")
}

var axeBowSwordFireworkDisplays_12NpcLeft = () => {
    $fireworkAxeShimmerNpcFullLeft.setAttribute("class", "visible")
    $fireworkBowShimmerNpcFullLeft.setAttribute("class", "visible")
    $fireworkSwordShimmerNpcFullLeft.setAttribute("class", "visible")
    $axeBowSwordSmokeNpcFullLeft.setAttribute("class", "hidden")
}

var axeBowSwordFireworkDisplays_13NpcLeft = () => {
    $fireworkAxeNpcLeft.setAttribute("class", "hidden")
    $fireworkBowNpcLeft.setAttribute("class", "hidden")
    $fireworkSwordNpcLeft.setAttribute("class", "hidden")
}

var axeBowSwordFireworkDisplays_14NpcLeft = () => {
    $fireworkAxeShimmerNpcFullLeft.setAttribute("class", "hidden")
    $fireworkBowShimmerNpcFullLeft.setAttribute("class", "hidden")
    $fireworkSwordShimmerNpcFullLeft.setAttribute("class", "hidden")
}

var axeBowSwordProtrudingFlyingFireworks_0NpcRight = () => {
    $protrudingFireworkTop_0NpcRight.setAttribute("class", "visible")
}

var axeBowSwordProtrudingFlyingFireworks_1NpcRight = () => {
    $protrudingFireworkTop_1NpcRight.setAttribute("class", "visible")
    $protrudingFireworkMiddle_0NpcRight.setAttribute("class", "visible")
    $protrudingFireworkTop_0NpcRight.setAttribute("class", "hidden")
}

var axeBowSwordProtrudingFlyingFireworks_2NpcRight = () => {
    $protrudingFireworkTop_2NpcRight.setAttribute("class", "visible")
    $protrudingFireworkMiddle_1NpcRight.setAttribute("class", "visible")
    $protrudingFireworkBottom_0NpcRight.setAttribute("class", "visible")
    $protrudingFireworkTop_1NpcRight.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_0NpcRight.setAttribute("class", "hidden")
}

var axeBowSwordProtrudingFlyingFireworks_3NpcRight = () => {
    $protrudingFireworkTop_3NpcRight.setAttribute("class", "visible")
    $protrudingFireworkMiddle_2NpcRight.setAttribute("class", "visible")
    $protrudingFireworkBottom_1NpcRight.setAttribute("class", "visible")
    $protrudingFireworkTop_2NpcRight.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_1NpcRight.setAttribute("class", "hidden")
    $protrudingFireworkBottom_0NpcRight.setAttribute("class", "hidden")    
}

var axeBowSwordProtrudingFlyingFireworks_4NpcRight = () => {
    $protrudingFireworkTop_4NpcRight.setAttribute("class", "visible")
    $protrudingFireworkMiddle_3NpcRight.setAttribute("class", "visible")
    $protrudingFireworkBottom_2NpcRight.setAttribute("class", "visible")
    $protrudingFireworkTop_3NpcRight.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_2NpcRight.setAttribute("class", "hidden")
    $protrudingFireworkBottom_1NpcRight.setAttribute("class", "hidden")    
}

var axeBowSwordProtrudingFlyingFireworks_5NpcRight = () => {
    $protrudingFireworkTop_5NpcRight.setAttribute("class", "visible")
    $protrudingFireworkMiddle_4NpcRight.setAttribute("class", "visible")
    $protrudingFireworkBottom_3NpcRight.setAttribute("class", "visible")
    $protrudingFireworkTop_4NpcRight.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_3NpcRight.setAttribute("class", "hidden")
    $protrudingFireworkBottom_2NpcRight.setAttribute("class", "hidden")    
}

var axeBowSwordProtrudingFlyingFireworks_6NpcRight = () => {
    $protrudingFireworkTop_6NpcRight.setAttribute("class", "visible")
    $protrudingFireworkMiddle_5NpcRight.setAttribute("class", "visible")
    $protrudingFireworkBottom_4NpcRight.setAttribute("class", "visible")
    $protrudingFireworkTop_5NpcRight.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_4NpcRight.setAttribute("class", "hidden")
    $protrudingFireworkBottom_3NpcRight.setAttribute("class", "hidden")    
}

var axeBowSwordProtrudingFlyingFireworks_7NpcRight = () => {
    $protrudingFireworkTop_7NpcRight.setAttribute("class", "visible")
    $protrudingFireworkMiddle_6NpcRight.setAttribute("class", "visible")
    $protrudingFireworkBottom_5NpcRight.setAttribute("class", "visible")
    $protrudingFireworkTop_6NpcRight.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_5NpcRight.setAttribute("class", "hidden")
    $protrudingFireworkBottom_4NpcRight.setAttribute("class", "hidden")    
}

var axeBowSwordProtrudingFlyingFireworks_8NpcRight = () => {
    $topFirework_0NpcRight.setAttribute("class", "visible")
    $protrudingFireworkMiddle_7NpcRight.setAttribute("class", "visible")
    $protrudingFireworkBottom_6NpcRight.setAttribute("class", "visible")
    $protrudingFireworkTop_7NpcRight.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_6NpcRight.setAttribute("class", "hidden")
    $protrudingFireworkBottom_5NpcRight.setAttribute("class", "hidden")    
}

var axeBowSwordProtrudingFlyingFireworks_9NpcRight = () => {
    $topFirework_1NpcRight.setAttribute("class", "visible")
    $middleFirework_0NpcRight.setAttribute("class", "visible")
    $protrudingFireworkBottom_7NpcRight.setAttribute("class", "visible")
    $topFirework_0NpcRight.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_7NpcRight.setAttribute("class", "hidden")
    $protrudingFireworkBottom_6NpcRight.setAttribute("class", "hidden")    
}

var axeBowSwordProtrudingFlyingFireworks_10NpcRight = () => {
    $topFirework_2NpcRight.setAttribute("class", "visible")
    $middleFirework_1NpcRight.setAttribute("class", "visible")
    $bottomFirework_0NpcRight.setAttribute("class", "visible")
    $topFirework_1NpcRight.setAttribute("class", "hidden")
    $middleFirework_0NpcRight.setAttribute("class", "hidden")
    $protrudingFireworkBottom_7NpcRight.setAttribute("class", "hidden")        
}

var axeBowSwordProtrudingFlyingFireworks_11NpcRight = () => {
    $topFirework_3NpcRight.setAttribute("class", "visible")
    $topFirework_3Z_1NpcRight.setAttribute("class", "visible")
    $middleFirework_2NpcRight.setAttribute("class", "visible")
    $middleFirework_2Z_2NpcRight.setAttribute("class", "visible")
    $bottomFirework_1NpcRight.setAttribute("class", "visible")
    $topFirework_2NpcRight.setAttribute("class", "hidden")
    $middleFirework_1NpcRight.setAttribute("class", "hidden")
    $bottomFirework_0NpcRight.setAttribute("class", "hidden")        
}

var axeBowSwordProtrudingFlyingFireworks_12NpcRight = () => {
    $topFirework_4NpcRight.setAttribute("class", "visible")
    $topFirework_4Z_1NpcRight.setAttribute("class", "visible")
    $middleFirework_3NpcRight.setAttribute("class", "visible")
    $middleFirework_3Z_2NpcRight.setAttribute("class", "visible")
    $bottomFirework_2NpcRight.setAttribute("class", "visible")
    $topFirework_3NpcRight.setAttribute("class", "hidden")
    $topFirework_3Z_1NpcRight.setAttribute("class", "hidden")
    $middleFirework_2NpcRight.setAttribute("class", "hidden")
    $middleFirework_2Z_2NpcRight.setAttribute("class", "hidden")
    $bottomFirework_1NpcRight.setAttribute("class", "hidden")            
}

var axeBowSwordProtrudingFlyingFireworks_13NpcRight = () => {
    $topFirework_5NpcRight.setAttribute("class", "visible")
    $topFirework_5Z_1NpcRight.setAttribute("class", "visible")
    $middleFirework_4NpcRight.setAttribute("class", "visible")
    $middleFirework_4Z_2NpcRight.setAttribute("class", "visible")
    $bottomFirework_3NpcRight.setAttribute("class", "visible")
    $topFirework_4NpcRight.setAttribute("class", "hidden")
    $topFirework_4Z_1NpcRight.setAttribute("class", "hidden")
    $middleFirework_3NpcRight.setAttribute("class", "hidden")
    $middleFirework_3Z_2NpcRight.setAttribute("class", "hidden")
    $bottomFirework_2NpcRight.setAttribute("class", "hidden")                
}

var axeBowSwordProtrudingFlyingFireworks_14NpcRight = () => {
    $topFirework_6NpcRight.setAttribute("class", "visible")
    $topFirework_6Z_1NpcRight.setAttribute("class", "visible")
    $topFirework_6Z_3NpcRight.setAttribute("class", "visible")
    $middleFirework_5NpcRight.setAttribute("class", "visible")
    $middleFirework_5Z_2NpcRight.setAttribute("class", "visible")
    $middleFirework_5Z_4NpcRight.setAttribute("class", "visible")
    $bottomFirework_4NpcRight.setAttribute("class", "visible")
    $topFirework_5NpcRight.setAttribute("class", "hidden")
    $topFirework_5Z_1NpcRight.setAttribute("class", "hidden")
    $middleFirework_4NpcRight.setAttribute("class", "hidden")
    $middleFirework_4Z_2NpcRight.setAttribute("class", "hidden")
    $bottomFirework_3NpcRight.setAttribute("class", "hidden")                    
}

var axeBowSwordFireworkExplodesNpcRight = () => {
    $axeBowSwordFireworkExplosionNpcRight.setAttribute("class", "visible")
    $topFirework_6NpcRight.setAttribute("class", "hidden")
    $topFirework_6Z_1NpcRight.setAttribute("class", "hidden")
    $topFirework_6Z_3NpcRight.setAttribute("class", "hidden")
    $middleFirework_5NpcRight.setAttribute("class", "hidden")
    $middleFirework_5Z_2NpcRight.setAttribute("class", "hidden")
    $middleFirework_5Z_4NpcRight.setAttribute("class", "hidden")
    $bottomFirework_4NpcRight.setAttribute("class", "hidden")                        
}

var axeBowSwordFireworkDisplays_0NpcRight = () => {
    $axeBowSwordSmokeNpcFullMinus10Right.setAttribute("class", "visible")
    $axeBowSwordFireworkExplosionNpcRight.setAttribute("class", "hidden")
}

var axeBowSwordFireworkDisplays_1NpcRight = () => {
    $axeBowSwordSmokeNpcFullMinus9Right.setAttribute("class", "visible")        
    $axeBowSwordSmokeNpcFullMinus10Right.setAttribute("class", "hidden")    
}

var axeBowSwordFireworkDisplays_2NpcRight = () => {
    $axeBowSwordSmokeNpcFullMinus8Right.setAttribute("class", "visible")        
    $axeBowSwordSmokeNpcFullMinus9Right.setAttribute("class", "hidden")    
}

var axeBowSwordFireworkDisplays_3NpcRight = () => {
    $axeBowSwordSmokeNpcFullMinus7Right.setAttribute("class", "visible")        
    $axeBowSwordSmokeNpcFullMinus8Right.setAttribute("class", "hidden")    
}

var axeBowSwordFireworkDisplays_4NpcRight = () => {
    $axeBowSwordSmokeNpcFullMinus6Right.setAttribute("class", "visible")        
    $axeBowSwordSmokeNpcFullMinus7Right.setAttribute("class", "hidden")    
}

var axeBowSwordFireworkDisplays_5NpcRight = () => {
    $axeBowSwordSmokeNpcFullMinus5Right.setAttribute("class", "visible")        
    $axeBowSwordSmokeNpcFullMinus6Right.setAttribute("class", "hidden")    
}

var axeBowSwordFireworkDisplays_6NpcRight = () => {
    $axeBowSwordSmokeNpcFullMinus4Right.setAttribute("class", "visible")        
    $axeBowSwordSmokeNpcFullMinus5Right.setAttribute("class", "hidden")    
}

var axeBowSwordFireworkDisplays_7NpcRight = () => {
    $axeBowSwordSmokeNpcFullMinus3Right.setAttribute("class", "visible")        
    $axeBowSwordSmokeNpcFullMinus4Right.setAttribute("class", "hidden")    
}

var axeBowSwordFireworkDisplays_8NpcRight = () => {
    $axeBowSwordSmokeNpcFullMinus2Right.setAttribute("class", "visible")        
    $axeBowSwordSmokeNpcFullMinus3Right.setAttribute("class", "hidden")    
}

var axeBowSwordFireworkDisplays_9NpcRight = () => {
    $axeBowSwordSmokeNpcFullMinus1Right.setAttribute("class", "visible")        
    $axeBowSwordSmokeNpcFullMinus2Right.setAttribute("class", "hidden")    
}

var axeBowSwordFireworkDisplays_10NpcRight = () => {
    $axeBowSwordSmokeNpcFullRight.setAttribute("class", "visible")        
    $axeBowSwordSmokeNpcFullMinus1Right.setAttribute("class", "hidden")    
}

var axeBowSwordFireworkDisplays_11NpcRight = () => {
    $fireworkAxeNpcRight.setAttribute("class", "visible")
    $fireworkBowNpcRight.setAttribute("class", "visible")
    $fireworkSwordNpcRight.setAttribute("class", "visible")
}

var axeBowSwordFireworkDisplays_12NpcRight = () => {
    $fireworkAxeShimmerNpcFullRight.setAttribute("class", "visible")
    $fireworkBowShimmerNpcFullRight.setAttribute("class", "visible")
    $fireworkSwordShimmerNpcFullRight.setAttribute("class", "visible")
    $axeBowSwordSmokeNpcFullRight.setAttribute("class", "hidden")
}

var axeBowSwordFireworkDisplays_13NpcRight = () => {
    $fireworkAxeNpcRight.setAttribute("class", "hidden")
    $fireworkBowNpcRight.setAttribute("class", "hidden")
    $fireworkSwordNpcRight.setAttribute("class", "hidden")
}

var axeBowSwordFireworkDisplays_14NpcRight = () => {
    $fireworkAxeShimmerNpcFullRight.setAttribute("class", "hidden")
    $fireworkBowShimmerNpcFullRight.setAttribute("class", "hidden")
    $fireworkSwordShimmerNpcFullRight.setAttribute("class", "hidden")
}

//pc redWiz

var redWizPcDefendsLeft = () => {
    $redWizPcDefendLeft.setAttribute("class", "visible")
}

var redWizPcDefendsRight = () => {
    $redWizPcDefendRight.setAttribute("class", "visible")
}

var redWizPcRestsLeft = () => {    
    $redWizPcDefendLeft.setAttribute("class", "hidden")     
}

var redWizPcRestsRight = () => {    
    $redWizPcDefendRight.setAttribute("class", "hidden")     
}

var redWizPcStruckLeft = () => {
    $redWizPc.setAttribute("class", "hidden")
    $redWizPcDefendRight.setAttribute("class", "hidden")
    $redWizPcStruckLeft.setAttribute("class", "visible")
}

var redWizPcStruckRight = () => {
    $redWizPc.setAttribute("class", "hidden")
    $redWizPcDefendLeft.setAttribute("class", "hidden")
    $redWizPcStruckRight.setAttribute("class", "visible")
}

var redWizPcRegainsComposureLeft = () => {
    $redWizPc.setAttribute("class", "visible")
    $redWizPcStruckLeft.setAttribute("class", "hidden")
}

var redWizPcRegainsComposureRight = () => {
    $redWizPc.setAttribute("class", "visible")
    $redWizPcStruckRight.setAttribute("class", "hidden")
}

//npc redWiz

var redWizNpcDefendsLeft = () => {
    $redWizNpcDefendLeft.setAttribute("class", "visible")
}

var redWizNpcDefendsRight = () => {
    $redWizNpcDefendRight.setAttribute("class", "visible")
}

var redWizNpcRestsLeft = () => {    
    $redWizNpcDefendLeft.setAttribute("class", "hidden")     
}

var redWizNpcRestsRight = () => {    
    $redWizNpcDefendRight.setAttribute("class", "hidden")     
}

var redWizNpcStruckLeft = () => {
    $redWizNpc.setAttribute("class", "hidden")
    $redWizNpcDefendRight.setAttribute("class", "hidden")
    $redWizNpcStruckLeft.setAttribute("class", "visible")
}

var redWizNpcStruckRight = () => {
    $redWizNpc.setAttribute("class", "hidden")
    $redWizNpcDefendLeft.setAttribute("class", "hidden")
    $redWizNpcStruckRight.setAttribute("class", "visible")
}

var redWizNpcRegainsComposureLeft = () => {
    $redWizNpc.setAttribute("class", "visible")
    $redWizNpcStruckLeft.setAttribute("class", "hidden")
}

var redWizNpcRegainsComposureRight = () => {
    $redWizNpc.setAttribute("class", "visible")
    $redWizNpcStruckRight.setAttribute("class", "hidden")
}

window.onload = init;

//greyPcAttackLeftGreyNpcDefendRight axeBowSword

setTimeout(greyWizPcBackground, 1);
setTimeout(setSceneWithGreyNpc, 2);
setTimeout(setSceneWithGreyPc, 3);
setTimeout(greyWizNpcDefendsRight, 200);
setTimeout(greyWizArmPcRotationForAttack_0Left, 400);
setTimeout(greyWizArmPcRotationForAttack_1Left, 600);
setTimeout(greyWizArmPcRotationForAttack_2Left, 800);
setTimeout(axeBowSwordProtrudingFlyingFireworks_0PcLeft, 950);
setTimeout(axeBowSwordProtrudingFlyingFireworks_1PcLeft, 1100);
setTimeout(axeBowSwordProtrudingFlyingFireworks_2PcLeft, 1300);
setTimeout(axeBowSwordProtrudingFlyingFireworks_3PcLeft, 1500);
setTimeout(axeBowSwordProtrudingFlyingFireworks_4PcLeft, 1700);
setTimeout(axeBowSwordProtrudingFlyingFireworks_5PcLeft, 1900);
setTimeout(axeBowSwordProtrudingFlyingFireworks_6PcLeft, 2100);
setTimeout(axeBowSwordProtrudingFlyingFireworks_7PcLeft, 2350);
setTimeout(axeBowSwordProtrudingFlyingFireworks_8PcLeft, 2600);
setTimeout(axeBowSwordProtrudingFlyingFireworks_9PcLeft, 2850);
setTimeout(axeBowSwordProtrudingFlyingFireworks_10PcLeft, 3100);
setTimeout(axeBowSwordProtrudingFlyingFireworks_11PcLeft, 3350);
setTimeout(axeBowSwordProtrudingFlyingFireworks_12PcLeft, 3600);
setTimeout(greyWizArmPcRotationBackFromAttack_0Left, 3601);
setTimeout(axeBowSwordProtrudingFlyingFireworks_13PcLeft, 3850);
setTimeout(greyWizArmPcRotationBackFromAttack_1Left, 3851);
setTimeout(axeBowSwordProtrudingFlyingFireworks_14PcLeft, 4100);
setTimeout(greyWizArmPcRotationBackFromAttack_2Left, 4101);
setTimeout(axeBowSwordFireworkExplodesPcLeft, 4400);
setTimeout(greyWizNpcStruckLeft, 4401);
setTimeout(axeBowSwordFireworkDisplays_0PcLeft, 4700);
setTimeout(axeBowSwordFireworkDisplays_1PcLeft, 4790);
setTimeout(axeBowSwordFireworkDisplays_2PcLeft, 4880);
setTimeout(axeBowSwordFireworkDisplays_3PcLeft, 4970);
setTimeout(axeBowSwordFireworkDisplays_4PcLeft, 5060);
setTimeout(axeBowSwordFireworkDisplays_5PcLeft, 5150);
setTimeout(axeBowSwordFireworkDisplays_6PcLeft, 5240);
setTimeout(greyWizNpcRegainsComposureLeft, 5330);
setTimeout(axeBowSwordFireworkDisplays_7PcLeft, 5420);
setTimeout(axeBowSwordFireworkDisplays_8PcLeft, 5510);
setTimeout(axeBowSwordFireworkDisplays_9PcLeft, 5600);
setTimeout(axeBowSwordFireworkDisplays_10PcLeft, 5601);
setTimeout(axeBowSwordFireworkDisplays_11PcLeft, 5690);
setTimeout(axeBowSwordFireworkDisplays_12PcLeft, 5800);
setTimeout(axeBowSwordFireworkDisplays_13PcLeft, 5910);
setTimeout(axeBowSwordFireworkDisplays_14PcLeft, 6020);
setTimeout(cleanSceneOfGreyNpc, 6100);
setTimeout(cleanSceneOfGreyPc, 6101);

//greyPcDefendLeftGreyNpcAttackRight axe 

setTimeout(greyWizPcBackground, 6151+1);
setTimeout(setSceneWithGreyPc, 6151+2);
setTimeout(setSceneWithGreyNpc, 6151+3);
setTimeout(greyWizPcDefendsLeft, 6151+200);
setTimeout(greyWizArmNpcRotationForAttack_0Right, 6151+400);
setTimeout(greyWizArmNpcRotationForAttack_1Right, 6151+600);
setTimeout(greyWizArmNpcRotationForAttack_2Right, 6151+800);
setTimeout(axeProtrudingFlyingFireworks_0NpcRight, 6151+950);
setTimeout(axeProtrudingFlyingFireworks_1NpcRight, 6151+1100);
setTimeout(axeProtrudingFlyingFireworks_2NpcRight, 6151+1300);
setTimeout(axeProtrudingFlyingFireworks_3NpcRight, 6151+1500);
setTimeout(axeProtrudingFlyingFireworks_4NpcRight, 6151+1700);
setTimeout(axeProtrudingFlyingFireworks_5NpcRight, 6151+1900);
setTimeout(axeProtrudingFlyingFireworks_6NpcRight, 6151+2100);
setTimeout(axeProtrudingFlyingFireworks_7NpcRight, 6151+2350);
setTimeout(axeProtrudingFlyingFireworks_8NpcRight, 6151+2600);
setTimeout(axeProtrudingFlyingFireworks_9NpcRight, 6151+2850);
setTimeout(axeProtrudingFlyingFireworks_10NpcRight, 6151+3100);
setTimeout(axeProtrudingFlyingFireworks_11NpcRight, 6151+3350);
setTimeout(axeProtrudingFlyingFireworks_12NpcRight, 6151+3600);
setTimeout(greyWizArmNpcRotationBackFromAttack_0Right, 6151+3601);
setTimeout(axeProtrudingFlyingFireworks_13NpcRight, 6151+3850);
setTimeout(greyWizArmNpcRotationBackFromAttack_1Right, 6151+3851);
setTimeout(axeProtrudingFlyingFireworks_14NpcRight, 6151+4100);
setTimeout(greyWizArmNpcRotationBackFromAttack_2Right, 6151+4101);
setTimeout(axeFireworkExplodesNpcRight, 6151+4400);
setTimeout(greyWizPcStruckRight, 6151+4401);
setTimeout(axeFireworkDisplays_0NpcRight, 6151+4700);
setTimeout(axeFireworkDisplays_1NpcRight, 6151+4790);
setTimeout(axeFireworkDisplays_2NpcRight, 6151+4880);
setTimeout(axeFireworkDisplays_3NpcRight, 6151+4970);
setTimeout(axeFireworkDisplays_4NpcRight, 6151+5060);
setTimeout(axeFireworkDisplays_5NpcRight, 6151+5150);
setTimeout(axeFireworkDisplays_6NpcRight, 6151+5240);
setTimeout(axeFireworkDisplays_7NpcRight, 6151+5330);
setTimeout(axeFireworkDisplays_8NpcRight, 6151+5420);
setTimeout(axeFireworkDisplays_9NpcRight, 6151+5510);
setTimeout(axeFireworkDisplays_10NpcRight, 6151+5600);
setTimeout(greyWizPcRegainsComposureRight, 6151+5601);
setTimeout(axeFireworkDisplays_11NpcRight, 6151+5690);
setTimeout(axeFireworkDisplays_12NpcRight, 6151+5800);
setTimeout(axeFireworkDisplays_13NpcRight, 6151+5910);
setTimeout(axeFireworkDisplays_14NpcRight, 6151+6020);
setTimeout(cleanSceneOfGreyPc, 6151+6100);
setTimeout(cleanSceneOfGreyNpc, 6151+6101);

//greyPcAttackRightGreyNpcDefendLeft bow 12302+

setTimeout(greyWizPcBackground, 12302+1);
setTimeout(setSceneWithGreyNpc, 12302+2);
setTimeout(setSceneWithGreyPc, 12302+3);
setTimeout(greyWizNpcDefendsLeft, 12302+200);
setTimeout(greyWizArmPcRotationForAttack_0Right, 12302+400);
setTimeout(greyWizArmPcRotationForAttack_1Right, 12302+600);
setTimeout(greyWizArmPcRotationForAttack_2Right, 12302+800);
setTimeout(bowProtrudingFlyingFireworks_0PcRight, 12302+950);
setTimeout(bowProtrudingFlyingFireworks_1PcRight, 12302+1100);
setTimeout(bowProtrudingFlyingFireworks_2PcRight, 12302+1300);
setTimeout(bowProtrudingFlyingFireworks_3PcRight, 12302+1500);
setTimeout(bowProtrudingFlyingFireworks_4PcRight, 12302+1700);
setTimeout(bowProtrudingFlyingFireworks_5PcRight, 12302+1900);
setTimeout(bowProtrudingFlyingFireworks_6PcRight, 12302+2100);
setTimeout(bowProtrudingFlyingFireworks_7PcRight, 12302+2350);
setTimeout(bowProtrudingFlyingFireworks_8PcRight, 12302+2600);
setTimeout(bowProtrudingFlyingFireworks_9PcRight, 12302+2850);
setTimeout(bowProtrudingFlyingFireworks_10PcRight, 12302+3100);
setTimeout(bowProtrudingFlyingFireworks_11PcRight, 12302+3350);
setTimeout(bowProtrudingFlyingFireworks_12PcRight, 12302+3600);
setTimeout(greyWizArmPcRotationBackFromAttack_0Right, 12302+3601);
setTimeout(bowProtrudingFlyingFireworks_13PcRight, 12302+3850);
setTimeout(greyWizArmPcRotationBackFromAttack_1Right, 12302+3851);
setTimeout(bowProtrudingFlyingFireworks_14PcRight, 12302+4100);
setTimeout(greyWizArmPcRotationBackFromAttack_2Right, 12302+4101);
setTimeout(bowFireworkExplodesPcRight, 12302+4400);
setTimeout(greyWizNpcStruckRight, 12302+4401);
setTimeout(bowFireworkDisplays_0PcRight, 12302+4700);
setTimeout(bowFireworkDisplays_1PcRight, 12302+4790);
setTimeout(bowFireworkDisplays_2PcRight, 12302+4880);
setTimeout(bowFireworkDisplays_3PcRight, 12302+4970);
setTimeout(bowFireworkDisplays_4PcRight, 12302+5060);
setTimeout(bowFireworkDisplays_5PcRight, 12302+5150);
setTimeout(bowFireworkDisplays_6PcRight, 12302+5240);
setTimeout(bowFireworkDisplays_7PcRight, 12302+5330);
setTimeout(bowFireworkDisplays_8PcRight, 12302+5420);
setTimeout(bowFireworkDisplays_9PcRight, 12302+5510);
setTimeout(bowFireworkDisplays_10PcRight, 12302+5600);
setTimeout(greyWizNpcRegainsComposureRight, 12302+5601);
setTimeout(bowFireworkDisplays_11PcRight, 12302+5690);
setTimeout(bowFireworkDisplays_12PcRight, 12302+5800);
setTimeout(bowFireworkDisplays_13PcRight, 12302+5910);
setTimeout(bowFireworkDisplays_14PcRight, 12302+6020);
setTimeout(cleanSceneOfGreyNpc, 12302+6100);
setTimeout(cleanSceneOfGreyPc, 12302+6101);

//greyPcDefendRightGreyNpcAttackLeft sword

setTimeout(greyWizPcBackground, 18453+1);
setTimeout(setSceneWithGreyPc, 18453+2);
setTimeout(setSceneWithGreyNpc, 18453+3);
setTimeout(greyWizPcDefendsRight, 18453+200);
setTimeout(greyWizArmNpcRotationForAttack_0Left, 18453+400);
setTimeout(greyWizArmNpcRotationForAttack_1Left, 18453+600);
setTimeout(greyWizArmNpcRotationForAttack_2Left, 18453+800);
setTimeout(swordProtrudingFlyingFireworks_0NpcLeft, 18453+950);
setTimeout(swordProtrudingFlyingFireworks_1NpcLeft, 18453+1100);
setTimeout(swordProtrudingFlyingFireworks_2NpcLeft, 18453+1300);
setTimeout(swordProtrudingFlyingFireworks_3NpcLeft, 18453+1500);
setTimeout(swordProtrudingFlyingFireworks_4NpcLeft, 18453+1700);
setTimeout(swordProtrudingFlyingFireworks_5NpcLeft, 18453+1900);
setTimeout(swordProtrudingFlyingFireworks_6NpcLeft, 18453+2100);
setTimeout(swordProtrudingFlyingFireworks_7NpcLeft, 18453+2350);
setTimeout(swordProtrudingFlyingFireworks_8NpcLeft, 18453+2600);
setTimeout(swordProtrudingFlyingFireworks_9NpcLeft, 18453+2850);
setTimeout(swordProtrudingFlyingFireworks_10NpcLeft, 18453+3100);
setTimeout(swordProtrudingFlyingFireworks_11NpcLeft, 18453+3350);
setTimeout(swordProtrudingFlyingFireworks_12NpcLeft, 18453+3600);
setTimeout(greyWizArmNpcRotationBackFromAttack_0Left, 18453+3601);
setTimeout(swordProtrudingFlyingFireworks_13NpcLeft, 18453+3850);
setTimeout(greyWizArmNpcRotationBackFromAttack_1Left, 18453+3851);
setTimeout(swordProtrudingFlyingFireworks_14NpcLeft, 18453+4100);
setTimeout(greyWizArmNpcRotationBackFromAttack_2Left, 18453+4101);
setTimeout(swordFireworkExplodesNpcLeft, 18453+4400);
setTimeout(greyWizPcStruckLeft, 18453+4401);
setTimeout(swordFireworkDisplays_0NpcLeft, 18453+4700);
setTimeout(swordFireworkDisplays_1NpcLeft, 18453+4790);
setTimeout(swordFireworkDisplays_2NpcLeft, 18453+4880);
setTimeout(swordFireworkDisplays_3NpcLeft, 18453+4970);
setTimeout(swordFireworkDisplays_4NpcLeft, 18453+5060);
setTimeout(swordFireworkDisplays_5NpcLeft, 18453+5150);
setTimeout(swordFireworkDisplays_6NpcLeft, 18453+5240);
setTimeout(swordFireworkDisplays_7NpcLeft, 18453+5330);
setTimeout(swordFireworkDisplays_8NpcLeft, 18453+5420);
setTimeout(swordFireworkDisplays_9NpcLeft, 18453+5510);
setTimeout(swordFireworkDisplays_10NpcLeft, 18453+5600);
setTimeout(greyWizPcRegainsComposureLeft, 18453+5601);
setTimeout(swordFireworkDisplays_11NpcLeft, 18453+5690);
setTimeout(swordFireworkDisplays_12NpcLeft, 18453+5800);
setTimeout(swordFireworkDisplays_13NpcLeft, 18453+5910);
setTimeout(swordFireworkDisplays_14NpcLeft, 18453+6020);
setTimeout(cleanSceneOfGreyPc, 18453+6100);
setTimeout(cleanSceneOfGreyNpc, 18453+6101);

//greyPcAttackLeftGreyNpcDefendRight axeBow 

setTimeout(greyWizPcBackground, 24604+1);
setTimeout(setSceneWithGreyNpc, 24604+2);
setTimeout(setSceneWithGreyPc, 24604+3);
setTimeout(greyWizNpcDefendsRight, 24604+200);
setTimeout(greyWizArmPcRotationForAttack_0Left, 24604+400);
setTimeout(greyWizArmPcRotationForAttack_1Left, 24604+600);
setTimeout(greyWizArmPcRotationForAttack_2Left, 24604+800);
setTimeout(axeBowProtrudingFlyingFireworks_0PcLeft, 24604+950);
setTimeout(axeBowProtrudingFlyingFireworks_1PcLeft, 24604+1100);
setTimeout(axeBowProtrudingFlyingFireworks_2PcLeft, 24604+1300);
setTimeout(axeBowProtrudingFlyingFireworks_3PcLeft, 24604+1500);
setTimeout(axeBowProtrudingFlyingFireworks_4PcLeft, 24604+1700);
setTimeout(axeBowProtrudingFlyingFireworks_5PcLeft, 24604+1900);
setTimeout(axeBowProtrudingFlyingFireworks_6PcLeft, 24604+2100);
setTimeout(axeBowProtrudingFlyingFireworks_7PcLeft, 24604+2350);
setTimeout(axeBowProtrudingFlyingFireworks_8PcLeft, 24604+2600);
setTimeout(axeBowProtrudingFlyingFireworks_9PcLeft, 24604+2850);
setTimeout(axeBowProtrudingFlyingFireworks_10PcLeft, 24604+3100);
setTimeout(axeBowProtrudingFlyingFireworks_11PcLeft, 24604+3350);
setTimeout(axeBowProtrudingFlyingFireworks_12PcLeft, 24604+3600);
setTimeout(greyWizArmPcRotationBackFromAttack_0Left, 24604+3601);
setTimeout(axeBowProtrudingFlyingFireworks_13PcLeft, 24604+3850);
setTimeout(greyWizArmPcRotationBackFromAttack_1Left, 24604+3851);
setTimeout(axeBowProtrudingFlyingFireworks_14PcLeft, 24604+4100);
setTimeout(greyWizArmPcRotationBackFromAttack_2Left, 24604+4101);
setTimeout(axeBowFireworkExplodesPcLeft, 24604+4400);
setTimeout(greyWizNpcStruckLeft, 24604+4401);
setTimeout(axeBowFireworkDisplays_0PcLeft, 24604+4700);
setTimeout(axeBowFireworkDisplays_1PcLeft, 24604+4790);
setTimeout(axeBowFireworkDisplays_2PcLeft, 24604+4880);
setTimeout(axeBowFireworkDisplays_3PcLeft, 24604+4970);
setTimeout(axeBowFireworkDisplays_4PcLeft, 24604+5060);
setTimeout(axeBowFireworkDisplays_5PcLeft, 24604+5150);
setTimeout(axeBowFireworkDisplays_6PcLeft, 24604+5240);
setTimeout(axeBowFireworkDisplays_7PcLeft, 24604+5330);
setTimeout(axeBowFireworkDisplays_8PcLeft, 24604+5420);
setTimeout(axeBowFireworkDisplays_9PcLeft, 24604+5510);
setTimeout(axeBowFireworkDisplays_10PcLeft, 24604+5600);
setTimeout(greyWizNpcRegainsComposureLeft, 24604+5601);
setTimeout(axeBowFireworkDisplays_11PcLeft, 24604+5690);
setTimeout(axeBowFireworkDisplays_12PcLeft, 24604+5800);
setTimeout(axeBowFireworkDisplays_13PcLeft, 24604+5910);
setTimeout(axeBowFireworkDisplays_14PcLeft, 24604+6020);
setTimeout(cleanSceneOfGreyNpc, 24604+6100);
setTimeout(cleanSceneOfGreyPc, 24604+6101);

//greyPcDefendLeftGreyNpcAttackRight axeSword 

setTimeout(greyWizPcBackground, 30755+1);
setTimeout(setSceneWithGreyPc, 30755+2);
setTimeout(setSceneWithGreyNpc, 30755+3);
setTimeout(greyWizPcDefendsLeft, 30755+200);
setTimeout(greyWizArmNpcRotationForAttack_0Right, 30755+400);
setTimeout(greyWizArmNpcRotationForAttack_1Right, 30755+600);
setTimeout(greyWizArmNpcRotationForAttack_2Right, 30755+800);
setTimeout(axeSwordProtrudingFlyingFireworks_0NpcRight, 30755+950);
setTimeout(axeSwordProtrudingFlyingFireworks_1NpcRight, 30755+1100);
setTimeout(axeSwordProtrudingFlyingFireworks_2NpcRight, 30755+1300);
setTimeout(axeSwordProtrudingFlyingFireworks_3NpcRight, 30755+1500);
setTimeout(axeSwordProtrudingFlyingFireworks_4NpcRight, 30755+1700);
setTimeout(axeSwordProtrudingFlyingFireworks_5NpcRight, 30755+1900);
setTimeout(axeSwordProtrudingFlyingFireworks_6NpcRight, 30755+2100);
setTimeout(axeSwordProtrudingFlyingFireworks_7NpcRight, 30755+2350);
setTimeout(axeSwordProtrudingFlyingFireworks_8NpcRight, 30755+2600);
setTimeout(axeSwordProtrudingFlyingFireworks_9NpcRight, 30755+2850);
setTimeout(axeSwordProtrudingFlyingFireworks_10NpcRight, 30755+3100);
setTimeout(axeSwordProtrudingFlyingFireworks_11NpcRight, 30755+3350);
setTimeout(axeSwordProtrudingFlyingFireworks_12NpcRight, 30755+3600);
setTimeout(greyWizArmNpcRotationBackFromAttack_0Right, 30755+3601);
setTimeout(axeSwordProtrudingFlyingFireworks_13NpcRight, 30755+3850);
setTimeout(greyWizArmNpcRotationBackFromAttack_1Right, 30755+3851);
setTimeout(axeSwordProtrudingFlyingFireworks_14NpcRight, 30755+4100);
setTimeout(greyWizArmNpcRotationBackFromAttack_2Right, 30755+4101);
setTimeout(axeSwordFireworkExplodesNpcRight, 30755+4400);
setTimeout(greyWizPcStruckRight, 30755+4401);
setTimeout(axeSwordFireworkDisplays_0NpcRight, 30755+4700);
setTimeout(axeSwordFireworkDisplays_1NpcRight, 30755+4790);
setTimeout(axeSwordFireworkDisplays_2NpcRight, 30755+4880);
setTimeout(axeSwordFireworkDisplays_3NpcRight, 30755+4970);
setTimeout(axeSwordFireworkDisplays_4NpcRight, 30755+5060);
setTimeout(axeSwordFireworkDisplays_5NpcRight, 30755+5150);
setTimeout(axeSwordFireworkDisplays_6NpcRight, 30755+5240);
setTimeout(axeSwordFireworkDisplays_7NpcRight, 30755+5330);
setTimeout(axeSwordFireworkDisplays_8NpcRight, 30755+5420);
setTimeout(axeSwordFireworkDisplays_9NpcRight, 30755+5510);
setTimeout(axeSwordFireworkDisplays_10NpcRight, 30755+5600);
setTimeout(greyWizPcRegainsComposureRight, 30755+5601);
setTimeout(axeSwordFireworkDisplays_11NpcRight, 30755+5690);
setTimeout(axeSwordFireworkDisplays_12NpcRight, 30755+5800);
setTimeout(axeSwordFireworkDisplays_13NpcRight, 30755+5910);
setTimeout(axeSwordFireworkDisplays_14NpcRight, 30755+6020);
setTimeout(cleanSceneOfGreyPc, 30755+6100);
setTimeout(cleanSceneOfGreyNpc, 30755+6101);

//greyPcAttackRightGreyNpcDefendLeft bowSword 

setTimeout(greyWizPcBackground, 36906+1);
setTimeout(setSceneWithGreyNpc, 36906+2);
setTimeout(setSceneWithGreyPc, 36906+3);
setTimeout(greyWizNpcDefendsLeft, 36906+200);
setTimeout(greyWizArmPcRotationForAttack_0Right, 36906+400);
setTimeout(greyWizArmPcRotationForAttack_1Right, 36906+600);
setTimeout(greyWizArmPcRotationForAttack_2Right, 36906+800);
setTimeout(bowSwordProtrudingFlyingFireworks_0PcRight, 36906+950);
setTimeout(bowSwordProtrudingFlyingFireworks_1PcRight, 36906+1100);
setTimeout(bowSwordProtrudingFlyingFireworks_2PcRight, 36906+1300);
setTimeout(bowSwordProtrudingFlyingFireworks_3PcRight, 36906+1500);
setTimeout(bowSwordProtrudingFlyingFireworks_4PcRight, 36906+1700);
setTimeout(bowSwordProtrudingFlyingFireworks_5PcRight, 36906+1900);
setTimeout(bowSwordProtrudingFlyingFireworks_6PcRight, 36906+2100);
setTimeout(bowSwordProtrudingFlyingFireworks_7PcRight, 36906+2350);
setTimeout(bowSwordProtrudingFlyingFireworks_8PcRight, 36906+2600);
setTimeout(bowSwordProtrudingFlyingFireworks_9PcRight, 36906+2850);
setTimeout(bowSwordProtrudingFlyingFireworks_10PcRight, 36906+3100);
setTimeout(bowSwordProtrudingFlyingFireworks_11PcRight, 36906+3350);
setTimeout(bowSwordProtrudingFlyingFireworks_12PcRight, 36906+3600);
setTimeout(greyWizArmPcRotationBackFromAttack_0Right, 36906+3601);
setTimeout(bowSwordProtrudingFlyingFireworks_13PcRight, 36906+3850);
setTimeout(greyWizArmPcRotationBackFromAttack_1Right, 36906+3851);
setTimeout(bowSwordProtrudingFlyingFireworks_14PcRight, 36906+4100);
setTimeout(greyWizArmPcRotationBackFromAttack_2Right, 36906+4101);
setTimeout(bowSwordFireworkExplodesPcRight, 36906+4400);
setTimeout(greyWizNpcStruckRight, 36906+4401);
setTimeout(bowSwordFireworkDisplays_0PcRight, 36906+4700);
setTimeout(bowSwordFireworkDisplays_1PcRight, 36906+4790);
setTimeout(bowSwordFireworkDisplays_2PcRight, 36906+4880);
setTimeout(bowSwordFireworkDisplays_3PcRight, 36906+4970);
setTimeout(bowSwordFireworkDisplays_4PcRight, 36906+5060);
setTimeout(bowSwordFireworkDisplays_5PcRight, 36906+5150);
setTimeout(bowSwordFireworkDisplays_6PcRight, 36906+5240);
setTimeout(bowSwordFireworkDisplays_7PcRight, 36906+5330);
setTimeout(bowSwordFireworkDisplays_8PcRight, 36906+5420);
setTimeout(bowSwordFireworkDisplays_9PcRight, 36906+5510);
setTimeout(bowSwordFireworkDisplays_10PcRight, 36906+5600);
setTimeout(greyWizNpcRegainsComposureRight, 36906+5601);
setTimeout(bowSwordFireworkDisplays_11PcRight, 36906+5690);
setTimeout(bowSwordFireworkDisplays_12PcRight, 36906+5800);
setTimeout(bowSwordFireworkDisplays_13PcRight, 36906+5910);
setTimeout(bowSwordFireworkDisplays_14PcRight, 36906+6020);
setTimeout(cleanSceneOfGreyNpc, 36906+6100);
setTimeout(cleanSceneOfGreyPc, 36906+6101);