// deposit section 

document.getElementById('btn-deposit').addEventListener('click', function () {
    const depositInputField = document.getElementById('input-deposit-field');
    const newDepositAmountString = depositInputField.value;
    const newDepositAmount = parseFloat(newDepositAmountString);
    depositInputField.value = '';


    // deposit current amount 
    const depositTotalElement = document.getElementById('deposit-total');
    const previousDepositTotalString = depositTotalElement.innerText;
    const previousDepositTotal = parseFloat(previousDepositTotalString);
    const currentDepositTotal = previousDepositTotal + newDepositAmount;

    depositTotalElement.innerText = currentDepositTotal;


    // balance current 
    const balanceTotalElement = document.getElementById('balance-total');
    const previousTotalbalanceString = balanceTotalElement.innerText;
    const previousTotalbalance = parseFloat(previousTotalbalanceString);

    // current total balance 
    const currentBalanceTotal = previousTotalbalance + newDepositAmount;
    balanceTotalElement.innerText = currentBalanceTotal;

})

// withdraw section 
document.getElementById('btn-withdraw').addEventListener('click', function () {
    const widthrawInputField = document.getElementById('input-withdraw-field');
    const newWithdrawAmountString = widthrawInputField.value;
    const newWithdrawAmount = parseFloat(newWithdrawAmountString);
    widthrawInputField.value = '';


    const previousWithdrawElement = document.getElementById('withdraw-total');
    const previousWithdrawString = previousWithdrawElement.innerText;
    const previousWithdraw = parseFloat(previousWithdrawString);

    const currentWithdrawTotal = previousWithdraw + newWithdrawAmount;
    previousWithdrawElement.innerText = currentWithdrawTotal;


    const balanceTotalElement = document.getElementById('balance-total');
    const balanceTotalString = balanceTotalElement.innerText;
    const balanceTotal = parseFloat(balanceTotalString);


    const calculateTotalAmount = balanceTotal - newWithdrawAmount;
    balanceTotalElement.innerText = calculateTotalAmount

})