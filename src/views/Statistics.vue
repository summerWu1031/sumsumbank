<template>
  <layout>
    <Tabs :data-source="typeList" :value.sync="type" class-prefix="type"/>
    <ECharts :options="x" />
    <ol v-if="groupList.length>0">
      <li  v-for="group in groupList" :key="group.title">
        <h3 class="title">
          {{ timeDay(group.title) }}
          <span>total:￥{{total(group.item)}}</span>
        </h3>
        <ol>
          <li class="record" v-for="(item,index) in group.item" :key="index">
            <div class="name">
              <div class="iconWrapper">
                <Icon :name="item.tags[0].icon"/>
              </div>
              <span>{{item.tags[0].name}}</span>
              <span class="note">{{item.notes}}</span>
            </div>
            <div class="money">
              <span>{{item.type}}￥{{item.amount}}</span>
            </div>
          </li>
        </ol>
      </li>
    </ol>
    <div v-else class="noResult">
      目前没有相关记录
    </div>
    <template v-slot:footer >
      <Nav />
    </template>
  </layout>
</template>



<script lang="ts">
import Vue from 'vue';
import {Component} from 'vue-property-decorator';
import Type from '@/components/Money/Type.vue';
import Tabs from '@/components/Tabs.vue';
import intervalList from '@/constance/intervalList';
import typeList from '@/constance/typeList';
import dayjs from 'dayjs';
import clone from '@/lib/clone';


// import ECharts from 'vue-echarts'
const ECharts = require('vue-echarts').default
// import 'echarts/lib/chart/line'
// import 'echarts/lib/component/polar'
// import 'echarts/lib/chart/bar'
// import 'echarts/lib/component/tooltip'
console.log(ECharts);




@Component({
  components: {Tabs, Type,ECharts}
})
export default class Statistics extends Vue {
  type = '-'
  interval = 'day'
  intervalList = intervalList
  typeList = typeList
  beforeCreate() {
    this.$store.commit('fetchRecord')
  }
  get record(){
    return  this.$store.state.record
  }
  get recordList() {
    return (this.$store.state as RootState).recordList
  }
  timeDay(date: string){
    const day =dayjs(date)
    const now = dayjs()

    if(day.isSame(now,'day')){
      return '今天'
    }else if(day.isSame(now.subtract(1,'day'),'day')){
      return '昨天'
    }else if(day.isSame(now.subtract(2,'day'),'day')) {
      return '前天'
    }else if(day.isSame(now,'year')){
      return day.format('M月D日')
    }else {
      return day.format('YYYY年M月D日')
    }
  }

  total(item: RecordItem[]){

      let sum =0
      for(let i =0; i<item.length; i++) {
        const number = parseInt(item[i].amount.toString())
        sum += number
      }
    return sum
  }

 get x(){
    return {

      xAxis: {
        type: 'category',
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
      },
      yAxis: {
        type: 'value'
      },
      series: [{
        data: [150, 230, 224, 218, 135, 147, 260],
        type: 'line'
      }]
    }

  }


  get groupList() {
    const {recordList} = this;


    if(recordList.filter(i=>i.type===this.type).length===0){return []}
    const newRecordList = clone(recordList).filter(i=>i.type===this.type).sort((a,b)=>dayjs(b.createAt).valueOf()-dayjs(a.createAt).valueOf())

    const result = [{title: dayjs(newRecordList[0].createAt).format('YYYY-MM-DD'),item:[newRecordList[0]]}]

    if (newRecordList.length===0){return []  }
    for(let i=1; i<newRecordList.length; i++){
      const last = result[result.length-1]
      if(dayjs(last.title).isSame(dayjs(newRecordList[i].createAt),'day') ){
        last.item.push(newRecordList[i])
      }else {
        result.push({title: dayjs(newRecordList[i].createAt).format('YYYY-MM-DD'),item:[newRecordList[i]]})
      }
    }
    return result
  }


}
</script>

<style lang="scss" scoped>
@import "~@/assets/style/helper.scss";
 ::v-deep {

   .type-tabWrapper {
     .type-tabs-item {
       padding: 16px 16px 8px 16px;
       font-size: 22px;
     }
   }

   .title {
     padding: 8px 16px;
     line-height: 24px;
     display: flex;
     justify-content: space-between;
     align-content: center;
     font-weight: normal;
     background-color: #f5f5f5;
     font-size: 18px;
   }

   .record {
     display: flex;
     justify-content: space-between;
     padding: 8px 16px;
     line-height: 24px;
     align-content: center;

     > .name {
       display: flex;
       align-items: center;

       .note {
         margin-right: auto;
         margin-left: 12px;
         color: #999;
         font-size: 14px;
         align-content: center;
       }

       .iconWrapper {
         width: 36px;
         height: 36px;
         padding: 4px;
         margin-right: 12px;
         background-color: #F2F2F2;
         border-radius: 50% 50% 50% 50%;
         display: flex;
         justify-content: center;
         align-items: center;

         > .icon {
           width: 32px;
           height: 32px;

         }
       }
     }
   }
 }
.noResult{
  padding: 16px;
  text-align: center;
}
.echarts {
  width: 100%;
  height: 400px;
}
</style>