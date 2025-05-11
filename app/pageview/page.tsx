"use client";

import { useState } from "react";

const initialData = [
  {
    name: "مؤسسة التقنيات الحديثة",
    date: "01/03/2020",
    activity: "تقنى",
    city: "الرياض",
  },
  {
    name: "شركة التغذية السريعة",
    date: "22/11/2019",
    activity: "تموين",
    city: "جدة",
  },
  {
    name: "مجمع العناية الطبية",
    date: "10/08/2021",
    activity: "صحى",
    city: "مكة المكرمة",
  },
  {
    name: "مكتب التطوير العقارى",
    date: "03/01/2017",
    activity: "عقارات",
    city: "المدينة المنورة",
  },
];

const uniqueValues = (data, key) => [...new Set(data.map((item) => item[key]))];

export default function DataPage() {
  const [filters, setFilters] = useState({ city: "", activity: "" });
  const cities = uniqueValues(initialData, "city");
  const activities = uniqueValues(initialData, "activity");

  const filteredData = initialData.filter((item) => {
    return (
      (filters.city === "" || item.city === filters.city) &&
      (filters.activity === "" || item.activity === filters.activity)
    );
  });

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="max-w-5xl mx-auto bg-white border-4 border-blue-500">
        <div className="p-4">
          <div className="flex justify-between items-center mb-4 text-right">
            <span className="font-bold">كل المنشآت</span>
            <span className="text-blue-600">{filteredData.length} من 200</span>
          </div>

          <div className="grid grid-cols-3 gap-2 mb-4">
            <select
              className="border p-2"
              value={filters.city}
              onChange={(e) => setFilters({ ...filters, city: e.target.value })}
            >
              <option value="">المدينة</option>
              {cities.map((city) => (
                <option key={city} value={city}>
                  {city}
                </option>
              ))}
            </select>

            <select
              className="border p-2"
              value={filters.activity}
              onChange={(e) =>
                setFilters({ ...filters, activity: e.target.value })
              }
            >
              <option value="">النشاط</option>
              {activities.map((activity) => (
                <option key={activity} value={activity}>
                  {activity}
                </option>
              ))}
            </select>

            <input type="date" className="border p-2" />
          </div>

          <div className="grid grid-cols-4 gap-4 font-bold bg-gray-200 p-2 text-right">
            <span>اسم المنشأة</span>
            <span>تاريخ الإنشاء</span>
            <span>النشاط</span>
            <span>المدينة</span>
          </div>

          {filteredData.map((entry, index) => (
            <div
              key={index}
              className="grid grid-cols-4 gap-4 border-b p-2 text-right"
            >
              <span>{entry.name}</span>
              <span>{entry.date}</span>
              <span>{entry.activity}</span>
              <span>{entry.city}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
