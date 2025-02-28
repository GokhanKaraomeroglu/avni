// export default function Blog() {
//     return (
//       <div className="container mx-auto py-8">
//         <h1 className="text-3xl font-bold mb-6">Blog</h1>
//         <p>Blog yazmaya başlayacağım bekleyin...</p>
//         <p>En yeni hikayeler, anlatımlar, sunumlar burada olacak.</p>
//       </div>
//     );
//   }
// app/blog/page.js
export default function BlogPage() {
  return (
    <div className="container mx-auto py-8 px-4">
      {/* Hero Bölümü */}
      <div className="bg-gradient-to-r from-pink-400 to-indigo-500 rounded-xl p-6 mb-8 text-white shadow-lg">
        <h1 className="text-4xl font-bold mb-4">Blog Sayfam</h1>
        <p className="text-xl">Düşüncelerimi, keşiflerimi ve öğrendiğim bilgileri paylaştığım köşe!</p>
      </div>

      {/* Blog Girişleri */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-6 text-indigo-600 border-b-4 border-indigo-600 pb-2 inline-block">En Son Yazılarım</h2>
        
        {/* 1. Blog Yazısı - Teknoloji ve Çocuklar */}
        <div className="mb-12 bg-white rounded-lg shadow-md overflow-hidden">
          <div className="bg-indigo-50 p-6">
            <span className="bg-indigo-200 text-indigo-800 text-sm font-semibold px-3 py-1 rounded-full">Teknoloji</span>
            <h3 className="text-2xl font-bold mt-3 mb-2 text-indigo-700">Teknoloji ve Çocuklar: Dengeli Bir Yaklaşım</h3>
            <p className="text-gray-500 mb-4">Yayınlanma: 25 Şubat 2025</p>
            
            <div className="prose max-w-none">
              <p className="mb-4">
                Günümüz dünyasında çocuklar teknolojiyle iç içe büyüyor. Peki teknolojinin çocuklarımız üzerindeki etkilerini nasıl dengeleyebiliriz?
              </p>

              <h4 className="text-xl font-semibold mt-6 mb-3 text-indigo-600">Teknolojinin Faydaları</h4>
              <p className="mb-4">
                Teknoloji, çocuklarımıza birçok fayda sağlayabilir. Eğitim uygulamaları, interaktif oyunlar ve çevrimiçi kaynaklar, çocukların öğrenmesini ve gelişimini destekleyebilir. Özellikle pandemi döneminde, teknoloji sayesinde eğitimlerine devam edebildiler.
              </p>

              <div className="bg-blue-50 p-4 rounded-lg my-4">
                <h5 className="font-semibold text-blue-700 mb-2">Teknolojinin Olumlu Etkileri:</h5>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Problem çözme becerilerini geliştirir</li>
                  <li>Yaratıcılığı teşvik eder</li>
                  <li>Bilgiye hızlı erişim sağlar</li>
                  <li>Dijital okuryazarlığı artırır</li>
                  <li>Eğlenceli öğrenme ortamı yaratır</li>
                </ul>
              </div>

              <h4 className="text-xl font-semibold mt-6 mb-3 text-indigo-600">Dengeyi Sağlamak</h4>
              <p className="mb-4">
                Teknolojinin faydalarından yararlanırken, ekran süresini sınırlamak ve çocukların fiziksel aktivitelere, sosyal etkileşimlere ve kitap okuma gibi geleneksel öğrenme yöntemlerine de zaman ayırmasını sağlamak önemlidir.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
                <div className="bg-green-50 p-4 rounded-lg">
                  <h5 className="font-semibold text-green-700 mb-2">Teknolojisiz Aktiviteler</h5>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Açık havada oyun oynamak</li>
                    <li>Kitap okumak</li>
                    <li>Müzik aleti çalmak</li>
                    <li>Resim ve el işleri yapmak</li>
                    <li>Spor yapmak</li>
                  </ul>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h5 className="font-semibold text-yellow-700 mb-2">Ekran Süresi İpuçları</h5>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Yaşa uygun ekran süresi belirleyin</li>
                    <li>Teknolojisiz zaman dilimleri oluşturun</li>
                    <li>Aile yemeklerinde ekran kullanmayın</li>
                    <li>Yatmadan önce ekranları kapatın</li>
                    <li>Çocuklarla birlikte çevrimiçi içerikleri inceleyin</li>
                  </ul>
                </div>
              </div>

              <h4 className="text-xl font-semibold mt-6 mb-3 text-indigo-600">Sonuç</h4>
              <p>
                Teknoloji, doğru kullanıldığında çocuklarımızın gelişimini destekleyen harika bir araçtır. Önemli olan, teknoloji kullanımında doğru dengeyi sağlamak ve çocuklarımıza dijital dünyada bilinçli ve güvenli bir şekilde gezinmeyi öğretmektir.
              </p>

              <div className="mt-6 text-right">
                <span className="inline-block bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm">
                  #Teknoloji #Çocuklar #DijitalDenge
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* 2. Blog Yazısı - Hayvanları Sevelim */}
        <div className="mb-12 bg-white rounded-lg shadow-md overflow-hidden">
          <div className="bg-amber-50 p-6">
            <span className="bg-amber-200 text-amber-800 text-sm font-semibold px-3 py-1 rounded-full">Hayvan Dostlarımız</span>
            <h3 className="text-2xl font-bold mt-3 mb-2 text-amber-700">Hayvanları Sevelim, Koruyalım: Minik Dostlarımızın Önemi</h3>
            <p className="text-gray-500 mb-4">Yayınlanma: 20 Şubat 2025</p>
            
            <div className="prose max-w-none">
              <p className="mb-4">
                Hayvanlar, dünyamızın vazgeçilmez bir parçasıdır. Onları sevmek ve korumak, sadece onların değil, bizim ve gezegenimizin geleceği için de büyük önem taşır.
              </p>

              <h4 className="text-xl font-semibold mt-6 mb-3 text-amber-600">Hayvanların Hayatımızdaki Yeri</h4>
              <p className="mb-4">
                Hayvanlar, bize sadece sevgi ve arkadaşlık sunmakla kalmaz, aynı zamanda doğanın dengesi için de hayati bir rol oynarlar. Evcil hayvanlar, bize koşulsuz sevgi ve arkadaşlık sunarken, yaban hayatı da ekosistemin sağlıklı işleyişi için gereklidir.
              </p>

              <div className="bg-orange-50 p-4 rounded-lg my-4">
                <h5 className="font-semibold text-orange-700 mb-2">Evcil Hayvan Beslemenin Faydaları:</h5>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Sorumluluk duygusunu geliştirir</li>
                  <li>Empati yeteneğini artırır</li>
                  <li>Stresi azaltır ve mutluluk hormonu salgılatır</li>
                  <li>Sosyal becerileri destekler</li>
                  <li>Fiziksel aktiviteyi teşvik eder (yürüyüşler, oyunlar)</li>
                </ul>
              </div>

              <h4 className="text-xl font-semibold mt-6 mb-3 text-amber-600">Hayvanları Korumak İçin Neler Yapabiliriz?</h4>
              <p className="mb-4">
                Hayvanları korumak ve onlara daha iyi bir yaşam sunmak için hepimizin yapabileceği basit ama etkili yollar vardır. Küçük adımlar büyük farklar yaratabilir.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
                <div className="bg-green-50 p-4 rounded-lg">
                  <h5 className="font-semibold text-green-700 mb-2">Sokak Hayvanları İçin</h5>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Kapınızın önüne su ve mama kabı koyun</li>
                    <li>Soğuk havalarda basit barınaklar yapın</li>
                    <li>Kısırlaştırma programlarını destekleyin</li>
                    <li>Hayvan barınaklarına bağış yapın</li>
                    <li>Yerel yönetimlere hayvan hakları için başvurun</li>
                  </ul>
                </div>
                <div className="bg-teal-50 p-4 rounded-lg">
                  <h5 className="font-semibold text-teal-700 mb-2">Yaban Hayatı İçin</h5>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Çöplerinizi uygun şekilde atın</li>
                    <li>Plastik kullanımını azaltın</li>
                    <li>Doğal yaşam alanlarını koruyun</li>
                    <li>Vahşi hayvanları uzaktan izleyin, müdahale etmeyin</li>
                    <li>Yaban hayatı koruma projelerini destekleyin</li>
                  </ul>
                </div>
              </div>

              <h4 className="text-xl font-semibold mt-6 mb-3 text-amber-600">Çocuklara Hayvan Sevgisini Aşılamak</h4>
              <p className="mb-4">
                Hayvan sevgisi çocuklukta başlar. Çocuklarımıza küçük yaşlardan itibaren hayvanlara saygı duymayı ve onları korumayı öğretirsek, daha duyarlı bir nesil yetiştirebiliriz.
              </p>

              <div className="bg-purple-50 p-4 rounded-lg my-4">
                <h5 className="font-semibold text-purple-700 mb-2">Çocuklara Hayvan Sevgisi Kazandırma Yolları:</h5>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Hayvanlarla ilgili kitaplar okuyun</li>
                  <li>Doğa belgeselleri izleyin</li>
                  <li>Hayvanat bahçesi ve doğa parkları ziyaret edin</li>
                  <li>Birlikte sokak hayvanlarına yardım edin</li>
                  <li>Hayvan barınaklarını ziyaret edin</li>
                </ul>
              </div>

              <h4 className="text-xl font-semibold mt-6 mb-3 text-amber-600">Sonuç</h4>
              <p>
                Hayvanları sevmek ve korumak, sadece onlar için değil, kendimiz ve gezegenimiz için de yapabileceğimiz en güzel şeylerden biridir. Unutmayalım ki, dünya sadece bize ait değil, tüm canlılarla paylaştığımız ortak evimizdir.
              </p>

              <div className="mt-6 text-right">
                <span className="inline-block bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-sm">
                  #HayvanSevgisi #HayvanlarıKoruyalım #DoğaSevgisi
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Daha Fazla Blog İçeriği */}
      <div className="mb-12">
        <h2 className="text-3xl font-bold mb-6 text-pink-600 border-b-4 border-pink-600 pb-2 inline-block">Kategoriler</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-blue-100 p-4 rounded-lg shadow-md text-center">
            <h3 className="text-lg font-semibold text-blue-700">Teknoloji</h3>
            <p className="text-sm text-gray-600 mt-1">12 yazı</p>
          </div>
          <div className="bg-green-100 p-4 rounded-lg shadow-md text-center">
            <h3 className="text-lg font-semibold text-green-700">Eğitim</h3>
            <p className="text-sm text-gray-600 mt-1">8 yazı</p>
          </div>
          <div className="bg-amber-100 p-4 rounded-lg shadow-md text-center">
            <h3 className="text-lg font-semibold text-amber-700">Hayvanlar</h3>
            <p className="text-sm text-gray-600 mt-1">15 yazı</p>
          </div>
          <div className="bg-purple-100 p-4 rounded-lg shadow-md text-center">
            <h3 className="text-lg font-semibold text-purple-700">Hobiler</h3>
            <p className="text-sm text-gray-600 mt-1">10 yazı</p>
          </div>
        </div>
      </div>

      {/* Bültene Abone Olma */}
      <div className="bg-gray-100 p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-4 text-gray-700">Blog Bültenime Abone Ol</h2>
        <p className="mb-4">Yeni yazılarımdan haberdar olmak için e-posta adresini bırak. Spam yok, sadece yeni içerikler!</p>
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-grow">
            <input type="email" placeholder="E-posta adresin" className="w-full p-3 rounded-lg border-2 border-gray-300 focus:border-blue-500 outline-none" />
          </div>
          <button className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-bold py-3 px-6 rounded-lg shadow hover:opacity-90 transition">
            Abone Ol
          </button>
        </div>
      </div>
    </div>
  );
}