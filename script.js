document.addEventListener('DOMContentLoaded', function() {
    const canvas = document.getElementById('myCanvas');
    const ctx = canvas.getContext('2d');

    canvas.addEventListener('click', function(event) {
        addCircle(event.offsetX, event.offsetY);
    });

    function addCircle(x, y) {
        const radius = 30; // radius of the circle
        const colors = ['red', 'green', 'blue', 'yellow', 'purple', 'orange'];
        const color = colors[Math.floor(Math.random() * colors.length)]; // Random color

        ctx.fillStyle = color;
        ctx.beginPath();
        ctx.arc(x, y, radius, 0, Math.PI * 2);
        ctx.fill();
    }
});
