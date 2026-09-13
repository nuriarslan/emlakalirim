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
};

export const regions: Region[] = [
  { slug: "beykoz", name: "Beykoz", title: "Beykoz'da Gayrimenkul ve Arsa Ön Değerlendirmesi", description: "Beykoz'da arsa, eski yapı, villa ve güçlü arsa payına sahip taşınmazları yatırım kriterleri açısından değerlendiriyoruz.", places: ["Riva", "Ortaçeşme", "Öğümce", "Paşamandıra"] },
  { slug: "riva", name: "Riva", title: "Riva Arsa ve Gayrimenkul Değerlendirmesi", description: "Riva'da arsa, villa ve müstakil taşınmazlarda tapu, imar, erişim ve parsel niteliğini birlikte inceliyoruz.", places: ["Riva", "Beykoz"] },
  { slug: "ortacesme", name: "Ortaçeşme", title: "Ortaçeşme Gayrimenkul Ön Değerlendirmesi", description: "Ortaçeşme'de eski yapı, arsa payı ve dönüşüm potansiyeli bulunan gayrimenkulleri seçici biçimde değerlendiriyoruz.", places: ["Ortaçeşme", "Beykoz"] },
  { slug: "ogumce", name: "Öğümce", title: "Öğümce Arsa ve Müstakil Gayrimenkul", description: "Öğümce'de büyük parsel, arsa ve müstakil yaşam odaklı taşınmazları yatırım açısından inceliyoruz.", places: ["Öğümce", "Beykoz"] },
  { slug: "pasamandira", name: "Paşamandıra", title: "Paşamandıra Arsa Ön Değerlendirmesi", description: "Paşamandıra ve çevresinde arsa ve kırsal nitelikli gayrimenkullerde tapu ve imar yapısını önceliklendiriyoruz.", places: ["Paşamandıra", "Beykoz"] },
  { slug: "sile", name: "Şile", title: "Şile'de Arsa, Ev ve Villa Değerlendirmesi", description: "Şile, Ağva ve çevresinde arsa, ikinci konut ve müstakil taşınmazları değerlendiriyoruz.", places: ["Şile", "Ağva", "Ahmetli", "Kabakoz"] },
  { slug: "omerli", name: "Ömerli", title: "Ömerli Arsa ve Villa Değerlendirmesi", description: "Ömerli'de villa, büyük parsel ve müstakil taşınmazları lokasyon ve hukuki durumuyla birlikte inceliyoruz.", places: ["Ömerli", "Çekmeköy"] },
  { slug: "arnavutkoy", name: "Arnavutköy", title: "Arnavutköy Arsa Ön Değerlendirmesi", description: "Arnavutköy'de altyapı hikâyesi güçlü alanlarda plan, tapu ve parsel niteliğine göre seçici değerlendirme yapıyoruz.", places: ["Dursunköy", "Tayakadın", "Durusu"] },
];

export type Guide = { slug: string; eyebrow: string; title: string; description: string };
export const guides: Guide[] = [
  { slug: "evimi-satmak-istiyorum", eyebrow: "Ev satışı", title: "Evimi satmak istiyorum: nereden başlamalıyım?", description: "Satış kararı öncesi tapu, fiyat, bina ve zamanlama açısından bakılması gereken temel noktalar." },
  { slug: "arsami-satmak-istiyorum", eyebrow: "Arsa satışı", title: "Arsamı satmak istiyorum: hangi bilgiler önemli?", description: "Ada/parsel, imar, yol, hisselilik ve fiyat beklentisi arsa değerlendirmesinin temelidir." },
  { slug: "hisseli-tapu-satisi", eyebrow: "Hisseli tapu", title: "Hisseli tapulu gayrimenkul satışı", description: "Pay oranı, diğer maliklerin durumu ve tapu yapısı satış sürecini doğrudan etkiler." },
  { slug: "miras-kalan-gayrimenkul-satisi", eyebrow: "Miras", title: "Miras kalan gayrimenkul nasıl satılır?", description: "İntikal, malik yapısı ve satış kararı açısından temel bir ön kontrol listesi." },
];
