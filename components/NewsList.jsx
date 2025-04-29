export default function NewsList() {
  return (
    <section className="mt-4">
      <h2 className="text-xl font-bold mb-2">ข่าวประชาสัมพันธ์</h2>
      {/* ดึงข่าวจาก backend มาวน loop ตรงนี้ */}
      <div className="bg-white p-4 rounded shadow">[ข่าวที่ 1]</div>
    </section>
  );
}