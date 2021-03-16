import {createId} from '@/lib/createId';
const tagSore = {
    payment:[] as Tag[],
    income: [] as Tag[],
    fetchTag() {
        this.payment= JSON.parse(window.localStorage.getItem('payment') || '[]');
        this.income= JSON.parse(window.localStorage.getItem('income') || '[]');
        return {
            payment: this.payment,
            income: this.income
        }
    },
    saveTag(type: string) {
        if(type === '-'){
            window.localStorage.setItem('payment', JSON.stringify(this.payment));
        }else if(type ==='+'){
            window.localStorage.setItem('income',JSON.stringify(this.income))
        }
    },
    createTag(name: string,icon: string,type: string){
        if(type==='-'){
            const names = this.payment.map(item => item.name)
            const id = createId().toString()
            if(names.indexOf(name)>=0){return 'duplicated'}
            this.payment.push({id:id, name:name,icon:icon})
            this.saveTag('-')
            return 'success'
        }else if(type==='+'){
            const names = this.income.map(item => item.name)
            const id = createId().toString()
            if(names.indexOf(name)>=0){return 'duplicated'}
            this.income.push({id:id, name:name,icon:icon})
            this.saveTag('+')
            return 'success'
        }else {
            return 'failed'
        }
    },
    removeTag(id: string, type: string){
        if(type==='-'){
            let payIndex = -1
            for(let i=0;i<this.payment.length;i++){
                if(this.payment[i].id===id){
                    payIndex=i;
                    break
                }
            }
            this.payment.splice(payIndex,1)
            this.saveTag('-')
            return true
        }else if(type=== '+'){
            let incomeIndex = -1
            for(let i=0;i<this.income.length;i++){
                if(this.income[i].id===id){
                    incomeIndex=i;
                    break
                }
            }
            this.income.splice(incomeIndex,1)
            this.saveTag('+')
            return true
        }else {
            return false
        }
    },
}
tagSore.fetchTag()
export default tagSore