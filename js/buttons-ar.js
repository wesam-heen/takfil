// for select text by click button
const button1 = document.getElementById("button1");
const button2 = document.getElementById("button2");
const button3 = document.getElementById("button3");
const button4 = document.getElementById("button4");
const button5 = document.getElementById("button5");
const output = document.getElementById("output");

button1.addEventListener("click", () => {
  output.innerHTML = `<p >خدمات تصديق الشهادات</p>
  <p>خدمات تصديق الفواتير التجارية</p>
  <p>خدمات تصديق البيان العائلي</p>
  <p>خدمات تصديق عقود الزواج</p>
  <p style="color: #888">من وزارة الخارجية الإماراتية</p>`;
});

button2.addEventListener("click", () => {
  output.innerHTML = `
  <p>
  انشاء شركات فى المنطقة الحرة
  </p>
  <p>تأسيس شركات خارجية </p>
  <p>تجهيز الحسابات البنكية</p>
  <p>توفير كفيل مواطن و وكيل خدمات</p>
  <p>
  اصدار الرخص التجارية
  </p>
  <p>تجديد الرخص التجارية</p>
  <p style="color: #888">جميع خدمات وزارة العمل</p>
  <p style="color: #888">جميع المعاملات بوزارة الهجرة و الجنسية</p>
  <p></p>
  
  `;
});

button3.addEventListener("click", () => {
  output.innerHTML = `
  <p>طباعة الكشف الطبي</p>
  <p>طباعه الهوية الاماراتية</p>
  <p>طباعه عقود التأسيس </p>
  <p>طباعه معاملات الهجرة والجنسية</p>
  <p>طباعة معاملات العمل والعمال</p>
  `;
});
button4.addEventListener("click", () => {
  output.innerHTML = `
  <p>ضريبة القيمة المضافة </p>
  <p>سجيل علامات تجارية</p>
  <p>
  تسجيل منتجات    
  </p>
  <p>خدمات الإسترحام</p>
  `;
});
button5.addEventListener("click", () => {
  output.innerHTML = `
  نتخصص في إنجاز المعاملات والإجراءات الخاصة برجال الأعمال والشركات لنسهل على عملائنا تخليص 
  كافة الإجراءات المرتبطة بالشركات ورجال الأعمال مع الجهات المختلفة منها الحكومية والخاصة
  تشتمل خدمات تخليص المعاملات  تجديد الرخص التجارية وتجديد الإقامات وفتح الملفات في الجوازات وكذلك متابعة معاملات وزارة العمل و الهجرة و الجوازات أيضاً كافة الإستشارات الإستثمارية في جميع المجالات الإقتصادية، من خلال أفضل الكوادر في هذا المجال.
  
  `;
});

let buttons = document.querySelectorAll(".our-services .buttons button");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    buttons.forEach((button) => {
      button.classList.remove("active");
    });
    button.classList.add("active");
  });
});
