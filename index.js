function isPalindrome(word) {
  // عكس السلسلة النصية ومقارنتها مع السلسلة الأصلية
  return word === word.split("").reverse().join("");
}

/* 
  خوارزمية الحل:
  - قم بتحويل السلسلة النصية إلى مصفوفة باستخدام split().
  - قم بعكس ترتيب عناصر المصفوفة باستخدام reverse().
  - قم بإعادة تجميع المصفوفة في سلسلة نصية باستخدام join().
  - إذا كانت السلسلة النصية الأصلية تساوي السلسلة النصية المعكوسة، أعد true.
  - إذا لم تكن متساوية، أعد false.
*/

/*
  تفسير الحل:
  الهدف هو التحقق مما إذا كانت السلسلة النصية قابلة للانعكاس (Palindrome).
  نعكس السلسلة النصية ثم نقارنها بالسلسلة الأصلية.
  إذا كانت السلسلة المعكوسة هي نفسها الأصلية، فإن السلسلة قابلة للانعكاس ونعود بقيمة true.
  خلاف ذلك، نعود بقيمة false.
*/

// يمكنك تشغيل 'node index.js' لاختبار الحل مع حالات الاختبار التالية
if (require.main === module) {
  // اختبارات للتحقق من صحة الدالة
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("mom"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("abba"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("hi"));
}

module.exports = isPalindrome;
