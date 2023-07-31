type RequestConfig = {
  baseUrl: string;
  socketUrl: string;
  S3BucketName: string;
  S3BucketRegion: string;
  S3Domain: string;
  CloudFrontDomain: string;
};

let requestConfig: RequestConfig;
if (process.env.REACT_APP_ENV === 'production') {
  requestConfig = {
    baseUrl: 'https://api.dev.khelindia.co.in',
    socketUrl: '',
    S3BucketName: '',
    S3BucketRegion: 'ap-south-1',
    S3Domain: '',
    CloudFrontDomain: ''
  };
} else {
  requestConfig = {
    baseUrl: 'https://api.dev.khelindia.co.in',
    socketUrl: '',
    S3BucketName: '',
    S3BucketRegion: 'ap-south-1',
    S3Domain: '',
    CloudFrontDomain: ''
  };
}

export default requestConfig;
