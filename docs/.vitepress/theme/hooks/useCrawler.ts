import Crawler, { CrawlerRequestOptions, CrawlerRequestResponse, CreateCrawlerOptions } from 'crawler'


type UrisOrOptions =
  | string
  | readonly string[]
  | CrawlerRequestOptions
  | readonly CrawlerRequestOptions[]

export const useCrawler = (urisOrOptions: UrisOrOptions, options?: CreateCrawlerOptions) => {
  return new Promise<CrawlerRequestResponse>((resolve, reject) => {
    new Crawler({
      maxConnections: 10,
      callback: (error, res, done) => {
        if (error) {
          reject(error)
        } else {
          resolve(res)
        }
        done()
      },
      ...options,
    })
      .queue(urisOrOptions)
  })
}



