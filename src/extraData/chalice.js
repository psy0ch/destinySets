const PURPLE_BEAST = 2458424464;
const PURPLE_JOY = 2458424465;
const PURPLE_JUBILATION = 2458424467;

const RED_GLUTTONY = 2458424469;
const RED_CUNNING = 2458424466;
const RED_AMBITION = 2458424468;

const GREEN_PRIDE = 2458424473;
const GREEN_WAR = 2458424471;
const GREEN_DESIRE = 2458424470;

const BLUE_EXCESS = 1023532672;
const BLUE_WEALTH = 1023532673;
const BLUE_PLEASURE = 2458424472;

const ANY_RED = [RED_GLUTTONY, RED_CUNNING, RED_AMBITION];
const ANY_GREEN = [GREEN_PRIDE, GREEN_WAR, GREEN_DESIRE];
const ANY_PURPLE = [PURPLE_BEAST, PURPLE_JOY, PURPLE_JUBILATION];
const ANY_BLUE = [BLUE_EXCESS, BLUE_WEALTH, BLUE_PLEASURE];

const OPULENT_HELMENT = [[GREEN_WAR], ANY_BLUE];
const OPULENT_ARMS = [[RED_CUNNING], ANY_BLUE];
const OPULENT_CHEST = [[BLUE_PLEASURE], ANY_BLUE];
const OPULENT_LEGS = [[RED_GLUTTONY], ANY_BLUE];
const OPULENT_CLASSITEM = [[PURPLE_JOY], ANY_BLUE];

const EXODUS_HELMENT = [[GREEN_WAR], ANY_RED];
const EXODUS_ARMS = [[RED_CUNNING], ANY_RED];
const EXODUS_CHEST = [[BLUE_PLEASURE], ANY_RED];
const EXODUS_LEGS = [[RED_GLUTTONY], ANY_RED];
const EXODUS_CLASSITEM = [[PURPLE_JOY], ANY_RED];

export default {
  // AUSTRINGER
  2429822977: [[GREEN_DESIRE], ANY_RED],

  // IMPERIAL DECREE
  2919334548: [[BLUE_WEALTH], ANY_GREEN],

  // THE EPICUREAN
  4124357815: [[BLUE_EXCESS], ANY_GREEN],

  // DRANG (BAROQUE)
  79075821: [[GREEN_PRIDE], ANY_PURPLE],

  // BELOVED
  4190932264: [[PURPLE_JUBILATION], ANY_RED],

  // CALUS MINI-TOOL
  174192097: [[PURPLE_BEAST], ANY_PURPLE],

  // FIXED ODDS
  1642384931: [[RED_AMBITION], ANY_BLUE],

  // EXODUS DOWN MASK
  2172333833: EXODUS_HELMENT,

  // EXODUS DOWN GRIPS
  3875829376: EXODUS_ARMS,

  // EXODUS DOWN VEST
  126418248: EXODUS_CHEST,

  // EXODUS DOWN STRIDES
  2953649850: EXODUS_LEGS,

  // EXODUS DOWN CLOAK
  2252973221: EXODUS_CLASSITEM,

  // EXODUS DOWN HELM
  582151075: EXODUS_HELMENT,

  // EXODUS DOWN GAUNTLETS
  1678216306: EXODUS_ARMS,

  // EXODUS DOWN
  1156448694: EXODUS_CHEST,

  // EXODUS DOWN GREAVES
  2079454604: EXODUS_LEGS,

  // EXODUS DOWN MARK
  527652447: EXODUS_CLASSITEM,

  // EXODUS DOWN HOOD
  2731698402: EXODUS_HELMENT,

  // EXODUS DOWN GLOVES
  2029766091: EXODUS_ARMS,

  // EXODUS DOWN ROBES
  2218838661: EXODUS_CHEST,

  // EXODUS DOWN BOOTS
  3545981149: EXODUS_LEGS,

  // EXODUS DOWN BOND
  874856664: EXODUS_CLASSITEM,

  906236408: OPULENT_HELMENT, // OPULENT STALKER MASK
  1370039881: OPULENT_ARMS, // OPULENT STALKER GRIPS
  3759327055: OPULENT_CHEST, // OPULENT STALKER VEST
  1661981723: OPULENT_LEGS, // OPULENT STALKER STRIDES
  1135872734: OPULENT_CLASSITEM, // OPULENT STALKER CLOAK

  1420117606: OPULENT_HELMENT, // OPULENT DUELIST HELM
  392500791: OPULENT_ARMS, // OPULENT DUELIST GAUNTLETS
  2856582785: OPULENT_CHEST, // OPULENT DUELIST PLATE
  1776578009: OPULENT_LEGS, // OPULENT DUELIST GREAVES
  4105225180: OPULENT_CLASSITEM, // OPULENT DUELIST MARK

  831222279: OPULENT_HELMENT, // OPULENT SCHOLAR HOOD
  3072788622: OPULENT_ARMS, // OPULENT SCHOLAR GLOVES
  2026757026: OPULENT_CHEST, // OPULENT SCHOLAR ROBES
  1285460104: OPULENT_LEGS, // OPULENT SCHOLAR BOOTS
  1250649843: OPULENT_CLASSITEM // OPULENT SCHOLAR BOND
};
