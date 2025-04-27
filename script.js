document.addEventListener('DOMContentLoaded', function() {
    // Initialize Charts
    initResultsChart();
    initAttendanceChart();
    
    // Semester Selector Change Event
    document.getElementById('semester-selector').addEventListener('change', function() {
        // In a real application, this would fetch new data based on the selected semester
        console.log('Selected semester:', this.value);
        // For demo purposes, we'll just update the chart title
        const semesterText = this.value === 'all' ? 'All Semesters' : `Semester ${this.value}`;
        resultsChart.options.plugins.title.text = `Performance - ${semesterText}`;
        resultsChart.update();
    });
    
    // Notification Bell Click Event
    document.querySelector('.notification-bell').addEventListener('click', function() {
        alert('You have 3 new notifications');
    });
    
    // Logout Button Click Event
    document.querySelector('.logout-btn').addEventListener('click', function() {
        if (confirm('Are you sure you want to logout?')) {
            alert('Logged out successfully');
            // In a real application, this would redirect to the login page
            // window.location.href = '/login';
        }
    });
});

let resultsChart, attendanceChart;

function initResultsChart() {
    const ctx = document.getElementById('results-chart').getContext('2d');
    
    resultsChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Mathematics', 'Computer Science', 'Physics', 'English', 'History'],
            datasets: [{
                label: 'Marks Obtained',
                data: [92, 88, 84, 95, 82],
                backgroundColor: [
                    'rgba(67, 97, 238, 0.7)',
                    'rgba(67, 97, 238, 0.7)',
                    'rgba(67, 97, 238, 0.7)',
                    'rgba(67, 97, 238, 0.7)',
                    'rgba(67, 97, 238, 0.7)'
                ],
                borderColor: [
                    'rgba(67, 97, 238, 1)',
                    'rgba(67, 97, 238, 1)',
                    'rgba(67, 97, 238, 1)',
                    'rgba(67, 97, 238, 1)',
                    'rgba(67, 97, 238, 1)'
                ],
                borderWidth: 1
            }, {
                label: 'Class Average',
                data: [78, 75, 72, 82, 76],
                backgroundColor: 'rgba(108, 117, 125, 0.5)',
                borderColor: 'rgba(108, 117, 125, 1)',
                borderWidth: 1,
                type: 'line',
                pointBackgroundColor: 'rgba(108, 117, 125, 1)',
                pointRadius: 5,
                pointHoverRadius: 7,
                fill: false
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                title: {
                    display: true,
                    text: 'Performance - Semester 3',
                    font: {
                        size: 16
                    }
                },
                legend: {
                    position: 'top',
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            return `${context.dataset.label}: ${context.raw}%`;
                        }
                    }
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    max: 100,
                    ticks: {
                        callback: function(value) {
                            return value + '%';
                        }
                    }
                }
            }
        }
    });
}

function initAttendanceChart() {
    const ctx = document.getElementById('attendance-chart').getContext('2d');
    
    attendanceChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
            datasets: [{
                label: 'Attendance Rate',
                data: [88, 90, 92, 91, 94, 95],
                backgroundColor: 'rgba(76, 201, 240, 0.1)',
                borderColor: 'rgba(76, 201, 240, 1)',
                borderWidth: 3,
                tension: 0.3,
                fill: true,
                pointBackgroundColor: 'rgba(76, 201, 240, 1)',
                pointRadius: 5,
                pointHoverRadius: 7
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            return `${context.parsed.y}% attendance`;
                        }
                    }
                }
            },
            scales: {
                y: {
                    beginAtZero: false,
                    min: 80,
                    max: 100,
                    ticks: {
                        callback: function(value) {
                            return value + '%';
                        }
                    }
                }
            }
        }
    });
}
