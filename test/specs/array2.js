const books = [
    { author: "Dan Brown", title: "The Da Vinci Code", sold: 1200, year: 2003 },
    { author: "George Orwell", title: "1984", sold: 5900, year: 1949 },
    { author: "Harper Lee", title: "To Kill a Mockingbird", sold: 1600, year: 1960 },
    { author: "Dan Brown", title: "Angels & Demons", sold: 2300, year: 2000 },
    { author: "F. Scott Fitzgerald", title: "The Great Gatsby", sold: 4100, year: 1925 },
    { author: "Douglas Adams", title: "The Hickhiker's Guide to the Galaxy", sold: 1100, year: 1978 }
]
const bestSellers = () => {

    var x = books.filter((ob)=>  {
        return ob.sold>2000;
    })

    var y = x.map((titl)=>{
        return titl.title;
    })

    return y;
    
};

console.log(bestSellers());