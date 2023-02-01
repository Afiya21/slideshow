
// import Swal from 'sweetalert2/dist/sweetalert2.js'
import Swal from 'sweetalert2'
import "./App.css"


let timerInterval
function App() {
	
  
 

Swal.fire({
	
  
  title: 'amazing job!',
  html: 'next word is ',
   
  timer: 2000,
  timerProgressBar: true,
  
  
  didOpen: () => {
    Swal.showLoading()
    const b = Swal.getHtmlContainer().querySelector('b')
    timerInterval = setInterval(() => {
      b.textContent = Swal.getTimerLeft()
    }, 100)
 
  },
  willClose: () => {
    clearInterval(timerInterval)
  }
}).then((result) => {
  /* Read more about handling dismissals below */
  if (result.dismiss === Swal.DismissReason.timer) {
    console.log('I was closed by the timer')
  }
 
})

}
	

export default App