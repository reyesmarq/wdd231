export class Characters {
  static #publicKey = '5deb8b42f5ee600560a9160c77c1459e';
  static #privateKey = 'b2832e6f7b2f5f3ea893fef9f6ddc569ddd2c25d';
  static #baseUrl = 'https://gateway.marvel.com/v1/public/characters';

  static #generateAuthParams() {
    const ts = Date.now();
    const hash = md5(`${ts}${this.#privateKey}${this.#publicKey}`);
    return { ts, apikey: this.#publicKey, hash };
  }

  static async getMany(args) {
    const page = args.page ?? 1;
    const limit = args.limit ?? 20;
    const offset = page === 1 ? 0 : limit * (page - 1);
    const query = args.query ?? undefined;

    try {
      const { ts, apikey, hash } = this.#generateAuthParams();
      const url = new URL(this.#baseUrl);
      const urlParams = new URLSearchParams({
        ts,
        apikey,
        hash,
        limit,
        offset,
      });
      if (query) {
        urlParams.append('nameStartsWith', query);
      }
      url.search = urlParams.toString();

      const response = await fetch(url.toString());
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      console.log('🚀 ~ data', data.data.results[0]);
      return {
        data: data.data.results,
        pagination: {
          offset: data.data.offset,
          limit: data.data.limit,
          total: data.data.total,
          count: data.data.count,
        },
      };
    } catch (error) {
      console.error('Error fetching characters:', error);
      throw error;
    }
  }

  static async getOne(id) {
    try {
      const { ts, apikey, hash } = this.#generateAuthParams();
      const url = new URL(this.#baseUrl);

      const response = await fetch(
        `${url.toString()}/${id}?ts=${ts}&apikey=${apikey}&hash=${hash}`,
      );
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      if (data.data.results.length === 0) {
        throw new Error('Character not found');
      }
      return data.data.results[0];
    } catch (error) {
      console.error('Error fetching character:', error);
      throw error;
    }
  }

  static async getComics() {}
}
