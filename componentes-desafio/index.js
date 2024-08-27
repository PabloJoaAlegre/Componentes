async function Data() {
  const form = document.querySelector(".content-form");
  
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const formData = new ForData(e.target);
    console.log(formData.entries());
    const objeto = Object.fromEntries(formData.entries());
    console.log(objeto);
 
  
    try {
      const response = awaitfetch("https://apx-api.vercel.app/api/utils/dwf", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          to: "tu-email-de-estudiante@gmail.com",
          message: `Nombre: ${objeto.name}\nEmail: ${objeto.email}\nMensaje: ${objeto.message}`
        }),
      });

      if (!response.ok) {
        throw new Error('Error en la solicitud');
      }

      const result = awaitresponse.json();
      console.log("Correo enviado exitosamente:", result);
      alert("Tu mensaje ha sido enviado con éxito.");
    } catch (error) {
      console.error("Error al enviar el correo:", error);
      alert("Hubo un error al enviar el mensaje. Inténtalo de nuevo.");
    }
  });
}

Data();

