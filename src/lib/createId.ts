

let id: number = parseInt(window.localStorage.getItem('_idMax') || '5') || 5;
let recordId: number =parseInt(window.localStorage.getItem('recordIdMax') || '0') || 0;


function createId(){
    id++
    window.localStorage.setItem('_idMax',JSON.stringify(id))
    return id
}

function createRecordId(){
    recordId++
    window.localStorage.setItem('recordIdMax',JSON.stringify(recordId))
    return recordId
}
export {createId , createRecordId}