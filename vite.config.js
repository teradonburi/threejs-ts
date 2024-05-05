import { resolve } from "node:path";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
	root: "src",
	plugins: [],
	publicDir: "../public",
	build: {
		// docsフォルダに出力
		outDir: resolve(__dirname, "dist"),
		// 存在しないときはフォルダを作成する
		emptyOutDir: true,
		copyPublicDir: true,
		rollupOptions: {
			// entry pointがあるindex.htmlのパス
			input: {
				"": resolve(__dirname, "src/index.html"),
			},
			// bundle.jsを差し替えする
			output: {
				entryFileNames: 'assets/bundle.js',
			},
		},
	},
});
