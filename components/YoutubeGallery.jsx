import videos from "@/data/videos.json";

export default function YoutubeGallery() {
  return (
    <section>
      <h2 className="text-lm font-bold mb-6 text-center text-blue-600">คลิปยูทูป</h2>
      <div className="space-y-4">
        {videos.map((video, index) => (
          <div key={index} className="aspect-video">
            <iframe
              width="100%"
              height="100%"
              src={`https://www.youtube.com/embed/${video.youtubeId}`}
              frameBorder="0"
              allowFullScreen
              className="rounded"
            ></iframe>
          </div>
        ))}
      </div>
    </section>
  );
}