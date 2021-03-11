type RecordItem = {
    tags: string[];
    notes: string;
    type: string;
    amount: number;
    createAt?: Date;
}
type Tag = {
    id: string;
    name: string;
    icon: string;
}
type tagListModel={
    data: Tag[];
    income: Tag[];
    fetch: () => { payment: Tag[]; income: Tag[];
    };
    create: (name: string,icon: string,type: string) => 'success' | 'duplicated' | 'failed';
    remove: (id: string, type: string) => boolean;
    save: (type: string) => void;
}

// interface Window //暴露给window,作为window的属性出现{
    // tagList: { payment: Tag[]; income: Tag[]};
    // removeTag: (id: string, type: string) => boolean;
    // createTag: (name: string,icon: string,type: string) => 'success' | 'duplicated' | 'failed';
    //
    // recordList: RecordItem[];
    // createRecord: (record: RecordItem) => void;
// }