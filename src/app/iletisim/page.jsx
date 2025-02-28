// app/iletisim/page.js
// export default function Iletisim() {
//     return (
//       <div className="container mx-auto py-8">
//         <h1 className="text-3xl font-bold mb-6">İletişim</h1>
//         <p>Daha bir telefonum bile yok. Nasıl iletişim kurabilirim ki...</p>
//         <br />
//         <p>Ama e-posta atabilirsiniz.<br /></p>
//         <p> <strong>Email: </strong>karaomerogluzehra@gmail.com</p> 
//       </div>
//     );
//   }
// app/contact/page.js
export default function Contact() {
  return (
    <div className="container mx-auto py-8 px-4">
      {/* Başlık Bölümü */}
      <div className="bg-gradient-to-r from-blue-400 to-purple-500 rounded-xl p-6 mb-8 text-white shadow-lg">
        <h1 className="text-4xl font-bold mb-4">Benimle İletişime Geç!</h1>
        <p className="text-xl">Sorularını ve düşüncelerini paylaşmak için aşağıdaki bilgileri kullanabilirsin.</p>
      </div>

      {/* İletişim Bilgileri Bölümü */}
      <div className="mb-12">
        <h2 className="text-3xl font-bold mb-6 text-blue-600 border-b-4 border-blue-600 pb-2 inline-block">İletişim Bilgilerim</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-blue-50 p-6 rounded-lg shadow-md">
            <div className="flex items-center justify-center h-16 w-16 bg-blue-100 rounded-full mx-auto mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-3 text-blue-700 text-center">E-posta Adresim</h3>
            <p className="text-center text-gray-700">karaomerogluzehra@gmail.com</p>
          </div>
          
          <div className="bg-purple-50 p-6 rounded-lg shadow-md">
            <div className="flex items-center justify-center h-16 w-16 bg-purple-100 rounded-full mx-auto mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-3 text-purple-700 text-center">Telefon Numaram</h3>
            <p className="text-center text-gray-700">Tabiki yok</p>
          </div>
          
          <div className="bg-green-50 p-6 rounded-lg shadow-md">
            <div className="flex items-center justify-center h-16 w-16 bg-green-100 rounded-full mx-auto mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-3 text-green-700 text-center">Adresim</h3>
            <p className="text-center text-gray-700">Merkez / Sivas</p>
          </div>
        </div>
      </div>

      {/* İletişim Formu Bölümü */}
      <div className="mb-12">
        <h2 className="text-3xl font-bold mb-6 text-purple-600 border-b-4 border-purple-600 pb-2 inline-block">Bana Mesaj Gönder</h2>
        <div className="bg-white p-8 rounded-lg shadow-md">
          <form>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Adın Soyadın</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="Adını ve soyadını yazar mısın?"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">E-posta Adresin</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="E-posta adresini yazar mısın?"
                />
              </div>
            </div>
            <div className="mb-6">
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">Konu</label>
              <input
                type="text"
                id="subject"
                name="subject"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                placeholder="Mesajının konusu nedir?"
              />
            </div>
            <div className="mb-6">
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Mesajın</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                placeholder="Bana ne söylemek istersin?"
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium py-3 px-6 rounded-lg hover:from-blue-600 hover:to-purple-700 transition duration-300 shadow-md"
            >
              Mesajımı Gönder
            </button>
          </form>
        </div>
      </div>

      {/* Sosyal Medya Bölümü */}
      <div className="mb-12">
        <h2 className="text-3xl font-bold mb-6 text-orange-600 border-b-4 border-orange-600 pb-2 inline-block">Sosyal Medya Hesaplarım</h2>
        <div className="bg-orange-50 p-6 rounded-lg shadow-md">
          <div className="flex flex-wrap justify-center gap-8">
            <a href="#" className="flex flex-col items-center group">
              <div className="h-16 w-16 bg-orange-100 rounded-full flex items-center justify-center mb-2 group-hover:bg-orange-200 transition duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-orange-500" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.477 2 2 6.477 2 12c0 5.523 4.477 10 10 10s10-4.477 10-10c0-5.523-4.477-10-10-10zm5.23 15.23l-1.41 1.41L12 14.83l-3.82 3.82-1.41-1.41L10.59 13 6.77 9.18l1.41-1.41L12 11.59l3.82-3.82 1.41 1.41L13.41 13l3.82 3.82z" />
                </svg>
              </div>
              <span className="text-gray-700 font-medium">Youtube</span>
            </a>
            <a href="#" className="flex flex-col items-center group">
              <div className="h-16 w-16 bg-blue-100 rounded-full flex items-center justify-center mb-2 group-hover:bg-blue-200 transition duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-500" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z" />
                </svg>
              </div>
              <span className="text-gray-700 font-medium">Facebook</span>
            </a>
            <a href="#" className="flex flex-col items-center group">
              <div className="h-16 w-16 bg-pink-100 rounded-full flex items-center justify-center mb-2 group-hover:bg-pink-200 transition duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-pink-500" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0 2c-4.411 0-8 3.589-8 8 0 3.35 2.055 6.21 4.97 7.4.36.069.482.028.482-.223l-.008-.801c-2.017.437-2.444-.971-2.444-.971-.33-.84-.809-1.063-.809-1.063-.661-.454.05-.445.05-.445.732.052 1.12.757 1.12.757.65 1.112 1.705.792 2.12.604.066-.47.254-.792.462-.973-1.609-.183-3.298-.804-3.298-3.573 0-.788.282-1.434.743-1.94-.074-.183-.321-.919.07-1.915 0 0 .6-.191 1.975.737.572-.16 1.187-.24 1.8-.242.611.002 1.226.082 1.8.242 1.374-.928 1.974-.737 1.974-.737.393.996.146 1.732.072 1.915.464.506.741 1.152.741 1.94 0 2.775-1.694 3.388-3.306 3.563.26.224.491.667.491 1.343 0 .97-.009 1.751-.009 1.989 0 .252.12.293.487.223 2.908-1.19 5-4.05 5-7.399 0-4.411-3.589-8-8-8z" />
                </svg>
              </div>
              <span className="text-gray-700 font-medium">Github</span>
            </a>
            <a href="#" className="flex flex-col items-center group">
              <div className="h-16 w-16 bg-purple-100 rounded-full flex items-center justify-center mb-2 group-hover:bg-purple-200 transition duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-purple-500" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8 1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5 5 5 0 0 1-5 5 5 5 0 0 1-5-5 5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3z" />
                </svg>
              </div>
              <span className="text-gray-700 font-medium">Instagram</span>
            </a>
          </div>
        </div>
      </div>

      {/* Hızlı İletişim Bölümü */}
      <div>
        <h2 className="text-3xl font-bold mb-6 text-teal-600 border-b-4 border-teal-600 pb-2 inline-block">Sık Sorulan Sorular</h2>
        <div className="bg-teal-50 p-6 rounded-lg shadow-md">
          <div className="space-y-4">
            <div className="bg-white p-4 rounded-lg shadow">
              <h3 className="text-lg font-semibold text-teal-700 mb-2">En sevdiğin ders hangisi?</h3>
              <p className="text-gray-700">En sevdiğim ders Matematik! Sayılarla uğraşmayı ve problem çözmeyi çok seviyorum.</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow">
              <h3 className="text-lg font-semibold text-teal-700 mb-2">Okuldan sonra neler yapıyorsun?</h3>
              <p className="text-gray-700">Okuldan sonra önce ödevlerimi yapıyorum, sonra biraz dinlenip hobilerimi gerçekleştiriyorum. Akşamları ailece vakit geçirmeyi seviyorum.</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow">
              <h3 className="text-lg font-semibold text-teal-700 mb-2">Büyüyünce ne olmak istiyorsun?</h3>
              <p className="text-gray-700">Büyüyünce bir bilim insanı olmak istiyorum! Özellikle hayvanlar ile ilgili araştırmalar yapmak çok heyecan verici olurdu.</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow">
              <h3 className="text-lg font-semibold text-teal-700 mb-2">Başka sorularım varsa nasıl iletişime geçebilirim?</h3>
              <p className="text-gray-700">Yukarıdaki iletişim formunu doldurarak veya e-posta adresime yazarak benimle iletişime geçebilirsin. Sorularını cevaplamaktan mutluluk duyarım!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}