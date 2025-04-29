"use client"
export default function FileHandler({ dataKey }) {
  const downloadData = () => {
    const data = localStorage.getItem(dataKey);
    const blob = new Blob([data], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${dataKey}.json`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const uploadData = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      try {
        const json = JSON.parse(reader.result);
        localStorage.setItem(dataKey, JSON.stringify(json));
        alert("โหลดข้อมูลสำเร็จ กรุณา refresh หน้า");
      } catch (err) {
        alert("ไฟล์ไม่ถูกต้อง");
      }
    };
    reader.readAsText(file);
  };

  return (
    <div className="mt-4 space-x-4">
      <button onClick={downloadData} className="bg-green-500 text-white px-4 py-2 rounded">ดาวน์โหลดข้อมูล</button>
      <label className="bg-yellow-400 text-white px-4 py-2 rounded cursor-pointer">
        อัปโหลดข้อมูล
        <input type="file" accept=".json" className="hidden" onChange={uploadData} />
      </label>
    </div>
  );
}
