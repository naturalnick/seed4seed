import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	resolve: {
		alias: {
			src: "/src",
			components: "/src/components",
			hooks: "/src/hooks",
			services: "/src/services",
		},
	},
});
