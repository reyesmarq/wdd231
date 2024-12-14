export class Characters {
  static #publicKey = '5deb8b42f5ee600560a9160c77c1459e';
  static #privateKey = 'b2832e6f7b2f5f3ea893fef9f6ddc569ddd2c25d';
  static #baseUrl = 'https://gateway.marvel.com/v1/public/characters';

  /**
   * Generate the authentication hash for the Marvel API.
   * @returns {Object} - An object containing ts, apikey, and hash.
   */
  static #generateAuthParams() {
    const ts = Date.now();
    const hash = md5(`${ts}${this.#privateKey}${this.#publicKey}`);
    return { ts, apikey: this.#publicKey, hash };
  }

  /**
   * Fetch multiple characters with pagination support.
   * @param {number} limit - The number of results per page (default: 20).
   * @param {number} offset - The offset for pagination (default: 0).
   * @returns {Promise<Object>} - The API response data.
   */
  static async getMany(limit = 20, offset = 0) {
    try {
      const { ts, apikey, hash } = this.#generateAuthParams();
      const url = `${this.#baseUrl}?ts=${ts}&apikey=${apikey}&hash=${hash}&limit=${limit}&offset=${offset}`;

      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching characters:', error);
      throw error;
    }
  }
}
