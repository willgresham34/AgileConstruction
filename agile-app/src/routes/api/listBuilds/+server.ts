import { listFilesInFolder } from '$lib/googleDrive';

export async function GET() {
  try {
    const folderId = '16xVStoF9IBFTDSxidXMc2p_fRT-r4BaY'; 
    const files = await listFilesInFolder(folderId);

    return new Response(JSON.stringify({ files }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      });
      
  } catch (error) {
    console.error('Error fetching files:', error);
    return {
      status: 500,
      body: { error: 'Failed to retrieve files from Google Drive.' },
    };
  }
}
