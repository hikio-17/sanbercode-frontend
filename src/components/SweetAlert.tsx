import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import '../styles/swetalert.css';

const MySwal = withReactContent(Swal);

function SweetAlert({ text, status }: { text: string, status: string }) {
   return MySwal.fire({
      toast: true,
      position: 'top-right',
      title: `${status === 'success' ? 'Success' : 'Error'}`,
      icon: `${status === 'success' ? 'success' : 'error'}`,
      iconColor: 'white',
      customClass: {
         popup: 'colored-toast',
      },
      text,
      showConfirmButton: false,
      timerProgressBar: true,
      timer: 1500,
   });
}

export default SweetAlert;