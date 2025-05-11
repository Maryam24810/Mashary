//import Header from "./components/header";
export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/*to add the header for your page */}

      <main className="container mx-auto py-12 px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-blue-800 mb-4">مؤشري</h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            نسخر مواردنا لتقديم خدمات تحليل وعرض البيانات الاحصائية لجميع
            المنشآت داخل المملكة العربية السعودية.
          </p>
        </div>

        <div className="bg-white p-8 rounded-lg shadow-md max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="text-center">
              <h2 className="text-2xl font-semibold text-gray-800 mb-6">
                عدد المنشآت المستفيدة من خدماتنا
              </h2>
              <div className="flex justify-center">
                <span className="text-4xl font-bold text-blue-600">165</span>
              </div>
            </div>

            <div className="text-center">
              <h2 className="text-2xl font-semibold text-gray-800 mb-6">
                أكثر المدن نشاطًا
              </h2>
              <div className="flex flex-col items-center space-y-2">
                <span className="text-4xl font-bold text-blue-600 mb-[100px]">
                  الرياض
                </span>
              </div>
            </div>
          </div>
          <div className="flex justify-center space-x-4 space-x-reverse gap-4 mb-6 md:gap-6">
            <button className="bg-blue-200 text-black px-6 py-2 rounded-lg hover:bg-blue-500 transition">
              استعراض البيانات
            </button>
            <button className="bg-blue-200 text-black px-6 py-2 rounded-lg hover:bg-blue-500 transition">
              ارفع بياناتك الآن
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
