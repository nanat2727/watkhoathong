// src/app/grades/page.jsx
export default function GradesPage() {
    return (
      <div
        className="min-h-screen bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: "url('/school-bg.png')" }}
      >
        <div className="bg-white bg-opacity-80 p-10 rounded-xl shadow-xl text-center max-w-2xl">
          <h1 className="text-3xl font-bold text-blue-700 mb-4">ผลการเรียน</h1>
          <p className="text-yellow-600 mb-6">ตรวจสอบผลการเรียนของนักเรียนแต่ละคนได้ที่นี่</p>
          
          {/* ตัวอย่างตารางผลการเรียน */}
          <table className="w-full text-left border border-gray-300 bg-white rounded-md overflow-hidden">
            <thead className="bg-blue-100 text-blue-900">
              <tr>
                <th className="p-2">ชื่อนักเรียน</th>
                <th className="p-2">วิชา</th>
                <th className="p-2">คะแนน</th>
                <th className="p-2">เกรด</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t">
                <td className="p-2">สมชาย ใจดี</td>
                <td className="p-2">คณิตศาสตร์</td>
                <td className="p-2">85</td>
                <td className="p-2">A</td>
              </tr>
              <tr className="border-t bg-yellow-50">
                <td className="p-2">สมหญิง แสนสวย</td>
                <td className="p-2">วิทยาศาสตร์</td>
                <td className="p-2">78</td>
                <td className="p-2">B+</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
  