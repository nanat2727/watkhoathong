'use client';

import { useState } from 'react';
import Link from 'next/link';
import { FileText, Download, Info, Home, Loader2 } from 'lucide-react';
import { Toaster, toast } from 'react-hot-toast'; // 🔥 เพิ่มตรงนี้

export default function DocumentPage() {
  const documents = [
    { title: 'ปฏิทินการศึกษา 2568', fileUrl: '/documents/academic-calendar-2568.pdf', updatedAt: '2025-04-25' },
    { title: 'ใบสมัครเรียน ปีการศึกษา 2568', fileUrl: '/documents/application-form-2568.pdf', updatedAt: '2025-04-20' },
    { title: 'ระเบียบการแต่งกาย', fileUrl: '/documents/dress-code.pdf', updatedAt: '2025-04-15' },
    { title: 'คู่มือผู้ปกครอง', fileUrl: '/documents/parent-handbook.pdf', updatedAt: '2025-04-10' },
  ];

  const sortedDocuments = documents.sort((a, b) => new Date(b.updatedAt) - new Date(a.updatedAt));

  return (
    <div className="min-h-screen flex items-center justify-center bg-cover bg-center p-6"
         style={{ backgroundImage: "url('/school-bg.png')" }}>
      {/* Toaster ตัวกลางไว้แสดง toast ทั้งหมด */}
      <Toaster position="top-right" reverseOrder={false} />

      <div className="max-w-5xl mx-auto px-2 py-12">
        {/* หัวข้อและปุ่มกลับหน้าแรก */}
        <div className="flex items-center justify-between mb-6">
          <div className="border-2 border-blue-500 rounded-xl px-6 py-2 bg-white shadow-md">
            <h1 className="text-3xl font-bold text-blue-800">ดาวน์โหลดเอกสาร</h1>
          </div>
          <Link href="/" className="inline-flex items-center space-x-2 bg-yellow-400 hover:bg-yellow-500 text-blue-900 font-semibold px-4 py-2 rounded-lg transition-all">
            <Home size={20} />
            <span>กลับหน้าแรก</span>
          </Link>
        </div>

        {/* กล่องข้อความเพิ่มเติม */}
        <div className="bg-blue-50 border border-blue-300 rounded-lg p-4 mb-10 flex items-start space-x-3">
          <Info size={28} className="text-blue-600 mt-1" />
          <div>
            <p className="text-blue-800 font-semibold text-lg">เอกสารสำคัญสำหรับนักเรียนและผู้ปกครอง</p>
            <p className="text-gray-700 text-sm mt-1">
              กรุณาดาวน์โหลดเอกสารที่เกี่ยวข้อง เช่น ปฏิทินการศึกษา, ใบสมัครเรียน, ระเบียบการแต่งกาย และคู่มือผู้ปกครอง
            </p>
          </div>
        </div>

        {/* ตารางเอกสาร */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {sortedDocuments.map((doc, index) => (
            <div key={index} className="bg-white rounded-xl shadow-md border border-blue-300 hover:border-blue-500 p-6 flex flex-col justify-between transition-all">
              <div className="flex items-center space-x-4 mb-4">
                <FileText className="text-blue-500" size={36} />
                <div>
                  <p className="font-semibold text-gray-800">{doc.title}</p>
                  <p className="text-sm text-gray-500">อัปเดตล่าสุด: {new Date(doc.updatedAt).toLocaleDateString('th-TH')}</p>
                </div>
              </div>
              <DownloadButton fileUrl={doc.fileUrl} fileName={doc.title + ".pdf"} />
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}

// ฟังก์ชันปุ่มดาวน์โหลดไฟล์
function DownloadButton({ fileUrl, fileName }) {
  const [loading, setLoading] = useState(false);

  const handleDownload = async () => {
    setLoading(true);
    const loadingToast = toast.loading('กำลังดาวน์โหลด...'); // 🔥 Toast loading

    try {
      const response = await fetch(fileName);
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);

      const a = document.createElement('a');
      a.href = url;
      a.download = fileName;
      document.body.appendChild(a);
      a.click();
      a.remove();

      window.URL.revokeObjectURL(url);

      toast.success('ดาวน์โหลดสำเร็จ! 🎉'); // 🔥 Toast success
    } catch (error) {
      console.error('เกิดข้อผิดพลาดในการดาวน์โหลดไฟล์', error);
      toast.error('ดาวน์โหลดล้มเหลว! 😢'); // 🔥 Toast error
    } finally {
      setLoading(false);
      toast.dismiss(loadingToast); // 🔥 ปิด Toast loading ตอนจบ
    }
  };

  return (
    <button
      onClick={handleDownload}
      className="w-full bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-all flex items-center justify-center space-x-2"
      disabled={loading}
    >
      {loading ? <Loader2 size={20} className="animate-spin" /> : <Download size={20} />}
      <span>{loading ? "กำลังดาวน์โหลด..." : "ดาวน์โหลด"}</span>
    </button>
  );
}
