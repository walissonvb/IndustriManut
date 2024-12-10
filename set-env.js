import dotenv from 'dotenv';
import fs from 'fs';
import path from 'path';

// Carregar variáveis de ambiente do arquivo .env
dotenv.config();

// Caminhos para os arquivos de ambiente
const targetPathDev = path.join(process.cwd(), './src/environments/environment.ts');
const targetPathProd = path.join(process.cwd(), './src/environments/environment.prod.ts');

// Conteúdo dos arquivos de ambiente
const envConfigFileDev = `
  export const environment = {
    production: false,
    firebase: {
      apiKey: '${process.env.API_KEY}',
      authDomain: '${process.env.AUTH_DOMAIN}',
      projectId: '${process.env.PROJECT_ID}',
      storageBucket: '${process.env.STORAGE_BUCKET}',
      messagingSenderId: '${process.env.MESSAGING_SENDER_ID}',
      appId: '${process.env.APP_ID}',
      measurementId: '${process.env.MEASUREMENT_ID}'
    }
  };
`;

const envConfigFileProd = `
  export const environment = {
    production: true,
    firebase: {
      apiKey: '${process.env.API_KEY}',
      authDomain: '${process.env.AUTH_DOMAIN}',
      projectId: '${process.env.PROJECT_ID}',
      storageBucket: '${process.env.STORAGE_BUCKET}',
      messagingSenderId: '${process.env.MESSAGING_SENDER_ID}',
      appId: '${process.env.APP_ID}',
      measurementId: '${process.env.MEASUREMENT_ID}'
    }
  };
`;

// Escrever os arquivos de configuração
fs.writeFileSync(targetPathDev, envConfigFileDev, { encoding: 'utf8' });
fs.writeFileSync(targetPathProd, envConfigFileProd, { encoding: 'utf8' });

console.log(`Output generated at ${targetPathDev}`);
console.log(`Output generated at ${targetPathProd}`);
