fetch('https://ecommerce-fullstack-wfxr.onrender.com/api/ecommerce/ventas').then((response)=>{
    return response.json()
}).then((data)=>{
  const generoData = {};

    data.forEach(item => {
      const genero = item.producto__genero__descripcion;
      const cantidad = item.cantidadVendido;

      if (generoData[genero]) {
        generoData[genero] += cantidad;
      } else {
        generoData[genero] = cantidad;
      }
    });

    const labels = Object.keys(generoData);
    const cantidades = Object.values(generoData);

  const ctx = document.getElementById('piechart')

  new Chart(ctx, {
    type: 'pie',
    data: {
      labels: labels,
      datasets: [{
        label: '# Productos vendidos',
        data: cantidades,
        borderWidth: 1,
        backgroundColor: [
      'rgb(255, 99, 132)',
      'rgb(54, 162, 235)'
        ]
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
})