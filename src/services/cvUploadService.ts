interface CvUploadResponse {
  status: string;
  message: string;
}

interface CvUploadData {
  full_name: string;
  email: string;
  phone: string;
  files: File;
}

class CvUploadService {
  private API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

  async uploadCv(cvData: CvUploadData): Promise<CvUploadResponse> {
    try {
      const formData = new FormData();
      formData.append('full_name', cvData.full_name);
      formData.append('email', cvData.email);
      formData.append('phone', cvData.phone);
      formData.append('files', cvData.files);

      const response = await fetch(`${this.API_BASE_URL}/send/cv`, {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();
      return result;
    } catch (error) {
      console.error('Error uploading CV:', error);
      throw error;
    }
  }
}

export default new CvUploadService();
