"use client";
import { useState } from "react";

export default function Adddata() {
  const [file, setFile] = useState<File | null>(null);
  const [successMessage, setSuccessMessage] = useState("");
  // Initialize with default options
  const [cityOptions] = useState<string[]>([
    "الرياض",
    "جدة",
    "مكة المكرمة",
    "ينبع",
    "المدينة المنورة",
  ]);
  const [activityOptions] = useState<string[]>([
    "تقني",
    "صناعي",
    "صحي",
    "عقارات",
    "تموين",
  ]);
  const [selectedCity, setSelectedCity] = useState("");
  const [selectedActivity, setSelectedActivity] = useState("");

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) setFile(e.target.files[0]);
  };

  const handleUpload = () => {
    if (!file) {
      setSuccessMessage("يرجى اختيار ملف للرفع");
      return;
    }
    if (!selectedCity || !selectedActivity) {
      setSuccessMessage("يرجى اختيار المدينة والنشاط");
      return;
    }
    setSuccessMessage("تم بنجاح!");
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-md p-8 max-w-md w-full">
        <h1 className="text-2xl font-bold text-center mb-6">رفع البيانات</h1>
        <p className="text-center mb-4">ارفع بيانات منشأتك هنا</p>

        <div className="mb-4">
          <label className="block mb-2 text-sm font-medium text-gray-700">
            اختر ملف البيانات
          </label>
          <input
            type="file"
            accept=".csv, .xlsx"
            onChange={handleFileChange}
            className="border rounded-lg p-2 w-full"
          />
          {file && (
            <p className="mt-2 text-sm text-gray-600">
              الملف المحدد: {file.name}
            </p>
          )}
        </div>

        <div className="mb-4">
          <label className="block mb-2 text-sm font-medium text-gray-700">
            المدينة
          </label>
          <select
            value={selectedCity}
            onChange={(e) => setSelectedCity(e.target.value)}
            className="border rounded-lg p-2 w-full"
          >
            <option value="">اختر المدينة</option>
            {cityOptions.map((city) => (
              <option key={city} value={city}>
                {city}
              </option>
            ))}
          </select>
        </div>

        <div className="mb-6">
          <label className="block mb-2 text-sm font-medium text-gray-700">
            النشاط
          </label>
          <select
            value={selectedActivity}
            onChange={(e) => setSelectedActivity(e.target.value)}
            className="border rounded-lg p-2 w-full"
          >
            <option value="">اختر النشاط</option>
            {activityOptions.map((activity) => (
              <option key={activity} value={activity}>
                {activity}
              </option>
            ))}
          </select>
        </div>

        <button
          onClick={handleUpload}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition w-full"
        >
          رفع
        </button>

        {successMessage && (
          <p
            className={`mt-4 text-center ${
              successMessage.includes("نجاح")
                ? "text-green-600"
                : "text-red-600"
            }`}
          >
            {successMessage}
          </p>
        )}
      </div>
    </div>
  );
}
