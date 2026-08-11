import NewsList from "@/components/NewsList";
import { getNews } from "@/lib/scraper";

export default async function Home() {
  const newsItems = await getNews();

  return (
    <div>
      <h2 className="text-3xl font-bold text-gray-800 mb-6">最新ニュース</h2>
      <NewsList newsItems={newsItems} />
    </div>
  );
}
