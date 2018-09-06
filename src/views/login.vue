<template>
  <div class="chartB">
    <div class="chart-left">
      <div id="chart-left-a" style="width:40%;height:100%"></div>
      <div class="chart-left-b" style="width:20%;height:100%">
        <ul class="year-list">
          <li v-for="(item, index) in yearList" :key="index" class="year-info" :style="{ color: item.color }" @click="selYear(index)">{{item.name}}</li>
        </ul>
      </div>
      <div id="chart-left-c" style="width:40%;height:100%"></div>
    </div>
    <div class="chart-right">
      <div class="right-top">
        <div class="right-top-style">3.2.5 全省历年销量及增幅</div>
        <div id="right-top-chart" style="width:100%;height:100%;min-height: 300px;"></div>
      </div>
      <ul class="area-list">
        <li v-for="(item, index) in areaList" :key="index" class="area-info" :style="{ color: item.color }" @click="selArea(index)">{{item.name}}</li>
      </ul>
      <div class="right-end">
        <div class="right-end-style">3.2.5 全省历年销量及增幅 (可分地市分玩法)</div>
        <div id="right-end-chart" style="width:100%;height:100%;min-height: 300px;"></div>
      </div>
    </div>
  </div>
</template>

<script>
import echarts from 'echarts'
export default {
  data () {
    return {
      leftOption: {
        title: {
          text: '3.2.3 全国福彩销量上年排名'
        },
        tooltip: {},
        legend: {
          data: []
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        color: ['#74A0BC'],
        xAxis: {
          type: 'value',
          boundaryGap: [0, 0.01],
          show: false
        },
        yAxis: [
          {
            type: 'category',
            axisTick: {
              show: false
            },
            axisLine: {
              show: true
            },
            axisLabel: {
              interval: 0
            },
            splitArea: {
              show: false
            },
            offset: 5,
            data: ['内蒙古', '黑龙江', '山西', '福建', '上海', '浙江']
          }, {
            type: 'category',
            axisTick: {
              show: false
            },
            axisLabel: {
              interval: 0
            },
            data: [18203, 23489, 29034, 104970, 131744, 630230]
          }
        ],
        series: [
          {
            name: '2017年',
            type: 'bar',
            barWidth: 10,
            itemStyle: {},
            emphasis: {
              itemStyle: {
                borderWidth: 1,
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowOffsetY: 0,
                shadowColor: 'rgba(0,0,0,0.5)'
              }
            },
            data: [18203, 23489, 29034, 104970, 131744, 630230]
          }
        ]
      },
      rightOption: {
        tooltip: {
          trigger: 'axis'
        },
        legend: {
          data: ['七彩乐', '刮刮乐', '福彩3D', '双色球']
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          splitLine: { show: true },
          data: ['2012', '2013', '2014', '2015', '2016', '2017', '2018']
        },
        yAxis: [
          {
            type: 'value',
            axisTick: {
              show: false
            },
            position: 'right'
          },
          {type: 'value'}
        ],
        series: [
          {
            name: '七彩乐',
            type: 'line',
            areaStyle: {},
            data: [120, 132, 101, 134, 90, 230, 210]
          },
          {
            name: '刮刮乐',
            type: 'line',
            areaStyle: {},
            data: [220, 182, 191, 234, 290, 330, 310]
          },
          {
            name: '福彩3D',
            type: 'line',
            areaStyle: {},
            data: [150, 232, 201, 154, 190, 330, 410]
          },
          {
            name: '双色球',
            type: 'line',
            areaStyle: {},
            data: [320, 332, 301, 334, 390, 330, 320]
          }
        ]
      },
      yearList: [
        {name: 2012, color: 'black'},
        {name: 2013, color: 'black'},
        {name: 2014, color: 'black'},
        {name: 2015, color: 'black'},
        {name: 2016, color: 'black'},
        {name: 2017, color: 'black'},
        {name: 2018, color: 'red'}
      ],
      areaList: [
        {name: '西安', color: 'red'},
        {name: '宝鸡', color: 'black'},
        {name: '咸阳', color: 'black'},
        {name: '延安', color: 'black'},
        {name: '铜川', color: 'black'},
        {name: '渭南', color: 'black'},
        {name: '榆林', color: 'black'}
      ]
    }
  },
  components: {
    echarts
  },
  props: ['row', 'col'],
  created: function () {},
  mounted() {
    this.dramChartLa()
    this.dramChartLc()
    this.dramChartRa()
    this.dramChartRc()
  },
  methods: {
    dramChartLa () {
      var myChart = echarts.init(document.getElementById('chart-left-a'))
      myChart.setOption(this.leftOption)
    },
    dramChartLc () {
      var myChart = echarts.init(document.getElementById('chart-left-c'))
      myChart.setOption(this.leftOption)
    },
    selYear (data) {
      this.yearList.map(v => {
        v.color = 'black'
      })
      this.yearList[data].color = 'red'
    },
    selArea (data) {
      this.areaList.map(v => {
        v.color = 'black'
      })
      this.areaList[data].color = 'red'
    },
    dramChartRa () {
      var myChart = echarts.init(document.getElementById('right-top-chart'))
      myChart.setOption(this.rightOption)
    },
    dramChartRc () {
      var myChart = echarts.init(document.getElementById('right-end-chart'))
      myChart.setOption(this.rightOption)
    },
    anyFun() {
      console.log('修复功能1')
      console.log('完成功能1')
      console.log('完成功能2')
    }
  }
}
</script>

<style scoped>
 .chartB {
  width: 100%;
  height: 100%;
 }
 .chart-left {
   width: 50%;
   height: 500px;
   float: left;
 }
 .chart-right {
   width: 50%;
   height: 500px;
   float: left;
 }
 #chart-left-a, .chart-left-b, #chart-left-c {
   float: left;
 }
 .year-list {
   list-style: none;
   margin-top: 60px;
 }
 .year-info {
   height: 40px;
   line-height: 40px;
   cursor: pointer;
 }
 .area-list {
   list-style: none;
   margin-top: 15px;
   height: 40px;
   margin-left: 25px;
 }
 .area-info {
   width: 50px;
   height: 40px;
   line-height: 40px;
   cursor: pointer;
   float: left;
 }
</style>