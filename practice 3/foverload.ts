function getArea (side: number) : number 
function getArea(length : number , width: number) 
function getArea(radius: number , isCircle: boolean) : number 

//implementation 
function getArea(param1: number , param2: number|boolean){
    if(param2 && typeof param2 === "number"){

    }else if (typeof param2 === "boolean") {
        return Math.PI * param1
    }else {
        return param1 * param1
    }
}

//using for square 
const sq = getArea(3) 
console.log(sq);
 
//using for rectangle 
const rectangle = getArea(3,3) 
console.log(rectangle);
