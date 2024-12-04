function generateMealPlan() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let goal = document.getElementById("goal").value;

    let breakfast = document.getElementById("breakfast").value;
    let snack1 = document.getElementById("snack1").value;
    let lunch = document.getElementById("lunch").value;
    let snack2 = document.getElementById("snack2").value;
    let dinner = document.getElementById("dinner").value;

    if (!validateEmail(email)) {
        alert("Please enter a valid email address.");
        return;
    }

    let mealPlanHTML = `
    <html>
        <head>
            <title>Meal Plan for ${name}</title>
        </head>
        <body>
            <h1>Meal Plan for ${name}</h1>
            <p>Email: ${email}</p>
            <p>Goal for the Week: ${goal}</p>
            
            <div class="meal-plan">
                <h3>Your Meal Plan for the Week</h3>
                <ul>
                    <li><strong>Monday:</strong> Breakfast: ${breakfast}, Morning Snack: ${snack1}, Lunch: ${lunch}, Afternoon Snack: ${snack2}, Dinner: ${dinner}</li>
                    <li><strong>Tuesday:</strong> Breakfast: ${breakfast}, Morning Snack: ${snack1}, Lunch: ${lunch}, Afternoon Snack: ${snack2}, Dinner: ${dinner}</li>
                    <li><strong>Wednesday:</strong> Breakfast: ${breakfast}, Morning Snack: ${snack1}, Lunch: ${lunch}, Afternoon Snack: ${snack2}, Dinner: ${dinner}</li>
                    <li><strong>Thursday:</strong> Breakfast: ${breakfast}, Morning Snack: ${snack1}, Lunch: ${lunch}, Afternoon Snack: ${snack2}, Dinner: ${dinner}</li>
                    <li><strong>Friday:</strong> Breakfast: ${breakfast}, Morning Snack: ${snack1}, Lunch: ${lunch}, Afternoon Snack: ${snack2}, Dinner: ${dinner}</li>
                    <li><strong>Saturday:</strong> Breakfast: ${breakfast}, Morning Snack: ${snack1}, Lunch: ${lunch}, Afternoon Snack: ${snack2}, Dinner: ${dinner}</li>
                    <li><strong>Sunday:</strong> Breakfast: ${breakfast}, Morning Snack: ${snack1}, Lunch: ${lunch}, Afternoon Snack: ${snack2}, Dinner: ${dinner}</li>
                </ul>
            </div>

            <button onclick="window.print()">Print</button>

            <button onclick="window.close()">Close</button>
        </body>
    </html>`;

    let newWindow = window.open('', '_blank', 'width=800,height=600');
    newWindow.document.write(mealPlanHTML);
    newWindow.document.close();
}

function validateEmail(email) {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return emailPattern.test(email);
}
