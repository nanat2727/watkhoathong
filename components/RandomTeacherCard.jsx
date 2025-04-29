import Image from 'next/image';

export default function RandomTeacherCard() {
  return (
    <div className="bg-white rounded-lg shadow-md p-2 border border-blue-300">
      <h3 className="text-lg font-bold text-blue-700 text-center">👨‍🏫 คณะครูและบุคลากร</h3>
      <Image
        src={`/teachers/teacher${Math.floor(Math.random() * 5) + 1}.jpg`}
        alt="ครู"
        width={200}
        height={150}
        className="rounded-md mt-2 mx-auto"
      />
    </div>
  );
}
