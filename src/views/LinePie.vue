<template lang="html">
    <div class="line-pie" id="line-pie">
    </div>
</template>

<script>
export default {
  mounted() {
    this.initDraw()
    window.onresize = () => {
      const dom = document.getElementById('line-pie')
      const w = dom.offsetWidth
      const h = dom.offsetHeight
      console.log(w, h, 4)
      console.log('123')
      this.echartsDraw.resize()
    }
  },
  computed: {
    echartsDraw() {
      return this.echarts.init(document.getElementById('line-pie'))
    }
  },
  data() {
    return {
      // options: {
      //   name: '销售总额',
      //   title: '3.1.9 各市当年各玩法销售情况及所占比例',
      //   value: 60,
      //   total: 80
      // }
    }
  },
  props: {
    options: {
      type: Object,
      require: true
    }
  },
  methods: {
    initDraw() {
      var labelBottom = { // 灰色圈
        normal: {
          color: 'rgba(0,0,0,0)',
          label: {
            show: false
          }
        }
      }
      var labelColor = {
        emphasis: {
          show: false
        }
      }
      var series = []
      var item = []
      var colorList = ['#cbd0cf', '#d3a8cb', '#94a0cc', '#ac8c80', '#d6c498', '#c3bc8e', '#849aa3', '#8384ae', '#8cbfb9']
      for (var k = 0; k < 9; k++) {
        item.push({
          type: 'pie',
          itemStyle: {
            color: colorList[k]
          },
          center: [25 + '%', 30 + '%'], // 圆心
          radius: [5 * (k + 1), 5 * (k + 1) + 2], // 半径
          label: {
            normal: {
              show: false,
              position: 'center'
            },
            emphasis: {
              show: false,
              textStyle: {
                fontSize: '14'
              }
            }
          },
          labelLine: {
            normal: {
              show: false
            }
          },
          data: [
            {
              name: this.options.name,
              value: this.options.value,
              itemStyle: labelColor
            }, {
              name: 'other',
              value: this.options.total - this.options.value,
              itemStyle: labelBottom
            }
          ]
        })
      }
      series = series.concat(item)
      var option = {
        legend: {
          x: 'center',
          y: 'bottom',
          icon: 'circle',
          data: [this.options.name],
          label: {
            color: 'rgba(0,0,0,0)'
          }
        },
        title: {
          text: this.options.title,
          x: 'left'
        },
        color: ['#cbd0cf', '#d3a8cb', '#94a0cc', '#ac8c80', '#d6c498', '#c3bc8e', '#849aa3', '#8384ae', '#8cbfb9'],
        toolbox: {
          show: true,
          feature: {
            magicType: {
              show: true,
              type: ['pie']
            }
          }
        },
        series: series
      }
      this.echartsDraw.setOption(option)
    }
  }
}
</script>

<style lang="css" scoped>
.line-pie {
  width: 100%;
  height: 100%
}
</style>
