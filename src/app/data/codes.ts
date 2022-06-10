export enum CodeType {
  EMBLEM,
}


export interface CodeInfo {
  code: string;
  name: string;
  type: CodeType;
  itemHash: number;
  collectibleHash: number;
  shortIconUrl?: string;
  wideIconUrl?: string;
}

export const Codes: CodeInfo[] = [
  {
    name: "Stag's Spirit",
    code: "T67-JXY-PH6",
    type: CodeType.EMBLEM,
    itemHash: 3903070392,
    collectibleHash: 1939502753,
    shortIconUrl: "https://www.bungie.net/common/destiny2_content/icons/313b57876840092ef843be204a17a903.jpg",
    wideIconUrl: "https://www.bungie.net/common/destiny2_content/icons/10fcff49483946a0653866eefdaa1293.jpg"
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
    itemHash: 1968995963,
    collectibleHash: 2006613205,
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
    shortIconUrl: "https://bungie.net/common/destiny2_content/icons/0f7a13bb8c8b1fff7e282a99d4a1419a.jpg",
    wideIconUrl: "https://bungie.net/common/destiny2_content/icons/b296588f57aea1d15a04c3db6de98220.jpg"
  },
  {
    name: "Sneer of the Oni",
    code: "6LJ-GH7-TPA",
    type: CodeType.EMBLEM,
    itemHash: 3752071762,
    collectibleHash: 3399891680,
    shortIconUrl: "https://bungie.net/common/destiny2_content/icons/0a336f8bfe9b099add5eb0327ef28b4d.jpg",
    wideIconUrl: "https://bungie.net/common/destiny2_content/icons/bffe84c0efb9215dbdc8c4890c3e6234.jpg"
  },
  {
    name: "Countdown to Convergence",
    code: "PHV-6LF-9CP",
    type: CodeType.EMBLEM,
    itemHash: 3752071767,
    collectibleHash: 3399891685,
    shortIconUrl: "https://bungie.net/common/destiny2_content/icons/ef506c58e6ceca2d0d1cc2b3e19619cd.png",
    wideIconUrl: "https://bungie.net/common/destiny2_content/icons/2560de3d4009044b291c6cfb69d11a7f.jpg"
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
]
