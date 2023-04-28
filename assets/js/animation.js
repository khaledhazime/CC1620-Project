function follow_pointer(){
    let canvas = document.getElementById('animationCanvas');
    let ctx = canvas.getContext("2d");

    ctx.fillStyle = 'red';
    ctx.strokeStyle = 'black';

    let x = canvas.width / 2;
    let y = canvas.height / 2;
    const squareSize = 50;

    canvas.addEventListener('mousemove', function(e) {
        const rect = canvas.getBoundingClientRect();
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;

        x = mouseX - squareSize / 2;
        y = mouseY - squareSize / 2;

        // Verifica se o quadrado está fora do canvas e corrige se necessário
        if (x < 0) {
            x = 0;
        } else if (x > canvas.width - squareSize) {
            x = canvas.width - squareSize;
        }
        if (y < 0) {
            y = 0;
        } else if (y > canvas.height - squareSize) {
            y = canvas.height - squareSize;
        }

        // Limpa o canvas e desenha o quadrado na nova posição
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.fillRect(x, y, squareSize, squareSize);
        ctx.strokeRect(x, y, squareSize, squareSize);

    });

}

follow_pointer();
