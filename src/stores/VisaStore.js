import {observable, decorate, action, computed} from "mobx"

class VisaStore{
    //tao ra chu chua xai
    constructor(rootStore){
        this.rootStore = rootStore;
    }

    dataList = [{
    }]

    currentVisa = {}

    limit = 10
    offset = 0

    setDataList = ({dataList}) =>{
        dataList.forEach((data) => {data.key = data.name})
        this.dataList = dataList;
    }

    setcurrentVisa = ({sprites, stats, name}) =>{
        let data = {sprites, stats, name }
        this.currentVisa = data;
    }

    // setParams = ({limit, offset}) =>{
    //     this.limit = limit;
    //     this.offset = offset;
    // }

    // get getSprites(){
    //     return this.currentVisa.sprites
    // }

    // get getStats(){
    //     return this.currentVisa.stats
    // }

    // get getName(){
    //     return this.currentVisa.name
    // }

    // get getLimit(){
    //     return this.limit
    // }

    // get getOffset(){
    //     return this.offset
    // }

    fetchData() {
        
        fetch('https://pokeapi.co/api/v2/pokemon?limit=' + this.limit + '&offset=' + this.offset)
        .then( response => response.json())
        .then( data => (this.setDataList({dataList:data.results})));
    }
}

export default decorate(VisaStore, {
    dataList: observable,
    currentVisa: observable,
    setDataList: action,
    setcurrentVisa: action,
    // limit: observable,
    // offset: observable,
    // getStats: computed,
    // getSprites: computed,
    // getName: computed,
    // getLimit: computed,
    // getOffset: computed
})