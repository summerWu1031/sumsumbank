import clone from '@/lib/clone';
import dayjs from 'dayjs';
const recordSore = {
    recordList: []as RecordItem[],
    saveRecord(){
        window.localStorage.setItem('recordList',JSON.stringify(this.recordList))
    },
    fetchRecord(){
        this.recordList=JSON.parse(window.localStorage.getItem('recordList') || '[]') as RecordItem[]
        return this.recordList
    },
    createRecord(record: RecordItem) {
        const record2 =clone(record)//深拷贝
        record2.createAt = dayjs().toISOString()
        this.recordList.push(record2)
        this.saveRecord()
    },
}
recordSore.fetchRecord()
export default recordSore