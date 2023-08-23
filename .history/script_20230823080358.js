const fetchAdvice = async () => {
    const res = await fetch("https://api.adviceslip.com/advice")
    const data = await res.json()
  
    document.getElementById(".number").innerHTML = `Advice #${data.slip.id}`
    document.querySelector(".advice").innerHTML = `"${data.slip.advice}"`
  }
  
  fetchAdvice()

  document.