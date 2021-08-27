<template>
  <div class="pie">
    <v-chart :option="option" autoresize />
  </div>
</template>
<script lang="ts">
import { computed } from "vue";
export default {
  props: ["itemData"],
  setup(props) {
    // let data = [
    //   {
    //     value: 100,
    //     name: "未执行",
    //   },
    //   {
    //     value: 100,
    //     name: "已执行",
    //   },
    //   {
    //     value: 90,
    //     name: "执行中",
    //   },
    // ];
    let newOption;
    const option = computed(() => {
      let data = props.itemData;
      let opt = {
        color: ["#1fe5ea", "#1daeff", "#f4e051"],
        legend: {
          top: "10%",
          left: "3%",
          icon: "rect",
          orient: "vertical",
          itemGap: 30,
          formatter: (name: string) => {
            const item = data.filter((item: { name: string; }) => item.name === name)[0];
            if (name === "未执行") {
              opt.legend.textStyle.rich.value.color = "#1fe5ea";
              return (
                "{title|" + name + "}\n{value|" + item.value + "}{title|条}"
              );
            }
            if (name === "已执行") {
              opt.legend.textStyle.rich.value.color = "#1fe5ea";
              return (
                "{title|" + name + "}\n{value1|" + item.value + "}{title|条}"
              );
            }
            if (name === "执行中") {
              opt.legend.textStyle.rich.value.color = "#1fe5ea";
              return (
                "{title|" + name + "}\n{value2|" + item.value + "}{title|条}"
              );
            }
          },
          textStyle: {
            rich: {
              title: {
                color: "#fff",
                fontSize: 16,
                padding: [3, 0],
              },
              value: {
                fontSize: 16,
                lineHeight: 20,
                color: "#1fe5ea",
              },
              value1: {
                fontSize: 16,
                lineHeight: 20,
                color: "#1daeff",
              },
              value2: {
                fontSize: 16,
                lineHeight: 20,
                color: "#f4e051",
              },
            },
          },
          data: data,
        },
        title: [
          {
            text: 290,
            subtext: "计划总数",
            top: "40%",
            left: "58%",
            textAlign: "center",
            itemGap: 15,
            subtextStyle: {
              color: "#fff",
              fontSize: 16,
              align: "center",
            },
            textStyle: {
              color: "#f4e051",
              fontSize: 18,
            },
          },
        ],
        series: [
          //环形
          {
            name: "基础饼图",
            type: "pie",
            radius: ["45%", "52%"],
            center: ["60%", "50%"],
            hoverAnimation: false,
            label: {
              normal: {
                show: false,
              },
              emphasis: {
                show: false,
              },
            },
            zlevel: 1,
            labelLine: {
              normal: {
                show: false,
              },
            },
            data: data,
          },
          //环形分割线
          {
            name: "分割线",
            type: "gauge",
            radius: "60%",
            clockwise: true,
            startAngle: "90",
            center: ["60%", "50%"],
            endAngle: "-269.9999",
            splitNumber: 22,
            zlevel: 2,
            detail: {
              offsetCenter: [10, 20],
              formatter: " ",
            },
            axisLine: {
              lineStyle: {
                width: 0,
                opacity: 0,
              },
            },
            axisTick: {
              show: false,
            },
            markArea: {
              itemStyle: {
                color: "#0f0",
              },
            },
            splitLine: {
              show: true,
              length: 10,
              padding: [0, 0, 0],
              lineStyle: {
                color: "#022457",
                width: 3,
              },
            },
            axisLabel: {
              show: false,
            },
          },
          {
            type: "pie",
            name: "内层细圆环",
            radius: ["40%", "41%"],
            center: ["60%", "50%"],
            hoverAnimation: false,
            clockWise: false,
            itemStyle: {
              normal: {
                color: "#fff",
              },
            },
            label: {
              show: false,
            },
            data: [100],
          },
        ],
      };
      return opt;
    });
    return {
      option,
    };
  },
};
</script>
<style lang="scss" scoped>
.pie {
  width: 100%;
  height: calc(100% - 30px);
  .echartpie {
    width: 100%;
    height: 100%;
  }
}
</style>
