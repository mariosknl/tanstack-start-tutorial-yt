import { firecrawl } from '@/lib/firecrawl'
import { createServerFn } from '@tanstack/react-start'

export const scrapeUrlFn = createServerFn({ method: 'POST' }).handler(
  async () => {
    const result = await firecrawl.scrape(
      'https://www.firecrawl.dev/blog/introducing-agent',
      {
        formats: ['markdown'],
        onlyMainContent: true,
      },
    )

    console.log(result)
  },
)
