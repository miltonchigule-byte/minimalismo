// ============================================================
// CONFIGURAÇÃO DO FIREBASE — Minimalism


export const firebaseConfig = {
  apiKey: "AIzaSyC76-Zuf-7UcG7wS04mkeUuBZKFuXg3KxU",
  authDomain: "minimalism-mz.firebaseapp.com",
  projectId: "minimalism-mz",
  storageBucket: "minimalism-mz.firebasestorage.app",
  messagingSenderId: "987845730285",
  appId: "1:987845730285:web:9224c4aada6e3d325ed1e4"
};

// Nomes de categorias usados em todo o site — se quiseres
// adicionar/remover uma categoria (ex: "Cintos"), muda só aqui.
export const CATEGORIAS = [
  { id: "vestuario", label: "Vestuário" },
  { id: "calcado", label: "Calçado" },
  { id: "relogios", label: "Relógios" },
  { id: "acessorios", label: "Acessórios" }
];

export const cloudinaryConfig = {
  cloudName: "f5i0n6ts",
  uploadPreset: "f5i0n6ts1"
};