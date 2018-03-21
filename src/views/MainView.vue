<template>
  <div class="chartA">
    <div class="chart-up">
      <div class="up-title">
        <div class="tip-title">3.2.1 全省所有玩法期报 (分地市含第三方)</div>
        <ul class="tip-ul">
          <li v-for="item in tips" :key="item.id" class="tip-li">
            <div><span class="tip-color" :style="{ background: item.color}"></span><span class="tip-name">{{ item.name }}</span></div>
          </li>
        </ul>
      </div>
      <div class="up-content">
        <div v-for="(item, index) in charts" :key="index" class="up-content-chart">
          <div :id="idNameUp(index)" style="width: 100%;height: 100%;"></div>
        </div>
      </div>
    </div>
    <div class="chart-down">
      <div class="down-title">
        <div class="tip-title">3.2.2 全省所有玩法日报 (分地市含第三方)</div>
      </div>
      <div class="down-content">
        <div v-for="(item, index) in charts" :key="index" class="down-content-chart">
          <div :id="idNameDowm(index)" style="width: 100%;height: 100%;"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import echarts from 'echarts'
export default {
  data () {
    return {
      tips: [
        {name: '七彩乐', color: '#6FE0D0', id: 0},
        {name: '刮刮乐', color: '#777FD5', id: 1},
        {name: '福彩3D', color: '#769BB5', id: 2},
        {name: '幸运五彩', color: '#C4BD6D', id: 3},
        {name: '好运射击', color: '#EAA546', id: 4},
        {name: '趣味高尔夫', color: '#DB6251', id: 5},
        {name: '连环夺宝', color: '#56C0F1', id: 6},
        {name: '三江风光', color: '#BE60C1', id: 7},
        {name: '开心一刻', color: '#7FC5BD', id: 8}
      ],
      charts: [
        {a: 1, b: 2},
        {a: 1, b: 2},
        {a: 1, b: 2},
        {a: 1, b: 2},
        {a: 1, b: 2},
        {a: 1, b: 2},
        {a: 1, b: 2},
        {a: 1, b: 2},
        {a: 1, b: 2},
        {a: 1, b: 2},
        {a: 1, b: 2},
        {a: 1, b: 2}
      ],
      chartsPie: [
        {name: '西安', value: [{on: 80, off: 20}, {on: 80, off: 20}, {on: 80, off: 20}, {on: 80, off: 20}, {on: 80, off: 20}, {on: 80, off: 20}, {on: 80, off: 20}, {on: 80, off: 20}, {on: 80, off: 20}]},
        {name: '宝鸡', value: [{on: 80, off: 20}, {on: 80, off: 20}, {on: 80, off: 20}, {on: 80, off: 20}, {on: 80, off: 20}, {on: 80, off: 20}, {on: 80, off: 20}, {on: 80, off: 20}, {on: 80, off: 20}]},
        {name: '咸阳', value: [{on: 80, off: 20}, {on: 80, off: 20}, {on: 80, off: 20}, {on: 80, off: 20}, {on: 80, off: 20}, {on: 80, off: 20}, {on: 80, off: 20}, {on: 80, off: 20}, {on: 80, off: 20}]},
        {name: '延安', value: [{on: 80, off: 20}, {on: 80, off: 20}, {on: 80, off: 20}, {on: 80, off: 20}, {on: 80, off: 20}, {on: 80, off: 20}, {on: 80, off: 20}, {on: 80, off: 20}, {on: 80, off: 20}]},
        {name: '铜川', value: [{on: 80, off: 20}, {on: 80, off: 20}, {on: 80, off: 20}, {on: 80, off: 20}, {on: 80, off: 20}, {on: 80, off: 20}, {on: 80, off: 20}, {on: 80, off: 20}, {on: 80, off: 20}]},
        {name: '商洛', value: [{on: 80, off: 20}, {on: 80, off: 20}, {on: 80, off: 20}, {on: 80, off: 20}, {on: 80, off: 20}, {on: 80, off: 20}, {on: 80, off: 20}, {on: 80, off: 20}, {on: 80, off: 20}]},
        {name: '渭南', value: [{on: 80, off: 20}, {on: 80, off: 20}, {on: 80, off: 20}, {on: 80, off: 20}, {on: 80, off: 20}, {on: 80, off: 20}, {on: 80, off: 20}, {on: 80, off: 20}, {on: 80, off: 20}]},
        {name: '汉中', value: [{on: 80, off: 20}, {on: 80, off: 20}, {on: 80, off: 20}, {on: 80, off: 20}, {on: 80, off: 20}, {on: 80, off: 20}, {on: 80, off: 20}, {on: 80, off: 20}, {on: 80, off: 20}]},
        {name: '安康', value: [{on: 80, off: 20}, {on: 80, off: 20}, {on: 80, off: 20}, {on: 80, off: 20}, {on: 80, off: 20}, {on: 80, off: 20}, {on: 80, off: 20}, {on: 80, off: 20}, {on: 80, off: 20}]},
        {name: '榆林', value: [{on: 80, off: 20}, {on: 80, off: 20}, {on: 80, off: 20}, {on: 80, off: 20}, {on: 80, off: 20}, {on: 80, off: 20}, {on: 80, off: 20}, {on: 80, off: 20}, {on: 80, off: 20}]},
        {name: '杨凌', value: [{on: 80, off: 20}, {on: 80, off: 20}, {on: 80, off: 20}, {on: 80, off: 20}, {on: 80, off: 20}, {on: 80, off: 20}, {on: 80, off: 20}, {on: 80, off: 20}, {on: 80, off: 20}]},
        {name: '沣东', value: [{on: 80, off: 20}, {on: 80, off: 20}, {on: 80, off: 20}, {on: 80, off: 20}, {on: 80, off: 20}, {on: 80, off: 20}, {on: 80, off: 20}, {on: 80, off: 20}, {on: 80, off: 20}]}
      ],
      colorArr: []
    }
  },
  components: {
    echarts
  },
  props: ['row', 'col'],
  created: function () {},
  mounted() {
    this.dramChart()
    this.dramPieChart()
  },
  methods: {
    idNameUp(index) {
      this.charts[index].id = 'chart_up_' + index
      return 'chart_up_' + index
    },
    idNameDowm(index) {
      this.chartsPie[index].id = 'chart_down_' + index
      return 'chart_down_' + index
    },
    barColor() {
      for (var item of this.tips) {
        this.colorArr.push(item.color)
      }
    },
    dramChart() {
      this.barColor()
      var colorArray = this.colorArr
      for (var item of this.charts) {
        var id = item.id
        var myChart = echarts.init(document.getElementById(id))
        var option = {
          tooltip: {
            trigger: 'axis',
            axisPointer: {
              type: 'shadow'
            }
          },
          legend: {
            data: []
          },
          grid: {
            containLabel: true,
            top: 10
          },
          xAxis: {
            type: 'value',
            inverse: true,
            boundaryGap: [0, 0.01],
            show: false
          },
          yAxis: {
            type: 'category',
            data: [18203, 23489, 29034, 104970, 131744, 630230, 18203, 23489, 29034],
            axisTick: {
              show: false
            },
            axisLabel: {
              interval: 0
            },
            position: 'right',
            axisLine: {
              onZero: false
            },
            offset: 10
          },
          series: [
            {
              name: '2011年',
              type: 'bar',
              itemStyle: {
                color: function(params) {
                  return colorArray[params.dataIndex]
                }
              },
              data: [18203, 23489, 29034, 104970, 131744, 630230, 18203, 23489, 29034]
            }
          ]
        }
        myChart.setOption(option)
      }
    },
    dramPieChart() {
      this.barColor()
      var colorArray = this.colorArr
      for (var item of this.chartsPie) {
        var id = item.id
        var myChart = echarts.init(document.getElementById(id))
        var option = {
          title: {
            show: true,
            text: item.name,
            bottom: 10,
            left: 'center',
            textStyle: {
              color: '#ccc',
              align: 'center',
              fontWeight: 'normal'
            }
          },
          backgroundColor: '#fff',
          color: colorArray,
          legend: {
            data: []
          },
          grid: {
            top: 10
          },
          series: []
        }
        item.value.map((v, i) => {
          var maxRadius = 90 - (i * 5) - (i * 4)
          var minRadius = maxRadius - 5
          var dataInfo = {
            type: 'pie',
            name: 'Line 1',
            hoverAnimation: true,
            clockWise: false, // 顺时针
            label: {
              show: false,
              position: 'inside'
            },
            radius: [maxRadius, minRadius],
            data: [{
              value: v.on,
              name: 'A',
              itemStyle: {
                color: colorArray[i]
              }
            }, {
              value: v.off,
              name: 'hide',
              itemStyle: {
                color: '#fff'
              }
            }]
          }
          option.series.push(dataInfo)
        })
        myChart.setOption(option)
      }
    }
  }
}
</script>

<style scoped>
  .chartA {
    width: 100%;
    height: 100%;
  }
  .chart-up, .chart-down {

  }
  .up-title, .down-title {
    width: 100%;
    height: 24px;
    line-height: 24px;
  }
  .tip-ul {
    float: left;
    list-style: none;
    width: 65%;
  }
  .tip-li {
    float: left;
    margin-right: 10px;
  }
  .tip-color {
    display: inline-block;
    width: 10px;
    height: 10px;
    border: 1px solid transparent;
    border-radius: 50%;
    margin-right: 10px;
  }
  .tip-title {
    float: left;
    width: 35%;
    text-align: center;
    font-size: 16px;
    font-weight: 400;
  }
  .up-content {
    height: 300px;
    margin-top: 20px;
  }
  .down-content {
    height: 600px;
    margin-top: 10px;
  }
  .up-content-chart {
    width: 8.3333333%;
    height: 300px;
    float: left;
  }
  .down-content-chart {
    width: 16.6666666%;
    height: 300px;
    float: left;
  }
</style>