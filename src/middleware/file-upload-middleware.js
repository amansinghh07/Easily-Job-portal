import multer from 'multer';

const storageConfig = multer.diskStorage({
  destination: (req, res, cb) => {
    cb(null, "src/Assests/");
  },
  filename: (req, file, cb) => {
    const name = Date.now() + "-" + file.originalname;
    cb(null, name);
  },
});
export const uploadFile = multer({ storage: storageConfig });