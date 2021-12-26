var inp = document.getElementById("input");
var inp2 = document.getElementById("input2");
const btn = document.getElementById("btn");
btn.addEventListener("click", (e) => {
  e.preventDefault();
  var x = inp.value;
  var y = inp2.value;
  var gridTraveler = (m, n, memoization = {}) => {
    const key = m + ',' + n;
    if (key in memoization) return memoization[key];
    if (m === 1 && n === 1) return 1;
    if (m === 0 || n === 0) return 0;
    memoization[key] = gridTraveler(m - 1, n, memoization) + gridTraveler(m, n - 1, memoization);
    return memoization[key];
  };

  var add = document.getElementById("addp");
  add.innerHTML = `
            <p class="p">grid trave memoization number is</p><br>
            ${gridTraveler(x, y)}
    `;
});
// it gonn work intli  1.3069892237633987e+308
/* more then that = Error cose 
that result number it more then js top number*/
