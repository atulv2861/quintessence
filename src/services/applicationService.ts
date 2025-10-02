interface ApplicationData {
  apply_for_available_jobs: boolean;
  selected_job_id?: string;
  title: string;
  first_name: string;
  surname: string;
  phone_number: string;
  email: string;
  street_address: string;
  street_address_line2?: string;
  city: string;
  state_province: string;
  postal_zip_code: string;
  highest_education: string;
  total_experience_years: string;
  current_last_employer: string;
  current_last_designation: string;
  cv_filename: string;
  cv_data: string;
  cv_size: string;
}

interface ApplicationResponse {
  id: string;
  apply_for_available_jobs: boolean;
  selected_job_id?: string;
  title: string;
  first_name: string;
  surname: string;
  phone_number: string;
  email: string;
  street_address: string;
  street_address_line2?: string;
  city: string;
  state_province: string;
  postal_zip_code: string;
  highest_education: string;
  total_experience_years: string;
  current_last_employer: string;
  current_last_designation: string;
  cv_filename: string;
  cv_data: string;
  cv_size: string;
  status: string;
  created_at: string;
  updated_at: string;
}

interface ApplicationsListResponse {
  applications: ApplicationResponse[];
  total: number;
  page: number;
  limit: number;
}

class ApplicationService {
  private API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

  async submitApplication(applicationData: ApplicationData): Promise<ApplicationResponse> {
    try {
      const response = await fetch(`${this.API_BASE_URL}/jobs/applications/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(applicationData),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();
      return result;
    } catch (error) {
      console.error('Error submitting application:', error);
      throw error;
    }
  }

  async getApplications(page: number = 1, limit: number = 10, token?: string): Promise<ApplicationsListResponse> {
    try {
      const headers: HeadersInit = {
        'Content-Type': 'application/json',
      };

      if (token) {
        headers['Authorization'] = `Bearer ${token}`;
      } else {
        throw new Error('Authentication token is required to fetch applications');
      }

      const response = await fetch(`${this.API_BASE_URL}/jobs/applications/?page=${page}&limit=${limit}`, {
        method: 'GET',
        headers,
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
      console.error('Error fetching applications:', error);
      throw error;
    }
  }

  // Helper method to convert file to base64
  async fileToBase64(file: File): Promise<string> {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        const result = reader.result as string;
        // Remove the data URL prefix (e.g., "data:application/pdf;base64,")
        const base64 = result.split(',')[1];
        resolve(base64);
      };
      reader.onerror = error => reject(error);
    });
  }
}

export default new ApplicationService();
