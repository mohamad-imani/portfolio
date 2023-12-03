/* eslint-disable no-unused-vars */
import Circles from '../../components/Circles';

import { BsArrowRight } from 'react-icons/bs';

import { motion } from 'framer-motion';

import { fadeIn } from '../../variants';
import { useForm } from 'react-hook-form';

import emailjs from '@emailjs/browser';

import toast , {Toaster} from 'react-hot-toast'

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
    reset,
  } = useForm({ mode: 'onBlur' });


  function onSubmit(data) {
    const serviceID = 'service_eefrlag';
    const templateID = 'template_kgb6ohp';
    const publicKey = 'gFq3l1re75NgBYI4_';

    const templateParams = {
      from_name: getValues().name,
      from_email: getValues().email,
      to_name: 'mmd',
      message: getValues().message,
    };
    emailjs
      .send(serviceID, templateID, templateParams, publicKey)
      .then((response) => {
        toast.success('Email sent Successfully');
        reset();
      }).catch((error) => {
        toast.error('Error sending email' ,)
      }) ;
      <Toaster />
  }
  return (
    <div className="h-full bg-primary/30">
      <Circles />
      <motion.div 
      initial='hidden'
      animate='show'
      exit='hidden'
      variants={fadeIn('right' , 0.6)}
      className='hidden xxl:flex absolute w-[400px] bottom-64 left-24 mix-blend-color-dodge brightness-95 saturate-0 '>
      <img src={"/hands.png"} className='h-full w-full'  alt="" />
      </motion.div>
      <div className="container mx-auto flex h-full items-center justify-center py-32 text-center xl:text-left">
        {/*text & from*/}

        <div className="flex w-full max-w-[700px] flex-col">
          {/*text*/}
          <motion.h2
            variants={fadeIn('up', 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2 mb-12 text-center"
          >
            {`Let's`} <span className="text-accent">connect</span><span>.</span>
          </motion.h2>
          {/*form*/}
          <motion.form
            variants={fadeIn('up', 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="mx-auto flex w-full flex-1 flex-col gap-6"
            action=""
            onSubmit={handleSubmit(onSubmit)}
          >
            {/*input group*/}
            <div className="flex w-full justify-between gap-x-6">
              <div className="w-full">
                <input
                  type="text"
                  placeholder="name"
                  id="name"
                  className="input"
                  {...register('name', {
                    required: 'This field is required',
                  })}
                />
              </div>

              <div className="flex w-full flex-col items-start justify-center">
                <input
                  type="text"
                  required
                  placeholder="email"
                  id="email"
                  className="input "
                  {...register('email', {
                    required: 'Email is required',
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                      message: 'Invalid email address',
                    },
                  })}
                />

                {errors?.email?.message && (
                  <span className="p-1 text-xs font-normal text-red-500">
                    {errors.email.message}
                  </span>
                )}
              </div>
            </div>
            <input
              type="text"
              placeholder="subject"
              id="subject"
              className="input"
              {...register('subject')}
            />
            <textarea
              placeholder="message"
              className="textarea"
              id="message"
              {...register('message', {
                required: 'This field is required',
              })}
            ></textarea>
            <button
              type="submit"
              className="btn group flex max-w-[170px] items-center justify-center overflow-hidden rounded-full border border-white/50 px-8 transition-all duration-300 hover:border-accent"
            >
              <span className="transition-all duration-500 group-hover:translate-y-[120%] group-hover:opacity-0 ">{`Let's talk`}</span>
              <BsArrowRight className="absolute -translate-y-[120%] text-[22px] opacity-0 transition-all duration-300 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100" />
            </button>
          </motion.form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
