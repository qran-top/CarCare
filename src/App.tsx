/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { 
  Phone, 
  Instagram, 
  Clock, 
  Mail, 
  Car, 
  CheckCircle2, 
  Star, 
  Zap, 
  Menu, 
  X,
  MapPin,
  ShieldCheck,
  Sparkles,
  MessageCircle
} from "lucide-react";
import { useState } from "react";

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const services = [
    {
      title: "الغسيل العادي",
      prices: { salon: 5, jeep: 6 },
      features: ["غسيل خارجي احترافي", "تنظيف داخلي دقيق", "تنظيف الإطارات والرنجات", "تعطير السيارة الفاخر"],
      color: "bg-slate-50",
      badge: "الأساسي",
      image: "/c1.png"
    },
    {
      title: "باقة Gold",
      prices: { salon: 15, jeep: 17 },
      features: ["كل مميزات الغسيل العادي", "إزالة بقع الكشنات والأرضيات", "تنظيف الديكورات الداخلية", "حماية الشمع السريع (Wax)"],
      color: "bg-amber-50",
      badge: "الأكثر طلباً",
      recommended: true,
      image: "/c2.png"
    },
    {
      title: "باقة VIP الملكية",
      prices: { salon: 20, jeep: 25 },
      features: ["عناية تفصيلية شاملة", "إزالة بقع مستعصية", "تلميع الرنجات الفائق", "تلميع الديكورات بمواد حماية", "تعطير ملكي يدوم طويلاً"],
      color: "bg-blue-50",
      badge: "الرفاهية",
      image: "/c4.png"
    }
  ];

  const galleryImages = [
    { src: "/c1.png", title: "قوة الدفع المائي", desc: "نستخدم أجهزة حديثة تضمن إزالة الأتربة دون خدش الصبغة" },
    { src: "/c2.png", title: "عناية بالتفاصيل", desc: "تنظيف عميق للرنجات والإطارات لتعود كأنها جديدة" },
    { src: "/c3.png", title: "لمسة ناعمة", desc: "استخدام ميكروفايبر عالي الجودة لحماية الجلود والديكورات" },
    { src: "/c5.png", title: "دقة متناهية", desc: "وصول لأدق الزوايا والأزرار لضمان نظافة مثالية" },
    { src: "/c6.png", title: "تعقيم وتلميع", desc: "تنظيف مسارات الجير والديكورات بمواد متخصصة" },
    { src: "/c4.png", title: "اللمعة النهائية", desc: "تجفيف يدوي دقيق يبرز جمال لون سيارتك" },
  ];

  const subscriptions = [
    { type: "السيارات الصغيرة", price: 55, label: "باقة النخبة" },
    { type: "السيارات الوسط", price: 70, label: "باقة التوفير" },
    { type: "السيارات الكبيرة", price: 75, label: "الباقة العائلية" },
  ];

  return (
    <div className="min-h-screen font-sans bg-white selection:bg-blue-100 selection:text-blue-900">
      {/* Dynamic Header */}
      <nav className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-xl border-b border-slate-100/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
              <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-slate-950 rounded-2xl flex items-center justify-center text-white shadow-xl shadow-slate-200">
                <Car size={28} className="text-blue-500" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-black text-slate-900 leading-none tracking-tight">CAR CARE</span>
                <span className="text-[9px] font-extrabold text-blue-600 tracking-[0.2em] uppercase">Premium Detailing</span>
              </div>
            </div>
            
            <div className="hidden md:flex items-center gap-8 text-sm font-bold text-slate-600">
              <a href="#services" className="hover:text-blue-600 transition-colors uppercase">الخدمات</a>
              <a href="#offers" className="hover:text-blue-600 transition-colors uppercase">العروض</a>
              <a href="tel:66113328" className="px-6 py-2.5 bg-slate-900 text-white rounded-xl hover:bg-blue-600 transition-all flex items-center gap-2">
                <Phone size={16} />
                66113328
              </a>
            </div>

            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden p-2 text-slate-900 bg-slate-50 rounded-lg">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Flyout Menu */}
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            className="md:hidden fixed inset-0 top-20 bg-white z-40 p-6 space-y-6"
          >
            <div className="grid grid-cols-1 gap-4">
              <a href="#services" className="text-2xl font-bold p-4 bg-slate-50 rounded-2xl" onClick={() => setIsMenuOpen(false)}>الخدمات</a>
              <a href="#offers" className="text-2xl font-bold p-4 bg-slate-50 rounded-2xl" onClick={() => setIsMenuOpen(false)}>العروض السوبر</a>
              <a href="#gallery" className="text-2xl font-bold p-4 bg-slate-50 rounded-2xl" onClick={() => setIsMenuOpen(false)}>لماذا نحن؟</a>
            </div>
            <div className="pt-8 border-t border-slate-100">
              <p className="text-slate-400 mb-4 font-medium uppercase tracking-widest text-xs">تواصل مباشر</p>
              <div className="flex gap-4">
                <a href="tel:66113328" className="flex-1 bg-green-500 text-white p-4 rounded-2xl flex items-center justify-center gap-2 font-bold shadow-lg shadow-green-100">
                  <Phone size={20} /> اتصل الآن
                </a>
                <a href="https://wa.me/96566113328" className="flex-1 bg-blue-600 text-white p-4 rounded-2xl flex items-center justify-center gap-2 font-bold shadow-lg shadow-blue-100">
                  <MessageCircle size={20} /> واتساب
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </nav>

      {/* Hero Section - Kuwait Atmosphere */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-blue-50 via-white to-white z-0" />
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600/10 text-blue-700 rounded-full mb-8 text-sm font-black border border-blue-600/10">
                <MapPin size={16} />
                <span>خدمة متنقلة - نصلك أينما كنت في الكويت</span>
              </div>
              <h1 className="text-4xl md:text-6xl lg:text-8xl font-black text-slate-950 mb-6 leading-[1.2] md:leading-[1.1] tracking-tight">
                سيارتك تستحق <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">عناية الخبراء.</span>
              </h1>
              <p className="text-lg md:text-2xl text-slate-500 mb-10 max-w-xl leading-relaxed font-medium">
                نعيد لسيارتك بريق الوكالة بأيدي فنيين متخصصين ومواد عالمية فائقة الجودة. نصل إليك أينما كنت في الكويت لنمنح سيارتك الرفاهية التي تستحقها.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-5">
                <a href="tel:66113328" className="px-10 py-5 bg-slate-950 text-white rounded-2xl font-black text-xl flex items-center justify-center gap-4 hover:bg-blue-600 transition-all shadow-2xl shadow-slate-200">
                  احجز موعدك <Phone />
                </a>
                <div className="flex items-center gap-4 px-6 md:border-r border-slate-200">
                   <div className="flex flex-col">
                      <span className="text-slate-900 font-black text-lg">9.0 / 10</span>
                      <span className="text-slate-400 text-xs font-bold uppercase tracking-widest">تقييم العملاء</span>
                   </div>
                   <div className="flex text-amber-400">
                     {[1,2,3,4,5].map(i => <Star key={i} size={16} fill="currentColor" />)}
                   </div>
                </div>
              </div>

              <div className="mt-12 grid grid-cols-3 gap-8">
                {[
                  { label: "عام من الخبرة", val: "+5" },
                  { label: "عميل سعيد", val: "+2k" },
                  { label: "دقة الإنجاز", val: "100%" },
                ].map((stat, i) => (
                  <div key={i}>
                    <p className="text-3xl font-black text-slate-900">{stat.val}</p>
                    <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">{stat.label}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.9, rotate: 2 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              className="relative hidden lg:block"
            >
              <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(30,58,138,0.25)] border-8 border-white">
                <img src="/c1.png" alt="Service Hero" className="w-full aspect-[4/5] object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-60" />
                <div className="absolute bottom-10 left-10 text-white">
                  <p className="text-4xl font-black mb-2 uppercase tracking-tighter">Premium Detailing</p>
                  <p className="text-lg font-medium opacity-80">نعتني بكل تفصيلة صغيرة لضمان راحتك</p>
                </div>
              </div>
              {/* Decorative blobs */}
              <div className="absolute -top-12 -right-12 w-64 h-64 bg-blue-400 blur-[100px] rounded-full opacity-20 -z-10 animate-pulse" />
              <div className="absolute -bottom-12 -left-12 w-80 h-80 bg-indigo-400 blur-[120px] rounded-full opacity-25 -z-10" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Grid - Dynamic & Mobile Friendly */}
      <section id="services" className="py-24 bg-slate-50/50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <span className="text-blue-600 font-black text-xs uppercase tracking-[0.3em] mb-4 block">Our Services</span>
              <h2 className="text-4xl md:text-6xl font-black text-slate-950 italic uppercase tracking-tighter">
                باقات العناية المختارة
              </h2>
            </div>
            <p className="text-slate-500 max-w-sm text-lg font-medium">كل باقة مصممة لتعطي سيارتك أقصى درجات النظافة والحماية المطلوبة.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className={`group rounded-[2.5rem] overflow-hidden border transition-all duration-500 ${
                  service.recommended 
                    ? 'bg-slate-950 text-white border-slate-800 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.3)] scale-105 z-10' 
                    : 'bg-white text-slate-900 border-slate-100 shadow-xl shadow-slate-100'
                }`}
              >
                <div className="relative h-48 overflow-hidden">
                  <img src={service.image} alt={service.title} className="w-full h-full object-cover grayscale-[0.5] group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110" />
                  <div className="absolute top-6 left-6">
                     <span className={`px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest ${service.recommended ? 'bg-blue-600 text-white' : 'bg-white text-slate-900'}`}>
                       {service.badge}
                     </span>
                  </div>
                </div>

                <div className="p-8">
                  <h3 className="text-3xl font-black mb-8 italic uppercase tracking-tight">{service.title}</h3>
                  
                  <div className="grid grid-cols-2 gap-4 mb-8">
                    <div className={`p-4 rounded-2xl border ${service.recommended ? 'border-white/10 bg-white/5' : 'border-slate-50 bg-slate-50'}`}>
                       <p className="text-[10px] font-bold opacity-60 uppercase mb-1">Salon</p>
                       <p className="text-2xl font-black">{service.prices.salon} <span className="text-xs font-normal">KD</span></p>
                    </div>
                    <div className={`p-4 rounded-2xl border ${service.recommended ? 'border-white/10 bg-white/5' : 'border-slate-50 bg-slate-50'}`}>
                       <p className="text-[10px] font-bold opacity-60 uppercase mb-1">Jeep / SUV</p>
                       <p className="text-2xl font-black">{service.prices.jeep} <span className="text-xs font-normal">KD</span></p>
                    </div>
                  </div>

                  <ul className="space-y-4 mb-10">
                    {service.features.map((f, i) => (
                      <li key={i} className="flex items-center gap-3 text-sm font-medium">
                        <CheckCircle2 size={16} className={service.recommended ? "text-blue-400" : "text-blue-600"} />
                        <span className={service.recommended ? "text-slate-300" : "text-slate-600"}>{f}</span>
                      </li>
                    ))}
                  </ul>

                  <a href="tel:66113328" className={`w-full py-5 rounded-2xl font-black text-lg flex items-center justify-center gap-3 transition-all ${
                    service.recommended 
                      ? 'bg-blue-600 text-white hover:bg-blue-700 shadow-xl shadow-blue-900/40' 
                      : 'bg-slate-900 text-white hover:bg-blue-600 shadow-xl shadow-slate-100'
                  }`}>
                    اطلب الآن <Phone size={18} />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section - Showcase Images c1-c6 */}
      <section id="gallery" className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-20">
             <h2 className="text-4xl md:text-6xl font-black text-slate-950 mb-6 italic uppercase">Our Work Process</h2>
             <p className="text-xl text-slate-500 font-medium max-w-2xl mx-auto leading-relaxed">
               شاهد كيف نعتني بسيارتك. نحن لا نغسل فقط، نحن نجدد تجربة قيادتك بدقة متناهية.
             </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
            {galleryImages.map((img, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group relative aspect-[4/5] rounded-[2rem] overflow-hidden shadow-xl"
              >
                <img src={img.src} alt={img.title} className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:rotate-1" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-80" />
                <div className="absolute bottom-6 left-6 right-6 text-white text-right">
                  <h4 className="text-lg md:text-xl font-black mb-1">{img.title}</h4>
                  <p className="text-[10px] md:text-xs opacity-80 leading-relaxed line-clamp-2">{img.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Premium Subscription Section */}
      <section id="offers" className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-slate-950 z-0" />
        <div className="max-w-7xl mx-auto px-4 relative z-10 text-white">
          <div className="bg-gradient-to-br from-blue-700/20 to-transparent border border-white/10 rounded-[3rem] p-8 md:p-16">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
               <div>
                  <span className="px-5 py-2 bg-amber-500 text-slate-950 text-xs font-black rounded-full mb-8 inline-block uppercase tracking-widest">
                    Monthly Membership
                  </span>
                  <h2 className="text-5xl md:text-7xl font-black mb-8 italic uppercase leading-[1.1]">
                    اشترك الآن <br /> <span className="text-blue-500">ووفّر الكثير!</span>
                  </h2>
                  <div className="space-y-6 mb-12">
                     {[
                       "6 غسلات عادية شهرياً لباب بيتك",
                       "1 غسلة Gold شاملة تلميع وحماية",
                       "1 غسلة VIP ملكية للعناية التفصيلية",
                       "أولوية مطلقة في المواعيد والحجز"
                     ].map((item, i) => (
                       <div key={i} className="flex items-center gap-4 text-xl font-medium text-slate-300">
                         <div className="w-8 h-8 rounded-full bg-blue-600/20 flex items-center justify-center text-blue-400">
                           <CheckCircle2 size={20} />
                         </div>
                         {item}
                       </div>
                     ))}
                  </div>
               </div>

               <div className="space-y-4">
                  {subscriptions.map((sub, i) => (
                    <div key={i} className="group bg-white/5 border border-white/10 p-8 rounded-3xl flex justify-between items-center transition-all hover:bg-white hover:text-slate-950 hover:scale-[1.02] cursor-default">
                       <div>
                          <p className="text-[10px] font-black uppercase tracking-[0.2em] opacity-40 mb-1">{sub.label}</p>
                          <h4 className="text-2xl font-black italic uppercase">{sub.type}</h4>
                       </div>
                       <div className="text-right">
                          <p className="text-4xl font-black">{sub.price} <span className="text-sm font-normal">KD</span></p>
                          <p className="text-[10px] opacity-40 font-bold uppercase tracking-widest">Per Month</p>
                       </div>
                    </div>
                  ))}
                  <a href="tel:66113328" className="w-full py-6 mt-8 bg-blue-600 text-white rounded-2xl flex items-center justify-center gap-3 text-2xl font-black shadow-2xl shadow-blue-500/20 hover:bg-blue-700 transition-all">
                    اشترك الآن <Zap fill="white" />
                  </a>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer - Professional Finish */}
      <footer className="bg-white pt-24 pb-12 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-12 mb-16">
            <div className="col-span-1 md:col-span-2 text-right">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-14 h-14 bg-slate-950 rounded-2xl flex items-center justify-center text-white shadow-xl shadow-slate-100">
                  <Car size={32} className="text-blue-500" />
                </div>
                <div className="flex flex-col text-right">
                  <span className="text-2xl font-black text-slate-950 uppercase leading-none tracking-tight">CAR CARE</span>
                  <span className="text-xs font-extrabold text-blue-600 tracking-[0.2em] uppercase">Premium Detailing</span>
                </div>
              </div>
              <p className="text-slate-500 text-lg max-w-md font-medium leading-relaxed">
                في مركز العناية بالسيارة، نؤمن أن السيارة هي انعكاس لشخصية صاحبها. لذلك نعتني بأدق التفاصيل لضمان راحتك.
              </p>
            </div>

            <div>
              <h4 className="text-slate-900 font-black text-sm uppercase tracking-[0.2em] mb-8">تواصل معنا</h4>
              <ul className="space-y-6">
                <li>
                  <a href="tel:66113328" className="flex items-center gap-4 group">
                    <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center text-slate-500 group-hover:bg-blue-600 group-hover:text-white transition-all">
                      <Phone size={20} />
                    </div>
                    <span className="font-black text-lg text-slate-950">66113328</span>
                  </a>
                </li>
                <li>
                  <a href="https://instagram.com/carcarekw" className="flex items-center gap-4 group">
                    <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center text-slate-500 group-hover:bg-blue-600 group-hover:text-white transition-all">
                      <Instagram size={20} />
                    </div>
                    <span className="font-bold text-slate-600">@carcarekw</span>
                  </a>
                </li>
                <li>
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center text-slate-500">
                      <Clock size={20} />
                    </div>
                    <span className="font-bold text-slate-600 italic">9am — 9pm Every Day</span>
                  </div>
                </li>
              </ul>
            </div>

            <div>
               <h4 className="text-slate-900 font-black text-sm uppercase tracking-[0.2em] mb-8">باقاتنا</h4>
               <ul className="space-y-4 text-slate-500 font-bold">
                 <li><a href="#services" className="hover:text-blue-600">الغسيل العادي</a></li>
                 <li><a href="#services" className="hover:text-blue-600">تنظيف باقة Gold</a></li>
                 <li><a href="#services" className="hover:text-blue-600">العناية الملكية VIP</a></li>
                 <li><a href="#offers" className="hover:text-blue-600">الاشتراكات الشهرية</a></li>
               </ul>
            </div>
          </div>

          <div className="pt-12 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-6 text-slate-400 text-xs font-bold uppercase tracking-widest">
            <p>© {new Date().getFullYear()} Car Care Kuwait. جميع الحقوق محفوظة.</p>
            <div className="flex gap-8">
              <a href="#" className="hover:text-slate-900">Privacy Policy</a>
              <a href="#" className="hover:text-slate-900">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Persistent Action Buttons - For Mobile Conversion */}
      <div className="fixed bottom-6 inset-x-6 z-[60] flex gap-3 md:hidden">
         <a href="tel:66113328" className="flex-[2] bg-slate-950 text-white h-16 rounded-2xl flex items-center justify-center gap-3 font-black text-lg shadow-2xl shadow-slate-300 ring-4 ring-white">
           <Phone size={24} /> اتصل الآن
         </a>
         <a href="https://wa.me/96566113328" className="flex-1 bg-green-500 text-white h-16 rounded-2xl flex items-center justify-center shadow-2xl shadow-green-100 ring-4 ring-white">
           <MessageCircle size={28} />
         </a>
      </div>
    </div>
  );
}
