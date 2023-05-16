let settings = 
{
    colorJitterH: 0.007,
    colorJitterS: 0.01,
    colorJitterV: 0.015,

    trunkSettings: 
    {
        growSpeed: 0.3,
        emitterLifetimeMin: 830,
        emitterLifetimeMax: 1000,
        particleLifetimeMin: 9,
        particleLifetimeMax: 10,
    },

    maxTrunkBendMin: 0,
    maxTrunkBendMax: 0,
    trunkBendOverLife: null,
    
    barkColorA: rgb(130, 116, 84),
    barkColorB: rgb(87, 77, 57),

    trunkWidthOverLife: null,
    trunkBaseWidth: null,
    trunkBaseWidthMultiplier: 1.8,
    trunkBaseLifetime: 70,

    barkChunkScaleX: 0.3,
    barkChunkScaleY: 0.05,
    barkChunkWarpScaleX: 0.2,
    barkChunkWarpScaleY: 0.2,
    barkChunkWarpIntensityX: 9,
    barkChunkWarpIntensityY: 0.6,
    barkChunkBlendCurve: null,

    branchSpawnChance: 0.242,
    branchSpawnChanceOverLife: null,

    branchSettings: 
    {
        growSpeed: 0.3,
        emitterLifetimeMin: 85,
        emitterLifetimeMax: 320,
        particleLifetimeMin: 15,
        particleLifetimeMax: 15,
    },

    branchWidthOverLife: null,
    branchLengthOverTrunkLife: null,

    branchAngleMin: 40,
    branchAngleMax: 110,
    branchBendAmountMin: 30,
    branchBendAmountMax: 45,
    branchBendCurve: null,
    
    leafSpawnChance: 0.6,

    leafSettings: 
    {
        growSpeed: 0.3,
        emitterLifetimeMin: 40,
        emitterLifetimeMax: 150,
        particleLifetimeMin: 4,
        particleLifetimeMax: 7,
    },
    
    leafWidthOverLife: null,

    leafBendDownCurve: null,
    leafBendAmountMin: -3,
    leafbendAmountMax: 3,
    bendLeavesInShortestDirection: false,
    leafBendCurve: null,
    additionalLeafStartAngleMin: 0,
    additionalLeafStartAngleMax: 0,

    leafColorA: rgb(65, 38, 159),
    leafColorB: rgb(131, 97, 221)
};