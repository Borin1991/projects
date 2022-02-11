var rem_score = 501;
var rem_score_p2 = 501;
var your_throw;
var your_throw_text='';
var your_throw_text2='';
var your_throw_p2;
var throws_array = []; 
var throws_array_p2 = [];
var rem_scores_array = [501];
var rem_scores_array_p2 = [501];
var max_throw = 0;
var max_throw_p2 = 0;

var impossible_array = ['163','166','169','172','173','175','176','178','179'];
var no_checkout_array = [169, 168, 166, 165, 163, 162, 159];
var checkout_array = [ {checkout_score:1 , checkout_text: 'D1'},
{checkout_score: 2 , checkout_text: 'D1'},
{checkout_score: 3 , checkout_text: '1 D1'},
{checkout_score: 4 , checkout_text: 'D2'},
{checkout_score: 5 , checkout_text: '1 D2 // 3 D1'},
{checkout_score: 6 , checkout_text: 'D3'},
{checkout_score: 7 , checkout_text: '3 D2 // many other options'},
{checkout_score: 8 , checkout_text: 'D4'},
{checkout_score: 9 , checkout_text: '1 D4 // many other options'},
{checkout_score: 10 , checkout_text: 'D5'},
{checkout_score: 11 , checkout_text: '3 D4 // many other options'},
{checkout_score: 12 , checkout_text: 'D6'},
{checkout_score: 13 , checkout_text: '5 D4 // many other options'},
{checkout_score: 14 , checkout_text: 'D7'},
{checkout_score: 15 , checkout_text: '7 D4 // many other options'},
{checkout_score: 16 , checkout_text: 'D8'},
{checkout_score: 17 , checkout_text: '1 D8 // many other options'},
{checkout_score: 18 , checkout_text: 'D9'},
{checkout_score: 19 , checkout_text: '3 D8 // many other options'},
{checkout_score: 20 , checkout_text: 'D10'},
{checkout_score: 21 , checkout_text: '5 D8 // many other options'},
{checkout_score: 22 , checkout_text: 'D11'},
{checkout_score: 23 , checkout_text: '7 D8 // many other options'},
{checkout_score: 24 , checkout_text: 'D12'},
{checkout_score: 25 , checkout_text: '9 D8 // many other options'},
{checkout_score: 26 , checkout_text: 'D13'},
{checkout_score: 27 , checkout_text: '11 D8 // many other options'},
{checkout_score: 28 , checkout_text: 'D14'},
{checkout_score: 29 , checkout_text: '13 D8 // many other options'},
{checkout_score: 30 , checkout_text: 'D15'},
{checkout_score: 31 , checkout_text: '15 D8 // many other options'},
{checkout_score: 32 , checkout_text: 'D16'},
{checkout_score: 33 , checkout_text: '1 D16 // many other options'},
{checkout_score: 34 , checkout_text: 'D17'},
{checkout_score: 35 , checkout_text: '3 D16 // many other options'},
{checkout_score: 36 , checkout_text: 'D18'},
{checkout_score: 37 , checkout_text: '5 D16 // many other options'},
{checkout_score: 38 , checkout_text: 'D19'},
{checkout_score: 39 , checkout_text: '7 D16 // many other options'},
{checkout_score: 40 , checkout_text: 'D20'},
{checkout_score: 41 , checkout_text: '9 D16 || 1 D20'},
{checkout_score: 42 , checkout_text: '10 D16  //  6 D18'},{checkout_score:
  43 , checkout_text: '11 D16  //  3 D20  //  19 D12'},{checkout_score:  44 , checkout_text: '4 D20  //  12 D16'},{checkout_score:
  45 , checkout_text: '5 D20  //  13 D16  //  9 D18'},{checkout_score:  46 , checkout_text: '6 D20  //  10 D18'},{checkout_score:
  47 , checkout_text: '15 D16  //  11 D18  //  7 D20'},{checkout_score:  48 , checkout_text: '8 D20  //  16 D16'},{checkout_score:
  49 , checkout_text: '17 D16  //  9 D20'},{checkout_score:  50 , checkout_text: '10 D20  //  18 D16  //  10 D20  //  BULL'},{checkout_score:
  51 , checkout_text: '11 D20  //  19 D16'},{checkout_score:  52 , checkout_text: '12 D20  //  20 D16'},{checkout_score:
  53 , checkout_text: '13 D20  //  17 D18'},{checkout_score:  54 , checkout_text: '14 D20  //  18 D18'},{checkout_score:
  55 , checkout_text: '15 D20  //  19 D18'},{checkout_score:  56 , checkout_text: '16 D20  //  20 D18'},{checkout_score:
  57 , checkout_text: '17 D20  //  25 D16'},{checkout_score:  58 , checkout_text: '18 D20  //  8 BULL'},{checkout_score:
  59 , checkout_text: '19 D20  //  25 D17'},{checkout_score:  60 , checkout_text: '20 D20  //  10 BULL'},{checkout_score:
  61 , checkout_text: '25 D18  //  11 BULL  //  T11 D14'},{checkout_score:  62 , checkout_text: 'T10 D16  //  10 20 D16  //  12 BULL'},{checkout_score:
  63 , checkout_text: 'T13 D12  //  13 BULL'},{checkout_score:  64 , checkout_text: 'T16 D8  //  16 16 D16  //  16 8 D20  //  14 BULL'},{checkout_score:
  65 , checkout_text: '25 D20  //  T19 D4  //  T15 D10'},{checkout_score:  66 , checkout_text: 'T10 D18  //  T16 D9'},{checkout_score:
  67 , checkout_text: 'T17 D8  //  17 BULL'},{checkout_score:  68 , checkout_text: 'T20 D4  //  T16 D10'},{checkout_score:
  69 , checkout_text: '19 BULL  //  T11 D18  //  11 18 D20'},{checkout_score:  70 , checkout_text: 'T18 D8  //  20 BULL'},{checkout_score:
  71 , checkout_text: 'T13 D16  //  25 6 D20  //  25 10 D18'},{checkout_score:  72 , checkout_text: 'T12 D18  //  T16 D12'},{checkout_score:
  73 , checkout_text: 'T19 D8  //  T11 D20'},{checkout_score:  74 , checkout_text: 'T14 D16  //  T18 D10'},{checkout_score:
  75 , checkout_text: 'T13 D18  //  25 BULL'},{checkout_score:  76 , checkout_text: 'T20 D8  //  T16 D14'},{checkout_score:
  77 , checkout_text: 'T15 D16  //  T19 D10'},{checkout_score:  78 , checkout_text: 'T18 D12  //  T14 D18'},{checkout_score:
  79 , checkout_text: 'T13 D20  //  T19 D11'},{checkout_score:  80 , checkout_text: 'T16 D16  //  T20 D10'},{checkout_score:
  81 , checkout_text: 'T15 D18  //  T19 D12'},{checkout_score:  82 , checkout_text: 'T14 D20  //  BULL D16  //  25 17 D20'},{checkout_score:
  83 , checkout_text: 'T17 D16  //  T11 BULL'},{checkout_score:  84 , checkout_text: 'T16 D18  //  16 T16 D10'},{checkout_score:
  85 , checkout_text: 'T15 D20  //  T19 D14'},{checkout_score:  86 , checkout_text: 'T18 D16  //  BULL T18  //  25 11 BULL'},{checkout_score:
  87 , checkout_text: 'T17 D18  //  T15 10 D16'},{checkout_score:  88 , checkout_text: 'T16 D20  //  T20 D14'},{checkout_score:
  89 , checkout_text: 'T19 D16  //  T13 BULL'},{checkout_score:  90 , checkout_text: 'T18 D18  //  BULL D20'},{checkout_score:
  91 , checkout_text: 'T17 D20  //  17 BULL D12'},{checkout_score:  92 , checkout_text: 'T20 D16  //  T16 11 D16'},{checkout_score:
  93 , checkout_text: 'T19 D18  //  25 18 BULL'},{checkout_score:  94 , checkout_text: 'T18 D20  //  T16 6 D20'},{checkout_score:
  95 , checkout_text: 'T19 D19  //  19 T20 D8  //  T15 BULL  //  15 T16 D16'},{checkout_score:  96 , checkout_text: 'T20 D18  //  20 T20 D8  //  T16 16 D16  //  T18 10 D16'},{checkout_score:
  97 , checkout_text: 'T19 D20  //  19 T18 D12  //  T17 10 D18  //  17 T16 D16'},{checkout_score:  98 , checkout_text: 'T20 D19  //  20 T18 D12  //  T16 BULL  //  16 T16 D17'},{checkout_score:
  99 , checkout_text: 'T19 10 D16  //  19 T16 D16  //  T20 7 D16  //  T17 8 D20  //  17 BULL D16'},{checkout_score:  100 , checkout_text: 'T20 D20  //  T16 12 D20  //  16 T16 D18  //  BULL BULL'},{checkout_score:
  101 , checkout_text: 'T17 BULL  //  17 T16 D18  //  T13 12 BULL  //  13 T16 D20'},{checkout_score:  102 , checkout_text: 'T20 10 D16  //  20 BULL D16  //  T18 16 D16  //  18 T16 D18'},{checkout_score:
  103 , checkout_text: 'T19 10 D16  //  19 T16 D18  //  T17 12 D20  //  17 T18 D16'},{checkout_score:  104 , checkout_text: 'T18 BULL  //  18 T18 D16  //  T16 16 D20'},{checkout_score:
  105 , checkout_text: 'T20 13 D16  //  20 T15 D20  //  T19 8 D20  //  19 T18 D16'},{checkout_score:  106 , checkout_text: 'T20 10 D18  //  20 T18 D16  //  T18 12 D20  //  T16 18 D20  //  16 T18 D18'},{checkout_score:
  107 , checkout_text: 'T19 BULL  //  19 T16 D20  //  T17 16 D20  //  17 T18 D18'},{checkout_score:  108 , checkout_text: 'T19 19 D16  //  18 T18 D18  //  T20 8 D20  //  20 T16 D20'},{checkout_score:
  109 , checkout_text: 'T20 17 D16  //  20 T19 D16  //  T19 12 D20  //  19 T18 D18'},{checkout_score:  110 , checkout_text: 'T20 BULL  //  20 T18 D18  //  BULL 20 D20  //  25 T15 D20  //  15 T15 BULL'},{checkout_score:
  111 , checkout_text: 'T20 19 D16  //  20 T17 D20  //  T19 14 BULL  //  17 T18 D20'},{checkout_score:  112 , checkout_text: 'T18 18 D20  //  T12 T20 D8  //  12 T20 D20'},{checkout_score:
  113 , checkout_text: 'T20 13 D20  //  20 T19 D18  //  T19 16 D20  //  19 T18 D20  //  T17 12 BULL  //  17 T20 D18'},{checkout_score:  114 , checkout_text: 'T20 14 D20  //  T18 20 D20'},{checkout_score:
  115 , checkout_text: '19 T20 D18  //  T19 18 D20'},{checkout_score:  116 , checkout_text: 'T20 16 D20  //  T16 18 BULL'},{checkout_score:
  117 , checkout_text: 'T20 18 D20  //  T17 16 BULL'},{checkout_score:  118 , checkout_text: 'T20 T19 D20  //  T18 T16 D8'},{checkout_score:
  119 , checkout_text: '19 T20 D20  //  T19 12 BULL'},{checkout_score:  120 , checkout_text: 'T20 20 D20  //  T19 13 BULL  //  T17 19 BULL'},{checkout_score:
  121 , checkout_text: '25 T20 D18  //  T19 T16 D8'},{checkout_score:  122 , checkout_text: 'T18 18 BULL  //  T20 12 BULL'},{checkout_score:
  123 , checkout_text: 'T20 T13 D12  //  19 T18 BULL'},{checkout_score:  124 , checkout_text: 'T20 T16 D8  //  20 T18 BULL'},{checkout_score:
  125 , checkout_text: 'T20 T19 D4  //  25 BULL BULL  //  25 T20 D20  //  T20 T11 D16'},{checkout_score:  126 , checkout_text: 'T19 19 BULL  //  T20 16 BULL  //  T18 T12 D18'},{checkout_score:
  127 , checkout_text: 'T20 T17 D8  //  T20 T14 D16'},{checkout_score:  128 , checkout_text: 'T20 T20 D4  //  T20 18 BULL  //  T18 T18 D10'},{checkout_score:
  129 , checkout_text: 'T19 T16 D12  //  T19 T12 D18  //  19 T20 BULL'},{checkout_score:  130 , checkout_text: 'T20 T18 D8  //  20 T20 BULL'},{checkout_score:
  131 , checkout_text: 'T20 T13 D16  //  BULL T15 D18'},{checkout_score:  132 , checkout_text: 'T20 T16 D12  //  T17 T15 D18'},{checkout_score:
  133 , checkout_text: 'T20 T19 D8  //  T17 BULL D16'},{checkout_score:  134 , checkout_text: 'T20 T14 D16  //  T18 T16 D16'},{checkout_score:
  135 , checkout_text: 'T20 T13 D8  //  BULL T15 D20  //  25 T20 BULL'},{checkout_score:  136 , checkout_text: 'T20 T20 D8  //  T18 BULL D16'},{checkout_score:
  137 , checkout_text: 'T20 T15 D16  //  T19 T16 D16'},{checkout_score:  138 , checkout_text: 'T20 T14 D18  //  T18 T16 D18'},{checkout_score:
  139 , checkout_text: 'T20 T13 D20  //  T19 BULL D16  //  T17 T16 D20'},{checkout_score:  140 , checkout_text: 'T20 T20 D10  //  T18 T18 D16'},{checkout_score:
  141 , checkout_text: 'T20 T15 D18  //  T19 T16 D18'},{checkout_score:  142 , checkout_text: 'T20 T14 D20  //  T18 T16 D20'},{checkout_score:
  143 , checkout_text: 'T20 T17 D16  //  T19 T18 D16'},{checkout_score:  144 , checkout_text: 'T20 T20 D12  //  T18 T18 D18'},{checkout_score:
  145 , checkout_text: 'T20 T15 D20  //  T19 T16 D20'},{checkout_score:  146 , checkout_text: 'T20 T18 D16  //  T19 T19 D16'},{checkout_score:
  147 , checkout_text: 'T20 T17 D18  //  T19 T18 D18'},{checkout_score:  148 , checkout_text: 'T20 T20 D14  //  T20 T16 D20'},{checkout_score:
  149 , checkout_text: 'T20 T19 D16  //  T17 T20 D19'},{checkout_score:  150 , checkout_text: 'T20 T18 D18  //  BULL BULL BULL'},{checkout_score:
  151 , checkout_text: 'T20 T17 D20  //  T19 T20 D18'},{checkout_score:  152 , checkout_text: 'T20 T20 D16  //  T16 T18 BULL'},{checkout_score:
  153 , checkout_text: 'T20 T19 D18'},{checkout_score:  154 , checkout_text: 'T20 T18 D20'},{checkout_score:
  155 , checkout_text: 'T20 T19 D19'},{checkout_score:  156 , checkout_text: 'T20 T20 D18'},{checkout_score:
  157 , checkout_text: 'T20 T19 D20'},{checkout_score:  158 , checkout_text: 'T20 T20 D19'},{checkout_score:
  160 , checkout_text: 'T20 T20 D20'},{checkout_score:  161 , checkout_text: 'T20 T17 BULL'},{checkout_score:
  164 , checkout_text: 'T20 T18 BULL'},{checkout_score:  167 , checkout_text: 'T20 T19 BULL'},{checkout_score:
  170 , checkout_text: 'T20 T20 BULL'}
];

var audio_array = [ './my_audiofiles/NewRecording0.m4a',
'./my_audiofiles/NewRecording.m4a', 
'./my_audiofiles/New_Recording_2.m4a',
'./my_audiofiles/New_Recording_3.m4a',
'./my_audiofiles/New_Recording_4.m4a',
'./my_audiofiles/New_Recording_5.m4a',
'./my_audiofiles/NewRecording6.m4a',
'./my_audiofiles/NewRecording7.m4a',
'./my_audiofiles/NewRecording8.m4a',
'./my_audiofiles/NewRecording9.m4a',
'./my_audiofiles/NewRecording10.m4a',
'./my_audiofiles/NewRecording11.m4a',
'./my_audiofiles/NewRecording12.m4a',
'./my_audiofiles/NewRecording13.m4a',
'./my_audiofiles/NewRecording14.m4a',
'./my_audiofiles/NewRecording15.m4a',
'./my_audiofiles/NewRecording16.m4a',
'./my_audiofiles/NewRecording17.m4a',
'./my_audiofiles/NewRecording18.m4a',
'./my_audiofiles/NewRecording19.m4a',
'./my_audiofiles/NewRecording20.m4a',
'./my_audiofiles/NewRecording21.m4a',
'./my_audiofiles/NewRecording22.m4a',
'./my_audiofiles/NewRecording23.m4a',
'./my_audiofiles/NewRecording24.m4a',
'./my_audiofiles/NewRecording25.m4a',
'./my_audiofiles/NewRecording26.m4a',
'./my_audiofiles/NewRecording27.m4a',
'./my_audiofiles/NewRecording28.m4a',
'./my_audiofiles/NewRecording29.m4a',
'./my_audiofiles/NewRecording30.m4a',
'./my_audiofiles/NewRecording31.m4a',
'./my_audiofiles/NewRecording32.m4a',
'./my_audiofiles/NewRecording33.m4a',
'./my_audiofiles/NewRecording34.m4a',
'./my_audiofiles/NewRecording35.m4a',
'./my_audiofiles/NewRecording36.m4a',
'./my_audiofiles/NewRecording37.m4a',
'./my_audiofiles/NewRecording38.m4a',
'./my_audiofiles/NewRecording39.m4a',
'./my_audiofiles/NewRecording40.m4a',
'./my_audiofiles/NewRecording41.m4a',
'./my_audiofiles/NewRecording42.m4a',
'./my_audiofiles/NewRecording43.m4a',
'./my_audiofiles/NewRecording44.m4a',
'./my_audiofiles/NewRecording45.m4a',
'./my_audiofiles/NewRecording46.m4a',
'./my_audiofiles/NewRecording47.m4a',
'./my_audiofiles/NewRecording48.m4a',
'./my_audiofiles/NewRecording49.m4a',
'./my_audiofiles/NewRecording50.m4a',
'./my_audiofiles/NewRecording51.m4a',
'./my_audiofiles/NewRecording52.m4a',
'./my_audiofiles/NewRecording53.m4a',
'./my_audiofiles/NewRecording54.m4a',
'./my_audiofiles/NewRecording55.m4a',
'./my_audiofiles/NewRecording56.m4a',
'./my_audiofiles/NewRecording57.m4a',
'./my_audiofiles/NewRecording58.m4a',
'./my_audiofiles/NewRecording59.m4a',
'./my_audiofiles/NewRecording60.m4a',
'./my_audiofiles/NewRecording61.m4a',
'./my_audiofiles/NewRecording62.m4a',
'./my_audiofiles/NewRecording63.m4a',
'./my_audiofiles/NewRecording64.m4a',
'./my_audiofiles/NewRecording65.m4a',
'./my_audiofiles/NewRecording66.m4a',
'./my_audiofiles/NewRecording67.m4a',
'./my_audiofiles/NewRecording68.m4a',
'./my_audiofiles/NewRecording69.m4a',
'./my_audiofiles/NewRecording70.m4a',
'./my_audiofiles/NewRecording71.m4a',
'./my_audiofiles/NewRecording72.m4a',
'./my_audiofiles/NewRecording73.m4a',
'./my_audiofiles/NewRecording74.m4a',
'./my_audiofiles/NewRecording75.m4a',
'./my_audiofiles/NewRecording76.m4a',
'./my_audiofiles/NewRecording77.m4a',
'./my_audiofiles/NewRecording78.m4a',
'./my_audiofiles/NewRecording79.m4a',
'./my_audiofiles/NewRecording80.m4a',
'./my_audiofiles/NewRecording81.m4a',
'./my_audiofiles/NewRecording82.m4a',
'./my_audiofiles/NewRecording83.m4a',
'./my_audiofiles/NewRecording84.m4a',
'./my_audiofiles/NewRecording85.m4a',
'./my_audiofiles/NewRecording86.m4a',
'./my_audiofiles/NewRecording87.m4a',
'./my_audiofiles/NewRecording88.m4a',
'./my_audiofiles/NewRecording89.m4a',
'./my_audiofiles/NewRecording90.m4a',
'./my_audiofiles/NewRecording91.m4a',
'./my_audiofiles/NewRecording92.m4a',
'./my_audiofiles/NewRecording93.m4a',
'./my_audiofiles/NewRecording94.m4a',
'./my_audiofiles/NewRecording95.m4a',
'./my_audiofiles/NewRecording96.m4a',
'./my_audiofiles/NewRecording97.m4a',
'./my_audiofiles/NewRecording98.m4a',
'./my_audiofiles/NewRecording99.m4a',
'./my_audiofiles/NewRecording100.m4a',
'./my_audiofiles/NewRecording101.m4a',
'./my_audiofiles/NewRecording102.m4a',
'./my_audiofiles/NewRecording103.m4a',
'./my_audiofiles/NewRecording104.m4a',
'./my_audiofiles/NewRecording105.m4a',
'./my_audiofiles/NewRecording106.m4a',
'./my_audiofiles/NewRecording107.m4a',
'./my_audiofiles/NewRecording108.m4a',
'./my_audiofiles/NewRecording109.m4a',
'./my_audiofiles/NewRecording110.m4a',
'./my_audiofiles/NewRecording111.m4a',
'./my_audiofiles/NewRecording112.m4a',
'./my_audiofiles/NewRecording113.m4a',
'./my_audiofiles/NewRecording114.m4a',
'./my_audiofiles/NewRecording115.m4a',
'./my_audiofiles/NewRecording116.m4a',
'./my_audiofiles/NewRecording117.m4a',
'./my_audiofiles/NewRecording118.m4a',
'./my_audiofiles/NewRecording119.m4a',
'./my_audiofiles/NewRecording120.m4a',
'./my_audiofiles/NewRecording121.m4a',
'./my_audiofiles/NewRecording122.m4a',
'./my_audiofiles/NewRecording123.m4a',
'./my_audiofiles/NewRecording124.m4a',
'./my_audiofiles/NewRecording125.m4a',
'./my_audiofiles/NewRecording126.m4a',
'./my_audiofiles/NewRecording127.m4a',
'./my_audiofiles/NewRecording128.m4a',
'./my_audiofiles/NewRecording129.m4a',
'./my_audiofiles/NewRecording130.m4a',
'./my_audiofiles/NewRecording131.m4a',
'./my_audiofiles/NewRecording132.m4a',
'./my_audiofiles/NewRecording133.m4a',
'./my_audiofiles/NewRecording134.m4a',
'./my_audiofiles/NewRecording135.m4a',
'./my_audiofiles/NewRecording136.m4a',
'./my_audiofiles/NewRecording137.m4a',
'./my_audiofiles/NewRecording138.m4a',
'./my_audiofiles/NewRecording139.m4a',
'./my_audiofiles/NewRecording140.m4a',
'./my_audiofiles/NewRecording141.m4a',
'./my_audiofiles/NewRecording142.m4a',
'./my_audiofiles/NewRecording143.m4a',
'./my_audiofiles/NewRecording144.m4a',
'./my_audiofiles/NewRecording145.m4a',
'./my_audiofiles/NewRecording146.m4a',
'./my_audiofiles/NewRecording147.m4a',
'./my_audiofiles/NewRecording148.m4a',
'./my_audiofiles/NewRecording149.m4a',
'./my_audiofiles/NewRecording150.m4a',
'./my_audiofiles/NewRecording151.m4a',
'./my_audiofiles/NewRecording152.m4a',
'./my_audiofiles/NewRecording153.m4a',
'./my_audiofiles/NewRecording154.m4a',
'./my_audiofiles/NewRecording155.m4a',
'./my_audiofiles/NewRecording156.m4a',
'./my_audiofiles/NewRecording157.m4a',
'./my_audiofiles/NewRecording158.m4a',
'./my_audiofiles/NewRecording159.m4a',
'./my_audiofiles/NewRecording160.m4a',
'./my_audiofiles/NewRecording161.m4a',
'./my_audiofiles/NewRecording162.m4a',
'./my_audiofiles/NewRecording163.m4a',
'./my_audiofiles/NewRecording164.m4a',
'./my_audiofiles/NewRecording165.m4a',
'./my_audiofiles/NewRecording166.m4a',
'./my_audiofiles/NewRecording167.m4a',
'./my_audiofiles/NewRecording168.m4a',
'./my_audiofiles/NewRecording169.m4a',
'./my_audiofiles/NewRecording170.m4a',
'./my_audiofiles/NewRecording171.m4a',
'./my_audiofiles/NewRecording172.m4a',
'./my_audiofiles/NewRecording173.m4a',
'./my_audiofiles/NewRecording174.m4a',
'./my_audiofiles/NewRecording175.m4a',
'./my_audiofiles/NewRecording176.m4a',
'./my_audiofiles/NewRecording177.m4a',
'./my_audiofiles/NewRecording178.m4a',
'./my_audiofiles/NewRecording179.m4a',
'./my_audiofiles/NewRecording180.m4a',
];
var display_checkout = "no checkouts";
var display_checkout_p2 = "no checkouts";
var test_array = [501];
var test_array_p2=[501];

function displayALL(HTMLButtonElement){            
  your_throw_text += (HTMLButtonElement.getAttribute("data-num")); //value ophalen  
  document.getElementById("rob_Display").value=your_throw_text; //display value in box  
};
function displayALL2(HTMLButtonElement){            
  your_throw_text2 += (HTMLButtonElement.getAttribute("data-num"));   
  document.getElementById("rob_Display_p2").value=your_throw_text2; 
};
function undo_button(){
  your_throw_text = your_throw_text.substring(0, your_throw_text.length - 1); //cutting last digit  
  document.getElementById("rob_Display").value=your_throw_text;
};
function undo_button2(){
  your_throw_text2 = your_throw_text2.substring(0, your_throw_text2.length - 1); //cutting last digit  
  document.getElementById("rob_Display_p2").value=your_throw_text2;
};

function testFunction() {  
  //capture input field value
    your_throw = document.getElementById('rob_Display').value; 

  //audio finding the file      
      var to_get_audio = your_throw;
      var get_audio = audio_array[to_get_audio];     
      var audio_location = get_audio;      

  //execute audio
    var audio = new Audio(audio_location);
    audio.play();
    
  //more than 180
  if(your_throw > 180) {
    alert('Score cannot be higher than 180');
    return;
  }
 //negatives
 if(your_throw < 0) {
    alert('No negative scores');
    return;
  }
 //empty check
  if(!your_throw) {
    alert('please fill in a value');
    return;
  }
  //isNaN
  if(isNaN(your_throw)) {
    alert('This is not a number');
    return;
  }
  //final negative
  if(your_throw>rem_score){
    alert('KAPOT');
    return;
  }
  //impossible throws 3 darts
  if(impossible_array.includes(your_throw)){
    alert('IMPOSSIBLE THROW');
    return;
  }
  //no decimals
  if(your_throw % 1 != 0){
    alert('No decimals');
    return;
  }
  //don't end in 1
  if(parseInt(rem_score)-parseInt(your_throw)==1){
    alert ('Remaining score can not be 1');
    return;
  }

  //substract throw from remaining score
  rem_score = rem_score - your_throw; 

  //push new throw in the array   
  throws_array.push(your_throw); 
  rem_scores_array.push(rem_score);  
  test_array.push(rem_score + " (" + your_throw + ")");
  console.log(test_array);

  //checkouts
  var i = checkout_array.length;
  while (i--) {
    if(rem_score==checkout_array[i].checkout_score) {
      display_checkout = checkout_array[i].checkout_text;  
      document.getElementById("checkout_options").style.visibility="visible";
      document.getElementById("checkout_options").innerHTML = display_checkout; //show checkout in html    
    }        
  };   
  if(no_checkout_array.includes(rem_score)){    
    display_checkout = 'no checkouts';    
  }  

  //calculate average  
  var sum = 0;  
  for( var i = 0; i < throws_array.length; i++ ){
    sum += parseInt(throws_array[i]);
  }      
  var avg = 0.00;
  avg = sum / throws_array.length;

  //console.log("amount of throws " + throws_array.length);

  // max throw
  if (parseInt(your_throw)>parseInt(max_throw)){
   max_throw = your_throw;
  };

  //empty the box again
  your_throw_text='';

  //// updating the HTML
  //document.getElementById("all_throws").innerHTML = throws_array.join(" / ");
  //document.getElementById("rem_score_array").innerHTML = rem_scores_array.join("  (" + your_throw + ")"+" <p> </p> ");
  document.getElementById("rem_score_array").innerHTML = test_array.join("<p> </p>");
  document.getElementById("average_throw").innerHTML = " &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;AVG. " + avg.toFixed(2); 
  document.getElementById("remaining_score").innerHTML =  rem_score.toString(); //update value in HTML
  //document.getElementById("last_throw").innerHTML = your_throw; //update value in HTML
  document.getElementById('rob_Display').value=''; //clear the input field      
  document.getElementById("best_throw").innerHTML = "Best " + max_throw;
};


function testFunction_p2() {
    
    //capture input field value
    your_throw_p2 = document.getElementById('rob_Display_p2').value; 
   
    //audio finding the file      
          var to_get_audio = your_throw_p2;
          var get_audio = audio_array[to_get_audio];             
          var audio_location = get_audio;      
    
    //execute audio
        var audio = new Audio(audio_location);
        audio.play();
    
    //more than 180
         if(your_throw_p2 > 180) {
            alert('Score cannot be higher than 180');
            return;
          }
         //negatives
         if(your_throw_p2 < 0) {
            alert('No negative scores');
            return;
          }
         //empty check
          if(!your_throw_p2) {
            alert('please fill in a value');
            return;
          }
          //isNaN
          if(isNaN(your_throw_p2)) {
            alert('This is not a number');
            return;
          }
          //final negative
          if(your_throw_p2>rem_score_p2){
            alert('KAPOT');
            return;
          }
          //impossible throws 3 darts
          if(impossible_array.includes(your_throw_p2)){
            alert('IMPOSSIBLE THROW');
            return;
          }
          //no decimals
          if(your_throw_p2 % 1 != 0){
            alert('No decimals');
            return;
          }
          //don't end in 1
          if(parseInt(rem_score_p2)-parseInt(your_throw_p2)==1){
            alert ('Remaining score can not be 1');
            return;
          }


  //substract throw from remaining score  
  rem_score_p2 = rem_score_p2 - your_throw_p2; 

  //push new throw in the array   
  throws_array_p2.push(your_throw_p2);
  rem_scores_array_p2.push(rem_score_p2);  
  test_array_p2.push(rem_score_p2 + " (" + your_throw_p2 + ")");
  console.log(test_array_p2);   

  //checkouts
  var i = checkout_array.length;
  while (i--) {
    if(rem_score_p2==checkout_array[i].checkout_score) {
      display_checkout_p2 = checkout_array[i].checkout_text;    
      document.getElementById("checkout_options_p2").style.visibility="visible";
      document.getElementById("checkout_options_p2").innerHTML = display_checkout_p2; //show checkout in html      
    }        
  };   
  if(no_checkout_array.includes(rem_score_p2)){    
    display_checkout_p2 = 'no checkouts';
  }  

  //calculate average  
  var sum_p2 = 0;  
  for( var i = 0; i < throws_array_p2.length; i++ ){
    sum_p2 += parseInt(throws_array_p2[i]);
  }      
  var avg_p2 = 0.00;
  avg_p2 = sum_p2 / throws_array_p2.length;  

  // max throw
  if (parseInt(your_throw_p2)>parseInt(max_throw_p2)){
   max_throw_p2 = your_throw_p2;
  };  

  //empty the box again
  your_throw_text2='';

  // updating the HTML  
  document.getElementById("average_throw_p2").innerHTML = " &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;AVG. " + avg_p2.toFixed(2);   
  document.getElementById("remaining_score_p2").innerHTML =  rem_score_p2.toString(); //update value in HTML
  document.getElementById("rem_score_array_p2").innerHTML = test_array_p2.join("<p> </p>");  
  document.getElementById('rob_Display_p2').value=''; //clear the input field      
  document.getElementById("best_throw_p2").innerHTML = "Best " + max_throw_p2;
  //document.getElementById("all_throws_p2").innerHTML = throws_array_p2.join(" / ");
  //document.getElementById("last_throw_p2").innerHTML = your_throw_p2; //update value in HTML
  //document.getElementById("checkout_options_p2").innerHTML = display_checkout_p2; //show checkout in html
};
