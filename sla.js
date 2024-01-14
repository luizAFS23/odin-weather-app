let buckets = [];

class HashMap{

    constructor(key, value){
        this.key = key;
        this.value = value;
    }

    hash(value){
        let hashCode = 0;
        const primeNumber = 31;

        for(let i = 0; i < value.length; i++){
            hashCode = primeNumber * hashCode + String.charCodeAt(i);
        }
        return hashCode;
    }

    set(key, value){
        if(this.key != null){
            value = key;
            return this.value;
        }
        return this.value;
    }

    get(key){
        if(key )
    }

}


if(index < 0 || index >= buckets.length){
    throw new Error("Trying to access index out of bounds");
}