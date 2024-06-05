export { BuildWebpack };

import webpack from "webpack";
import { BuildOptions } from "./types";
import { BuildLoaders } from "./build-loaders";
import { BuildPlugins } from "./build-plugins";

function BuildWebpack(options: BuildOptions): webpack.Configuration {

	const { mode, paths } = options;
	const isDevMode = mode === "development";

	return {

		//  Enable production optimizations or development hints.
		mode: mode ?? "development",

		//  The entry point(s) of the compilation.
		entry: paths.entry,

		// Options affecting the output of the compilation. `output` options tell webpack how to write the compiled files to disk.
		output: {
			path: paths.output,
			filename: "[name].js",
			clean: true
		},

		target: "web",
		
		devtool: isDevMode
			? "inline-source-map"
			: "source-map",

		// Options affecting the normal modules (`NormalModuleFactory`).
		module: {
			rules: BuildLoaders(options),
		},
	
		resolve: {
			extensions: [".tsx", ".ts", ".js"]
		},

		// Add additional plugins to the compiler.
		plugins: BuildPlugins(options)

	}

}