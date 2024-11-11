// components/ConnectWalletModal.tsx
"use client";
// components/ConnectWalletModal.tsx

import { Dialog, Transition } from '@headlessui/react';
import { Fragment, useState } from 'react';
import { XMarkIcon } from '@heroicons/react/24/outline';
import { FaGoogle, FaGithub, FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaWhatsapp, FaEnvelope, FaDiscord } from 'react-icons/fa';

const ConnectWalletModal: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <>
      <button
        onClick={openModal}
        className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
      >
        Connect Wallet
      </button>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <div className="flex justify-between items-center mb-4">
                    <Dialog.Title
                      as="h3"
                      className="text-lg font-medium leading-6 text-gray-900"
                    >
                      Login
                    </Dialog.Title>
                    <button onClick={closeModal} className="text-gray-500 hover:text-gray-800">
                      <XMarkIcon className="h-5 w-5" />
                    </button>
                  </div>
                  <p className="text-sm text-gray-500 mb-6">
                    Choose your preferred login method below.
                  </p>

                  <div className="space-y-4">
                  <hr className=''/>
                    <div>
                      <h4 className="text-gray-600 font-semibold p-4 text-center">Social Login</h4>
                      <div className="grid grid-cols-3 gap-3 mt-2">
                        <button className="border border-gray-300 rounded-lg flex items-center justify-center px-4 py-2 bg-white text-gray-700 hover:text-black hover:bg-gray-100">
                          <FaGoogle className="mr-2" /> Google
                        </button>
                        <button className="border border-gray-300 rounded-lg flex items-center justify-center px-4 py-2 bg-white text-gray-700 hover:text-black hover:bg-gray-100">
                          <FaGithub className="mr-2" /> GitHub
                        </button>
                        <button className="border border-gray-300 rounded-lg flex items-center justify-center px-4 py-2 bg-white text-gray-700 hover:text-black hover:bg-gray-100">
                          <FaFacebook className="mr-2" /> Facebook
                        </button>
                        <button className="border border-gray-300 rounded-lg flex items-center justify-center px-4 py-2 bg-white text-gray-700 hover:text-black hover:bg-gray-100">
                          <FaTwitter className="mr-2" /> Twitter
                        </button>
                        <button className="border border-gray-300 rounded-lg flex items-center justify-center px-4 py-2 bg-white text-gray-700 hover:text-black hover:bg-gray-100">
                          <FaInstagram className="mr-2" /> Instagram
                        </button>
                        <button className="border border-gray-300 rounded-lg flex items-center justify-center px-4 py-2 bg-white text-gray-700 hover:text-black hover:bg-gray-100">
                          <FaLinkedin className="mr-2" /> LinkedIn
                        </button>
                        <button className="border border-gray-300 rounded-lg flex items-center justify-center px-4 py-2 bg-white text-gray-700 hover:text-black hover:bg-gray-100">
                          <FaWhatsapp className="mr-2" /> WhatsApp
                        </button>
                        <button className="border border-gray-300 rounded-lg flex items-center justify-center px-4 py-2 bg-white text-gray-700 hover:text-black hover:bg-gray-100">
                          <FaEnvelope className="mr-2" /> Email
                        </button>
                        <button className="border border-gray-300 rounded-lg flex items-center justify-center px-4 py-2 bg-white text-gray-700 hover:text-black hover:bg-gray-100">
                          <FaDiscord className="mr-2" /> Discord
                        </button>
                      </div>
                    </div>

                    <div className="mt-8 pt-6">
                      <hr className='pt-4'/>
                      <h4 className="text-gray-600 font-semibold text-center p-4">Login with Email (OAuth2)</h4>
                      
                      <button className="w-full bg-purple-600 text-white rounded-lg py-2 mt-2 hover:bg-purple-700">
                        Login
                      </button>
                    </div>

                    <div className="mt-10">

                    <hr className='pt-5'/>
                      <h4 className="text-gray-600 font-semibold text-center p-4">Connect External Wallet</h4>
                      <div className="flex space-x-4 mt-2 justify-center">
                        <div className="flex flex-col items-center text-gray-700">
                          <span className="text-yellow-500"><svg width="25px" height="24px" viewBox="0 0 256 240" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid"><title>MetaMask</title><g><polygon fill="#E17726" points="250.066018 -8.89651791e-15 140.218553 81.2793133 160.645643 33.3787726"></polygon><polygon fill="#E27625" points="6.19062016 0.0955267053 95.3715526 33.38465 114.767923 81.9132784"></polygon><polygon fill="#E27625" points="205.859986 172.858026 254.410647 173.782023 237.442988 231.424252 178.200429 215.112736"></polygon><polygon fill="#E27625" points="50.1391619 172.857971 77.6964289 215.11288 18.5530579 231.425317 1.68846828 173.782036"></polygon><polygon fill="#E27625" points="112.130724 69.5516472 114.115388 133.635085 54.744344 130.933905 71.6319541 105.456448 71.8456974 105.210668"></polygon><polygon fill="#E27625" points="143.254237 68.8369186 184.153999 105.213392 184.365514 105.45719 201.253537 130.934656 141.89632 133.635226"></polygon><polygon fill="#E27625" points="79.4347776 173.043957 111.853145 198.302774 74.1951401 216.484384"></polygon><polygon fill="#E27625" points="176.57078 173.040009 181.701672 216.484523 144.149363 198.301203"></polygon><polygon fill="#D5BFB2" points="144.977922 195.921642 183.084879 214.373531 147.637779 231.220354 148.005818 220.085704"></polygon><polygon fill="#D5BFB2" points="111.01133 195.929982 108.102093 219.90359 108.340838 231.207237 72.8105145 214.373665"></polygon><polygon fill="#233447" points="100.007166 141.998856 109.965172 162.926822 76.0615945 152.995277"></polygon><polygon fill="#233447" points="155.991579 142.000941 180.049716 152.994594 146.03608 162.923638"></polygon><polygon fill="#CC6228" points="82.0263962 172.830401 76.5459821 217.870023 47.1731221 173.814952"></polygon><polygon fill="#CC6228" points="173.976111 172.8305 208.830462 173.815081 179.347016 217.871514"></polygon><polygon fill="#CC6228" points="202.112267 128.387342 176.746779 154.238424 157.190334 145.301352 147.82685 164.985265 141.688645 131.136429"></polygon><polygon fill="#CC6228" points="53.8753865 128.386879 114.309585 131.136429 108.17138 164.985265 98.8061425 145.303856 79.3525107 154.238823"></polygon><polygon fill="#E27525" points="52.165606 123.082486 80.8639084 152.203386 81.8584812 180.952278"></polygon><polygon fill="#E27525" points="203.863346 123.029784 174.117491 181.003017 175.237428 152.202737"></polygon><polygon fill="#E27525" points="112.906762 124.855691 114.061658 132.125682 116.915771 150.236518 115.080954 205.861884 106.405804 161.177486 106.402953 160.71542"></polygon><polygon fill="#E27525" points="143.077997 124.755417 149.599051 160.715451 149.596194 161.177486 140.899333 205.973714 140.55515 194.76913 139.198167 149.907127"></polygon><polygon fill="#F5841F" points="177.788479 151.045975 176.81718 176.023897 146.543342 199.61119 140.4233 195.28712 147.283427 159.951634"></polygon><polygon fill="#F5841F" points="78.3167053 151.046455 108.716464 159.952427 115.576437 195.28712 109.456385 199.611197 79.1807344 176.021881"></polygon><polygon fill="#C0AC9D" points="67.0180978 208.857597 105.750143 227.209502 105.586194 219.372868 108.826835 216.528328 147.160694 216.528328 150.518758 219.363342 150.271375 227.194477 188.757733 208.903978 170.030292 224.379509 147.384611 239.933315 108.516484 239.933315 85.8855503 224.315941"></polygon><polygon fill="#161616" points="142.203502 193.479367 147.679764 197.347701 150.888964 222.952494 146.244706 219.030957 109.769299 219.030957 105.213447 223.031398 108.317268 197.349663 113.795429 193.479367"></polygon><polygon fill="#763E1A" points="242.814251 2.24978946 256 41.8072765 247.765337 81.803692 253.629038 86.3274221 245.694407 92.3812097 251.657525 96.9865879 243.761206 104.178247 248.609106 107.688972 235.743366 122.714803 182.973386 107.350364 182.516079 107.105244 144.488982 75.0267414"></polygon><polygon fill="#763E1A" points="13.1860054 2.24978557 111.51151 75.0267402 73.4844118 107.105244 73.0271023 107.350365 20.2567388 122.714804 7.39121291 107.688927 12.2352706 104.180751 4.34251001 96.9865923 10.2945566 92.3862179 2.24133703 86.315099 8.32629691 81.7886671 -8.89651791e-15 41.8087534"></polygon><polygon fill="#F5841F" points="180.391638 103.990363 236.304873 120.269177 254.470245 176.254719 206.546445 176.25462 173.525532 176.671282 197.539657 129.863284"></polygon><polygon fill="#F5841F" points="75.6080363 103.990376 58.4568191 129.863284 82.4741865 176.671282 49.4693913 176.254719 1.63053271 176.254719 19.6938968 120.269548"></polygon><polygon fill="#F5841F" points="163.383898 33.1117385 147.744691 75.3505047 144.425852 132.411352 143.155934 150.295986 143.055195 195.983514 112.943788 195.983514 112.846176 150.381702 111.572114 132.395585 108.251786 75.3505047 92.6150854 33.1117385"></polygon></g></svg></span>
                          <span className="text-sm">Not Installed</span>
                        </div>
                        <div className="flex flex-col items-center text-gray-700">
                          <span className="text-purple-500"><svg width="24" height="24" viewBox="0 0 1024 1024" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="1024" height="1024" fill="#0052FF"></rect><path fillRule="evenodd" clip-rule="evenodd" d="M152 512C152 710.823 313.177 872 512 872C710.823 872 872 710.823 872 512C872 313.177 710.823 152 512 152C313.177 152 152 313.177 152 512ZM420 396C406.745 396 396 406.745 396 420V604C396 617.255 406.745 628 420 628H604C617.255 628 628 617.255 628 604V420C628 406.745 617.255 396 604 396H420Z" fill="white"></path></svg></span>
                          <span className="text-sm">Installed</span>
                        </div>
                        <div className="flex flex-col items-center text-gray-700">
                          <span className="text-blue-500"><svg width="24" height="24" version="1.1" baseProfile="basic" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 387.6 237.6" xmlSpace="preserve"><path id="WalletConnect_00000073703063438220642730000002917717552236472496_" fill="#3B99FC" d="M79.4,46.4  c63.2-61.9,165.7-61.9,228.9,0l7.6,7.4c3.2,3.1,3.2,8.1,0,11.2l-26,25.5c-1.6,1.5-4.1,1.5-5.7,0l-10.5-10.3  c-44.1-43.2-115.6-43.2-159.7,0l-11.2,11c-1.6,1.5-4.1,1.5-5.7,0L71,65.8c-3.2-3.1-3.2-8.1,0-11.2L79.4,46.4z M362.1,99.1l23.2,22.7  c3.2,3.1,3.2,8.1,0,11.2L280.8,235.3c-3.2,3.1-8.3,3.1-11.4,0c0,0,0,0,0,0l-74.1-72.6c-0.8-0.8-2.1-0.8-2.9,0c0,0,0,0,0,0  l-74.1,72.6c-3.2,3.1-8.3,3.1-11.4,0c0,0,0,0,0,0L2.4,133c-3.2-3.1-3.2-8.1,0-11.2l23.2-22.7c3.2-3.1,8.3-3.1,11.4,0l74.1,72.6  c0.8,0.8,2.1,0.8,2.9,0c0,0,0,0,0,0l74.1-72.6c3.2-3.1,8.3-3.1,11.4,0c0,0,0,0,0,0l74.1,72.6c0.8,0.8,2.1,0.8,2.9,0l74.1-72.6  C353.8,96,358.9,96,362.1,99.1z"></path></svg></span>
                          <span className="text-sm">Not Installed</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* <div className="mt-6 text-center text-sm text-gray-400">
                    Self-custody via <span className="font-semibold text-gray-500">Web3Auth</span>
                  </div> */}
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default ConnectWalletModal;

