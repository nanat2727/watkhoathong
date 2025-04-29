import Image from 'next/image';

export default function NewsletterGallery() {
  return (
    <div className="bg-white bg-yellow-50 p-4 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold text-blue-700 mb-4">📝 จดหมายข่าว</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {Array.from({ length: 8 }, (_, i) => (
          <div key={i} className="relative w-full h-40 rounded overflow-hidden shadow">
            <Image
              src={`/images/news/news${i + 1}.jpg`}
              alt={`จดหมายข่าว ${i + 1}`}
              fill
              className="object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
