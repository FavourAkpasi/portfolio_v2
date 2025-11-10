import {IContactForm} from '@/types';
import emailjs from '@emailjs/browser';

const sendEmail = async (payload: IContactForm) => {
  const templateParams = {
    name: payload.full_name,
    email: payload.email,
    title: payload.subject,
    message: payload.message,
  };

  await emailjs.send(
    process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || '',
    process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || '',
    templateParams,
    {
      publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || '',
    },
  );
};

const apiServices = {
  sendEmail,
};

export default apiServices;
