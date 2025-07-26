'use client';
import React, { useState } from 'react';
import { Mail, X, Send, User, MessageSquare } from 'lucide-react';

interface EmailPopupProps {
  isOpen: boolean;
  onClose: () => void;
  emailAddress: string;
}

const EmailPopup: React.FC<EmailPopupProps> = ({ isOpen, onClose, emailAddress }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e: { target: { name: any; value: any; }; }) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = () => {
    // Créer le lien mailto avec les données du formulaire
    const mailtoLink = `mailto:${emailAddress}?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(
      `Nom: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;
    
    window.location.href = mailtoLink;
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 z-[9999] flex items-center justify-center p-2 sm:p-4 lg:p-6">
      <div className="master-container w-full max-w-xs sm:max-w-md lg:max-w-lg xl:max-w-xl max-h-[90vh] overflow-y-auto px-1 sm:px-2 lg:px-4">
        {/* Header carte */}
        <div className="carte bg-white rounded-t-2xl">
          <div className="title flex justify-between items-center">
            <div className="flex items-center gap-1 sm:gap-2">
              <Mail className="w-3 h-3 sm:w-4 sm:h-4 text-[#e3c177]" />
              <span className="text-xs sm:text-sm">Envoyer un Email</span>
            </div>
            <button 
              onClick={onClose}
              className="p-1 hover:bg-gray-100 rounded transition-colors"
            >
              <X className="w-3 h-3 sm:w-4 sm:h-4" />
            </button>
          </div>
          <div className="p-2 sm:p-4">
            <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
              <div className="w-8 h-8 sm:w-12 sm:h-12 bg-[#e3c177]/10 rounded-full flex items-center justify-center">
                <Mail className="w-4 h-4 sm:w-6 sm:h-6 text-[#e3c177]" />
              </div>
              <div>
                <p className="text-xs sm:text-sm text-gray-600 break-all">{emailAddress}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Form carte */}
        <div className="carte bg-white">
          <div className="title">
            <User className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
            <span className="text-xs sm:text-sm">Informations de Contact</span>
          </div>
          <div className="p-2 sm:p-4 space-y-3 sm:space-y-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 sm:gap-4">
              <div>
                <label className="block text-xs font-semibold text-gray-600 mb-1 sm:mb-2">
                  Nom Complet *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="input_field w-full"
                  placeholder="Votre nom"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-600 mb-1 sm:mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="input_field w-full"
                  placeholder="votre@email.com"
                />
              </div>
            </div>
            
            <div>
              <label className="block text-xs font-semibold text-gray-600 mb-1 sm:mb-2">
                Sujet *
              </label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleInputChange}
                className="input_field w-full"
                placeholder="Sujet de votre message"
              />
            </div>
          </div>
        </div>

        {/* Message carte */}
        <div className="carte bg-white">
          <div className="title">
            <MessageSquare className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
            <span className="text-xs sm:text-sm">Message</span>
          </div>
          <div className="p-2 sm:p-4">
            <label className="block text-xs font-semibold text-gray-600 mb-1 sm:mb-2">
              Votre Message *
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              className="input_field w-full min-h-[60px] sm:min-h-[80px] lg:min-h-[100px] resize-none"
              placeholder="Décrivez votre projet, vos besoins ou posez votre question..."
            />
          </div>
        </div>

        {/* Submit carte */}
        <div className="carte bg-white rounded-b-2xl">
          <div className="checkout--footer">
            <div className="flex flex-col">
              <span className="text-xs text-gray-500">Prêt à envoyer</span>
              <span className="text-xs sm:text-sm font-semibold text-gray-700">Message Email</span>
            </div>
            <button
              onClick={handleSubmit}
              className="checkout-btn flex items-center gap-1 sm:gap-2"
              disabled={!formData.name || !formData.email || !formData.subject || !formData.message}
            >
              <Send className="w-3 h-3 sm:w-4 sm:h-4" />
              <span className="text-xs sm:text-sm">Envoyer</span>
            </button>
          </div>
        </div>
      </div>

      <style jsx>{`
        .master-container {
          display: grid;
          grid-template-columns: auto;
          gap: 3px;
        }

        @media (min-width: 640px) {
          .master-container {
            gap: 5px;
          }
        }

        .carte {
          background: #FFFFFF;
          box-shadow: 0px 187px 75px rgba(0, 0, 0, 0.01), 0px 105px 63px rgba(0, 0, 0, 0.05), 0px 47px 47px rgba(0, 0, 0, 0.09), 0px 12px 26px rgba(0, 0, 0, 0.1), 0px 0px 0px rgba(0, 0, 0, 0.1);
        }

        .title {
          width: 100%;
          height: 32px;
          position: relative;
          display: flex;
          align-items: center;
          padding-left: 12px;
          border-bottom: 1px solid #efeff3;
          font-weight: 700;
          font-size: 10px;
          color: #63656b;
        }

        @media (min-width: 640px) {
          .title {
            height: 40px;
            padding-left: 20px;
            font-size: 11px;
          }
        }

        .input_field {
          width: 100%;
          height: 32px;
          padding: 0 0 0 8px;
          border-radius: 5px;
          outline: none;
          border: 1px solid #e5e5e5;
          filter: drop-shadow(0px 1px 0px #efefef)
            drop-shadow(0px 1px 0.5px rgba(239, 239, 239, 0.5));
          transition: all 0.3s cubic-bezier(0.15, 0.83, 0.66, 1);
          font-size: 14px;
        }

        @media (min-width: 640px) {
          .input_field {
            height: 36px;
            padding: 0 0 0 12px;
            font-size: 16px;
          }
        }

        .input_field:focus {
          border: 1px solid transparent;
          box-shadow: 0px 0px 0px 2px #e3c177;
          background-color: transparent;
        }

        .checkout--footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 8px 8px 8px 12px;
          background-color: #efeff3;
        }

        @media (min-width: 640px) {
          .checkout--footer {
            padding: 10px 10px 10px 20px;
          }
        }

        .checkout-btn {
          display: flex;
          flex-direction: row;
          justify-content: center;
          align-items: center;
          width: 120px;
          height: 32px;
          background: linear-gradient(180deg, #e3c177 0%, #d4b068 50%, #c5a059 100%);
          box-shadow: 0px 0.5px 0.5px #EFEFEF, 0px 1px 0.5px rgba(239, 239, 239, 0.5);
          border-radius: 7px;
          border: 0;
          outline: none;
          color: #ffffff;
          font-size: 12px;
          font-weight: 600;
          transition: all 0.3s cubic-bezier(0.15, 0.83, 0.66, 1);
        }

        @media (min-width: 640px) {
          .checkout-btn {
            width: 150px;
            height: 36px;
            font-size: 13px;
          }
        }

        .checkout-btn:hover:not(:disabled) {
          transform: translateY(-1px);
          box-shadow: 0px 2px 8px rgba(227, 193, 119, 0.3);
        }

        .checkout-btn:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }

        /* Améliorations pour très petits écrans */
        @media (max-width: 320px) {
          .master-container {
            max-width: 280px;
          }
          
          .checkout-btn {
            width: 100px;
            font-size: 11px;
          }
          
          .input_field {
            font-size: 12px;
          }
        }

        /* Améliorations pour grands écrans */
        @media (min-width: 1024px) {
          .input_field {
            height: 40px;
            padding: 0 0 0 16px;
          }
          
          .checkout-btn {
            width: 160px;
            height: 40px;
            font-size: 14px;
          }
        }
      `}</style>
    </div>
  );
};

export default EmailPopup;