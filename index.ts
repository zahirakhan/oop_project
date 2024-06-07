#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

class Student   
{
    name: string;
    constructor(n: string) 
     {
        this.name = n;
    }
}
class Person 
{
  students: Student[] = [];
  addStudent(obj: Student) 
    {
        this.students.push(obj);
    }
}
const persons = new Person();
const programStart = async (persons: Person) => 
{                   console.log(chalk.magenta(` 
                        ╦ ╦╔═╗╦  ╔═╗╔═╗╔╦╗╔═╗
                        ║║║║╣ ║  ║  ║ ║║║║║╣ 
                        ╚╩╝╚═╝╩═╝╚═╝╚═╝╩ ╩╚═╝
                    `));
    do 
    {
            
            const ans = await inquirer.prompt(
                {
                    name: "select",
                    type: "list",
                    message: chalk.yellowBright("\n Please Select an Option..>>"),
                    choices: ["Staff", "Student", "Exit"],
                });
            if (ans.select == "Staff") 
                {
                 console.log(chalk.greenBright(`\n Please Visit the Staff Room! \n`));
                }       
            else if (ans.select == "Student") 
                {
                    const ans = await inquirer.prompt(
                    {
                        name: "student",
                        type: "input",
                        message: chalk.yellowBright("\n Enter the Name of Student\n"),
                    });
                    const student = persons.students.find((val) => val.name == ans.student);
                    if (!student) 
                    {
                        const name = new Student(ans.student);
                        persons.addStudent(name);
                        console.log(chalk.greenBright(`Hello  ${name.name}`));
                        console.log(chalk.bgYellow("\n New Student Added \n"));
                        console.log(chalk.magenta(` 
                            ╔═╗┬ ┬┬─┐┬─┐┌─┐┌┐┌┌┬┐  ╔═╗┌┬┐┬ ┬┌┬┐┌─┐┌┐┌┌┬┐┌─┐  ╦  ┬┌─┐┌┬┐
                            ║  │ │├┬┘├┬┘├┤ │││ │   ╚═╗ │ │ │ ││├┤ │││ │ └─┐  ║  │└─┐ │ 
                            ╚═╝└─┘┴└─┴└─└─┘┘└┘ ┴   ╚═╝ ┴ └─┘─┴┘└─┘┘└┘ ┴ └─┘  ╩═╝┴└─┘ ┴ 
                        `));
                        console.log(persons.students);
                    } else 
                    {
                        console.log(`Hello ${student.name}`);
                        console.log(chalk.cyanBright(`
                            ╔═╗─┐ ┬┬┌─┐┌┬┐┬┌┐┌┌─┐  ╔═╗┌┬┐┬ ┬┌┬┐┌─┐┌┐┌┌┬┐┌─┐  ╦  ┬┌─┐┌┬┐
                            ║╣ ┌┴┬┘│└─┐ │ │││││ ┬  ╚═╗ │ │ │ ││├┤ │││ │ └─┐  ║  │└─┐ │ 
                            ╚═╝┴ └─┴└─┘ ┴ ┴┘└┘└─┘  ╚═╝ ┴ └─┘─┴┘└─┘┘└┘ ┴ └─┘  ╩═╝┴└─┘ ┴ 
                        `));
                        console.log(persons.students);
                    }
                } else if (ans.select == "Exit") 
                    {
                        console.log("\n Program Exit \n");
                        process.exit();
                    }
    } while (true);
};
programStart(persons);

