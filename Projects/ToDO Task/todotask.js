let task = [
    {
        id: 1,
        task: "task 1",
        description: "Apply for Flutter Developer",
    },
    {
        id: 2,
        task: "task 2",
        description: "Apply for Web Developer",

    },
    {
        id: 3,
        task: "task 3",
        description: "Apply for Devops Engineer",
    },
    {
        id: 4,
        task: "task 4",
        description: "Apply for Netwrok Engineer",
    }
]


task.forEach(abc => {
    console.log(abc.task);
    console.log(abc.description);
    console.log("---------------");
});

 const delete1 = ((id) => {

    let a = task.findIndex((z) => z.id===id)
    task.splice(a, 1)

})

delete1(2)
console.log(task);