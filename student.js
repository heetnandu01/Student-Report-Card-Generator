console.log(`
███████╗████████╗██╗   ██╗██████╗ ███████╗██╗   ██╗███████╗██████╗  █████╗ ██████╗ 
██╔════╝╚══██╔══╝██║   ██║██╔══██╗██╔════╝██║   ██║██╔════╝██╔══██╗██╔══██╗██╔══██╗
█████╗     ██║   ██║   ██║██████╔╝█████╗  ██║   ██║█████╗  ██████╔╝███████║██████╔╝
██╔══╝     ██║   ██║   ██║██╔═══╝ ██╔══╝  ██║   ██║██╔══╝  ██╔═══╝ ██╔══██║██╔═══╝ 
███████╗   ██║   ╚██████╔╝██║     ███████╗╚██████╔╝███████╗██║     ██║  ██║██║     
╚══════╝   ╚═╝    ╚═════╝ ╚═╝     ╚══════╝ ╚═════╝ ╚══════╝╚═╝     ╚═╝  ╚═╝╚═╝     
`);
console.log("🎓 Welcome to the *Student Report Card Generator* CLI App!");
console.log("📊 Analyze grades, find toppers, and calculate averages with JavaScript!\n");



const students = [
  { name: "Heet", marks: 85 },
  { name: "Pawan", marks: 76 },
  { name: "Vinit", marks: 59 },
  { name: "Saiprasad", marks: 96 },
  { name: "Sourav", marks: 47 },
  { name: "Tahir", marks: 33 },
  { name: "Sahil", marks: 88 },
  { name: "Tejas", marks: 62 },
  { name: "Purab", marks: 28 },
  { name: "Dhruv", marks: 95 },
  { name: "Raj", marks: 41 },
  { name: "Shubh", marks: 73 },
  { name: "Raj", marks: 64 },
  { name: "Shlok", marks: 39 },
  { name: "Nitish", marks: 82 }
];

const passedStudents = students.filter(students => students.marks >= 40)
console.log("The passed students are : ");
console.log(passedStudents)

const grades  = students.map((students) =>{
    let grade;
    if(students.marks >= 90){
        grade = 'o';
    }else if(students.marks >= 75){
        grade = 'A';
    }else if(students.marks >= 40){
        grade = 'B';
    }else{
        grade = 'f';
    }

    return{
        name:students.name,
        marks:students.marks,
        grade:grade
    };
});




const topper = students.reduce((acc, student) =>{
    if(acc.marks > student.marks){
        return acc;
    }else{
        return student;
    }
} )



const result = {
  average: students.reduce((acc, student) => acc + student.marks, 0) / students.length,

  topper: students.reduce((acc, student) => {
    return student.marks > acc.marks ? student : acc;
  })
};


console.log("\n📊 Passed Students with Grades:");
grades.forEach((student) => {
  console.log(`✅ ${student.name}: ${student.marks} (Grade ${student.grade})`);
});

console.log(`\n📈 Class Average: ${result.average.toFixed(1)}`);
console.log(`🏆 Top Scorer: ${result.topper.name} (${result.topper.marks})`);



function graduateCelebration() {
  console.log(`
╔════════════════════════════════════════════════╗
║🎉🎉CONGRATULATIONS, YOU ARE GRADUATED!  🎉🎉 ║
╚════════════════════════════════════════════════╝
        🎓 👨‍🎓 👩‍🎓 🎓 👨‍🎓 👩‍🎓 🎓 👨‍🎓 👩‍🎓 🎓
  `);
}

graduateCelebration();