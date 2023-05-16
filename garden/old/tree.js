let age = 0;
let fullyGrown = false;
let seed = 127;


function grow(steps)
{
    age += steps;
    setPixel(0, 0, age, 0, 0, 255);
    apply();
}