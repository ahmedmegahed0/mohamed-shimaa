import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

const RSVPForm = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    guestsCount: 'فرد واحد',
    attendanceStatus: 'yes',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    // For native form submission, we just show a loading state 
    // and let the browser do the POST request to formsubmit.co
    setIsSubmitting(true);
  };

  return (
    <section className="py-20 px-4">
      <div className="max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-white/80 backdrop-blur-xl border border-white rounded-[3rem] p-10 md:p-16 shadow-2xl shadow-wedding-gold/20 relative overflow-hidden"
        >
          {/* Subtle decoration */}
          <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-transparent via-wedding-gold to-transparent opacity-50"></div>
          {isSubmitted ? (
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="text-center py-10"
            >
              <CheckCircle2 size={64} className="text-wedding-gold mx-auto mb-6" />
              <h3 className="text-3xl font-kufi text-wedding-charcoal mb-4">شكراً لك!</h3>
              <p className="text-xl font-amiri text-wedding-charcoal/80">
                تم استلام ردك بنجاح، نتمنى رؤيتك قريباً.
              </p>
            </motion.div>
          ) : (
            <>
              <h2 className="text-4xl font-kufi text-center text-wedding-charcoal mb-10">تأكيد الحضور</h2>
              <form action="https://formsubmit.co/mfoash287@gmail.com" method="POST" onSubmit={handleSubmit} className="space-y-6">
                {/* FormSubmit Configuration */}
                <input type="hidden" name="_subject" value="New RSVP - Wedding Invitation" />
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_next" value="https://mohamed-shimaa.vercel.app/" />

                {/* Full Name */}
                <div>
                  <label htmlFor="fullName" className="block text-lg font-kufi mb-2 text-wedding-charcoal">الاسم بالكامل</label>
                  <input
                    type="text"
                    id="fullName"
                    name="Name"
                    required
                    value={formData.fullName}
                    onChange={(e) => setFormData({...formData, fullName: e.target.value})}
                    className="w-full px-4 py-3 rounded-xl border border-wedding-gold/30 bg-wedding-bg/50 focus:outline-none focus:ring-2 focus:ring-wedding-gold/50 font-amiri text-lg transition-all"
                    placeholder="اكتب اسمك هنا..."
                  />
                </div>

                {/* Number of Guests */}
                <div>
                  <label htmlFor="guestsCount" className="block text-lg font-kufi mb-2 text-wedding-charcoal">عدد الحضور</label>
                  <select
                    id="guestsCount"
                    name="Guests"
                    value={formData.guestsCount}
                    onChange={(e) => setFormData({...formData, guestsCount: e.target.value})}
                    className="w-full px-4 py-3 rounded-xl border border-wedding-gold/30 bg-wedding-bg/50 focus:outline-none focus:ring-2 focus:ring-wedding-gold/50 font-amiri text-lg appearance-none transition-all"
                  >
                    <option value="فرد واحد">فرد واحد</option>
                    <option value="فردين">فردين</option>
                    <option value="عائلة">عائلة</option>
                  </select>
                </div>

                {/* Attendance Status */}
                <div>
                  <label className="block text-lg font-kufi mb-4 text-wedding-charcoal">حالة الحضور</label>
                  <div className="space-y-3">
                    <label className={`flex items-center p-4 border rounded-xl cursor-pointer transition-all duration-300 ${formData.attendanceStatus === 'yes' ? 'border-wedding-gold bg-wedding-gold/5' : 'border-wedding-gold/20 hover:border-wedding-gold/50'}`}>
                      <input
                        type="radio"
                        name="Attendance"
                        value="أكيد هاجي بكل حب ❤️"
                        checked={formData.attendanceStatus === 'yes'}
                        onChange={() => setFormData({...formData, attendanceStatus: 'yes'})}
                        className="hidden"
                      />
                      <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center mr-0 ml-4 ${formData.attendanceStatus === 'yes' ? 'border-wedding-gold' : 'border-gray-300'}`}>
                        {formData.attendanceStatus === 'yes' && <div className="w-3 h-3 rounded-full bg-wedding-gold" />}
                      </div>
                      <span className="font-amiri text-lg">أكيد هاجي بكل حب ❤️</span>
                    </label>

                    <label className={`flex items-center p-4 border rounded-xl cursor-pointer transition-all duration-300 ${formData.attendanceStatus === 'no' ? 'border-wedding-gold bg-wedding-gold/5' : 'border-wedding-gold/20 hover:border-wedding-gold/50'}`}>
                      <input
                        type="radio"
                        name="Attendance"
                        value="للأسف مش هقدر أجي"
                        checked={formData.attendanceStatus === 'no'}
                        onChange={() => setFormData({...formData, attendanceStatus: 'no'})}
                        className="hidden"
                      />
                      <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center mr-0 ml-4 ${formData.attendanceStatus === 'no' ? 'border-wedding-gold' : 'border-gray-300'}`}>
                        {formData.attendanceStatus === 'no' && <div className="w-3 h-3 rounded-full bg-wedding-gold" />}
                      </div>
                      <span className="font-amiri text-lg">للأسف مش هقدر أجي</span>
                    </label>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-lg font-kufi mb-2 text-wedding-charcoal">رسالة تهنئة للعروسين (اختياري)</label>
                  <textarea
                    id="message"
                    name="Message"
                    rows="4"
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className="w-full px-4 py-3 rounded-xl border border-wedding-gold/30 bg-wedding-bg/50 focus:outline-none focus:ring-2 focus:ring-wedding-gold/50 font-amiri text-lg resize-none transition-all"
                    placeholder="اكتب رسالتك الجميلة هنا..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-4 bg-wedding-gold text-white rounded-xl font-kufi text-xl shadow-lg shadow-wedding-gold/20 transition-all duration-300 ${isSubmitting ? 'opacity-75 cursor-not-allowed' : 'hover:bg-wedding-gold-dark'
                    }`}
                >
                  {isSubmitting ? 'جاري الإرسال...' : 'إرسال الرد'}
                </button>
              </form>
            </>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default RSVPForm;
