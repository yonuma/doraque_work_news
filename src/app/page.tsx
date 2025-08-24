import NewsList from "@/components/NewsList";

export default function Home() {
  return (
    <div>
      <h2 className="text-3xl font-bold text-gray-800 mb-6">最新ニュース</h2>
      <NewsList />
    </div>
  );
}
