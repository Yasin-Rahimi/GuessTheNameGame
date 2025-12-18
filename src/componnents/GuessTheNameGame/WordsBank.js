export const words = {

  fa: {
    country: [
      "افغانستان","آلبانی","الجزیره","آندورا","آنگولا","آرژانتین","ارمنستان",
      "استرالیا","اتریش","آذربایجان","باهاما","بحرین","بنگلادش","باربادوس",
      "بلاروس","بلژیک","بلیز","بنین","بوتان","بولیوی","بوسنی","بوتساوانا",
      "برزیل","بریتانیا","بروئنی","بلغارستان","بوروندی","کامبوج","کامرون",
      "کانادا","چاد","چین","کرواسی","کوبا","قبرس","دانمارک","جیبوتی","دومینیکا",
      "اکوادور","مصر","انگلستان","اریتره","استونی","اتیوپی","فیجی","فنلاند",
      "فرانسه","گابن","گرجستان","آلمان","غنا","یونان","گرانادا","گینه","گویان",
      "هائیتی","هلند","مجارستان","ایسلند","هند","اندونزی","ایران","عراق","ایرلند",
      "ایتالیا","جامائیکا","ژاپن","اردن","قزاقستان","کنیا","کویت","لائوس","لتونی",
      "لبنان","لیبی","لیتوانی","لوکزامبورگ","ماداگاسکار","مالاوی","مالزی","مالدیو",
      "مالی","موریس","موناکو","مغولستان","مراکش","موزامبیک","میانمار","نامبیا","نپال",
      "نیکاراگوئه","نیجر","نیجریه","نروژ","عمان","پاکستان","پاناما","پرو","لهستان",
      "پرتغال","قطر","رومانی","روسیه","روآندا","سنگال","صربستان","سنگاپور","اسپانیا",
      "سودان","سوئد","سوئیس","سوریه","تایوان","تاجیکستان","تانزانیا","توگو","ترکیه",
      "اوکراین","اوروگوئه","ازبکستان","وانوآتو","واتیکان","ویتنام","زامبیا","زیمباوه"
    ].map(word => word.normalize("NFC")),

    color: [
      "قرمز","آبی","سبز","زرد","بنفش","نارنجی","صورتی","قهوه‌ای","مشکی","سفید"
    ].map(word => word.normalize("NFC")),

    sport: [
      "فوتبال","بسکتبال","تنیس","والیبال","بیسبال","فوتبال_آمریکایی","گلف",
      "شنا","دو","دوچرخه‌سواری"
    ].map(word => word.normalize("NFC")),

    fruit: [
      "سیب","موز","پرتقال","انگور","توت‌فرنگی","بلوبری","تمشک","کیوی","انبه","آناناس"
    ].map(word => word.normalize("NFC"))
  },

  en: {
    country: [
      "afghanistan","albania","algeria","andorra","angola","argentina","armenia",
      "australia","austria","azerbaijan","bahamas","bahrain","bangladesh","barbados",
      "belarus","belgium","belize","benin","bhutan","bolivia","bosnia","botswana",
      "brazil","britain","brunei","bulgaria","burundi","cambodia","cameroon","canada",
      "chad","china","croatia","cuba","cyprus","denmark","djibouti","dominica","ecuador",
      "egypt","england","eritrea","estonia","ethiopia","fiji","finland","france","gabon",
      "georgia","germany","ghana","greece","grenada","guinea","guyana","haiti","holland",
      "hungary","iceland","india","indonesia","iran","iraq","ireland","italy","jamaica",
      "japan","jordan","kazakhstan","kenya","kuwait","laos","latvia","lebanon","libya",
      "lithuania","luxembourg","madagascar","malawi","malaysia","maldives","mali","mauritius",
      "monaco","mongolia","morocco","mozambique","myanmar","namibia","nepal","nicaragua",
      "niger","nigeria","norway","oman","pakistan","panama","peru","poland","portugal","qatar",
      "romania","russia","rwanda","senegal","serbia","singapore","spain","sudan","sweden",
      "switzerland","syria","taiwan","tajikistan","tanzania","togo","turkey","ukraine",
      "uruguay","uzbekistan","vanuatu","vatican","vietnam","zambia","zimbabwe"
    ].map(word => word.normalize("NFC")),

    color: [
      "red","blue","green","yellow","purple","orange","pink","brown","black","white"
    ].map(word => word.normalize("NFC")),

    sport: [
      "soccer","basketball","tennis","volleyball","baseball","football","golf","swimming",
      "running","cycling"
    ].map(word => word.normalize("NFC")),

    fruit: [
      "apple","banana","orange","grape","strawberry","blueberry","raspberry","kiwi","mango","pineapple"
    ].map(word => word.normalize("NFC"))
  }
}
