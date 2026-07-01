export const social = {
  github: "https://github.com/Hamzayln",
  linkedin: "https://www.linkedin.com/in/hamza-y%C4%B1lan-63058024a/",
  email: "hamzayln321@gmail.com",
};

export type Skill = {
  name: string;
  level: 2 | 3 | 4;
};

export type SkillCategory = {
  category: string;
  skills: Skill[];
};

export const skillCategories: SkillCategory[] = [
  {
    category: "Mobil & Web Geliştirme",
    skills: [
      { name: "React Native", level: 3 },
      { name: "Flutter", level: 3 },
      { name: "WordPress / HTML-CSS", level: 3 },
    ],
  },
  {
    category: "Yapay Zeka & Derin Öğrenme",
    skills: [
      { name: "CNN / ResNet", level: 3 },
      { name: "Python (PyTorch, TensorFlow, Keras)", level: 3 },
      { name: "Tıbbi Görüntü İşleme & Sınıflandırma", level: 2 },
    ],
  },
  {
    category: "Backend & Veri Tabanı",
    skills: [{ name: "Supabase / REST API", level: 2 }],
  },
  {
    category: "Ağ & Araçlar",
    skills: [
      { name: "Ağ Yönetimi & Siber Güvenlik (Cisco NetAcad)", level: 2 },
      { name: "Git / GitHub", level: 3 },
    ],
  },
];

export type Project = {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  githubUrl?: string;
  liveUrl?: string;
};

export const projects: Project[] = [
  {
    id: 1,
    title: "Kemik Kırığı & Çıkığı Tespiti (Bitirme Projesi)",
    description:
      "Röntgen görüntülerinden kemik kırığı/çıkığı tespiti yapan derin öğrenme tabanlı sınıflandırma sistemi. CLAHE ön işleme ve CNN'den Swin Transformer'a kadar yedi mimarinin ensemble edilmesiyle %90+ doğruluk hedefleniyor. PyTorch + CUDA üzerinde modüler bir pipeline olarak tasarlandı.",
    image: "/projects/bone-fracture.svg",
    tags: ["PyTorch", "CNN", "Swin Transformer", "CUDA"],
    githubUrl: "https://github.com/Hamzayln",
  },
  {
    id: 2,
    title: "Zatürre (Pnömoni) Tespiti — Derin Öğrenme Modeli",
    description:
      "Göğüs röntgeni görüntülerini analiz ederek zatürre tespiti yapan bir derin öğrenme modeli. CNN ve ResNet50 mimarilerini karşılaştırarak EfficientNetB4 + DenseNet121 topluluğuyla test verisinde ~%85 doğruluk elde edildi.",
    image: "/projects/pneumonia.svg",
    tags: ["Python", "CNN", "ResNet50", "EfficientNetB4"],
    githubUrl: "https://github.com/Hamzayln/pneumonia-detection-cnn",
  },
  {
    id: 3,
    title: "Oyunlaştırılmış İngilizce Öğrenme Uygulaması",
    description:
      "React Native, Python ve Supabase ile geliştirilen, dil öğrenimini oyunlaştıran uçtan uca mobil uygulama. Kullanıcının konuşma, dinleme, kelime, gramer, okuma ve telaffuz gelişimini ayrı ayrı izleyen 6 renkli yetenek çubuğu bileşenini kendim tasarladım; konuşma görevlerinde kullanıcıyı bir sonraki seviyeye taşımak için ses tanıma çıktısını %95 başarı eşiğiyle (threshold) değerlendiren bir mantık kurdum. Öğrenmeyi kişiselleştiren yapay zeka destekli sanal öğretmen modülü de sisteme entegre edildi.",
    image: "/projects/english-app.svg",
    tags: ["React Native", "Python", "Supabase"],
    githubUrl: "https://github.com/Hamzayln/gamified-english-app",
  },
  {
    id: 4,
    title: "Gezginim — Yapay Zeka Destekli Seyahat Asistanı",
    description:
      "Kullanıcı profillerine ve tercihlerine göre optimize edilmiş seyahat rotaları oluşturan mobil uygulama. Konum tabanlı öneriler, kişiselleştirilmiş gezi planları ve etkileşimli harita gösterimi içerir.",
    image: "/projects/gezginim.svg",
    tags: ["React Native", "AI", "Mobil"],
    githubUrl: "https://github.com/Hamzayln/gezginim-ai-travel-assistant",
  },
  {
    id: 5,
    title: "Habbe Burger — Restoran Web Sitesi",
    description:
      "Habbe Burger restoranı için WordPress altyapısıyla tasarlanan, mobil uyumlu ve performans optimizasyonu yapılmış kurumsal web sitesi. Alan adı ve barındırma yönetimi dahil uçtan uca yürütüldü.",
    image: "/projects/habbe-burger.svg",
    tags: ["WordPress", "Responsive", "SEO"],
    githubUrl: "https://github.com/Hamzayln/habbe-burger-website",
    liveUrl: "https://habbeburger.com",
  },
  {
    id: 6,
    title: "Kral Mermer — Kurumsal Web Sitesi",
    description:
      "Kral Mermer için WordPress altyapısıyla tasarlanan kurumsal tanıtım sitesi. Kullanıcı dostu arayüz ve mobil uyumluluk odaklı geliştirildi.",
    image: "/projects/kral-mermer.svg",
    tags: ["WordPress", "Kurumsal", "Responsive"],
    githubUrl: "https://github.com/Hamzayln/kral-mermer-website",
    liveUrl: "https://kralmermer.com.tr",
  },
];

export type Experience = {
  id: number;
  role: string;
  organization: string;
  period: string;
  description: string;
};

export const experiences: Experience[] = [
  {
    id: 1,
    role: "Yazılım Mühendisliği Stajyeri",
    organization: "Solid-ICT",
    period: "Temmuz 2026",
    description:
      "Şişli'de bulunan Solid-ICT bünyesinde yazılım mühendisliği stajımı sürdürüyorum; ekip içi geliştirme süreçlerine, kod inceleme pratiklerine ve gerçek üretim ortamındaki yazılım projelerine aktif olarak katkı sağlıyorum.",
  },
  {
    id: 2,
    role: "Yapay Zeka Araştırmacısı (Bitirme Projesi)",
    organization: "Muş Alparslan Üniversitesi",
    period: "2025 – Devam Ediyor",
    description:
      "Röntgen görüntülerinden kemik kırığı ve çıkığı tespiti yapan derin öğrenme tabanlı bir sınıflandırma sistemi geliştiriyorum; CNN tabanlı modellerden Swin Transformer'a kadar yedi mimariyi karşılaştırmalı olarak eğitip ensemble yöntemleriyle %90+ doğruluk hedefliyorum.",
  },
  {
    id: 3,
    role: "Serbest Çalışan (Freelance) Web Geliştirici",
    organization: "Habbe Burger & Kral Mermer",
    period: "2023 – Devam Ediyor",
    description:
      "WordPress altyapısını kullanarak kurumsal ve restoran web sitelerini tasarladım, yayına aldım; alan adı ve barındırma yönetimi süreçlerini uçtan uca yürüttüm.",
  },
];
