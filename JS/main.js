let chart = null;
let skipEvery = 2;
computeAndGraph(3);

let inputs = document.getElementsByClassName("inputs");
for (let i = 0; i < inputs.length; i++) {
  inputs[i].addEventListener("input", eventHandler);
}

function eventHandler(event) {
  let R0 = (
    ((Number(document.getElementById("el").value) *
      Number(document.getElementById("beta").value)) /
      (Number(document.getElementById("alpha").value) +
        Number(document.getElementById("omega").value))) *
    (Number(document.getElementById("omega").value) +
      Number(document.getElementById("el").value))
  ).toFixed(2);
  if (event.target.id == "alpha") {
    document.getElementById("alphaText").innerHTML = event.target.value;
  }
  if (event.target.id == "beta") {
    document.getElementById("betaText").innerHTML = event.target.value;
  }
  if (event.target.id == "omega") {
    document.getElementById("omegaText").innerHTML = event.target.value;
  }
  if (event.target.id == "vi") {
    document.getElementById("viText").innerHTML = event.target.value;
  }
  if (event.target.id == "el") {
    document.getElementById("elText").innerHTML = event.target.value;
  }
  document.getElementById("R0Text").innerHTML = "R0 =" + R0;

  computeAndGraph(R0);
}

function computeAndGraph(R0) {
  let alpha = Number(document.getElementById("alpha").value);
  let beta = Number(document.getElementById("beta").value);
  let omega = Number(document.getElementById("omega").value);
  let vi = Number(document.getElementById("vi").value);
  let el = Number(document.getElementById("el").value); //latency period
  let I0 = Number(document.getElementById("I0").value);
  let N = Number(document.getElementById("N").value);
  let delT = Number(document.getElementById("delT").value);
  let maxTime = Number(document.getElementById("maxTime").value);

  if (delT == 0) return;

  let I_ar = [];
  let S_ar = [];
  let E_ar = [];
  let R_ar = [];
  let D_ar = [];
  let V_ar = [];
  let t_ar = [];

  let I = I0;
  let S = N;
  let E = 1;
  let R = 0;
  let D = 0;
  let V = 0;

  let counter = 0;
  for (let t = 0; t <= maxTime; t += delT) {
    let delS =
      -(omega * S * delT) +
      omega * N * delT +
      ((-beta * S * I) / N) * delT -
      vi * S * delT;
    let delE = ((beta * I * S) / N) * delT - (omega + el) * E * delT;
    let delI = el * E * delT - (alpha + omega) * I * delT;
    let delR = alpha * I * delT - omega * R * delT;
    let delD = omega * I * delT;
    let delV = vi * S * delT;
    S += delS;
    E += delE;
    I += delI;
    R += delR;
    D += delD;
    V += delV;
    if (counter % skipEvery == 0) {
      S <= 0 ? (S = -S) : (S = S);
      I <= 0 ? (I = -I) : (I = I);
      E <= 0 ? (E = -E) : (E = E);
      S >= N ? (S = N-1) : (S = S);
      I >= N ? (I = N-1) : (I = I);
      E >= N ? (E = N-1) : (E = E);
      R >= N ? (R = N-1) : (R = R);
      I_ar.push(I);
      S_ar.push(S);
      E_ar.push(E);
      R_ar.push(R);
      D_ar.push(D);
      V_ar.push(V);
      t_ar.push(Number(t.toFixed(2)));
    }
    counter++;
  }

  drawChart(
    {
      t: t_ar,
      I: I_ar,
      S: S_ar,
      E: E_ar,
      R: R_ar,
      D: D_ar,
      V: V_ar,
    },
    N,
    R0
  );
}

function drawChart(output, y0, R0) {
  var ctx = document.getElementById("chart").getContext("2d");
  if (chart != undefined) {
    chart.destroy();
  }
  chart = new Chart(ctx, {
    type: "line",
    data: {
      labels: output.t,
      datasets: [
        {
          label: "Infected",
          data: output.I,
          borderColor: ["rgba(255, 99, 132, 1)"],
          borderWidth: 1,
          fill: false,
          pointRadius: 1,
        },
        {
          label: "Susceptible",
          data: output.S,
          borderColor: ["rgba(99, 255, 132, 1)"],
          borderWidth: 1,
          fill: false,
          pointRadius: 1,
        },
        {
          label: "Exposed",
          data: output.E,
          borderColor: ["rgba(200, 200, 100, 1)"],
          borderWidth: 1,
          fill: false,
          pointRadius: 1,
        },
        {
          label: "Recovered",
          data: output.R,
          borderColor: ["rgba(99, 132, 255, 1)"],
          borderWidth: 1,
          fill: false,
          pointRadius: 1,
        },
        {
          label: "Dead",
          data: output.D,
          borderColor: ["rgba(0,255,255,1)"],
          borderWidth: 1,
          fill: false,
          pointRadius: 1,
        },
        {
          label: "Vaccinated",
          data: output.V,
          borderColor: ["rgba(2,2,2,1)"],
          borderWidth: 1,
          fill: false,
          pointRadius: 1,
        },
      ],
    },
    options: {
      animation: {
        duration: 0,
      },
      scales: {
        yAxes: [
          {
            ticks: {
              beginAtZero: true,
              max: y0,
            },
            scaleLabel: {
              display: true,
              labelString: "Population",
            },
          },
        ],
        xAxes: [
          {
            ticks: {
              autoSkip: true,
              maxTicksLimit: 30,
            },
            scaleLabel: {
              display: true,
              labelString: "Time",
            },
          },
        ],
      },
      title: {
        display: true,
        text: "Epidemic over time | R0 = " + R0,
      },
      maintainAspectRatio: false,
      responsive: false,
    },
  });
}
