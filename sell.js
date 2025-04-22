// الحصول على معلومات الكتاب من URL
const urlParams = new URLSearchParams(window.location.search);
const bookId = urlParams.get('book');

// هنا يمكنك استخدام bookId لتحميل معلومات الكتاب من قاعدة بيانات أو API
// سأقوم بتعيين معلومات افتراضية للكتاب بناءً على bookId
let bookTitle, bookDescription, bookPrice, bookImage;

switch (bookId) {
    case '1':
        bookTitle = 'عنوان الكتاب 1';
        bookDescription = 'وصف الكتاب 1 هنا.';
        bookPrice = '100.00 ر.س';
        bookImage = 'https://via.placeholder.com/150';
        break;
    case '2':
        bookTitle = 'عنوان الكتاب 2';
        bookDescription = 'وصف الكتاب 2 هنا.';
        bookPrice = '150.00 ر.س';
        bookImage = 'https://via.placeholder.com/150';
        break;
    case '3':
        bookTitle = 'عنوان الكتاب 3';
        bookDescription =
}