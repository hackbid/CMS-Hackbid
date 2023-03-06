import Swal from "sweetalert2";

const confirmationNotification = async (title) => {
  return Swal.fire({
    title,
    showCancelButton: true,
    confirmButtonText: "Logout",
    denyButtonText: `Yes, I'm sure`,
  });
};

export default confirmationNotification;
