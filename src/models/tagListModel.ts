import createId from '@/lib/createId';

const tagListModel: tagListModel = {
    data:[],
    income:[],
    fetch() {
        this.data= JSON.parse(window.localStorage.getItem('payment') || '[]');
        this.income= JSON.parse(window.localStorage.getItem('income') || '[]');
        return {
            payment: this.data,
            income: this.income
        }
    },

    create(name,icon,type){
        if(type==='-'){
            const names = this.data.map(item => item.name)
            const id = createId().toString()
            if(names.indexOf(name)>=0){return 'duplicated'}
            this.data.push({id:id, name:name,icon:icon})
            this.save('-')
            return 'success'
        }else if(type==='+'){
            const names = this.income.map(item => item.name)
            const id = createId().toString()
            if(names.indexOf(name)>=0){return 'duplicated'}
            this.income.push({id:id, name:name,icon:icon})
            this.save('+')
            return 'success'
        }else {
            return 'failed'
        }



    },
    remove(id: string, type: string){
        if(type==='-'){
            let payIndex = -1
            for(let i=0;i<this.data.length;i++){
                if(this.data[i].id===id){
                    payIndex=i;
                    break
                }
            }
            this.data.splice(payIndex,1)
            this.save('-')
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
            this.save('+')
            return true
        }else {
            return false
        }


    },
    save(type) {
        if(type === '-'){
            window.localStorage.setItem('payment', JSON.stringify(this.data));
        }else if(type ==='+'){
            window.localStorage.setItem('income',JSON.stringify(this.income))
        }


    },
};

export default tagListModel;