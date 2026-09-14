import type { Guide } from "./site";

export const leadGuides: Guide[] = [
  {
    slug: "vekaletle-gayrimenkul-satisi",
    eyebrow: "Vekâletle satış",
    title: "Vekâletle gayrimenkul satışı: yurt dışından nasıl hazırlanılır?",
    description: "Türkiye dışında yaşayan maliklerin vekâlet, belge ve yetki kapsamını satıştan önce nasıl hazırlayabileceğine dair pratik ön kontrol.",
    sections: [
      {
        title: "Ön değerlendirme için vekâlet gerekmez",
        text: "İlk inceleme; konum, taşınmaz türü, yaklaşık m², tapu bilgisi ve fiyat beklentisiyle uzaktan başlayabilir. Vekâlet ancak işlem ilerlediğinde ve temsil yoluyla resmi işlem yapılacaksa önem kazanır.",
      },
      {
        title: "Yetkinin satış işlemini açık biçimde kapsaması önemlidir",
        text: "Yurt dışında düzenlenen vekâletnamelerin Türkiye’de tapu işleminde kullanılabilmesi için biçim, yetki kapsamı, onay ve gerektiğinde tercüme şartları somut belgeye göre değişebilir. İşleme geçmeden önce vekâletin ilgili tapu işlemi için kullanılabilir olduğunun doğrulanması gerekir.",
      },
      {
        title: "Vekâleti hazırlamadan önce satış yolu netleşsin",
        text: "Önce taşınmazın yatırım açısından uygun olup olmadığını incelemek, gereksiz belge hazırlığını azaltır. Dosya uygunsa hangi resmi adımların gerektiği ayrıca planlanabilir.",
      },
      {
        title: "Biz hukuki temsil değil, satın alma uygunluğu inceliyoruz",
        text: "Emlak Alırım bir hukuk bürosu değildir. Vekâlet metni veya resmi işlem için bağlayıcı hukuki görüş vermeyiz; ancak taşınmazın satın alma kriterlerimize uyup uymadığını ve dosyanın işlem yolunun net olup olmadığını ön değerlendirebiliriz.",
      },
    ],
    faq: [
      ["Almanya’dan veya başka bir ülkeden başvurabilir miyim?", "Evet. İlk değerlendirme tamamen uzaktan başlayabilir."],
      ["Vekâleti başvuru sırasında göndermem gerekir mi?", "Hayır. İlk temas için taşınmaz bilgileri yeterlidir. Dosya ilerlerse gerekli resmi belgeler ayrıca istenir."],
      ["Yurt dışında düzenlenen her vekâlet geçerli midir?", "Hayır. Resmi işlemde kullanılabilirlik belgenin düzenlendiği yere, biçimine ve yetki kapsamına göre ayrıca kontrol edilmelidir."],
    ],
  },
  {
    slug: "yurtdisindaki-mirascilar-icin-gayrimenkul-satisi",
    eyebrow: "Yurt dışındaki mirasçı",
    title: "Yurt dışındaki mirasçılar Türkiye’deki gayrimenkulü satmak isterse",
    description: "Miras intikali, ortak karar ve uzaktan süreç açısından satışa yakın dosyalarda hangi bilgilerin önce netleşmesi gerektiği.",
    sections: [
      {
        title: "İntikal tamamlanmamış olsa da ön değerlendirme başlayabilir",
        text: "Taşınmazın konumu, türü, mevcut tapu bilgisi ve bilinen mirasçı yapısı paylaşılırsa yatırım açısından ilk görüş yapılabilir. Bağlayıcı satış aşamasında resmi malik yapısının netleşmiş olması gerekir.",
      },
      {
        title: "Asıl konu mirasçı sayısı değil, karar mekanizmasıdır",
        text: "Birden fazla mirasçı bulunması tek başına engel değildir. Önemli olan, satış iradesinin kimlerde olduğu, payların nasıl dağıldığı ve satış için gerekli ortak kararın oluşup oluşamayacağıdır.",
      },
      {
        title: "Yurt dışındaki mirasçılar için süreç uzaktan organize edilebilir",
        text: "İlk bilgi paylaşımı, belge kontrolü ve teklif uygunluğu uzaktan ilerleyebilir. Resmi işlem aşamasında kişinin bizzat katılımı veya usulüne uygun temsil yöntemi gerekebilir.",
      },
      {
        title: "Anlaşmazlık varsa önce satılabilirlik yolunu anlamak gerekir",
        text: "Mirasçılar arasında aktif uyuşmazlık varsa yalnız fiyat konuşmak yeterli değildir. Dosyanın satışa hangi şartlarla gelebileceği net değilse, hukuki süreç sonuçlanana kadar satın alma değerlendirmesi bekletilebilir.",
      },
    ],
    faq: [
      ["Mirasçılardan biri yurt dışında ise başvuru yapılabilir mi?", "Evet. İlk değerlendirme için tüm mirasçıların Türkiye’de bulunması gerekmez."],
      ["İntikal yapılmadan kesin teklif verilir mi?", "Genellikle hayır. Ön görüş yapılabilir; bağlayıcı işlem için resmi mülkiyet ve satış yetkisi netleşmelidir."],
      ["Mirasçılar arasında tam uzlaşma yoksa yine de başvurabilir miyim?", "Evet, mevcut durumu açıkça paylaşabilirsiniz. Ancak satın alma sürecinin ilerlemesi satış kararının hukuken uygulanabilir hale gelmesine bağlıdır."],
    ],
  },
  {
    slug: "tapu-serh-haciz-dava-olan-gayrimenkul-satisi",
    eyebrow: "Karmaşık tapu durumu",
    title: "Tapuda şerh, haciz, tedbir veya dava olan gayrimenkul satılabilir mi?",
    description: "Hukuki kayıt bulunan taşınmazlarda hangi dosyaların yatırım açısından ön incelemeye uygun olabileceğini anlatan satış odaklı çerçeve.",
    sections: [
      {
        title: "Her kayıt satışa aynı etkiyi yapmaz",
        text: "Tapudaki şerh, haciz, ipotek, ihtiyati tedbir veya devam eden dava farklı hukuki sonuçlar doğurabilir. Bu nedenle yalnız kaydın varlığına bakarak 'satılır' veya 'satılamaz' demek doğru değildir.",
      },
      {
        title: "Bizim için kritik soru: devir yolu net mi?",
        text: "Bir satın alma dosyasının ilerleyebilmesi için mülkiyetin ve devir imkanının resmi olarak netleştirilebilir olması gerekir. Satışa engel kayıt bulunuyorsa bunun nasıl kaldırılacağı veya işlemin hangi şartta yapılabileceği somut belge üzerinden görülmelidir.",
      },
      {
        title: "Aktif aile veya ortaklık kavgasını çözmüyoruz",
        text: "Emlak Alırım uyuşmazlık çözümü, dava takibi veya hukuki temsil hizmeti vermez. Ancak hukuki yol haritası netleşmiş ve gerçek satış niyeti bulunan taşınmazları yatırım kriterleri açısından inceleyebiliriz.",
      },
      {
        title: "Başvuruda hassas dosyanın tamamını göndermeniz gerekmez",
        text: "İlk aşamada taşınmazın konumu, türü, malik yapısı ve tapudaki sorunun türünü kısaca belirtmeniz yeterlidir. Dosya uygun görünürse gerekli belgeler güvenli biçimde ayrıca talep edilir.",
      },
    ],
    faq: [
      ["Dava devam ederken ön değerlendirme yapılabilir mi?", "Evet, genel ön inceleme yapılabilir. Ancak devir hukuken mümkün değilse satın alma süreci ilerletilemez."],
      ["Haciz veya ipotek varsa otomatik olarak elenir mi?", "Hayır. Kaydın türü, tutarı, sırası ve satışta nasıl ele alınabileceği somut dosyada ayrıca değerlendirilmelidir."],
      ["Siz avukat temin ediyor musunuz?", "Sitemiz hukuki danışmanlık veya dava takibi sunmaz. Gerekli hukuki inceleme bağımsız yetkili uzmanlarla yürütülmelidir."],
    ],
  },
];
