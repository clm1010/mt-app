<template>
  <div class="m-istyle">
    <dl @mouseover="handleMouseover">
      <dt>有格调</dt>
      <dd :class="{ active: kind === 'all' }" kind="all" keyword="景点">
        全部
      </dd>
      <dd :class="{ active: kind === 'part' }" kind="part" keyword="美食">
        约会聚餐
      </dd>
      <dd :class="{ active: kind === 'spa' }" kind="spa" keyword="丽人">
        丽人spa
      </dd>
      <dd :class="{ active: kind === 'movie' }" kind="movie" keyword="电影">
        电影演出
      </dd>
      <dd :class="{ active: kind === 'travel' }" kind="travel" keyword="旅游">
        品质出游
      </dd>
    </dl>
    <ul class="ibody">
      <li v-for="(item, curIndex) in cur" :key="curIndex">
        <el-card :body-style="{ padding: '0px' }" shadow="never">
          <img :src="item.src" :alt="item.title" class="image" />
          <ul class="cbody">
            <li class="title">{{ item.title }}</li>
            <!-- 判断是否为 全部 约会聚餐 -->
            <template v-if="kind === 'all' || kind === 'part'">
              <li class="sub-title">
                <span>{{ item.subTitle }}</span>
              </li>
              <li class="price">
                ￥<em>{{ item.price }}</em>
                <span class="old-price">门市价¥{{ item.oldPrice }}</span>
                <span class="bottom-right-info">{{ item.pos }}</span>
              </li>
            </template>
            <!-- 判断是否为 丽人spa 电影演出-->
            <template v-if="kind === 'spa' || kind === 'movie'">
              <li class="sub-title">
                <span>{{ item.subTitle }}</span>
              </li>
              <li class="price">
                ￥<em>{{ item.price }}</em
                ><span>/人均</span>
                <span class="bottom-right-info">{{ item.pos }}</span>
              </li>
            </template>
            <!-- 判断是否为 丽人spa 品质出游-->
            <template v-if="kind === 'travel'">
              <li class="sub-title">
                <span>
                  <b v-for="(v, k) in item.tag" :key="k">
                    {{ v }}
                  </b>
                </span>
              </li>
              <li class="price">
                ￥<em>{{ item.price }}</em
                ><span>/人均</span>
                <span class="bottom-right-info">{{ item.pos }}</span>
              </li>
            </template>
          </ul>
        </el-card>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Artistic',
  data() {
    return {
      kind: 'all',
      list: {
        all: [
          {
            title: '米兰西饼生日蛋糕（朝阳店）',
            src:
              '//p1.meituan.net/bbia/7f0667b9f9a967a6c392549140076a4c147223.jpg@368w_208h_1e_1c',
            subTitle:
              '店长推荐：8英寸法式慕斯蛋糕，匠心手作进口鲜奶明星款蛋糕，让味蕾带你去米兰1个，约8英寸，方形',
            price: '108',
            oldPrice: '228',
            pos: '鸟巢/水立方'
          },
          {
            title: '大董（王府井店）',
            src:
              '//p1.meituan.net/msmerchant/99b654036b936f1173a0ddbe9cfbc0e6115463.jpg@368w_208h_1e_1c',
            subTitle: '双人鲍鱼烤鸭套餐',
            price: '1599',
            oldPrice: '1926',
            pos: '王府井/东单'
          },
          {
            title: 'CAKEBOSS蛋糕老板（崇文门国瑞城店）',
            src:
              '//p1.meituan.net/msmerchant/b90728a06f0cb27c75105ece02fa720e732660.jpg@368w_208h_1e_1c',
            subTitle: '雪天鹅翻糖乳酪蛋糕1个，约4英寸，圆形',
            price: '199',
            oldPrice: '299',
            pos: '崇文门'
          },
          {
            title: '天安瑞嘉烤鸭',
            src:
              '//p0.meituan.net/merchantpic/8d40aacd77004b484151c1ee547918d287691.jpg@368w_208h_1e_1c',
            subTitle: '烤鸭3人套餐，提供免费WiFi',
            price: '198',
            oldPrice: '295',
            pos: '王府井/东单'
          },
          {
            title: '席上喳喳',
            src:
              '//p1.meituan.net/msmerchant/05bb74b46e977a1947d27e9cb48ddcd32391357.jpg@368w_208h_1e_1c',
            subTitle: '工作日单人餐，提供免费WiFi',
            price: '48',
            oldPrice: '76',
            pos: '王府井/前门'
          },
          {
            title: '天伦王朝酒店·盛华瑄中餐厅',
            src:
              '//p1.meituan.net/msmerchant/d8dd03c6ee1bf13f0ac8da2a098a0ab9101571.jpg@368w_208h_1e_1c',
            subTitle: '点心自助',
            price: '128',
            oldPrice: '168',
            pos: '王府井/东单'
          }
        ],
        part: [
          {
            title: '小徽宴餐厅',
            src:
              '//p1.meituan.net/msmerchant/17d8cd5405ccc74eb440af6fe7c8892f853757.png@368w_208h_1e_1c',
            subTitle: '店长推荐双人餐，有赠品',
            price: '218',
            oldPrice: '368',
            pos: '王府井/东单'
          },
          {
            title: '北京饭店诺金东33餐厅',
            src:
              '//p1.meituan.net/poi/697cf6a6e1785559a7bb31d0bf03c649110592.jpg@368w_208h_1e_1c',
            subTitle: '桌餐C，建议8-10人使用，可免费使用包间',
            price: '5000',
            oldPrice: '5954',
            pos: '王府井/东单'
          }
        ],
        spa: [
          {
            title: '木北造型（崇文门新世界店）',
            src:
              '//p1.meituan.net/wedding/8d26f93de654d433b17774e60a1fc5bd1028431.jpg@240w_180h_1e_1c_1l|watermark=1&&r=2&p=9&x=2&y=2&relative=1&o=20|368w_208h_1e_1c',
            subTitle: '木北造型（崇文门新世界店）',
            price: '5000',
            pos: '崇文门新世界'
          },
          {
            title: 'IN ONE SPA',
            src:
              '//p1.meituan.net/joymerchant/6396167491814167420-1176362-1494304583168.jpeg@240w_180h_1e_1c_1l|watermark=1&&r=2&p=9&x=2&y=2&relative=1&o=20|368w_208h_1e_1c',
            subTitle: 'IN ONE SPA',
            price: '394',
            pos: '王府井/东单'
          }
        ],
        movie: [
          {
            title: '百老汇影城（apm购物中心店）',
            src:
              '//p0.meituan.net/deal/__42960313__1244354.jpg@368w_208h_1e_1c',
            subTitle: '免押金,可停车,儿童票,可刷卡,RealD厅,60帧厅',
            price: '19.9',
            pos: '王府井/东单'
          },
          {
            title: '万达影城（CBD店）',
            src: '//p1.meituan.net/deal/201003/wanda.jpg@368w_208h_1e_1c',
            subTitle:
              '免押金,可停车,儿童票,IMAX厅,杜比全景声厅,60帧厅,RealD 6FL厅',
            price: '40.8',
            pos: '朝阳区/建国路'
          }
        ],
        travel: [
          {
            title: '梅地亚中心',
            src:
              '//p1.meituan.net/dnaimgdark/2b66548e54c58bf7c7e74d7488bd8ed61634727.jpg@368w_208h_1e_1c',
            tag: [
              '新客超值优惠',
              '酒店套餐',
              '亲子场景酒店',
              '发票推荐',
              '亲子酒店点评',
              '含早'
            ],
            price: '746',
            pos: '海淀区/复兴路乙11号'
          },
          {
            title: '北京嘉里大酒店',
            src:
              '//p1.meituan.net/dnaimgdark/7f2cd95ab0340402775572c72efb4f6a3498456.jpg@368w_208h_1e_1c',
            tag: ['亲子场景酒店', '发票推荐', '亲子酒店点评', '含早'],
            price: '2039',
            pos: '朝阳区/光华路1号'
          }
        ]
      }
    }
  },
  computed: {
    cur() {
      return this.list[this.kind]
    }
  },
  methods: {
    handleMouseover(e) {
      const dom = e.target
      const tag = dom.tagName.toLowerCase()
      if (tag === 'dd') {
        this.kind = dom.getAttribute('kind')
        const keyword = dom.getAttribute('keyword')
        console.log(keyword)
      }
    }
  }
}
</script>

<style lang="scss"></style>
