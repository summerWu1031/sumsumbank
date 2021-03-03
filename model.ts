const model = {
    clone(data: RecordItem){
        return JSON.parse(JSON.stringify(data) )
    },
    fench(){
        return JSON.parse(window.localStorage.getItem('recordList') || '[]') as RecordItem
    },
    save(data: RecordItem[]){
        window.localStorage.setItem('recordList',JSON.stringify(data))
    }
}

export default model