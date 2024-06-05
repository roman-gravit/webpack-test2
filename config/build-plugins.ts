export { BuildPlugins };

import { Configuration } from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";

import { BuildOptions } from "./types";


function BuildPlugins(options: BuildOptions): Configuration["plugins"] {
	const isDevMode = options.mode === "development";

	// common for development and production
	const plugins: Configuration["plugins"] = [
		// In the example above, the html-webpack-plugin generates an HTML file for your application and 
		// automatically injects all your generated bundles into this file.
		new HtmlWebpackPlugin({ template: options.paths.html }),

	]

	return plugins;
}