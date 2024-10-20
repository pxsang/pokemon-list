import { useEffect, useState } from "react";

export const useCache = <T>(url: string) => {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const cacheName = "pokemon-cache";
      const cache = await caches.open(cacheName);
      const cachedResponse = await cache.match(url);

      if (cachedResponse) {
        const detail = await cachedResponse.json();
        setData(detail);
      } else {
        const res = await fetch(url, { cache: "force-cache" });
        const detail = await res.json();
        setData(detail);
        cache.put(url, new Response(JSON.stringify(detail)));
      }
      setLoading(false);
    }

    fetchData();
  }, [url]);

  return { data, loading };
};
