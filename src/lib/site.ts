export const site = {
  name: "Emlak Alırım",
  url: "https://emlakalirim.com",
  description: "İstanbul'da arsa, ev, villa, bina ve seçili gayrimenkuller için gizli ve bağlayıcı olmayan yatırım odaklı ön değerlendirme.",
};

export type Region = {
  slug: string;
  name: string;
  title: string;
  description: string;
  places: string[];
  localNote: string;
  focusPoints: string[];
  sellerFit: string[];
};

export const regions: Region[] = [
  {
    slug: "beykoz",
    name: "Beykoz",
    title: "Beykoz'da Gayrimenkul ve Arsa Ön Değerlendirmesi",
    description: "Beykoz'da arsa, eski yapı, villa ve güçlü arsa payına sahip taşınmazları yatırım kriterleri açısından değerlendiriyoruz.",
    places: ["Riva", "Ortaçeşme", "Öğümce", "Paşamandıra"],
    localNote: "Beykoz tek bir pazar değildir. Boğaz hattı, merkez mahalleler ve eski köy dokusundaki parsellerin fiyatlama mantığı, imar riski ve alıcı profili birbirinden farklıdır.",
    focusPoints: ["Arsa payı ve parsel niteliği", "İmar / koruma / plan koşulları", "Villa ve müstakil yapı", "Eski bina ve dönüşüm ihtimali"],
    sellerFit: ["Açık ilan vermeden görüşmek isteyen malik", "Miras veya hisseli mülk", "Eski bina / boş yapı", "Büyük parsel veya villa"],
  },
  {
    slug: "riva",
    name: "Riva",
    title: "Riva Arsa ve Gayrimenkul Değerlendirmesi",
    description: "Riva'da arsa, villa ve müstakil taşınmazlarda tapu, imar, erişim ve parsel niteliğini birlikte inceliyoruz.",
    places: ["Riva", "Beykoz"],
    localNote: "Riva'da doğa, kıyı ve düşük yoğunluklu yaşam algısı güçlü olsa da her parsel aynı geliştirme kabiliyetine sahip değildir. Tapu niteliği, yol bağlantısı ve plan kararları fiyat kadar önemlidir.",
    focusPoints: ["Müstakil tapu ve hisselilik", "Yola cephe / erişim", "İmar ve yapılaşma koşulları", "Villa / müstakil kullanım"],
    sellerFit: ["Arsa sahibi", "Villa veya müstakil ev sahibi", "Uzun süredir elde tutulan parsel", "Yurt dışında yaşayan malik"],
  },
  {
    slug: "ortacesme",
    name: "Ortaçeşme",
    title: "Ortaçeşme Gayrimenkul Ön Değerlendirmesi",
    description: "Ortaçeşme'de eski yapı, arsa payı ve dönüşüm potansiyeli bulunan gayrimenkulleri seçici biçimde değerlendiriyoruz.",
    places: ["Ortaçeşme", "Beykoz Merkez"],
    localNote: "Ortaçeşme'de yalnızca dairenin iç durumu değil, binanın yaşı, arsa payı, parsel yapısı ve olası yenileme senaryosu da toplam değeri etkileyebilir.",
    focusPoints: ["Arsa payı", "Bina yaşı ve yapı durumu", "Parsel / malik yapısı", "Yenileme ve dönüşüm ihtimali"],
    sellerFit: ["Eski binada daire sahibi", "Komple bina maliki", "Miras kalan konut", "Boş veya tadilat isteyen mülk"],
  },
  {
    slug: "ogumce",
    name: "Öğümce",
    title: "Öğümce Arsa ve Müstakil Gayrimenkul",
    description: "Öğümce'de büyük parsel, arsa ve müstakil yaşam odaklı taşınmazları yatırım açısından inceliyoruz.",
    places: ["Öğümce", "Beykoz"],
    localNote: "Öğümce gibi kırsal karakteri güçlü alanlarda metrekare fiyatından önce parselin hukuki niteliği, ulaşımı, çevresi ve gerçek kullanım kabiliyeti değerlendirilmelidir.",
    focusPoints: ["Büyük parsel", "Yol ve erişim", "Tapu niteliği", "Müstakil yaşam potansiyeli"],
    sellerFit: ["Arsa / tarla sahibi", "Aileden kalan arazi", "Hisseli parsel", "Uzun vadeli elde tutulan mülk"],
  },
  {
    slug: "pasamandira",
    name: "Paşamandıra",
    title: "Paşamandıra Arsa Ön Değerlendirmesi",
    description: "Paşamandıra ve çevresinde arsa ve kırsal nitelikli gayrimenkullerde tapu ve imar yapısını önceliklendiriyoruz.",
    places: ["Paşamandıra", "Beykoz"],
    localNote: "Paşamandıra'da arazi değerlendirmesi yaparken yüzölçümü tek başına yeterli değildir. Parselin şekli, yol durumu, hisselilik ve plan kararları birlikte okunmalıdır.",
    focusPoints: ["Parsel geometrisi", "Hisseli / müstakil tapu", "Yol bağlantısı", "Plan ve imar durumu"],
    sellerFit: ["Arazi sahibi", "Miras kalan parsel", "Birden fazla hissedarlı mülk", "Satış seçeneklerini karşılaştırmak isteyen malik"],
  },
  {
    slug: "sile",
    name: "Şile",
    title: "Şile'de Arsa, Ev ve Villa Değerlendirmesi",
    description: "Şile, Ağva ve çevresinde arsa, ikinci konut ve müstakil taşınmazları değerlendiriyoruz.",
    places: ["Şile", "Ağva", "Ahmetli", "Kabakoz"],
    localNote: "Şile'de kıyıya yakınlık kadar ulaşım, parsel niteliği, yapı ruhsatı ve yıl boyu kullanılabilirlik de önemlidir. Turistik algı ile gerçek işlem kabiliyeti her zaman aynı olmayabilir.",
    focusPoints: ["Arsa ve tarla", "Villa / yazlık", "Kıyı ve ulaşım", "İmar / yapı ruhsatı"],
    sellerFit: ["İkinci konut sahibi", "Arsa / tarla sahibi", "Boş villa veya yazlık", "Yurt dışındaki malik"],
  },
  {
    slug: "agva",
    name: "Ağva",
    title: "Ağva Arsa, Villa ve Yazlık Ön Değerlendirmesi",
    description: "Ağva'da arsa, villa, yazlık ve müstakil taşınmazları konum, erişim ve hukuki durumuyla birlikte inceliyoruz.",
    places: ["Ağva", "Şile"],
    localNote: "Ağva'da turistik talep önemli olsa da yıl boyu erişim, yapı niteliği ve tapu/imar durumu satış kabiliyetini ciddi biçimde etkileyebilir.",
    focusPoints: ["Villa / yazlık", "Arsa ve bahçe", "Turistik kullanım", "Tapu ve imar"],
    sellerFit: ["Yazlığını satmayı düşünen malik", "Arsa sahibi", "Kullanılmayan müstakil mülk", "Uzaktan satış yapmak isteyen malik"],
  },
  {
    slug: "omerli",
    name: "Ömerli",
    title: "Ömerli Arsa ve Villa Değerlendirmesi",
    description: "Ömerli'de villa, büyük parsel ve müstakil taşınmazları lokasyon ve hukuki durumuyla birlikte inceliyoruz.",
    places: ["Ömerli", "Çekmeköy"],
    localNote: "Ömerli'de büyük parsel ve düşük yoğunluklu yaşam avantajı bulunabilir; buna karşılık havza, plan, erişim ve yapılaşma koşulları dosya bazında dikkatle kontrol edilmelidir.",
    focusPoints: ["Villa ve müstakil ev", "Büyük parsel", "Havza / plan koşulları", "Ulaşım bağlantıları"],
    sellerFit: ["Villa sahibi", "Büyük arsa sahibi", "Eski müstakil yapı", "Portföyünü sadeleştiren malik"],
  },
  {
    slug: "resadiye",
    name: "Reşadiye",
    title: "Reşadiye Arsa ve Müstakil Mülk Değerlendirmesi",
    description: "Reşadiye ve Çekmeköy kuzeyinde arsa ve müstakil taşınmazları seçici biçimde ön değerlendiriyoruz.",
    places: ["Reşadiye", "Çekmeköy"],
    localNote: "Reşadiye'de düşük yoğunluk, yeşil çevre ve parsel büyüklüğü ilgi çekebilir; fakat mülkün gerçek kullanım ve geliştirme imkânı tapu ve plan koşullarına bağlıdır.",
    focusPoints: ["Arsa / parsel", "Müstakil yapı", "Erişim", "Plan koşulları"],
    sellerFit: ["Arsa sahibi", "Müstakil ev sahibi", "Aile mülkü", "Uzun süredir elde tutulan taşınmaz"],
  },
  {
    slug: "arnavutkoy",
    name: "Arnavutköy",
    title: "Arnavutköy Arsa Ön Değerlendirmesi",
    description: "Arnavutköy'de altyapı hikâyesi güçlü alanlarda plan, tapu ve parsel niteliğine göre seçici değerlendirme yapıyoruz.",
    places: ["Dursunköy", "Tayakadın", "Durusu"],
    localNote: "Arnavutköy'de büyük altyapı projeleri beklenti yaratabilir; ancak beklenti fiyatı ile parselin hukuki ve fiziksel gerçekliği ayrı değerlendirilmelidir.",
    focusPoints: ["Plan / imar", "Parsel niteliği", "Ulaşım ve altyapı", "Fiyat beklentisi"],
    sellerFit: ["Arsa / tarla sahibi", "Uzun vadeli yatırımını satmayı düşünen malik", "Hisseli parsel", "Miras kalan arazi"],
  },
  {
    slug: "dursunkoy",
    name: "Dursunköy",
    title: "Dursunköy Arsa ve Arazi Ön Değerlendirmesi",
    description: "Dursunköy'de arsa ve arazi dosyalarını parsel, plan, erişim ve satış beklentisi açısından değerlendiriyoruz.",
    places: ["Dursunköy", "Arnavutköy"],
    localNote: "Dursunköy'de altyapı ve plan beklentileri fiyatları etkileyebilir. Bu nedenle duyuma dayalı değer yerine resmi parsel bilgileri ve gerçek kullanım imkânı önemlidir.",
    focusPoints: ["Ada / parsel", "Plan durumu", "Yol / erişim", "Hisselilik"],
    sellerFit: ["Arazi sahibi", "Hisseli parsel sahibi", "Yurt dışında yaşayan malik", "Satış zamanlamasını değerlendiren yatırımcı"],
  },
  {
    slug: "catalca",
    name: "Çatalca",
    title: "Çatalca Arsa ve Büyük Parsel Değerlendirmesi",
    description: "Çatalca'da büyük parsel, tarla ve arsa dosyalarını uzun vadeli yatırım kriterleriyle inceliyoruz.",
    places: ["Çatalca", "İnceğiz", "Subaşı", "Kestanelik"],
    localNote: "Çatalca'da parsel büyüklüğü fırsat yaratabilir fakat imar, tarımsal nitelik, yol ve altyapı durumu satış likiditesini doğrudan etkiler.",
    focusPoints: ["Büyük arazi", "Tarla / arsa niteliği", "Yol ve altyapı", "Uzun vadeli potansiyel"],
    sellerFit: ["Büyük parsel sahibi", "Aileden kalan arazi", "Hisseli tarla", "Portföy değişikliği yapan malik"],
  },
  {
    slug: "tepeoren",
    name: "Tepeören",
    title: "Tepeören ve Akfırat Gayrimenkul Değerlendirmesi",
    description: "Tepeören ve Akfırat'ta villa, arsa ve seçili müstakil taşınmazları yatırım açısından değerlendiriyoruz.",
    places: ["Tepeören", "Akfırat", "Tuzla"],
    localNote: "Tepeören-Akfırat hattında villa yaşamı, ulaşım ve büyük parseller bir araya gelir. Site niteliği, arsa payı, yapı yaşı ve ulaşım bağlantısı fiyatlamada belirleyicidir.",
    focusPoints: ["Villa / müstakil ev", "Arsa", "Site ve yapı niteliği", "Ulaşım aksları"],
    sellerFit: ["Villa sahibi", "Arsa sahibi", "Eski müstakil yapı", "Yurt dışında yaşayan malik"],
  },
];

export type GuideSection = { title: string; text: string };
export type Guide = {
  slug: string;
  eyebrow: string;
  title: string;
  description: string;
  sections: GuideSection[];
  faq: [string, string][];
};

export const guides: Guide[] = [
  {
    slug: "evimi-satmak-istiyorum",
    eyebrow: "Ev satışı",
    title: "Evimi satmak istiyorum: nereden başlamalıyım?",
    description: "Satış kararı öncesi tapu, fiyat, bina ve zamanlama açısından bakılması gereken temel noktalar.",
    sections: [
      { title: "Önce satış hedefini netleştirin", text: "Hız, fiyat ve süreç kolaylığı aynı anda en üst düzeyde olmayabilir. Önceliğinizin yüksek fiyat mı, daha kısa süreç mi, yoksa ilan vermeden daha gizli bir görüşme mi olduğunu netleştirmek doğru yöntemi seçmeyi kolaylaştırır." },
      { title: "Tapu ve bina bilgilerini hazırlayın", text: "Tapu niteliği, arsa payı, bina yaşı, bağımsız bölüm bilgisi, mevcut kullanım ve varsa kiracı durumu ilk değerlendirmede önemlidir." },
      { title: "Fiyat beklentisini işlem kabiliyetiyle karşılaştırın", text: "İlan fiyatları fikir verebilir ancak gerçek satış kabiliyeti; bina, sokak, kat, tapu ve alıcı talebiyle birlikte değerlendirilmelidir." },
    ],
    faq: [
      ["İlan vermeden satış görüşmesine başlayabilir miyim?", "Evet. Ön değerlendirme için mülkün açık ilanda olması gerekmez."],
      ["Eski veya tadilat isteyen ev değerlendirilir mi?", "Evet. Yapının durumu, arsa payı ve konumu birlikte incelenebilir."],
      ["İlk aşamada hangi belgeler gerekir?", "Genellikle konum ve temel mülk bilgileriyle başlanabilir; detay gerektiğinde tapu ve diğer bilgiler istenir."],
    ],
  },
  {
    slug: "arsami-satmak-istiyorum",
    eyebrow: "Arsa satışı",
    title: "Arsamı satmak istiyorum: hangi bilgiler önemli?",
    description: "Ada/parsel, imar, yol, hisselilik ve fiyat beklentisi arsa değerlendirmesinin temelidir.",
    sections: [
      { title: "Ada ve parsel bilgisini bulun", text: "Arsa değerlendirmesinde konum tarifinden çok resmi ada/parsel bilgisi önemlidir. Parselin sınırı, yüzölçümü ve tapu niteliği buradan anlaşılır." },
      { title: "İmar ile tapu niteliğini birbirinden ayırın", text: "Tapuda arsa, tarla veya başka bir nitelik yazması ile fiili yapılaşma hakkı aynı şey değildir. Güncel plan ve ilgili kurum koşulları ayrıca değerlendirilmelidir." },
      { title: "Yol ve parsel şekli fiyatı etkileyebilir", text: "Aynı mahalledeki iki parsel; yola cephe, şekil, eğim, hisselilik ve altyapı nedeniyle çok farklı satış kabiliyetine sahip olabilir." },
    ],
    faq: [
      ["Ada/parsel bilmiyorsam başvurabilir miyim?", "Evet. Mahalle ve yaklaşık konumla başlanabilir; ancak ada/parsel bilgisi incelemeyi hızlandırır."],
      ["Hisseli arsa değerlendirilebilir mi?", "Evet. Pay oranı ve diğer maliklerin durumu ayrıca incelenir."],
      ["İmarsız arazi satılabilir mi?", "Satış hukuken mümkün olabilir; ancak kullanım ve fiyat beklentisi taşınmazın niteliğine göre ayrıca değerlendirilmelidir."],
    ],
  },
  {
    slug: "hisseli-tapu-satisi",
    eyebrow: "Hisseli tapu",
    title: "Hisseli tapulu gayrimenkul satışı",
    description: "Pay oranı, diğer maliklerin durumu ve tapu yapısı satış sürecini doğrudan etkiler.",
    sections: [
      { title: "Önce tam olarak hangi payın size ait olduğunu bilin", text: "Tapudaki pay oranı, fiili kullanım alanıyla her zaman birebir aynı olmayabilir. Değerlendirme tapudaki resmi pay yapısından başlamalıdır." },
      { title: "Diğer maliklerin yaklaşımı önemlidir", text: "Tüm taşınmazın birlikte satılması ile yalnızca bir hissenin devri farklı alıcı kitlesi ve fiyatlama yaratabilir." },
      { title: "Hukuki ayrıntılar dosya bazında kontrol edilmelidir", text: "Önalım hakkı ve diğer hukuki konular somut tapu yapısına göre değişebilir. Bağlayıcı işlem öncesi gerekli hukuki kontrol ayrıca yapılmalıdır." },
    ],
    faq: [
      ["Sadece kendi hissemi değerlendirmeye gönderebilir miyim?", "Evet. Pay oranını ve taşınmazın genel durumunu paylaşarak ön değerlendirme isteyebilirsiniz."],
      ["Diğer hissedarların onayı olmadan başvurabilir miyim?", "Ön görüşme yapılabilir; ancak satışın nasıl ilerleyebileceği malik ve tapu yapısına bağlıdır."],
      ["Hisseli tapu otomatik olarak değersiz midir?", "Hayır. Konum, pay oranı, kullanım, diğer maliklerin tutumu ve parsel niteliği birlikte önemlidir."],
    ],
  },
  {
    slug: "miras-kalan-gayrimenkul-satisi",
    eyebrow: "Miras",
    title: "Miras kalan gayrimenkul nasıl satılır?",
    description: "İntikal, malik yapısı ve satış kararı açısından temel bir ön kontrol listesi.",
    sections: [
      { title: "Miras intikali ve malik yapısını netleştirin", text: "Satış planından önce tapunun güncel malik yapısının ve mirasçıların paylarının anlaşılması süreci kolaylaştırır." },
      { title: "Mirasçıların hedefleri aynı olmayabilir", text: "Bir malik hızlı satış isterken diğeri beklemek isteyebilir. Fiyat ve zamanlama konuşulmadan önce karar mekanizmasının netleşmesi önemlidir." },
      { title: "Mülkün gerçek durumunu birlikte değerlendirin", text: "Uzun süredir boş duran ev, eski bina veya yıllardır kullanılmayan arsa; bakım, tapu ve konum açısından ayrıca incelenmelidir." },
    ],
    faq: [
      ["İntikal tamamlanmadan ön değerlendirme yapılabilir mi?", "Genel bir ön görüşme yapılabilir; bağlayıcı satış süreci için resmi durumun ayrıca netleşmesi gerekir."],
      ["Birden fazla mirasçı varsa ne olur?", "Karar ve satış yöntemi malik yapısına göre değişir. İlk değerlendirmede pay ve karar durumu sorulur."],
      ["Yurt dışındaki mirasçı başvurabilir mi?", "Evet. İlk aşama uzaktan başlayabilir."],
    ],
  },
  {
    slug: "yurtdisinda-yasayan-malik-gayrimenkul-satisi",
    eyebrow: "Yurt dışındaki malik",
    title: "Yurt dışında yaşarken Türkiye'deki gayrimenkul nasıl satılır?",
    description: "Türkiye dışında yaşayan maliklerin ilk değerlendirmeyi uzaktan başlatırken hazırlayabileceği bilgiler.",
    sections: [
      { title: "İlk inceleme için Türkiye'ye gelmeniz gerekmez", text: "Mahalle, taşınmaz türü, yaklaşık m², tapu bilgisi ve fiyat beklentisi dijital olarak paylaşılabilir." },
      { title: "Belge ve yetki konularını erken planlayın", text: "Satışın ilerleyen aşamasında vekâlet veya resmi işlem gerekiyorsa, kullanılacak yöntem somut duruma göre önceden planlanmalıdır." },
      { title: "Yerel durumu uzaktan anlamak mümkün", text: "Fotoğraf, konum, tapu verisi ve gerektiğinde yerinde inceleme ile mülkün temel durumu malik gelmeden önce değerlendirilebilir." },
    ],
    faq: [
      ["Almanya'dan başvuru yapabilir miyim?", "Evet. İlk ön değerlendirme tamamen uzaktan başlayabilir."],
      ["Tapunun fotoğrafını hemen göndermek zorunda mıyım?", "İlk temas için şart değildir; detaylı inceleme gerektiğinde ilgili bilgiler talep edilebilir."],
      ["Türkçe konuşmuyorsam?", "Site üzerinden Türkçe, Almanca, İngilizce, Rusça ve Arapça iletişim başlatabilirsiniz."],
    ],
  },
  {
    slug: "eski-bina-satisi",
    eyebrow: "Eski bina",
    title: "Eski bina veya komple bina satışı: nelere bakılır?",
    description: "Yapı yaşından arsa payına kadar eski binaların yatırım açısından değerlendirilmesinde öne çıkan noktalar.",
    sections: [
      { title: "Bina kadar arsa da önemlidir", text: "Eski yapılarda değer yalnızca mevcut dairelerin durumundan gelmeyebilir. Arsa büyüklüğü, arsa payları ve parsel konumu önemli olabilir." },
      { title: "Malik yapısı süreci belirler", text: "Komple bina tek malikliyse süreç farklı, çok sayıda bağımsız bölüm sahibi varsa farklı ilerler." },
      { title: "Yenileme ihtiyacını saklamak yerine netleştirin", text: "Tadilat, boşluk, kiracı veya yapı sorunları baştan bilindiğinde daha gerçekçi bir değerlendirme yapılabilir." },
    ],
    faq: [
      ["Çok eski bina da değerlendirilir mi?", "Evet. Konum, arsa ve malik yapısı uygunsa yapı yaşı tek başına engel değildir."],
      ["Komple bina satışı mümkün mü?", "Malik ve tapu yapısına göre komple bina dosyaları değerlendirilebilir."],
      ["Kiracılı bina olabilir mi?", "Evet; mevcut kullanım ve kira durumu ilk incelemede belirtilmelidir."],
    ],
  },
  {
    slug: "imarsiz-arsa-satisi",
    eyebrow: "İmarsız arsa / tarla",
    title: "İmarsız arsa veya tarla satışı nasıl değerlendirilir?",
    description: "İmar olmayan veya tarla niteliğindeki parsellerde konum, yol, tapu ve beklenti neden önemlidir?",
    sections: [
      { title: "İmarsız olmak, değersiz olmak değildir", text: "Ancak gelecekte kesin imar gelecek gibi varsayımlarla fiyatlama yapmak sağlıklı değildir. Mevcut resmi durum esas alınmalıdır." },
      { title: "Yol ve erişim kritik olabilir", text: "Fiili yol, kadastro yolu, parsel şekli ve çevredeki kullanım arazi likiditesini etkileyebilir." },
      { title: "Uzun vadeli potansiyel ile bugünkü değer ayrılmalıdır", text: "Bölgesel gelişim hikâyesi önemli olabilir fakat yatırım değerlendirmesinde bugünkü hukuki ve fiziksel durum ayrı okunmalıdır." },
    ],
    faq: [
      ["Tarla tapulu yer değerlendirilebilir mi?", "Evet. Tapu niteliği, konum, erişim ve beklenti birlikte incelenir."],
      ["İmar geleceği kesin söylenebilir mi?", "Hayır. Resmi plan ve kurum bilgileri dışında kesin gelecek varsayımı yapılmamalıdır."],
      ["Büyük parsel avantaj mı?", "Bazı alıcılar için evet; ancak büyüklük tek başına yeterli değildir."],
    ],
  },
  {
    slug: "acil-gayrimenkul-satisi",
    eyebrow: "Kısa satış takvimi",
    title: "Gayrimenkulü daha kısa sürede satmak isteyenler için hazırlık",
    description: "Zamanın önemli olduğu bir satışta belge, fiyat beklentisi ve karar yetkisini baştan netleştirmek süreci kolaylaştırabilir.",
    sections: [
      { title: "Hız için dosyayı eksiksiz hazırlayın", text: "Konum, tapu, m², malik yapısı ve fiyat beklentisinin baştan paylaşılması gereksiz görüşmeleri azaltabilir." },
      { title: "Gerçekçi fiyat beklentisi önemlidir", text: "Kısa takvim hedefleniyorsa piyasadaki en yüksek ilan fiyatı ile gerçek işlem ihtimali arasındaki fark dikkate alınmalıdır." },
      { title: "Karar yetkisini netleştirin", text: "Birden fazla malik veya mirasçı varsa kimin karar verebildiği ve hangi şartlarda satış yapılabileceği baştan bilinmelidir." },
    ],
    faq: [
      ["Başvuru yapınca satmak zorunda mıyım?", "Hayır. Ön değerlendirme bağlayıcı değildir."],
      ["Acil satış nedeni paylaşmak zorunda mıyım?", "Hayır. Değerlendirme için mülk bilgileri ve satış takvimi yeterlidir."],
      ["Hızlı değerlendirme kesin teklif anlamına gelir mi?", "Hayır. Önce mülkün yatırım kriterlerine uygunluğu incelenir."],
    ],
  },
];
