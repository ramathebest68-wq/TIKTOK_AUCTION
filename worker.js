import { Container, getContainer } from "@cloudflare/containers";

// Container yang menjalankan server.mjs (port 8000)
export class AuctionContainer extends Container {
  defaultPort = 8000;
  sleepAfter = "12h"; // tidur kalau 12 jam tanpa aktivitas
  enableInternet = true; // wajib, supaya bisa konek ke TikTok Live
}

export default {
  async fetch(request, env) {
    // Satu instance saja, karena session disimpan di memori server
    const container = getContainer(env.AUCTION_CONTAINER, "main");
    return container.fetch(request); // HTTP + WebSocket (Socket.IO)
  },
};
