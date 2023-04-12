const color = document.querySelector('.color').value.replace('#','');;
const mode = document.getElementById('mode').value;
const getSchemeBtn = document.querySelector('.btn');
const scheme = document.querySelector('.scheme');

console.log(mode)
getSchemeBtn.addEventListener('click', () => {
    const url = `https://www.thecolorapi.com/scheme?hex=${color}&mode=${mode}`;
    fetch(url, {method: "GET"})
    .then(response => response.json())
    .then(data => {
        let colors = data.colors;
        for (let color of colors)
        {
            scheme.innerHTML +=
            `
            <div class="scheme-col" style="background-color: ${color.hex.value};">
            <span>${color.hex.value}</span>
            </div>
            `
            scheme.style.height = "300px";
            document.querySelectorAll('.scheme-col span').forEach((n) => {
                n.addEventListener('click', (e) =>{
                    navigator.clipboard.writeText(e.currentTarget.innerHTML)
                })
            })
        }
    })
})