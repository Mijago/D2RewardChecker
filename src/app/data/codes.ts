export enum CodeType {
  EMBLEM,
  TRANSMAT_EFFECT,
  EMOTE,
  SHADER,
}

export const CodeTypeNames = {
  [CodeType.EMBLEM]: "Emblem",
  [CodeType.EMOTE]: "Emote",
  [CodeType.SHADER]: "SShader",
  [CodeType.TRANSMAT_EFFECT]: "Transmat Effect",
}

export interface CodeInfo {
  code: string;
  name: string;
  type: CodeType;
  itemHash: number;
  collectibleHash?: number;
  shortIconUrl?: string;
  wideIconUrl?: string;
  description?: string;
}

export const Codes: CodeInfo[] = [
  {
    name: "Schrödinger's Gun",
    code: "9LX-7YC-6TX",
    type: CodeType.EMBLEM,
    itemHash: 1868330223,
    collectibleHash: 1973057929,
    shortIconUrl: "https://www.bungie.net/common/destiny2_content/icons/df0cb45f392a4258d8628ebd6da88181.jpg",
    wideIconUrl: "https://www.bungie.net/common/destiny2_content/icons/a64b3fe25e6636084442c86f67e0da48.jpg"
  },
  {
    name: "Seraphim's Gauntlets",
    code: "XVX-DKJ-CVM",
    type: CodeType.EMBLEM,
    itemHash: 1952218243,
    collectibleHash: 2056946089,
    shortIconUrl: "https://www.bungie.net/common/destiny2_content/icons/518e5957dac0a7470b86aea158abf29c.jpg",
    wideIconUrl: "https://www.bungie.net/common/destiny2_content/icons/d535803d7cf7ee6b41476af20ae12bdd.jpg"
  },
  {
    name: "Stag's Spirit",
    code: "T67-JXY-PH6",
    type: CodeType.EMBLEM,
    itemHash: 3903070392,
    collectibleHash: 1939502753 ,
    shortIconUrl: "https://www.bungie.net/common/destiny2_content/icons/1ff1cd2f35be688cde3bec3ae3d1f9bd.png",
    wideIconUrl: "https://www.bungie.net/common/destiny2_content/icons/954e0574ad57bc2bd12d9e3c7e554c19.jpg"
  },
  {
    name: "Be True",
    code: "ML3-FD4-ND9",
    type: CodeType.EMBLEM,
    itemHash: 3903070392,
    collectibleHash: 3215337910,
    shortIconUrl: "https://www.bungie.net/common/destiny2_content/icons/775aba88c3235c8a38d68ec69f1f810c.jpg",
    wideIconUrl: "https://www.bungie.net/common/destiny2_content/icons/a6d9b66f124b25ac73969ebe4bc45b90.jpg"
  },
  {
    name: "A Classy Order",
    code: "YRC-C3D-YNC",
    type: CodeType.EMBLEM,
    itemHash: 3970180840,
    collectibleHash: 3282448382,
    shortIconUrl: "https://www.bungie.net/common/destiny2_content/icons/7bde78ef4c5aefd0cfdb01b9f1366501.jpg",
    wideIconUrl: "https://www.bungie.net/common/destiny2_content/icons/adaf0e2c15610cdfff750725701222ec.jpg"
  },
  {
    name: "The Visionary",
    code: "XFV-KHP-N97",
    type: CodeType.EMBLEM,
    itemHash: 1940590820,
    collectibleHash: 908813207,
    shortIconUrl: "https://www.bungie.net/common/destiny2_content/icons/73062ecd141e011d45f5a683aacea241.jpg",
    wideIconUrl: "https://www.bungie.net/common/destiny2_content/icons/65b4047b1b83aeeeb2e628305071fcea.jpg"
  },
  {
    name: "Sequence Flourish",
    code: "7D4-PKR-MD7",
    type: CodeType.EMBLEM,
    itemHash: 3919847960,
    collectibleHash: 3232115498,
    shortIconUrl: "https://bungie.net/common/destiny2_content/icons/e0d1cde8ffe0012424afa6b352b9954d.jpg",
    wideIconUrl: "https://www.bungie.net/common/destiny2_content/icons/01e9b3863c14f9149ff4035b896ad5ed.jpg"
  },
  {
    name: "Cryonautics",
    code: "RA9-XPH-6KJ",
    type: CodeType.EMBLEM,
    itemHash: 2962058745,
    collectibleHash: 4137754755,
    shortIconUrl: "https://bungie.net/common/destiny2_content/icons/5e464d751c38781067f43a4d9d3da37b.png",
    wideIconUrl: "https://bungie.net/common/destiny2_content/icons/6719dde48dca592addb4102cb747e097.jpg"
  },
  {
    name: "Galilean Excursion",
    code: "JYN-JAA-Y7D",
    type: CodeType.EMBLEM,
    itemHash: 3903070392,
    collectibleHash: 4137754753,
    shortIconUrl: "https://bungie.net/common/destiny2_content/icons/a9d3db19c2e2d9bf4bae84c9cb51f6ab.png",
    wideIconUrl: "https://bungie.net/common/destiny2_content/icons/3e99d575d00fb307c15fb5513dee13c6.jpg"
  },
  {
    name: "Future in Shadow",
    code: "7LV-GTK-T7J",
    type: CodeType.EMBLEM,
    itemHash: 2962058746,
    collectibleHash: 4137754752,
    shortIconUrl: "https://bungie.net/common/destiny2_content/icons/4be0d9062b1114f73ced6a051ce26c8a.jpg",
    wideIconUrl: "https://bungie.net/common/destiny2_content/icons/dd9af60ef15319ee986a1f6cc029fe71.jpg"
  },
  {
    name: "Cоняшник",
    code: "JVG-VNT-GGG",
    type: CodeType.EMBLEM,
    itemHash: 0, //TODO
    collectibleHash: 0,//TODO
    shortIconUrl: "https://bungie.net/common/destiny2_content/icons/538d64b6a6c074f7426f515200dba835.jpg",
    wideIconUrl: "https://bungie.net/common/destiny2_content/icons/4c113db5e1c0296027a1c7e1f84fb8b3.jpg"
  },
  {
    name: "Crushed Gamma",
    code: "D97-YCX-7JK",
    type: CodeType.EMBLEM,
    itemHash: 1901885382,
    collectibleHash: 1939502752,
    shortIconUrl: "https://bungie.net/common/destiny2_content/icons/3cf8e1c3d18f4a3929da57fc58aa9c0a.jpg",
    wideIconUrl: "https://bungie.net/common/destiny2_content/icons/74ebb19b261148e4a212eae3ac3b7ccb.jpg"
  },
  {
    name: "Liminal Nadir",
    code: "VA7-L7H-PNC",
    type: CodeType.EMBLEM,
    itemHash: 3752071760,
    collectibleHash: 3399891682,
    shortIconUrl: "https://bungie.net/common/destiny2_content/icons/0085555996cf066703d7e586224233bb.jpg",
    wideIconUrl: "https://bungie.net/common/destiny2_content/icons/4f9f612716a973ff03e5e17e9d7e7c91.jpg"
  },
  {
    name: "Tangled Web",
    code: "PKH-JL6-L4R",
    type: CodeType.EMBLEM,
    itemHash: 3986958428,
    collectibleHash: 3299225966,
    shortIconUrl: "https://bungie.net/common/destiny2_content/icons/348c85451ba862c5bbdad0b34dbc5819.jpg",
    wideIconUrl: "https://bungie.net/common/destiny2_content/icons/93a14eab2b1633d7affbf815d42af337.jpg"
  },
  {
    name: "Shadow's Light",
    code: "F99-KPX-NCF",
    type: CodeType.EMBLEM,
    itemHash: 3752071761,
    collectibleHash: 3399891683,
    shortIconUrl: "https://www.bungie.net/common/destiny2_content/icons/0f7a13bb8c8b1fff7e282a99d4a1419a.jpg",
    wideIconUrl: "https://www.bungie.net/common/destiny2_content/icons/ee90bff0c4df778bbb61a854dfaba859.jpg"
  },
  {
    name: "Sneer of the Oni",
    code: "6LJ-GH7-TPA",
    type: CodeType.EMBLEM,
    itemHash: 3752071762,
    collectibleHash: 3399891680,
    shortIconUrl: "https://www.bungie.net/common/destiny2_content/icons/0a336f8bfe9b099add5eb0327ef28b4d.jpg",
    wideIconUrl: "https://www.bungie.net/common/destiny2_content/icons/287717ef89d9ad0f9154f379e1ea782d.jpg"
  },
  {
    name: "Countdown to Convergence",
    code: "PHV-6LF-9CP",
    type: CodeType.EMBLEM,
    itemHash: 3752071767,
    collectibleHash: 3399891685,
    shortIconUrl: "https://www.bungie.net/common/destiny2_content/icons/9fea4deffd47ac8131cba15ba00cef51.png",
    wideIconUrl: "https://www.bungie.net/common/destiny2_content/icons/4a2ebdb9819cb8fb98417b1d9218d41c.jpg"
  },
  {
    name: "Heliotrope Warren",
    code: "L7T-CVV-3RD",
    type: CodeType.EMBLEM,
    itemHash: 3953403263,
    collectibleHash: 3332781245,
    shortIconUrl: "https://bungie.net/common/destiny2_content/icons/2ec615bc8b933f53bdd26d4e9d46df3c.jpg",
    wideIconUrl: "https://bungie.net/common/destiny2_content/icons/385c302dc22e6dafb8b50c253486d040.jpg"
  },
  {
    name: "Jade's Burrow",
    code: "TNN-DKM-6LG",
    type: CodeType.EMBLEM,
    itemHash: 1935440657,
    collectibleHash: 2040168511,
    shortIconUrl: "https://www.bungie.net/common/destiny2_content/icons/b8ee2b71632b661aadd994b4d31821b1.png",
    wideIconUrl: "https://www.bungie.net/common/destiny2_content/icons/39cec419f52051154cfac1da606738fc.jpg"
  },
  {
    name: "Neon Mirage",
    code: "YAA-37T-FCN",
    type: CodeType.EMBLEM,
    itemHash: 1784442061,
    collectibleHash: 1822059431,
    shortIconUrl: "https://www.bungie.net/common/destiny2_content/icons/f50185eb32bcd57b139580910ecb148b.png",
    wideIconUrl: "https://www.bungie.net/common/destiny2_content/icons/6673da0f2ce1f0e3685b4cc656b337e5.jpg"
  },
  {
    name: "Visio Spei",
    code: "993-H3H-M6K",
    type: CodeType.EMBLEM,
    itemHash: 1784442060,
    collectibleHash: 1822059430,
    shortIconUrl: "https://www.bungie.net/common/destiny2_content/icons/b382525235eab61de1b5b974bc299cec.png",
    wideIconUrl: "https://www.bungie.net/common/destiny2_content/icons/66cb185a8665665411bff8b652f45f58.jpg"
  },
  {
    name: "In Urbe Inventa",
    code: "XVK-RLA-RAM",
    type: CodeType.EMBLEM,
    itemHash: 1784442063,
    collectibleHash: 1822059429,
    shortIconUrl: "https://www.bungie.net/common/destiny2_content/icons/be8541f82e6bdb9f50de7beac94f0271.png",
    wideIconUrl: "https://www.bungie.net/common/destiny2_content/icons/e6971d31c8a00c3c85f39acbcb2c9a45.jpg"
  },
  {
    name: "In Vino Mendacium",
    code: "J6P-9YH-LLP",
    type: CodeType.EMBLEM,
    itemHash: 1784442062,
    collectibleHash: 1822059428,
    shortIconUrl: "https://www.bungie.net/common/destiny2_content/icons/6769e8757272ab0b1f32550b7c3baa4e.png",
    wideIconUrl: "https://www.bungie.net/common/destiny2_content/icons/0a34ca972c6f9b2721bec974f3d13e1b.jpg"
  },
  {
    name: "Limitless Horizon",
    code: "XMY-G9M-6XH",
    type: CodeType.EMBLEM,
    itemHash: 1952218244,
    collectibleHash: 2056946094,
    shortIconUrl: "https://www.bungie.net/common/destiny2_content/icons/e3c70a21d2c0025cfe28c99c812e2e1d.png",
    wideIconUrl: "https://www.bungie.net/common/destiny2_content/icons/8a9d5815bdf5b3a3d27b1ca33eb4dd56.jpg"
  },
  {
    name: "M:\\>START",
    code: "JND-HLR-L69",
    type: CodeType.EMBLEM,
    itemHash: 4183788700,
    collectibleHash: 1670619538,
    shortIconUrl: "https://www.bungie.net/common/destiny2_content/icons/1156bc74dbea73a4e57de7ff857f7d34.png",
    wideIconUrl: "https://www.bungie.net/common/destiny2_content/icons/2d96bfd781a79915594a81ad5cd98235.jpg"
  },
  {
    name: "Harmonic Commencement",
    code: "VXN-V3T-MRP",
    type: CodeType.EMBLEM,
    itemHash: 4167011119,
    collectibleHash: 1653841957,
    shortIconUrl: "https://www.bungie.net/common/destiny2_content/icons/6c156b96fe0b56a8c255b59b362f893b.png",
    wideIconUrl: "https://www.bungie.net/common/destiny2_content/icons/a9d47d875aaa6d968c706892fb6bb784.jpg"
  },
  {
    name: "Airlock Invitation",
    code: "HN3-7K9-93G",
    type: CodeType.EMBLEM,
    itemHash: 1784442048,
    collectibleHash: 1822059434,
    shortIconUrl: "https://www.bungie.net/common/destiny2_content/icons/ed2cbbf25272ab04836f09e98f531796.png",
    wideIconUrl: "https://www.bungie.net/common/destiny2_content/icons/af1cba8c7031f0d93951cb5442ce00ba.jpg"
  },
  //----------------------------------------
  {
    name: "End of the Rainbow",
    code: "R9J-79M-J6C",
    type: CodeType.TRANSMAT_EFFECT,
    itemHash: 3549689934,
    collectibleHash: 1009936720,
    shortIconUrl: "https://www.bungie.net/common/destiny2_content/icons/ac741348c625bc6a6efe1bcebda3c48d.jpg",
    //wideIconUrl: "https://bungie.net/common/destiny2_content/icons/385c302dc22e6dafb8b50c253486d040.jpg"
  },


  //----------------------------------------
  {
    name: "Rainbow Connection",
    code: "TK7-D3P-FDF",
    type: CodeType.EMOTE,
    itemHash: 1063785104,
    //collectibleHash: null,
    shortIconUrl: "https://www.bungie.net/common/destiny2_content/icons/6b11266fcdb8e1e8bb8965724e1bfe20.jpg",
    //wideIconUrl: "https://bungie.net/common/destiny2_content/icons/385c302dc22e6dafb8b50c253486d040.jpg"
  },
  {
    name: "Bulbul Tarang",
    code: "A67-C7X-3GN",
    type: CodeType.EMBLEM,
    itemHash: 3903070390,
    collectibleHash: 3215337912 ,
    shortIconUrl: "https://www.bungie.net/common/destiny2_content/icons/25ca12d5d16569a39abd13e2e656e743.jpg",
    wideIconUrl: "https://www.bungie.net/common/destiny2_content/icons/bb6b2a1723b35df8ebbdb03710e8e8bd.jpg"
  },
  {
    name: "Risen",
    code: "THR-33A-YKC",
    type: CodeType.EMBLEM,
    itemHash: 4133455812,
    collectibleHash: 1687397126,
    shortIconUrl: "https://www.bungie.net/common/destiny2_content/icons/1ae0427c82b6e344a3597c842ee514fd.png",
    wideIconUrl: "https://www.bungie.net/common/destiny2_content/icons/6cd753e92bafa4fc88845e581ff12ed6.jpg"
  },
  {
    name: "Folding Space",
    code: "3J9-AMM-7MG",
    type: CodeType.EMBLEM,
    itemHash: 4183788697,
    collectibleHash: 1670619543,
    shortIconUrl: "https://www.bungie.net/common/destiny2_content/icons/e2966c4e4ffc719dfe271123d61edca7.png",
    wideIconUrl: "https://www.bungie.net/common/destiny2_content/icons/3fa44eef23119695edfc1afebeecc3c8.jpg"
  },
  {
    name: "Archived",
    code: "PTD-GKG-CVN",
    type: CodeType.EMBLEM,
    itemHash: 4183788696,
    collectibleHash: 1670619543,
    shortIconUrl: "https://www.bungie.net/common/destiny2_content/icons/896d1e6d0086bb18831759cfc3e5c9bc.png",
    wideIconUrl: "https://www.bungie.net/common/destiny2_content/icons/c315fba634d2e8545174aa3327e9e178.jpg"
  },
  {
    name: "Gone Home",
    code: "3CV-D6K-RD4",
    type: CodeType.EMBLEM,
    itemHash: 4183788699,
    collectibleHash: 1670619541 ,
    shortIconUrl: "https://www.bungie.net/common/destiny2_content/icons/907087d1718bfc344b6d7627a147b47c.png",
    wideIconUrl: "https://www.bungie.net/common/destiny2_content/icons/548200a01538d34615dfafc19e02a523.jpg"
  },
  {
    name: "Myopia",
    code: "FMM-44A-RKP",
    type: CodeType.EMBLEM,
    itemHash: 4183788698,
    collectibleHash: 1670619540  ,
    shortIconUrl: "https://www.bungie.net/common/destiny2_content/icons/94919cc4562d743f8f7e6725f3304b77.png",
    wideIconUrl: "https://www.bungie.net/common/destiny2_content/icons/e78878266122a93803897202dc6874eb.jpg"
  },
  {
    name: "Out the Airlock",
    code: "L3P-XXR-GJ4",
    type: CodeType.EMBLEM,
    itemHash: 2790542799,
    collectibleHash: 802420309   ,
    shortIconUrl: "https://www.bungie.net/common/destiny2_content/icons/d1b4d8a3dd584645ce0a3275c9f7c9eb.png",
    wideIconUrl: "https://www.bungie.net/common/destiny2_content/icons/612eea3b484a6068de668cec76f0a68b.jpg"
  },
  {
    name: "Adventurous Spirit",
    code: "9FY-KDD-PRT",
    type: CodeType.EMBLEM,
    itemHash: 4116678224,
    collectibleHash: 1737730014    ,
    shortIconUrl: "https://www.bungie.net/common/destiny2_content/icons/be871eff2f3350a801ff995faf209a5f.jpg",
    wideIconUrl: "https://www.bungie.net/common/destiny2_content/icons/9fc87194709d4f0eb67b2c7fdaf89d56.jpg"
  },
  {
    name: "Tigris Fati",
    code: "6AJ-XFR-9ND",
    type: CodeType.EMBLEM,
    itemHash: 2790542793,
    collectibleHash: 802420307     ,
    shortIconUrl: "https://www.bungie.net/common/destiny2_content/icons/d7d253ed33691134f414e21c29860beb.png",
    wideIconUrl: "https://www.bungie.net/common/destiny2_content/icons/317d1b544bcccf7ea2002e064243475f.jpg"
  },
]
