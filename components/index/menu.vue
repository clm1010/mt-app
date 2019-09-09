<template>
  <div class="m-menu">
    <dl class="nav" @mouseleave="handleMouseleave">
      <dt>全部分类</dt>
      <dd
        v-for="(item, index) in menu"
        :key="index"
        @mouseenter="handleMouseenter"
      >
        <i :class="item.type" />{{ item.title }}<span class="arrow" />
      </dd>
    </dl>
    <div
      v-if="kind"
      class="detail"
      @mouseenter="handleSover"
      @mouseleave="handleSout"
    >
      <template v-for="(curItem, curIndex) in curdetail.child">
        <h4 :key="curIndex">
          {{ curItem.title }}
        </h4>
        <span v-for="v in curItem.child" :key="v">{{ v }}</span>
      </template>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Emenu',
  data() {
    return {
      kind: '', // 鼠标hover 类型
      menu: [
        {
          type: 'food',
          title: '美食',
          child: [
            {
              title: '美食',
              child: [
                '代金券',
                '甜点饮品',
                '火锅',
                '自助餐',
                '小吃快餐',
                '日韩料理',
                '西餐',
                '聚餐宴请',
                '烧烤烤肉',
                '东北菜',
                '川湘菜',
                '江浙菜',
                '香锅烤鱼',
                '粤港菜',
                '中式烧烤/烤串',
                '西北菜',
                '咖啡酒吧茶馆',
                '云贵菜',
                '东南亚菜',
                '海鲜',
                '素食',
                '台湾/客家菜',
                '创意菜',
                '汤/粥/炖菜',
                '蒙餐',
                '新疆菜',
                '其他美食',
                '京菜鲁菜'
              ]
            }
          ]
        },
        {
          type: 'takeout',
          title: '外卖',
          child: [
            {
              title: '外卖',
              child: ['美团外卖']
            }
          ]
        },
        {
          type: 'hotel',
          title: '酒店HOT',
          child: [
            {
              title: '酒店HOT',
              child: ['经济型', '舒适/三星', '高档/四星', '豪华/五星']
            }
          ]
        },
        {
          type: 'homestay',
          title: '榛果民宿',
          child: [
            {
              title: '榛果民宿',
              child: ['美团外卖']
            }
          ]
        },
        {
          type: 'movie',
          title: '猫眼电影',
          child: [
            {
              title: '猫眼电影',
              child: ['美团外卖']
            }
          ]
        },
        {
          type: 'airport',
          title: '机票 / 火车票',
          child: [
            {
              title: '机票 / 火车票',
              child: ['美团外卖']
            }
          ]
        },
        {
          type: 'ktv',
          title: '休闲娱乐 / KTV',
          child: [
            {
              title: '休闲娱乐 / KTV',
              child: ['美团外卖']
            }
          ]
        },
        {
          type: 'life',
          title: '生活服务',
          child: [
            {
              title: '生活服务',
              child: ['美团外卖']
            }
          ]
        },
        {
          type: 'hair',
          title: '丽人 / 美发 / 医学美容',
          child: [
            {
              title: '丽人 / 美发 / 医学美容',
              child: ['美团外卖']
            }
          ]
        },
        {
          type: 'marry',
          title: '结婚 / 婚纱摄影 / 婚宴',
          child: [
            {
              title: '结婚 / 婚纱摄影 / 婚宴',
              child: ['美团外卖']
            }
          ]
        },
        {
          type: 'offspring',
          title: '亲子 / 儿童乐园 / 幼教',
          child: [
            {
              title: '亲子 / 儿童乐园 / 幼教',
              child: ['美团外卖']
            }
          ]
        },
        {
          type: 'sport',
          title: '运动健身 / 健身中心',
          child: [
            {
              title: '运动健身 / 健身中心',
              child: ['美团外卖']
            }
          ]
        },
        {
          type: 'furniture',
          title: '家装 / 建材 / 家居',
          child: [
            {
              title: '家装 / 建材 / 家居',
              child: ['美团外卖']
            }
          ]
        },
        {
          type: 'study',
          title: '学习培训 / 音乐培训',
          child: [
            {
              title: '学习培训 / 音乐培训',
              child: ['美团外卖']
            }
          ]
        },
        {
          type: 'health',
          title: '医疗健康 / 宠物 / 爱车',
          child: [
            {
              title: '医疗健康 / 宠物 / 爱车',
              child: ['美团外卖']
            }
          ]
        },
        {
          type: 'bar',
          title: '酒吧 / 密室逃脱',
          child: [
            {
              title: '玩乐',
              child: [
                'KTV',
                '酒吧',
                '密室逃脱',
                '游乐游艺',
                '网吧网咖',
                '私人影院',
                'DIY手工坊',
                '桌面游戏',
                '采摘/农家乐',
                '棋牌室',
                '轰趴馆',
                '真人CS',
                'VR',
                '其他玩乐'
              ]
            }
          ]
        }
      ]
    }
  },
  computed: {
    curdetail() {
      return this.menu.filter((item) => item.type === this.kind)[0]
    }
  },
  methods: {
    /** 鼠标离开 全部分类 nav */
    handleMouseleave() {
      const self = this
      self._timer = setTimeout(() => {
        self.kind = ''
      }, 150)
    },
    /** 鼠标进入 全部分类 nav 中的 dd */
    handleMouseenter(e) {
      this.kind = e.target.querySelector('i').className
    },
    /** 鼠标进入 右侧detail 清除时间 */
    handleSover() {
      clearTimeout(this._timer)
    },
    /** 鼠标离开 右侧detail */
    handleSout() {
      this.kind = ''
    }
  }
}
</script>
<style lang="scss"></style>
