import { useState } from 'react';
import { send } from 'emailjs-com';


const Form = () => {

  const [toSend, setToSend] = useState({
    from_name: '',
    reply_to: '',
    message: '',
  });
  const [alert, setAlert] = useState(null);

const onSubmit = (e) => {
    e.preventDefault();
    send(
        'service_ijr1bmb',
        'template_akwer7k',
        toSend,
        'eif9fAisD6xQWjpg5'
      )
        .then((response) => {
          console.log('SUCCESS!', response.status, response.text);
          setAlert(true)
        })
        .catch((err) => {
          console.log('FAILED...', err);
          setAlert(true)
        });
        };

  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };


  return (
    <form className='flex flex-col' ref={form} onSubmit={onSubmit} action="">
        <label htmlFor="name" className="my-4 text-brown">Nombre</label>
        <input
            className="mb-2 border-b-2 bg-yellowcito border border-green text-brown text-sm focus:ring-greencito focus:border-greencito block w-full p-2.5" 
            id="name"
            name="from_name"
            onChange={handleChange}
            value={toSend.from_name}
            type="text"
            autoComplete="Nombre"
            required
        />
        <label htmlFor="email" className="my-4 text-brown">Email</label>
        <input
            className="mb-4 border-b-2 bg-yellowcito border border-green text-brown text-sm focus:ring-greencito focus:border-greencito block w-full p-2.5 active:ring-green"
            id="email"
            name='reply_to'
            value={toSend.reply_to}
            onChange={handleChange}
            type="email"
            autoComplete="Email"
            required
        />
        <label htmlFor="comentario" className="my-4 text-brown">Comentario</label>
        <textarea 
          id="comentario" 
          name="message"
          value={toSend.message}
          onChange={handleChange}
          rows="4" 
          cols="50" 
          className='mb-4 border-b-2 bg-yellowcito border border-green text-brown text-sm focus:ring-greencito focus:border-greencito block w-full p-2.5'>
        </textarea>
        <button
        type="submit"
        className="px-12 py-2 border justify-center flex my-2 border-brown shadow text-brown hover:bg-yellow hover:text-green hover:border-green drop-shadow-sm animate-pulse">
        Enviar
        </button>
    </form>          
  )
}

export default Form