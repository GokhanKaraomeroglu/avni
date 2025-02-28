// app/hobilerim/page.js
export default function Hobilerim() {
  return (
    <div className="container mx-auto py-8 px-4">
      {/* Başlık Bölümü */}
      <div className="bg-gradient-to-r from-indigo-400 to-blue-500 rounded-xl p-6 mb-8 text-white shadow-lg">
        <h1 className="text-4xl font-bold mb-4">Hobilerim ve Sevdiğim Şeyler</h1>
        <p className="text-xl">Boş zamanlarımda neler yapıyorum? İşte beni mutlu eden aktiviteler!</p>
      </div>

      {/* Teknoloji Bölümü */}
      <div className="mb-12">
        <h2 className="text-3xl font-bold mb-6 text-indigo-600 border-b-4 border-indigo-600 pb-2 inline-block">Teknoloji Dünyam</h2>
        <div className="bg-indigo-50 p-6 rounded-lg shadow-md">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <div className="bg-indigo-200 p-3 rounded-lg mr-4">
                  <span className="text-3xl">💻</span>
                </div>
                <h3 className="text-2xl font-semibold text-indigo-700">Scratch ile Kodlama</h3>
              </div>
              <p className="mb-4">Scratch ile kendi oyunlarımı ve animasyonlarımı oluşturmayı çok seviyorum. Karakterleri hareket ettirmek ve onlara komutlar vermek çok eğlenceli!</p>
              <div className="bg-white p-4 rounded-lg shadow">
                <h4 className="font-semibold text-indigo-600 mb-3">Scratch Projelerim:</h4>
                <ul className="list-disc pl-5 space-y-2">
                  <li>"Uzayda Macera" - Uzay gemisiyle gezegenleri keşfediyorsun</li>
                  <li>"Matematik Oyunu" - Soruları doğru cevaplayıp puan kazanıyorsun</li>
                  <li>"Kedi ve Fare" - Kedimiz fareyi yakalamaya çalışıyor</li>
                  <li>"Dans Eden Robotlar" - Müzikle hareket eden robotlar tasarladım</li>
                </ul>
              </div>
            </div>
            <div>
              <div className="flex items-center mb-4">
                <div className="bg-indigo-200 p-3 rounded-lg mr-4">
                  <span className="text-3xl">🎨</span>
                </div>
                <h3 className="text-2xl font-semibold text-indigo-700">Canva ile Tasarım</h3>
              </div>
              <p className="mb-4">Canva'yı kullanarak harika tasarımlar yapmak en sevdiğim aktivitelerden biri! Özellikle renkli ve eğlenceli posterler tasarlamayı seviyorum.</p>
              <div className="bg-white p-4 rounded-lg shadow">
                <h4 className="font-semibold text-indigo-600 mb-3">Canva Çalışmalarım:</h4>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Sınıf arkadaşlarım için doğum günü kartları</li>
                  <li>Okul sunumları için renkli slaytlar</li>
                  <li>Odama asmak için motivasyon posterleri</li>
                  <li>Ailem için özel günlerde hediye kartları</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Spor Bölümü */}
      <div className="mb-12">
        <h2 className="text-3xl font-bold mb-6 text-blue-600 border-b-4 border-blue-600 pb-2 inline-block">Sporla Büyüyorum</h2>
        <div className="bg-blue-50 p-6 rounded-lg shadow-md">
          <div className="mb-6">
            <div className="flex items-center mb-4">
              <div className="bg-blue-200 p-3 rounded-lg mr-4">
                <span className="text-3xl">🏊‍♀️</span>
              </div>
              <h3 className="text-2xl font-semibold text-blue-700">Yüzmeyi Çok Seviyorum</h3>
            </div>
            <p className="mb-4">Yazın havuzda, kışın kapalı yüzme havuzunda yüzmek beni çok mutlu ediyor. Su içinde olmak stresimi alıyor ve kendimi özgür hissediyorum!</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-white p-4 rounded-lg shadow">
                <h4 className="font-semibold text-blue-600 mb-2">Yüzme Stillerim</h4>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Serbest stil - En hızlı gittiğim stil!</li>
                  <li>Sırtüstü - Gökyüzünü izleyerek yüzmek harika</li>
                  <li>Kurbağalama - Henüz öğrenme aşamasındayım</li>
                </ul>
              </div>
              <div className="bg-white p-4 rounded-lg shadow">
                <h4 className="font-semibold text-blue-600 mb-2">Antrenman Günlerim</h4>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Salı - Temel teknik çalışmaları</li>
                  <li>Perşembe - Hız ve dayanıklılık</li>
                  <li>Cumartesi - Eğlence ve serbest yüzme</li>
                </ul>
              </div>
              <div className="bg-white p-4 rounded-lg shadow">
                <h4 className="font-semibold text-blue-600 mb-2">Hedeflerim</h4>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Kelebeği öğrenmek istiyorum</li>
                  <li>Okullar arası yarışmalara katılmak</li>
                  <li>Bir gün olimpik havuzda yüzmek</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="mt-8">
            <div className="flex items-center mb-4">
              <div className="bg-blue-200 p-3 rounded-lg mr-4">
                <span className="text-3xl">🚴‍♀️</span>
              </div>
              <h3 className="text-2xl font-semibold text-blue-700">Bisiklet Sürmek</h3>
            </div>
            <p>Hafta sonları ailemle birlikte parkta bisiklet sürmek en sevdiğim aktivitelerden biri. Hızlı gitmek ve rüzgarı hissetmek çok eğlenceli!</p>
          </div>
        </div>
      </div>

      {/* Hikaye Yazma Bölümü */}
      <div className="mb-12">
        <h2 className="text-3xl font-bold mb-6 text-purple-600 border-b-4 border-purple-600 pb-2 inline-block">Hikaye Dünyam</h2>
        <div className="bg-purple-50 p-6 rounded-lg shadow-md">
          <div className="flex flex-col md:flex-row items-center mb-6">
            <div className="bg-purple-200 p-4 rounded-full w-32 h-32 flex items-center justify-center mb-4 md:mb-0 md:mr-8">
              <span className="text-5xl">📝</span>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-purple-700 mb-3">Küçük Bir Yazar</h3>
              <p className="mb-3">Kendi hikayelerimi yazmayı çok seviyorum. Hayal gücümü kullanarak fantastik dünyalar ve ilginç karakterler yaratıyorum.</p>
              <p>Günlük tutmak da en sevdiğim aktivitelerden biri. Her gün yaşadıklarımı ve hissettiklerimi renkli kalemlerimle yazıyorum.</p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h4 className="text-xl font-semibold text-purple-600 mb-4">Favori Hikaye Temalarım</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-purple-100 p-4 rounded-lg">
                <h5 className="font-semibold mb-3">Konuşan Hayvanlar</h5>
                <p>"Orman Okulu" adlı hikayemde, farklı hayvanların gittiği bir okulu anlatıyorum. Her hayvanın farklı bir yeteneği var ve hepsi birlikte büyük bir maceraya atılıyorlar!</p>
              </div>
              <div className="bg-purple-100 p-4 rounded-lg">
                <h5 className="font-semibold mb-3">Sihirli Dünyalar</h5>
                <p>"Bulutların Üstündeki Şehir" hikayemde, gökyüzünde yaşayan insanların hayatını ve yeryüzüne olan meraklarını anlatıyorum.</p>
              </div>
              <div className="bg-purple-100 p-4 rounded-lg">
                <h5 className="font-semibold mb-3">Uzay Maceraları</h5>
                <p>"Uzay Gezgini Mina" hikayemde, uzayda farklı gezegenleri keşfeden ve uzaylılarla arkadaş olan bir kız çocuğunu anlatıyorum.</p>
              </div>
              <div className="bg-purple-100 p-4 rounded-lg">
                <h5 className="font-semibold mb-3">Günlük Maceralar</h5>
                <p>"Sınıftaki Gizli Not" hikayemde, okuldaki arkadaşlarımla birlikte çözdüğümüz küçük gizemleri anlatıyorum.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Hayvanlar Bölümü */}
      <div className="mb-12">
        <h2 className="text-3xl font-bold mb-6 text-green-600 border-b-4 border-green-600 pb-2 inline-block">Hayvan Dostlarım</h2>
        <div className="bg-green-50 p-6 rounded-lg shadow-md">
          <div className="flex flex-col md:flex-row mb-8">
            <div className="md:w-1/3 mb-4 md:mb-0 md:mr-6">
              <div className="bg-green-200 p-6 rounded-lg shadow-inner text-center">
                <span className="text-6xl mb-4 inline-block">🐱</span>
                <h3 className="text-xl font-semibold text-green-700">Çakıl ile Vakit Geçirmek</h3>
                <p className="mt-2">Kedim Çakıl ile oynamak, onu sevmek ve fırçalamak en sevdiğim aktivitelerden biri.</p>
              </div>
            </div>
            <div className="md:w-2/3">
              <h3 className="text-2xl font-semibold text-green-700 mb-4">Hayvanları Keşfetmek</h3>
              <p className="mb-4">Hayvanlar hakkında her şeyi öğrenmek istiyorum! Belgeseller izliyor, kitaplar okuyor ve hayvanat bahçesini ziyaret ediyorum.</p>
              <div className="bg-white p-4 rounded-lg shadow">
                <h4 className="font-semibold text-green-600 mb-3">Hayvanlarla İlgili Aktivitelerim:</h4>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Hafta sonları barınak ziyaretleri yapıyorum ve oradaki köpekleri seviyorum.</li>
                  <li>Her ay National Geographic Kids dergisini okuyorum.</li>
                  <li>Farklı türdeki kuşları gözlemlemek için parkta dürbünle kuş gözlemi yapıyorum.</li>
                  <li>Sokak kedileri için mahallemizde mama ve su kapları yerleştiriyorum.</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-green-100 p-5 rounded-lg shadow-md">
            <h4 className="text-xl font-semibold text-green-700 mb-3 text-center">Öğrendiğim İlginç Bilgiler</h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-white p-3 rounded-lg shadow">
                <p className="font-medium">🐬 Yunuslar uyurken beyinlerinin yalnızca bir yarısını kapatır, diğer yarısı uyanık kalır!</p>
              </div>
              <div className="bg-white p-3 rounded-lg shadow">
                <p className="font-medium">🦒 Zürafaların dilleri siyahtır ve uzunlukları 50 cm'ye kadar ulaşabilir!</p>
              </div>
              <div className="bg-white p-3 rounded-lg shadow">
                <p className="font-medium">🐘 Filler, geniş kulaklarını sadece duymak için değil, serinlemek için de kullanırlar!</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Müzik Bölümü */}
      <div className="mb-12">
        <h2 className="text-3xl font-bold mb-6 text-pink-600 border-b-4 border-pink-600 pb-2 inline-block">Müzik Dünyam</h2>
        <div className="bg-pink-50 p-6 rounded-lg shadow-md">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <div className="bg-pink-200 p-3 rounded-lg mr-4">
                  <span className="text-3xl">🎵</span>
                </div>
                <h3 className="text-2xl font-semibold text-pink-700">Müzik Dinlemek</h3>
              </div>
              <p className="mb-4">Müzik dinlemek ruh halimi değiştiriyor ve bana enerji veriyor. Dans etmek ve şarkı söylemek en sevdiğim şeylerden!</p>
              <div className="bg-white p-4 rounded-lg shadow">
                <h4 className="font-semibold text-pink-600 mb-3">Favori Şarkılarım:</h4>
                <ul className="list-disc pl-5 space-y-2">
                  <li>"Güzel Günler" - Neşeli ve umut dolu olduğu için seviyorum</li>
                  <li>"Gökkuşağı" - Dans etmeyi sevdiğim bir şarkı</li>
                  <li>"Okul Marşı" - Okulda hep birlikte söylediğimiz şarkı</li>
                  <li>"Arkadaşlık" - En iyi arkadaşımla beraber söylediğimiz şarkı</li>
                </ul>
              </div>
            </div>
            <div>
              <div className="flex items-center mb-4">
                <div className="bg-pink-200 p-3 rounded-lg mr-4">
                  <span className="text-3xl">🎸</span>
                </div>
                <h3 className="text-2xl font-semibold text-pink-700">Gitar Dersleri</h3>
              </div>
              <p className="mb-4">Cumartesi günleri gitar derslerine gidiyorum. Henüz yeni başladım ama çok seviyorum! Parmaklarım bazen acısa da, güzel melodiler çıkarmak beni mutlu ediyor.</p>
              <div className="bg-white p-4 rounded-lg shadow">
                <h4 className="font-semibold text-pink-600 mb-3">Öğrendiğim Şarkılar:</h4>
                <ul className="list-disc pl-5 space-y-2">
                  <li>"Do Re Mi" - İlk öğrendiğim şarkı</li>
                  <li>"Minik Serçe" - En sevdiğim çocuk şarkısı</li>
                  <li>"Neşeli Günler" - Ailemle birlikte söylüyoruz</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Kitap Okuma Bölümü */}
      <div>
        <h2 className="text-3xl font-bold mb-6 text-yellow-600 border-b-4 border-yellow-600 pb-2 inline-block">Kitap Dünyam</h2>
        <div className="bg-yellow-50 p-6 rounded-lg shadow-md">
          <div className="flex flex-col md:flex-row items-start mb-8">
            <div className="bg-yellow-200 p-6 rounded-full w-32 h-32 flex items-center justify-center flex-shrink-0 mb-6 md:mb-0 md:mr-8">
              <span className="text-5xl">📚</span>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-yellow-700 mb-3">Kitaplarla Dolu Bir Dünya</h3>
              <p className="mb-4">Her gün en az 40 dakika kitap okumayı çok seviyorum. Kitaplar beni farklı dünyalara götürüyor ve hayal gücümü geliştiriyor.</p>
              <p>Odamda küçük bir kitaplığım var ve her hafta okulun kütüphanesinden yeni kitaplar ödünç alıyorum.</p>
            </div>
          </div>

          <h4 className="text-xl font-semibold text-yellow-600 mb-4">Kitap Okuma Köşem</h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <div className="bg-white p-4 rounded-lg shadow">
              <h5 className="font-semibold text-yellow-600 mb-2">Favori Türlerim</h5>
              <ul className="list-disc pl-5 space-y-1">
                <li>Macera kitapları</li>
                <li>Bilim kurgu hikayeleri</li>
                <li>Hayvan belgeselleri</li>
                <li>Çocuk klasikleri</li>
                <li>Resimli ansiklopediler</li>
              </ul>
            </div>
            <div className="bg-white p-4 rounded-lg shadow">
              <h5 className="font-semibold text-yellow-600 mb-2">En Sevdiğim Yazarlar</h5>
              <ul className="list-disc pl-5 space-y-1">
                <li>Gülten Dayıoğlu</li>
                <li>Aytül Akal</li>
                <li>Muzaffer İzgü</li>
                <li>Jules Verne</li>
                <li>Roald Dahl</li>
              </ul>
            </div>
            <div className="bg-white p-4 rounded-lg shadow">
              <h5 className="font-semibold text-yellow-600 mb-2">Okuma Alışkanlıklarım</h5>
              <ul className="list-disc pl-5 space-y-1">
                <li>Her akşam yatmadan önce</li>
                <li>Hafta sonları kahvaltıdan sonra</li>
                <li>Yağmurlu günlerde pencerenin yanında</li>
                <li>Tatillerde bahçede</li>
              </ul>
            </div>
          </div>

          <div className="bg-yellow-100 p-5 rounded-lg shadow">
            <h4 className="text-xl font-semibold text-yellow-700 mb-4 text-center">Son Okuduğum Kitaplar</h4>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="bg-white p-4 rounded-lg shadow text-center">
                <span className="text-3xl mb-2 inline-block">📘</span>
                <h5 className="font-semibold text-yellow-600 mb-1">Küçük Prens</h5>
                <p className="text-sm">Antoine de Saint-Exupéry</p>
              </div>
              {/* <div className="bg-white p-4 rounded-lg shadow text-center">
                <span className="text-3xl mb-2 inline-block">📕</span>
                <h5 className="font-semibold text-yellow-600 mb-1">Ormandaki Dedektif</h5>
                <p className="text-sm">Mavisel Yener</p>
              </div> */}
              <div className="bg-white p-4 rounded-lg shadow text-center">
                <span className="text-3xl mb-2 inline-block">📗</span>
                <h5 className="font-semibold text-yellow-600 mb-1">Şeker Portakalı</h5>
                <p className="text-sm">José Mauro de Vasconcelos</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow text-center">
                <span className="text-3xl mb-2 inline-block">📙</span>
                <h5 className="font-semibold text-yellow-600 mb-1">Hayvanlar Atlası</h5>
                <p className="text-sm">TÜBİTAK Yayınları</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}