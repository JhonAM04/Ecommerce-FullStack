
fetch('https://ecommerce-fullstack-wfxr.onrender.com/api/ecommerce/ventas').then((response)=>{
    return response.json()
}).then((data)=>{
  const ctx = document.getElementById('barchart')

  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: data.map(item=>item.producto__nombre),
      datasets: [{
        label: '# Productos vendidos',
        data: data.map(item => item.cantidadVendido ),
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        x:{
            ticks: {
                callback: function(value, index, ticks) {
                const label = this.getLabelForValue(value);
                return label.length > 15 ? label.slice(0, 15) + "..." : label;
                },
                font: {
                size: 10 // o 8, dependiendo de tu espacio
                }
             }
        },
        y: {
          beginAtZero: true
        }
      }
    }
  });
})


