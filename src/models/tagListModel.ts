import createId from '@/lib/createId';

const localStorageKeyName = 'tagList';
type Tag = {
    id: string;
    name: string;
    icon: string;
}
type tagListModel={
    data: Tag[];
    // income: Tag[];
    fetch: () => Tag[];
    create: (name: string,icon: string) => 'success' | 'duplicated' ;
    remove: (id: string) => boolean;
    save: () => void;
}
const tagListModel: tagListModel = {
    data:[],
    // income:[]

    fetch() {
        this.data= JSON.parse(window.localStorage.getItem(localStorageKeyName) || '[]');
        return this.data
    },

    create(name,icon){

            const names = this.data.map(item => item.name)
            const id = createId().toString()
            if(names.indexOf(name)>=0){return 'duplicated'}
            this.data.push({id:id, name:name,icon:icon})
            this.save()
            return 'success'


    },
    remove(id: string){
        let index = -1
        for(let i=0;i<this.data.length;i++){
            if(this.data[i].id===id){
                index=i;
                break
            }
        }
        this.data.splice(index,1)
        this.save()
        return true
    },
    save() {
        window.localStorage.setItem(localStorageKeyName, JSON.stringify(this.data));

    },
};

export default tagListModel;