context = c.getContext('2d');
const santa = new Image();
santa.src = "https://pngimg.com/uploads/santa_claus/santa_claus_PNG38508.png"
santaX = santaDY = score = bestScore = 0;
santaSize = 100;
pipeWidth = topPipeBottomY = 50;
interval = 25;
santaY = pipeGap = 200;
canvasSize = pipeX = 500;
c.onclick = () => { santaDY = 8 }
setInterval(() => {
    context.fillStyle = "skyblue";
    context.fillRect(0, 0, canvasSize, canvasSize);
    santaY -= santaDY -= 0.5;
    context.drawImage(santa, santaX, santaY, santaSize, santaSize);
    context.fillStyle = "brown";
    pipeX -= 10;
    pipeX < -pipeWidth && ((pipeX = canvasSize), (topPipeBottomY = pipeGap * Math.random()))
    context.fillRect(pipeX, 0, pipeWidth, topPipeBottomY);
    context.fillRect(pipeX, topPipeBottomY + pipeGap, pipeWidth, canvasSize);
    context.fillStyle = "black";
    context.fillText(score++, 10, 15);
    bestScore = bestScore < score ? score : bestScore;
    context.fillText(`Best: ${bestScore}`, 10, 25);
    (((santaY < topPipeBottomY || santaY > topPipeBottomY + pipeGap) && pipeX < santaSize)
    || santaY > canvasSize) &&
    ((santaDY = 0), (santaY = 200), (pipeX = canvasSize), (score = 0));
}, interval)