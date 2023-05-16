const canvas = document.querySelector("#canvas");
const ctx = canvas.getContext("2d");

const imageData = ctx.createImageData(10, 10);
canvas.width = 10;
canvas.height = 10;

function setPixel(x, y, r, g, b, a)
{
    const index = imageData.width * y + x;
    imageData.data[index * 4] = r;
    imageData.data[index * 4 + 1] = g;
    imageData.data[index * 4 + 2] = b;
    imageData.data[index * 4 + 3] = a;
}

function apply()
{
    ctx.putImageData(imageData, 0, 0);
}

for (let y = 0; y < imageData.height; y++)
{
    for (let x = 0; x < imageData.width; x++)
    {
        // setPixel(x, y, x / imageData.width * 255, y / imageData.height * 255, 0, 255);
        setPixel(x, y, 0, 0, 0, 255);
    }
}

apply();