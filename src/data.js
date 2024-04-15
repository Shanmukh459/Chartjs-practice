export const lineChartData = {
    labels: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
    ],
    datasets: [
        {
            label: "Steps by X",
            data: [3000, 5000, 4500, 6000, 8000, 7000, 9000],
            borderColor: "rgb(75, 192, 192)",
        },
        {
            label: "Steps by Y",
            data: [1500, 2000, 3500, 3500, 6000, 6000, 8500],
            borderColor: "pink",
        }
    ]
}

export const barChartData = {
    labels: ["Rent", "Groceries", "Utilities", "Entertainment", "Transportation"],
    datasets: [
        {
            label: "Expenses",
            data: [1200, 300, 150, 180, 100],
            // backgroundColor: "rgba(255, 99, 132, 0.5)",
            backgroundColor: ["red", "blue", "green", "purple", "orange"],
            borderColor: "rgba(54, 162, 235, 1)",
            borderWidth: 1
        }
    ]
}

export const pirChartData = {
    labels: ["Facebook", "Instagram", "Twitter", "YouTube", "linkedIn"],
    datasets:[
        {
            labels: "Time Spent",
            data: [120, 70, 30, 90, 45],
            backgroundColor: [
                "rgba(255, 99, 132, 0.5)",
                "rgba(54, 162, 235, 0.5)",
                "rgba(255, 206, 86, 0.5)",
                "rgba(75, 192, 192, 0.5)",
                "rgba(153, 102, 255, 0.5)",
            ],
            hoverOffset: 50,
        }
    ]
}