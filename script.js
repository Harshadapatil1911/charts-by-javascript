
  const ctx = document.getElementById('myChart');
  anime({
    targets: '#myChart',
    scale: [
      {value: .1, easing: 'easeOutSine', duration: 500},
      {value: 1, easing: 'easeInOutQuad', duration: 1200}
    ],
    delay: anime.stagger(200, {grid: [14, 5], from: 'center'})
  });

  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['January', 'February', 'March', 'April', 'May', 'June'],
      datasets: [{
        label: 'Months in years',
        data: [12, 19, 3, 5, 2, 10],
        backgroundColor: [
            'rgba(255, 99, 132)',
            'rgba(255, 159, 64,)',
            'rgba(255, 205, 86)',
            'rgba(75, 192, 192)',
            'rgba(54, 162, 235,)',
            'rgba(153, 102, 255,)',
            'rgba(201, 203, 207,)'
          ],
          borderColor: [
            'rgb(255, 99, 132)',
            'rgb(255, 159, 64)',
            'rgb(255, 205, 86)',
            'rgb(75, 192, 192)',
            'rgb(54, 162, 235)',
            'rgb(153, 102, 255)',
            'rgb(201, 203, 207)'
          ],
         
        borderWidth: 2
        
        
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
  
