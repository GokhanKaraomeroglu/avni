// app/avnibot/page.js
import Image from "next/image";
export default function AvniBotPage() {
    return (
      <div className="container mx-auto py-8 px-4">
        {/* Hero Bölümü */}
        <div className="bg-gradient-to-r from-red-400 to-orange-500 rounded-xl p-6 mb-8 text-white shadow-lg">
          <h1 className="text-4xl font-bold mb-4">AvniBot Projesi</h1>
          <p className="text-xl">Acil durumlarda yanınızda olan kişisel sağlık asistanı robotunuz!</p>
        </div>
          <Image
            src="/avni.jpg"
            alt="Avni"
            width={300}
            height={100}
            priority
          />
        {/* Proje Tanıtımı */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-red-600 border-b-4 border-red-600 pb-2 inline-block">AvniBot Nedir?</h2>
          <div className="bg-red-50 p-6 rounded-lg shadow-md mb-6">
            <p className="text-lg mb-4">
              AvniBot, acil durumlarda ilk yardım malzemeleri taşıyan, sağlık birimlerine acil durumu haber veren akıllı bir kişisel sağlık asistanı robottur. 
              Dört tekerlekli tasarımı ve üzerindeki kargo bölümü sayesinde, ihtiyaç anında hızlıca yanınızda olur ve gerekli malzemeleri sağlar.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="bg-white p-6 rounded-lg shadow border-l-4 border-red-500">
                <h3 className="text-xl font-semibold mb-3 text-red-700">Akıllı Asistan</h3>
                <p>AvniBot, yapay zeka teknolojisi sayesinde acil durumları anlayabilir, değerlendirebilir ve uygun müdahale yöntemlerini önerebilir.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow border-l-4 border-red-500">
                <h3 className="text-xl font-semibold mb-3 text-red-700">Hızlı Müdahale</h3>
                <p>Dört tekerlekli tasarımı sayesinde hızlı hareket eder ve en kısa sürede yardıma ihtiyacı olan kişiye ulaşır.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow border-l-4 border-red-500">
                <h3 className="text-xl font-semibold mb-3 text-red-700">Sürekli İletişim</h3>
                <p>Sağlık birimleriyle sürekli iletişim halinde kalarak, acil durum hakkında bilgi verir ve profesyonel yardımın en kısa sürede ulaşmasını sağlar.</p>
              </div>
            </div>
          </div>
        </div>
  
        {/* AvniBot'un Özellikleri */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-blue-600 border-b-4 border-blue-600 pb-2 inline-block">AvniBot&apos;un Özellikleri</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-blue-50 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4 text-blue-700">Teknik Özellikler</h3>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <span className="bg-blue-200 text-blue-800 font-semibold px-3 py-1 rounded-full mr-3">Hareket</span>
                  <span>4 tekerlekli, engel aşabilen hareket sistemi</span>
                </li>
                <li className="flex items-center">
                  <span className="bg-blue-200 text-blue-800 font-semibold px-3 py-1 rounded-full mr-3">Batarya</span>
                  <span>12 saat kesintisiz çalışma süresi</span>
                </li>
                <li className="flex items-center">
                  <span className="bg-blue-200 text-blue-800 font-semibold px-3 py-1 rounded-full mr-3">Kargo</span>
                  <span>5 kg taşıma kapasiteli, ısı korumalı kargo bölümü</span>
                </li>
                <li className="flex items-center">
                  <span className="bg-blue-200 text-blue-800 font-semibold px-3 py-1 rounded-full mr-3">Sensörler</span>
                  <span>Sıcaklık, nem, hareket ve ses sensörleri</span>
                </li>
                <li className="flex items-center">
                  <span className="bg-blue-200 text-blue-800 font-semibold px-3 py-1 rounded-full mr-3">İletişim</span>
                  <span>WiFi, Bluetooth, GSM bağlantı özellikleri</span>
                </li>
                <li className="flex items-center">
                  <span className="bg-blue-200 text-blue-800 font-semibold px-3 py-1 rounded-full mr-3">Navigasyon</span>
                  <span>GPS ve iç mekan haritalama sistemi</span>
                </li>
              </ul>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4 text-blue-700">Yapay Zeka Yetenekleri</h3>
              <div className="grid grid-cols-1 gap-4">
                <div className="bg-white p-4 rounded-lg shadow">
                  <h4 className="font-semibold text-blue-600 mb-2">Durum Tespiti</h4>
                  <p>Sensörleri ve kameraları ile çevreyi analiz ederek acil durumları tespit eder.</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow">
                  <h4 className="font-semibold text-blue-600 mb-2">Ses Tanıma</h4>
                  <p>Yardım çağrılarını ve acil durum seslerini tanıyabilir, sesli komutları anlayabilir.</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow">
                  <h4 className="font-semibold text-blue-600 mb-2">Doktor Asistanlığı</h4>
                  <p>Temel sağlık verilerini toplayarak uzaktan doktorlara aktarabilir ve talimatları uygulayabilir.</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow">
                  <h4 className="font-semibold text-blue-600 mb-2">Otonom Karar Verme</h4>
                  <p>Acil durumlarda en uygun hareket planını belirleyerek bağımsız kararlar alabilir.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
  
        {/* Kullanım Alanları */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-green-600 border-b-4 border-green-600 pb-2 inline-block">Kullanım Alanları</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-green-50 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3 text-green-700">Ev Ortamı</h3>
              <p className="mb-4">Evde yaşayan yaşlılar, kronik hastalığı olan kişiler veya yalnız yaşayan bireyler için ideal bir sağlık asistanıdır.</p>
              <div className="bg-green-100 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Örnek Durumlar:</h4>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Düşme durumlarında otomatik tespit ve yardım</li>
                  <li>İlaç hatırlatmaları ve takibi</li>
                  <li>Acil durumlarda aile üyelerine bildirim</li>
                  <li>Kronik hastalıklarda düzenli takip</li>
                </ul>
              </div>
            </div>
            <div className="bg-green-50 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3 text-green-700">Bakım Merkezleri</h3>
              <p className="mb-4">Yaşlı bakım evleri, rehabilitasyon merkezleri ve hastanelerde sağlık personeline yardımcı olur.</p>
              <div className="bg-green-100 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Sağladığı Faydalar:</h4>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Hasta takibi ve anında müdahale</li>
                  <li>İlaç ve medikal malzeme taşıma</li>
                  <li>Rutin kontrollerde yardımcı olma</li>
                  <li>Personel iş yükünü azaltma</li>
                </ul>
              </div>
            </div>
            <div className="bg-green-50 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3 text-green-700">Halka Açık Alanlar</h3>
              <p className="mb-4">Alışveriş merkezleri, stadyumlar, havaalanları gibi kalabalık alanlarda acil müdahale için kullanılabilir.</p>
              <div className="bg-green-100 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Kullanım Senaryoları:</h4>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Hızlı ilk yardım müdahalesi</li>
                  <li>Otomatik defibrilatör taşıma</li>
                  <li>Acil durum ekipleri gelene kadar destek</li>
                  <li>Kalabalık alanda acil durum yönetimi</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
  
        {/* Gelecek Planları */}
        <div>
          <h2 className="text-3xl font-bold mb-6 text-purple-600 border-b-4 border-purple-600 pb-2 inline-block">Gelecek Planları</h2>
          <div className="bg-purple-50 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4 text-purple-700">AvniBot Projemizin Geleceği</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded-lg shadow">
                <p className="font-medium">🔬 <span className="text-purple-600 font-semibold">Yapay Zeka Gelişimi:</span> AvniBot&apos;un yapay zeka yeteneğini geliştirerek daha karmaşık sağlık durumlarını tespit edebilmesini sağlayacağız.</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow">
                <p className="font-medium">🏥 <span className="text-purple-600 font-semibold">Hastane Entegrasyonu:</span> Hastane sistemleriyle tam entegrasyon sağlayarak, doktorların uzaktan hasta takibini kolaylaştıracağız.</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow">
                <p className="font-medium">🛠️ <span className="text-purple-600 font-semibold">Modüler Tasarım:</span> Farklı ihtiyaçlara yönelik değiştirilebilir modüller geliştirerek AvniBot&apos;u daha esnek hale getireceğiz.</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow">
                <p className="font-medium">📱 <span className="text-purple-600 font-semibold">Mobil Uygulama:</span> Kullanıcıların AvniBot&apos;u uzaktan kontrol edebileceği ve sağlık verilerini takip edebileceği kapsamlı bir mobil uygulama geliştireceğiz.</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow">
                <p className="font-medium">🌐 <span className="text-purple-600 font-semibold">AvniBot Ağı:</span> Tüm AvniBot&apos;ların birbiriyle iletişim kurabildiği ve acil durumlarda koordineli çalışabildiği bir ağ oluşturacağız.</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow">
                <p className="font-medium">👨‍👩‍👧‍👦 <span className="text-purple-600 font-semibold">Sosyal Etkileşim:</span> AvniBot&apos;a daha gelişmiş sosyal etkileşim yetenekleri ekleyerek, kullanıcılarıyla daha doğal bir iletişim kurmasını sağlayacağız.</p>
              </div>
            </div>
          </div>
        </div>
  
        {/* İletişim Bölümü */}
        <div className="mt-12 bg-gray-100 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-4 text-gray-700">AvniBot Projesine Katılın</h2>
          <p className="mb-4">AvniBot projesi hakkında daha fazla bilgi almak, işbirliği yapmak veya destek olmak isterseniz bizimle iletişime geçebilirsiniz.</p>
          <div className="flex flex-col md:flex-row gap-4">
            <div className="bg-white p-4 rounded-lg shadow flex-1">
              <h3 className="font-semibold text-lg mb-2">İletişim Bilgilerimiz</h3>
              <p>E-posta: karaomerogluzehra@gmail.com</p>
              <p>Telefon: Tabiki yok</p>
            </div>
            {/* <div className="bg-white p-4 rounded-lg shadow flex-1">
              <h3 className="font-semibold text-lg mb-2">Sosyal Medya</h3>
              <p>Instagram: @avnibot</p>
              <p>Twitter: @avnibot</p>
            </div> */}
          </div>
        </div>
      </div>
    );
  }