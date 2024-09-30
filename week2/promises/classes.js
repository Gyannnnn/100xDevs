class rectangle{
    constructor(width,height,color){
        this.width = width;
        this.height = height;
        this.color = color;
    }
    area(){
        const area = this.height * this.width;
        console.log("Area Is : ",area);
        return area;
    }
    paint(){
        console.log("The Color is:")
        console.log(this.color);
    }
}


const rect = new rectangle(1,2,"blue");
const area = rect.area();
console.log("Area : ",area);