///// Old Code
// const fetchAdvice = async () => {
//     const res = await fetch("https://api.adviceslip.com/advice")
//     const data = await res.json()
  
//     document.querySelector(".number").innerHTML = `Advice #${data.slip.id}`
//     document.querySelector(".advice").innerHTML = `"${data.slip.advice}"`
//   }
  
//   fetchAdvice()
 //////////////////////////////

  const API_LINK = "https://api.adviceslip.com/advice";
const adviceNumberSpan = document.querySelector('.advice-generator__advice-number')
const adviceQuoteSlot= document.querySelector('.advice-generator__quote')
const fetchBtn = document.querySelector('button.advice-generator__btn')

const fetchNewAdvice = async () => {
    const response = await fetch(API_LINK);
    const advice = await response.json();
    return advice
};

const renderAdvice = (adviceObj) => {
    const {id, advice} = adviceObj;
    adviceNumberSpan.textContent = `ADVICE #${id}`;
    adviceQuoteSlot.textContent = advice;
};

const generateNewAdvice = async () => {
    const data = await fetchNewAdvice()
    const advice = data.slip;
    renderAdvice(advice);
};

window.addEventListener('DOMContentLoaded', () => {
    fetchBtn.addEventListener('click', generateNewAdvice)
})