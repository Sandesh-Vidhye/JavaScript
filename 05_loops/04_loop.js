// foreach loop

// Function in array
const coding = ['js', 'ruby', 'java', 'python']
coding.forEach(function  (item) {
    // console.log(item);
    
})

// Arrow function
coding.forEach( (i) => {
    // console.log(i);
        
})

// function
function printme(item){
    console.log(item);
}
// coding.forEach(printme)

coding.forEach((item, i, ar) =>{
    // console.log(item, i, ar);
    
})

const mycoding =[
    {
        languageName : "javaScript",
        languageFile : "js"
    },
    {
        languageName : "java",
        languageFile : "java"
    },
    {
        languageName : "python",
        languageFile : "py"
    }
]

mycoding.forEach( (item ) => {
    console.log(item.languageName);
    
})



