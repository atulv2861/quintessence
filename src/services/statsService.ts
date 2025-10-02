interface StatsResponse {
  total_blogs: number;
  total_projects: number;
  total_openings: number;
  total_users: number;
}

class StatsService {
  private API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

  async getStats(token: string): Promise<StatsResponse> {
    try {
      const response = await fetch(`${this.API_BASE_URL}/auth/stats`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        if (response.status === 401) {
          throw new Error('Authentication failed. Please login again.');
        }
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();
      return result;
    } catch (error) {
      console.error('Error fetching stats:', error);
      throw error;
    }
  }
}

export default new StatsService();
