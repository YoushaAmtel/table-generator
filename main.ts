
import inquirer from "inquirer";

let myTable = true;

while (myTable) {
  try {
    // Get the user's number input
    const { num: myNumber } = await inquirer.prompt({
      type: "number",
      name: "num",
      message: "Enter your number",
      validate: (value) => !isNaN(value) || "Please enter a valid number",
    });

    console.log(`Here is the table of ${myNumber}\n`);

    // Generate and display the multiplication table
    for (let i = 1; i <= 10; i++) {
      console.log(`${myNumber} x ${i} = ${myNumber * i}`);
    }

    // Ask the user if they want to print another table
    const { askUser } = await inquirer.prompt({
      type: 'confirm',
      name: "askUser",
      message: "Do you want to print another table?",
      default: false,
    });

    // Exit the loop if the user chooses not to print another table
    if (!askUser) {
      myTable = false;
      console.log(`\nThanks for using the table generator!`);
    }

  } catch (error) {
    console.error("An error occurred:", error);
  }
}
