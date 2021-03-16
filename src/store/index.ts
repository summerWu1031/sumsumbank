import Vue from 'vue'
import Vuex from 'vuex'
import clone from '@/lib/clone';
import {createId, createRecordId} from '@/lib/createId';
import dayjs from 'dayjs';



 // 把 store 绑到 Vue.prototype.$store = store
Vue.use(Vuex)

const store= new Vuex.Store({

  state: {
    recordList:[] as RecordItem[],
    paymentTag:[] as Tag[],
    incomeTag: [] as Tag[],
    record: {
      tags: [{}] ,notes:'',type:'-',amount:0
    } as RecordItem
  } as RootState,
  mutations: {
    fetchRecord(state){
      state.recordList=JSON.parse(window.localStorage.getItem('recordList') || '[]') as RecordItem[]
      return state.recordList
    },
    saveRecord(state){
      window.localStorage.setItem('recordList',JSON.stringify(state.recordList))
    },
    createRecord(state, record: RecordItem) {
      const record2 =clone(record)//深拷贝
      record2.createAt = dayjs().format('YYYY-MM-DD')
      console.log(record2.createAt);
      record2.id = createRecordId().toString()
      console.log(record2.createAt);
      state.recordList.push(record2)
      store.commit('saveRecord')
    },
    fetchTag(state) {
      state.paymentTag= JSON.parse(window.localStorage.getItem('payment') || '[]');
      state.incomeTag= JSON.parse(window.localStorage.getItem('income') || '[]');
      return {
        payment: state.paymentTag,
        income: state.incomeTag
      }
    },
    saveTag(state,type: string) {
      if(type === '-'){
        window.localStorage.setItem('payment', JSON.stringify(state.paymentTag));
      }else if(type ==='+'){
        window.localStorage.setItem('income',JSON.stringify(state.incomeTag))
      }
    },
    createTag(state, x){
      if(x.type==='-'){
        const names = state.paymentTag.map(item => item.name)
        if(names.indexOf(x.name)>=0){
           window.alert('标签名重复了');
           return 'duplicated'
        }
        const id = createId().toString()
        state.paymentTag.push({id:id, name:x.name,icon:x.icon})
        store.commit('saveTag','-')
        window.alert('添加成功');
        return 'success'
      }else if(x.type==='+'){
        const names = state.incomeTag.map(item => item.name)
        if(names.indexOf(x.name)>=0){
          window.alert('标签名重复了');
          return 'duplicated'
        }
        const id = createId().toString()
        state.incomeTag.push({id:id, name:x.name,icon:x.icon})
        store.commit('saveTag','+')
        window.alert('添加成功');
        return 'success'
      }
    },
    removeTag(state, {id:id, type: type} ){
      if(type==='-'){
        let payIndex = -1
        for(let i=0;i<state.paymentTag.length;i++){
          if(state.paymentTag[i].id===id){
            payIndex=i;
            break
          }
        }
        state.paymentTag.splice(payIndex,1)
        store.commit('saveTag','-')
        return true
      }else if(type=== '+'){
        let incomeIndex = -1
        for(let i=0;i<state.incomeTag.length;i++){
          if(state.incomeTag[i].id===id){
            incomeIndex=i;
            break
          }
        }
        state.incomeTag.splice(incomeIndex,1)
        store.commit('saveTag','+')
        return true
      }else {
        return false
      }
    },
  },
  actions: {
  },
  modules: {
  }
})

export default store