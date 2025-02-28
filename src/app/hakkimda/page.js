// export default function Hakkimda() {
//     return (
//       <div className="container mx-auto py-8">
//         <h1 className="text-3xl font-bold mb-6">Hakkımda</h1>
//         <p>Bildiğiniz Zehra işte ne bekliyorsunuz ki </p>
//       </div>
//     );
//   }

// app/hakkimda/page.js
export default function Hakkimda() {
  return (
    <div className="container mx-auto py-8 px-4">
      {/* Başlık Bölümü */}
      <div className="bg-gradient-to-r from-pink-400 to-purple-500 rounded-xl p-6 mb-8 text-white shadow-lg">
        <h1 className="text-4xl font-bold mb-4">Benim Hakkımda</h1>
        <p className="text-xl">Merhaba! Ben kimim ve neler yapmayı seviyorum öğrenmek ister misin?</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Kişisel Bilgiler Bölümü */}
        <div className="bg-blue-50 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-6 text-blue-600 border-b-4 border-blue-600 pb-2 inline-block">Kişisel Bilgilerim</h2>
          
          <div className="space-y-4">
            <div className="flex items-start">
              <div className="bg-blue-200 text-blue-800 p-2 rounded-full w-10 h-10 flex items-center justify-center mr-4 flex-shrink-0">
                <span className="text-lg">🎂</span>
              </div>
              <div>
                <h3 className="font-semibold text-blue-700">Doğum Tarihim</h3>
                <p>2014 yılında dünyaya geldim. Şu an 11 yaşındayım!</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="bg-blue-200 text-blue-800 p-2 rounded-full w-10 h-10 flex items-center justify-center mr-4 flex-shrink-0">
                <span className="text-lg">🐾</span>
              </div>
              <div>
                <h3 className="font-semibold text-blue-700">Hayvanlar</h3>
                <p>Tüm hayvanları çok seviyorum! Büyüyünce veteriner olmayı hayal ediyorum ve hayvan dostlarımıza yardım etmek istiyorum.</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="bg-blue-200 text-blue-800 p-2 rounded-full w-10 h-10 flex items-center justify-center mr-4 flex-shrink-0">
                <span className="text-lg">🍽️</span>
              </div>
              <div>
                <h3 className="font-semibold text-blue-700">Favori Yemeğim</h3>
                <p>En sevdiğim yemek mantı! Özellikle yoğurtlu ve soslu olanını çok seviyorum.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Eğitim Bilgileri Bölümü */}
        <div className="bg-green-50 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-6 text-green-600 border-b-4 border-green-600 pb-2 inline-block">Eğitim Hayatım</h2>
          
          <div className="mb-6">
            <div className="flex items-center mb-3">
              <div className="bg-green-200 text-green-800 p-2 rounded-full w-10 h-10 flex items-center justify-center mr-4">
                <span className="text-lg">🏫</span>
              </div>
              <h3 className="font-semibold text-green-700 text-xl">Okul Yolculuğum</h3>
            </div>
            
            <div className="pl-14 space-y-6">
              <div className="relative pb-8 border-l-2 border-green-300 pl-6">
                <div className="absolute -left-2 top-0 bg-green-500 rounded-full w-5 h-5"></div>
                <h4 className="font-semibold text-green-700">Anaokulu</h4>
                <p>Akatlar Anaokulu</p>
                <p className="text-sm text-gray-600">Etiler/İstanbul</p>
              </div>
              
              <div className="relative pb-8 border-l-2 border-green-300 pl-6">
                <div className="absolute -left-2 top-0 bg-green-500 rounded-full w-5 h-5"></div>
                <h4 className="font-semibold text-green-700">İlkokul 1-2. Sınıf</h4>
                <p>İsmail Erez İlkokulu</p>
                <p className="text-sm text-gray-600">Kağıthane/İstanbul</p>
              </div>
              
              <div className="relative pb-8 border-l-2 border-green-300 pl-6">
                <div className="absolute -left-2 top-0 bg-green-500 rounded-full w-5 h-5"></div>
                <h4 className="font-semibold text-green-700">İlkokul 3-4. Sınıf</h4>
                <p>Reşit Akif Paşa İlkokulu</p>
                <p className="text-sm text-gray-600">Merkez/Sivas</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Hobilerim ve İlgi Alanlarım Bölümü */}
      <div className="mt-8">
        <h2 className="text-3xl font-bold mb-6 text-purple-600 border-b-4 border-purple-600 pb-2 inline-block">Hobilerim ve İlgi Alanlarım</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-purple-50 p-6 rounded-lg shadow-md transform transition duration-300 hover:scale-105">
            <div className="rounded-full bg-purple-200 w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <span className="text-3xl">💻</span>
            </div>
            <h3 className="text-xl font-semibold text-center mb-3 text-purple-700">Teknoloji</h3>
            <p className="text-center">Teknolojiyi çok seviyorum! Bilgisayar ve tablet kullanmayı öğrenmek benim için çok eğlenceli.</p>
          </div>
          
          <div className="bg-purple-50 p-6 rounded-lg shadow-md transform transition duration-300 hover:scale-105">
            <div className="rounded-full bg-purple-200 w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <span className="text-3xl">🐱</span>
            </div>
            <h3 className="text-xl font-semibold text-center mb-3 text-purple-700">Hayvanlar</h3>
            <p className="text-center">Tüm hayvanları seviyorum ve onlarla vakit geçirmek beni mutlu ediyor. Büyüyünce veteriner olacağım!</p>
          </div>
          
          <div className="bg-purple-50 p-6 rounded-lg shadow-md transform transition duration-300 hover:scale-105">
            <div className="rounded-full bg-purple-200 w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <span className="text-3xl">🍜</span>
            </div>
            <h3 className="text-xl font-semibold text-center mb-3 text-purple-700">Yemek</h3>
            <p className="text-center">Mantı benim favori yemeğim! Annem en güzel mantıyı yapıyor ve ben de ona yardım etmeyi seviyorum.</p>
          </div>
        </div>
      </div>

      {/* Yeteneklerim Bölümü */}
      <div className="mt-12">
        <h2 className="text-3xl font-bold mb-6 text-yellow-600 border-b-4 border-yellow-600 pb-2 inline-block">Yeteneklerim</h2>
        
        <div className="bg-yellow-50 p-6 rounded-lg shadow-md">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow">
              <div className="flex items-center mb-4">
                <div className="bg-yellow-200 p-3 rounded-lg mr-4">
                  <span className="text-2xl">🧩</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-yellow-700">Scratch ile Kodlama</h3>
                </div>
              </div>
              <p>Scratch kullanarak kendi oyunlarımı ve animasyonlarımı oluşturmayı seviyorum. Kodlama yapmak çok eğlenceli!</p>
              <div className="mt-4 bg-yellow-100 p-4 rounded-lg">
                <h4 className="font-semibold text-yellow-800 mb-2">Neler Yapıyorum:</h4>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Kedi karakteriyle basit oyunlar</li>
                  <li>Kısa hikaye animasyonları</li>
                  <li>Müzik etkinlikleri</li>
                  <li>Matematik bulmacaları</li>
                </ul>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow">
              <div className="flex items-center mb-4">
                <div className="bg-yellow-200 p-3 rounded-lg mr-4">
                  <span className="text-2xl">🎨</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-yellow-700">Canva ile Tasarım</h3>
                </div>
              </div>
              <p>Canva uygulamasını kullanarak kartlar, posterler ve sunumlar tasarlamayı çok seviyorum.</p>
              <div className="mt-4 bg-yellow-100 p-4 rounded-lg">
                <h4 className="font-semibold text-yellow-800 mb-2">Neler Tasarlıyorum:</h4>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Doğum günü kartları</li>
                  <li>Okul sunumları</li>
                  <li>Hayallerimi anlatan posterler</li>
                  <li>Aile albümleri</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Hayallerim Bölümü */}
      <div className="mt-12 mb-8">
        <h2 className="text-3xl font-bold mb-6 text-teal-600 border-b-4 border-teal-600 pb-2 inline-block">Hayallerim</h2>
        
        <div className="bg-teal-50 p-6 rounded-lg shadow-md">
          <div className="flex flex-col md:flex-row items-center">
            <div className="bg-teal-200 p-6 rounded-full w-32 h-32 flex items-center justify-center mb-6 md:mb-0 md:mr-8">
              <span className="text-5xl">🐘</span>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-teal-700 mb-4">Veteriner Olmak İstiyorum</h3>
              <p className="mb-4">Büyüyünce veteriner olmak en büyük hayalim. Çünkü hayvanları çok seviyorum ve onlara yardım etmek istiyorum.</p>
              <p className="mb-4">Hasta hayvanları iyileştirmek, onların daha sağlıklı ve mutlu yaşamasını sağlamak beni çok mutlu ediyor.</p>
              <p>Şimdiden bile küçük hayvan dostlarımız hakkında kitaplar okuyorum ve belgeseller izliyorum!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}