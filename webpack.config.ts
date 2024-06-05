export { WebpackEnvVariables};

import webpack from "webpack";
import path from "path";
import { BuildMode, BuildPaths } from "./config/types";
import { BuildWebpack } from "./config/build-webpack";

interface WebpackEnvVariables {
	port?: number;
	mode?: BuildMode;
}

export default (env: WebpackEnvVariables) => {

	const paths: BuildPaths = {
		entry: path.resolve(__dirname, "src", "index.ts"),
		output: path.resolve(__dirname, "dist"),
		html: path.resolve(__dirname, "src", "index.html"),

	}

	const config: webpack.Configuration = BuildWebpack({ 
		paths: paths,
		port: env.port ?? 3000,
		mode: env.mode ?? "development"
	});
	return config;
}