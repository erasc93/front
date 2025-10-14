
const PROXY_CONFIG = [
  {
    context: ['/api'],  // Chemin que vous souhaitez rediriger
    target: 'https://localhost:7003',  // URL de l'API ou du back-end
    secure: false,  // Si votre back-end n'a pas de certificat SSL
    changeOrigin: true,
    logLevel:'debug'
  }
];

module.exports = PROXY_CONFIG;