let nickname = prompt("Enter your nickname to roll middle line");
if (nickname)
{
    document.getElementById("nickname").textContent = nickname;
}
else
{
    document.getElementById("nickname").textContent = "Shadow Fiend";
}

let userScore = 0;
let aiScore = 0;

let displayscore1 = document.getElementById('displayscore1');
let displayscore2 = document.getElementById('displayscore2');
let displaypts1 = document.getElementById('displaypts1');
let displaypts2 = document.getElementById('displaypts2');
let btn = document.getElementById('btn');


btn.addEventListener('click', () =>
{
    displayscore1.innerHTML = '';
    displayscore2.innerHTML = '';
    displaypts1.innerHTML = '';
    displaypts2.innerHTML = '';

    let userPoints = Math.floor(Math.random()*100)+1;
    let aiPoints = Math.floor(Math.random()*100)+1;

    displaypts1.textContent = userPoints;
    displaypts2.textContent = aiPoints;
    if (userPoints > aiPoints)
        {
            userScore+=1;
            displayscore1.innerHTML = userScore;
            displayscore2.innerHTML = aiScore;
        }
    else 
        {
            aiScore += 1;
            displayscore1.textContent = userScore;
            displayscore2.textContent = aiScore;
        };

    if (userScore === 3)
        {
            alert('You are going on the middle line!!');
            userScore = 0;
            aiScore = 0;
        };
    if (aiScore === 3)
        {
            alert('Pudge won. You are going forest.');
            userScore = 0;
            aiScore = 0;
        };
});
