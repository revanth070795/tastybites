import React from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import { Instagram, Facebook, Youtube, Mail, MessageCircleMore } from 'lucide-react';
import { emailId, facebookLink, instagramId, phoneNumber, youtubeChannel, restaurantAddress } from '../constant';

const Footer = () => {

  const sendMessage = () => {
    const url = encodeURI(`https://wa.me/${phoneNumber.replace(' ','')}?text=Hi, I would like to know more info about this page.`);
    window.open(url, '_blank');
  }

  const redirectToInstagram = () => {
    const url = encodeURI(`https://instagram.com/${instagramId}`);
    window.open(url, '_blank');
  }

  const redirectToFacebook = () => {
    const url = encodeURI(facebookLink);
    window.open(url, '_blank');
  }

  const redirectToYouTube = () => {
    const url = encodeURI(youtubeChannel);
    window.open(url, '_blank');
  }

  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <div className="space-y-2">
              <p className="flex items-center gap-2"><FaPhone /> {phoneNumber}</p>
              <p className="flex items-center gap-2"><FaEnvelope /> {emailId}</p>
              <p className="flex items-center gap-2" >
                <FaMapMarkerAlt />
                <span dangerouslySetInnerHTML={{__html: restaurantAddress}} />
              </p>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Hours</h3>
            <div className="space-y-2">
              <p>Monday - Friday: 11:00 AM - 10:00 PM</p>
              <p>Saturday - Sunday: 10:00 AM - 11:00 PM</p>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a onClick={sendMessage} title='Reach us on Whatsapp' className="text-gray-400 hover:text-white">
                <MessageCircleMore className="w-6 h-6" />
              </a>
              <a title='Checkout our Instagram Profile' className="text-gray-400 hover:text-white">
                <Instagram onClick={redirectToInstagram} className="w-6 h-6" />
              </a>
              <a title='Checkout our Instagram Profile' className="text-gray-400 hover:text-white">
                <Facebook onClick={redirectToFacebook} className="w-6 h-6" />
              </a>
              <a title='Checkout our Youtube Channel' className="text-gray-400 hover:text-white">
                <Youtube onClick={redirectToYouTube} className="w-6 h-6" />
              </a>
              <a href={`mailto:${emailId}`} title='Send us an Email' className="text-gray-400 hover:text-white">
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
        <div className="text-center mt-8 pt-8 border-t border-gray-700">
          <p>&copy; 2024 Tasty Bites. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;