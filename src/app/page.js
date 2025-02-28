// export default function Home() {
//   return (
//     <div className="container mx-auto py-8">
//       <h1 className="text-3xl font-bold mb-6">Web sayfama hoş geldiniz.</h1>
//       <p className="mb-4">Web sayfamı hazırlamaya devam ediyorum.</p>
//       <p>Bu proje, modern web teknolojilerini kullanarak oluşturuldu.</p>
//     </div>
//   );
// }

// app/page.js
export default function Home() {
  return (
    <div className="container mx-auto py-8 px-4">
      {/* Hero Bölümü */}
      <div className="bg-gradient-to-r from-blue-400 to-purple-500 rounded-xl p-6 mb-8 text-white shadow-lg">
        <h1 className="text-4xl font-bold mb-4">Eğlenceli Öğrenme Dünyama Hoş Geldin!</h1>
        <p className="text-xl">Birlikte öğrenelim, eğlenelim ve büyüyelim!</p>
      </div>

      {/* Okul Hayatı Bölümü */}
      <div className="mb-12">
        <h2 className="text-3xl font-bold mb-6 text-blue-600 border-b-4 border-blue-600 pb-2 inline-block">Okul Hayatım</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-yellow-100 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3 text-yellow-700">Derslerim</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>Türkçe - Hikayeler ve şiirler</li>
              <li>Matematik - Sayılar ve işlemler</li>
              <li>Sosyal Bilgiler - Çevremizi tanıyalım</li>
              <li>Görsel Sanatlar - Resim ve el işleri</li>
              <li>Müzik - Şarkılar ve ritimler</li>
            </ul>
          </div>
          <div className="bg-green-100 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3 text-green-700">Okul Kurallarım</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>Sınıfta parmak kaldırarak konuşuyorum</li>
              <li>Arkadaşlarıma nazik davranıyorum</li>
              <li>Teneffüslerde koşarken dikkatli oluyorum</li>
              <li>Okul eşyalarımı temiz ve düzenli tutuyorum</li>
              <li>Ödevlerimi zamanında yapıyorum</li>
            </ul>
          </div>
          <div className="bg-red-100 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3 text-red-700">Etkinliklerim</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>Spor Kursu - Her Salı ve Perşembe</li>
              <li>Model uçak kulübü - Her Cuma</li>
              <li>Kitap okuma saati - Her gün 40 dakika</li>
              <li>Spor etkinlikleri - Beden eğitimi derslerinde</li>
              <li>Gitar Kursu - Her Cumartesi</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Günlük Yaşam Bölümü */}
      <div className="mb-12">
        <h2 className="text-3xl font-bold mb-6 text-purple-600 border-b-4 border-purple-600 pb-2 inline-block">Günlük Yaşamım</h2>
        <div className="bg-purple-50 p-6 rounded-lg shadow-md">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4 text-purple-700">Günlük Programım</h3>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <span className="bg-purple-200 text-purple-800 font-semibold px-3 py-1 rounded-full mr-3">07:00</span>
                  <span>Uyanış ve kahvaltı</span>
                </li>
                <li className="flex items-center">
                  <span className="bg-purple-200 text-purple-800 font-semibold px-3 py-1 rounded-full mr-3">08:10</span>
                  <span>Okula gidiş</span>
                </li>
                <li className="flex items-center">
                  <span className="bg-purple-200 text-purple-800 font-semibold px-3 py-1 rounded-full mr-3">15:00</span>
                  <span>Okuldan dönüş</span>
                </li>
                <li className="flex items-center">
                  <span className="bg-purple-200 text-purple-800 font-semibold px-3 py-1 rounded-full mr-3">16:00</span>
                  <span>Ödev zamanı</span>
                </li>
                <li className="flex items-center">
                  <span className="bg-purple-200 text-purple-800 font-semibold px-3 py-1 rounded-full mr-3">18:00</span>
                  <span>Akşam yemeği</span>
                </li>
                <li className="flex items-center">
                  <span className="bg-purple-200 text-purple-800 font-semibold px-3 py-1 rounded-full mr-3">20:00</span>
                  <span>Kitap okuma zamanı</span>
                </li>
                <li className="flex items-center">
                  <span className="bg-purple-200 text-purple-800 font-semibold px-3 py-1 rounded-full mr-3">21:00</span>
                  <span>Uyku zamanı</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4 text-purple-700">Hobilerimi Keşfediyorum</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-lg shadow">
                  <h4 className="font-semibold text-purple-600 mb-2">Resim Yapmak</h4>
                  <p>En sevdiğim renklerle hayallerimi tuvale aktarıyorum!</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow">
                  <h4 className="font-semibold text-purple-600 mb-2">Maket Yapmak</h4>
                  <p>Küçük parçalardan büyük şehirler inşa ediyorum!</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow">
                  <h4 className="font-semibold text-purple-600 mb-2">Bisiklet Sürmek</h4>
                  <p>Komşularımızla birlikte parkta bisiklet sürüyoruz!</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow">
                  <h4 className="font-semibold text-purple-600 mb-2">Yüzmek</h4>
                  <p>Yazın havuzda kulaç atmak çok eğlenceli!</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Hayvan Dostlarım Bölümü */}
      <div className="mb-12">
        <h2 className="text-3xl font-bold mb-6 text-orange-600 border-b-4 border-orange-600 pb-2 inline-block">Hayvan Dostlarım</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-orange-50 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3 text-orange-700">Çakıl - Kedim</h3>
            <p className="mb-4">Çakıl 2 yaşında bir British Silver. En sevdiği şey pencere kenarında güneşlenmek ve yün toplarla oynamak.</p>
            <div className="bg-orange-100 p-4 rounded-lg">
              <h4 className="font-semibold mb-2">Çakılın Sevdikleri:</h4>
              <ul className="list-disc pl-5 space-y-1">
                <li>Ton balığı mamamı yemek</li>
                <li>Kucakta uyumak</li>
                <li>Kuş seslerini dinlemek</li>
                <li>Karton kutulara girmek</li>
              </ul>
            </div>
          </div>
          <div className="bg-orange-50 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3 text-orange-700">Karamel - Köpeğim</h3>
            <p className="mb-4">Karamel 5 yaşında bir Golden Retriever. Bahçede top oynamak ve yürüyüşe çıkmak en sevdiği aktiviteler.</p>
            <div className="bg-orange-100 p-4 rounded-lg">
              <h4 className="font-semibold mb-2">Karamel&apos;in Sevdikleri:</h4>
              <ul className="list-disc pl-5 space-y-1">
                <li>Kemiklerle oynamak</li>
                <li>Bahçede koşmak</li>
                <li>Arabada seyahat etmek</li>
                <li>Yüzmek ve ıslanmak</li>
              </ul>
            </div>
          </div>
          <div className="bg-orange-50 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3 text-orange-700">Hayvanları Koruyalım</h3>
            <p className="mb-4">Hayvanlar bizim dostlarımızdır. Onları korumak ve sevmek bizim görevimizdir.</p>
            <div className="bg-orange-100 p-4 rounded-lg">
              <h4 className="font-semibold mb-2">Nasıl Yardım Edebilirim?</h4>
              <ul className="list-disc pl-5 space-y-1">
                <li>Sokak hayvanları için mama ve su bırakmak</li>
                <li>Soğuk havalarda onlar için sığınak yapmak</li>
                <li>Onları sevmek ve korkutmamak</li>
                <li>Ailemle barınak ziyaretleri yapmak</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* İlginç Bilgiler Bölümü */}
      <div>
        <h2 className="text-3xl font-bold mb-6 text-teal-600 border-b-4 border-teal-600 pb-2 inline-block">Bilgi Köşem</h2>
        <div className="bg-teal-50 p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-4 text-teal-700">Biliyor muydun?</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white p-4 rounded-lg shadow">
              <p className="font-medium">🦒 Zürafaların kalpleri yaklaşık 11 kg ağırlığındadır ve dilleri 50 cm uzunluğa kadar çıkabilir!</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow">
              <p className="font-medium">🌎 Okyanuslar, Dünya&apos;nın yüzeyinin %70&apos;inden fazlasını kaplar ve keşfedilmemiş birçok canlı türü barındırır!</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow">
              <p className="font-medium">🐝 Arılar, bir kaşık bal üretmek için yaklaşık 2 milyon çiçeği ziyaret ederler!</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow">
              <p className="font-medium">🌈 Gökkuşağı, güneş ışığının yağmur damlacıklarından geçerken kırılmasıyla oluşur ve her zaman 7 renk içerir!</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow">
              <p className="font-medium">🌱 Bazı ağaçlar 3000 yıldan fazla yaşayabilir ve bir ağaç, hayatı boyunca yaklaşık 1 ton oksijen üretebilir!</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow">
              <p className="font-medium">🦉 Baykuşlar başlarını neredeyse 270 derece döndürebilirler, bu sayede arkalarını görebilirler!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}