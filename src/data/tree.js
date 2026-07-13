// 生命の進化系統樹データ
// 各ノードは分類群または動物種。leaf（葉）には図鑑説明を付与する。

export const treeData = {
  id: 'luca',
  name: '共通祖先',
  latin: 'LUCA',
  kind: 'root',
  info: {
    era: '約40億年前',
    summary: 'すべての生命の共通祖先（LUCA）。原始の海に生まれた単細胞生物で、あらゆる生き物の系統はここに遡る。',
    facts: ['全生物の起源', 'RNA・DNAの祖型を持つ', '深海の熱水噴出孔で誕生した説が有力'],
  },
  children: [
    {
      id: 'porifera',
      name: '海綿動物',
      latin: 'Porifera',
      kind: 'clade',
      info: {
        era: '約6億年前',
        summary: '最も原始的な多細胞動物。神経も筋肉も持たず、体に開いた無数の孔から水を取り込んで濾過摂食する。',
        facts: ['体を分解しても再び集合する', '骨片で体を支える', 'カイメン（海綿）として利用された'],
      },
    },
    {
      id: 'cnidaria',
      name: '刺胞動物',
      latin: 'Cnidaria',
      kind: 'clade',
      children: [
        {
          id: 'jellyfish',
          name: 'クラゲ',
          latin: 'Medusozoa',
          kind: 'animal',
          info: {
            era: '約5.8億年前〜現在',
            summary: '刺胞という毒針を持つ触手で獲物を捕らえる。体の95%以上が水分で、脳を持たず散在神経系で泳ぐ。',
            facts: ['脳も心臓も持たない', 'ベニクラゲは若返ることで知られる', '9割以上が水でできている'],
          },
        },
        {
          id: 'coral',
          name: 'サンゴ',
          latin: 'Anthozoa',
          kind: 'animal',
          info: {
            era: '約5億年前〜現在',
            summary: '無数のポリプが集まって群体をつくる動物。体内に共生藻を宿し、光合成の恵みを受けてサンゴ礁を築く。',
            facts: ['植物ではなく動物', '共生藻と共に生きる', '海の熱帯雨林とも呼ばれる'],
          },
        },
      ],
    },
    {
      id: 'bilateria',
      name: '左右相称動物',
      latin: 'Bilateria',
      kind: 'clade',
      children: [
        {
          id: 'protostomia',
          name: '前口動物',
          latin: 'Protostomia',
          kind: 'clade',
          children: [
            {
              id: 'arthropoda',
              name: '節足動物',
              latin: 'Arthropoda',
              kind: 'clade',
              children: [
                {
                  id: 'butterfly',
                  name: 'チョウ',
                  latin: 'Lepidoptera',
                  kind: 'animal',
                  info: {
                    era: '約1億年前〜現在',
                    summary: '幼虫から蛹を経て成虫へと完全変態する昆虫。鱗粉に覆われた翅を持ち、花の蜜を糧に飛び回る。',
                    facts: ['さなぎの中で体を作り替える', '翅の色は鱗粉の構造色', '花と共に進化した'],
                  },
                },
                {
                  id: 'crab',
                  name: 'カニ',
                  latin: 'Brachyura',
                  kind: 'animal',
                  info: {
                    era: '約2億年前〜現在',
                    summary: '硬い外骨格と一対の鋏脚を持つ甲殻類。横歩きが特徴で、脱皮を繰り返して成長する。',
                    facts: ['脱皮で成長する', '横に歩くのは関節の構造ゆえ', '再生能力で失った脚を取り戻す'],
                  },
                },
                {
                  id: 'stagbeetle',
                  name: 'クワガタ',
                  latin: 'Lucanidae',
                  kind: 'animal',
                  info: {
                    era: '約2億年前〜現在',
                    summary: '大顎を武器に持つ甲虫。硬い前翅の下に飛翔用の後翅をたたみ、樹液を求めて夜の森に集まる。',
                    facts: ['大顎は雄同士の戦いの武器', '幼虫は朽ち木を食べて育つ', '甲虫は昆虫で最も種類が多い'],
                  },
                },
                {
                  id: 'ant',
                  name: 'アリ',
                  latin: 'Formicidae',
                  kind: 'animal',
                  info: {
                    era: '約1.4億年前〜現在',
                    summary: '女王を中心に高度な社会をつくる昆虫。フェロモンで道しるべを描き、数万匹が一つの巣として振る舞う。',
                    facts: ['においで会話する', '自分の体重の何十倍も運ぶ', '農業や牧畜をする種もいる'],
                  },
                },
                {
                  id: 'spider',
                  name: 'クモ',
                  latin: 'Araneae',
                  kind: 'animal',
                  info: {
                    era: '約3億年前〜現在',
                    summary: '8本の脚と糸を操るクモ綱。昆虫ではなく、腹から出す絹糸で網を張り、獲物を捕らえて体外消化する。',
                    facts: ['昆虫ではない（脚が8本）', '糸は鋼より強い種もいる', '消化液で溶かしてから吸う'],
                  },
                },
                {
                  id: 'dragonfly',
                  name: 'トンボ',
                  latin: 'Odonata',
                  kind: 'animal',
                  info: {
                    era: '約3億年前〜現在',
                    summary: '4枚の翅を別々に動かして自在に飛ぶ昆虫。空中で静止もでき、大きな複眼で獲物を追う空の狩人。',
                    facts: ['前後左右に飛べる', '複眼は数万個の目の集合', '幼虫（ヤゴ）は水中で暮らす'],
                  },
                },
              ],
            },
            {
              id: 'mollusca',
              name: '軟体動物',
              latin: 'Mollusca',
              kind: 'clade',
              children: [
                {
                  id: 'octopus',
                  name: 'タコ',
                  latin: 'Octopoda',
                  kind: 'animal',
                  info: {
                    era: '約3億年前〜現在',
                    summary: '8本の腕と高度な知能を持つ軟体動物。体色を瞬時に変え、無脊椎動物随一の脳を誇る。',
                    facts: ['心臓を3つ持つ', '体色と質感を自在に変える', '道具を使うほど賢い'],
                  },
                },
                {
                  id: 'snail',
                  name: 'カタツムリ',
                  latin: 'Gastropoda',
                  kind: 'animal',
                  info: {
                    era: '約5億年前〜現在',
                    summary: '螺旋状の殻を背負う陸の巻貝。粘液を分泌しながら這い進み、雌雄同体で繁殖する。',
                    facts: ['雌雄同体', '殻は炭酸カルシウム製', '歯舌に無数の歯を持つ'],
                  },
                },
                {
                  id: 'squid',
                  name: 'イカ',
                  latin: 'Teuthida',
                  kind: 'animal',
                  info: {
                    era: '約3億年前〜現在',
                    summary: '10本の腕を持つ軟体動物。体内に残る細い甲が貝殻の名残で、水を噴射してロケットのように泳ぐ。',
                    facts: ['血の色が青い', '墨を吐いて身を守る', '無脊椎動物で最も大きな目を持つ'],
                  },
                },
              ],
            },
          ],
        },
        {
          id: 'deuterostomia',
          name: '後口動物',
          latin: 'Deuterostomia',
          kind: 'clade',
          children: [
            {
              id: 'starfish',
              name: 'ヒトデ',
              latin: 'Asteroidea',
              kind: 'animal',
              info: {
                era: '約4.5億年前〜現在',
                summary: '五放射相称の体を持つ棘皮動物。管足を使って歩き、胃を体外に出して獲物を消化する。',
                facts: ['腕を切られても再生する', '胃を体の外に出して食べる', '脳を持たない'],
              },
            },
            {
              id: 'chordata',
              name: '脊索動物',
              latin: 'Chordata',
              kind: 'clade',
              children: [
                {
                  id: 'fish',
                  name: '魚類',
                  latin: 'Pisces',
                  kind: 'clade',
                  children: [
                    {
                      id: 'shark',
                      name: 'サメ',
                      latin: 'Selachimorpha',
                      kind: 'animal',
                      info: {
                        era: '約4.5億年前〜現在',
                        summary: '軟骨でできた骨格を持つ海の頂点捕食者。鋭い嗅覚と電気感覚で獲物を探し、生涯歯が生え替わる。',
                        facts: ['骨がすべて軟骨', '歯は生涯生え替わる', '恐竜より古い時代から存在する'],
                      },
                    },
                    {
                      id: 'coelacanth',
                      name: 'シーラカンス',
                      latin: 'Coelacanthiformes',
                      kind: 'animal',
                      info: {
                        era: '約4億年前〜現在',
                        summary: '「生きた化石」と呼ばれる肉鰭類。肉厚のひれは四肢動物の祖先を思わせ、深海で今も生き続ける。',
                        facts: ['生きた化石', '肉厚のひれは四肢の原型', '一度は絶滅したと思われていた'],
                      },
                    },
                    {
                      id: 'tuna',
                      name: 'マグロ',
                      latin: 'Thunnus',
                      kind: 'animal',
                      info: {
                        era: '約6000万年前〜現在',
                        summary: '大海を回遊する高速の硬骨魚。止まると呼吸できないため泳ぎ続け、体温を海水より高く保てる稀な魚。',
                        facts: ['泳ぎ続けないと死ぬ', '時速80kmで泳ぐ', '魚には珍しく体を温められる'],
                      },
                    },
                    {
                      id: 'seahorse',
                      name: 'タツノオトシゴ',
                      latin: 'Hippocampus',
                      kind: 'animal',
                      info: {
                        era: '約2300万年前〜現在',
                        summary: '立って泳ぐ変わった姿の魚。尾で海藻に巻きつき、オスが袋の中で卵を育てて出産する。',
                        facts: ['オスが出産する', 'これでも魚の仲間', '尾で海藻につかまる'],
                      },
                    },
                    {
                      id: 'eel',
                      name: 'ウナギ',
                      latin: 'Anguilla',
                      kind: 'animal',
                      info: {
                        era: '約1億年前〜現在',
                        summary: '川と海を行き来する細長い魚。数千kmを旅して深海で産卵し、その生態は長く謎に包まれていた。',
                        facts: ['産卵場所は最近まで謎だった', '皮膚でも呼吸できる', '稚魚は透明な葉の形'],
                      },
                    },
                  ],
                },
                {
                  id: 'tetrapoda',
                  name: '四肢動物',
                  latin: 'Tetrapoda',
                  kind: 'clade',
                  children: [
                    {
                      id: 'frog',
                      name: 'カエル',
                      latin: 'Anura',
                      kind: 'animal',
                      info: {
                        era: '約2億年前〜現在',
                        summary: '水と陸をまたいで暮らす両生類。オタマジャクシからの変態で肺呼吸へ移り、皮膚でも呼吸する。',
                        facts: ['皮膚で呼吸できる', '変態で尾を失う', '陸へ上がった脊椎動物の名残'],
                      },
                    },
                    {
                      id: 'salamander',
                      name: 'サンショウウオ',
                      latin: 'Caudata',
                      kind: 'animal',
                      info: {
                        era: '約1.6億年前〜現在',
                        summary: '尾を残したまま成長する両生類。ずんぐりした体で湿った林に暮らし、失った脚さえも再生する力を持つ。',
                        facts: ['脚を切られても再生する', '「生きた化石」の一種', 'オオサンショウウオは1mを超える'],
                      },
                    },
                    {
                      id: 'amniota',
                      name: '有羊膜類',
                      latin: 'Amniota',
                      kind: 'clade',
                      children: [
                        {
                          id: 'reptilia',
                          name: '爬虫類',
                          latin: 'Reptilia',
                          kind: 'clade',
                          children: [
                            {
                              id: 'snake',
                              name: 'ヘビ',
                              latin: 'Serpentes',
                              kind: 'animal',
                              info: {
                                era: '約1億年前〜現在',
                                summary: '四肢を失い細長い体を得た爬虫類。舌で空気の匂いを捉え、顎を外して大きな獲物を丸呑みにする。',
                                facts: ['進化の過程で脚を失った', '舌で匂いを感じる', '顎を外して丸呑みする'],
                              },
                            },
                            {
                              id: 'turtle',
                              name: 'カメ',
                              latin: 'Testudines',
                              kind: 'animal',
                              info: {
                                era: '約2.2億年前〜現在',
                                summary: '肋骨が変化した甲羅で身を守る爬虫類。恐竜時代から姿をほとんど変えず、驚くほど長命な種も多い。',
                                facts: ['甲羅は肋骨が変化したもの', '恐竜時代から生き延びた', '百年を超えて生きる種もいる'],
                              },
                            },
                            {
                              id: 'trex',
                              name: 'ティラノサウルス',
                              latin: 'Tyrannosaurus',
                              kind: 'animal',
                              info: {
                                era: '約6800万年前',
                                summary: '白亜紀末に君臨した最大級の肉食恐竜。強靭な顎と鋭い歯で獲物を砕き、鳥類の遠い親戚にあたる。',
                                facts: ['噛む力は現生動物最強級', '鳥類の近縁とされる', '白亜紀末に絶滅した'],
                              },
                            },
                            {
                              id: 'crocodile',
                              name: 'ワニ',
                              latin: 'Crocodilia',
                              kind: 'animal',
                              info: {
                                era: '約9500万年前〜現在',
                                summary: '恐竜と祖先を同じくする水辺の待ち伏せ型捕食者。姿をほとんど変えず、鳥類に最も近い現生爬虫類。',
                                facts: ['鳥に最も近い爬虫類', '恐竜時代から姿が変わらない', '待ち伏せて一気に襲う'],
                              },
                            },
                            {
                              id: 'chameleon',
                              name: 'カメレオン',
                              latin: 'Chamaeleonidae',
                              kind: 'animal',
                              info: {
                                era: '約6000万年前〜現在',
                                summary: '体色を変えるトカゲの仲間。左右別々に動く目で360度を見張り、伸びる舌で一瞬にして虫を捕らえる。',
                                facts: ['左右の目を別々に動かせる', '体色で気分も表す', '舌は体長より長く伸びる'],
                              },
                            },
                          ],
                        },
                        {
                          id: 'aves',
                          name: '鳥類',
                          latin: 'Aves',
                          kind: 'clade',
                          children: [
                            {
                              id: 'eagle',
                              name: 'ワシ',
                              latin: 'Accipitridae',
                              kind: 'animal',
                              info: {
                                era: '約5000万年前〜現在',
                                summary: '恐竜の子孫である猛禽類。人間の数倍の視力で獲物を見つけ、鉤爪と嘴で大空の狩人となる。',
                                facts: ['恐竜の直系の子孫', '視力は人の数倍', '骨は中空で軽い'],
                              },
                            },
                            {
                              id: 'penguin',
                              name: 'ペンギン',
                              latin: 'Spheniscidae',
                              kind: 'animal',
                              info: {
                                era: '約6000万年前〜現在',
                                summary: '空を捨て海を飛ぶ道を選んだ鳥。翼はひれとなり、極寒の地で群れをなして子を育てる。',
                                facts: ['翼で水中を飛ぶ', '飛ぶことをやめた鳥', '厳寒の中で子育てする'],
                              },
                            },
                            {
                              id: 'owl',
                              name: 'フクロウ',
                              latin: 'Strigiformes',
                              kind: 'animal',
                              info: {
                                era: '約6000万年前〜現在',
                                summary: '夜を支配する猛禽。柔らかな羽で音もなく飛び、正面を向いた両目と左右非対称の耳で暗闇の獲物を捉える。',
                                facts: ['ほぼ無音で飛べる', '首を約270度回せる', '暗闇でも獲物を音で探す'],
                              },
                            },
                            {
                              id: 'ostrich',
                              name: 'ダチョウ',
                              latin: 'Struthio',
                              kind: 'animal',
                              info: {
                                era: '約2000万年前〜現在',
                                summary: '現生で最大の鳥。空を飛ぶ代わりに走る道を選び、時速70kmで駆け、鳥類最大の卵を産む。',
                                facts: ['世界最大の鳥', '時速70kmで走る', '目は脳より大きい'],
                              },
                            },
                            {
                              id: 'hummingbird',
                              name: 'ハチドリ',
                              latin: 'Trochilidae',
                              kind: 'animal',
                              info: {
                                era: '約2200万年前〜現在',
                                summary: '世界最小級の鳥。1秒に数十回も翼を打って空中で静止し、後ろ向きにも飛べる唯一の鳥として花の蜜を吸う。',
                                facts: ['後ろ向きに飛べる', '心拍は1分に1000回超', '空中で止まっていられる'],
                              },
                            },
                          ],
                        },
                        {
                          id: 'mammalia',
                          name: '哺乳類',
                          latin: 'Mammalia',
                          kind: 'clade',
                          children: [
                            {
                              id: 'platypus',
                              name: 'カモノハシ',
                              latin: 'Ornithorhynchus',
                              kind: 'animal',
                              info: {
                                era: '約1500万年前〜現在',
                                summary: '卵を産む原始的な哺乳類。嘴で電気を感じ取り、毒を持つ蹴爪を備えるという類を見ない存在。',
                                facts: ['哺乳類なのに卵を産む', '嘴で電気を感知する', 'オスは毒を持つ'],
                              },
                            },
                            {
                              id: 'kangaroo',
                              name: 'カンガルー',
                              latin: 'Macropodidae',
                              kind: 'animal',
                              info: {
                                era: '約2000万年前〜現在',
                                summary: '育児嚢で子を育てる有袋類。強靭な後脚で跳躍し、太い尾を第三の脚のように使って進む。',
                                facts: ['お腹の袋で子育てする', '後ろ向きに歩けない', '尾も脚として使う'],
                              },
                            },
                            {
                              id: 'whale',
                              name: 'クジラ',
                              latin: 'Cetacea',
                              kind: 'animal',
                              info: {
                                era: '約5000万年前〜現在',
                                summary: '海へ還った哺乳類。祖先は陸を歩く獣で、地球最大の動物シロナガスクジラもこの仲間に含まれる。',
                                facts: ['祖先は陸生の哺乳類', '地球史上最大の動物', '歌でコミュニケーションする'],
                              },
                            },
                            {
                              id: 'elephant',
                              name: 'ゾウ',
                              latin: 'Proboscidea',
                              kind: 'animal',
                              info: {
                                era: '約5000万年前〜現在',
                                summary: '陸上最大の哺乳類。器用な鼻で物をつかみ、高い知能と豊かな社会性で群れをなして暮らす。',
                                facts: ['鼻は上唇と鼻が融合したもの', '仲間の死を悼む行動を見せる', '低周波で遠くと交信する'],
                              },
                            },
                            {
                              id: 'lion',
                              name: 'ライオン',
                              latin: 'Panthera leo',
                              kind: 'animal',
                              info: {
                                era: '約100万年前〜現在',
                                summary: '群れで狩りをする唯一の大型ネコ科。プライドと呼ばれる集団を築き、雄は立派なたてがみを誇る。',
                                facts: ['ネコ科で唯一群れをつくる', '狩りの主役は雌', 'たてがみは強さの象徴'],
                              },
                            },
                            {
                              id: 'human',
                              name: 'ヒト',
                              latin: 'Homo sapiens',
                              kind: 'animal',
                              info: {
                                era: '約30万年前〜現在',
                                summary: '直立二足歩行と巨大な脳を得た霊長類。言語と文化を築き、この進化の樹形図を描くに至った種。',
                                facts: ['言語と文化を持つ', '直立二足歩行する', '進化を記述する唯一の生き物'],
                              },
                            },
                            {
                              id: 'chimpanzee',
                              name: 'チンパンジー',
                              latin: 'Pan troglodytes',
                              kind: 'animal',
                              info: {
                                era: '約200万年前〜現在',
                                summary: 'ヒトに最も近い霊長類。道具を作り、仲間と協力し、感情豊かに暮らす。DNAの約99%をヒトと共有する。',
                                facts: ['ヒトと最も近い動物', '道具を作って使う', '仲間を慰める行動を見せる'],
                              },
                            },
                            {
                              id: 'bat',
                              name: 'コウモリ',
                              latin: 'Chiroptera',
                              kind: 'animal',
                              info: {
                                era: '約5000万年前〜現在',
                                summary: '空を飛ぶ唯一の哺乳類。指の間に張った膜を翼として羽ばたき、超音波の反響で暗闇を「見る」。',
                                facts: ['飛べる唯一の哺乳類', '超音波で周囲を捉える', '翼は伸びた指の間の膜'],
                              },
                            },
                            {
                              id: 'panda',
                              name: 'パンダ',
                              latin: 'Ailuropoda',
                              kind: 'animal',
                              info: {
                                era: '約300万年前〜現在',
                                summary: '竹を主食に選んだ変わり者のクマ。肉食動物の体でありながら、6本目の指のような骨で竹を握って食べる。',
                                facts: ['クマの仲間', '一日の大半を食事に費やす', '「第6の指」で竹をつかむ'],
                              },
                            },
                            {
                              id: 'horse',
                              name: 'ウマ',
                              latin: 'Equus',
                              kind: 'animal',
                              info: {
                                era: '約400万年前〜現在',
                                summary: '草原を駆けるために進化した奇蹄類。祖先は犬ほどの大きさで、指が減って一本の蹄になり、走る力を得た。',
                                facts: ['蹄は中指1本が変化したもの', '立ったまま眠れる', '視野はほぼ360度'],
                              },
                            },
                            {
                              id: 'koala',
                              name: 'コアラ',
                              latin: 'Phascolarctos',
                              kind: 'animal',
                              info: {
                                era: '約2400万年前〜現在',
                                summary: '木の上で一生を送る有袋類。毒を含むユーカリの葉だけを食べ、一日20時間も眠って省エネで暮らす。',
                                facts: ['袋を持つ有袋類', 'ユーカリしか食べない', '一日20時間眠る'],
                              },
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};

// --- 3Dレイアウトの計算 ---
// 深さ(depth)で高さ(y)を決め、葉に角度を割り当てて放射状に配置する。
const LEVEL_HEIGHT = 9;
const RADIUS_STEP = 7;

function assignLeafAngles(node, counter) {
  if (!node.children || node.children.length === 0) {
    node._angle = counter.value * counter.step;
    counter.value += 1;
    return node._angle;
  }
  let sum = 0;
  node.children.forEach((c) => {
    sum += assignLeafAngles(c, counter);
  });
  node._angle = sum / node.children.length;
  return node._angle;
}

function countLeaves(node) {
  if (!node.children || node.children.length === 0) return 1;
  return node.children.reduce((acc, c) => acc + countLeaves(c), 0);
}

// ノードIDから決定的な擬似乱数[0,1)を得る（毎回同じ配置になるようにする）
function hash01(str, salt) {
  let h = (2166136261 ^ salt) >>> 0;
  for (let i = 0; i < str.length; i++) {
    h ^= str.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return ((h >>> 0) % 100000) / 100000;
}

function assignPositions(node, depth, nodes, links, parent) {
  // 深さ0（共通祖先）は原点に固定。それ以外は少し揺らぎを加えて自然な散らばりにする
  const j = depth === 0 ? 0 : 1;
  const rRadius = hash01(node.id, 11);
  const rAngle = hash01(node.id, 23);
  const rHeight = hash01(node.id, 37);

  const angle = node._angle + (rAngle - 0.5) * 0.38 * j;
  const radius = depth * RADIUS_STEP * (0.82 + rRadius * 0.4 * j);
  const y = depth * LEVEL_HEIGHT + (rHeight - 0.5) * LEVEL_HEIGHT * 0.7 * j;

  const x = Math.cos(angle) * radius;
  const z = Math.sin(angle) * radius;
  node.position = [x, y, z];
  nodes.push(node);
  if (parent) {
    links.push({ from: parent.position, to: node.position, id: `${parent.id}-${node.id}` });
  }
  if (node.children) {
    node.children.forEach((c) => assignPositions(c, depth + 1, nodes, links, node));
  }
}

export function buildLayout() {
  const leaves = countLeaves(treeData);
  const counter = { value: 0, step: (Math.PI * 2) / leaves };
  assignLeafAngles(treeData, counter);
  const nodes = [];
  const links = [];
  assignPositions(treeData, 0, nodes, links, null);
  return { nodes, links };
}
