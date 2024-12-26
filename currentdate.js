function updateDate() {
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const today = new Date();
    
    const dayElement = document.getElementById('day');
    const dateElement = document.getElementById('date');
    const monthElement = document.getElementById('month');

    const day = today.toLocaleDateString('en-US', { weekday: 'long' });
    const date = today.getDate();
    const month = today.toLocaleDateString('en-US', { month: 'long' });

    dayElement.textContent = day;
    dateElement.textContent = date;
    monthElement.textContent = month;
}

// Call the function to set the date initially
updateDate();