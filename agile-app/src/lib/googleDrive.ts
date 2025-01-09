import { google } from 'googleapis';
import * as path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Path to the service account credentials JSON file
const KEY_FILE_PATH = path.join(__dirname, '../../weighty-forest-447119-f7-0ad08ab95ab1.json'); 
const SCOPES = ['https://www.googleapis.com/auth/drive.readonly'];

async function authenticate() {
  const auth = new google.auth.GoogleAuth({
    keyFile: KEY_FILE_PATH,
    scopes: SCOPES, 
  });
  const authClient = await auth.getClient();
  return google.drive({ version: 'v3', auth: authClient });
}

export async function listFilesInFolder(folderId: string) {
  const drive = await authenticate();

  // List files in the specified folder
  const res = await drive.files.list({
    q: `'${folderId}' in parents and mimeType contains 'image/' and trashed = false`,
    fields: 'files(id, name, mimeType, webViewLink, webContentLink)',
  });

  return res.data.files || [];
}
