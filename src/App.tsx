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
  X 
} from "lucide-react";
import { useState } from "react";

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const services = [
    {
      title: "غسيل عادي",
      prices: { salon: 5, jeep: 6 },
      features: ["غسيل خارجي", "تنظيف داخلي", "تنظيف الإطارات والرنجات", "تعطير السيارة"],
      color: "bg-slate-100",
      badge: "أساسي"
    },
    {
      title: "غسيل Gold",
      prices: { salon: 15, jeep: 17 },
      features: ["غسيل خارجي", "تنظيف داخلي", "تنظيف الإطارات والرنجات", "إزالة بقع الأرضيات أو الكشنات", "تعطير السيارة"],
      color: "bg-amber-50",
      badge: "الأكثر طلباً",
      recommended: true
    },
    {
      title: "غسيل VIP",
      prices: { salon: 20, jeep: 25 },
      features: ["غسيل خارجي", "تنظيف داخلي", "تنظيف الإطارات والرنجات", "إزالة بقع الأرضيات والكشنات", "تعطير السيارة", "تلميع إضافي يدوم طويلاً"],
      color: "bg-blue-50",
      badge: "بريميوم"
    }
  ];

  const whyChooseUs = [
    { title: "دقة في المواعيد", desc: "نلتزم بالحضور في الموعد المحدد لضمان راحتكم.", icon: <Clock className="text-blue-600" /> },
    { title: "مواد بريميوم", desc: "نستخدم أفضل أنواع الشامبو والواكس العالمي لحماية صبغة سيارتك.", icon: <Star className="text-amber-500" /> },
    { title: "فريق محترف", desc: "عمالة مدربة على أعلى مستوى في فنون العناية بالسيارات.", icon: <CheckCircle2 className="text-green-600" /> },
  ];

  const offers = [
    { title: "عرض سوبر VIP", price: 30, original: 60, desc: "غسيل سيارتين VIP" },
    { title: "عرض سوبر GOLD", price: 25, original: 50, desc: "غسيل سيارتين GOLD" },
    { title: "عرض سوبر عادي", price: 10, original: 20, desc: "غسيل سيارتين عادي" },
  ];

  const subscriptions = [
    { type: "Small Car", price: 55 },
    { type: "Medium Car", price: 70 },
    { type: "Large Car", price: 75 },
  ];

  return (
    <div className="min-h-screen font-sans">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-xl">C</div>
              <span className="text-xl font-bold tracking-tight text-slate-900 uppercase">Car Care</span>
            </div>
            
            <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
              <a href="#services" className="hover:text-blue-600 transition-colors">الخدمات</a>
              <a href="#offers" className="hover:text-blue-600 transition-colors">العروض</a>
              <a href="#subscription" className="hover:text-blue-600 transition-colors">الاشتراكات</a>
              <a href="#contact" className="px-5 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-all shadow-lg shadow-blue-200">اتصل بنا</a>
            </div>

            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden p-2 text-slate-600">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden bg-white border-b border-slate-100 px-4 py-6 space-y-4"
          >
            <a href="#services" className="block text-lg font-medium" onClick={() => setIsMenuOpen(false)}>الخدمات</a>
            <a href="#offers" className="block text-lg font-medium" onClick={() => setIsMenuOpen(false)}>العروض</a>
            <a href="#subscription" className="block text-lg font-medium" onClick={() => setIsMenuOpen(false)}>الاشتراكات</a>
            <a href="tel:66113328" className="block text-lg font-medium text-blue-600 font-bold">66113328</a>
          </motion.div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 relative overflow-hidden bg-slate-50">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-block px-4 py-1.5 bg-blue-100 text-blue-700 text-sm font-bold rounded-full mb-6">
              نصلك أينما كنت في الكويت
            </span>
            <h1 className="text-5xl md:text-7xl font-bold text-slate-950 mb-6 leading-tight">
              مركز العناية بالسيارة <br />
              <span className="text-blue-600">Car Care</span>
            </h1>
            <p className="text-lg text-slate-600 mb-8 max-w-lg leading-relaxed">
              نهتم بأدق التفاصيل لنعيد لسيارتك بريقها. خدمات غسيل وتلميع متنقلة تصلك لباب البيت احترافية وسرعة في الإنجاز.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="tel:66113328" className="px-8 py-4 bg-slate-950 text-white rounded-2xl font-bold text-lg flex items-center gap-3 hover:bg-slate-800 transition-all shadow-xl shadow-slate-200">
                <Phone size={20} />
                أطلب الخدمة الآن
              </a>
              <div className="flex items-center gap-4 py-4 pr-4 border-r border-slate-200">
                <div className="flex -space-x-3 space-x-reverse">
                  {[1,2,3].map(i => (
                    <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-slate-200" />
                  ))}
                </div>
                <div className="text-sm">
                  <div className="flex text-amber-500">
                    {[1,2,3,4,5].map(i => <Star key={i} size={14} fill="currentColor" />)}
                  </div>
                  <p className="text-slate-500 font-medium">+1000 عميل سعيد</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-square bg-blue-600 rounded-3xl overflow-hidden shadow-2xl relative z-10">
              <img 
                src="https://images.unsplash.com/photo-1607860108855-64acf2078ed9?auto=format&fit=crop&q=80&w=1000" 
                alt="Car detailing"
                className="w-full h-full object-cover mix-blend-overlay opacity-60"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 flex items-center justify-center text-white p-8">
                <div className="text-center">
                  <Clock size={64} className="mx-auto mb-4" />
                  <h3 className="text-3xl font-bold mb-2 uppercase">Working Hours</h3>
                  <p className="text-2xl font-light">9am - 9pm</p>
                  <p className="text-xl mt-2 font-bold mb-8">٩ صباحاً - ٩ مساءً</p>
                  
                  <div className="grid grid-cols-2 gap-4 mt-8 pt-8 border-t border-white/20">
                    <div>
                      <p className="text-sm opacity-80 mb-1">اتصل بنا</p>
                      <p className="font-bold">66113328</p>
                    </div>
                    <div>
                      <p className="text-sm opacity-80 mb-1">إنستقرام</p>
                      <p className="font-bold">Carcarekw</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-amber-200 rounded-full blur-3xl opacity-50" />
            <div className="absolute -bottom-10 -left-10 w-60 h-60 bg-blue-400 rounded-full blur-3xl opacity-30" />
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">باقات الغسيل المميزة</h2>
            <p className="text-slate-500 max-w-xl mx-auto">نقدم مجموعة متنوعة من الباقات التي تناسب احتياجاتك، من الغسيل العادي إلى العناية المتكاملة.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className={`rounded-3xl p-8 border ${service.recommended ? 'border-blue-200 shadow-2xl shadow-blue-100 ring-2 ring-blue-500/10' : 'border-slate-100 shadow-xl shadow-slate-100'} ${service.color} transition-all hover:-translate-y-2`}
              >
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <span className="px-3 py-1 bg-white border border-slate-200 text-xs font-bold rounded-full uppercase tracking-wider text-slate-600 mb-2 inline-block">
                      {service.badge}
                    </span>
                    <h3 className="text-2xl font-bold text-slate-900">{service.title}</h3>
                  </div>
                  <Zap className={service.recommended ? "text-blue-500" : "text-slate-300"} />
                </div>

                <div className="space-y-4 mb-8">
                  <div className="flex justify-between items-center p-4 bg-white/60 rounded-2xl">
                    <span className="text-slate-600 font-medium">صالون</span>
                    <span className="text-2xl font-bold text-blue-600">{service.prices.salon} <span className="text-sm font-normal">د.ك</span></span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-white/60 rounded-2xl">
                    <span className="text-slate-600 font-medium">جيب / SUV</span>
                    <span className="text-2xl font-bold text-blue-600">{service.prices.jeep} <span className="text-sm font-normal">د.ك</span></span>
                  </div>
                </div>

                <ul className="space-y-3 mb-10">
                  {service.features.map((feat, i) => (
                    <li key={i} className="flex items-center gap-3 text-slate-600 text-sm">
                      <CheckCircle2 size={18} className="text-green-500 flex-shrink-0" />
                      {feat}
                    </li>
                  ))}
                </ul>

                <a href="tel:66113328" className={`block w-full text-center py-4 rounded-2xl font-bold transition-all ${service.recommended ? 'bg-blue-600 text-white hover:bg-blue-700' : 'bg-slate-950 text-white hover:bg-slate-800'}`}>
                  احجز الخدمة
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Offers Section */}
      <section id="offers" className="py-24 bg-slate-950 text-white overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <h2 className="text-4xl font-bold mb-4 italic">SUPER OFFERS 2024</h2>
              <p className="text-slate-400">عروض السوبر لغسيل سيارتين بأسعار لا تقبل المنافسة</p>
            </div>
            <div className="hidden md:block py-2 px-6 bg-blue-600 rounded-full font-bold text-sm">
              لفترة محدودة فقط
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {offers.map((offer, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white/5 border border-white/10 p-8 rounded-3xl group hover:bg-white/10 transition-all"
              >
                <div className="flex justify-between items-center mb-6">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-xl font-bold">
                    x2
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-slate-400 line-through">{offer.original} د.ك</p>
                    <p className="text-3xl font-black text-blue-400">{offer.price} د.ك</p>
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-2">{offer.title}</h3>
                <p className="text-slate-400 text-sm mb-6">{offer.desc}</p>
                <a href="tel:66113328" className="w-full py-3 border border-white/20 rounded-xl inline-block text-center font-bold hover:bg-white hover:text-slate-950 transition-all">
                  اطلب العرض
                </a>
              </motion.div>
            ))}
          </div>
        </div>
        {/* Background gradient */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-600/10 blur-3xl rounded-full" />
      </section>

      {/* Subscription Section */}
      <section id="subscription" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="bg-amber-50 rounded-[3rem] p-8 md:p-16 border border-amber-100 flex flex-col lg:flex-row gap-12 items-center">
            <div className="lg:w-1/2">
              <span className="px-4 py-1.5 bg-amber-100 text-amber-700 text-sm font-black rounded-full mb-6 inline-block">
                الاشتراك الشهري المميز
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-950 mb-8 leading-tight">
                وفر الكثير مع اشتراكنا <br />
                <span className="text-amber-600 underline decoration-amber-200">الشهري الموفر</span>
              </h2>
              
              <div className="space-y-6 mb-10">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-amber-600 shadow-sm shadow-amber-200">
                    <CheckCircle2 />
                  </div>
                  <p className="text-slate-700 font-medium text-lg">6 غسلات عادية شهرياً</p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-amber-600 shadow-sm shadow-amber-200">
                    <CheckCircle2 />
                  </div>
                  <p className="text-slate-700 font-medium text-lg">1 غسلة Gold متكاملة</p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-amber-600 shadow-sm shadow-amber-200">
                    <CheckCircle2 />
                  </div>
                  <p className="text-slate-700 font-medium text-lg">1 غسلة VIP بريميوم</p>
                </div>
              </div>
            </div>

            <div className="lg:w-1/2 grid grid-cols-1 gap-4 w-full">
              {subscriptions.map((sub, idx) => (
                <div key={idx} className="bg-white p-6 rounded-2xl flex justify-between items-center shadow-lg shadow-amber-950/5 group hover:bg-slate-950 hover:text-white transition-all cursor-default">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 bg-amber-50 rounded-xl flex items-center justify-center text-amber-600 group-hover:bg-white/10 group-hover:text-amber-400">
                      <Car size={28} />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg">{sub.type}</h4>
                      <p className="text-xs opacity-60">الاشتراك السوبر</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-2xl font-black">{sub.price} <span className="text-sm font-normal">د.ك</span></p>
                    <p className="text-[10px] uppercase tracking-widest font-bold opacity-50">Monthly</p>
                  </div>
                </div>
              ))}
              <a href="tel:66113328" className="mt-4 bg-amber-600 text-white py-4 rounded-2xl text-center font-bold text-lg hover:bg-amber-700 shadow-xl shadow-amber-200 transition-all">
                اشترك الآن
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {whyChooseUs.map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow text-center"
              >
                <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Placeholder / Experience */}
      <section className="py-24 bg-slate-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
             <div className="grid grid-cols-2 gap-4">
                <motion.div initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} className="aspect-[4/5] rounded-3xl overflow-hidden shadow-lg">
                  <img src="https://images.unsplash.com/photo-1552930294-6b595f4c2974?auto=format&fit=crop&q=80&w=600" alt="Detailing 1" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                </motion.div>
                <motion.div initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ delay: 0.2 }} className="aspect-[4/5] rounded-3xl overflow-hidden shadow-lg mt-12">
                  <img src="https://images.unsplash.com/photo-1601362840469-51e4d8d59085?auto=format&fit=crop&q=80&w=600" alt="Detailing 2" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                </motion.div>
             </div>
             <div>
                <h2 className="text-4xl font-bold mb-6 italic leading-tight">WE CARE <br /> ABOUT THE DETAILS</h2>
                <p className="text-slate-600 mb-8 leading-relaxed">
                  نحن نستخدم أفضل المواد والأدوات لضمان سلامة وجمال سيارتك. طاقم عمل مدرب ومحترف يضمن لك أفضل النتائج في كل مرة.
                </p>
                <div className="flex gap-4">
                  <div className="text-center p-6 bg-white rounded-3xl border border-slate-100 flex-1">
                    <h4 className="text-3xl font-black text-blue-600 mb-2">99%</h4>
                    <p className="text-xs text-slate-500 font-bold uppercase tracking-widest">رضا العملاء</p>
                  </div>
                  <div className="text-center p-6 bg-white rounded-3xl border border-slate-100 flex-1">
                    <h4 className="text-3xl font-black text-blue-600 mb-2">24/7</h4>
                    <p className="text-xs text-slate-500 font-bold uppercase tracking-widest">خدمة حجز</p>
                  </div>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-slate-950 text-white pt-20 pb-10">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-3 gap-12 mb-20">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-xl uppercase">C</div>
              <span className="text-xl font-bold tracking-tight uppercase">Car Care Kuwait</span>
            </div>
            <p className="text-slate-400 mb-8 leading-relaxed">
              المركز الأول للعناية بالسيارات في الكويت. خدمات احترافية تصلك أينما كنت.
            </p>
            <div className="flex gap-4">
              <a href="https://instagram.com/carcarekw" className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-slate-950 transition-all">
                <Instagram size={24} />
              </a>
              <a href="https://tiktok.com/@carcare.kw" className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-slate-950 transition-all">
                <Zap size={24} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-6">تواصل معنا</h4>
            <div className="space-y-4">
              <a href="tel:66113328" className="flex items-center gap-4 text-slate-400 hover:text-blue-400 transition-colors">
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center">
                  <Phone size={20} />
                </div>
                <span className="font-bold text-lg">66113328</span>
              </a>
              <a href="mailto:Carcarekw@hotmail.com" className="flex items-center gap-4 text-slate-400 hover:text-blue-400 transition-colors">
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center">
                  <Mail size={20} />
                </div>
                <span>Carcarekw@hotmail.com</span>
              </a>
              <div className="flex items-center gap-4 text-slate-400">
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center">
                  <Clock size={20} />
                </div>
                <span>يومياً: ٩ صباحاً - ٩ مساءً</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-6">روابط سريعة</h4>
            <ul className="space-y-3 text-slate-400">
              <li><a href="#services" className="hover:text-white transition-colors">الخدمات والأسعار</a></li>
              <li><a href="#offers" className="hover:text-white transition-colors">عروض التوفير</a></li>
              <li><a href="#subscription" className="hover:text-white transition-colors">الاشتراك الشهري</a></li>
              <li><a href="https://instagram.com/carcarekw" className="hover:text-white transition-colors">حساب الإنستقرام</a></li>
            </ul>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 border-t border-white/10 pt-10 text-center text-slate-500 text-sm">
          <p>© {new Date().getFullYear()} Car Care Kuwait. جميع الحقوق محفوظة.</p>
        </div>
      </footer>

      {/* Floating Call Button */}
      <motion.a 
        href="tel:66113328"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        className="fixed bottom-8 right-8 w-16 h-16 bg-green-500 text-white rounded-full flex items-center justify-center shadow-2xl shadow-green-500/40 z-[60] hover:scale-110 transition-all md:hidden"
      >
        <Phone size={28} />
      </motion.a>
    </div>
  );
}
