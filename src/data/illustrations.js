// アンティーク調のシルエット・イラスト集
// 各動物を viewBox 0 0 120 120 の影絵として描く。塗り・線とも currentColor で、
// Popup 側でセピア色を与える。胴体は塗り図形、脚や触手・角などは線で表現する。

const S = 'fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"';

export const illustrations = {
  // --- 刺胞・海の無脊椎 ---
  jellyfish: `
    <path d="M26,56 a34,30 0 0 1 68,0 q-34,12 -68,0 z"/>
    <path d="M36,60 q-5,20 -9,36 M48,64 q-2,22 -3,38 M60,65 v40 M72,64 q2,22 3,38 M84,60 q5,20 9,36" ${S} stroke-width="3.4"/>`,
  coral: `
    <path d="M60,106 V64 M60,78 q-16,-8 -22,-28 M38,50 q-3,-14 -10,-22 M38,50 q6,-12 3,-26 M60,72 q16,-10 22,-30 M82,42 q5,-13 14,-18 M82,42 q-2,-13 -5,-24 M60,90 q-9,-4 -13,-13 M60,86 q9,-5 15,-11" ${S} stroke-width="5.2"/>
    <ellipse cx="60" cy="108" rx="20" ry="5"/>`,
  butterfly: `
    <ellipse cx="60" cy="60" rx="3.6" ry="21"/>
    <ellipse cx="41" cy="45" rx="19" ry="15"/>
    <ellipse cx="79" cy="45" rx="19" ry="15"/>
    <ellipse cx="44" cy="76" rx="15" ry="13"/>
    <ellipse cx="76" cy="76" rx="15" ry="13"/>
    <path d="M60,41 q-7,-13 -13,-17 M60,41 q7,-13 13,-17" ${S} stroke-width="2.6"/>`,
  crab: `
    <ellipse cx="60" cy="64" rx="27" ry="17"/>
    <path d="M44,54 l-11,-13 M76,54 l11,-13" ${S} stroke-width="4.4"/>
    <circle cx="30" cy="38" r="8"/><circle cx="90" cy="38" r="8"/>
    <path d="M36,62 l-19,-7 M38,69 l-21,3 M40,76 l-18,11 M84,62 l19,-7 M82,69 l21,3 M80,76 l18,11" ${S} stroke-width="4"/>`,
  stagbeetle: `
    <ellipse cx="60" cy="66" rx="16" ry="24"/>
    <circle cx="60" cy="40" r="10"/>
    <path d="M52,34 q-14,-6 -18,-20 q10,6 14,2 M68,34 q14,-6 18,-20 q-10,6 -14,2" ${S} stroke-width="4.2"/>
    <path d="M46,58 l-18,-6 M46,68 l-19,4 M46,78 l-17,12 M74,58 l18,-6 M74,68 l19,4 M74,78 l17,12" ${S} stroke-width="3.6"/>`,
  ant: `
    <circle cx="40" cy="60" r="11"/>
    <circle cx="59" cy="60" r="8"/>
    <ellipse cx="80" cy="60" rx="15" ry="11"/>
    <path d="M32,54 q-10,-10 -12,-22 M34,52 q-6,-12 -4,-24" ${S} stroke-width="3"/>
    <path d="M56,60 l-8,16 M60,60 l2,18 M64,60 l10,16 M54,60 l-10,-14 M60,60 l0,-18 M64,60 l12,-14" ${S} stroke-width="3.2"/>`,
  spider: `
    <ellipse cx="60" cy="66" rx="15" ry="18"/>
    <circle cx="60" cy="46" r="9"/>
    <path d="M48,58 C30,50 26,44 18,34 M48,64 C28,62 22,60 12,58 M48,70 C28,74 22,80 14,86 M50,76 C36,86 32,92 26,102" ${S} stroke-width="3.2"/>
    <path d="M72,58 C90,50 94,44 102,34 M72,64 C92,62 98,60 108,58 M72,70 C92,74 98,80 106,86 M70,76 C84,86 88,92 94,102" ${S} stroke-width="3.2"/>`,
  dragonfly: `
    <ellipse cx="60" cy="70" rx="3.4" ry="28"/>
    <circle cx="60" cy="38" r="8"/>
    <ellipse cx="38" cy="52" rx="22" ry="7" transform="rotate(-14 38 52)"/>
    <ellipse cx="82" cy="52" rx="22" ry="7" transform="rotate(14 82 52)"/>
    <ellipse cx="40" cy="64" rx="20" ry="6" transform="rotate(10 40 64)"/>
    <ellipse cx="80" cy="64" rx="20" ry="6" transform="rotate(-10 80 64)"/>`,
  ladybug: `
    <circle cx="60" cy="64" r="30"/>
    <path d="M42,42 a22,14 0 0 1 36,0 z"/>
    <rect x="58" y="40" width="4" height="52" fill="#f6f1e4"/>
    <circle cx="48" cy="58" r="4.6" fill="#f6f1e4"/><circle cx="72" cy="58" r="4.6" fill="#f6f1e4"/>
    <circle cx="46" cy="76" r="4" fill="#f6f1e4"/><circle cx="74" cy="76" r="4" fill="#f6f1e4"/>
    <path d="M30,58 l-11,-6 M32,72 l-13,4 M90,58 l11,-6 M88,72 l13,4 M50,34 l-6,-10 M70,34 l6,-10" ${S} stroke-width="2.6"/>`,
  scorpion: `
    <ellipse cx="56" cy="66" rx="13" ry="20"/>
    <path d="M46,52 q-12,-8 -16,-20 M66,52 q12,-8 16,-20" ${S} stroke-width="4"/>
    <circle cx="26" cy="28" r="7"/><circle cx="86" cy="28" r="7"/>
    <path d="M44,60 l-16,-4 M44,68 l-17,2 M44,76 l-16,8 M68,60 l16,-4 M68,68 l17,2 M68,76 l16,8" ${S} stroke-width="3"/>
    <path d="M60,84 q20,8 24,-10 q2,-12 -8,-12" ${S} stroke-width="5"/>
    <path d="M76,62 l-8,-6" ${S} stroke-width="4"/>`,
  octopus: `
    <path d="M40,52 a20,22 0 0 1 40,0 q0,10 -4,16 q-16,6 -32,0 q-4,-6 -4,-16 z"/>
    <path d="M46,72 C40,90 34,96 26,102 M54,76 C52,94 50,100 46,108 M62,76 C64,94 66,100 70,108 M74,72 C82,90 88,96 96,102 M50,74 C42,86 38,92 32,96 M70,74 C80,86 84,92 90,96" ${S} stroke-width="3.4"/>`,
  snail: `
    <path d="M40,84 q-6,-2 -6,-10 q0,-30 26,-30 q22,0 22,20 q0,16 -16,16 q-12,0 -12,-10 q0,-8 8,-8 q6,0 6,5" ${S} stroke-width="4.6"/>
    <path d="M34,84 q-14,2 -18,-2 q10,-2 12,-8" ${S} stroke-width="4.6"/>
    <path d="M20,80 q-4,-8 -2,-14 M27,78 q-2,-9 1,-15" ${S} stroke-width="2.6"/>`,
  squid: `
    <path d="M60,20 q16,0 16,26 q0,20 -16,30 q-16,-10 -16,-30 q0,-26 16,-26 z"/>
    <path d="M46,32 l-16,-12 M74,32 l16,-12" ${S} stroke-width="3"/>
    <path d="M52,74 C50,92 48,100 46,110 M58,76 v34 M62,76 v34 M68,74 C70,92 72,100 74,110 M56,75 C48,90 46,96 44,104 M64,75 C72,90 74,96 76,104" ${S} stroke-width="3"/>`,
  starfish: `
    <path d="M60,16 L71,46 L103,46 L77,66 L87,98 L60,78 L33,98 L43,66 L17,46 L49,46 Z"/>`,

  // --- 魚類 ---
  shark: `
    <path d="M20,64 Q46,44 82,52 Q98,54 104,48 Q100,62 96,64 Q100,66 104,80 Q96,74 82,76 Q46,84 20,64 Z"/>
    <path d="M62,52 L72,26 L80,54 Z"/>
    <path d="M60,76 L66,94 L74,78 Z"/>
    <path d="M40,66 L36,82 L50,72 Z"/>`,
  coelacanth: `
    <path d="M22,62 Q46,42 78,52 Q94,56 100,50 Q104,62 100,74 Q94,68 78,72 Q46,82 22,62 Z"/>
    <ellipse cx="46" cy="82" rx="6" ry="10" transform="rotate(24 46 82)"/>
    <ellipse cx="66" cy="84" rx="5" ry="9" transform="rotate(18 66 84)"/>
    <path d="M60,52 l6,-16 l8,16 Z"/>`,
  tuna: `
    <path d="M18,62 Q48,40 88,58 Q94,50 96,44 Q98,56 94,62 Q98,68 96,80 Q94,74 88,66 Q48,84 18,62 Z"/>
    <path d="M60,52 l4,-12 l6,12 Z M58,72 l3,12 l6,-12 Z"/>`,
  seahorse: `
    <circle cx="62" cy="30" r="11"/>
    <path d="M50,28 h-14" ${S} stroke-width="6"/>
    <path d="M62,41 q11,7 8,22 q-3,15 -9,25 q-6,9 -1,17 q3,5 11,3" ${S} stroke-width="11"/>
    <path d="M60,24 q3,-6 8,-6" ${S} stroke-width="3"/>`,
  eel: `
    <path d="M16,60 q14,-16 30,-8 q16,8 30,-2 q14,-10 28,-2 q-10,4 -22,10 q-16,8 -30,-2 q-14,-8 -26,4 q-6,6 -10,2 z"/>`,
  ray: `
    <path d="M60,46 C40,46 26,58 15,80 C36,73 49,74 56,79 C58,81 62,81 64,79 C71,74 84,73 105,80 C94,58 80,46 60,46 Z"/>
    <path d="M60,79 q3,18 1,34" ${S} stroke-width="3.2"/>
    <circle cx="53" cy="56" r="2.4"/><circle cx="67" cy="56" r="2.4"/>`,
  clownfish: `
    <path d="M22,62 Q44,42 78,54 Q92,58 98,52 Q100,62 98,72 Q92,66 78,70 Q44,82 22,62 Z"/>
    <path d="M46,50 q-4,24 0,28 M64,48 q-5,28 0,32" ${S} stroke-width="4"/>
    <path d="M60,54 l4,-12 l6,12 Z"/>`,

  // --- 両生・爬虫 ---
  frog: `
    <path d="M36,66 a24,20 0 0 1 48,0 q0,10 -8,14 q-16,4 -32,0 q-8,-4 -8,-14 z"/>
    <circle cx="46" cy="50" r="8"/><circle cx="74" cy="50" r="8"/>
    <path d="M40,80 q-14,2 -20,12 q10,-2 16,2 M80,80 q14,2 20,12 q-10,-2 -16,2" ${S} stroke-width="4.4"/>`,
  salamander: `
    <path d="M18,64 q6,-8 18,-8 q10,0 18,-4 q10,-6 22,-4 q16,2 26,-6 q-6,12 -22,14 q-12,2 -22,6 q-10,4 -22,4 q-10,0 -16,8 q-2,-6 0,-10 z"/>
    <path d="M40,66 l-6,12 M40,62 l-6,-12 M66,66 l6,12 M66,60 l6,-12" ${S} stroke-width="3"/>`,
  snake: `
    <path d="M96,44 q-16,-2 -18,10 q-2,10 8,12 q10,2 8,10 q-2,10 -14,10 q-16,0 -30,-6 q14,2 24,0 q10,-2 10,-8 q0,-8 -10,-10 q-12,-2 -10,-16 q2,-14 20,-14 q10,0 16,4 z"/>
    <path d="M96,42 l6,-3 M96,48 l6,3" ${S} stroke-width="2.4"/>`,
  turtle: `
    <path d="M32,70 a28,20 0 0 1 56,0 q-28,10 -56,0 z"/>
    <circle cx="94" cy="66" r="8"/>
    <path d="M40,78 l-4,10 M60,82 v10 M80,78 l4,10" ${S} stroke-width="5"/>
    <path d="M46,62 h28 M52,56 l4,12 M68,56 l-4,12" ${S} stroke-width="2"/>`,
  trex: `
    <path d="M40,96 q-8,-30 6,-46 q10,-12 26,-12 q4,-8 14,-8 q-4,6 -2,10 q8,4 8,14 q0,10 -10,14 q-8,2 -14,10 q6,10 4,18 l-8,0 q0,-10 -6,-14 q-6,10 -6,14 z"/>
    <path d="M60,44 q6,4 12,2" ${S} stroke-width="2"/>`,
  crocodile: `
    <path d="M14,66 l24,-4 q10,-8 26,-6 q18,2 30,-4 q14,-8 22,-4 q-8,4 -14,8 q10,2 8,8 q-8,-2 -16,0 q-12,4 -28,2 q-14,-2 -24,4 q-8,4 -14,2 z"/>
    <path d="M40,72 l-4,10 M60,74 l0,10 M78,72 l4,10" ${S} stroke-width="4.2"/>
    <path d="M20,62 l6,-4 M30,60 l6,-4" ${S} stroke-width="2"/>`,
  chameleon: `
    <path d="M30,56 q-2,-12 12,-14 q10,-2 16,4 q10,-2 18,2 q14,6 18,20 q-8,-8 -16,-8 q-8,0 -12,6 q-6,8 -16,8 q-12,0 -14,-10 q-6,-2 -6,-8 z"/>
    <path d="M30,60 q-10,2 -12,12 q-2,10 8,12 q8,2 8,-6 q0,-6 -6,-6 q-4,0 -4,4" ${S} stroke-width="3.4"/>
    <path d="M56,58 l-2,14 M72,60 l2,14" ${S} stroke-width="3.4"/>`,
  lizard: `
    <path d="M18,60 q10,-6 22,-4 q10,2 18,-2 q10,-6 22,-4 q16,2 22,-8 q0,12 -14,18 q-10,4 -20,2 q-10,-2 -18,2 q-10,4 -22,2 q-8,-2 -12,4 q-2,-8 4,-12 z"/>
    <path d="M42,60 l-6,12 M42,56 l-6,-10 M64,58 l6,12 M64,54 l6,-10" ${S} stroke-width="3"/>`,

  // --- 鳥類 ---
  eagle: `
    <path d="M60,44 q6,-8 16,-6 q-4,4 -2,8 q10,4 8,14 q16,-12 34,-10 q-14,8 -24,20 q-8,10 -20,12 q4,10 0,18 l-8,0 q0,-8 -4,-16 q-12,-2 -20,-12 q-10,-12 -24,-20 q18,-2 34,10 q-2,-10 8,-14 q2,-4 -2,-8 q10,-2 16,6 z"/>
    <path d="M60,38 l0,8" ${S} stroke-width="3"/>`,
  penguin: `
    <path d="M60,26 q22,0 22,34 q0,30 -22,34 q-22,-4 -22,-34 q0,-34 22,-34 z"/>
    <path d="M60,40 q-8,4 -8,26 q0,18 8,24 q8,-6 8,-24 q0,-22 -8,-26 z" fill="#f6f1e4"/>
    <path d="M56,58 l-2,6 l6,-2 z"/>
    <path d="M44,98 l-8,8 M76,98 l8,8" ${S} stroke-width="5"/>`,
  owl: `
    <path d="M36,60 a24,28 0 0 1 48,0 q0,26 -24,30 q-24,-4 -24,-30 z"/>
    <path d="M38,42 l-6,-16 l14,10 z M82,42 l6,-16 l-14,10 z"/>
    <circle cx="50" cy="56" r="9" fill="#f6f1e4"/><circle cx="70" cy="56" r="9" fill="#f6f1e4"/>
    <circle cx="50" cy="56" r="3.5"/><circle cx="70" cy="56" r="3.5"/>
    <path d="M56,64 l4,6 l4,-6 z"/>`,
  ostrich: `
    <ellipse cx="66" cy="66" rx="24" ry="20"/>
    <path d="M50,52 q-6,-18 -4,-30 q1,-8 8,-8 q6,0 5,8 q-2,10 3,24" ${S} stroke-width="5"/>
    <circle cx="52" cy="14" r="6"/>
    <path d="M58,84 l-4,24 M74,84 l6,24" ${S} stroke-width="4.4"/>`,
  hummingbird: `
    <path d="M48,58 q10,-8 22,-4 q8,2 8,10 q0,10 -12,12 q-12,2 -18,-6 q-4,-6 0,-12 z"/>
    <path d="M70,58 l30,-10 M70,62 l28,6" ${S} stroke-width="3"/>
    <ellipse cx="44" cy="52" rx="16" ry="5" transform="rotate(-24 44 52)"/>
    <path d="M60,70 l-4,16" ${S} stroke-width="3"/>`,
  chicken: `
    <ellipse cx="58" cy="70" rx="22" ry="18"/>
    <circle cx="76" cy="52" r="11"/>
    <path d="M70,42 q2,-8 8,-8 q-2,6 4,8 q4,-6 8,-4 q-2,6 2,8" ${S} stroke-width="3"/>
    <path d="M86,54 l8,2 l-8,4 z"/>
    <path d="M36,72 q-16,-6 -22,-20 q0,14 10,24" ${S} stroke-width="4"/>
    <path d="M52,86 l-2,14 M66,86 l2,14" ${S} stroke-width="3.6"/>`,
  flamingo: `
    <ellipse cx="46" cy="60" rx="18" ry="13"/>
    <path d="M54,52 q18,-4 22,-20 q2,-12 -8,-14 q-8,-2 -8,6 q0,6 6,6" ${S} stroke-width="5"/>
    <path d="M62,18 l10,4 l-10,4" fill="currentColor" ${''}/>
    <path d="M42,72 l-2,30 M52,72 l4,30" ${S} stroke-width="3.4"/>
    <path d="M40,102 h-8 M56,102 h8" ${S} stroke-width="3.4"/>`,

  // --- 哺乳類 ---
  platypus: `
    <ellipse cx="58" cy="66" rx="26" ry="15"/>
    <path d="M84,66 q16,-2 20,6 q-8,6 -20,2 z"/>
    <ellipse cx="30" cy="70" rx="12" ry="7" transform="rotate(20 30 70)"/>
    <path d="M46,80 l-4,10 M66,80 l4,10" ${S} stroke-width="4.4"/>`,
  kangaroo: `
    <path d="M64,30 q10,0 10,12 q0,8 -6,12 q8,4 8,18 q0,14 -8,26 l-10,0 q6,-10 4,-22 q-8,4 -18,2 q10,-6 12,-16 q2,-12 6,-18 q-6,-2 -6,-12 q0,-2 2,-2 z"/>
    <path d="M60,80 q-16,10 -30,10 q0,6 6,10" ${S} stroke-width="5"/>
    <path d="M66,32 l2,-10 M72,34 l6,-8" ${S} stroke-width="3"/>`,
  whale: `
    <path d="M14,64 Q30,42 66,46 Q96,50 106,42 Q104,56 94,60 Q104,66 106,82 Q96,74 66,78 Q30,84 14,64 Z"/>
    <path d="M96,42 q8,-6 14,-4 q-4,6 -4,10 M96,82 q8,6 14,4 q-4,-6 -4,-10" ${S} stroke-width="3"/>
    <path d="M40,74 q6,4 12,4" ${S} stroke-width="2"/>`,
  elephant: `
    <ellipse cx="58" cy="58" rx="30" ry="26"/>
    <path d="M80,54 q10,4 12,18 q2,14 -4,24 q-6,-2 -6,-10 q0,-8 -4,-16" ${S} stroke-width="7"/>
    <path d="M34,52 a18,18 0 1 0 0,4 z"/>
    <path d="M36,82 v18 M56,84 v18 M74,82 v18 M88,74 v20" ${S} stroke-width="7"/>
    <path d="M84,92 l-2,10" ${S} stroke-width="2.4"/>`,
  lion: `
    <circle cx="54" cy="52" r="26"/>
    <circle cx="54" cy="52" r="15" fill="#f6f1e4"/>
    <ellipse cx="78" cy="70" rx="20" ry="14"/>
    <path d="M84,80 v18 M64,82 v16 M94,80 v18" ${S} stroke-width="6"/>
    <path d="M92,74 q14,4 16,18 q-8,-6 -14,-4" ${S} stroke-width="3"/>
    <circle cx="54" cy="52" r="6"/>`,
  human: `
    <circle cx="60" cy="34" r="12"/>
    <path d="M60,46 q-16,2 -16,26 q0,10 4,20 M60,46 q16,2 16,26 q0,10 -4,20" ${S} stroke-width="8"/>
    <path d="M46,60 l-14,14 M74,60 l14,14 M54,92 l-6,20 M66,92 l6,20" ${S} stroke-width="7"/>`,
  chimpanzee: `
    <circle cx="60" cy="42" r="15"/>
    <circle cx="46" cy="42" r="5"/><circle cx="74" cy="42" r="5"/>
    <path d="M60,56 q-18,4 -18,26 q0,14 8,22 M60,56 q18,4 18,26 q0,14 -8,22" ${S} stroke-width="9"/>
    <path d="M44,66 q-16,10 -18,26 M76,66 q16,10 18,26" ${S} stroke-width="7"/>`,
  bat: `
    <ellipse cx="60" cy="60" rx="9" ry="16"/>
    <path d="M52,50 Q30,36 14,42 Q24,46 22,56 Q30,54 34,62 Q42,54 52,64 M68,50 Q90,36 106,42 Q96,46 98,56 Q90,54 86,62 Q78,54 68,64" fill="currentColor" ${''}/>
    <path d="M54,44 l-4,-10 M66,44 l4,-10" ${S} stroke-width="3"/>`,
  panda: `
    <circle cx="60" cy="46" r="18"/>
    <circle cx="44" cy="32" r="8"/><circle cx="76" cy="32" r="8"/>
    <ellipse cx="60" cy="78" rx="22" ry="18"/>
    <path d="M42,88 v14 M78,88 v14" ${S} stroke-width="7"/>
    <ellipse cx="52" cy="46" rx="4" ry="6"/><ellipse cx="68" cy="46" rx="4" ry="6"/>`,
  horse: `
    <path d="M40,58 q4,-6 14,-6 q10,0 16,-6 q6,-6 10,-16 q2,-6 8,-6 q-2,8 0,14 q6,4 6,14 q0,10 -8,14 q-16,4 -24,4 q-18,0 -22,-4 z"/>
    <path d="M46,66 v34 M64,68 v32 M78,66 v34 M50,66 v34" ${S} stroke-width="6"/>
    <path d="M84,24 q6,2 8,10 M40,60 q-10,4 -12,16" ${S} stroke-width="4"/>`,
  koala: `
    <circle cx="60" cy="56" r="24"/>
    <circle cx="40" cy="42" r="11"/><circle cx="80" cy="42" r="11"/>
    <path d="M60,52 q-5,4 -5,10 q0,4 5,4 q5,0 5,-4 q0,-6 -5,-10 z"/>
    <path d="M46,78 v18 M74,78 v18" ${S} stroke-width="7"/>`,
  cat: `
    <ellipse cx="58" cy="76" rx="16" ry="20"/>
    <circle cx="58" cy="44" r="15"/>
    <path d="M46,32 l-4,-14 l14,8 z M70,32 l4,-14 l-14,8 z"/>
    <path d="M74,84 q18,-2 20,-24" ${S} stroke-width="5"/>
    <path d="M50,46 h-14 M50,50 h-14 M66,46 h14 M66,50 h14" ${S} stroke-width="1.6"/>`,
  dog: `
    <ellipse cx="54" cy="66" rx="24" ry="15"/>
    <circle cx="80" cy="54" r="13"/>
    <path d="M74,44 q-6,-12 2,-16 q4,10 10,10 z"/>
    <path d="M88,50 q10,-2 12,4 q-8,2 -10,6" ${S} stroke-width="4"/>
    <path d="M40,78 v20 M66,78 v20 M50,80 v18" ${S} stroke-width="6"/>
    <path d="M32,60 q-12,-4 -18,4" ${S} stroke-width="5"/>`,
  rabbit: `
    <ellipse cx="58" cy="74" rx="18" ry="20"/>
    <circle cx="58" cy="48" r="13"/>
    <ellipse cx="50" cy="24" rx="6" ry="20" transform="rotate(-10 50 24)"/>
    <ellipse cx="66" cy="24" rx="6" ry="20" transform="rotate(10 66 24)"/>
    <circle cx="80" cy="84" r="8"/>
    <path d="M44,88 v10 M64,90 v8" ${S} stroke-width="6"/>`,
  bear: `
    <ellipse cx="58" cy="66" rx="26" ry="24"/>
    <circle cx="58" cy="36" r="14"/>
    <circle cx="46" cy="24" r="7"/><circle cx="70" cy="24" r="7"/>
    <ellipse cx="58" cy="40" rx="6" ry="5"/>
    <path d="M40,86 v14 M76,86 v14" ${S} stroke-width="8"/>`,
  giraffe: `
    <ellipse cx="52" cy="80" rx="20" ry="14"/>
    <path d="M60,72 q6,-30 20,-44 q6,-6 12,-8" ${S} stroke-width="9"/>
    <circle cx="94" cy="18" r="8"/>
    <path d="M90,12 v-8 M98,12 v-8" ${S} stroke-width="3"/>
    <path d="M42,90 v14 M62,90 v14 M50,92 v12 M70,88 v14" ${S} stroke-width="5"/>`,
  deer: `
    <ellipse cx="52" cy="72" rx="20" ry="14"/>
    <path d="M62,66 q8,-14 20,-20 q6,-4 8,-10" ${S} stroke-width="7"/>
    <circle cx="92" cy="30" r="7"/>
    <path d="M90,24 q-4,-10 -12,-14 q4,6 0,10 M96,24 q4,-10 12,-14 q-4,6 0,10 M92,22 q-8,-6 -14,-6 M94,22 q8,-6 14,-6" ${S} stroke-width="2.6"/>
    <path d="M42,82 v22 M62,82 v22 M50,84 v20 M70,80 v24" ${S} stroke-width="4.4"/>`,
  dolphin: `
    <path d="M14,58 Q34,40 62,44 Q86,48 104,36 Q98,52 84,58 Q98,62 100,78 Q88,68 66,70 Q34,74 14,58 Z"/>
    <path d="M56,48 l6,-18 l10,16 Z"/>
    <path d="M40,68 q6,8 4,18" ${S} stroke-width="3"/>`,
};

export function getIllustration(id) {
  return illustrations[id] || null;
}
