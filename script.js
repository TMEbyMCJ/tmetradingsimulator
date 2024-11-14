function simulateTrades() {
    const startingBalance = parseFloat(document.getElementById('startingBalance').value);
    const winRate = parseFloat(document.getElementById('winRate').value) / 100;
    const numTrades = parseInt(document.getElementById('numTrades').value);
    const riskReward = parseFloat(document.getElementById('riskReward').value);
    const riskPerTrade = parseFloat(document.getElementById('riskPerTrade').value);

    let balance = startingBalance;
    const resultTableBody = document.getElementById('resultTable').getElementsByTagName('tbody')[0];
    resultTableBody.innerHTML = ''; // Clear previous results

    for (let i = 0; i < numTrades; i++) {
        const riskAmount = riskPerTrade;
        let tradeResult;
        if (Math.random() < winRate) {
            tradeResult = riskAmount * riskReward;
            balance += tradeResult;
        } else {
            tradeResult = -riskAmount;
            balance += tradeResult;
        }

        const row = resultTableBody.insertRow();
        row.insertCell(0).innerText = i + 1;
        row.insertCell(1).innerText = tradeResult >= 0 ? `Win: $${tradeResult.toFixed(2)}` : `Loss: $${tradeResult.toFixed(2)}`;
        row.insertCell(2).innerText = `$${balance.toFixed(2)}`;
    }

    // Calculate total gain/loss in percentage
    const totalGainPercent = ((balance - startingBalance) / startingBalance) * 100;
    document.getElementById('totalGain').innerText = `Total Gain/Loss: ${totalGainPercent.toFixed(2)}%`;

    // Show final balance
    const row = resultTableBody.insertRow();
    row.insertCell(0).innerText = 'Final';
    row.insertCell(1).innerText = 'Balance';
    row.insertCell(2).innerText = `$${balance.toFixed(2)}`;
}
