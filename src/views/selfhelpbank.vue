<template>

</template>

<script>
  // 左侧图
  var option1 = {
    title: {
      text: '世界人口总量'
    },
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
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
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
        axisLabel: {
          interval: 0
        },
        offset: 10,
        data: ['巴西', '印尼', '美国', '印度', '中国', '世界人口(万)']
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
        name: '2011年',
        type: 'bar',
        data: [18203, 23489, 29034, 104970, 131744, 630230]
      }
    ]
  }
  // 右侧图
  var option2 = {
    title: {
      text: '折线图堆叠'
    },
    tooltip: {
      trigger: 'axis'
    },
    legend: {
      data: ['邮件营销', '联盟广告', '视频广告', '直接访问', '搜索引擎']
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
      data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
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
        name: '邮件营销',
        type: 'line',
        areaStyle: {},
        data: [120, 132, 101, 134, 90, 230, 210]
      },
      {
        name: '联盟广告',
        type: 'line',
        areaStyle: {},
        data: [220, 182, 191, 234, 290, 330, 310]
      },
      {
        name: '视频广告',
        type: 'line',
        areaStyle: {},
        data: [150, 232, 201, 154, 190, 330, 410]
      },
      {
        name: '直接访问',
        type: 'line',
        areaStyle: {},
        data: [320, 332, 301, 334, 390, 330, 320]
      },
      {
        name: '搜索引擎',
        type: 'line',
        areaStyle: {},
        data: [820, 932, 901, 934, 1290, 1330, 1320]
      }
    ]
  }
  console.log(option1)
  console.log(option2)
</script>

<style scoped>

</style>

