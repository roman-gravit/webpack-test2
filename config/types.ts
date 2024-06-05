export { BuildMode, BuildOptions, BuildPaths };

type BuildMode = "production" | "development";

interface BuildPaths {
	entry: string;
	output: string;
	html: string;
}

interface BuildOptions {
	port: number;
	paths: BuildPaths;
	mode: BuildMode;
}