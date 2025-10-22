const express = require('express');
const multer = require('multer');
const { google } = require('googleapis');
const stream = require('stream');

const router = express.Router();

// Configure multer for file uploads (memory storage)
const upload = multer({
  storage: multer.memoryStorage(),
  limits: {
    fileSize: 10 * 1024 * 1024, // 10MB limit
  },
});

// Google Drive configuration
const SCOPES = ['https://www.googleapis.com/auth/drive.file'];

// Initialize Google Drive API with service account
function getDriveService() {
  const auth = new google.auth.GoogleAuth({
    credentials: {
      client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
      private_key: process.env.GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY?.replace(/\\n/g, '\n'),
    },
    scopes: SCOPES,
  });

  return google.drive({ version: 'v3', auth });
}

// Upload file to Google Drive
async function uploadFileToDrive(fileBuffer, fileName, mimeType, memberName) {
  const driveService = getDriveService();
  const FOLDER_ID = process.env.GOOGLE_DRIVE_FOLDER_ID;

  const fileMetadata = {
    name: `${memberName}_${fileName}`,
    parents: [FOLDER_ID],
  };

  const media = {
    mimeType: mimeType,
    body: stream.Readable.from(fileBuffer),
  };

  try {
    const file = await driveService.files.create({
      requestBody: fileMetadata,
      media: media,
      fields: 'id, webViewLink',
    });

    // Make file accessible via link
    await driveService.permissions.create({
      fileId: file.data.id,
      requestBody: {
        role: 'reader',
        type: 'anyone',
      },
    });

    return file.data.webViewLink;
  } catch (error) {
    console.error('Error uploading file to Drive:', error);
    throw error;
  }
}

// API endpoint
router.post('/upload-to-drive', upload.single('file'), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: 'No file uploaded' });
    }

    const { memberName } = req.body;
    const fileUrl = await uploadFileToDrive(
      req.file.buffer,
      req.file.originalname,
      req.file.mimetype,
      memberName || 'Unknown'
    );

    res.json({ 
      success: true, 
      fileUrl: fileUrl,
      fileName: req.file.originalname 
    });
  } catch (error) {
    console.error('Upload error:', error);
    res.status(500).json({ error: 'Failed to upload file' });
  }
});

module.exports = router;