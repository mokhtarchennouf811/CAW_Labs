document.addEventListener("DOMContentLoaded", function() {
    const boundaries = document.querySelectorAll(".boundary");
    const start = document.getElementById("start");
    const end = document.getElementById("end");
    const status = document.getElementById("status");
    let gameStarted = false;

    function resetMaze() {
        // Exercise 4: Reset the maze
        boundaries.forEach(boundary => {
            boundary.style.backgroundColor = "#eeeeee";
        });
        // Exercise 4: Update the status message
        status.textContent = "Move your mouse over the 'S' to begin.";
        gameStarted = false;
    }

    boundaries.forEach(boundary => {
        boundary.addEventListener("mouseenter", function() {
            if (gameStarted) {
                // Exercise 2: All boundaries glow red on hover
                boundaries.forEach(b => {
                    b.style.backgroundColor = "red";
                });
                // Exercise 3: Alerts on successful completion of the maze
                if (boundary !== end) {
                    if (status.textContent !== "You lose!") { // Check if it's not already "You lose!"
                        status.textContent = "You lose!";
                    }
                }
            }
        });

        boundary.addEventListener("mouseleave", function() {
            if (gameStarted) {
                // Exercise 2: Reset the boundary color on mouse leave
                boundaries.forEach(b => {
                    b.style.backgroundColor = "red"; // Keep them red on mouse leave
                });
                // Exercise 3: Alerts on successful completion of the maze
                if (boundary !== end) {
                    if (status.textContent !== "You lose!") { // Check if it's not already "You lose!"
                        status.textContent = "You lose!";
                    }
                }
            }
        });
    });

    end.addEventListener("mouseenter", function() {
        if (gameStarted) {
            if (status.textContent !== "You lose!") { // Check if it's not "You lose!"
                // Exercise 6: On-Page status updates
                status.textContent = "You win!";
            }
        }
    });

    start.addEventListener("click", function() {
        // Exercise 4: Restartable maze
        resetMaze();
        gameStarted = true;
    });

    // Exercise 7: Disallow cheating
    document.addEventListener("mousemove", function(event) {
        if (gameStarted) {
            const maze = document.getElementById("maze");
            const mazeRect = maze.getBoundingClientRect();
            const mouseX = event.clientX;
            const mouseY = event.clientY;
            if (
                mouseX < mazeRect.left ||
                mouseX > mazeRect.right ||
                mouseY < mazeRect.top ||
                mouseY > mazeRect.bottom
            ) {
                if (status.textContent !== "You lose!") { // Check if it's not "You lose!"
                    boundaries.forEach(boundary => {
                        boundary.style.backgroundColor = "red";
                    });
                    status.textContent = "You lose!";
                }
            }
        }
    });
});
