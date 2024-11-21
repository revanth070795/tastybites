import React, {useState} from 'react';

import { FaPhone } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { RiMapPinFill } from "react-icons/ri";
import { phoneNumber, emailId, restaurantAddress } from '../constant';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const sendMessage = () => {
    const url = encodeURI(`https://wa.me/${phoneNumber.replace(' ','')}?text=${`Name : ${name}\nEmail : ${email}\nMessage : ${message}`}`);
    window.open(url, '_blank');
    setName('');
    setEmail('');
    setMessage('');
  }

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Get in Touch</h2>
          <p className="text-gray-600">Let's discuss your next Order or special event</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="flex items-start space-x-4">
              <IoMdMail className="w-6 h-6 text-gray-900 mt-1" />
              <div>
                <h3 className="font-semibold mb-1">Email</h3>
                <p className="text-gray-600">{emailId}</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <FaPhone className="w-6 h-6 text-gray-900 mt-1" />
              <div>
                <h3 className="font-semibold mb-1">Phone</h3>
                <p className="text-gray-600">{phoneNumber}</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <RiMapPinFill className="w-6 h-6 text-gray-900 mt-1" />
              <div>
                <h3 className="font-semibold mb-1">Restaurant Location</h3>
                <p className="text-gray-600" dangerouslySetInnerHTML={{__html: restaurantAddress}}></p>
              </div>
            </div>
          </div>

          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                value={name}
                onChange={e => {setName(e.target.value)}}
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                value={email}
                onChange={e => {setEmail(e.target.value)}}
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                value={message}
                onChange={e => {setMessage(e.target.value)}}
              ></textarea>
            </div>

            <button
              // type="submit"
              className="w-full bg-gray-900 text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors"
              onClick={sendMessage}
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;