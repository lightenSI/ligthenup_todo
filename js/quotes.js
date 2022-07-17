const quotes = [
    {
    quote: "그런데 이 버티는 약자들이 좀 더 나은 내일을 기대할 수 있게 하는 약속입니다.",
    writter: "정혜윤",
},
{
    quote: "한 번 구축된 조직은 이미 더 큰 질서 안에 포섭이 되어버리고, 그 다음부터는 그 질서가 조직을 움직이는 것일세.",
    writter: "구병모",
},
{
    quote: "등 뒤의 공포로부터 도망치는 사람들. 그들에게는 이상한 일들이 일어난다.",
    writter: "존 스타인백",
},
{
    quote: "바쁘게 움직이는 사람들 사이를 느리게 걸으며 생각했다. 꽃이란 정말 근사한 사치라고.",
    writter: "하현",
},
{
    quote: "여자가 무슨 생각을 하는지 우리가 속속들이 안다는 건 불가능한 일이 아닐까요?",
    writter: "무라카미 하루키",
},
{
    quote: "어떤 장면은 그 자체로 너무 시적이라 시로 쓸 수 없다. 시라니? 읽어보면 정작 그 안에 시 없는 시가 얼마나 많은지.",
    writter: "박연준",
},
{
    quote: "마셔버리고 나를 잊을 수 있다면 내가 잊힐 수 있다면 당신만이 잊지 못하고 잠 못 이루는 밤이 온다면",
    writter: "오재복",
},
{
    quote: "나는 두 개의 막연한 최상급으로 이루어진 이전의 정의는 아무런 가치가 없다고 생각한다.",
    writter: "보르헤스",
},
{
    quote: "비행기 한 대가 불을 밝히고 밤을 거슬러 올라가는 것이 보였다.",
    writter: "임솔아",
},
{
    quote: "사라지지 않는 사람은 없어. 사람의 물질성이 남아있다고 하더라도.",
    writter: "최은영",
}];

const quote = document.querySelector("#quote span:first-child");
const writter = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = `💬 ${todaysQuote.quote}`;
writter.innerText = `작가, ${todaysQuote.writter}`;