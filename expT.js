document.getElementById("expForm").addEventListener("submit",addExpense);


const expenses = JSON.parse(localStorage.getItem("expenses")) || [];

function addExpense(event){
  event.preventDefault();
  console.log("button clicked")

  let type = document.getElementById("type").value;
  let name = document.getElementById("name").value;
  let date = document.getElementById("date").value;
  let amount = document.getElementById("amount").value;
  let friend = document.getElementById("friend").value;
  let currency = document.getElementById("currency").value;
  // let currency = document.getElementById("currency").value
  console.log("data",type,name,date,amount)

  if(type != "PaymentMethod" && friend !="friends" && name.length > 0 && date != 0 && currency != "Select" && amount > 0  ) {
   console.log("if condition checked")
    const expense = {
      type,
      name,
      date,
      amount,
      friend,
      currency,
      id:expenses.length > 0 ? expenses[expenses.length - 1].id + 1
      : 1,}
      expenses.push(expense);
      localStorage.setItem("expenses", JSON.stringify(expenses));
      console.log("data",type,name,date,amount,friend)
  }

  document.getElementById("expForm").reset();
    
  showExpenses();

}

const showExpenses = () => {
   const expenseTable = document.getElementById("expenseTable");

   expenseTable.innerHTML = "";
   for (let i = 0; i< expenses.length; i++) {
      expenseTable.innerHTML += `
      <tr>
      <td>${expenses[i].type}</td>
      <td>${expenses[i].name}</td>
      <td>${expenses[i].friend}</td>
      <td>${expenses[i].date}</td>
      <td>${expenses[i].amount}</td>
      <td>${expenses[i].currency}</td>


      <td><button class="deleteButton" onClick="deleteExpense(${expenses[i].id})"/>Delete</td>
      </tr>
      `;
   }
}

const deleteExpense = (id) => {
   for(let i = 0; i< expenses.length; i++ ) {
      if(expenses[i].id == id) {
         expenses.splice(i,1)
         console.log("delete clicked")
      }
   }
   localStorage.setItem("expenses",JSON.stringify(expenses));
   showExpenses();
}
showExpenses();

